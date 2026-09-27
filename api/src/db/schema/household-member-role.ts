import { InferSelectModel } from 'drizzle-orm';
import { pgEnum } from 'drizzle-orm/pg-core';

export const HOUSEHOLD_MEMBER_ROLES = {
  ADMIN: 'ADMIN',
  ADULT: 'ADULT',
  CHILD: 'CHILD',
} as const;

export const householdMemberRole = pgEnum('household_member_role', [
  'ADMIN',
  'ADULT',
  'CHILD',
]);

export type HOUSEHOLD_MEMBER_ROLES_MODEL =
  (typeof HOUSEHOLD_MEMBER_ROLES)[keyof typeof HOUSEHOLD_MEMBER_ROLES];
