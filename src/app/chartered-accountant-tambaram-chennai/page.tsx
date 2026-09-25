import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-tambaram-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Tambaram, Chennai" },
  description:
    "Income tax filing, GST registration, and MSME/Udyam registration for Tambaram residents and small businesses, from a Chennai chartered accountancy firm.",
  alternates: { canonical: "/chartered-accountant-tambaram-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Tambaram, Chennai",
    description: "Income tax, GST, and MSME registration services for Tambaram residents and businesses.",
    url: "/chartered-accountant-tambaram-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Tambaram"
      crumbHref="/chartered-accountant-tambaram-chennai"
      h1="Chartered Accountant in Tambaram, Chennai"
      subhead="Income tax filing, GST registration, and MSME/Udyam registration for Tambaram's residents and growing base of small businesses."
      distanceNote="Tambaram is on the southern edge of Chennai, further from our Anna Nagar office than our more central service areas. We serve Tambaram clients primarily virtually — document sharing, video consultations, and digital filing — with in-person meetings scheduled when genuinely needed. We do not operate a separate Tambaram office."
      localContext={[
        "Tambaram is a south Chennai residential suburb that has seen steady growth along the Tambaram–Vandalur corridor, with an expanding mix of independent houses, apartment developments, and a genuine local retail and small-business base serving the area's growing population.",
        "As a primarily residential suburb some distance from Chennai's central business districts, Tambaram clients most often need individual income tax return filing and straightforward GST registration for local shops and service businesses, rather than large-scale corporate compliance work.",
        "Given the area's growth in small trading and service businesses, MSME/Udyam registration is also a genuinely relevant, recurring need — smaller local businesses in Tambaram often qualify and benefit meaningfully from the collateral-free lending and delayed-payment protections it unlocks.",
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "ITR filing for Tambaram residents, handled remotely with document sharing and video consultations." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Tambaram's local shops and service businesses." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for small, growing Tambaram-based trading and service businesses." },
      ]}
      faqs={[
        { question: "Do you serve Tambaram even though it's far from your Anna Nagar office?", answer: "Yes — given the distance, we handle most Tambaram engagements remotely through document sharing and video consultations, with in-person meetings arranged when genuinely necessary." },
        { question: "Do you have an office in Tambaram?", answer: "No — we operate solely from Anna Nagar and serve Tambaram clients from that one office, remotely by default." },
        { question: "Is Udyam registration worth it for a small Tambaram shop or service business?", answer: "Often yes — it's free, largely self-declaration based, and unlocks collateral-free lending and delayed-payment protection, which is genuinely useful for smaller local businesses. We can assess your specific eligibility during a free consultation." },
      ]}
    />
  );
}
