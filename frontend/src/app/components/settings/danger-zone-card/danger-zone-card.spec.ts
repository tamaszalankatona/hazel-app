import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DangerZoneCard } from './danger-zone-card';

describe('DangerZoneCard', () => {
  let component: DangerZoneCard;
  let fixture: ComponentFixture<DangerZoneCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerZoneCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DangerZoneCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
