import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AccountCard } from '../../components/settings/account-card/account-card';
import { AppearanceCard } from '../../components/settings/appearance-card/appearance-card';
import { DangerZoneCard } from '../../components/settings/danger-zone-card/danger-zone-card';
import { HouseholdCard } from '../../components/settings/household-card/household-card';
import { NotificationsCard } from '../../components/settings/notifications-card/notifications-card';
import { PreferencesCard } from '../../components/settings/preferences-card/preferences-card';

@Component({
  imports: [
    HlmButtonImports,
    AccountCard,
    AppearanceCard,
    DangerZoneCard,
    HouseholdCard,
    NotificationsCard,
    PreferencesCard,
  ],
  selector: 'app-settings-page',
  styleUrl: './settings-page.css',
  templateUrl: './settings-page.html',
})
export class SettingsPage {}
