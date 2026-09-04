import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { AuthUser } from 'src/auth/interface/auth-user.interface';

export class UserResponseDto implements AuthUser {
  @ApiProperty({
    example: '3a5188b4-f39e-46bd-b937-76ca42dd6e4e',
    description: 'Unique identifier of the user',
  })
  id!: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'User email',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'User name',
  })
  @IsString()
  @Length(3, 20)
  name!: string;
}
