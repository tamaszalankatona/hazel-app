import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-password-strength-displayer-component',
  styleUrl: './password-strength-displayer-component.css',
  templateUrl: './password-strength-displayer-component.html',
})
export class PasswordStrengthDisplayerComponent {
  @Input() score: number = 0;
  @Input() label: string = '';
  readonly segments = [1, 2, 3, 4];
}
