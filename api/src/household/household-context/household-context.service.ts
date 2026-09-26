import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { eq, and } from 'drizzle-orm';
import { householdMembers } from 'src/db/schema/household-members';
import { households } from 'src/db/schema/households';
import { users } from 'src/db/schema/user';
import { DATABASE, type Database } from 'src/drizzle.provider';

/* Prevents users from modifying households they are not members of or that are not their active household. */

@Injectable()
export class HouseholdContextService {
  constructor(
    @Inject(DATABASE)
    private readonly db: Database,
  ) {}

  async getActiveHousehold(userId: string): Promise<string> {
    const [user] = await this.db
      .select({
        activeHouseholdId: users.activeHouseholdId,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!user?.activeHouseholdId) {
      throw new BadRequestException('No active household selected.');
    }

    const [membership] = await this.db
      .select({
        id: householdMembers.id,
      })
      .from(householdMembers)
      .where(
        and(
          eq(householdMembers.userId, userId),
          eq(householdMembers.householdId, user.activeHouseholdId),
        ),
      )
      .limit(1);

    if (!membership) {
      throw new ForbiddenException(
        'You are not a member of the active household.',
      );
    }

    return user.activeHouseholdId;
  }

  async getActiveHouseholdName(userId: string): Promise<string> {
    const householdId = await this.getActiveHousehold(userId);

    const [household] = await this.db
      .select({
        name: households.name,
      })
      .from(households)
      .where(eq(households.id, householdId))
      .limit(1);

    if (!household) {
      throw new NotFoundException('Active household not found.');
    }

    return household.name;
  }
}
