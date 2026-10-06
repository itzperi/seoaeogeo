import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "TDS Return Filing in Chennai | 24Q, 26Q, 27Q";
const description =
  "TDS return filing in Chennai under the Income-tax Act, 2025: Forms 138, 140, 144 (earlier 24Q, 26Q, 27Q), Form 16/16A, corrections, TDS on rent and property.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/tds-return-filing-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/tds-return-filing-chennai",
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

const FORM_MAP = [
  { now: "Form 138", earlier: "Form 24Q", use: "Quarterly statement of TDS on salary (Section 392)" },
  { now: "Form 140", earlier: "Form 26Q", use: "Quarterly statement of TDS on non-salary payments to residents (Section 393(1))" },
  { now: "Form 144", earlier: "Form 27Q", use: "Quarterly statement of TDS on payments to non-residents, including NRIs (Section 393(2))" },
  { now: "Form 141", earlier: "Forms 26QB, 26QC, 26QD, 26QE", use: "Challan-cum-statement for one-off deductions: property purchase, rent paid by individuals, certain contractor and professional payments, and virtual digital assets" },
  { now: "Form 130", earlier: "Form 16", use: "Annual TDS certificate issued by an employer" },
  { now: "Form 131", earlier: "Form 16A", use: "Quarterly TDS certificate for non-salary payments" },
];

const QUARTERS = [
  { q: "Q1: April to June", due: "31 July" },
  { q: "Q2: July to September", due: "31 October" },
  { q: "Q3: October to December", due: "31 January" },
  { q: "Q4: January to March", due: "31 May" },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/tds-return-filing-chennai`}
      serviceType="TDS Return Filing"
      crumbLabel="TDS Return Filing"
      crumbHref="/tds-return-filing-chennai"
      parentCrumb={{ name: "Direct Tax", href: "/direct-tax" }}
      eyebrow="TDS Returns · Chennai"
      h1="TDS Return Filing in Chennai"
      subhead="Quarterly TDS statements, Form 16 and 16A certificates, correction statements and one-off property and rent deductions, prepared under the Income-tax Act, 2025."
      introHeading="What does TDS return filing in Chennai cover?"
      intro="TDS return filing in Chennai means filing a quarterly statement of tax deducted from salaries, rent, fees, contract payments and payments to NRIs. From 1 April 2026, Forms 24Q, 26Q and 27Q are replaced by Forms 138, 140 and 144 under the Income-tax Act, 2025. Each quarter's statement is due by 31 July, 31 October, 31 January or 31 May."
      citation={{
        label: "Income Tax Department: Form 140 (earlier Form 26Q) user manual (incometax.gov.in)",
        href: "https://www.incometax.gov.in/iec/foportal/newformpage/forms/form140-um",
      }}
      keyFacts={[
        { label: "Statements (tax year 2026-27)", value: "Form 138 (salary), Form 140 (residents), Form 144 (non-residents); earlier 24Q, 26Q and 27Q" },
        { label: "Who files", value: "Every person with a TAN who deducts tax: employers, companies, firms, and individuals or HUFs covered by the TDS rules" },
        { label: "Quarterly due dates", value: "31 July, 31 October, 31 January and 31 May" },
        { label: "Tax deposit", value: "By the 7th of the following month; TDS deducted in March by 30 April" },
        { label: "Late fee", value: "₹200 per day until filed, capped at the TDS amount (Section 427, earlier Section 234E)" },
      ]}
      subServicesHeading="Which TDS services do we handle?"
      subServices={[
        { name: "Quarterly TDS statements", text: "Forms 138, 140 and 144 prepared from your payment ledgers, validated with the official utility and filed before the due date." },
        { name: "Form 16 and Form 16A (now Forms 130 and 131)", text: "Certificates downloaded from TRACES after the statement is processed and issued to employees and vendors." },
        { name: "Correction statements", text: "Fixing wrong PANs, unmatched challans, short deduction and late-payment defaults raised in TRACES notices, so the deductee sees the credit in Form 26AS." },
        { name: "TDS on rent", text: "Deciding which rent rule applies (earlier Section 194-I or 194-IB), the rate, and the timing, then filing the quarterly statement or the Form 141 challan-cum-statement." },
        { name: "TDS on property purchase", text: "Form 141 (earlier 26QB) for buying property of ₹50 lakh or more from a resident, and Form 144 with a TAN when the seller is an NRI." },
        { name: "Payments to NRIs and foreign vendors", text: "TDS under Section 393(2) (earlier Section 195), treaty-rate checks with a tax residency certificate, and the Form 145 and 146 remittance filings." },
      ]}
      howTo={{
        heading: "How do we prepare and file your TDS return?",
        steps: [
          { name: "Review the quarter's payments", text: "We go through salary, rent, professional fees, contract and commission payments to confirm which ones attract TDS and at what rate." },
          { name: "Verify PAN and challans", text: "Deductee PANs are validated and every challan is matched to the deductions it covers, so no deduction is left unmatched." },
          { name: "Prepare the statement", text: "The correct form (138, 140 or 144) is prepared with the new section codes, then checked with the file validation utility." },
          { name: "File and track processing", text: "The statement is filed before the quarterly due date and we track it through TRACES until it is processed without defaults." },
          { name: "Issue certificates", text: "Form 130 (salary) and Form 131 (non-salary) certificates are downloaded and sent to employees and vendors." },
        ],
      }}
      faqs={[
        { question: "What are the TDS return due dates for tax year 2026-27?", answer: "Quarterly TDS statements are due by 31 July for April to June, 31 October for July to September, 31 January for October to December, and 31 May for January to March. These dates apply to Forms 138, 140 and 144. The fourth-quarter statement for FY 2025-26 still uses the old Forms 24Q, 26Q and 27Q." },
        { question: "Have the TDS return form numbers changed?", answer: "Yes. Under the Income-tax Rules, 2026, Form 24Q became Form 138, Form 26Q became Form 140 and Form 27Q became Form 144. Form 16 is now Form 130 and Form 16A is now Form 131. The data you report is largely the same, but section codes follow the Income-tax Act, 2025." },
        { question: "What is the penalty for filing a TDS return late?", answer: "A late fee of ₹200 per day applies until the statement is filed, capped at the total TDS for that statement, under Section 427 of the Income-tax Act, 2025 (earlier Section 234E). Interest of 1.5% a month applies separately if deducted tax was deposited late, under Section 398." },
        { question: "Does a tenant have to deduct TDS on rent in Chennai?", answer: "Yes, if rent exceeds ₹50,000 for a month. Individuals and HUFs not covered by the business rule deduct 2% once a year, from the last month's rent (earlier Section 194-IB). Businesses deduct 10% on land and buildings or 2% on plant and machinery (earlier Section 194-I). Both now sit under Section 393(1)." },
        { question: "How is TDS handled when I buy property in Chennai?", answer: "If the price or stamp duty value is ₹50 lakh or more and the seller is resident, deduct 1% and file Form 141 (earlier 26QB) using your PAN; no TAN is needed. If the seller is an NRI, TDS is deducted under Section 393(2) at the rate applicable to capital gains, and you need a TAN and must file Form 144." },
        { question: "How do I correct a mistake in a filed TDS return?", answer: "File a correction statement against the original statement through TRACES and the TDS return utility. Common fixes are a wrong PAN, a challan tagged to the wrong quarter, or a missing deductee entry. Once processed, the corrected credit appears in the deductee's Form 26AS, and any default notice is updated." },
        { question: "Why does TDS on payments to NRIs need separate handling?", answer: "Payments to non-residents fall under Section 393(2) (earlier Section 195), where the rate depends on the type of income and any tax treaty. They are reported quarterly in Form 144, not Form 140. Before remitting abroad, Form 145 and, above ₹5 lakh, a CA certificate in Form 146 may also be needed." },
      ]}
      relatedSlugs={["direct-tax", "payroll-services-chennai", "nri-property-sale-tds-chennai"]}
      relatedPosts={["tds-return-filing-deadlines", "tds-on-rent", "form26as-mismatch-velachery", "advance-tax-deadlines"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">New TDS forms under the Income-tax Act, 2025</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The Income-tax Act, 2025 and the Income-tax Rules, 2026 apply from 1 April 2026. TDS on salary now sits in Section
        392, and almost every other TDS provision is consolidated into tables under Section 393. The forms were renumbered
        at the same time. Deductions made up to 31 March 2026 are still reported in the old forms with old section codes.
      </p>
      <div className="mt-6 max-w-3xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Form now</th>
              <th className="px-4 py-3 font-medium">Earlier form</th>
              <th className="px-4 py-3 font-medium">Used for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {FORM_MAP.map((r) => (
              <tr key={r.now}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.now}</td>
                <td className="px-4 py-3 align-top text-slate">{r.earlier}</td>
                <td className="px-4 py-3 align-top text-slate">{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl text-obsidian">Quarterly TDS statement due dates</h2>
      <div className="mt-6 max-w-xl overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Quarter</th>
              <th className="px-4 py-3 font-medium">Statement due by</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {QUARTERS.map((r) => (
              <tr key={r.q}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.q}</td>
                <td className="px-4 py-3 align-top text-slate">{r.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Two interest charges apply under Section 398 (earlier Section 201(1A)): 1% a month when tax was not deducted, and
        1.5% a month when it was deducted but deposited late. Neither is waived by filing the statement on time, so we check
        challan dates before every filing.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Selling property as an NRI or paying someone abroad?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        When the seller is a non-resident, the buyer deducts TDS on the capital gain under Section 393(2) and files Form 144,
        which needs a TAN. Our{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale TDS service
        </Link>{" "}
        covers the buyer&apos;s side and the seller&apos;s lower-deduction certificate. For outward remittances, see{" "}
        <Link href="/form-15ca-15cb-chennai" className={linkClass}>
          Form 15CA and 15CB (now Forms 145 and 146)
        </Link>
        . TDS defaults often surface during scrutiny; our{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice reply service
        </Link>{" "}
        handles TRACES and assessment notices, and the{" "}
        <Link href="/direct-tax" className={linkClass}>
          direct tax services
        </Link>{" "}
        page lists everything else we do on income tax.
      </p>
    </ServicePageTemplate>
  );
}
