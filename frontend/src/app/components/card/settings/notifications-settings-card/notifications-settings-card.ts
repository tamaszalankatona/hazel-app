import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { HlmSwitch } from '@spartan-ng/helm/switch';
import { CardHeader } from '../card-header/card-header';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { NOTIFICATION_TYPES } from '../../../../constants/notification-types.constants';
import { Divider } from '../../../divider/divider/divider';

@Component({
  imports: [CardComponent, HlmSwitch, CardHeader, HlmFieldImports, Divider],
  selector: 'app-notifications-settings-card',
  styleUrl: './notifications-settings-card.css',
  templateUrl: './notifications-settings-card.html',
})
export class NotificationsSettingsCard {
  protected readonly notificationTypes = NOTIFICATION_TYPES;
}
