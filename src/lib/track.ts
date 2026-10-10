// Client-side click tracking for the contact funnel. Uses sendBeacon so the
// event still gets sent when the click navigates away (tel:, wa.me, booking).

export type TrackAction = "call" | "whatsapp" | "book" | "form_start" | "form_submit" | "enquiry_open";

// GA4 event names for each funnel action (sent only when GA4 is loaded,
// i.e. NEXT_PUBLIC_GA_ID is set — see layout.tsx).
const GA4_EVENT: Record<TrackAction, string> = {
  call: "click_call",
  whatsapp: "click_whatsapp",
  book: "click_calendly",
  form_start: "form_start",
  form_submit: "form_submit",
  enquiry_open: "enquiry_open",
};

export function track(action: TrackAction, placement: string, service?: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", GA4_EVENT[action], { placement, page: window.location.pathname, ...(service && { service }) });
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
