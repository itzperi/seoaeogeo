import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/formation-of-business-entity`;

export const metadata: Metadata = {
  title: "Company Registration in Chennai — All Business Structures",
  description:
    "Company registration in Chennai — Private Limited, LLP, OPC, Partnership, or Sole Proprietorship — with end-to-end documentation and compliance from C S Rushil & Co.",
  alternates: { canonical: "/formation-of-business-entity" },
};

const ENTITIES = [
  { name: "Private Limited Company", href: "/private-limited-company-incorporation-chennai", text: "Limited liability, investor-ready structure with share capital." },
  { name: "Public Limited Company", href: "/contact", text: "For businesses planning to raise capital from the public, with statutory board and disclosure requirements." },
  { name: "Limited Liability Partnership (LLP)", href: "/llp-registration-chennai", text: "Limited liability with the flexibility of a partnership — popular for professional and services firms." },
  { name: "Partnership Firm", href: "/contact", text: "Deed drafting, registration, and compliance for traditional partnership businesses." },
  { name: "One Person Company (OPC)", href: "/contact", text: "Limited liability for solo founders who want a corporate structure without a co-founder." },
  { name: "Sole Proprietorship", href: "/contact", text: "A simple structure for a small, low-risk local business, with minimal registration formalities." },
  { name: "Business Conversion", href: "/contact", text: "Convert a proprietorship or partnership into an LLP or Private Limited Company as you scale." },
];

const FAQS = [
  {
    question: "How do I decide which business structure is suitable for me?",
    answer:
      "It depends on liability protection, funding plans, and compliance appetite. Solo founders wanting simplicity often start as a Sole Proprietorship or OPC; businesses planning to raise investment should register as a Private Limited Company. We assess your specific situation during a free consultation.",
  },
  {
    question: "What documents are needed for business entity registration?",
    answer:
      "PAN and Aadhaar of all promoters, address proof, passport-size photographs, and proof of the registered office address (rental agreement or ownership document with a No Objection Certificate). Additional documents apply for LLPs and companies, such as DSC and DIN.",
  },
  {
    question: "How long does the registration process take?",
    answer:
      "A Sole Proprietorship can be set up within days. LLPs and Private Limited Companies typically take 7–15 working days depending on document readiness and MCA processing times.",
  },
  {
    question: "Do you offer post-registration support?",
    answer:
      "Yes — GST registration, bank account opening assistance, statutory audit appointment, ROC annual filings, and ongoing compliance are all available as follow-on services once your entity is registered.",
  },
];

export default function FormationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Formation of Business Entity",
          description: "Registration and compliance support across all business structures for entrepreneurs in Chennai.",
          url: PAGE_URL,
          serviceType: "Business Formation",
        })}
      />
      <Breadcrumbs items={[{ name: "Formation of Business Entity", href: "/formation-of-business-entity" }]} />
      <PageHero
        eyebrow="Business Registration · Chennai"
        h1="Company Registration in Chennai — All Business Structures"
        subhead="Strategic guidance and entity structuring — from Private Limited Company incorporation to Sole Proprietorship — with compliance built in from day one."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">
            What is formation of a business entity?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Formation of a business entity is the process of legally establishing a
            business structure under applicable law — selecting the right entity type,
            completing registration, documentation, and regulatory approvals. It gives
            your business a distinct legal identity, defines your liability exposure,
            and sets the tax and compliance framework you&apos;ll operate under going
            forward. Choosing correctly at this stage avoids costly conversions later.
          </p>

          <h2 className="mt-16 text-2xl text-obsidian">
            Structures we register
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ENTITIES.map((entity) => (
              <Link
                key={entity.name}
                href={entity.href}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <h3 className="font-medium text-obsidian">{entity.name}</h3>
                <p className="mt-2 text-sm text-slate">{entity.text}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-cards bg-lilac-mist p-8">
              <h2 className="text-xl font-medium text-obsidian">
                Looking specifically for Private Limited Company registration?
              </h2>
              <p className="mt-3 text-slate">
                We have a dedicated guide covering the full SPICe+ process, timelines,
                fees, and a Private Ltd vs LLP vs OPC comparison.
              </p>
              <Link
                href="/private-limited-company-incorporation-chennai"
                className="mt-4 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                View Private Limited Incorporation Guide →
              </Link>
            </div>
            <div className="rounded-cards bg-lilac-mist p-8">
              <h2 className="text-xl font-medium text-obsidian">
                Want the step-by-step registration process and timelines?
              </h2>
              <p className="mt-3 text-slate">
                Our company registration guide covers DSC/DIN, name approval,
                and SPICe+ filing in detail for Private Limited and LLP.
              </p>
              <Link
                href="/company-registration-chennai"
                className="mt-4 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                View Company Registration Guide →
              </Link>
            </div>
            <div className="rounded-cards bg-lilac-mist p-8">
              <h2 className="text-xl font-medium text-obsidian">
                Set on a Limited Liability Partnership?
              </h2>
              <p className="mt-3 text-slate">
                Our LLP registration guide covers DPIN, name reservation,
                FiLLiP filing, and LLP Agreement drafting in detail.
              </p>
              <Link
                href="/llp-registration-chennai"
                className="mt-4 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                View LLP Registration Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTASection />
    </>
  );
}
