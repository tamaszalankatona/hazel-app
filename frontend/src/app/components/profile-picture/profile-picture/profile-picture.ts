import { Component, Input } from '@angular/core';
import { ProfilePictureVariants } from './enums/profile-picture-variants.enums';

@Component({
  imports: [],
  selector: 'app-profile-picture',
  styleUrl: './profile-picture.css',
  templateUrl: './profile-picture.html',
})
export class ProfilePicture {
  @Input() variant = ProfilePictureVariants.Extended;

  readonly ProfilePictureVariants = ProfilePictureVariants;
}
