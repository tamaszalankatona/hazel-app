import { Component, inject } from '@angular/core';
import { CardComponent } from '../../card/card-component/card-component';
import { HOUSEHOLD_CREATION_STEPS } from '../../../constants/household-creation-steps.constants';
import { HouseholdCreationStateService } from '../../../services/state-services/household-creation-state/household-creation-state-service';
import { NgComponentOutlet } from '@angular/common';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { CreateHouseholdStepper } from '../create-household-stepper/create-household-stepper';
import { HouseholdApiService } from '../../../api/household/household-api';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  imports: [CardComponent, NgComponentOutlet, CreateHouseholdStepper, HlmButtonImports],
  selector: 'app-create-household-steps-container',
  styleUrl: './create-household-steps-container.css',
  templateUrl: './create-household-steps-container.html',
})
export class CreateHouseholdStepsContainer {
  protected readonly householdCreationStateService = inject(HouseholdCreationStateService);
  private readonly _householdApiService = inject(HouseholdApiService);
  private readonly _router = inject(Router);
  protected readonly steps = HOUSEHOLD_CREATION_STEPS;

  finishHouseholdCreation(): void {
    const state = this.householdCreationStateService.state();

    this._householdApiService
      .createHousehold({
        name: state.name,
        timezone: state.timezone.value,
      })
      .pipe(switchMap((household) => this._householdApiService.setActiveHousehold(household.id)))
      .subscribe({
        next: () => {
          this._router.navigate(['/overview']);
        },
        error: (error) => {
          console.error('Failed to create household:', error);
        },
      });
  }
}
