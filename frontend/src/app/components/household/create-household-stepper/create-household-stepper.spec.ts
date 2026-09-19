import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateHouseholdStepper } from './create-household-stepper';

describe('CreateHouseholdStepper', () => {
  let component: CreateHouseholdStepper;
  let fixture: ComponentFixture<CreateHouseholdStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdStepper],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHouseholdStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
