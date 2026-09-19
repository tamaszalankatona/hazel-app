import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideArrowLeft, LucideArrowRight, LucideInfo } from '@lucide/angular';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { TimezoneSelector } from '../../timezone-selector/timezone-selector';
import { debounceTime } from 'rxjs';
import { HouseholdCreationStateService } from '../../../services/state-services/household-creation-state/household-creation-state-service';

@Component({
  imports: [
    ReactiveFormsModule,
    HlmFieldImports,
    HlmInputImports,
    HlmInputGroupImports,
    HlmButtonImports,
    LucideInfo,
    LucideArrowLeft,
    LucideArrowRight,
    TimezoneSelector,
  ],
  selector: 'app-create-household-details-form',
  styleUrl: './create-household-details-form.css',
  templateUrl: './create-household-details-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHouseholdDetailsForm {
  private readonly _fb = inject(FormBuilder);
  private readonly _householdCreationStateService = inject(HouseholdCreationStateService);

  ngOnInit(): void {
    this.form.controls.name.setValue(this._householdCreationStateService.state().name, {
      emitEvent: false,
    });
    this.syncHouseholdName();
  }

  public form = this._fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
    timezone: ['Europe/Budapest (GMT+1)', [Validators.required]],
  });

  onSubmit() {
    console.log(this.form.value);
  }

  private syncHouseholdName(): void {
    this.form.controls.name.valueChanges.pipe(debounceTime(300)).subscribe((name) => {
      this._householdCreationStateService.update({
        name,
      });
    });
  }
}
