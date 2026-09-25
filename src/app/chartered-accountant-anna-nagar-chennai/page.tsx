import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-anna-nagar-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Anna Nagar, Chennai" },
  description:
    "C S Rushil & Co. is based in Anna Nagar, Chennai — company registration, GST, audit, and tax services from a CA firm headquartered in the neighbourhood.",
  alternates: { canonical: "/chartered-accountant-anna-nagar-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Anna Nagar, Chennai",
    description: "Company registration, GST, audit, and tax services from a CA firm based in Anna Nagar.",
    url: "/chartered-accountant-anna-nagar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Anna Nagar"
      crumbHref="/chartered-accountant-anna-nagar-chennai"
      h1="Chartered Accountant in Anna Nagar, Chennai"
      subhead="Our office is in Anna Nagar — this isn't an area we merely serve, it's where C S Rushil & Co. is headquartered."
      distanceNote="This is our home base. Our office is located within Anna Nagar itself — walk-ins are welcome during business hours, and this is the fastest locality for an in-person consultation without travel time across the city."
      localContext={[
        "Anna Nagar is one of Chennai's original planned townships, laid out on a grid road system that's unusual for the city — a legacy of its development as a model residential-commercial district. That planning has aged into one of Chennai's more business-friendly neighbourhoods: wide roads, established commercial stretches, and a mix of long-standing local businesses alongside newer offices.",
        "The area sits close to several employment and industrial hubs — the Ambattur Industrial Estate, Padi industrial area, SIDCO Industrial Estate, and IT parks including Ambit IT Park and Prince Info Park — which means our Anna Nagar client base spans small manufacturers and traders through to IT and services businesses, not one single industry type.",
        "Because this is our own neighbourhood, we know the local business community directly — not from a service-area radius setting, but from being physically present here. That matters for things like recommending a reliable local auditor's counterpart, understanding which nearby banks are efficient for current account opening, or simply being reachable for a same-day document drop-off.",
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Incorporate your company with a CA firm you can visit in person, in the same neighbourhood." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Anna Nagar's mix of retail, trading, and services businesses." },
        { slug: "statutory-audit-chennai", why: "Statutory audit for Anna Nagar-based companies, with fieldwork scheduled around your calendar." },
        { slug: "roc-compliances", why: "Annual ROC filings and Companies Act compliance for Anna Nagar companies, from incorporation onward." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for Anna Nagar's small manufacturers and trading businesses." },
      ]}
      faqs={[
        { question: "Is your office actually located in Anna Nagar?", answer: "Yes — Anna Nagar is our registered office and where our team works day-to-day, not a service-area claim. See our contact page for the exact address and a map." },
        { question: "Can I walk in without an appointment?", answer: "We recommend booking a free consultation first so the right team member is available, but for Anna Nagar clients, same-day in-person meetings are usually possible given the short travel distance." },
        { question: "Do you only serve Anna Nagar, or the wider Chennai area too?", answer: "We serve businesses across Chennai — Anna Nagar is simply where our office is based, and it's the easiest locality for in-person visits. Clients elsewhere in the city work with us virtually just as easily." },
      ]}
      furtherReading={[
        { slug: "choosing-ca-firm-anna-nagar", title: "Choosing a CA Firm in Anna Nagar: What to Actually Look For" },
        { slug: "gst-notice-anna-nagar-traders", title: "Got a GST Notice as an Anna Nagar Trader? Here's What Actually Happens Next" },
        { slug: "statutory-audit-anna-nagar-companies", title: "Your Anna Nagar Company's First Statutory Audit: What Actually Slows It Down" },
        { slug: "tax-audit-threshold-anna-nagar", title: "Crossed ₹1 Crore in Anna Nagar? Here's When That Actually Triggers a Tax Audit" },
        { slug: "roc-compliance-anna-nagar-startups", title: "The ROC Filing Anna Nagar Founders Forget About in Year One" },
        { slug: "management-consultancy-anna-nagar-business", title: "When an Anna Nagar Business Has Outgrown Its Compliance-Only Relationship With Its CA" },
        { slug: "advance-tax-anna-nagar-shop-owners", title: "Why Anna Nagar Shop Owners Get Advance Tax Wrong More Than Salaried Residents Do" },
        { slug: "udyam-registration-anna-nagar-manufacturers", title: "The Udyam Registration Mistake Anna Nagar Suppliers Keep Making" },
      ]}
    />
  );
}
