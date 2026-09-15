import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { JsonLd, faqSchema } from "@/lib/schema";
import { ADDRESS_FULL, ADDRESS_SHORT, FOUNDER_CREDENTIALS, FOUNDER_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chartered Accountant Near Me in Chennai — Company Registration, GST & Audit",
  description:
    "C S Rushil & Co. is a Chennai chartered accountancy firm led by CA Rushil C S. Private limited company incorporation, GST litigation, audit, and tax services — Anna Nagar, Chennai.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "C S Rushil & Co. — Chartered Accountants in Chennai",
    description:
      "Private limited company incorporation, GST litigation, audit, and tax services from a Chennai-based CA firm in Anna Nagar.",
    url: "/",
  },
};

const HOME_FAQS = [
  {
    question: "How do I find a chartered accountant near me in Chennai for company registration?",
    answer:
      "C S Rushil & Co. is a Chennai-based chartered accountancy firm in Anna Nagar led by CA Rushil C S (Certified FAFD, Start-up Mentor), handling private limited company incorporation, GST, audit, and ROC compliance for businesses across Chennai — Anna Nagar, T. Nagar, Vadapalani, Guindy, OMR, and beyond.",
  },
  {
    question: "Is there a chartered accountant near me in Anna Nagar, Chennai?",
    answer:
      "Yes — C S Rushil & Co. is based in Anna Nagar, Chennai, and serves clients across the city for company incorporation, GST, audit, direct tax, and ROC compliance. Book a free consultation to visit our office or meet virtually.",
  },
  {
    question: "Do you handle GST litigation and notice replies?",
    answer:
      "Yes. We represent clients in GST show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal (GSTAT) proceedings. See our dedicated GST litigation page for details.",
  },
  {
    question: "How much does private limited company incorporation cost in Chennai?",
    answer:
      "Incorporation cost depends on authorised capital, number of directors, and add-ons like DSC and stamp duty. We provide a transparent, itemised quote — government fees separated from professional fees — during your free consultation.",
  },
  {
    question: "Where is your office located?",
    answer: `Our office is in ${ADDRESS_FULL}. Walk-ins are welcome during business hours, or book a free consultation call.`,
  },
];

const QUICK_LINKS = [
  ["Private Limited Company Incorporation", "private-limited-company-incorporation-chennai"],
  ["GST Litigation & Appeals", "gst-litigation-chennai"],
  ["Audit & Assurance", "audit-and-assurance"],
  ["Virtual CFO Services", "virtual-cfo-services"],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <section className="bg-royal-violet">
        <div className="container-page grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow text-sm text-lemon-zest">
              Chartered Accountant Near You · {ADDRESS_SHORT}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.13] text-white md:text-5xl">
              Chennai&apos;s partner for company registration, GST, and audit.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Searching for a chartered accountant near you in Chennai? C S
              Rushil &amp; Co. is based in {ADDRESS_SHORT}, led by{" "}
              {FOUNDER_NAME} ({FOUNDER_CREDENTIALS}). Our 16-member team
              handles private limited company incorporation, GST litigation,
              statutory audit, and full ROC compliance for businesses across
              Chennai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-buttons bg-white px-6 py-3 text-sm font-medium text-obsidian hover:bg-lilac-mist"
              >
                Get Free Consultation
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-buttons border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <dt className="text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>16</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Professionals</dd>
              </div>
              <div>
                <dt className="text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>8+</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Service lines</dd>
              </div>
              <div>
                <dt className="text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>Chennai</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Anna Nagar office</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-cards bg-white p-8">
            <p className="eyebrow text-sm text-slate">Most searched</p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map(([label, slug]) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="flex items-center justify-between rounded-xl bg-fog px-5 py-4 text-sm font-medium text-obsidian transition hover:bg-lilac-mist"
                  >
                    {label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page">
          <p className="eyebrow text-sm text-slate">Our services</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-obsidian md:text-4xl">
            Full compliance lifecycle, one firm.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-20">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-sm text-slate">About the firm</p>
            <h2 className="mt-3 text-3xl text-obsidian">
              Founded by {FOUNDER_NAME}
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              C S Rushil &amp; Co. is a dynamic, fast-growing chartered accountancy
              firm based in {ADDRESS_FULL}. Founded by {FOUNDER_NAME}
              ({FOUNDER_CREDENTIALS}), the firm is backed by a team of 16 skilled
              professionals delivering audit, taxation, risk, compliance, and
              management consulting services — combining technology-driven process
              with hands-on experience across sectors.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-block text-sm font-medium text-royal-violet underline underline-offset-4"
            >
              Read our full story →
            </Link>
          </div>
          <div className="rounded-cards bg-paper p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-medium text-obsidian">
              Chartered Accountant near me in Anna Nagar
            </h3>
            <p className="mt-3 text-sm text-slate">
              Searching for a chartered accountant near you in Anna Nagar or
              anywhere in Chennai? Our office is at {ADDRESS_FULL}, and we serve
              clients across the city in person and virtually.
            </p>
            <p className="mt-3 text-sm text-slate">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-obsidian">{PHONE_DISPLAY}</a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Get directions &amp; contact details
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
