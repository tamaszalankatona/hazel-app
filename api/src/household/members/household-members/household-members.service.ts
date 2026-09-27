import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { HOUSEHOLD_MEMBER_ROLES_MODEL } from 'src/db/schema/household-member-role';
import {
  householdMembers,
  HouseholdMembersModel,
} from 'src/db/schema/household-members';
import { DATABASE, type Database } from 'src/drizzle.provider';

@Injectable()
export class HouseholdMembersService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,
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
}
