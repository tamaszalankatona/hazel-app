import { Component, Input } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';

export enum ThemePreviewVariant {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

@Component({
  imports: [HlmSkeletonImports, HlmCardImports],
  selector: 'app-theme-preview',
  styleUrl: './theme-preview.css',
  templateUrl: './theme-preview.html',
})
export class ThemePreview {
  @Input() variant: ThemePreviewVariant = ThemePreviewVariant.Light;

  readonly ThemePreviewVariant = ThemePreviewVariant;
}
