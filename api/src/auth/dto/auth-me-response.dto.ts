import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from '../../user/dto/user-response.dto';

export class AuthMeResponseDto {
  @ApiProperty({
    type: UserResponseDto,
  })
  user!: UserResponseDto;

  // TODO: Create dto for memberships
  @ApiProperty({
    type: 'array',
    example: [
      {
        id: '3a5188b4-f39e-46bd-b937-76ca42dd6e4e',
        householdId: '8f6c0c8b-1a77-4d31-9b33-123456789abc',
        role: 'ADMIN',
      },
    ],
  })
  memberships!: {
    id: string;
    householdId: string;
    // TODO: Create role ENUM
    role: string;
  }[];

  @ApiProperty({
    nullable: true,
    type: Object,
  })
  activeHousehold!: object | null;
}
