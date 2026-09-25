import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Frequently Asked Questions | C S Rushil & Co." },
  description:
    "Answers to common questions about company registration, GST, income tax, audits, and compliance from a Chennai CA firm, with links to full detail on each topic.",
  alternates: { canonical: "/faq" },
};

const HUB_FAQS = [
  {
    question: "How long does company registration take in Chennai?",
    answer:
      "With documents ready, Private Limited and LLP registration typically completes in 7–15 working days through the MCA's SPICe+ / FiLLiP forms, depending on processing times and whether the name-approval step needs a resubmission.",
    href: "/company-registration-chennai",
    linkLabel: "Full company registration guide",
  },
  {
    question: "What's the turnover limit for mandatory GST registration?",
    answer:
      "₹40 lakh for suppliers of goods (₹20 lakh in special-category states) and ₹20 lakh for suppliers of services. Certain categories — inter-state suppliers, e-commerce sellers, casual taxable persons — must register regardless of turnover.",
    href: "/gst-registration-chennai",
    linkLabel: "Full GST registration guide",
  },
  {
    question: "What should I do if I receive a GST show-cause notice?",
    answer:
      "Note the response deadline (usually 30 days), gather the invoices, e-way bills, and GSTR filings referenced in the notice, and reply before the window closes — a missed reply can lead to an ex-parte order confirming the full demand.",
    href: "/gst-litigation-chennai",
    linkLabel: "Full GST litigation guide",
  },
  {
    question: "When is the income tax return filing deadline?",
    answer:
      "For most individuals and non-audit taxpayers, 31 July of the assessment year; for businesses requiring a tax audit, typically 31 October. Exact dates are notified annually by the CBDT and occasionally extended.",
    href: "/income-tax-return-filing-chennai",
    linkLabel: "Full ITR filing guide",
  },
  {
    question: "Is a statutory audit mandatory even for a dormant company?",
    answer:
      "Yes. Every company registered under the Companies Act must have its financial statements audited annually regardless of turnover, profit, or business activity — a dormant or zero-transaction company is not exempt.",
    href: "/statutory-audit-chennai",
    linkLabel: "Full statutory audit guide",
  },
  {
    question: "What turnover triggers a tax audit under Section 44AB?",
    answer:
      "₹1 crore for businesses generally (₹10 crore if cash receipts and payments are each within 5% of total transactions), and ₹50 lakh in gross receipts for professionals. These thresholds are set by the Finance Act and can change year to year.",
    href: "/tax-audit-chennai",
    linkLabel: "Full tax audit guide",
  },
  {
    question: "What's the difference between an LLP and a Private Limited Company?",
    answer:
      "An LLP has lower compliance requirements and no share-capital structure, but cannot raise equity investment the way a company can. A Private Limited Company suits businesses planning to raise funding; an LLP suits professional partnerships wanting liability protection without that overhead.",
    href: "/llp-registration-chennai",
    linkLabel: "Full LLP registration guide",
  },
  {
    question: "Who actually needs a Virtual CFO?",
    answer:
      "Startups managing investor reporting for the first time, and SMEs scaling to a point where the founder can no longer track cash flow, margins, and budgets confidently — the trigger is usually a recurring pattern of unclear numbers, not a specific revenue threshold.",
    href: "/virtual-cfo-services",
    linkLabel: "Full Virtual CFO guide",
  },
  {
    question: "What happens if I miss an ROC filing deadline?",
    answer:
      "Late filing attracts an additional fee that can run up to several times the normal fee depending on the delay, and prolonged non-compliance can lead to director disqualification or the company being struck off by the ROC.",
    href: "/roc-compliances",
    linkLabel: "Full ROC compliance guide",
  },
  {
    question: "Is Udyam (MSME) registration mandatory?",
    answer:
      "It's not legally mandatory to operate a business, but without it you cannot access MSME-specific benefits — priority lending, delayed-payment protection, tender eligibility, and subsidy schemes — so most eligible businesses register voluntarily.",
    href: "/msme-udyam-registration-chennai",
    linkLabel: "Full MSME/Udyam guide",
  },
];

export default function FaqHubPage() {
  return (
    <>
      <JsonLd data={faqSchema(HUB_FAQS.map(({ question, answer }) => ({ question, answer })))} />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        h1="Frequently Asked Questions"
        subhead="Quick answers to the questions we hear most across company registration, GST, income tax, and audit — each with a link to the full guide on that topic."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {HUB_FAQS.map((item) => (
              <div
                key={item.question}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]"
              >
                <h2 className="text-base font-semibold text-obsidian">{item.question}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.answer}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-block text-sm font-medium text-royal-violet underline underline-offset-2"
                >
                  {item.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
