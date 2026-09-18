import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-adyar-chennai`;

export const metadata: Metadata = {
  title: "Chartered Accountant in Adyar, Chennai",
  description:
    "Tax audit, income tax filing, and trust/NGO registration for Adyar's professionals, consultants, and long-established institutions, from a Chennai CA firm.",
  alternates: { canonical: "/chartered-accountant-adyar-chennai" },
  openGraph: {
    title: "Chartered Accountant in Adyar, Chennai",
    description: "CA services for Adyar's professionals, consultants, and institutions.",
    url: "/chartered-accountant-adyar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Adyar"
      crumbHref="/chartered-accountant-adyar-chennai"
      h1="Chartered Accountant in Adyar, Chennai"
      subhead="Tax audit, individual filing, and trust/NGO registration support for Adyar's professionals, consultants, and long-established institutions."
      distanceNote="Adyar is around 14-16 km from our Anna Nagar office. We serve Adyar clients through a mix of scheduled in-person meetings and virtual consultations."
      localContext={[
        "Adyar is one of Chennai's more established, upscale residential neighbourhoods, known for its tree-lined streets and proximity to the Adyar River, and it sits within reach of major employment hubs including Guindy Industrial Estate, Tharamani, and the RMZ Millennia SEZ — while remaining primarily residential and institutional in character rather than a commercial district in its own right.",
        "Adyar is also home to a number of long-established educational, cultural, and non-profit institutions, which brings a specific and recurring need: trust and NGO registration and compliance, including 12A/80G registration for tax-exempt status. This is a genuine area of depth for us, alongside individual tax work for the area's concentration of doctors, consultants, and other independent professionals.",
        "For independent professionals in Adyar — doctors, consultants, architects, and similar — the recurring compliance question is usually tax audit applicability under Section 44ADA once gross receipts cross the professional threshold, alongside standard income tax return filing and advance tax planning.",
      ]}
      relevantServices={[
        { slug: "trust", why: "Trust, society, and Section 8 company registration, including 12A/80G exemption support for Adyar's institutions and NGOs." },
        { slug: "tax-audit-chennai", why: "Section 44ADA tax audit assessment for independent professionals — doctors, consultants, and similar practices." },
        { slug: "income-tax-return-filing-chennai", why: "Individual income tax filing and advance tax planning for professionals and salaried residents." },
      ]}
      faqs={[
        { question: "Do you handle 12A/80G registration for trusts and NGOs in Adyar?", answer: "Yes — trust, society, and Section 8 company formation along with 12A/80G registration for tax-exempt status is a core part of our practice, and Adyar's concentration of educational and non-profit institutions makes this a recurring engagement for us in the area." },
        { question: "I'm a doctor/consultant with a private practice in Adyar — do I need a tax audit?", answer: "It depends on your gross annual receipts — professionals crossing the Section 44ADA presumptive taxation threshold generally require a tax audit. Book a free consultation and we'll assess your specific position." },
        { question: "Do you serve individuals as well as institutions in Adyar?", answer: "Yes — alongside trust/NGO work, we handle individual income tax filing, advance tax planning, and audit services for Adyar's professionals and residents." },
      ]}
    />
  );
}
