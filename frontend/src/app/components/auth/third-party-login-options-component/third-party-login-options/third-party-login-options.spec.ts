import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdPartyLoginOptions } from './third-party-login-options';

describe('ThirdPartyLoginOptions', () => {
  let component: ThirdPartyLoginOptions;
  let fixture: ComponentFixture<ThirdPartyLoginOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyLoginOptions],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPartyLoginOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
