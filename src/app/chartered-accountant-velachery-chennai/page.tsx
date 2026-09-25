import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-velachery-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Velachery, Chennai" },
  description:
    "Income tax return filing, GST, and audit services for Velachery's mix of salaried IT professionals and small businesses, from a Chennai CA firm.",
  alternates: { canonical: "/chartered-accountant-velachery-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Velachery, Chennai",
    description: "ITR filing, GST, and audit services for Velachery residents and small businesses.",
    url: "/chartered-accountant-velachery-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Velachery"
      crumbHref="/chartered-accountant-velachery-chennai"
      h1="Chartered Accountant in Velachery, Chennai"
      subhead="Income tax filing, GST, and audit support for Velachery's mix of salaried IT/finance professionals and small local businesses."
      distanceNote="Velachery is around 16-18 km from our Anna Nagar office. We serve Velachery clients through a mix of virtual consultations and scheduled in-person meetings, depending on what the engagement needs."
      localContext={[
        "Velachery sits close to the OMR IT corridor, Taramani, and Guindy — a position that has made it one of Chennai's denser residential areas for people working in IT, finance, and other knowledge-sector jobs, alongside a genuine local retail and small-business base along its main commercial stretches.",
        "That mix shows up directly in the kind of CA work Velachery clients need: a large share of individual income tax return filing for salaried professionals (including Form 16 reconciliation, capital gains from mutual funds and property, and old-vs-new tax regime planning), alongside GST and compliance support for the area's local shops, clinics, and small service businesses.",
        "For salaried Velachery residents specifically, the recurring questions we handle are less about company structuring and more about individual tax efficiency — claiming the right deductions, handling Form 26AS/AIS mismatches, and getting refunds processed without delay.",
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "ITR filing for salaried professionals, including capital gains and old-vs-new regime planning." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Velachery's local retail and service businesses." },
        { slug: "audit-and-assurance", why: "Audit support for small businesses and professional practices based in the area." },
      ]}
      faqs={[
        { question: "Do you file income tax returns for salaried individuals, not just businesses?", answer: "Yes — individual ITR filing for salaried professionals is one of our most common engagements for Velachery clients, including Form 16 reconciliation and capital gains reporting." },
        { question: "Can you help if my Form 26AS or AIS doesn't match what I expected?", answer: "Yes, reconciling Form 26AS/AIS mismatches and, where needed, filing rectification requests is a routine part of our income tax service." },
        { question: "Do you also serve small businesses in Velachery, or only individuals?", answer: "Both — alongside individual tax filing, we handle GST registration, return filing, and audit support for shops, clinics, and small service businesses based in Velachery." },
      ]}
      furtherReading={[
        { slug: "form26as-mismatch-velachery", title: "Why Velachery's Salaried Professionals Keep Seeing Form 26AS and AIS Mismatches" },
      ]}
    />
  );
}
