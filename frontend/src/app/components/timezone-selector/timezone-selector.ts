import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { TimezoneService, TimezonesLabelAndOffsetI } from '../../services/timezone-service';
import { LucideChevronDown } from '@lucide/angular';
import { HouseholdCreationStateService } from '../../services/state-services/household-creation-state/household-creation-state-service';

@Component({
  imports: [HlmDropdownMenuImports, HlmButtonImports, LucideChevronDown],
  selector: 'app-timezone-selector',
  styleUrl: './timezone-selector.css',
  templateUrl: './timezone-selector.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimezoneSelector {
  private readonly _timezoneService = inject(TimezoneService);
  private readonly _householdCreationStateService = inject(HouseholdCreationStateService);

  protected readonly timezones: TimezonesLabelAndOffsetI[] =
    this._timezoneService.getTimezonesLabelAndOffset();

  protected selectedTimezone: TimezonesLabelAndOffsetI = { value: '', label: '' };

  ngOnInit(): void {
    const savedTimezone = this._householdCreationStateService.state().timezone;

    if (savedTimezone.value) {
      this.selectedTimezone = savedTimezone;
      return;
    }

    this.selectedTimezone = this._timezoneService.getCurrentTimezone();

    this._householdCreationStateService.update({
      timezone: this.selectedTimezone,
    });
  }

  setSelectedTimezone(timezone: TimezonesLabelAndOffsetI): void {
    this.selectedTimezone = timezone;
    this._householdCreationStateService.update({ timezone: this.selectedTimezone });
  }
}
