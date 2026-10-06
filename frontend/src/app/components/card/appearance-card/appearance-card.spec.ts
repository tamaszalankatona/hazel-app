import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppearanceCard } from './appearance-card';

describe('AppearanceCard', () => {
  let component: AppearanceCard;
  let fixture: ComponentFixture<AppearanceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearanceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
