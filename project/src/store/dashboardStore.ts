import { create } from 'zustand';
import { getDashboardStats } from '../data/mockData';
import { DashboardStats } from '../types';

interface DashboardState {
  stats: DashboardStats | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  loadDashboardStats: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: null,
  loading: false,
  error: null,
  
  loadDashboardStats: () => {
    set({ loading: true });
    
    // In a real app, this would be an API call
    setTimeout(() => {
      try {
        const stats = getDashboardStats();
        set({ 
          stats,
          loading: false,
          error: null
        });
      } catch (error) {
        set({ 
          loading: false,
          error: 'Failed to load dashboard statistics'
        });
      }
    }, 500);
  }
}));