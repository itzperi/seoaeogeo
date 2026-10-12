import { ImageResponse } from "next/og";
import { ADDRESS_SHORT, BUSINESS_NAME } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };

// Shared social-card layout; the root card and the service pillars use it so
// shared links show the page's topic, not just the firm name.
export function ogImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#5423e7",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#ffc233", letterSpacing: 2 }}>{eyebrow}</div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9 }}>{subtitle}</div>
        <div style={{ fontSize: 26, marginTop: 40, opacity: 0.75 }}>
          {BUSINESS_NAME} · {ADDRESS_SHORT}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
