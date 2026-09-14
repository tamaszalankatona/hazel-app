import { relations } from 'drizzle-orm';
import { households } from './households';
import { householdMembers } from './household-members';

export const householdMembersRelations = relations(
  householdMembers,
  ({ one }) => ({
    household: one(households, {
      fields: [householdMembers.householdId],
      references: [households.id],
    }),
  }),
);

export const householdsRelations = relations(households, ({ many }) => ({
  members: many(householdMembers),
}));
