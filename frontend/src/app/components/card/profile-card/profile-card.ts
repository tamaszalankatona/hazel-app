import { Component, inject } from '@angular/core';
import { CardComponent } from '../card-component/card-component';
import { LucideLogOut } from '@lucide/angular';
import { AuthStateService } from '../../../services/state-services/auth-state/auth-state';
import { Router } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { ProfilePicture } from '../../profile-picture/profile-picture/profile-picture';

@Component({
  imports: [LucideLogOut, HlmButtonImports, HlmCardImports, ProfilePicture],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
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
