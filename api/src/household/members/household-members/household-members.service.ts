import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import { HOUSEHOLD_MEMBER_ROLES_MODEL } from 'src/db/schema/household-member-role';
import {
  householdMembers,
  HouseholdMembersModel,
} from 'src/db/schema/household-members';
import { DATABASE, type Database } from 'src/drizzle.provider';
import { HouseholdContextService } from 'src/household/household-context/household-context.service';

@Injectable()
export class HouseholdMembersService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,

    private readonly householdContextService: HouseholdContextService,
  ) {}

  // add member
  async addMember(
    householdId: string,
    userId: string,
    role: HOUSEHOLD_MEMBER_ROLES_MODEL,
  ): Promise<HouseholdMembersModel> {
    const [member] = await this.db
      .insert(householdMembers)
      .values({
        householdId,
        userId,
        role,
      })
      .onConflictDoNothing({
        target: [householdMembers.householdId, householdMembers.userId],
      })
      .returning();

    if (!member) {
      throw new ConflictException('User is already a member of this household');
    }

    return member;
  }

  // list all members of the active household
  async listAllMembers(userId: string): Promise<HouseholdMembersModel[]> {
    const activeHouseholdId =
      await this.householdContextService.getActiveHousehold(userId);

    if (!activeHouseholdId)
      throw new ConflictException('No active household selected');

    const members = await this.db.query.householdMembers.findMany({
      where: eq(householdMembers.householdId, activeHouseholdId),
    });

    return members;
  }

  // delete a member of the active household by id
  async deleteMemberFromHouseholdById(
    userId: string,
    memberId: string,
  ): Promise<{ message: string }> {
    // # Todo: Check if the deleted user is the last ADMIN

    const activeHouseholdId =
      await this.householdContextService.getActiveHousehold(userId);

    if (!activeHouseholdId)
      throw new ConflictException('No active household selected');

    const [deletedMember] = await this.db
      .delete(householdMembers)
      .where(
        and(
          eq(householdMembers.id, memberId),
          eq(householdMembers.householdId, activeHouseholdId),
        ),
      )
      .returning({
        id: householdMembers.id,
      });

    if (!deletedMember) {
      throw new NotFoundException('Household member not found.');
    }

    return {
      message: 'Household member removed successfully.',
    };
  }

  // change member role
  async changeMemberRole(
    userId: string,
    memberId: string,
    role: HOUSEHOLD_MEMBER_ROLES_MODEL,
  ): Promise<{ message: string }> {
    // # Todo: Check if the user who changes the role is an ADMIN - do it in a guard

    const activeHouseholdId =
      await this.householdContextService.getActiveHousehold(userId);

    const [updatedMember] = await this.db
      .update(householdMembers)
      .set({
        role,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(householdMembers.id, memberId),
          eq(householdMembers.householdId, activeHouseholdId),
        ),
      )
      .returning({
        id: householdMembers.id,
      });

    if (!updatedMember) {
      throw new NotFoundException(
        'Household member not found in the active household.',
      );
    }

    return {
      message: 'Household member role updated successfully.',
    };
  }
}
