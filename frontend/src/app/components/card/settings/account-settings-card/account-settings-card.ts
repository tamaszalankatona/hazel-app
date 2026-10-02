import { Component, inject } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { ProfilePicture } from '../../../profile-picture/profile-picture/profile-picture';
import { ProfilePictureVariants } from '../../../profile-picture/profile-picture/enums/profile-picture-variants.enums';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmField, HlmFieldError, HlmFieldGroup } from '@spartan-ng/helm/field';
import { Divider } from '../../../divider/divider/divider';
import { LucideKeyRound } from '@lucide/angular';

@Component({
  imports: [
    CardComponent,
    ProfilePicture,
    HlmButtonImports,
    HlmInputImports,
    HlmField,
    HlmFieldError,
    HlmFieldGroup,
    ReactiveFormsModule,
    Divider,
    LucideKeyRound,
  ],
  selector: 'app-account-settings-card',
  styleUrl: './account-settings-card.css',
  templateUrl: './account-settings-card.html',
})
export class AccountSettingsCard {
  private readonly _fb = inject(FormBuilder);
  readonly ProfilePictureVariants = ProfilePictureVariants;

  form = this._fb.group({
    name: '',
    email: ['', [Validators.email]],
  });
}
