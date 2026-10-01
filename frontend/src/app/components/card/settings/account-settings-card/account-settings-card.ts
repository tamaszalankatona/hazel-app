import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { ProfilePicture } from '../../../profile-picture/profile-picture/profile-picture';
import { ProfilePictureVariants } from '../../../profile-picture/profile-picture/enums/profile-picture-variants.enums';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  imports: [CardComponent, ProfilePicture, HlmButtonImports],
  selector: 'app-account-settings-card',
  styleUrl: './account-settings-card.css',
  templateUrl: './account-settings-card.html',
})
export class AccountSettingsCard {
  readonly ProfilePictureVariants = ProfilePictureVariants;
}
