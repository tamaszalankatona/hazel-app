import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth-guard';
import { guestGuard } from './auth/guards/guest-guard-guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/auth-page/auth-page').then((m) => m.AuthPage),
  },

  {
    path: 'overview',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/overview-page/overview-page').then((m) => m.OverviewPage),
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
