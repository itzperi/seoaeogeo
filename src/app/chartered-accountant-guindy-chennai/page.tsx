import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-guindy-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Guindy, Chennai" },
  description:
    "Statutory audit, ROC compliance, and GST litigation support for Guindy's corporate offices and industrial estate businesses, from a Chennai CA firm.",
  alternates: { canonical: "/chartered-accountant-guindy-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Guindy, Chennai",
    description: "Statutory audit, ROC compliance, and GST services for Guindy businesses.",
    url: "/chartered-accountant-guindy-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Guindy"
      crumbHref="/chartered-accountant-guindy-chennai"
      h1="Chartered Accountant in Guindy, Chennai"
      subhead="Statutory audit, ROC compliance, and GST support for Guindy's mix of corporate offices and one of Chennai's oldest industrial estates."
      distanceNote="Guindy is a straightforward commute from our Anna Nagar office for scheduled meetings and audit fieldwork. We are based solely in Anna Nagar and serve Guindy clients from that one office — not a separate branch."
      localContext={[
        "Guindy holds a distinct position in Chennai as both a major transport and commercial gateway and the site of one of the city's oldest industrial estates, alongside corporate offices, IT parks, and the well-known Guindy National Park. This dual character — established industry plus modern corporate presence — makes it one of Chennai's more diverse business localities.",
        "That mix brings genuinely varied CA work: statutory audit and ROC compliance for the industrial estate's manufacturing and engineering companies, alongside company incorporation and GST registration for the newer corporate offices and IT-adjacent businesses that have located in and around Guindy given its connectivity.",
        "Guindy's role as a transport hub also means many client meetings here are easy to combine with fieldwork elsewhere in the city, which is one reason it's a practical base for businesses that work with clients or partners across Chennai.",
      ]}
      relevantServices={[
        { slug: "statutory-audit-chennai", why: "Statutory audit for Guindy's established industrial estate and corporate office companies." },
        { slug: "roc-compliances", why: "Annual ROC filings and Companies Act compliance for registered companies based in Guindy." },
        { slug: "gst-litigation-chennai", why: "GST notice replies and appeals for businesses across Guindy's industrial and commercial base." },
        { slug: "llp-registration-chennai", why: "LLP registration for professional services firms setting up in Guindy's newer corporate office space." },
        { slug: "virtual-cfo-services", why: "Outsourced financial leadership for Guindy's newer corporate offices scaling past the early stage." },
        { slug: "payroll-services-chennai", why: "Payroll and statutory compliance for Guindy's industrial workforce and corporate office staff alike." },
      ]}
      faqs={[
        { question: "Do you audit both industrial and corporate-office companies in Guindy?", answer: "Yes — Guindy's mix of manufacturing/industrial estate businesses and modern corporate offices means we handle both statutory audit for established industrial companies and incorporation/compliance work for newer corporate entities." },
        { question: "Do you have a Guindy office?", answer: "No — we are based solely in Anna Nagar and serve Guindy clients from there, with fieldwork scheduled as needed given Guindy's role as a transport hub." },
        { question: "Can you help with GST litigation for a Guindy-based manufacturing company?", answer: "Yes — GST show-cause notice replies, appeals, and GSTAT representation are core services we provide to businesses across Guindy's industrial base." },
      ]}
      furtherReading={[
        { slug: "virtual-cfo-guindy-corporate-offices", title: "What Guindy's Corporate Offices Should Expect From a Virtual CFO Engagement" },
        { slug: "gst-litigation-guindy-industrial", title: "GST Notices at Guindy's Industrial Estate Usually Trace Back to One Thing" },
        { slug: "roc-registered-office-change-guindy", title: "Moving Your Registered Office to Guindy? The ROC Filing Has a Hidden Second Step" },
      ]}
    />
  );
}
