export interface ResumeStats {
  yearsOfLearning: string;

  totalProjects: string;

  technologies: string;

  certificates: string;
}

export interface ResumeSummary {
  name: string;

  roles: string[];

  tagline: string;

  location: string;

  email: string;

  phone: string;

  website: string;

  github: string;

  linkedin: string;

  professionalSummary: string;

  availability: string;

  resumeVersion: string;

  stats: ResumeStats;
}