import { Component, inject } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { AuthService } from '../../auth/services/auth';
import { Router } from '@angular/router';
import { AuthStateService } from '../../auth/services/auth-state';

@Component({
  imports: [HlmButtonImports],
  selector: 'app-overview-page',
  styleUrl: './overview-page.css',
  templateUrl: './overview-page.html',
})
export class OverviewPage {
  private authState = inject(AuthStateService);
  private router = inject(Router);

  logout(): void {
    this.authState.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth'], { replaceUrl: true });
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
