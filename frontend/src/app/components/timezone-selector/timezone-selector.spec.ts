import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimezoneSelector } from './timezone-selector';

describe('TimezoneSelector', () => {
  let component: TimezoneSelector;
  let fixture: ComponentFixture<TimezoneSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimezoneSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(TimezoneSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
