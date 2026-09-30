import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdMembersController } from './household-members.controller';

describe('HouseholdMembersController', () => {
  let controller: HouseholdMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdMembersController],
    }).compile();

    controller = module.get<HouseholdMembersController>(HouseholdMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
