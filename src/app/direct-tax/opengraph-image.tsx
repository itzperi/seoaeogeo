import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Tax Consultants in Chennai";

export default function OpengraphImage() {
  return ogImage({
    eyebrow: "CHARTERED ACCOUNTANTS · CHENNAI",
    title: "Tax Consultants in Chennai",
    subtitle: "Income tax returns · TDS · Notices and appeals · NRI tax",
  });
}
