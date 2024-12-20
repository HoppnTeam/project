import { Region } from './index';

export interface NewsletterPreferences {
  frequency: 'daily' | 'weekly' | 'breaking';
  categories: string[];
  regions: Region[];
  format: 'html' | 'text';
  pushNotifications: boolean;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  name: string;
  preferences: NewsletterPreferences;
  subscribedAt: string;
  verified: boolean;
}