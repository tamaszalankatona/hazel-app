import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdContextService } from './household-context.service';

describe('HouseholdContextService', () => {
  let service: HouseholdContextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdContextService],
    }).compile();

    service = module.get<HouseholdContextService>(HouseholdContextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
