import { Component } from '@angular/core';
import { CardComponent } from '../../card/card-component/card-component';
import { ProfilePicture } from '../../profile-picture/profile-picture/profile-picture';
import { ProfilePictureVariants } from '../../profile-picture/profile-picture/enums/profile-picture-variants.enums';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  imports: [CardComponent, ProfilePicture, HlmButtonImports],
  selector: 'app-account-card',
  styleUrl: './account-card.css',
  templateUrl: './account-card.html',
})
export class AccountCard {
  readonly ProfilePictureVariants = ProfilePictureVariants;
}
