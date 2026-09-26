import { HOUSEHOLD_MEMBER_ROLES_MODEL } from 'src/db/schema/household-member-role';

export interface CreateInvitationInput {
  householdId: string;
  email: string;
  role: HOUSEHOLD_MEMBER_ROLES_MODEL;
  invitedBy: string;
}
