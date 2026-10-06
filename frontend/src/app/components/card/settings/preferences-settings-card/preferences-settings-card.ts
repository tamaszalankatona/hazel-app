import { Component } from '@angular/core';
import { CardComponent } from '../../card-component/card-component';
import { AppearanceCard } from '../../appearance-card/appearance-card';
import { CardHeader } from '../card-header/card-header';
import { APPEARANCE_THEMES } from '../../../../constants/appearance-themes.constants';
import { ThemePreviewVariant } from '../../../skeletons/theme-preview/theme-preview';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [HlmRadioGroupImports, FormsModule, CardComponent, AppearanceCard, CardHeader],
  selector: 'app-preferences-settings-card',
  styleUrl: './preferences-settings-card.css',
  templateUrl: './preferences-settings-card.html',
})
export class PreferencesSettingsCard {
  theme: ThemePreviewVariant = ThemePreviewVariant.Light;

  protected readonly AppearanceThemes = APPEARANCE_THEMES;
}
