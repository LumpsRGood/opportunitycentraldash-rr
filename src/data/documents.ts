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
  ClipboardSignature
} from 'lucide-react';

// 1. Security Platform Documents (Alphabetical A-Z)
export const SECURITY_PLATFORM_DOCS: DocumentItem[] = [
  {
    id: 'sec-active-assailant',
    title: 'Active Assailant Response Policy',
    description: 'Comprehensive Run / Hide / Fight tactical response guidelines, team member safety measures, law enforcement arrival, and emergency communications.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'red',
    icon: ShieldAlert,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Active_Assailant_Response_Policy.docx?d=w6740e253f0cf42168917c7c07f5e2e47'
  },
  {
    id: 'sec-bomb-threat',
    title: 'Bomb Threat Policy & Action Plan',
    description: 'Threat assessment checklist, caller interrogation guidelines, evacuation triggers, search protocols, and law enforcement escalation.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: AlertTriangle,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Opportunity_Restaurant_Group_Bomb_Threat_Policy.docx?d=wa912abe096364ae2a76a5e0db93bc73b'
  },
  {
    id: 'sec-de-escalation',
    title: 'De-Escalation Training Presentation',
    description: 'Interactive presentation covering conflict resolution, non-verbal cues, verbal diffuse tactics, and guest service recovery.',
    category: 'Training & Development',
    format: 'PPTX',
    bandClass: 'purple',
    icon: GraduationCap,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/De-Escalation_Training_Opportunity_Restaurant_Group.pptx?d=wd85c7491e1f54824b178e92eb351c2ad'
  },
  {
    id: 'sec-opening-closing',
    title: 'Emergency Opening & Closing Procedures',
    description: 'Two-person verification rule, perimeter and interior safety checks, alarm management, lighting checks, and secure store lockup standards.',
    category: 'Operations & Access',
    format: 'DOCX',
    bandClass: 'amber',
    icon: KeyRound,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Emergency_Opening_Closing_Procedures.docx?d=w7762eab8201a47599e6221a69754375a'
  },
  {
    id: 'sec-evidence-preservation',
    title: 'Evidence Preservation Process',
    description: 'Mandatory protocols for securing CCTV footage, register receipts, incident logs, witness contact statements, and physical accident evidence.',
    category: 'Investigations & Reporting',
    format: 'DOCX',
    bandClass: 'amber',
    icon: Eye,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Evidence_Preservation_Process.docx?d=wf9ab23c17da74c679c2acc8b8ea8d069'
  },
  {
    id: 'sec-medical-emergency',
    title: 'Medical Emergency Policy',
    description: 'Response protocols for sudden illness, guest or employee injuries, first aid guidelines, contacting EMS/911, and emergency scene preservation.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: HeartHandshake,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Medical_Emergency_Policy.docx?d=w856b80f4344a49cd827000aa0ba0e830'
  },
  {
    id: 'sec-security-policy',
    title: 'Opportunity Restaurant Group Security Policy',
    description: 'Master organizational security standards, cash management, physical security, keycard access controls, and surveillance management.',
    category: 'Safety & Compliance',
    format: 'DOCX',
    bandClass: 'red',
    icon: ShieldAlert,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Opportunity_Restaurant_Group_Security_Policy_1.docx?d=we5683f4b86ae420799de3272ee9f936d'
  },
  {
    id: 'sec-alcohol-policy',
    title: 'Responsible Alcohol Service Policy (TABC)',
    description: 'Mandatory alcohol service compliance rules, age verification (21+), checking valid government IDs, recognizing signs of customer intoxication, and refusal protocols.',
    category: 'Safety & Compliance',
    format: 'DOCX',
    bandClass: 'red',
    icon: Wine,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Opportunity_Restaurant_Group_Responsible_Alcohol_Service_Policy.docx?d=w63336079242540169a7084ca48aad228'
  },
  {
    id: 'sec-robbery-response',
    title: 'Restaurant Robbery Response Policy',
    description: 'Critical safety procedures during and after a robbery incident, non-confrontation protocols, safe operations, and immediate post-incident reporting.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'orange',
    icon: Flame,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Restaurant%20Robbery%20Response%20Policy.docx?d=w1fcf59ffb3b945329add04076ff66931'
  },
  {
    id: 'sec-lockdown',
    title: 'Store Lockdown Policy',
    description: 'Circumstances triggering immediate full or shelter-in-place lockdown, entrance fortification, guest communication, and all-clear protocols.',
    category: 'Emergency Procedures',
    format: 'DOCX',
    bandClass: 'orange',
    icon: DoorClosed,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Opportunity_Restaurant_Group_Lockdown_Policy.docx?d=w47c83269416d44c29cb7e7ba3e5a9d78'
  }
];

// 2. Human Resources Documents (Alphabetical A-Z)
export const HUMAN_RESOURCES_DOCS: DocumentItem[] = [
  {
    id: 'hr-corrective-form',
    title: 'Employee Corrective Action Form',
    description: 'Official template for documenting counseling sessions, policy infractions, corrective action milestones, and team member acknowledgements.',
    category: 'Forms & Templates',
    format: 'DOCX',
    bandClass: 'orange',
    icon: FileCheck,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_Restaurant_Group_Corrective_Action_Form.docx?d=w76b195b8570e4d79818cb7e91ed03304'
  },
  {
    id: 'hr-corrective-policy',
    title: 'Employee Corrective Action Policy',
    description: 'Progressive discipline standards, coaching protocols, verbal/written warnings, performance improvement plans, and employee rights.',
    category: 'Performance & Conduct',
    format: 'DOCX',
    bandClass: 'amber',
    icon: FileText,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_Restaurant_Group_Corrective_Action_Policy.docx?d=w5aa1322829cc483082278b8bb20dd9b0'
  },
  {
    id: 'hr-termination-form',
    title: 'Employee Termination Form',
    description: 'Standard checklist and documentation form for processing team member exits, separation reasons, and asset recovery.',
    category: 'Forms & Templates',
    format: 'DOCX',
    bandClass: 'crimson',
    icon: FileCheck,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_Restaurant_Group_Employee_Termination_Form.docx?d=wf78cd917619f4fdbb28015089f762f23'
  },
  {
    id: 'hr-termination-policy',
    title: 'Employee Termination Policy',
    description: 'Standard operating procedure for voluntary and involuntary separations, final paycheck calculation, equipment return, and HR notification.',
    category: 'Employment Standards',
    format: 'DOCX',
    bandClass: 'red',
    icon: UserX,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_Restaurant_Group_Employee_Termination_Policy_with_Logo.docx?d=w7a053b5fdd0547f988d2ecb34486cb85'
  },
  {
    id: 'hr-harassment-training',
    title: 'Sexual Harassment Prevention Training',
    description: 'Comprehensive training module on preventing workplace discrimination, harassment awareness, reporting avenues, and zero-tolerance commitments.',
    category: 'Training & Compliance',
    format: 'PPTX',
    bandClass: 'purple',
    icon: GraduationCap,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_RG_Sexual_Harassment_Prevention_Training.pptx?d=w76d4096a97dc4f78a362635bbdab847d'
  },
  {
    id: 'hr-timecard-policy',
    title: 'Timecard Adjustment Policy',
    description: 'Rules for managing missed punches, overtime authorization, supervisor verification, and payroll compliance documentation.',
    category: 'Time & Attendance',
    format: 'DOCX',
    bandClass: 'blue',
    icon: Clock,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Timecard%20adjustment%20Policy.docx?d=w5a58542953cb4185bd2702a5a76b34a8'
  },
  {
    id: 'hr-workers-comp-claim',
    title: 'Workers Compensation Claim Form',
    description: 'Official initial incident and medical claim filing document for employee workplace injuries.',
    category: 'Forms & Templates',
    format: 'PDF',
    bandClass: 'crimson',
    icon: FileCheck,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Workers%20comp%20form.pdf?web=1'
  },
  {
    id: 'hr-workers-comp-policy',
    title: 'Workers Compensation Policy',
    description: 'Team member injury protocols, mandatory 24-hour reporting, designated medical clinic referral, and claims documentation.',
    category: 'Safety & Benefits',
    format: 'DOCX',
    bandClass: 'emerald',
    icon: FileText,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opp%20Restaurant%20Group%20Workers%20Comp%20Policy.docx?d=w49b6a97cdbb44752880600b470d059e0'
  }
];

// 3. BDO & Accounting Documents (Alphabetical A-Z)
export const BDO_ACCOUNTING_DOCS: DocumentItem[] = [
  {
    id: 'acc-bank-deposit',
    title: 'Bank Deposit & Safe Drop Process',
    description: 'Procedures for daily POS safe drop balancing, dual-custody register verification, deposit slip preparation, and armored transit.',
    category: 'Cash Management',
    format: 'DOCX',
    bandClass: 'emerald',
    icon: Landmark,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Bank%20Deposit%20Process.docx?d=wd800af4537e1470ba1e9262836d5b334'
  },
  {
    id: 'acc-deposit-tracking',
    title: 'Daily Deposit Tracking Sheet',
    description: 'Operational spreadsheet for cross-referencing daily POS shift drops with physical bank slips and smart safe bags.',
    category: 'Cash Management',
    format: 'XLSX',
    bandClass: 'emerald',
    icon: FileSpreadsheet,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Deposit_Tracking_Form.xlsx?d=wfff3c8c9cbcc410d9c8eb314f16d5fb8'
  },
  {
    id: 'acc-expense-reimbursement',
    title: 'Employee Expense Reimbursement Policy',
    description: 'Standards for out-of-pocket manager expenses, approval thresholds, receipt archiving, and BDO reimbursement schedule.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'amber',
    icon: Receipt,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Opp%20Restaurant%20Group%20Employee%20Expense%20Reimbursment%20Policy.docx?d=w6f6669e07e974383b4a6b9e446eb4516'
  },
  {
    id: 'acc-mileage-policy',
    title: 'Mileage Reimbursement Policy',
    description: 'Vehicle travel allowances, eligible inter-store errands, travel log requirements, and standard per-mile IRS reimbursement rate.',
    category: 'Travel & Mileage',
    format: 'DOCX',
    bandClass: 'indigo',
    icon: Car,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Opportunity%20Restaurant%20Group%20Mileage%20%20Policy.docx?d=w34b4686c4ec147d09b9cd6efd2484a50'
  },
  {
    id: 'acc-mileage-tracker',
    title: 'Mileage Tracker & Reimbursement Form',
    description: 'Pre-formatted spreadsheet template for calculating trip odometer mileage, purpose, tolls, and reimbursement amounts.',
    category: 'Travel & Mileage',
    format: 'XLSX',
    bandClass: 'emerald',
    icon: FileSpreadsheet,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Mileage%20tracker-Reimbursement%20form.xlsx?d=wa889bbfa25db4d60baea3dc30ac0ada7'
  },
  {
    id: 'acc-paid-out',
    title: 'Paid Out Policy & Accounting Rules',
    description: 'Guidelines for store petty cash disbursements, emergency supplies pre-approval, itemized receipt filing, and POS ledger posting.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'red',
    icon: Receipt,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Paid%20Out%20Policy.docx?d=wf986b1ed99434c12866ac237f94bc373'
  },
  {
    id: 'acc-payroll-guide',
    title: 'Payroll Processing Policy & Guide',
    description: 'Bi-weekly payroll schedule, tip credit handling, manager sign-off checklists, and submission cut-offs to BDO Accounting.',
    category: 'Payroll & Compensation',
    format: 'DOCX',
    bandClass: 'purple',
    icon: Landmark,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Payroll%20Process.docx?d=wa322d29554e84142a758129f0adb4fc7'
  },
  {
    id: 'acc-ramp-card-policy',
    title: 'Ramp Corporate Card Policy',
    description: 'Authorized cardholder rules, eligible operational expenditures, monthly receipt upload deadlines, and card security.',
    category: 'Corporate Cards',
    format: 'DOCX',
    bandClass: 'blue',
    icon: CreditCard,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Ramp_Card_Policy.docx?d=wb93ae5756f8144bc8fe7aae7e58991fe'
  },
  {
    id: 'acc-ramp-gl-coding',
    title: 'RAMP GL Chart of Accounts Coding',
    description: 'Reference lookup table for classifying general ledger codes and department allocations for Ramp expense reports.',
    category: 'Corporate Cards',
    format: 'CSV',
    bandClass: 'teal',
    icon: FileSpreadsheet,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/RAMPCODING.csv?d=w4d5b26651e1141b39a02bb758ddc6907'
  },
  {
    id: 'acc-cash-log',
    title: 'Register Cash Reallocation Log',
    description: 'Spreadsheet log for balancing register funds and documenting surplus/deficit cash transfers across sister store locations.',
    category: 'Cash Management',
    format: 'ODS',
    bandClass: 'teal',
    icon: FileSpreadsheet,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Cash%20Log.ods?d=w32a801b370f9410ab7ea52ca730c72ae'
  },
  {
    id: 'acc-vendor-setup',
    title: 'Vendor Setup Policy & W-9 Requirements',
    description: 'Process for onboarding new restaurant suppliers, W-9 and Certificate of Insurance verification, and AP approval.',
    category: 'Disbursements & AP',
    format: 'DOCX',
    bandClass: 'orange',
    icon: Users,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDOAccounting/Opp%20Restaurant%20Group%20Vendor%20Setup%20Policy.docx?d=w324b504436d44891a28777dbece475ec'
  }
];

// 4. Insurance & Incidents Documents (Alphabetical A-Z)
export const INSURANCE_INCIDENTS_DOCS: DocumentItem[] = [
  {
    id: 'inc-guest-incident-form',
    title: 'Guest & Vendor Incident Report Form',
    description: 'Mandatory official report form for documenting guest slips, falls, burns, vehicle lot damage, or contractor incidents.',
    category: 'Incident Protocols',
    format: 'PDF',
    bandClass: 'crimson',
    icon: FileCheck,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/InsuranceAndIncidents/Guest-VendorIncident%20Report%20(1).pdf?web=1'
  },
  {
    id: 'inc-guest-incident-policy',
    title: 'Guest Incident Management Policy',
    description: 'Protocol for managing guest injuries, customer property incidents, claims mitigation, CCTV preservation, and insurance agent reporting.',
    category: 'Incident Protocols',
    format: 'DOCX',
    bandClass: 'red',
    icon: AlertTriangle,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/InsuranceAndIncidents/Opp%20Restaurant%20Group%20Guest%20Incident%20Policy.docx?d=w4daeae96c1ec4e79aba1bd275802c71a'
  },
  {
    id: 'inc-workers-comp-form',
    title: 'Workers Comp Employee Claim Form',
    description: 'First Report of Injury documentation packet for medical care providers and insurance adjusters.',
    category: 'Workplace Safety',
    format: 'PDF',
    bandClass: 'crimson',
    icon: FileCheck,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/InsuranceAndIncidents/Workers%20comp%20form.pdf?web=1'
  },
  {
    id: 'inc-workers-comp-policy',
    title: 'Workers Compensation Incident Policy',
    description: 'Employer duty of care, Select First Insurance guidelines, emergency medical authorization, and OSHA compliance reporting.',
    category: 'Workplace Safety',
    format: 'DOCX',
    bandClass: 'orange',
    icon: FileText,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/InsuranceAndIncidents/Opp%20Restaurant%20Group%20Workers%20Comp%20Policy.docx?d=w46acef543a7547149bc6530bf91ab81d'
  }
];

// 5. IT Documents (Alphabetical A-Z)
export const IT_DOCS: DocumentItem[] = [
  {
    id: 'it-process',
    title: 'Opportunity Restaurant Group IT Process',
    description: 'Comprehensive store technical guide: POS terminal troubleshooting, kitchen display systems (KDS), router restarts, receipt printers, and helpdesk escalation.',
    category: 'Systems & Hardware',
    format: 'DOCX',
    bandClass: 'purple',
    icon: Monitor,
    sharepointUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/IT/Opportunity_Restaurant_Group_IT_Process.docx?d=wdf9d5f44e44648a99f181110c5547527'
  }
];

// 6. Handbooks - Placeholders for upcoming store documentation (Alphabetical A-Z)
export const HANDBOOK_DOCS: DocumentItem[] = [
  {
    id: 'hb-master-handbook',
    title: 'Opportunity Restaurant Group Employee Handbook',
    description: 'Master store franchisee handbook covering employment standards, store procedures, benefit schedules, and team guidelines. (Pending final publication)',
    category: 'Store Handbook',
    format: 'DOCX',
    bandClass: 'purple',
    icon: BookOpen,
    sharepointUrl: undefined // Placeholder as requested
  },
  {
    id: 'hb-appearance-standards',
    title: 'Team Member Standards & Appearance Policy',
    description: 'Official restaurant uniform policy, approved non-slip footwear requirements, personal hygiene, and grooming standards for front and back of house.',
    category: 'Store Standards',
    format: 'DOCX',
    bandClass: 'orange',
    icon: FileText,
    sharepointUrl: undefined // Placeholder as requested
  }
];

// 7. Master Document Hub Collection (All 36 documents across all departments, sorted alphabetically A-Z)
export const ALL_DOCUMENTS: (DocumentItem & { department: string })[] = [
  ...SECURITY_PLATFORM_DOCS.map(d => ({ ...d, department: 'Security Platform' })),
  ...HUMAN_RESOURCES_DOCS.map(d => ({ ...d, department: 'Human Resources' })),
  ...BDO_ACCOUNTING_DOCS.map(d => ({ ...d, department: 'BDO & Accounting' })),
  ...INSURANCE_INCIDENTS_DOCS.map(d => ({ ...d, department: 'Insurance & Incidents' })),
  ...IT_DOCS.map(d => ({ ...d, department: 'IT' })),
  ...HANDBOOK_DOCS.map(d => ({ ...d, department: 'Handbooks' }))
].sort((a, b) => a.title.localeCompare(b.title));
