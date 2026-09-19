import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-ambattur-chennai`;

export const metadata: Metadata = {
  title: "Chartered Accountant in Ambattur, Chennai",
  description:
    "Statutory audit, ROC compliance, and GST services for Ambattur's manufacturing and engineering businesses, from a Chennai chartered accountancy firm based in Anna Nagar.",
  alternates: { canonical: "/chartered-accountant-ambattur-chennai" },
  openGraph: {
    title: "Chartered Accountant in Ambattur, Chennai",
    description: "Statutory audit, ROC compliance, and GST services for Ambattur's manufacturing businesses.",
    url: "/chartered-accountant-ambattur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Ambattur"
      crumbHref="/chartered-accountant-ambattur-chennai"
      h1="Chartered Accountant in Ambattur, Chennai"
      subhead="Statutory audit, ROC compliance, and GST support built for Ambattur's manufacturing and engineering businesses."
      distanceNote="Ambattur is around 10-12 km from our Anna Nagar office — a straightforward commute for scheduled site visits and audit fieldwork. We are based in Anna Nagar and serve Ambattur clients from that one office; we do not operate a separate Ambattur branch."
      localContext={[
        "Ambattur is home to one of South Asia's largest small-scale industrial estates — the SIDCO Ambattur Industrial Estate, established in 1964, spanning roughly 1,300 acres and housing over 1,500 small and medium manufacturing units, concentrated heavily in automobile components, light engineering, precision parts, and garments. This gives Ambattur a fundamentally different business character from a retail or residential locality: it's a working manufacturing base.",
        "That manufacturing concentration drives a specific, recurring compliance profile: statutory audit for private limited manufacturing companies (inventory valuation and fixed-asset verification carry real weight here), ROC annual compliance for the estate's many registered small and medium enterprises, and GST considerations specific to manufacturing — input tax credit on capital goods, job-work provisions, and e-way bill compliance for goods movement in and out of the estate.",
        "Many Ambattur units are also MSME-registered given their scale, which makes Udyam registration and the delayed-payment protections it carries under the MSMED Act a genuinely relevant, recurring conversation for manufacturers here — particularly those supplying larger OEMs on extended payment terms.",
      ]}
      relevantServices={[
        { slug: "statutory-audit-chennai", why: "Statutory audit for manufacturing and engineering companies, including inventory and fixed-asset verification." },
        { slug: "roc-compliances", why: "Annual ROC filings and Companies Act compliance for Ambattur's registered small and medium manufacturers." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration and delayed-payment protection for manufacturing units supplying larger OEMs." },
      ]}
      faqs={[
        { question: "Do you audit manufacturing and engineering companies specifically?", answer: "Yes — statutory audit for manufacturing units, including inventory valuation, fixed-asset verification, and job-work related documentation, is a regular part of our practice given Ambattur's industrial base." },
        { question: "Do you have a branch office in Ambattur?", answer: "No — we operate solely from our Anna Nagar office and serve Ambattur clients from there, with audit fieldwork and site visits scheduled as needed. We do not run a separate Ambattur location." },
        { question: "Can you help with GST on job-work and inter-unit goods movement?", answer: "Yes, GST treatment of job-work transactions and e-way bill compliance for goods movement is something we regularly advise on for Ambattur-based manufacturing clients." },
        { question: "Do you help SIDCO estate units with MSME/Udyam registration?", answer: "Yes — Udyam registration and the resulting delayed-payment protection under the MSMED Act is particularly relevant for manufacturing units supplying larger buyers on extended credit terms, which is common in Ambattur's supplier base." },
      ]}
    />
  );
}
