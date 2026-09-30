import { IsNotEmpty, IsEnum } from 'class-validator';
import { HOUSEHOLD_MEMBER_ROLES } from 'src/household/invitations/household-invitations/constants/household-member-roles.enums';
import type { HOUSEHOLD_MEMBER_ROLES_MODEL } from 'src/db/schema/household-member-role';

export class ChangeMemberRoleDto {
  @IsNotEmpty()
  @IsEnum(HOUSEHOLD_MEMBER_ROLES)
  role!: HOUSEHOLD_MEMBER_ROLES_MODEL;
}
