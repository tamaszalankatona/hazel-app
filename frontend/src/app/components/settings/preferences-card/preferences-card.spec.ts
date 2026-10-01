import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferencesCard } from './preferences-card';

describe('PreferencesCard', () => {
  let component: PreferencesCard;
  let fixture: ComponentFixture<PreferencesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PreferencesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
