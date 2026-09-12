import { Component } from '@angular/core';
import { LucideMail, LucideMoveUpRight, LucideShieldCheck } from '@lucide/angular';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AuthFormSwitcher } from '../../components/auth/auth-form-switcher/auth-form-switcher';
import { CardComponent } from '../../components/card/card-component/card-component';

@Component({
  imports: [
    CardComponent,
    AuthFormSwitcher,
    LucideMail,
    LucideMoveUpRight,
    LucideShieldCheck,
    HlmButtonImports,
  ],
  selector: 'app-auth-page',
  styleUrl: './auth-page.css',
  templateUrl: './auth-page.html',
})
export class AuthPage {}
