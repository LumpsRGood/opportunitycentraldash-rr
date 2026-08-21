import { DocumentItem } from '../types';
import { 
  ShieldAlert, 
  Flame, 
  KeyRound, 
  DoorClosed, 
  Wine, 
  Eye, 
  GraduationCap, 
  FileText, 
  FileSpreadsheet, 
  Receipt, 
  Landmark, 
  Car, 
  CreditCard, 
  Clock, 
  Users, 
  UserX, 
  AlertTriangle, 
  FileCheck, 
  Monitor, 
  HeartHandshake,
  BookOpen,
  Contact,
  Building
} from 'lucide-react';
import { ensureWebViewerUrl } from '../utils/urlHelper';

/**
 * Master Single-Source-of-Truth Document Repository
 * Every document is defined exactly once with its associated departments.
 */
export const MASTER_DOCUMENTS: DocumentItem[] = [
  // 1. Active Assailant Response Policy
  {
    id: 'sec-active-assailant',
    title: 'Active Assailant Response Policy',
    description: 'Comprehensive Run / Hide / Fight tactical response guidelines, team member safety measures, law enforcement arrival, and emergency communications.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'red',
    icon: ShieldAlert,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQAKo44okXhlQqpfbao67WVgARp6xAIIKlddR3AK2fT5wLg')
  },

  // 2. Bank Deposit Process
  {
    id: 'acc-bank-deposit',
    title: 'Bank Deposit Process',
    description: 'Procedures for daily POS safe drop balancing, dual-custody register verification, deposit slip preparation, and armored transit.',
    category: 'Cash Management',
    format: 'DOCX',
    bandClass: 'emerald',
    icon: Landmark,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQDfbZr3bUMRQIalSUmtrRFiAcNg6XLqMtBhoRglPGXQLrA')
  },

  // 3. Bomb Threat Policy
  {
    id: 'sec-bomb-threat',
    title: 'Bomb Threat Policy',
    description: 'Threat assessment checklist, caller interrogation guidelines, evacuation triggers, search protocols, and law enforcement escalation.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: AlertTriangle,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQCsCjYS15V8S59zeY9D-uY1Af6LC-sZXb5cH91DgLpLGOI')
  },

  // 4. Daily Cash Log (Renamed from Register Cash Reallocation Log)
  {
    id: 'acc-cash-log',
    title: 'Daily Cash Log',
    description: 'Spreadsheet log for balancing register funds, daily cash drawers, and documenting surplus/deficit cash transfers.',
    category: 'Cash Management',
    format: 'XLSX',
    bandClass: 'teal',
    icon: FileSpreadsheet,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:x:/p/gchadrick/IQDXzZ-07JL1RJ0xQCf6xDLSAdenN1wxMdrzJoICSub9pDo')
  },

  // 5. Daily Deposit Tracking Sheet
  {
    id: 'acc-deposit-tracking',
    title: 'Daily Deposit Tracking Sheet',
    description: 'Operational spreadsheet for cross-referencing daily POS shift drops with physical bank slips and smart safe bags.',
    category: 'Cash Management',
    format: 'XLSX',
    bandClass: 'emerald',
    icon: FileSpreadsheet,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:x:/p/gchadrick/IQAgbxz4E81qSL5qkIlQIk7OAYeTqiUlVS5gj5SOb6QCuJU')
  },

  // 6. De-Escalation Training Presentation
  {
    id: 'sec-de-escalation',
    title: 'De-Escalation Training Presentation',
    description: 'Interactive presentation covering conflict resolution, non-verbal cues, verbal diffuse tactics, and guest service recovery.',
    category: 'Training & Development',
    format: 'PPTX',
    bandClass: 'purple',
    icon: GraduationCap,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:p:/p/gchadrick/IQCJum4kcbOrQq_8a2-su7rdAXTz1qfO_sdJnwRoZHnLskU')
  },

  // 7. Divisional Cost Centers
  {
    id: 'acc-divisional-cost-centers',
    title: 'Divisional Cost Centers',
    description: 'Official master reference spreadsheet mapping store divisions, cost center allocations, and general ledger operational accounting codes.',
    category: 'Disbursements & AP',
    format: 'XLSX',
    bandClass: 'emerald',
    icon: Building,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:x:/p/gchadrick/IQAwLnM6F9bMSp453UeexfQLAQJUDV3mLqn6UD-V1J4viDk')
  },

  // 8. Emergency Opening & Closing Procedures
  {
    id: 'sec-opening-closing',
    title: 'Emergency Opening & Closing Procedures',
    description: 'Two-person verification rule, perimeter and interior safety checks, alarm management, lighting checks, and secure store lockup standards.',
    category: 'Operations & Access',
    format: 'DOCX',
    bandClass: 'amber',
    icon: KeyRound,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQAi9zhOEJtpTZpjqV52QELzAaxfRXc0LMP9NNwz9HQ2NdE')
  },

  // 9. Employee Corrective Action Form
  {
    id: 'hr-corrective-form',
    title: 'Employee Corrective Action Form',
    description: 'Official template for documenting counseling sessions, policy infractions, corrective action milestones, and team member acknowledgements.',
    category: 'Forms & Templates',
    format: 'DOCX',
    bandClass: 'orange',
    icon: FileCheck,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQB-MOg9AZrlQb_9omGUn6w7AbaKSvjRSQBbWL9PZ3qyOZY')
  },

  // 10. Employee Corrective Action Policy
  {
    id: 'hr-corrective-policy',
    title: 'Employee Corrective Action Policy',
    description: 'Progressive discipline standards, coaching protocols, verbal/written warnings, performance improvement plans, and employee rights.',
    category: 'Performance & Conduct',
    format: 'DOCX',
    bandClass: 'amber',
    icon: FileText,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQDChrMHNgtCTqiUaB9pFVIWAd7Yz1DjcVdjl53gSmBYxTE')
  },

  // 11. Employee Expense Reimbursement Policy
  {
    id: 'acc-expense-reimbursement',
    title: 'Employee Expense Reimbursement Policy',
    description: 'Standards for out-of-pocket manager expenses, approval thresholds, receipt archiving, and BDO reimbursement schedule.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'amber',
    icon: Receipt,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQB0rar9jGCfRYzZ9Fv1-VRwAW3OKl4UyaDh1JskJvEJijQ')
  },

  // 12. Employee Termination Form
  {
    id: 'hr-termination-form',
    title: 'Employee Termination Form',
    description: 'Standard checklist and documentation form for processing team member exits, separation reasons, and asset recovery.',
    category: 'Forms & Templates',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: FileCheck,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQBqumYq3NvwQ5T4A_3e6LdJAdKRJZgmFOiIfuTvgopzChU')
  },

  // 13. Employee Termination Policy
  {
    id: 'hr-termination-policy',
    title: 'Employee Termination Policy',
    description: 'Standard operating procedure for voluntary and involuntary separations, final paycheck calculation, equipment return, and HR notification.',
    category: 'Employment Standards',
    format: 'DOCX',
    bandClass: 'red',
    icon: UserX,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQDxJuMODJq0T5Q15SH54D7ZARhPhvYHpMvCwla81xQzpzc')
  },

  // 14. Evidence Preservation Process (Security Platform & HR)
  {
    id: 'doc-evidence-preservation',
    title: 'Evidence Preservation Process',
    description: 'Mandatory protocols for securing CCTV footage, register receipts, incident logs, witness contact statements, and physical accident evidence.',
    category: 'Investigations & Reporting',
    format: 'DOCX',
    bandClass: 'amber',
    icon: Eye,
    departments: ['Security Platform', 'Human Resources'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQAsOn5fc1whR6JRTPcDDfvuAcE1x5B36VfJSmEIukbETpA')
  },

  // 15. Guest & Vendor Incident Report Form (Insurance & Incidents & HR)
  {
    id: 'doc-guest-incident-form',
    title: 'Guest & Vendor Incident Report Form',
    description: 'Mandatory official report form for documenting guest slips, falls, burns, vehicle lot damage, or contractor incidents.',
    category: 'Incident Protocols',
    format: 'PDF',
    bandClass: 'crimson',
    icon: FileCheck,
    departments: ['Insurance & Incidents', 'Human Resources'],
    department: 'Insurance & Incidents',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:b:/p/gchadrick/IQBsOycmj7mBT7mOJIwWLv5yAeJznfpcc_aMXGbAXOXZUak')
  },

  // 16. Guest Incident Management Policy (Insurance & Incidents & HR)
  {
    id: 'doc-guest-incident-policy',
    title: 'Guest Incident Management Policy',
    description: 'Protocol for managing guest injuries, customer property incidents, claims mitigation, CCTV preservation, and insurance agent reporting.',
    category: 'Incident Protocols',
    format: 'DOCX',
    bandClass: 'red',
    icon: AlertTriangle,
    departments: ['Insurance & Incidents', 'Human Resources'],
    department: 'Insurance & Incidents',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQC8HzAl4pUhQIu9RmbdTI-nAUuopk8mdvxkXDbSnAo-ddE')
  },

  // 17. Health, Safety, and Security Policy (Renamed from Security Policy)
  {
    id: 'sec-security-policy',
    title: 'Health, Safety, and Security Policy',
    description: 'Master organizational security standards, cash management, physical security, workplace health & safety, keycard access controls, and surveillance management.',
    category: 'Safety & Compliance',
    format: 'DOCX',
    bandClass: 'red',
    icon: ShieldAlert,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQBLP2jlroYHQpneMnLun5NtATlVIWm3H3k1j2U9nWyN9Ss')
  },

  // 18. IT Processes and Procedures (Renamed from Opportunity Restaurant Group IT Process)
  {
    id: 'it-process',
    title: 'IT Processes and Procedures',
    description: 'Comprehensive store technical guide: POS terminal troubleshooting, kitchen display systems (KDS), router restarts, receipt printers, and helpdesk escalation.',
    category: 'Systems & Hardware',
    format: 'DOCX',
    bandClass: 'purple',
    icon: Monitor,
    departments: ['IT'],
    department: 'IT',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQBEX53fRuSpSJ8YERDFVHUnAdOvxiJpbht4VJ8PZ4VTgeI')
  },

  // 19. Lockdown Policy
  {
    id: 'sec-lockdown',
    title: 'Lockdown Policy',
    description: 'Circumstances triggering immediate full or shelter-in-place lockdown, entrance fortification, guest communication, and all-clear protocols.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'orange',
    icon: DoorClosed,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQCxXTlIGDiiQpvfFS4M_3tDATGYAC79Vi5lQW1Mdm98fvA')
  },

  // 20. Medical Emergency Policy
  {
    id: 'sec-medical-emergency',
    title: 'Medical Emergency Policy',
    description: 'Response protocols for sudden illness, guest or employee injuries, first aid guidelines, contacting EMS/911, and emergency scene preservation.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: HeartHandshake,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQD0gGuFSjTNSYJwAKoLoOgwAaGNFdECa35VPVLaTMWsU7M')
  },

  // 21. Mileage Reimbursement Policy
  {
    id: 'acc-mileage-policy',
    title: 'Mileage Reimbursement Policy',
    description: 'Vehicle travel allowances, eligible inter-store errands, travel log requirements, and standard per-mile IRS reimbursement rate.',
    category: 'Travel & Mileage',
    format: 'DOCX',
    bandClass: 'indigo',
    icon: Car,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQB0rar9jGCfRYzZ9Fv1-VRwAW3OKl4UyaDh1JskJvEJijQ')
  },

  // 22. Mileage Tracker & Reimbursement Form
  {
    id: 'acc-mileage-tracker',
    title: 'Mileage Tracker & Reimbursement Form',
    description: 'Pre-formatted spreadsheet template for calculating trip odometer mileage, purpose, tolls, and reimbursement amounts.',
    category: 'Travel & Mileage',
    format: 'XLSX',
    bandClass: 'emerald',
    icon: FileSpreadsheet,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:x:/p/gchadrick/IQBDdHRrn0L6RIXiWKbiyHxGAZP7BPfvXaK_GXqHqV5nvD0')
  },

  // 23. Opportunity Restaurant Group Contacts
  {
    id: 'hb-leadership-contacts',
    title: 'Opportunity Restaurant Group Contacts',
    description: 'Master organization directory of executive leadership, area directors, HR, payroll, accounting, and emergency restaurant store contacts.',
    category: 'Store Contacts',
    format: 'DOCX',
    bandClass: 'blue',
    icon: Contact,
    departments: ['Handbooks & Hub'],
    department: 'Handbooks & Hub',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQAJpoNcv7pgQJKHUFzNouW6AdgWrjrr8vBor9Vkb6oc8MA')
  },

  // 24. Opportunity Restaurant Group Employee Handbook
  {
    id: 'hb-master-handbook',
    title: 'Opportunity Restaurant Group Employee Handbook',
    description: 'Master store franchisee handbook covering employment standards, store procedures, benefit schedules, and team guidelines. (Pending final publication)',
    category: 'Store Handbook',
    format: 'DOCX',
    bandClass: 'purple',
    icon: BookOpen,
    departments: ['Handbooks & Hub'],
    department: 'Handbooks & Hub',
    sharepointUrl: undefined
  },

  // 25. Paid Out Policy
  {
    id: 'acc-paid-out',
    title: 'Paid Out Policy',
    description: 'Official rules for store petty cash disbursements, emergency supplies pre-approval, itemized receipt filing, and POS ledger posting.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'red',
    icon: Receipt,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQD2YGQoNPtZRrO4ZpM2bYNPAY8lhMJy2eLLUF7EKZ3zPHk')
  },

  // 26. Payroll Processing Policy & Guide
  {
    id: 'acc-payroll-guide',
    title: 'Payroll Processing Policy & Guide',
    description: 'Bi-weekly payroll schedule, tip credit handling, manager sign-off checklists, and submission cut-offs to BDO Accounting.',
    category: 'Payroll & Compensation',
    format: 'DOCX',
    bandClass: 'purple',
    icon: Landmark,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQCHabQfM01RRLFH_lnOkrSpARZVVVfAlsvBRM8pGPKZUjk')
  },

  // 27. Ramp Card Policy
  {
    id: 'acc-ramp-card-policy',
    title: 'Ramp Card Policy',
    description: 'Authorized cardholder rules, eligible operational expenditures, monthly receipt upload deadlines, and card security.',
    category: 'Corporate Cards',
    format: 'DOCX',
    bandClass: 'blue',
    icon: CreditCard,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQDtS5U-nf5SQKd77jQUvaH4AeFO62QGhb-M6GYYa7uzywA')
  },

  // 28. Ramp Ledger Coding (Renamed from RAMP GL Chart of Accounts Coding)
  {
    id: 'acc-ramp-gl-coding',
    title: 'Ramp Ledger Coding',
    description: 'Reference lookup spreadsheet for classifying general ledger codes, store divisions, and department allocations for Ramp expense reports.',
    category: 'Corporate Cards',
    format: 'XLSX',
    bandClass: 'teal',
    icon: FileSpreadsheet,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:x:/p/gchadrick/IQBfe6bWPNeOQYhY0XpgcA5LAQnxngA8uWi6-ybJRhwAo2Q')
  },

  // 29. Responsible Alcohol Service Policy (TABC)
  {
    id: 'sec-alcohol-policy',
    title: 'Responsible Alcohol Service Policy (TABC)',
    description: 'Mandatory alcohol service compliance rules, age verification (21+), checking valid government IDs, recognizing signs of customer intoxication, and refusal protocols.',
    category: 'Safety & Compliance',
    format: 'DOCX',
    bandClass: 'red',
    icon: Wine,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQBDa0kHC82KR5TULsdBkT7ZAeTIEq5bIe9y-ybuTQpw1NQ')
  },

  // 30. Restaurant Robbery Response Policy
  {
    id: 'sec-robbery-response',
    title: 'Restaurant Robbery Response Policy',
    description: 'Critical safety procedures during and after a robbery incident, non-confrontation protocols, safe operations, and immediate post-incident reporting.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'orange',
    icon: Flame,
    departments: ['Security Platform'],
    department: 'Security Platform',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQD_Wc8fubMyRZrdBAdv9mkxASklYuW65QBwfTOn8J8_3ek')
  },

  // 31. Sexual Harassment Prevention Training
  {
    id: 'hr-harassment-training',
    title: 'Sexual Harassment Prevention Training',
    description: 'Comprehensive training module on preventing workplace discrimination, harassment awareness, reporting avenues, and zero-tolerance commitments.',
    category: 'Training & Compliance',
    format: 'PPTX',
    bandClass: 'purple',
    icon: GraduationCap,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:p:/p/gchadrick/IQA7PN7yuiajSo5MK3TbZJo9AV8iGofWCZGsXxoM0aF6Ijg')
  },

  // 32. Team Member Standards & Appearance Policy
  {
    id: 'hb-appearance-standards',
    title: 'Team Member Standards & Appearance Policy',
    description: 'Official restaurant uniform policy, approved non-slip footwear requirements, personal hygiene, and grooming standards for front and back of house.',
    category: 'Store Standards',
    format: 'DOCX',
    bandClass: 'orange',
    icon: FileText,
    departments: ['Handbooks & Hub'],
    department: 'Handbooks & Hub',
    sharepointUrl: undefined
  },

  // 33. Timecard Adjustment Policy
  {
    id: 'hr-timecard-policy',
    title: 'Timecard Adjustment Policy',
    description: 'Rules for managing missed punches, overtime authorization, supervisor verification, and payroll compliance documentation.',
    category: 'Time & Attendance',
    format: 'DOCX',
    bandClass: 'blue',
    icon: Clock,
    departments: ['Human Resources'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQAaJXOCcYaKS4L9BCUUJS82AfLFpP4GmhK8RvYryb7lNfM')
  },

  // 34. Vendor Setup Policy (Renamed from Vendor Setup Policy & W-9 Requirements)
  {
    id: 'acc-vendor-setup',
    title: 'Vendor Setup Policy',
    description: 'Process for onboarding new restaurant suppliers, W-9 and Certificate of Insurance verification, and AP approval.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'orange',
    icon: Users,
    departments: ['BDO & Accounting'],
    department: 'BDO & Accounting',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQBkWdzMkVuzSpbxT3vK8vg2ARE5pBsclgLQaYPtYk0g3UQ')
  },

  // 35. Workers Comp Policy (Renamed from Opportunity Restaurant Group Workers Comp Policy)
  {
    id: 'doc-workers-comp-policy',
    title: 'Workers Comp Policy',
    description: 'Team member injury protocols, mandatory 24-hour reporting, designated medical clinic referral, and claims documentation.',
    category: 'Safety & Benefits',
    format: 'DOCX',
    bandClass: 'emerald',
    icon: FileText,
    departments: ['Human Resources', 'Insurance & Incidents'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:w:/p/gchadrick/IQDOzpMwfGAQSYQB3UyYRFAyASuPYhd62-VXhq-CCHG7V8c')
  },

  // 36. Workers Compensation Claim Form (HR & Insurance)
  {
    id: 'doc-workers-comp-claim',
    title: 'Workers Compensation Claim Form',
    description: 'Official initial incident and medical claim filing document for employee workplace injuries.',
    category: 'Forms & Templates',
    format: 'PDF',
    bandClass: 'crimson',
    icon: FileCheck,
    departments: ['Human Resources', 'Insurance & Incidents'],
    department: 'Human Resources',
    sharepointUrl: ensureWebViewerUrl('https://opportunityrestaurantgroup-my.sharepoint.com/:b:/p/gchadrick/IQDaDaKkqJjuSYqVmys0II22AbRi63iLLx38YhKnXiefLpE')
  }
];

// Department Filtered Subsets (Alphabetical A-Z)
export const SECURITY_PLATFORM_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('Security Platform'))
  .sort((a, b) => a.title.localeCompare(b.title));

export const HUMAN_RESOURCES_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('Human Resources'))
  .sort((a, b) => a.title.localeCompare(b.title));

export const BDO_ACCOUNTING_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('BDO & Accounting'))
  .sort((a, b) => a.title.localeCompare(b.title));

export const INSURANCE_INCIDENTS_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('Insurance & Incidents'))
  .sort((a, b) => a.title.localeCompare(b.title));

export const IT_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('IT'))
  .sort((a, b) => a.title.localeCompare(b.title));

export const HANDBOOK_DOCS: DocumentItem[] = MASTER_DOCUMENTS
  .filter(d => d.departments?.includes('Handbooks & Hub'))
  .sort((a, b) => a.title.localeCompare(b.title));

// Master Unified Document Collection (Unique A-Z, zero duplicates)
export const ALL_DOCUMENTS: DocumentItem[] = [...MASTER_DOCUMENTS]
  .sort((a, b) => a.title.localeCompare(b.title));
