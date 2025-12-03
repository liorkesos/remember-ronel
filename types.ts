export interface NavItem {
  label: string;
  id: string;
}

export interface Memory {
  id: string;
  author: string;
  content: string;
  date: string;
  isAiRefined?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  BIO = 'bio',
  GALLERY = 'gallery',
  PROJECTS = 'projects',
  MEMORIES = 'memories',
  THANK_YOU = 'thank-you',
}