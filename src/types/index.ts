export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  thumbnail: string;
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'Maintained';
  completionDate: string;
  category: string;
  featured: boolean;
  challenges: string[];
  solutions: string[];
  architecture?: string;
  keyFeatures: string[];
  lessonsLearned: string[];
  tags: string[];
  futureImprovements: string[];
}

export interface Skill {
  name: string;
  logo?: string;
  category: string;
  years: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  type: 'Full-time' | 'Internship' | 'Freelance' | 'Open Source' | 'Volunteer';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}