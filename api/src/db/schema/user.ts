import { pgTable, uuid, timestamp, varchar, text } from 'drizzle-orm/pg-core';
import { households } from './households';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 32 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  avatarUrl: text('avatarUrl'),
  timezone: varchar('timezone', { length: 64 }).notNull(),
  locale: varchar('locale', { length: 16 }).default('hu-HU').notNull(),
  activeHouseholdId: uuid('active_household_id').references(
    () => households.id,
    { onDelete: 'set null' },
  ),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
