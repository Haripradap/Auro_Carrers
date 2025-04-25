import { 
  Application, 
  ApplicationStatus, 
  Priority, 
  Skill, 
  SkillCategory, 
  SkillLevel,
  Resource,
  ResourceType
} from '../types';

// Mock Skills
export const mockSkills: Skill[] = [
  { id: '1', name: 'React', category: SkillCategory.TECHNICAL, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '2', name: 'Node.js', category: SkillCategory.TECHNICAL, level: SkillLevel.BEGINNER, isUserSkill: true },
  { id: '3', name: 'Python', category: SkillCategory.TECHNICAL, level: SkillLevel.ADVANCED, isUserSkill: true },
  { id: '4', name: 'Communication', category: SkillCategory.SOFT, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '5', name: 'Leadership', category: SkillCategory.SOFT, level: SkillLevel.BEGINNER, isUserSkill: true },
  { id: '6', name: 'MongoDB', category: SkillCategory.TECHNICAL, level: SkillLevel.BEGINNER, isUserSkill: false },
  { id: '7', name: 'TypeScript', category: SkillCategory.TECHNICAL, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '8', name: 'Docker', category: SkillCategory.TOOL, level: SkillLevel.BEGINNER, isUserSkill: false },
  { id: '9', name: 'AWS', category: SkillCategory.TECHNICAL, level: SkillLevel.INTERMEDIATE, isUserSkill: false },
  { id: '10', name: 'Spanish', category: SkillCategory.LANGUAGE, level: SkillLevel.BEGINNER, isUserSkill: true },
  { id: '11', name: 'Project Management', category: SkillCategory.SOFT, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '12', name: 'Data Analysis', category: SkillCategory.TECHNICAL, level: SkillLevel.ADVANCED, isUserSkill: true },
  { id: '13', name: 'Git', category: SkillCategory.TOOL, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '14', name: 'SQL', category: SkillCategory.TECHNICAL, level: SkillLevel.INTERMEDIATE, isUserSkill: true },
  { id: '15', name: 'GraphQL', category: SkillCategory.TECHNICAL, level: SkillLevel.BEGINNER, isUserSkill: false },
];

// Mock Resources
export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'MongoDB University',
    type: ResourceType.COURSE,
    url: 'https://university.mongodb.com/',
    skillId: '6',
    description: 'Free MongoDB courses from beginner to advanced',
    duration: '4 weeks',
    cost: 'Free',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Docker for Beginners',
    type: ResourceType.TUTORIAL,
    url: 'https://docker-curriculum.com/',
    skillId: '8',
    description: 'A comprehensive introduction to Docker',
    duration: '3 hours',
    cost: 'Free',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'AWS Certified Solutions Architect',
    type: ResourceType.COURSE,
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    skillId: '9',
    description: 'Prepare for the AWS Solutions Architect certification',
    duration: '6 weeks',
    cost: '$149',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Advanced TypeScript Techniques',
    type: ResourceType.ARTICLE,
    url: 'https://www.typescriptlang.org/docs/',
    skillId: '7',
    description: 'Deep dive into advanced TypeScript features',
    duration: '30 minutes',
    cost: 'Free',
    rating: 4.2,
  },
  {
    id: '5',
    title: 'GraphQL Full Course',
    type: ResourceType.VIDEO,
    url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
    skillId: '15',
    description: 'Complete GraphQL tutorial with Node.js',
    duration: '4 hours',
    cost: 'Free',
    rating: 4.9,
  },
];

// Mock Applications
export const mockApplications: Application[] = [
  {
    id: '1',
    companyName: 'Tech Innovations Inc.',
    position: 'Frontend Developer Intern',
    location: 'San Francisco, CA (Remote)',
    jobType: 'Internship',
    salary: '$25/hr',
    applicationLink: 'https://techinnovations.com/careers',
    dateApplied: '2023-10-15',
    deadline: '2023-11-15',
    status: ApplicationStatus.INTERVIEW,
    priority: Priority.HIGH,
    description: 'Frontend development role focusing on React and TypeScript',
    notes: 'Had a great conversation with the recruiter. Technical interview scheduled.',
    contactName: 'Sarah Johnson',
    contactEmail: 'sarah.j@techinnovations.com',
    contactPhone: '415-555-1234',
    skills: [
      mockSkills[0], // React
      mockSkills[6], // TypeScript
      mockSkills[3], // Communication
      mockSkills[14], // GraphQL (not user skill)
    ],
    interviewDate: '2023-11-05',
    followUpDate: '2023-11-10',
  },
  {
    id: '2',
    companyName: 'Data Systems LLC',
    position: 'Data Analyst',
    location: 'New York, NY',
    jobType: 'Full-time',
    salary: '$80,000 - $95,000',
    applicationLink: 'https://datasystems.com/jobs',
    dateApplied: '2023-10-20',
    status: ApplicationStatus.APPLIED,
    priority: Priority.MEDIUM,
    description: 'Analyzing large datasets and creating visualizations',
    notes: 'Application submitted through their career portal. Waiting for a response.',
    skills: [
      mockSkills[2], // Python
      mockSkills[11], // Data Analysis
      mockSkills[13], // SQL
    ],
  },
  {
    id: '3',
    companyName: 'Cloud Solutions',
    position: 'DevOps Engineer',
    location: 'Austin, TX (Hybrid)',
    jobType: 'Full-time',
    salary: '$110,000 - $130,000',
    applicationLink: 'https://cloudsolutions.io/careers',
    dateApplied: '2023-10-10',
    status: ApplicationStatus.REJECTED,
    priority: Priority.LOW,
    description: 'Managing cloud infrastructure and CI/CD pipelines',
    notes: 'Received rejection email. They were looking for someone with more experience.',
    contactName: 'Michael Chen',
    contactEmail: 'm.chen@cloudsolutions.io',
    skills: [
      mockSkills[1], // Node.js
      mockSkills[7], // Docker (not user skill)
      mockSkills[8], // AWS (not user skill)
      mockSkills[12], // Git
    ],
  },
  {
    id: '4',
    companyName: 'Global Enterprises',
    position: 'Full Stack Developer',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$95,000 - $115,000',
    applicationLink: 'https://globalenterprises.com/jobs',
    dateApplied: '2023-11-01',
    deadline: '2023-12-01',
    status: ApplicationStatus.SAVED,
    priority: Priority.HIGH,
    description: 'Building and maintaining web applications using the MERN stack',
    skills: [
      mockSkills[0], // React
      mockSkills[1], // Node.js
      mockSkills[5], // MongoDB (not user skill)
      mockSkills[12], // Git
    ],
  },
  {
    id: '5',
    companyName: 'Startup Ventures',
    position: 'Product Manager Intern',
    location: 'Boston, MA',
    jobType: 'Internship',
    salary: '$23/hr',
    applicationLink: 'https://startupventures.co/opportunities',
    dateApplied: '2023-10-25',
    status: ApplicationStatus.OFFER,
    priority: Priority.HIGH,
    description: 'Working with cross-functional teams to define and launch products',
    notes: 'Received an offer! Need to decide by next week.',
    contactName: 'Jessica Miller',
    contactEmail: 'jessica@startupventures.co',
    contactPhone: '617-555-9876',
    skills: [
      mockSkills[3], // Communication
      mockSkills[4], // Leadership
      mockSkills[10], // Project Management
    ],
    interviewDate: '2023-11-10',
    followUpDate: '2023-11-15',
  },
];

// Get skills that the user is missing for specific job applications
export const getSkillGaps = () => {
  const skillGaps = [
    {
      skillName: 'MongoDB',
      category: SkillCategory.TECHNICAL,
      frequency: 12,
      resources: [mockResources[0]],
    },
    {
      skillName: 'Docker',
      category: SkillCategory.TOOL,
      frequency: 9,
      resources: [mockResources[1]],
    },
    {
      skillName: 'AWS',
      category: SkillCategory.TECHNICAL,
      frequency: 15,
      resources: [mockResources[2]],
    },
    {
      skillName: 'GraphQL',
      category: SkillCategory.TECHNICAL,
      frequency: 7,
      resources: [mockResources[4]],
    },
  ];
  
  return skillGaps;
};

// Generate dashboard statistics
export const getDashboardStats = () => {
  // Count applications by status
  const applicationsByStatus = mockApplications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {} as Record<ApplicationStatus, number>);

  // Count applications by month (simplified for mock data)
  const applicationsByMonth = {
    'Oct 2023': 4,
    'Nov 2023': 1,
    'Sep 2023': 2,
  };

  // Get upcoming deadlines
  const upcomingDeadlines = mockApplications
    .filter(app => app.deadline)
    .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime())
    .slice(0, 3);

  // Get upcoming interviews
  const upcomingInterviews = mockApplications
    .filter(app => app.interviewDate)
    .sort((a, b) => new Date(a.interviewDate!).getTime() - new Date(b.interviewDate!).getTime())
    .slice(0, 3);

  return {
    totalApplications: mockApplications.length,
    applicationsByStatus,
    applicationsByMonth,
    skillGaps: getSkillGaps(),
    upcomingDeadlines,
    upcomingInterviews,
  };
};