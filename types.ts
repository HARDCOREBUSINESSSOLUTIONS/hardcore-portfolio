
export type ProjectStatus = 'live' | 'production' | 'case_study' | 'prototype';
export type ClientType = 'in_house' | 'client';
export type CommissionIntent = 'tattoo' | 'ai_systems' | 'web_app' | 'brand' | 'unsure';

export interface ProjectMetrics {
  users?: string;
  revenue?: string;
  uptime?: string;
  custom?: Record<string, string>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  description: string;
  techStack: string[];
  link?: string;
  caseStudyLink?: string;
  status: ProjectStatus;
  proofTags: string[];
  clientType: ClientType;
  metrics?: ProjectMetrics;
}

export interface Capability {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  bullets: string[];
  icon: string;
  linkTarget?: string;
}

export interface CommissionRequest {
  name: string;
  email: string;
  intent: CommissionIntent;
  priority?: string;
  budgetRange?: string;
  timeline?: string;
  details?: string;
}
