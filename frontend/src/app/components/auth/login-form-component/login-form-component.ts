import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmField, HlmFieldError, HlmFieldGroup } from '@spartan-ng/helm/field';
import { LucideEye, LucideEyeClosed } from '@lucide/angular';
import { ThirdPartyLoginOptions } from '../third-party-login-options-component/third-party-login-options/third-party-login-options';
import { Router, RouterLink } from '@angular/router';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { AuthStateService } from '../../../auth/services/auth-state';

@Component({
  imports: [
    ReactiveFormsModule,
    HlmButtonImports,
    HlmInputImports,
    HlmInputGroupImports,
    HlmInputGroupImports,
    HlmCheckboxImports,
    HlmField,
    HlmFieldError,
    HlmFieldGroup,
    LucideEye,
    LucideEyeClosed,
    ThirdPartyLoginOptions,
    RouterLink,
  ],
  selector: 'app-login-form-component',
  styleUrl: './login-form-component.css',
  templateUrl: './login-form-component.html',
})
export class LoginFormComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly authState = inject(AuthStateService);

  private router = inject(Router);

  protected isPasswordVisible: boolean = false;

  form = this._fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    plainPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  toggleShowPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authState.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['household/create']);
      },
    });
  }
}
