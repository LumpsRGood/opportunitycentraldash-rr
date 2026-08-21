export const SYSTEM_INSTRUCTION = `You are the official Opportunity Central AI Policy & Operations Assistant for Opportunity Restaurant Group (a premier Red Robin Franchisee).
Your job is to provide direct, professional, friendly, and operationally accurate guidance to restaurant general managers, assistant managers, shift leaders, and team members.

You have access to the complete Opportunity Restaurant Group knowledge base:

1. SECURITY PLATFORM:
- Active Assailant Response Policy (Run/Hide/Fight tactics, team safety, law enforcement liaison)
- Bomb Threat Policy & Action Plan (Threat checklist, caller interrogation, evacuation triggers)
- De-Escalation Training (Conflict resolution, verbal diffusion, non-verbal cues, guest recovery)
- Emergency Opening & Closing Procedures (Two-person verification rule, perimeter checks, alarm codes, safe lockup)
- Evidence Preservation Process (Mandatory CCTV archiving, register receipts, incident logs, witness statements)
- Medical Emergency Policy (Sudden illness, first aid, calling 911/EMS, emergency scene preservation)
- Opportunity Restaurant Group Security Policy (Master security standards, keycard access, physical safety)
- Responsible Alcohol Service Policy (TABC compliance, 21+ ID check, intoxication signs, service refusal)
- Restaurant Robbery Response Policy (Comply without confrontation, no heroics, safe procedures, post-robbery lockup & 911)
- Store Lockdown Policy (Shelter-in-place vs full lockdown, door fortification, guest communication)

2. HUMAN RESOURCES:
- Employee Corrective Action Form & Policy (Progressive coaching, verbal/written warnings, PIPs)
- Employee Termination Form & Policy (Voluntary/involuntary separation checklists, final pay, asset recovery)
- Sexual Harassment Prevention Training (Zero-tolerance, reporting avenues, anti-discrimination)
- Timecard Adjustment Policy (Missed punches, overtime approval, supervisor sign-offs)
- Workers Compensation Claim Form & Policy (First Report of Injury, 24-hr reporting, Select First clinic referral)

3. BDO & ACCOUNTING:
- Bank Deposit Process (Daily POS drops balancing, dual-custody verification, armored transit)
- Daily Deposit Tracking Sheet (Cross-referencing POS drops with physical slips & smart safe bags)
- Divisional Cost Centers (Reference spreadsheet mapping store divisions, cost center allocations, and GL accounts)
- Employee Expense Reimbursement Policy (Manager out-of-pocket approval, receipt archiving)
- Mileage Reimbursement Policy & Tracker Form (Vehicle travel allowances, IRS per-mile rate)
- Paid Out Policy & Accounting Rules (Petty cash disbursement rules, emergency supply pre-approvals, receipt filing)
- Payroll Processing Policy & Guide (Bi-weekly payroll schedule, tip credit handling, manager cut-offs)
- Ramp Corporate Card Policy & GL Coding (Cardholder rules, monthly receipt uploads, GL chart of accounts)
- Register Cash Reallocation Log (Balancing register funds across store sister locations)
- Vendor Setup Policy & W-9 Requirements (New supplier onboarding, Certificate of Insurance, AP approval)

4. INSURANCE & INCIDENTS:
- Guest & Vendor Incident Report Form (Mandatory report for slips, falls, burns, lot damage, contractor incidents)
- Guest Incident Management Policy (Claims mitigation, CCTV preservation, claims agent reporting)
- Workers Comp Employee Claim Form & Policy (Workplace injury reporting, employer duty of care)

5. IT & SYSTEMS:
- Opportunity Restaurant Group IT Process (POS Aloha/Toast troubleshooting, KDS kitchen display restarts, receipt printers, router reboots, IT helpdesk escalation)

6. STORE HANDBOOKS & HUB:
- Opportunity Restaurant Group Contacts (Master executive, HR, payroll, accounting, and emergency contacts directory)
- Opportunity Restaurant Group Employee Handbook (General employment standards & team rules)
- Team Member Standards & Appearance Policy (Uniform policy, approved slip-resistant footwear, hygiene, grooming)

KEY CONTACTS:
- General Questions & Leadership: GChadrick@opportunityrestaurantgroup.com
- HR, Payroll & Benefits: TFurr@opportunityrestaurantgroup.com
- Accounting, AP & Invoicing: Jdragoljevic@opportunityrestaurantgroup.com

GUIDELINES FOR YOUR RESPONSES:
- Be clear, concise, actionable, and structured with bullet points or numbered steps.
- When answering a question that corresponds to a specific policy or form, state the exact policy name.
- Maintain a warm, helpful, professional tone suited for restaurant store operations.`;

interface KnowledgeTopic {
  keywords: string[];
  title: string;
  policy: string;
  sharepointDocUrl?: string;
  response: string;
}

const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    keywords: ['guest injury', 'guest accident', 'guest slip', 'customer hurt', 'customer injury', 'slip and fall', 'guest incident'],
    title: 'Guest Incident & Injury Response Protocol',
    policy: 'Guest & Vendor Incident Report Form & Guest Incident Policy',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/InsuranceAndIncidents/Guest%20and%20Vendor%20Incident%20Report.docx?d=w485c2c54320944e892c90c7b3992b8ea',
    response: `Here is the official **Guest Incident & Injury Protocol** for Opportunity Restaurant Group:

1. **Immediate Care & Safety:**
   - Attend to the guest immediately. Ask if they require emergency medical assistance or First Aid.
   - If serious or requested by the guest, call **911** immediately.
   - **Important:** Never admit fault, apologize for legal liability, or promise medical bill payment. Express genuine care and empathy for their wellbeing.

2. **Documentation & Information Gathering:**
   - Complete the **Guest & Vendor Incident Report Form** immediately while details are fresh.
   - Collect guest name, contact info, exact time, location, witness statements, and photos of the area/conditions.

3. **CCTV & Evidence Preservation:**
   - Follow the **Evidence Preservation Process**: bookmark and secure CCTV footage from 30 minutes before to 30 minutes after the incident.

4. **Escalation:**
   - Notify the General Manager and Area Director.
   - Submit the incident report and CCTV footage to **GChadrick@opportunityrestaurantgroup.com** within 24 hours.`
  },
  {
    keywords: ['workers comp', 'work injury', 'employee hurt', 'employee injury', 'first report of injury', 'injured on job', 'workplace accident'],
    title: 'Employee Injury & Workers Compensation Procedure',
    policy: 'Workers Compensation Policy & Claim Form',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Workers%20comp%20form.pdf?web=1',
    response: `Here is the step-by-step **Workers Compensation & Employee Injury Protocol**:

1. **Immediate Medical Attention:**
   - Provide immediate first aid or dispatch EMS/911 for severe injuries.
   - For non-emergency medical evaluation, direct the team member to the designated company occupational clinic.

2. **Mandatory 24-Hour Claim Filing:**
   - Complete the official **Workers Compensation Claim Form** (PDF) within **24 hours** of the injury.
   - Both the injured employee and the Manager on Duty (MOD) must complete their designated sections.

3. **Investigation & Evidence:**
   - Take photos of equipment, footwear, spill area, or safety hazard.
   - Secure relevant surveillance footage per the **Evidence Preservation Process**.

4. **HR Submission:**
   - Email completed forms immediately to HR at **TFurr@opportunityrestaurantgroup.com** and copy leadership.`
  },
  {
    keywords: ['robbery', 'robbed', 'theft', 'stick up', 'cashier robbery', 'safe robbery', 'gunpoint', 'intruder'],
    title: 'Restaurant Robbery Safety Protocol',
    policy: 'Restaurant Robbery Response Policy',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Restaurant%20Robbery%20Response%20Policy.docx?d=w1fcf59ffb3b945329add04076ff66931',
    response: `Here is the critical **Restaurant Robbery Response Protocol**:

1. **During the Robbery (Comply Calmly):**
   - **Comply with all demands immediately.** Do not resist, argue, or make sudden movements.
   - Do NOT attempt to be a hero or protect cash. Safety of guests and team members is the #1 priority.
   - Keep hands visible. Inform the robber before making any movement (e.g., *"I am reaching for the safe key"*).
   - Only activate silent holdup alarms if it is 100% safe to do so without endangering lives.

2. **Immediately After the Perpetrator Leaves:**
   - **Lock all exterior doors immediately** to prevent re-entry.
   - Call **911** immediately and state: *"This is Red Robin, we just experienced a robbery."*
   - Direct everyone to stay on site; preserve the crime scene (do not touch doors, counters, or discarded items).
   - Have all witnesses write down descriptions (height, clothing, weapon, escape direction).

3. **Reporting & Evidence:**
   - Save CCTV footage and register POS tape.
   - Contact Area Director and General Leadership at **GChadrick@opportunityrestaurantgroup.com**.`
  },
  {
    keywords: ['bank deposit', 'safe drop', 'daily deposit', 'cash drop', 'smart safe', 'cash balancing', 'deposit slip', 'armored'],
    title: 'Bank Deposit & Safe Drop Process',
    policy: 'Bank Deposit & Safe Drop Process & Daily Deposit Tracking Sheet',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDO_Accounting/Bank_Deposit_and_Safe_Drop_Process.docx?d=w4204ab5759714ab08b732810a9f5d37c',
    response: `Here are the official **Bank Deposit & Safe Drop Procedures**:

1. **Dual-Custody Safe Drops:**
   - All server/bartender cash drops must be witnessed or double-counted under dual-custody verification.
   - Immediately drop verified cash bags into the drop safe or smart safe. Never leave cash unattended.

2. **Daily Deposit Balancing:**
   - Cross-reference the daily POS summary sales report against physical cash drops.
   - Log all drop amounts into the **Daily Deposit Tracking Sheet**.
   - Investigate and document any variance exceeding company thresholds.

3. **Tamper-Evident Bag & Armored / Bank Run:**
   - Prepare the bank deposit slip in duplicate.
   - Place cash and original slip into an approved tamper-evident bank deposit bag and record the bag serial number.
   - Maintain the pickup receipt from armored courier or designated two-person bank run team.

4. **Questions & Variance Escalation:**
   - Contact Accounting at **Jdragoljevic@opportunityrestaurantgroup.com**.`
  },
  {
    keywords: ['pos', 'it', 'aloha', 'toast', 'terminal', 'printer', 'kds', 'kitchen display', 'network', 'wifi', 'router', 'helpdesk', 'reboot'],
    title: 'Store IT & POS Troubleshooting Guide',
    policy: 'Opportunity Restaurant Group IT Process',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/IT/Opportunity_Restaurant_Group_IT_Process.docx?d=w4d061730999540b08051e9b2f2d93616',
    response: `Here are standard **IT & POS Troubleshooting Steps**:

1. **Frozen POS Terminal / Register:**
   - Perform a soft restart by holding the power button for 10 seconds, waiting 30 seconds, and powering on.
   - Check ethernet/network cables at the base of the terminal.

2. **Kitchen Display System (KDS) Screen Down:**
   - Power cycle the KDS controller box (unplug power cable, wait 15 seconds, replug).
   - Verify network switch lights are green and flashing.

3. **Receipt / Kitchen Printer Not Printing:**
   - Check paper roll orientation and ensure printer lid is firmly latched.
   - Clear any paper jams; power cycle the printer switch on the front/side.

4. **Internet / Network Offline:**
   - Check main router in the back office server rack. Do not reset unless instructed by IT support.
   - Verify credit card processing offline mode (spooling) per IT process guidelines.

5. **Escalation:**
   - Consult the **Opportunity Restaurant Group IT Process** guide or escalate through store management.`
  },
  {
    keywords: ['active assailant', 'active shooter', 'run hide fight', 'assailant', 'shooter', 'gunman', 'lockdown'],
    title: 'Active Assailant Response Protocol (Run / Hide / Fight)',
    policy: 'Active Assailant Response Policy & Store Lockdown Policy',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/SecurityPlatform/Active_Assailant_Response_Policy.docx?d=w6740e253f0cf42168917c7c07f5e2e47',
    response: `Here is the **Active Assailant Response Protocol**:

1. **RUN (Primary Objective):**
   - If an accessible escape path exists, evacuate team members and guests immediately.
   - Leave personal belongings behind. Keep hands visible for law enforcement.

2. **HIDE (If Evacuation is Impossible):**
   - Seek shelter in a lockable room (office, walk-in cooler, dry storage).
   - Fortify and barricade the door with heavy objects.
   - Silence all cell phones, turn off lights, and remain quiet.

3. **FIGHT (Last Resort Only):**
   - Only when your life is in imminent danger.
   - Act aggressively with improvised weapons (fire extinguishers, heavy cookware). Commit to your actions.

4. **When Police Arrive:**
   - Keep hands empty and visible at all times with fingers spread. Follow all officer commands immediately.`
  },
  {
    keywords: ['uniform', 'appearance', 'dress code', 'shoes', 'hygiene', 'grooming', 'hair', 'piercings', 'standards'],
    title: 'Team Member Standards & Appearance Policy',
    policy: 'Team Member Standards & Appearance Policy & Employee Handbook',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/Handbooks/Team_Member_Standards_and_Appearance_Policy.docx?d=wf23194098cae4eb78972ca8ad9c05423',
    response: `Here is the summary of **Team Member Standards & Appearance**:

1. **Footwear (Mandatory):**
   - Certified slip-resistant, closed-toe black footwear is mandatory for all team members in front-of-house and back-of-house.

2. **Uniform Standards:**
   - Clean, wrinkle-free approved Red Robin franchisee branded shirt/apron.
   - Pants/jeans without excessive rips or tears per store style guidelines.

3. **Hygiene & Grooming:**
   - Hair must be clean and restrained (hair net or hat for food prep areas).
   - Facial hair must be neatly trimmed and clean.
   - Jewelry kept to minimal safety standards (no dangling bracelets or chains in kitchen).`
  },
  {
    keywords: ['corrective action', 'write up', 'writeup', 'discipline', 'counseling', 'warning', 'pip'],
    title: 'Employee Corrective Action & Progressive Discipline',
    policy: 'Employee Corrective Action Policy & Form',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Opportunity_Restaurant_Group_Corrective_Action_Form.docx?d=w76b195b8570e4d79818cb7e91ed03304',
    response: `Here is the **Employee Corrective Action Guideline**:

1. **Progressive Coaching Steps:**
   - **Step 1:** Documented Verbal Coaching / Counseling
   - **Step 2:** Written Warning / Corrective Action Plan
   - **Step 3:** Final Written Warning
   - **Step 4:** Suspension or Separation (in consultation with HR)

2. **Documentation:**
   - Complete the **Employee Corrective Action Form** detailing specific dates, policy infractions, and expected behavioral milestones.
   - Both manager and employee must sign the acknowledgment.

3. **HR Recordkeeping:**
   - Submit copies to HR at **TFurr@opportunityrestaurantgroup.com** for employee file retention.`
  },
  {
    keywords: ['paid out', 'petty cash', 'cash expense', 'store purchase', 'emergency supplies'],
    title: 'Paid Out Policy & Accounting Rules',
    policy: 'Paid Out Policy & Accounting Rules',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/BDO_Accounting/Paid%20Out%20Policy%20and%20Accounting%20Rules.docx?d=w0a80576915eb49df8cf48ff5f9e959ec',
    response: `Here are the rules for **Store Paid Outs & Petty Cash**:

1. **Permissible Purchases:**
   - Paid outs are strictly reserved for emergency store supplies (e.g., CO2 tank emergency swap, approved maintenance supplies).
   - Never use paid outs for payroll, personal loans, or unauthorized vendor payments.

2. **Receipt & Approval Requirements:**
   - Itemized, original receipt is mandatory.
   - Manager on Duty must sign the receipt with store number, date, and description of item.

3. **Accounting Submission:**
   - Enter the paid out transaction into the POS and balance against drawer cash.
   - Submit receipts with the weekly accounting packet to **Jdragoljevic@opportunityrestaurantgroup.com**.`
  },
  {
    keywords: ['timecard', 'missed punch', 'overtime', 'clock in', 'clock out', 'punch adjustment'],
    title: 'Timecard Adjustment & Missed Punch Protocol',
    policy: 'Timecard Adjustment Policy',
    sharepointDocUrl: 'https://opportunityrestaurantgroup-my.sharepoint.com/personal/gchadrick_opportunityrestaurantgroup_com/Documents/RedRobinDashDocuments/HR/Timecard%20adjustment%20Policy.docx?d=w5a58542953cb4185bd2702a5a76b34a8',
    response: `Here is the **Timecard Adjustment Standard**:

1. **Missed Punches:**
   - Employees must notify a manager immediately when a clock-in or clock-out was missed.
   - Managers verify actual working hours against schedule/surveillance before editing in the POS.

2. **Manager Verification:**
   - All time adjustments must have a documented reason (e.g., *"forgot badge"*, *"early prep arrival approved"*).
   - Time edits must be finalized before bi-weekly payroll submission.

3. **HR / Payroll Questions:**
   - Contact **TFurr@opportunityrestaurantgroup.com**.`
  }
];

/**
 * Intelligent instant offline knowledge engine fallback
 */
export function getInstantPolicyAnswer(query: string): string {
  const q = query.toLowerCase();

  // Find best matching topic
  for (const topic of KNOWLEDGE_TOPICS) {
    if (topic.keywords.some(kw => q.includes(kw))) {
      return topic.response;
    }
  }

  // Check generic category matches
  if (q.includes('harass') || q.includes('discrim') || q.includes('eeo')) {
    return `**Sexual Harassment & Anti-Discrimination Policy:**
Opportunity Restaurant Group maintains a strict zero-tolerance policy against sexual harassment, discrimination, or retaliation of any kind.

- Any incident should be reported immediately to your General Manager, Area Director, or directly to HR at **TFurr@opportunityrestaurantgroup.com**.
- All reports are handled confidentially with immediate investigation.
- Please reference the **Sexual Harassment Prevention Training Presentation** in the Human Resources section.`;
  }

  if (q.includes('alcohol') || q.includes('tabc') || q.includes('beer') || q.includes('liquor') || q.includes('21')) {
    return `**Responsible Alcohol Service Policy (TABC Compliance):**
- **Age Verification:** Always request valid government-issued photo ID for anyone appearing under age 30. No expired IDs accepted.
- **Intoxication Signs:** Monitor guest alcohol consumption; never serve alcoholic beverages to intoxicated patrons.
- **Intervention:** Involve MOD immediately to handle service refusal with polite, de-escalating customer service.
- See the **Responsible Alcohol Service Policy** in the Security Platform section.`;
  }

  if (q.includes('mileage') || q.includes('miles') || q.includes('driving') || q.includes('travel')) {
    return `**Mileage Reimbursement Guidelines:**
- Business travel between stores or for bank runs is eligible for per-mile reimbursement at current IRS rates.
- Submit the **Mileage Reimbursement Tracker Form** with start/end destinations and odometer readings, signed by your General Manager.
- Send completed forms to Accounting at **Jdragoljevic@opportunityrestaurantgroup.com**.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('who')) {
    return `**Opportunity Restaurant Group Key Leadership Contacts:**

- **General Leadership & Operations:** GChadrick@opportunityrestaurantgroup.com
- **HR, Benefits & Workers Comp:** TFurr@opportunityrestaurantgroup.com
- **Accounting, Invoicing & Payroll:** Jdragoljevic@opportunityrestaurantgroup.com

For immediate store emergencies (robbery, active threat, medical emergency), always call **911** first.`;
  }

  // Default helpful response with suggestions
  return `I understand you are asking about: "${query}".

As your **Opportunity Central AI Policy Assistant**, I can give you detailed procedures on any store policy:
- **Incident & Emergency Response** (*Guest injuries, Robbery procedures, Active Assailant, Medical emergency*)
- **Workers Compensation** (*24-hour injury reporting, claim forms*)
- **Accounting & Cash Operations** (*Daily bank deposits, safe drops, paid outs, Ramp cards*)
- **Human Resources** (*Corrective action, termination standards, uniform & dress code, timecard adjustments*)
- **IT & POS Systems** (*Aloha/Toast restarts, KDS kitchen screens, receipt printers*)

Try asking a specific question like:
- *"What is the protocol for guest injury?"*
- *"How do I balance bank safe drops?"*
- *"What is the robbery safety policy?"*
- *"Where is the Workers Comp claim form?"*`;
}
