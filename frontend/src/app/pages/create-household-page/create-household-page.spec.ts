import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateHouseholdPage } from './create-household-page';

describe('CreateHouseholdPage', () => {
  let component: CreateHouseholdPage;
  let fixture: ComponentFixture<CreateHouseholdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHouseholdPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
