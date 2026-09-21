import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { SidebarMenu } from '../sidebar/sidebar-menu/sidebar-menu';

@Component({
  imports: [RouterOutlet, SidebarMenu, HlmSidebarImports],
  selector: 'app-app-shell',
  styleUrl: './app-shell.css',
  templateUrl: './app-shell.html',
  host: {
    class: 'col-span-20 w-full',
  },
})
export class AppShell {}
