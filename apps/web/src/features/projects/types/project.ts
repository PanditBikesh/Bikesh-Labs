export interface Project {
  slug: string;

  title: string;

  category: string;

  description: string;

  overview: string;

  problem: string;

  solution: string;

  architecture?: string;
  architectureBlocks?: {
    title: string;
    description: string;
  }[]; 

  technologies: string[];

  features: string[];

  challenges: string[];

  future: string[];

  image: string;

  screenshots: string[];

  github: string;

  demo?: string;

  year: string;

  status: string;

  featured: boolean;

 
}