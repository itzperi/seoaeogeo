import type { MetadataRoute } from "next";
import { BUSINESS_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS_NAME} — Chartered Accountants in Chennai`,
    short_name: BUSINESS_NAME,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5423e7",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
