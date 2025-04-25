import { create } from 'zustand';
import { Application, ApplicationStatus, Priority } from '../types';
import { mockApplications } from '../data/mockData';

interface ApplicationsState {
  applications: Application[];
  loading: boolean;
  error: string | null;
  
  // Actions
  addApplication: (application: Omit<Application, 'id'>) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  deleteApplication: (id: string) => void;
  updateStatus: (id: string, status: ApplicationStatus) => void;
  updatePriority: (id: string, priority: Priority) => void;
  getApplicationById: (id: string) => Application | undefined;
  filterApplications: (
    status?: ApplicationStatus, 
    priority?: Priority,
    searchTerm?: string
  ) => Application[];
}

// Helper function to generate UUID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

export const useApplicationsStore = create<ApplicationsState>((set, get) => ({
  applications: mockApplications,
  loading: false,
  error: null,
  
  addApplication: (applicationData) => {
    const newApplication = {
      ...applicationData,
      id: generateId(),
    };
    
    set((state) => ({
      applications: [...state.applications, newApplication]
    }));
  },
  
  updateApplication: (id, updates) => {
    set((state) => ({
      applications: state.applications.map((app) => 
        app.id === id ? { ...app, ...updates } : app
      )
    }));
  },
  
  deleteApplication: (id) => {
    set((state) => ({
      applications: state.applications.filter((app) => app.id !== id)
    }));
  },
  
  updateStatus: (id, status) => {
    set((state) => ({
      applications: state.applications.map((app) => 
        app.id === id ? { ...app, status } : app
      )
    }));
  },
  
  updatePriority: (id, priority) => {
    set((state) => ({
      applications: state.applications.map((app) => 
        app.id === id ? { ...app, priority } : app
      )
    }));
  },
  
  getApplicationById: (id) => {
    return get().applications.find((app) => app.id === id);
  },
  
  filterApplications: (status, priority, searchTerm) => {
    let filtered = get().applications;
    
    if (status) {
      filtered = filtered.filter((app) => app.status === status);
    }
    
    if (priority) {
      filtered = filtered.filter((app) => app.priority === priority);
    }
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter((app) => 
        app.companyName.toLowerCase().includes(search) || 
        app.position.toLowerCase().includes(search) ||
        app.location.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  }
}));