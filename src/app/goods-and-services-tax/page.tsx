import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, serviceSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/goods-and-services-tax`;

export const metadata: Metadata = {
  title: "GST Registration & Return Filing in Chennai",
  description:
    "GST registration, return filing, amendments, cancellations, and notice replies for businesses in Chennai. Facing a dispute? See our dedicated GST litigation service.",
  alternates: { canonical: "/goods-and-services-tax" },
};

const SERVICES = [
  { name: "GST Registration", text: "End-to-end registration with document preparation, ARN tracking, and follow-up with the department." },
  { name: "GST Return Filing", text: "Monthly, quarterly, and annual returns (GSTR-1, 3B, 9/9C) filed accurately and on time." },
  { name: "GST Cancellation", text: "Complete assistance for voluntary or department-initiated cancellation, including final return filing." },
  { name: "GST Registration Amendment", text: "Updates to business address, contact details, or ownership structure on your GST registration." },
  { name: "GST Notice Reply", text: "Analysis and drafting of replies to departmental notices and queries." },
  { name: "LUT Application", text: "Letter of Undertaking filing for exporters to supply without upfront IGST payment." },
];

const FAQS = [
  {
    question: "What happens if I miss the GST return filing deadline?",
    answer:
      "Late filing attracts a late fee per day of delay (capped) plus interest at 18% per annum on the outstanding tax. Repeated defaults can also lead to registration suspension. We track your filing calendar to prevent this.",
  },
  {
    question: "Can I claim Input Tax Credit (ITC)?",
    answer:
      "Yes, provided the supplier has filed their return and the invoice reflects in your GSTR-2B, the goods/services are used for business purposes, and you hold a valid tax invoice. We reconcile your purchase register against GSTR-2B every filing cycle.",
  },
  {
    question: "Do you help with GST notice replies and audits?",
    answer:
      "Yes, for routine notices and queries we draft and file replies here. For show-cause notices, appeals, and GST Appellate Tribunal matters, see our dedicated GST litigation service for Chennai businesses.",
  },
  {
    question: "How can I get started with your GST services?",
    answer:
      "Book a free consultation — we'll review your current GST status, identify any compliance gaps, and propose a filing and advisory plan.",
  },
];

export default function GstPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Goods & Services Tax (GST) Services",
          description: "GST registration, return filing, amendments, cancellations, notice replies, and LUT applications for Chennai businesses.",
          url: PAGE_URL,
          serviceType: "Tax Compliance",
        })}
      />
      <Breadcrumbs items={[{ name: "Goods & Services Tax", href: "/goods-and-services-tax" }]} />
      <PageHero
        eyebrow="GST · Chennai"
        h1="Goods & Services Tax (GST) Services"
        subhead="Registration, return filing, amendments, cancellations, and notice replies — GST compliance handled end-to-end so you stay penalty-free."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">What is GST?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            GST (Goods and Services Tax) is a comprehensive, indirect tax levied on the
            supply of goods and services in India, replacing multiple older taxes like
            VAT, service tax, and excise duty into one unified system. Tax is collected
            at every stage of the supply chain with credit available for tax paid on
            inputs, which simplifies compliance and improves ease of doing business —
            provided returns are filed accurately and on time.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.name} className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-medium text-obsidian">{s.name}</h3>
                <p className="mt-2 text-sm text-slate">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-cards bg-lilac-mist p-8">
            <h2 className="text-xl font-medium text-obsidian">
              Received a GST show-cause notice or facing an appeal?
            </h2>
            <p className="mt-3 text-slate">
              Notice replies, departmental audits, appeals, and GST Appellate Tribunal
              representation are handled on our dedicated GST litigation page.
            </p>
            <Link
              href="/gst-litigation-chennai"
              className="mt-4 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              View GST Litigation Services →
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTASection />
    </>
  );
}
