"use client";

import { usePathname } from "next/navigation";
import { track, type TrackAction } from "@/lib/track";
import { withBookingUtm } from "@/lib/site";

// A plain <a> that logs a funnel click, usable from server components.
// Booking links get utm_source/medium/campaign (campaign = page slug) so the
// booking tool shows which page each 15-minute consultation came from.
export default function TrackedAnchor({
  action,
  placement,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { action: TrackAction; placement: string }) {
  const pathname = usePathname() || "/";
  const finalHref = action === "book" && href ? withBookingUtm(href, pathname) : href;
  return (
    <a
      {...props}
      href={finalHref}
      onClick={(e) => {
        track(action, placement);
        props.onClick?.(e);
      }}
    />
  );
}
