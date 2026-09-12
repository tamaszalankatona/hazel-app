import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';

@Component({
  imports: [HlmButtonImports, HlmSeparatorImports],
  selector: 'app-third-party-login-options',
  styleUrl: './third-party-login-options.css',
  templateUrl: './third-party-login-options.html',
})
export class ThirdPartyLoginOptions {}
