import { create } from 'zustand';
import { UserProfile } from '../types/user';

interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));