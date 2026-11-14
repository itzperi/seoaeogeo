import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { ADDRESS_FULL, BUSINESS_HOURS, FIRM_REGISTRATION_NO, FOUNDER_NAME, ICAI_MEMBERSHIP_NO, LANGUAGES_SPOKEN } from "@/lib/site";

// Engagement process for high-ticket and cross-border clients (growth plan
// 90, N1). Linked from every flagship page via HighTicketSections. Holds no
// security or reply-time claims the firm has not confirmed.

const DESCRIPTION =
  "How C S Rushil & Co. takes on a new client: a 15-minute consultation, a scoping call, a written engagement letter, then onboarding. No published price lists.";

export const metadata: Metadata = {
  title: { absolute: "How We Work With Clients | C S Rushil & Co., Chennai" },
  description: DESCRIPTION,
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work With Clients | C S Rushil & Co., Chennai",
    description: DESCRIPTION,
    url: "/how-we-work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const LINK = "font-medium text-royal-violet underline underline-offset-2";

const STEPS = [
  { step: "1. First contact", who: "You", what: "Message us on WhatsApp, call, or book a slot. One line on what you need and any deadline helps us route it to the right chartered accountant." },
  { step: "2. 15-minute consultation", who: "A chartered accountant", what: "A short call to understand the need, check whether it is something we handle, and say plainly if a specialist elsewhere would serve you better." },
  { step: "3. Conflict and independence check", who: "The firm", what: "Before going further we check that taking you on does not conflict with an existing client or with our independence as auditors." },
  { step: "4. Scoping call", who: "You and the engagement lead", what: "About 30 minutes on the entities, filings, reporting and deadlines involved, and on who does what between our team, your staff and your other advisers." },
  { step: "5. Written proposal and engagement letter", who: "The firm", what: "The scope, deliverables, timelines, responsibilities and fees in writing. Government fees and third-party costs are listed separately, at actual." },
  { step: "6. Onboarding", who: "Both", what: "Documents and system access are shared in the way agreed in the engagement letter, and we build the calendar of due dates for your case." },
  { step: "7. Ongoing work", who: "Our team", what: "Filings, reports and review calls on the agreed cycle, with the next dates confirmed in writing each month." },
];

const FAQS = [
  {
    question: "Is the first consultation charged?",
    answer:
      "The first 15-minute consultation is a short call to understand your need and decide whether we are the right fit. Any work after that, including detailed advice, is agreed in a written engagement letter before it starts, so you always know the scope and fee before you commit.",
  },
  {
    question: "Why don't you publish your fees?",
    answer:
      "Chartered accountants in India follow ICAI's guidelines on what may be published, and our fees also depend on the entities, filings and reporting each client needs. We agree them in writing after a scoping call. Government fees, such as MCA filing fees and stamp duty, are facts and appear on our service pages.",
  },
  {
    question: "Can you work with our existing accountant or lawyer?",
    answer:
      "Yes. Many clients keep their bookkeeper, a lawyer or an overseas accountant. We agree who does what in the engagement letter, share the Indian figures they need, and stay within Indian law and Indian filings. We do not advise on foreign tax or company law.",
  },
  {
    question: "Do you work with clients outside Chennai and outside India?",
    answer: `Yes. Our only office is at ${ADDRESS_FULL}. Clients elsewhere in Tamil Nadu, the rest of India and abroad are served online, with video calls, digital signatures and shared documents. Calls are scheduled where your business hours overlap with ours.`,
  },
  {
    question: "Will the same people handle our work each month?",
    answer:
      "Each engagement has a named engagement lead who reviews the work, supported by members of our team. The engagement letter names who your main contact is, so you know whom to reach on a filing, a notice or a deadline.",
  },
];

export default function HowWeWorkPage() {
  const hours = BUSINESS_HOURS.map((h) => `${h.days}: ${h.hours}`).join("; ");
  return (
    <>
      <Breadcrumbs items={[{ name: "How We Work", href: "/how-we-work" }]} />
      <PageHero
        eyebrow="Engagement process"
        h1="How We Work With Clients"
        subhead="From first message to engagement letter: what happens, who does it, and how scope and fees are agreed before any work starts."
        service="A first consultation"
        lead={
          <>
            Every new client starts with a <strong>15-minute consultation</strong> with a chartered accountant, followed by a
            conflict and independence check, a scoping call and a <strong>written engagement letter</strong> that sets out
            the scope, responsibilities and fees. Only then does onboarding begin. We do not publish price lists, in line
            with the rules for chartered accountants.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl text-obsidian">What happens after you contact us?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Every engagement follows the same seven steps, so you know what is agreed in writing before work begins.
          </p>
          {(ICAI_MEMBERSHIP_NO || FIRM_REGISTRATION_NO) && (
            <p className="mt-4 rounded-cards border border-ash bg-paper p-4 text-sm text-obsidian">
              {FOUNDER_NAME}
              {ICAI_MEMBERSHIP_NO && <>, ICAI membership no. {ICAI_MEMBERSHIP_NO}</>}
              {FIRM_REGISTRATION_NO && <> · C S Rushil &amp; Co., ICAI firm registration no. {FIRM_REGISTRATION_NO}</>}
            </p>
          )}
          <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <caption className="sr-only">Steps from first contact to ongoing work</caption>
              <thead>
                <tr className="bg-fog text-left">
                  <th className="p-4 font-medium text-obsidian">Step</th>
                  <th className="p-4 font-medium text-obsidian">Who</th>
                  <th className="p-4 font-medium text-obsidian">What happens</th>
                </tr>
              </thead>
              <tbody className="bg-paper">
                {STEPS.map((s) => (
                  <tr key={s.step} className="border-t border-ash align-top">
                    <th scope="row" className="p-4 text-left font-medium text-obsidian">{s.step}</th>
                    <td className="p-4 text-slate">{s.who}</td>
                    <td className="p-4 text-slate">{s.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-14 text-2xl text-obsidian">Which services do clients usually start with?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Most first engagements fall into one of a few services. Founders usually start with{" "}
            <Link href="/company-registration-chennai" className={LINK}>company registration in Chennai</Link> or go straight to{" "}
            <Link href="/private-limited-company-incorporation-chennai" className={LINK}>Private Limited Company registration</Link>.
            Businesses facing the tax department come to us for a{" "}
            <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>,{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>GST litigation and appeals</Link> or an{" "}
            <Link href="/income-tax-notice-reply-chennai" className={LINK}>income tax notice reply</Link>. Growing companies
            add a <Link href="/virtual-cfo-services" className={LINK}>virtual CFO</Link> and a{" "}
            <Link href="/statutory-audit-chennai" className={LINK}>statutory audit</Link>, individuals need{" "}
            <Link href="/income-tax-return-filing-chennai" className={LINK}>income tax return filing</Link>, and foreign-owned
            companies need <Link href="/fema-rbi-compliance" className={LINK}>FEMA and RBI compliance</Link>.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How are fees agreed?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Fees are agreed in a written engagement letter after the scoping call. They depend on the entities, filings,
            reporting and review frequency involved. We do not publish price lists, in line with the guidelines for
            chartered accountants. Government fees, stamp duty and third-party costs are shown separately and charged at
            actual.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How do we protect our independence as auditors?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            We do not act as statutory auditor of a company for which we keep the books, prepare the financial statements
            or act as virtual CFO. Section 144 of the Companies Act, 2013 restricts the other services an auditor can
            provide to the company it audits, and we apply that rule before accepting any engagement. Where a client needs
            both, the audit is done by an independent auditor and we work with them on schedules and queries.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How do we work with your other advisers?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Many clients already have a bookkeeper, a lawyer, an existing auditor or an accountant abroad. The engagement
            letter sets out who does what. We handle Indian law and Indian filings, share the Indian figures your other
            advisers need, and leave foreign tax and company law to your home adviser. Foreign parents can read more on our{" "}
            <Link href="/india-subsidiary-compliance-cfo" className={LINK}>
              India subsidiary compliance and CFO retainer
            </Link>
            .
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">When can we talk, and in which language?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Office hours are {hours}, India time. We speak {LANGUAGES_SPOKEN.join(", ")}. For clients in other time zones
            we schedule calls where your business hours overlap with ours, and send written updates by email or WhatsApp.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How is client information kept confidential?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Confidentiality of client information is a professional duty for chartered accountants under ICAI&apos;s Code of
            Ethics. How documents are shared, who on our team has access and how long records are kept are agreed in
            writing at onboarding. Ask for the details in your scoping call.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">Where do we serve clients from?</h2>
          <p className="mt-4 leading-relaxed text-slate">
            Our only office is at {ADDRESS_FULL}. Clients in Chennai can meet us there; clients across Tamil Nadu, the rest
            of India, and NRIs and companies abroad are served online. See the{" "}
            <Link href="/locations" className={LINK}>
              locations we serve
            </Link>{" "}
            or start with our{" "}
            <Link href="/" className={LINK}>
              CA firm in Chennai
            </Link>{" "}
            overview.
          </p>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTASection
        title="Ready to start with a 15-minute consultation?"
        subtitle="Message us on WhatsApp, call, or book a slot that suits your time zone."
      />
    </>
  );
}
