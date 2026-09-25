import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-nungambakkam-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Nungambakkam, Chennai" },
  description:
    "Company incorporation, virtual CFO, and GST services for Nungambakkam's corporate offices and businesses, from a Chennai CA firm based nearby in Anna Nagar.",
  alternates: { canonical: "/chartered-accountant-nungambakkam-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Nungambakkam, Chennai",
    description: "Company incorporation, virtual CFO, and GST services for Nungambakkam businesses.",
    url: "/chartered-accountant-nungambakkam-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Nungambakkam"
      crumbHref="/chartered-accountant-nungambakkam-chennai"
      h1="Chartered Accountant in Nungambakkam, Chennai"
      subhead="Company incorporation, virtual CFO support, and GST compliance for the corporate offices and businesses concentrated in Nungambakkam."
      distanceNote="Nungambakkam is close to our Anna Nagar office — a short, direct commute for in-person meetings. We are based solely in Anna Nagar and serve Nungambakkam clients from that one office; we do not operate a separate branch there."
      localContext={[
        "Nungambakkam is one of Chennai's most established central business districts — well-connected, high-prestige, and home to a genuine concentration of corporate offices, professional services firms, and commercial establishments alongside its residential streets. Its position close to the city centre makes it a natural base for companies that want a central, well-recognised registered office address.",
        "That corporate concentration shows up directly in the CA work Nungambakkam clients need: private limited company incorporation for firms wanting a central Chennai address, virtual CFO and management advisory support for established businesses scaling their finance function, and GST compliance for the area's professional services and commercial establishments.",
        "Many Nungambakkam businesses are also mid-sized companies past the early startup stage — which means statutory audit and ROC compliance become a recurring, ongoing need rather than a one-time registration event.",
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Company incorporation with a central Chennai registered office, handled end-to-end." },
        { slug: "virtual-cfo-services", why: "Outsourced financial leadership for established Nungambakkam businesses scaling their finance function." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for professional services and commercial establishments." },
        { slug: "statutory-audit-chennai", why: "Recurring annual statutory audit for Nungambakkam's mid-sized companies past the early startup stage." },
        { slug: "management-consultancy", why: "Business process and growth advisory for established Nungambakkam businesses scaling past the early startup stage." },
        { slug: "llp-registration-chennai", why: "LLP registration for professional services firms wanting a central Chennai address without a share-capital structure." },
      ]}
      faqs={[
        { question: "Can I use a Nungambakkam address for my registered office when incorporating?", answer: "Yes — the MCA has no location restriction on where your registered office is within India, so a Nungambakkam commercial address works fine for incorporation. We handle the documentation either way." },
        { question: "Do you have an office in Nungambakkam?", answer: "No — we operate solely from Anna Nagar and serve Nungambakkam clients from that one office, in person given the short distance, or virtually." },
        { question: "Do you support established companies with ongoing CFO-level advisory, not just startups?", answer: "Yes — virtual CFO services for mid-sized, established businesses is a core part of our practice, not limited to early-stage startups." },
      ]}
      furtherReading={[
        { slug: "virtual-cfo-vs-accountant-nungambakkam", title: "When Does a Nungambakkam Business Need a Virtual CFO, Not Just an Accountant?" },
        { slug: "statutory-audit-nungambakkam-established", title: "Statutory Audit for a Nungambakkam Company That's Past Its First Few Years" },
        { slug: "llp-registration-nungambakkam-professional-firms", title: "Why Professional Services Firms Choose an LLP for a Nungambakkam Address" },
      ]}
    />
  );
}
