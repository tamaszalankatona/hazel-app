import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { HOUSEHOLD_MEMBER_ROLES } from 'src/constants/household-member-roles.enums';
import { type HOUSEHOLD_MEMBER_ROLES_MODEL } from 'src/db/schema/household-member-role';

export class CreateInvitationDto {
  @ApiProperty({
    example: 'johndoe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'ADULT',
  })
  @IsNotEmpty()
  @IsEnum(HOUSEHOLD_MEMBER_ROLES)
  role!: HOUSEHOLD_MEMBER_ROLES_MODEL;
}
