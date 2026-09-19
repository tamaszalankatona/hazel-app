import { Module } from '@nestjs/common';
import { HouseholdService } from './household.service';
import { HouseholdContextService } from './household-context/household-context.service';

@Module({
  providers: [HouseholdService, HouseholdContextService]
})
export class HouseholdModule {}
