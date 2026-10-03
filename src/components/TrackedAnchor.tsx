"use client";

import { track, type TrackAction } from "@/lib/track";

// A plain <a> that logs a funnel click, usable from server components.
export default function TrackedAnchor({
  action,
  placement,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { action: TrackAction; placement: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(action, placement);
        props.onClick?.(e);
      }}
    />
  );
}
