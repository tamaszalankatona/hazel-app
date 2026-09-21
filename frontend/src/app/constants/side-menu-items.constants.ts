import {
  LucideBell,
  LucideCalendar,
  LucideFileText,
  LucideHouse,
  LucideIcon,
  LucideLayoutDashboard,
  LucideListCheck,
  LucideShoppingBag,
  LucideSoup,
  LucideStickyNote,
  LucideWallet,
  LucideWrench,
} from '@lucide/angular';

interface SideMenuItemI {
  label: string;
  urlPath: string;
  icon: LucideIcon;
}
export interface SideMenuGroupI {
  label: string;
  items: SideMenuItemI[];
}

export const SIDE_MENU_ITEMS: SideMenuGroupI[] = [
  {
    label: 'General',
    items: [
      { label: 'Overview', urlPath: '/overview', icon: LucideLayoutDashboard },
      { label: 'Notifications', urlPath: '/notifications', icon: LucideBell },
    ],
  },
  {
    label: 'Planning',
    items: [
      { label: 'Notes', urlPath: '/notes', icon: LucideStickyNote },
      { label: 'To-do', urlPath: '/todos', icon: LucideListCheck },
      { label: 'Calendar', urlPath: '/calendar', icon: LucideCalendar },
    ],
  },
  {
    label: 'Kitchen',
    items: [
      { label: 'Shopping', urlPath: '/shopping', icon: LucideShoppingBag },
      { label: 'Recipes', urlPath: '/recipes', icon: LucideSoup },
    ],
  },
  {
    label: 'Home',
    items: [
      { label: 'My Home', urlPath: '/my-home', icon: LucideHouse },
      { label: 'Maintenance', urlPath: '/maintenance', icon: LucideWrench },
      { label: 'Documents', urlPath: '/documents', icon: LucideFileText },
    ],
  },
  {
    label: 'Finance',
    items: [{ label: 'Accounts', urlPath: '/finance', icon: LucideWallet }],
  },
];
