export interface UserPreferences {
  regions: string[];
  categories: string[];
  notifications: {
    breakingNews: boolean;
    followedTopics: boolean;
    newsletter: boolean;
  };
  theme: 'light' | 'dark';
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  picture: string;
  preferences: UserPreferences;
  savedArticles: number[];
  followedTopics: string[];
  followedRegions: string[];
}