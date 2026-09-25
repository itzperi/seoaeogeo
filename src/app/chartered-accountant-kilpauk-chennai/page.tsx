import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-kilpauk-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Kilpauk, Chennai" },
  description:
    "Company registration, GST, income tax, and audit services for Kilpauk residents and local businesses, from a Chennai chartered accountancy firm minutes away in Anna Nagar.",
  alternates: { canonical: "/chartered-accountant-kilpauk-chennai" },
  openGraph: {
    title: "Chartered Accountant in Kilpauk, Chennai",
    description: "CA services for Kilpauk residents and local businesses, based nearby in Anna Nagar.",
    url: "/chartered-accountant-kilpauk-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Kilpauk"
      crumbHref="/chartered-accountant-kilpauk-chennai"
      h1="Chartered Accountant in Kilpauk, Chennai"
      subhead="Company registration, tax filing, and audit support for Kilpauk's residents and local businesses — a short commute from our Anna Nagar office, not a separate branch."
      distanceNote="Kilpauk is one of the closest neighbourhoods to our office — roughly 3-4 km from Anna Nagar, a quick commute for in-person meetings. We are based in Anna Nagar and serve clients in Kilpauk from that one office; we do not operate a separate Kilpauk branch."
      localContext={[
        "Kilpauk is one of Chennai's more established, settled residential localities — tree-lined streets, older independent houses alongside newer apartment developments, and a largely long-term, owner-occupier population rather than a high-turnover rental corridor. Its civic infrastructure and metro connectivity along the Green Line have kept it a stable, family-oriented address for decades.",
        "Commercially, Kilpauk is mixed rather than a dedicated business district: mainline stretches like Kilpauk Garden Road and Poonamallee High Road carry a genuine mix of retail shops, clinics, restaurants, and small service businesses, alongside the residential core. That mix shows up in the kind of CA work Kilpauk clients typically need — individual income tax filing and property-related capital gains work for residents, alongside GST registration and compliance for the neighbourhood's shops and small professional practices.",
        "Kilpauk is also home to a number of established medical institutions and practitioners, which brings a recurring need for tax audit assessment under Section 44ADA for independent professionals, alongside standard advance tax planning.",
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "ITR filing for residents, including capital gains from property in an established, high-value locality." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Kilpauk's retail and clinic-based small businesses." },
        { slug: "tax-audit-chennai", why: "Section 44ADA tax audit assessment for independent medical and other professionals based in the area." },
      ]}
      faqs={[
        { question: "Do you have an office in Kilpauk, or only serve clients from Anna Nagar?", answer: "We are based solely in Anna Nagar and serve Kilpauk clients from that one office — in person, given the short distance, or virtually. We do not operate a separate Kilpauk branch." },
        { question: "Do you handle income tax filing for property sales in Kilpauk?", answer: "Yes — capital gains reporting and exemption planning under Sections 54/54F/54EC for property transactions is a routine part of our individual tax filing service, relevant given Kilpauk's established property market." },
        { question: "Can you register a small clinic or shop in Kilpauk for GST?", answer: "Yes, GST registration and ongoing return filing for local retail, clinics, and small service businesses is something we handle regularly for clients in and around Kilpauk." },
      ]}
    />
  );
}
