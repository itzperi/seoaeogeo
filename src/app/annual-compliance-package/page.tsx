import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Annual Compliance Package for Companies & LLPs";
const description =
  "Annual compliance package for companies and LLPs in Chennai: bookkeeping, statutory audit, AOC-4, MGT-7, DIR-3 KYC, LLP Form 8 and 11, ITR, GST and TDS returns.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/annual-compliance-package" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/annual-compliance-package",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const CALENDAR = [
  { when: "Every month", company: "GST returns (GSTR-1 by the 11th, GSTR-3B by the 20th); TDS deposit by the 7th", llp: "Same, if registered for GST or liable to deduct TDS" },
  { when: "Every quarter", company: "TDS statements: 31 July, 31 October, 31 January, 31 May", llp: "Same" },
  { when: "30 May", company: "—", llp: "Form 11 (annual return)" },
  { when: "30 June", company: "DIR-3 KYC Web, in the year it falls due (once every three financial years)", llp: "DIR-3 KYC Web for designated partners, in the year it falls due" },
  { when: "30 September", company: "Last date for the AGM (within six months of year end); tax audit report where applicable", llp: "Tax audit report where applicable" },
  { when: "30 October", company: "AOC-4 within 30 days of the AGM", llp: "Form 8 (statement of account and solvency)" },
  { when: "31 October", company: "Income tax return (companies)", llp: "Income tax return, if accounts are audited" },
  { when: "29 November", company: "MGT-7 or MGT-7A within 60 days of the AGM", llp: "—" },
  { when: "31 December", company: "GSTR-9 and GSTR-9C, where applicable", llp: "GSTR-9 and GSTR-9C, where applicable" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/annual-compliance-package`}
      serviceType="Annual Corporate Compliance"
      crumbLabel="Annual Compliance Package"
      crumbHref="/annual-compliance-package"
      eyebrow="Annual Compliance · Chennai"
      h1="Annual Compliance Package for Companies and LLPs"
      subhead="Books, audit, ROC filings, income tax, GST and TDS for the whole year, run by one team on one calendar from our Anna Nagar office."
      introHeading="What is included in an annual compliance package for companies and LLPs?"
      intro="An annual compliance package for companies and LLPs bundles every recurring filing into one engagement: bookkeeping, the statutory audit, AOC-4 and MGT-7 or MGT-7A for companies, Form 8 and Form 11 for LLPs, DIR-3 KYC, the income tax return, and monthly GST and quarterly TDS returns. One team owns the calendar, so filings happen in the right order."
      citation={{
        label: "Ministry of Corporate Affairs (MCA): Annual Filings",
        href: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/annual-filings.html",
      }}
      keyFacts={[
        { label: "Who needs it", value: "Private limited companies, OPCs and LLPs that want every statutory filing handled by one team" },
        { label: "Portals", value: "MCA V3 portal (ROC), income tax e-filing portal, GST portal and TRACES" },
        { label: "Company ROC deadlines", value: "AGM by 30 September; AOC-4 within 30 days and MGT-7/7A within 60 days of the AGM" },
        { label: "LLP ROC deadlines", value: "Form 11 by 30 May; Form 8 by 30 October" },
        { label: "Late filing", value: "Additional fee of ₹100 per day per form for late AOC-4 or MGT-7/7A, with no upper cap; LLP forms also attract a daily additional fee" },
      ]}
      subServicesHeading="What does the annual compliance package include?"
      subServices={[
        { name: "Bookkeeping and monthly close", text: "Accounts kept current in Tally, Zoho Books or QuickBooks, with bank and GST reconciliations every month so the year-end close is quick." },
        { name: "Statutory audit", text: "Coordination of the statutory audit required for every company, and for LLPs above the audit thresholds, with schedules ready before the auditor arrives." },
        { name: "Company ROC filings", text: "Board meetings, AGM notice and minutes, AOC-4, MGT-7 or MGT-7A (for OPCs and small companies), and ADT-1 when an auditor is appointed." },
        { name: "LLP ROC filings", text: "Form 11 annual return by 30 May and Form 8 statement of account and solvency by 30 October, signed by the designated partners." },
        { name: "Director KYC", text: "DIR-3 KYC Web for each director or designated partner, now once every three financial years from 31 March 2026, plus updates within 30 days of a change in contact details." },
        { name: "Income tax, GST and TDS", text: "Income tax return, tax audit where applicable, advance tax estimates, monthly GST returns, GSTR-9 and quarterly TDS statements." },
      ]}
      howTo={{
        heading: "How does the annual compliance package run through the year?",
        steps: [
          { name: "Compliance health check", text: "We review past ROC, income tax, GST and TDS filings, list any gaps and file pending items first." },
          { name: "Build your calendar", text: "Every due date for your entity, registrations and turnover is set out for the year, with the documents we need before each one." },
          { name: "Monthly and quarterly work", text: "Books are closed monthly; GST returns and TDS deposits go out each month and TDS statements each quarter." },
          { name: "Year-end audit and tax", text: "Accounts are finalised, the audit is completed and the income tax return and tax audit report are filed." },
          { name: "ROC annual filings", text: "AGM documents, AOC-4 and MGT-7 or MGT-7A (or Form 8 and Form 11 for LLPs) are filed after the audit, followed by GSTR-9." },
        ],
      }}
      faqs={[
        { question: "Which annual filings does a private limited company have?", answer: "A private limited company must hold its AGM within six months of year end, then file AOC-4 within 30 days and MGT-7 or MGT-7A within 60 days of the AGM. It also needs a statutory audit, an income tax return by 31 October, and GST and TDS returns if registered or liable." },
        { question: "What are the annual filings for an LLP?", answer: "Every LLP files Form 11, the annual return, by 30 May and Form 8, the statement of account and solvency, by 30 October, whether or not it did any business. It also files an income tax return, and GST and TDS returns if registered or liable to deduct tax." },
        { question: "Is DIR-3 KYC still required every year?", answer: "No. From 31 March 2026, each director or designated partner holding a DIN files DIR-3 KYC Web once every three financial years, by 30 June of the year it falls due. A change in mobile number, email or address must still be updated within 30 days of the change." },
        { question: "What is the penalty for filing AOC-4 or MGT-7 late?", answer: "Late AOC-4 and MGT-7 or MGT-7A filings attract an additional fee of ₹100 per day of delay for each form, with no upper cap. Prolonged non-filing can also lead to directors being disqualified and the company being struck off, so delays are expensive to fix later." },
        { question: "Does every company need a statutory audit?", answer: "Yes. Every company registered under the Companies Act, 2013 needs its accounts audited every year, however small its turnover, and the audited accounts are filed in AOC-4. LLPs need an audit only if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh." },
        { question: "Why does the order of annual filings matter?", answer: "Each filing depends on the one before it. The audit needs closed books; the AGM adopts the audited accounts; AOC-4 and MGT-7 follow the AGM; and GSTR-9 should match the audited figures. When one team runs the whole sequence, a delay at one stage does not cascade into late fees." },
      ]}
      relatedSlugs={["roc-compliances", "statutory-audit-chennai", "bookkeeping-services-chennai"]}
      relatedPosts={["annual-roc-filing-calendar", "llp-annual-filing-form8-form11", "post-incorporation-compliance-checklist", "statutory-audit-checklist", "common-compliance-mistakes-chennai-startups"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Annual compliance calendar for a 31 March year end</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Company dates for AOC-4 and MGT-7 assume the AGM is held on 30 September, the last permitted date; an earlier AGM
        brings them forward. Government extensions, where notified, are applied as they come.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">When</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">LLP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {CALENDAR.map((r) => (
              <tr key={r.when}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.when}</td>
                <td className="px-4 py-3 align-top text-slate">{r.company}</td>
                <td className="px-4 py-3 align-top text-slate">{r.llp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">The individual services behind the package</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Each part of the package is also available on its own. See our{" "}
        <Link href="/roc-compliances" className={linkClass}>
          ROC compliance service for companies and LLPs
        </Link>
        , the{" "}
        <Link href="/statutory-audit-chennai" className={linkClass}>
          statutory audit in Chennai
        </Link>{" "}
        page, and{" "}
        <Link href="/bookkeeping-services-chennai" className={linkClass}>
          bookkeeping services in Chennai
        </Link>
        . For tax filings, see{" "}
        <Link href="/gst-return-filing-chennai" className={linkClass}>
          GST return filing
        </Link>{" "}
        and{" "}
        <Link href="/tds-return-filing-chennai" className={linkClass}>
          TDS return filing
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
