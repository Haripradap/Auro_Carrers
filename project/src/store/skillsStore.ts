import { create } from 'zustand';
import { Skill, SkillCategory, SkillLevel } from '../types';
import { mockSkills, getSkillGaps } from '../data/mockData';

interface SkillsState {
  userSkills: Skill[];
  requiredSkills: Skill[];
  skillGaps: {
    skillName: string;
    category: SkillCategory;
    frequency: number;
    resources: {
      id: string;
      title: string;
      url: string;
      type: string;
    }[];
  }[];
  loading: boolean;
  error: string | null;
  
  // Actions
  addUserSkill: (skill: Omit<Skill, 'id' | 'isUserSkill'>) => void;
  updateUserSkill: (id: string, updates: Partial<Skill>) => void;
  deleteUserSkill: (id: string) => void;
  getSkillById: (id: string) => Skill | undefined;
  filterSkillsByCategory: (category: SkillCategory) => Skill[];
  getSkillsForJob: (jobId: string) => Skill[];
  loadSkillGaps: () => void;
}

// Helper function to generate UUID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

export const useSkillsStore = create<SkillsState>((set, get) => ({
  userSkills: mockSkills.filter(skill => skill.isUserSkill),
  requiredSkills: mockSkills,
  skillGaps: [],
  loading: false,
  error: null,
  
  addUserSkill: (skillData) => {
    const newSkill = {
      ...skillData,
      id: generateId(),
      isUserSkill: true,
    };
    
    set((state) => ({
      userSkills: [...state.userSkills, newSkill]
    }));
  },
  
  updateUserSkill: (id, updates) => {
    set((state) => ({
      userSkills: state.userSkills.map((skill) => 
        skill.id === id ? { ...skill, ...updates } : skill
      )
    }));
  },
  
  deleteUserSkill: (id) => {
    set((state) => ({
      userSkills: state.userSkills.filter((skill) => skill.id !== id)
    }));
  },
  
  getSkillById: (id) => {
    return get().userSkills.find((skill) => skill.id === id) || 
           get().requiredSkills.find((skill) => skill.id === id);
  },
  
  filterSkillsByCategory: (category) => {
    return get().userSkills.filter((skill) => skill.category === category);
  },
  
  getSkillsForJob: (jobId) => {
    // This would typically fetch from an API
    // For now, return a subset of skills as an example
    return mockSkills.slice(0, 5);
  },
  
  loadSkillGaps: () => {
    set({ loading: true });
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const gaps = getSkillGaps();
      set({ 
        skillGaps: gaps,
        loading: false 
      });
    }, 500);
  }
}));