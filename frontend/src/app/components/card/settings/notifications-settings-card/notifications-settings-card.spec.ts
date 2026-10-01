import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsCard } from './notifications-settings-card';

describe('NotificationsCard', () => {
  let component: NotificationsCard;
  let fixture: ComponentFixture<NotificationsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
