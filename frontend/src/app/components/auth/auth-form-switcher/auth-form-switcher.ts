import { Component } from '@angular/core';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { LoginFormComponent } from '../login-form-component/login-form-component';
import { SignupFormComponent } from '../signup-form-component/signup-form-component';

@Component({
  imports: [HlmTabsImports, LoginFormComponent, SignupFormComponent],
  selector: 'app-auth-form-switcher',
  styleUrl: './auth-form-switcher.css',
  templateUrl: './auth-form-switcher.html',
})
export class AuthFormSwitcher {}
