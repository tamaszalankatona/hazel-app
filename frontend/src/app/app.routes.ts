import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth-guard';
import { guestGuard } from './auth/guards/guest-guard-guard';
import { AppShell } from './components/app-shell/app-shell';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/auth-page/auth-page').then((m) => m.AuthPage),
  },

  {
    path: '',
    component: AppShell,
    canActivate: [authGuard],
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/overview-page/overview-page').then((m) => m.OverviewPage),
      },
      // other routes like Notes, etc
    ],
  },

  {
    path: 'household',

    canActivate: [authGuard],
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/create-household-page/create-household-page').then(
            (m) => m.CreateHouseholdPage,
          ),
      },
    ],
  },

  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
];
