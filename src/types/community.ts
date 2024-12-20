import { Region } from './index';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  category: string;
  region: Region;
  image: string;
  attendees: number;
  isFeatured: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
  deadline: string;
  region: Region;
  category: string;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  region: Region;
  address: string;
  phone: string;
  email: string;
  website: string;
  image: string;
  rating: number;
  reviews: number;
  isVerified: boolean;
  isFeatured: boolean;
}