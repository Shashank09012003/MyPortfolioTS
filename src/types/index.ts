export interface NavLink {
  id: string;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  color: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}