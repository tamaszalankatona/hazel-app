import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdInvitationsService } from './household-invitations.service';

describe('HouseholdInvitationsService', () => {
  let service: HouseholdInvitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdInvitationsService],
    }).compile();

    service = module.get<HouseholdInvitationsService>(HouseholdInvitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
