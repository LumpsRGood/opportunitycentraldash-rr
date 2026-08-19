import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Helper to get GoogleGenAI client
function getGenAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
}

// System grounding prompt containing all 36 Opportunity Restaurant Group documents & operational procedures
const SYSTEM_INSTRUCTION = `You are the official Opportunity Central AI Policy & Operations Assistant for Opportunity Restaurant Group (a premier Red Robin Franchisee).
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
- Bank Deposit & Safe Drop Process (Daily POS drops balancing, dual-custody verification, armored transit)
- Daily Deposit Tracking Sheet (Cross-referencing POS drops with physical slips & smart safe bags)
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

6. STORE HANDBOOKS:
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Chat endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message prompt is required." });
      }

      const ai = getGenAI();

      // Format previous messages for chat history if provided
      const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-8)) { // keep last 8 turns for context
          if (item && item.role && item.text) {
            contents.push({
              role: item.role === "user" ? "user" : "model",
              parts: [{ text: item.text }]
            });
          }
        }
      }

      // Add the current user query
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7
        }
      });

      const responseText = response.text || "I was unable to generate an answer. Please check your query or contact store management.";

      return res.json({
        reply: responseText
      });
    } catch (err: any) {
      console.error("AI chat error:", err);
      return res.status(500).json({
        error: err?.message || "Internal server error occurred while processing AI request."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Opportunity Central server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
