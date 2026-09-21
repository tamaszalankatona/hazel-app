import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  imports: [HlmButtonImports, HlmSidebarImports],
  selector: 'app-overview-page',
  styleUrl: './overview-page.css',
  templateUrl: './overview-page.html',
})
export class OverviewPage {}
