import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { DATABASE, type Database } from 'src/drizzle.provider';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { eq, and } from 'drizzle-orm';
import { HouseholdModel, households } from 'src/db/schema/households';
import { householdMembers } from 'src/db/schema/household-members';
import { users } from 'src/db/schema/user';
import { HOUSEHOLD_MEMBER_ROLES } from 'src/constants/household-member-roles.enums';

@Injectable()
export class HouseholdService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,
  ) {}

  // create
  async createHousehold(
    userId: string,
    createHouseholdDto: CreateHouseholdDto,
  ): Promise<HouseholdModel> {
    // check if household exists with same name that belongs to the user
    const existingHousehold = await this.db
      .select({
        id: households.id,
        name: households.name,
      })
      .from(householdMembers)
      .innerJoin(households, eq(householdMembers.householdId, households.id))
      .where(
        and(
          eq(householdMembers.userId, userId),
          eq(households.name, createHouseholdDto.name),
        ),
      )
      .limit(1);

    if (existingHousehold.length > 1) {
      throw new ConflictException(
        'You already belong to a household with this name.',
      );
    }

    // populate db
    return this.db.transaction(async (tx) => {
      const [household] = await tx
        .insert(households)
        .values({
          name: createHouseholdDto.name,
          timezone: createHouseholdDto.timezone,
        })
        .returning();

      await tx.insert(householdMembers).values({
        householdId: household.id,
        userId,
        role: HOUSEHOLD_MEMBER_ROLES.ADMIN,
        timezone: createHouseholdDto.timezone,
      });

      return household;
    });
  }

  // update active household
  async updateActiveHousehold(
    userId: string,
    householdId: string,
  ): Promise<void> {
    const membership = await this.db
      .select({
        id: householdMembers.id,
      })
      .from(householdMembers)
      .where(
        and(
          eq(householdMembers.userId, userId),
          eq(householdMembers.householdId, householdId),
        ),
      )
      .limit(1);

    if (membership.length === 0)
      throw new ForbiddenException('You are not a member of this household.');

    await this.db
      .update(users)
      .set({ activeHouseholdId: householdId })
      .where(eq(users.id, userId));
  }
}
