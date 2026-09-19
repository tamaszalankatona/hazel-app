import { TestBed } from '@angular/core/testing';
import { HouseholdCreationStateService } from './household-creation-state-service';

describe('HouseholdCreationStateService', () => {
  let service: HouseholdCreationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseholdCreationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
