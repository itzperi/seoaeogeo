// Client-side click tracking for the contact funnel. Uses sendBeacon so the
// event still gets sent when the click navigates away (tel:, wa.me, booking).

export type TrackAction = "call" | "whatsapp" | "book" | "form_start" | "form_submit" | "enquiry_open";

// GA4 event names for each funnel action (sent only when GA4 is loaded,
// i.e. NEXT_PUBLIC_GA_ID is set — see layout.tsx). Mark whatsapp_click,
// call_click, consultation_booking_click and calculator_lead_click as key
// events (conversions) in GA4.
const GA4_EVENT: Record<TrackAction, string> = {
  call: "call_click",
  whatsapp: "whatsapp_click",
  book: "consultation_booking_click",
  form_start: "form_start",
  form_submit: "form_submit",
  enquiry_open: "enquiry_open",
};

// Service cluster of a page, from its slug, for lead attribution in GA4.
const CLUSTERS: [RegExp, string][] = [
  [/^tools\//, "tools"],
  [/nri|15ca|form-15/, "nri"],
  [/subsidiar|foreigner|fema|eor-|transfer-pricing|outsourc/, "cross-border"],
  [/gst/, "gst"],
  [/income-tax|direct-tax|tds|tax-audit/, "income-tax"],
  [/company-registration|incorporation|llp|opc|section-8|startup|msme|iec|fssai|digital-signature/, "registration"],
  [/cfo|audit|bookkeeping|payroll|accounting|roc|compliance|management/, "accounting-audit-cfo"],
  [/chartered-accountant-/, "local-area"],
];

// Country or city named in the slug, e.g. "uae" or "coimbatore".
const PLACES =
  /(usa|us-companies|uk|uae|gulf|singapore|dubai|chennai|coimbatore|madurai|tiruchirappalli|salem|tiruppur|hosur|vellore|erode|tirunelveli|thoothukudi|kanchipuram|chengalpattu|thanjavur|karur|namakkal|nagercoil|bangalore|hyderabad|mumbai|pune|kolkata|delhi-ncr)/;

function attribution(path: string) {
  const slug = path.replace(/^\/+|\/+$/g, "");
  const cluster = CLUSTERS.find(([re]) => re.test(slug))?.[1] ?? (slug ? "other" : "home");
  const place = slug.match(PLACES)?.[1]?.replace("us-companies", "usa") ?? "unknown";
  return { page_path: path, service_cluster: cluster, buyer_country_or_city: place };
}

/**
 * Logs a funnel click. A WhatsApp click from a calculator (placement
 * "calculator") is sent to GA4 as calculator_lead_click, with the
 * calculator's result summary.
 */
export function track(action: TrackAction, placement: string, service?: string, calculatorSummary?: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  const name = placement === "calculator" && action === "whatsapp" ? "calculator_lead_click" : GA4_EVENT[action];
  gtag?.("event", name, {
    placement,
    ...attribution(window.location.pathname),
    ...(service && { service }),
    ...(calculatorSummary && { calculator_summary: calculatorSummary.slice(0, 100) }),
  });
  const payload = JSON.stringify({
    action,
    placement: service ? `${placement}|${service}`.slice(0, 50) : placement,
    page: window.location.pathname,
    device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
  });
  try {
    if (navigator.sendBeacon?.("/api/track", payload)) return;
  } catch {
    // Fall through to fetch.
  }
  fetch("/api/track", { method: "POST", body: payload, keepalive: true }).catch(() => {});
}
