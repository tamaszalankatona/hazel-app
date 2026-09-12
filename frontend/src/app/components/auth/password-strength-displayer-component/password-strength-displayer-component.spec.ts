import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordStrengthDisplayerComponent } from './password-strength-displayer-component';

describe('PasswordStrengthDisplayerComponent', () => {
  let component: PasswordStrengthDisplayerComponent;
  let fixture: ComponentFixture<PasswordStrengthDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthDisplayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthDisplayerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
