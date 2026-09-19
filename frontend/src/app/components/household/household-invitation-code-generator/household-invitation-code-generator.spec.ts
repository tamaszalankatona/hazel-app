import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdInvitationCodeGenerator } from './household-invitation-code-generator';

describe('HouseholdInvitationCodeGenerator', () => {
  let component: HouseholdInvitationCodeGenerator;
  let fixture: ComponentFixture<HouseholdInvitationCodeGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdInvitationCodeGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdInvitationCodeGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
