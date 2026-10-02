import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AccountSettingsCard } from '../../components/card/settings/account-settings-card/account-settings-card';
import { DangerZoneSettingsCard } from '../../components/card/settings/danger-zone-settings-card/danger-zone-settings-card';
import { NotificationsSettingsCard } from '../../components/card/settings/notifications-settings-card/notifications-settings-card';

@Component({
  imports: [
    HlmButtonImports,
    AccountSettingsCard,
    DangerZoneSettingsCard,
    NotificationsSettingsCard,
  ],
  selector: 'app-settings-page',
  styleUrl: './settings-page.css',
  templateUrl: './settings-page.html',
})
export class SettingsPage {}
