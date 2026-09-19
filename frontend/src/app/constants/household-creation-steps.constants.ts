import { Type } from '@angular/core';
import { CreateHouseholdDetailsForm } from '../components/household/create-household-details-form/create-household-details-form';
import { HouseholdInvitationCodeGenerator } from '../components/household/household-invitation-code-generator/household-invitation-code-generator';

interface HouseholdCreationStepsI {
  title: string;
  description: string;
  component: Type<unknown> | null;
}

export const HOUSEHOLD_CREATION_STEPS: HouseholdCreationStepsI[] = [
  // step 1
  {
    title: 'Create your household',
    description:
      'Start by giving your household a name and choosing the timezone that works best for everyone.',
    component: CreateHouseholdDetailsForm,
  },
  // step 2
  {
    title: 'Invite household members',
    description: 'Invite the people you share your household with.',
    component: HouseholdInvitationCodeGenerator,
  },
  // step 3
  {
    title: 'Your household is ready',
    description:
      'Your household has been created. You’re now the administrator and can start making Hazel your own.',
    component: null,
  },
];
