import { DivideIcon as LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bulletPoints: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}