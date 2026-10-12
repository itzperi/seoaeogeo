import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "GST Litigation and GSTAT Appeals";

export default function OpengraphImage() {
  return ogImage({
    eyebrow: "CHARTERED ACCOUNTANTS · TAMIL NADU",
    title: "GST Litigation and GSTAT Appeals",
    subtitle: "Show-cause replies · First appeals · Chennai, Coimbatore, Madurai benches",
  });
}
