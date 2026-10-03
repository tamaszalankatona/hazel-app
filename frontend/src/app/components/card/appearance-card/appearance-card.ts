import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideDynamicIcon, LucideIcon } from '@lucide/angular';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { ThemePreview, ThemePreviewVariant } from '../../skeletons/theme-preview/theme-preview';

@Component({
  imports: [HlmRadioGroupImports, FormsModule, ThemePreview, LucideDynamicIcon],
  host: {
    class: 'block w-full flex-1',
  },
  selector: 'app-appearance-card',
  styleUrl: './appearance-card.css',
  templateUrl: './appearance-card.html',
})
export class AppearanceCard {
  readonly ThemePreviewVariant = ThemePreviewVariant;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() variant: ThemePreviewVariant = ThemePreviewVariant.Light;
  @Input() icon!: LucideIcon;
}
