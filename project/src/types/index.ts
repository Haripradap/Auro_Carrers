// Application status options
export enum ApplicationStatus {
  SAVED = 'Saved',
  APPLIED = 'Applied',
  INTERVIEW = 'Interview',
  OFFER = 'Offer',
  REJECTED = 'Rejected',
  ACCEPTED = 'Accepted',
}

// Application priority options
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

// Application interface
export interface Application {
  id: string;
  companyName: string;
  position: string;
  location: string;
  jobType: string; // Full-time, Part-time, Internship, etc.
  salary?: string;
  applicationLink: string;
  dateApplied: string;
  deadline?: string;
  status: ApplicationStatus;
  priority: Priority;
  description?: string;
  notes?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  skills: Skill[];
  interviewDate?: string;
  followUpDate?: string;
}

// Skill interface
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  isUserSkill: boolean; // Whether the user has this skill
}

// Skill category options
export enum SkillCategory {
  TECHNICAL = 'Technical',
  SOFT = 'Soft',
  LANGUAGE = 'Language',
  TOOL = 'Tool',
  OTHER = 'Other',
}

// Skill level options
export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert',
}

// Resource for skill improvement
export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  skillId: string;
  description?: string;
  duration?: string;
  cost?: string;
  rating?: number;
}

// Resource type options
export enum ResourceType {
  COURSE = 'Course',
  TUTORIAL = 'Tutorial',
  ARTICLE = 'Article',
  BOOK = 'Book',
  VIDEO = 'Video',
  OTHER = 'Other',
}

// User profile
export interface User {
  id: string;
  name: string;
  email: string;
  title?: string;
  skills: Skill[];
  savedJobs: Application[];
  appliedJobs: Application[];
}

// Dashboard statistics
export interface DashboardStats {
  totalApplications: number;
  applicationsByStatus: Record<ApplicationStatus, number>;
  applicationsByMonth: Record<string, number>;
  skillGaps: SkillGapSummary[];
  upcomingDeadlines: Application[];
  upcomingInterviews: Application[];
}

// Skill gap summary
export interface SkillGapSummary {
  skillName: string;
  category: SkillCategory;
  frequency: number;
  resources: Resource[];
}