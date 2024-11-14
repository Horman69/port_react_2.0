export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export type Theme = 'light' | 'dark';
