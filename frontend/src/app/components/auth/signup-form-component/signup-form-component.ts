import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmField, HlmFieldError, HlmFieldGroup } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { ThirdPartyLoginOptions } from '../third-party-login-options-component/third-party-login-options/third-party-login-options';
import { toSignal } from '@angular/core/rxjs-interop';
import { checkPasswordStrength } from '../../../utils/password-strength';
import { PasswordStrengthDisplayerComponent } from '../password-strength-displayer-component/password-strength-displayer-component';
import { AuthApiService } from '../../../api/auth/auth-api';
import { SignupRequest } from '../../../auth/models/auth.models';
import { LucideEye, LucideEyeClosed } from '@lucide/angular';

@Component({
  imports: [
    ReactiveFormsModule,
    HlmButtonImports,
    HlmInputImports,
    HlmInputGroupImports,
    HlmInputGroupImports,
    HlmCheckboxImports,
    LucideEye,
    LucideEyeClosed,
    ThirdPartyLoginOptions,
    PasswordStrengthDisplayerComponent,
    HlmField,
    HlmFieldError,
    HlmFieldGroup,
    RouterLink,
  ],
  selector: 'app-signup-form-component',
  styleUrl: './signup-form-component.css',
  templateUrl: './signup-form-component.html',
})
export class SignupFormComponent {
  private readonly authApiService = inject(AuthApiService);
  private readonly _fb = inject(FormBuilder);

  protected isPasswordVisible: boolean = false;

  form = this._fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    email: ['', [Validators.required, Validators.email]],
    plainPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  readonly password = toSignal(this.form.controls.plainPassword.valueChanges, {
    initialValue: '',
  });

  protected readonly passwordStrength = computed(() => {
    const password = this.password();
    const result = checkPasswordStrength(password);
    return result;
  });

  toggleShowPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const signUpData: SignupRequest = {
      ...this.form.getRawValue(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: navigator.language,
    };

    this.authApiService.signUp(signUpData).subscribe({
      next: () => {
        console.log('Sign Up successfull');
      },
      error: (error) => {
        console.log('Sign Up unsuccessfull: ', error);
      },
    });
  }
}
