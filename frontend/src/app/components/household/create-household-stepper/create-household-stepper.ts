import { Component, inject } from '@angular/core';
import { HouseholdCreationStateService } from '../../../services/state-services/household-creation-state/household-creation-state-service';
import { HOUSEHOLD_CREATION_STEPS } from '../../../constants/household-creation-steps.constants';

@Component({
  imports: [],
  host: {
    class: 'block w-full',
  },
  selector: 'app-create-household-stepper',
  styleUrl: './create-household-stepper.css',
  templateUrl: './create-household-stepper.html',
})
export class CreateHouseholdStepper {
  protected readonly householdCreationStateService = inject(HouseholdCreationStateService);

  protected readonly steps = HOUSEHOLD_CREATION_STEPS;
  protected readonly maxStep = this.steps.length - 1;
}
