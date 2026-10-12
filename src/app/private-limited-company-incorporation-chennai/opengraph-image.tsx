import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Private Limited Company Registration";

export default function OpengraphImage() {
  return ogImage({
    eyebrow: "CHARTERED ACCOUNTANTS · CHENNAI",
    title: "Private Limited Company Registration",
    subtitle: "SPICe+ filing · DSC and DIN · First-year compliance",
  });
}
