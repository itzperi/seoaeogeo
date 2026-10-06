import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Income Tax Consultants in Chennai | Direct Tax Services";
const description =
  "Income tax consultants in Chennai: ITR filing, tax planning, TDS returns, tax audit, notices, assessments, appeals and NRI tax under the Income-tax Act, 2025.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/direct-tax" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/direct-tax",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const SERVICES = [
  { href: "/income-tax-return-filing-chennai", name: "Income tax return filing in Chennai", text: "ITR preparation for salaried individuals, business owners, professionals, firms, LLPs and companies, with AIS and Form 26AS reconciled before filing." },
  { href: "/income-tax-notice-reply-chennai", name: "Income tax notice reply", text: "Replies to mismatch notices, defective return notices, proposed adjustments and information requests, filed through e-Proceedings." },
  { href: "/income-tax-assessment-appeals-chennai", name: "Assessment and appeals", text: "Scrutiny and reassessment proceedings, appeals to the CIT(A) in Form 99 and to the Income Tax Appellate Tribunal, and stay of demand." },
  { href: "/tds-return-filing-chennai", name: "TDS return filing", text: "Quarterly statements in Forms 138, 140 and 144 (earlier 24Q, 26Q and 27Q), Form 16 and 16A certificates and correction statements." },
  { href: "/tax-audit-chennai", name: "Tax audit", text: "Audit report in Form 3CA/3CB and 3CD for businesses and professionals above the audit thresholds (Section 63, earlier Section 44AB)." },
  { href: "/form-15ca-15cb-chennai", name: "Form 15CA and 15CB", text: "Remittance filings, now Forms 145 and 146, with taxability and treaty review before money is sent abroad." },
  { href: "/nri-tax-services", name: "NRI tax services", text: "Indian returns for NRIs, DTAA claims, TDS refunds on rent and deposits, and property-sale tax planning." },
];

const DATES = [
  { item: "Advance tax instalments", when: "15 June (15%), 15 September (45%), 15 December (75%), 15 March (100%) of the year's tax" },
  { item: "ITR: salaried and other non-business taxpayers", when: "31 July after the tax year" },
  { item: "ITR: business or professional income, no audit", when: "31 August after the tax year" },
  { item: "Tax audit report", when: "30 September after the tax year" },
  { item: "ITR: audited businesses and companies", when: "31 October after the tax year (30 November where a transfer pricing report is required)" },
  { item: "Quarterly TDS statements", when: "31 July, 31 October, 31 January and 31 May" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/direct-tax`}
      serviceType="Income Tax and Direct Tax Advisory"
      crumbLabel="Direct Tax"
      crumbHref="/direct-tax"
      eyebrow="Direct Tax · Chennai"
      h1="Direct Tax and Income Tax Consultants in Chennai"
      subhead="Return filing, tax planning, TDS, tax audit, notices, assessments and appeals for individuals, NRIs, firms and companies, from our Anna Nagar office."
      introHeading="What do income tax consultants in Chennai handle?"
      intro="As income tax consultants in Chennai, we handle every part of direct tax for individuals, NRIs, firms and companies: income tax returns, advance tax, TDS returns, tax audit, replies to notices, scrutiny assessments and appeals. From 1 April 2026, the Income-tax Act, 2025 replaces the 1961 Act, renumbering most sections and forms, so we work under both."
      citation={{ label: "Income Tax Department: Objective and scope of the Income-tax Act, 2025 (incometax.gov.in)", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act" }}
      keyFacts={[
        { label: "Law in force", value: "Income-tax Act, 2025 from 1 April 2026; the 1961 Act still governs FY 2025-26 and earlier years" },
        { label: "Return due dates", value: "31 July (non-business), 31 August (business without audit), 31 October (audited and companies)" },
        { label: "Portal", value: "Income tax e-filing portal (incometax.gov.in) and TRACES for TDS" },
        { label: "Who needs it", value: "Salaried individuals, NRIs, business owners, professionals, firms, LLPs, companies and trusts" },
        { label: "Interest for delay", value: "1% a month for late returns and shortfalls in advance tax (Sections 423 to 425, earlier 234A to 234C)" },
      ]}
      subServicesHeading="Which direct tax services do we offer in Chennai?"
      subServices={[
        { name: "Income tax return filing", text: "Choosing the right ITR form, reconciling AIS, TIS and Form 26AS, claiming deductions and exemptions, and filing before the due date." },
        { name: "Tax planning and regime choice", text: "Comparing the old and new tax regimes, timing capital gains, and structuring salary, rent and business income within the law." },
        { name: "Advance tax", text: "Quarterly estimates of the year's income so each instalment is paid on time and interest under Sections 424 and 425 (earlier 234B and 234C) is avoided." },
        { name: "TDS compliance", text: "Deduction, deposit by the 7th, quarterly statements and certificates for employers, tenants paying high rent and businesses paying contractors or NRIs." },
        { name: "Notices, assessments and appeals", text: "Replies to notices, representation in scrutiny and reassessment, and appeals to the CIT(A) and ITAT." },
        { name: "Capital gains advisory", text: "Holding-period analysis, indexation where still available, reinvestment exemptions and TDS for property, shares and business assets." },
      ]}
      howTo={{
        heading: "How do we work on your income tax each year?",
        steps: [
          { name: "Start-of-year review", text: "We look at last year's return, expected income and the regime choice, and set out the advance tax and TDS calendar for the year." },
          { name: "Quarterly check-ins", text: "Income is re-estimated before each advance tax date, and TDS deducted from you is matched against Form 26AS." },
          { name: "Year-end close", text: "Books are finalised, capital gains statements collected, and the tax audit completed where it applies." },
          { name: "Return filing", text: "The return is prepared, reviewed with you, filed and e-verified, with the computation kept on file." },
          { name: "After filing", text: "We track processing, refunds and any notice, and reply within the time allowed." },
        ],
      }}
      faqs={[
        { question: "When is the income tax return filing deadline?", answer: "For individuals without business income, the due date is 31 July after the tax year. Taxpayers with business or professional income whose accounts are not audited have until 31 August, a change made by the Finance Act, 2026. Audited businesses and companies have until 31 October, and the CBDT can extend these dates." },
        { question: "What changed with the Income-tax Act, 2025?", answer: "The new Act applies from 1 April 2026 and replaces 'previous year' and 'assessment year' with a single 'tax year'. Most sections and forms are renumbered: for example, tax audit moves from Section 44AB to Section 63, and TDS provisions are consolidated in Sections 392 and 393. Income up to 31 March 2026 is still taxed under the 1961 Act." },
        { question: "What happens if I receive an income tax scrutiny notice?", answer: "Respond within the deadline in the notice with supporting documents. We check whether the notice was issued in time, identify the issues raised, build a case file and file replies through e-Proceedings. If an addition is made, we can appeal to the CIT(A) within 30 days of the demand notice." },
        { question: "Do you help NRIs with Indian income tax?", answer: "Yes. We file Indian returns for NRIs, claim DTAA benefits with a tax residency certificate, recover excess TDS on rent, interest and property sales, and prepare Forms 145 and 146 (earlier 15CA and 15CB) when money is sent abroad from an NRO account." },
        { question: "Who has to pay advance tax?", answer: "Anyone whose tax for the year, after TDS, is ₹10,000 or more must pay advance tax in four instalments: 15%, 45%, 75% and 100% of the year's tax by 15 June, 15 September, 15 December and 15 March. Resident senior citizens without business income are exempt. Shortfalls attract 1% interest a month." },
        { question: "When does a business need a tax audit?", answer: "A tax audit under Section 63 of the Income-tax Act, 2025 (earlier Section 44AB) applies when business turnover or professional receipts cross the prescribed limits, or when lower presumptive profits are declared. The audit report is due by 30 September and the return by 31 October." },
      ]}
      relatedQuestions={[
        { question: "What's the deadline for filing my income tax return?", href: "/income-tax-return-filing-chennai" },
        { question: "How do I reply to an income tax notice?", href: "/income-tax-notice-reply-chennai" },
        { question: "Do I need to register for GST as well?", href: "/goods-and-services-tax" },
      ]}
      relatedSlugs={["income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "tax-audit-chennai"]}
      relatedPosts={["old-vs-new-tax-regime", "advance-tax-deadlines", "why-income-tax-notices-issued", "capital-gains-tax-property-sale", "tds-return-filing-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Our income tax services, one by one</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Direct tax covers the taxes you pay directly to the government on income, chiefly income tax and the tax deducted
        at source on payments you make or receive. Each service below has its own page with due dates, documents and
        process.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
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

      <h2 className="mt-14 text-2xl text-obsidian">Key income tax dates in a year</h2>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 font-medium">Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {DATES.map((r) => (
              <tr key={r.item}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.item}</td>
                <td className="px-4 py-3 align-top text-slate">{r.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Working across the 1961 and 2025 Acts</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        For the next few years, most taxpayers will deal with both laws at once. A return for FY 2025-26 filed in 2026 is
        governed by the 1961 Act, while TDS deducted from April 2026 is reported under the new Act in new forms. A
        scrutiny notice for an older year will cite Section 143(2); one for tax year 2026-27 will cite Section 270(8). We
        read each notice, form and certificate against the right Act, so the reply, the appeal or the return relies on the
        provision that actually applies.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        If you are not sure where to start, the{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>{" "}
        page covers the annual return, and the{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          notice reply
        </Link>{" "}
        page covers anything the department has sent you.
      </p>
    </ServicePageTemplate>
  );
}
