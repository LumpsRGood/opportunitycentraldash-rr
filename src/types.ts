import { LucideIcon } from 'lucide-react';

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
}
