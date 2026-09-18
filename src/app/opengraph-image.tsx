import { ImageResponse } from "next/og";
import { ADDRESS_SHORT, BUSINESS_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ fontSize: 28, color: "#ffc233", letterSpacing: 2 }}>
          CHARTERED ACCOUNTANTS · CHENNAI
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          {BUSINESS_NAME}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9 }}>
          Company Incorporation · GST · Audit · Direct Tax · Virtual CFO
        </div>
        <div style={{ fontSize: 26, marginTop: 40, opacity: 0.75 }}>
          {ADDRESS_SHORT}
        </div>
      </div>
    ),
    { ...size }
  );
}
