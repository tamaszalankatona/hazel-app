import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
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

  @ApiProperty({
    example: '********',
    description: 'User password',
  })
  @IsString()
  @Length(8)
  plainPassword!: string;

  @ApiProperty({
    example: 'Europe/Budapest',
    description: 'User timezone in IANA format',
  })
  @IsNotEmpty()
  timezone!: string;

  @ApiProperty({
    example: 'hu-HU',
    default: 'hu-HU',
    description: 'User locale',
  })
  @IsNotEmpty()
  locale: string = 'hu-HU';
}
