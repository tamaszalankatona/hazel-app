import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateHouseholdStepsContainer } from './create-household-steps-container';

describe('CreateHouseholdStepsContainer', () => {
  let component: CreateHouseholdStepsContainer;
  let fixture: ComponentFixture<CreateHouseholdStepsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdStepsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHouseholdStepsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
