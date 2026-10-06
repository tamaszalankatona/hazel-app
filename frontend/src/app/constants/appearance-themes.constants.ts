import { Type } from '@angular/core';
import { ThemePreviewVariant } from '../components/skeletons/theme-preview/theme-preview';
import { LucideSun, LucideMoon, LucideSunMoon, LucideIcon } from '@lucide/angular';

interface AppearanceThemesI {
  title: string;
  description: string;
  variant: ThemePreviewVariant;
  icon: LucideIcon;
}

export const APPEARANCE_THEMES: AppearanceThemesI[] = [
  {
    title: 'Light mode',
    description: 'Hazel Warm Linen theme active across this device',
    variant: ThemePreviewVariant.Light,
    icon: LucideSun,
  },
  {
    title: 'Dark mode',
    description: 'Deep charcoal aesthetic for evening enviroment',
    variant: ThemePreviewVariant.Dark,
    icon: LucideMoon,
  },
  {
    title: 'System match',
    description: 'Automatically synch with hardware dylight rules',
    variant: ThemePreviewVariant.System,
    icon: LucideSunMoon,
  },
];
