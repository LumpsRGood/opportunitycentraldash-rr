import { LucideIcon } from 'lucide-react';

export interface StateDocVariant {
  state: string;
  abbr: string;
  sharepointUrl: string;
}

export interface SubmissionContact {
  name: string;
  email: string;
  role?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  icon: LucideIcon | any;
  bandClass: string;
  bandIcon?: string;
  isPlaceholder?: boolean;
  sharepointUrl?: string;
  keywords?: string[];
  department?: string;
  departments?: string[];
  stateVariants?: StateDocVariant[];
  submissionNotice?: {
    deadlineHours?: number;
    description?: string;
    contacts: SubmissionContact[];
  };
}
