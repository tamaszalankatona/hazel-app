import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateActiveHouseholdDto {
  @ApiProperty({
    example: '1393c371-2391-4a09-8ac5-5444410236ae',
  })
  @IsUUID()
  householdId!: string;
}
