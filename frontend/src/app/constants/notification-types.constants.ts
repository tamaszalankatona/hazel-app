interface NotificationTypesI {
  title: string;
  description: string;
  switchFor: string;
}

export const NOTIFICATION_TYPES: NotificationTypesI[] = [
  {
    title: 'Email notifications',
    description: 'Receive weekly household digest and critical updates via email',
    switchFor: 'switch-email',
  },
  {
    title: 'Household activity',
    description: 'Instant updates when members complete tasks or modify shared items',
    switchFor: 'switch-household-activity',
  },
  {
    title: 'Task & Reminders',
    description: 'Alerts for upcoming chore deadlines, maintenance and calendar items',
    switchFor: 'switch-task-reminders',
  },
  {
    title: 'Invitation & Access',
    description: 'Notifications when new household members join or request access',
    switchFor: 'switch-invitation-access',
  },
];
