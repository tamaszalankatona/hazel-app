import { Component } from '@angular/core';
import { CreateHouseholdStepsContainer } from '../../components/household/create-household-steps-container/create-household-steps-container';

@Component({
  imports: [CreateHouseholdStepsContainer],
  host: {
    class: `
      col-span-full
      w-full
      sm:col-start-3
      sm:col-end-19
      md:col-start-5
      md:col-end-17
      lg:col-start-7
      lg:col-end-15
      xl:col-start-8
      xl:col-end-14
    `,
  },

  selector: 'app-create-household-page',
  styleUrl: './create-household-page.css',
  templateUrl: './create-household-page.html',
})
export class CreateHouseholdPage {}
