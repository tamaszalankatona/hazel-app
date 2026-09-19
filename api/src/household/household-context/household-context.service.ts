import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { eq, and } from 'drizzle-orm';
import { householdMembers } from 'src/db/schema/household-members';
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
}
