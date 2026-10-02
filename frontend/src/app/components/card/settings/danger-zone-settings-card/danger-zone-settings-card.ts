import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { CardHeader } from '../card-header/card-header';
import { Divider } from '../../../divider/divider/divider';

@Component({
  imports: [CardComponent, HlmButtonImports, CardHeader, Divider],
  selector: 'app-danger-zone-settings-card',
  styleUrl: './danger-zone-settings-card.css',
  templateUrl: './danger-zone-settings-card.html',
})
export class DangerZoneSettingsCard {}
