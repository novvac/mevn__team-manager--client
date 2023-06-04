export type NavItemValueI = 'dashboard'|'messages'|'projects'|'notifications'|'friends'|'settings';

export interface NavItemI {
  icon: string;
  title: string;
  value: NavItemValueI;
  component?: any;
}
