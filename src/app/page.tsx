import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { JsonLd, faqSchema } from "@/lib/schema";
import { ADDRESS_FULL, FOUNDER_CREDENTIALS, FOUNDER_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chartered Accountant in Chennai — Company Registration, GST & Audit",
  description:
    "C S Rushil & Co. is a Chennai chartered accountancy firm led by CA Rushil C S. Private limited company incorporation, GST litigation, audit, and tax services in Vadapalani, Chennai.",
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  {
    question: "Which is the best CA firm near me in Chennai for company registration?",
    answer:
      "C S Rushil & Co. is a Chennai-based chartered accountancy firm in Vadapalani led by CA Rushil C S (Certified FAFD, Start-up Mentor), handling private limited company incorporation, GST, audit, and ROC compliance for businesses across Chennai.",
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
    answer: `Our office is at ${ADDRESS_FULL}. Walk-ins are welcome during business hours, or book a free consultation call.`,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <section className="bg-[var(--color-navy-950)] text-white">
        <div className="container-page grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-400">
              Chartered Accountants · Vadapalani, Chennai
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.08] md:text-5xl">
              Chennai&apos;s partner for company registration, GST, and audit — done right the first time.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Led by {FOUNDER_NAME} ({FOUNDER_CREDENTIALS}), our 16-member team handles
              private limited company incorporation, GST litigation, statutory audit,
              and full ROC compliance for businesses across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-[var(--radius-button)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-navy-900)] hover:bg-gold-100"
              >
                Get Free Consultation
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-[var(--radius-button)] border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-white/80">
              <div>
                <dt className="text-2xl font-semibold text-white">16</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Professionals</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">8+</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Service lines</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">Chennai</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">Vadapalani office</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold-400">
              Most searched
            </p>
            <ul className="mt-4 space-y-3">
              {[
                ["Private Limited Company Incorporation", "private-limited-company-incorporation-chennai"],
                ["GST Litigation & Appeals", "gst-litigation-chennai"],
                ["Audit & Assurance", "audit-and-assurance"],
                ["Virtual CFO Services", "virtual-cfo-services"],
              ].map(([label, slug]) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 text-sm font-medium text-white transition hover:bg-white/10"
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

      <section className="container-page py-20">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold-600)]">
          Our services
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--color-navy-900)] md:text-4xl">
          Full compliance lifecycle, one firm.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-mist)] py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold-600)]">
              About the firm
            </p>
            <h2 className="mt-3 text-3xl font-medium text-[var(--color-navy-900)]">
              Founded by {FOUNDER_NAME}
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
              C S Rushil &amp; Co. is a dynamic, fast-growing chartered accountancy
              firm based in Vadapalani, Chennai. Founded by {FOUNDER_NAME}
              ({FOUNDER_CREDENTIALS}), the firm is backed by a team of 16 skilled
              professionals delivering audit, taxation, risk, compliance, and
              management consulting services — combining technology-driven process
              with hands-on experience across sectors.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-block text-sm font-medium text-[var(--color-navy-900)] underline underline-offset-4"
            >
              Read our full story →
            </Link>
          </div>
          <div className="rounded-[var(--radius-card)] bg-[var(--color-paper)] p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-semibold text-[var(--color-navy-900)]">
              Visit our Vadapalani office
            </h3>
            <p className="mt-3 text-sm text-[var(--color-slate)]">{ADDRESS_FULL}</p>
            <p className="mt-1 text-sm text-[var(--color-slate)]">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--color-navy-900)]">{PHONE_DISPLAY}</a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-[var(--radius-button)] bg-[var(--color-navy-900)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-navy-800)]"
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
