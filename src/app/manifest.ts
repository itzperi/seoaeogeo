import type { MetadataRoute } from "next";
import { BUSINESS_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS_NAME} — Chartered Accountants in Chennai`,
    short_name: BUSINESS_NAME,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    // CA India badge, generated square from public/images/ca-india-badge.png.
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
