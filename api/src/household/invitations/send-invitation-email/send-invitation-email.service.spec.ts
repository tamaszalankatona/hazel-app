import { Test, TestingModule } from '@nestjs/testing';
import { SendInvitationEmailService } from './send-invitation-email.service';

describe('SendInvitationEmailService', () => {
  let service: SendInvitationEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendInvitationEmailService],
    }).compile();

    service = module.get<SendInvitationEmailService>(SendInvitationEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
