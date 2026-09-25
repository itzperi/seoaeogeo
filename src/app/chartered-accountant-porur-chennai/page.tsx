import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-porur-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Porur, Chennai" },
  description:
    "Income tax filing, GST registration, and company incorporation for Porur's IT professionals and growing local businesses, from a Chennai CA firm.",
  alternates: { canonical: "/chartered-accountant-porur-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Porur, Chennai",
    description: "Income tax filing, GST, and incorporation services for Porur residents and businesses.",
    url: "/chartered-accountant-porur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Porur"
      crumbHref="/chartered-accountant-porur-chennai"
      h1="Chartered Accountant in Porur, Chennai"
      subhead="Income tax filing, GST registration, and company incorporation for Porur's growing base of IT professionals and local businesses."
      distanceNote="Porur is a straightforward commute from our Anna Nagar office. We are based solely in Anna Nagar and serve Porur clients from that one office — not a separate branch."
      localContext={[
        "Porur has shifted from a largely industrial west-Chennai suburb into one of the city's faster-growing residential and commercial areas, driven heavily by its strategic position near the OMR and Ambattur employment corridors and major highway connectivity. A significant share of Porur's residents work in IT and IT-adjacent roles at nearby tech parks, even though their homes are in Porur itself.",
        "This creates a fairly specific client profile: individual income tax return filing for salaried IT professionals living in Porur but working elsewhere in the city, alongside GST registration and compliance for the area's expanding base of local retail, services, and small business establishments as the locality's own commercial footprint grows.",
        "Because Porur's growth has been recent and rapid, we also see a fair number of first-time company incorporations here — small businesses and consultancies being set up locally rather than commuting to register through a city-centre intermediary.",
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "ITR filing for salaried IT professionals living in Porur and working across the OMR/Ambattur corridor." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Porur's growing base of local retail and service businesses." },
        { slug: "private-limited-company-incorporation-chennai", why: "Company incorporation for first-time founders setting up locally in Porur." },
      ]}
      faqs={[
        { question: "I live in Porur but work in the OMR IT corridor — can you still help with my tax filing?", answer: "Yes — where you live and where you work don't need to match for us to handle your individual income tax return filing; this is a common situation for Porur residents." },
        { question: "Do you have a Porur office?", answer: "No — we are based solely in Anna Nagar and serve Porur clients from there, in person or virtually." },
        { question: "Can you register a new small business in Porur for GST?", answer: "Yes, GST registration and ongoing return filing for local retail and service businesses in Porur is something we handle regularly." },
      ]}
    />
  );
}
