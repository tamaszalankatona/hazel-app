import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { CardHeader } from '../card-header/card-header';
import { ProfilePicture } from '../../../profile-picture/profile-picture/profile-picture';
import { ProfilePictureVariants } from '../../../profile-picture/profile-picture/enums/profile-picture-variants.enums';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { LucideClock, LucideUsersRound } from '@lucide/angular';

@Component({
  imports: [
    CardComponent,
    CardHeader,
    ProfilePicture,
    HlmButtonImports,
    LucideClock,
    LucideUsersRound,
  ],
  selector: 'app-household-settings-card',
  styleUrl: './household-settings-card.css',
  templateUrl: './household-settings-card.html',
})
export class HouseholdSettingsCard {
  readonly ProfilePictureVariants = ProfilePictureVariants;
}
