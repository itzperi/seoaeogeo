import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiloLinks from "@/components/SiloLinks";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";

const GST_STEPS = [
  { name: "Tell us what you need", text: "A new registration, monthly or quarterly returns, the annual return, an LUT for exports, or a notice you have received." },
  { name: "Review your GSTIN on the portal", text: "We check the registration details, filing history and any notices or demands already on the GST portal." },
  { name: "Reconcile the figures", text: "Sales are matched with GSTR-1, and input tax credit in the books with GSTR-2B, before anything is filed." },
  { name: "File or respond", text: "We file the return, application or reply on the GST portal in the form required, after you approve the figures." },
  { name: "Keep the calendar", text: "Every due date for your GSTIN goes on a calendar we share with you, so returns and replies are not missed." },
];
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/goods-and-services-tax`;
const title = "GST Returns and Notices in Chennai | C S Rushil & Co.";
const description =
  "GST consultants in Chennai for registration, GSTR-1 and 3B returns, GSTR-9/9C, ITC reconciliation, LUT for exporters, notice replies, appeals and cancellation.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/goods-and-services-tax" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/goods-and-services-tax",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const KEY_FACTS = [
  { label: "Registration threshold", value: "₹40 lakh for goods and ₹20 lakh for services in Tamil Nadu, with compulsory registration for some businesses regardless of turnover" },
  { label: "Regular returns", value: "GSTR-1 by the 11th and GSTR-3B by the 20th of the following month, or quarterly under QRMP up to ₹5 crore turnover" },
  { label: "Annual return", value: "GSTR-9 by 31 December; GSTR-9C as well above ₹5 crore turnover" },
  { label: "Portal", value: "GST common portal (gst.gov.in)" },
  { label: "Late filing", value: "Late fee per day under Section 47, capped by turnover, plus 18% annual interest on tax paid late" },
];

const HUB = [
  {
    name: "GST registration in Chennai",
    href: "/gst-registration-chennai",
    text: "New registration in REG-01, voluntary registration, amendments and casual taxable person registration, with ARN tracking until the GSTIN is issued.",
  },
  {
    name: "GST return filing in Chennai",
    href: "/gst-return-filing-chennai",
    text: "Monthly or quarterly GSTR-1 and GSTR-3B, QRMP and IFF, CMP-08 and GSTR-4 for composition dealers, and the annual GSTR-9 and 9C.",
  },
  {
    name: "GST notice reply in Chennai",
    href: "/gst-notice-reply-chennai",
    text: "Replies to scrutiny notices (ASMT-10), pre-demand intimations (DRC-01A), mismatch queries and registration show-cause notices, filed with reconciliations.",
  },
  {
    name: "GST litigation in Chennai",
    href: "/gst-litigation-chennai",
    text: "Show-cause notices under Sections 73 and 74, adjudication, appeals to the Appellate Authority and the GST Appellate Tribunal.",
  },
];

// "Which page do I need?" router: situation → what applies → page. Gives
// answer engines a table to lift and links every GST leaf from the hub.
const SITUATIONS = [
  { situation: "Starting a business or crossing the turnover threshold", applies: "Registration in REG-01 within 30 days of becoming liable", href: "/gst-registration-chennai", page: "GST registration" },
  { situation: "Registered and filing every month or quarter", applies: "GSTR-1 and GSTR-3B, or QRMP up to ₹5 crore turnover, with GSTR-2B reconciliation", href: "/gst-return-filing-chennai", page: "GST return filing" },
  { situation: "Received ASMT-10, DRC-01A or a mismatch notice", applies: "A written reply with reconciliations within the time in the notice", href: "/gst-notice-reply-chennai", page: "GST notice reply" },
  { situation: "Received a show-cause notice or a demand order", applies: "Reply under Section 73, 74 or 74A, then appeal in APL-01 if needed", href: "/gst-litigation-chennai", page: "GST litigation and appeals" },
  { situation: "Selling on Amazon, Flipkart or your own store", applies: "State-wise GSTR-1, TCS credit and settlement reconciliation", href: "/gst-return-filing-for-ecommerce-sellers", page: "GST for e-commerce sellers" },
  { situation: "Freelancer or consultant billing clients abroad", applies: "Export of services under LUT, and registration rules for inter-state services", href: "/gst-return-filing-for-freelancers", page: "GST for freelancers" },
  { situation: "Exporter or importer", applies: "LUT, IGST on imports, refunds of unused credit", href: "/gst-return-filing-for-import-export-businesses", page: "GST for importers and exporters" },
  { situation: "Restaurant, clinic, startup or manufacturer", applies: "Sector rules for rates, exemptions, credit and refunds", href: "/gst-return-filing-for-restaurants", page: "GST by industry" },
];

const FAQS = [
  {
    question: "When is GST e-invoicing mandatory?",
    answer:
      "E-invoicing applies to B2B invoices of businesses whose aggregate turnover exceeded ₹5 crore in any financial year from 2017-18 onwards. Since 1 April 2025, businesses with turnover of ₹10 crore or more must also report each invoice to the Invoice Registration Portal within 30 days of its date, or the portal will not accept it. We check both limits when we take on a GSTIN.",
  },
  {
    question: "What is the QRMP scheme?",
    answer:
      "QRMP lets businesses with aggregate turnover up to ₹5 crore file GSTR-1 and GSTR-3B quarterly instead of monthly, while still paying tax each month through PMT-06. B2B sellers can upload invoices monthly through the Invoice Furnishing Facility so their customers get credit on time. It suits small businesses with few B2B sales; it does not reduce the tax payable.",
  },
  {
    question: "Does a freelancer or consultant billing overseas clients need GST registration?",
    answer:
      "Below the ₹20 lakh threshold for services, generally not: service providers making inter-state supplies, including exports of services, are exempt from compulsory registration until they cross the threshold. Above it, registration is required, and exports can then be made without IGST under an LUT. Our freelancers page covers the full rules.",
  },
  {
    question: "What does a GST consultant in Chennai do?",
    answer:
      "A GST consultant registers your business, files GSTR-1, GSTR-3B and the annual GSTR-9, reconciles input tax credit with GSTR-2B, files LUTs for exporters, and replies to notices. We also handle cancellation and revocation of registration, and represent you in appeals when a demand is raised.",
  },
  {
    question: "Who has to file GSTR-9 and GSTR-9C?",
    answer:
      "GSTR-9 is the annual return for regular taxpayers, due by 31 December after the financial year. Businesses with aggregate turnover up to ₹2 crore are exempt from FY 2024-25 onwards. GSTR-9C, a self-certified reconciliation statement, is also required once aggregate turnover exceeds ₹5 crore.",
  },
  {
    question: "Can I claim input tax credit on every purchase invoice?",
    answer:
      "No. Under Rule 36(4) of the CGST Rules, credit is allowed only on invoices your supplier has reported in GSTR-1 and that appear in your GSTR-2B. The goods or services must be used for business, you must hold a valid invoice, and the claim must be made by 30 November after the year or the annual return date, whichever is earlier.",
  },
  {
    question: "Do exporters have to pay IGST on exports?",
    answer:
      "Not if they furnish a Letter of Undertaking (LUT) in Form GST RFD-11 on the GST portal. An LUT lets you export goods or services without paying IGST upfront and claim a refund of unused input tax credit instead. It is furnished for each financial year, so it must be renewed before 1 April.",
  },
  {
    question: "How do I cancel my GST registration in Chennai?",
    answer:
      "Apply for voluntary cancellation on the GST portal in Form REG-16 if the business has closed, been transferred, or no longer needs registration. Pending returns must be filed, and a final return in GSTR-10 is due within three months of cancellation. Input tax credit on closing stock and capital goods is paid back.",
  },
  {
    question: "My GST registration was cancelled for non-filing. Can it be restored?",
    answer:
      "Yes. Apply for revocation in Form REG-21 within 90 days of the cancellation order; the officer can extend this by up to 180 days for sufficient cause. Before applying, file every pending return and pay the tax, interest and late fees due. The officer decides within 30 days of the application.",
  },
  {
    question: "What is the late fee for filing GST returns late?",
    answer:
      "For GSTR-1 and GSTR-3B, the late fee is ₹50 a day (₹20 for nil returns), capped between ₹500 and ₹10,000 per return depending on turnover. Interest at 18% a year applies separately on tax paid late. Our GST return filing page has the full table, including GSTR-9.",
  },
];

export default function GstPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "GST Consultants in Chennai",
          description: "GST registration, returns, notices and litigation for Chennai and Tamil Nadu businesses, handled online from Anna Nagar. Book a consultation online.",
          url: PAGE_URL,
          serviceType: "GST Compliance and Advisory",
        })}
      />
      <JsonLd data={speakableSchema(["#direct-answer"])} />
      <Breadcrumbs items={[{ name: "GST Consultants", href: "/goods-and-services-tax" }]} />
      <PageHero
        reviewedPath="/goods-and-services-tax"
        eyebrow="GST · Chennai"
        h1="GST Consultants in Chennai"
        subhead="Registration, monthly and annual returns, input tax credit reconciliation, LUTs, notices and appeals, handled by one GST team from our Anna Nagar office."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="mb-12 max-w-3xl overflow-hidden rounded-cards border border-carbon">
            <h2 className="bg-carbon px-5 py-3 text-sm font-bold uppercase tracking-[0.032em] text-white">What are the key GST facts?</h2>
            <dl className="divide-y divide-ash bg-paper">
              {KEY_FACTS.map((f) => (
                <div key={f.label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="text-sm font-medium text-obsidian">{f.label}</dt>
                  <dd className="text-sm text-slate">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <h2 className="text-2xl text-obsidian">What do our GST consultants in Chennai handle?</h2>
          <p id="direct-answer" className="mt-4 max-w-2xl leading-relaxed text-slate">
            As GST consultants in Chennai, we register businesses, file GSTR-1 and GSTR-3B every month or quarter, prepare
            the annual GSTR-9 and 9C, reconcile input tax credit with GSTR-2B, file LUTs for exporters, and reply to
            notices. When a demand is raised, we take the matter through adjudication and appeal. For the annual return
            rules, see{" "}
            <a
              href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter8/rule80_v1.00.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CBIC: Rule 80 of the CGST Rules, annual return (taxinformation.cbic.gov.in)
            </a>
            .
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">Which GST services do we offer in Chennai?</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HUB.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <h3 className="font-medium text-obsidian">{s.name}</h3>
                <p className="mt-2 text-sm text-slate">{s.text}</p>
                <span className="mt-3 inline-block text-sm font-medium text-royal-violet">Learn more →</span>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 text-2xl text-obsidian">Which GST service fits your situation?</h2>
          <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-carbon text-white">
                <tr>
                  <th className="px-4 py-3 font-medium">Your situation</th>
                  <th className="px-4 py-3 font-medium">What applies</th>
                  <th className="px-4 py-3 font-medium">Where to start</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ash bg-paper">
                {SITUATIONS.map((r) => (
                  <tr key={r.href}>
                    <td className="px-4 py-3 align-top font-medium text-obsidian">{r.situation}</td>
                    <td className="px-4 py-3 align-top text-slate">{r.applies}</td>
                    <td className="px-4 py-3 align-top">
                      <Link href={r.href} className={linkClass}>
                        {r.page}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-slate">
            Rules and due dates are as notified by the CBIC and GSTN; see the{" "}
            <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              GST common portal
            </a>{" "}
            and the{" "}
            <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              CBIC GST portal
            </a>{" "}
            for current notifications.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">What are GSTR-9 and GSTR-9C, and who must file them?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            GSTR-9 brings together the year&apos;s GSTR-1 and GSTR-3B filings and is due by 31 December after the
            financial year. Businesses with aggregate turnover up to ₹2 crore are exempt from FY 2024-25 onwards. Above ₹5
            crore, GSTR-9C, a self-certified reconciliation of the GST returns with the audited financial statements, is
            filed with it. The annual return is a chance to report missed sales and pay the tax through DRC-03, but input
            tax credit not claimed by the cut-off cannot be added. Our{" "}
            <Link href="/blog/gstr9-annual-return-checklist" className={linkClass}>
              GSTR-9 annual return checklist
            </Link>{" "}
            lists what to reconcile first.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How is input tax credit reconciled with GSTR-2B?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            GSTR-2B is the monthly statement of input tax credit available to you, built from what your suppliers report.
            Under Rule 36(4), credit can be claimed only on invoices that appear in it. We match your purchase register with
            GSTR-2B every month, list missing invoices by supplier, and track credit that must be reversed, for example when
            a supplier is not paid within 180 days. Unreconciled differences between GSTR-3B and GSTR-2B are a common reason
            for ASMT-10 and DRC-01C notices; our guide to{" "}
            <Link href="/blog/itc-mismatch-notices" className={linkClass}>
              input tax credit mismatch notices
            </Link>{" "}
            explains how they are answered.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">Do exporters need a Letter of Undertaking (LUT)?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Exporters of goods and services, including software and consulting firms billing overseas clients, can supply
            without paying IGST by furnishing a Letter of Undertaking in Form GST RFD-11. The LUT is valid for a financial
            year, so it is renewed each year before 1 April. Without it, IGST must be paid on each export and claimed back
            as a refund. See{" "}
            <Link href="/blog/lut-for-exporters" className={linkClass}>
              LUT for exporters: how to file and why it matters
            </Link>
            . If a refund is held back, our guide to{" "}
            <Link href="/blog/tiruppur-export-refund-rejection" className={linkClass}>
              export refund rejections
            </Link>{" "}
            covers the usual causes and fixes.
          </p>

          <h2 className="mt-14 text-2xl text-obsidian">How is a GST registration cancelled or revoked?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            A business that closes or no longer needs registration applies for cancellation in Form REG-16 and files a final
            return in GSTR-10 within three months of cancellation. The department can also cancel a registration, most often
            for continued non-filing. In that case, revocation is sought in Form REG-21 within 90 days of the cancellation
            order (extendable by up to 180 days), after filing all pending returns and paying the dues. If the revocation is
            rejected or a demand follows, our{" "}
            <Link href="/gst-litigation-chennai" className={linkClass}>
              GST litigation team
            </Link>{" "}
            takes over.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-12">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl text-obsidian">How do we take on your GST work?</h2>
          <p className="mt-4 leading-relaxed text-slate">Every GST engagement follows the same five steps, whatever the starting point.</p>
          <ol className="mt-4 space-y-3">
            {GST_STEPS.map((s, i) => (
              <li key={s.name} className="rounded-cards border border-ash bg-paper p-5">
                <p className="font-medium text-obsidian">{i + 1}. {s.name}</p>
                <p className="mt-1 text-sm text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <JsonLd data={howToSchema({ name: "How we take on your GST work", description: "The five steps we follow for GST registration, returns and notices.", steps: GST_STEPS })} />
      </section>

      <SiloLinks path="/goods-and-services-tax" />

      <FAQSection items={FAQS} />

      <section className="bg-paper py-12">
        <div className="container-page">
          <h2 className="text-xl text-obsidian">What else do people ask?</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/gst-registration-chennai" className={linkClass}>
                Who needs to register for GST in Chennai?
              </Link>
            </li>
            <li>
              <Link href="/gst-return-filing-chennai" className={linkClass}>
                What are the GST return due dates and late fees?
              </Link>
            </li>
            <li>
              <Link href="/gst-notice-reply-chennai" className={linkClass}>
                How do I reply to a GST notice?
              </Link>
            </li>
            <li>
              <Link href="/blog/gst-show-cause-notice-first-48-hours" className={linkClass}>
                What should I do in the first 48 hours after a GST show-cause notice?
              </Link>
            </li>
            <li>
              <Link href="/direct-tax" className={linkClass}>
                Do I need to file income tax separately from GST?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
