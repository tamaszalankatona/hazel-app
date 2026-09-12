import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormSwitcher } from './auth-form-switcher';

describe('AuthFormSwitcher', () => {
  let component: AuthFormSwitcher;
  let fixture: ComponentFixture<AuthFormSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormSwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
