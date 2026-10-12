import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Income Tax for HNIs and Families";

export default function OpengraphImage() {
  return ogImage({
    eyebrow: "CHARTERED ACCOUNTANTS · CHENNAI",
    title: "Income Tax for HNIs and Families",
    subtitle: "Capital gains · ESOPs and RSUs · Foreign assets · Residency · HUF",
  });
}
