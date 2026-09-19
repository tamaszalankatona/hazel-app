import { Injectable, signal } from '@angular/core';
import { HOUSEHOLD_CREATION_STEPS } from '../../../constants/household-creation-steps.constants';
import { TimezonesLabelAndOffsetI } from '../../timezone-service';

interface HouseholdCreationStateI {
  name: string;
  timezone: TimezonesLabelAndOffsetI;
  invitationCode?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HouseholdCreationStateService {
  readonly currentStep = signal(0);
  public readonly maxStep = HOUSEHOLD_CREATION_STEPS.length - 1;

  setStep(step: number): void {
    if (step < 0 || step > this.maxStep) {
      throw new Error(`Invalid household creation step: ${step}`);
    }

    this.currentStep.set(step);
  }

  nextStep(): void {
    this.setStep(this.currentStep() + 1);
  }

  previousStep(): void {
    this.setStep(this.currentStep() - 1);
  }

  readonly state = signal<HouseholdCreationStateI>({
    name: '',
    timezone: {
      value: '',
      label: '',
    },
    invitationCode: '',
  });

  update(patch: Partial<HouseholdCreationStateI>): void {
    this.state.update((current) => ({
      ...current,
      ...patch,
    }));
  }

  reset(): void {
    this.state.set({
      name: '',
      timezone: {
        value: '',
        label: '',
      },
      invitationCode: '',
    });
  }
}
