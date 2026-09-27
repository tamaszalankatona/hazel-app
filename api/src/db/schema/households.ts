import { InferSelectModel } from 'drizzle-orm';
import {
  index,
  pgTable,
  timestamp,
  unique,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { users } from './user';
import { householdMemberRole } from './household-member-role';

export const households = pgTable('households', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 64 }).notNull(),
  timezone: varchar('timezone', {
    length: 64,
  })
    .notNull()
    .default('Europe/Budapest'),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }).defaultNow(),
});

export const householdInvitations = pgTable(
  'household_invitations',
  {
    id: uuid('id').defaultRandom().primaryKey(),

    householdId: uuid('household_id')
      .notNull()
      .references(() => households.id, {
        onDelete: 'cascade',
      }),

    email: varchar('email', {
      length: 255,
    }).notNull(),

    tokenHash: varchar('token_hash', {
      length: 255,
    })
      .notNull()
      .unique(),

    role: householdMemberRole('role').notNull().default('ADULT'),

    expiresAt: timestamp('expires_at', {
      withTimezone: true,
    }).notNull(),

    acceptedAt: timestamp('accepted_at', {
      withTimezone: true,
    }),

    createdAt: timestamp('created_at', {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),

    invitedBy: uuid('invited_by')
      .notNull()
      .references(() => users.id, {
        onDelete: 'restrict',
      }),
  },
  (table) => [
    index('household_invitations_household_id_idx').on(table.householdId),

    index('household_invitations_email_idx').on(table.email),
  ],
);

export type HouseholdModel = InferSelectModel<typeof households>;
