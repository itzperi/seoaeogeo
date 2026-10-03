import { adminRequest, insertRow } from "@/lib/supabase";

export * from "@/lib/lead-options";

export const LEAD_STATUSES = ["new", "contacted", "meeting_booked", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];
export type LeadTier = "high" | "medium" | "standard";

export type Lead = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  client_type: string | null;
  turnover: string | null;
  location: string | null;
  urgency: string | null;
  preferred_contact: string | null;
  message: string | null;
  lead_score: number | null;
  lead_tier: LeadTier | null;
  source_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  status: LeadStatus;
};

export type NewLead = Omit<Lead, "id" | "created_at" | "lead_score" | "lead_tier" | "status">;

const SERVICE_POINTS: Record<string, number> = {
  "Virtual / Fractional CFO": 30,
  "GST notice, litigation or appeal": 30,
  "Transfer pricing audit": 30,
  "RERA compliance": 25,
  "Company / LLP registration (incl. foreign company in India)": 20,
  "Tax audit / statutory audit": 20,
  "Outsourced accounting / bookkeeping": 20,
  "NRI tax (UAE, UK, USA and others)": 15,
  "Income tax, notices or scrutiny": 15,
  "ROC, payroll or other compliance": 10,
  "Something else": 5,
};

const CLIENT_POINTS: Record<string, number> = {
  "Overseas company or accounting firm": 25,
  "Real estate promoter / builder": 25,
  "Business owner / company": 20,
  "Startup founder": 15,
  "NRI / living abroad": 15,
  "Salaried / individual": 0,
};

const TURNOVER_POINTS: Record<string, number> = {
  "Above ₹50 crore": 30,
  "₹5 – 50 crore": 25,
  "₹50 lakh – 5 crore": 12,
  "Below ₹50 lakh": 3,
  "Not applicable": 0,
};

const URGENCY_POINTS: Record<string, number> = {
  "Notice or deadline this week": 10,
  "Within this month": 6,
  "Planning ahead": 2,
};

const INTERNATIONAL = new Set(["UAE / Gulf", "United Kingdom", "USA / Canada", "Other country"]);

// Rough priority score (0–100) so the team calls the highest-value enquiries
// first. It sorts the dashboard; it never filters anyone out.
export function scoreLead(lead: Pick<NewLead, "service" | "client_type" | "turnover" | "location" | "urgency">) {
  let score =
    (SERVICE_POINTS[lead.service ?? ""] ?? 0) +
    (CLIENT_POINTS[lead.client_type ?? ""] ?? 0) +
    (TURNOVER_POINTS[lead.turnover ?? ""] ?? 0) +
    (URGENCY_POINTS[lead.urgency ?? ""] ?? 0);
  if (INTERNATIONAL.has(lead.location ?? "")) score += 5;
  score = Math.min(100, score);
  const tier: LeadTier = score >= 60 ? "high" : score >= 35 ? "medium" : "standard";
  return { score, tier };
}

export async function saveLead(lead: NewLead): Promise<boolean> {
  const { score, tier } = scoreLead(lead);
  return insertRow("leads", { ...lead, lead_score: score, lead_tier: tier, status: "new" });
}

// Returns null when SUPABASE_SECRET_KEY isn't set yet (or the request fails).
export async function getLeads(): Promise<Lead[] | null> {
  return adminRequest<Lead[]>("leads?select=*&order=created_at.desc&limit=1000");
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  const res = await adminRequest<unknown>(`leads?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ status }),
  });
  return res !== null;
}

export type ClickRow = {
  action: string;
  placement: string | null;
  page: string | null;
  device: string | null;
  created_at: string;
};

export async function getRecentClicks(days = 30): Promise<ClickRow[] | null> {
  const since = new Date(Date.now() - days * 86_400_000).toISOString();
  return adminRequest<ClickRow[]>(
    `cta_clicks?select=action,placement,page,device,created_at&created_at=gte.${since}&order=created_at.desc&limit=10000`,
  );
}
