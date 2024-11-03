import { User } from '@/types/user';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,

  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
