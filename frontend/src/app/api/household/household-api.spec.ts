import { TestBed } from '@angular/core/testing';
import { HouseholdApi } from './household-api';

describe('HouseholdApi', () => {
  let service: HouseholdApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseholdApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
