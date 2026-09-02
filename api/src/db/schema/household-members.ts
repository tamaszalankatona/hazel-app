import {
  pgEnum,
  pgTable,
  timestamp,
  unique,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { households } from './households';
import { users } from './user';

export const householdMemberRole = pgEnum('household_member_role', [
  'ADMIN',
  'ADULT',
  'CHILD',
]);

export const householdMembers = pgTable(
  'household_members',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    householdId: uuid('householdId_id')
      .notNull()
      .references(() => households.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    role: householdMemberRole('role').notNull().default('ADULT'),
    timezone: varchar('timezone', {
      length: 64,
    })
      .notNull()
      .default('Europe/Budapest'),
    joinedAt: timestamp('joined_at', {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    createdAt: timestamp('deleted_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique('household_members_household_user_unique').on(
      table.householdId,
      table.userId,
    ),
  ],
);
