// Client-side click tracking for the contact funnel. Uses sendBeacon so the
// event still gets sent when the click navigates away (tel:, wa.me, booking).

export type TrackAction = "call" | "whatsapp" | "book" | "form_start" | "form_submit";

export function track(action: TrackAction, placement: string) {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify({
    action,
    placement,
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
