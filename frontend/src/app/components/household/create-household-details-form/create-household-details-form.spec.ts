import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateHouseholdDetails } from './create-household-details';

describe('CreateHouseholdDetails', () => {
  let component: CreateHouseholdDetails;
  let fixture: ComponentFixture<CreateHouseholdDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHouseholdDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
