import { Component } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { SIDE_MENU_ITEMS } from '../../../constants/side-menu-items.constants';
import { RouterLink } from '@angular/router';
import { LucideDynamicIcon } from '@lucide/angular';
import { ProfileCard } from '../../card/profile-card/profile-card';

@Component({
  imports: [HlmSidebarImports, RouterLink, LucideDynamicIcon, ProfileCard],
  selector: 'app-sidebar-menu',
  styleUrl: './sidebar-menu.css',
  templateUrl: './sidebar-menu.html',
})
export class SidebarMenu {
  protected readonly sidebarMenuItems = SIDE_MENU_ITEMS;
}
