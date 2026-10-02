import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AccountSettingsCard } from '../../components/card/settings/account-settings-card/account-settings-card';

@Component({
  imports: [HlmButtonImports, AccountSettingsCard],
  selector: 'app-settings-page',
  styleUrl: './settings-page.css',
  templateUrl: './settings-page.html',
})
export class SettingsPage {}
