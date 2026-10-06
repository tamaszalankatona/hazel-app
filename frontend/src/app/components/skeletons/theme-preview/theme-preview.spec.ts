import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemePreview } from './theme-preview';

describe('ThemePreview', () => {
  let component: ThemePreview;
  let fixture: ComponentFixture<ThemePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
