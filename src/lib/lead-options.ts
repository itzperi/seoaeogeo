// Qualifying-question options. The form, the API validation and the scoring
// all read from these, so a label change happens in one place.
export const SERVICE_OPTIONS = [
  "Virtual / Fractional CFO",
  "GST notice, litigation or appeal",
  "Transfer pricing audit",
  "Tax audit / statutory audit",
  "Income tax, notices or scrutiny",
  "RERA compliance",
  "Company / LLP registration (incl. foreign company in India)",
  "NRI tax (UAE, UK, USA and others)",
  "Outsourced accounting / bookkeeping",
  "ROC, payroll or other compliance",
  "Something else",
] as const;

export const CLIENT_TYPE_OPTIONS = [
  "Business owner / company",
  "Startup founder",
  "Real estate promoter / builder",
  "NRI / living abroad",
  "Overseas company or accounting firm",
  "Salaried / individual",
] as const;

export const TURNOVER_OPTIONS = [
  "Above ₹50 crore",
  "₹5 – 50 crore",
  "₹50 lakh – 5 crore",
  "Below ₹50 lakh",
  "Not applicable",
] as const;

export const LOCATION_OPTIONS = [
  "Chennai",
  "Elsewhere in Tamil Nadu",
  "Elsewhere in India",
  "UAE / Gulf",
  "United Kingdom",
  "USA / Canada",
  "Other country",
] as const;

export const URGENCY_OPTIONS = [
  "Notice or deadline this week",
  "Within this month",
  "Planning ahead",
] as const;

export const CONTACT_OPTIONS = ["WhatsApp", "Phone call", "Email"] as const;
