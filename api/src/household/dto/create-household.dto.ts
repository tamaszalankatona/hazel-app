import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHouseholdDto {
  @ApiProperty({
    example: "John's Family",
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'Europe/Budapest',
  })
  @IsNotEmpty()
  @IsString()
  timezone!: string;
}
