import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Every row below is a mapping the site already states (and cites) on the
// linked page: ACT_ROWS in src/components/ActTransitionTable.tsx, the
// transfer pricing tables in src/app/transfer-pricing-audit/page.tsx, and
// the TDS, notice and capital gains pages. Add a row only after the new
// number has been checked against the Income-tax Act, 2025 / Rules, 2026,
// and keep the linked page in step.
export const meta: BlogPostMeta = {
  slug: "income-tax-act-2025-section-mapping",
  title: "Income-tax Act 2025: Old vs New Section and Form Numbers",
  description:
    "Section 44AB is now 63, 195 is 393(2), 54 is 82, Form 15CA is 145 and Form 3CEB is 48. A table of 1961 to 2025 section, form and rule numbers.",
  date: "2026-11-13",
  excerpt:
    "The Income-tax Act, 2025 renumbers most sections and forms from tax year 2026-27. A lookup table of old and new numbers for audit, TDS, capital gains, notices and transfer pricing.",
  summary:
    "The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026, for tax year 2026-27 onwards, and renumbered most sections and forms. For example, tax audit moves from Section 44AB to Section 63, TDS on non-residents from Section 195 to 393(2), and Form 15CA becomes Form 145. Earlier years still use the 1961 numbers.",
  faqs: [
    {
      question: "When does the Income-tax Act, 2025 apply?",
      answer:
        "From 1 April 2026, for tax year 2026-27 (April 2026 to March 2027) and later years. Income of FY 2025-26 and earlier, and notices, assessments and appeals for those years, continue under the Income-tax Act, 1961, so both sets of numbers will be in use for several years.",
    },
    {
      question: "What is the new section for tax audit under Section 44AB?",
      answer:
        "Section 63 of the Income-tax Act, 2025. The transfer pricing accountant's report moves from Section 92E and Form 3CEB to Section 172 and Form 48, due one month before the return due date.",
    },
    {
      question: "What are the new numbers for Form 15CA and Form 15CB?",
      answer:
        "Form 145 replaces Form 15CA (the remitter's declaration) and Form 146 replaces Form 15CB (the Chartered Accountant's certificate). TDS on payments to non-residents moves from Section 195 to Section 393(2).",
    },
    {
      question: "Which sections replace the capital gains exemptions in Sections 54, 54EC and 54F?",
      answer:
        "Section 82 replaces Section 54 (sale of a residential house), Section 85 replaces Section 54EC (specified bonds) and Section 86 replaces Section 54F (sale of other long-term assets). The conditions are broadly carried over; check the new text before relying on a time limit.",
    },
    {
      question: "Is 'assessment year' still used under the new Act?",
      answer:
        "No. The 2025 Act uses a single 'tax year' in place of the previous year and assessment year. Tax year 2026-27 is the year from 1 April 2026 to 31 March 2027.",
    },
  ],
};

type Row = [string, string, string, string?, string?];

const GENERAL: Row[] = [
  ["Period of income", "Previous year and assessment year", "Tax year"],
  ["Tax audit", "Section 44AB", "Section 63", "/tax-audit-chennai", "Tax audit"],
  ["Concessional tax rate for companies", "Section 115BAA", "Section 200", "/direct-tax", "Tax consultant in Chennai"],
  ["Start-up tax holiday", "Section 80-IAC", "Section 140", "/startup-india-registration-chennai", "Startup India recognition"],
  ["Interest for late return and advance tax shortfalls", "Sections 234A to 234C", "Sections 423 to 425", "/blog/advance-tax-deadlines", "Advance tax deadlines"],
];

const CAPITAL_GAINS: Row[] = [
  ["Exemption on sale of a residential house", "Section 54", "Section 82", "/blog/capital-gains-tax-property-sale", "Capital gains on property"],
  ["Exemption by investing in specified bonds", "Section 54EC", "Section 85", "/blog/capital-gains-tax-property-sale", "Capital gains on property"],
  ["Exemption on sale of other long-term assets", "Section 54F", "Section 86", "/blog/capital-gains-tax-property-sale", "Capital gains on property"],
];

const TDS: Row[] = [
  ["TDS on payments to non-residents", "Section 195", "Section 393(2)", "/nri-property-sale-tds-chennai", "NRI property sale TDS"],
  ["Reporting foreign remittances", "Section 195(6)", "Section 397(3)(d)", "/form-15ca-15cb-chennai", "Form 15CA and 15CB"],
  ["Interest for TDS not deducted or not paid", "Section 201(1A)", "Section 398", "/tds-return-filing-chennai", "TDS return filing"],
  ["Late fee for TDS statements", "Section 234E", "Section 427", "/tds-return-filing-chennai", "TDS return filing"],
  ["Quarterly TDS statements", "Forms 24Q, 26Q and 27Q", "Forms 138, 140 and 144", "/tds-return-filing-chennai", "TDS return filing"],
  ["TDS on purchase of property from a resident", "Form 26QB", "Form 141", "/blog/tds-on-rent", "TDS on rent and property"],
  ["Remitter's declaration and CA certificate", "Form 15CA and Form 15CB", "Form 145 and Form 146", "/form-15ca-15cb-chennai", "Form 15CA and 15CB"],
  ["Treaty claim details with a tax residency certificate", "Form 10F", "Form 41", "/nri-tax-services", "NRI tax services"],
];

const NOTICES: Row[] = [
  ["Scrutiny notice", "Section 143(2)", "Section 270(8)", "/income-tax-notice-reply-chennai", "Income tax notice reply"],
  ["Reassessment show-cause notice", "Section 148A", "Section 281", "/income-tax-notice-reply-chennai", "Income tax notice reply"],
  ["Stay of demand", "Section 220(6)", "Section 411(12)", "/income-tax-assessment-appeals-chennai", "Assessment and appeals"],
  ["First appeal to the Commissioner (Appeals)", "Section 249(2), Form 35", "Section 358(3), Form 99", "/income-tax-assessment-appeals-chennai", "Assessment and appeals"],
];

const TP: Row[] = [
  ["Income computed at arm's length price", "Section 92", "Section 161", "/transfer-pricing-audit", "Transfer pricing"],
  ["Meaning of associated enterprise", "Section 92A", "Section 162", "/transfer-pricing-audit", "Transfer pricing"],
  ["Meaning of international transaction", "Section 92B", "Section 163", "/transfer-pricing-audit", "Transfer pricing"],
  ["Specified domestic transaction (₹20 crore)", "Section 92BA", "Section 164", "/transfer-pricing-audit", "Transfer pricing"],
  ["Methods for arm's length price", "Section 92C; Rules 10A–10CA", "Section 165; Rules 77–81", "/transfer-pricing-audit", "Transfer pricing"],
  ["Reference to the Transfer Pricing Officer", "Section 92CA", "Section 166", "/transfer-pricing-audit", "Transfer pricing"],
  ["Safe harbour", "Section 92CB; Rules 10TA–10TG", "Section 167; Rules 86–102", "/transfer-pricing-audit", "Transfer pricing"],
  ["Advance pricing agreement", "Sections 92CC and 92CD; Forms 3CEC, 3CED/3CEDA", "Sections 168 and 169; Forms 50, 51", "/transfer-pricing-audit", "Transfer pricing"],
  ["Secondary adjustment", "Section 92CE", "Section 170", "/transfer-pricing-audit", "Transfer pricing"],
  ["Documentation", "Section 92D; Rule 10D", "Section 171; Rule 84", "/transfer-pricing-audit", "Transfer pricing"],
  ["Accountant's report", "Section 92E; Rule 10E; Form 3CEB", "Section 172; Rule 85; Form 48", "/blog/form-3ceb-due-date-applicability", "Form 3CEB and Form 48"],
  ["Master file", "Rule 10DA; Form 3CEAA", "Rule 123; Form 56", "/transfer-pricing-audit", "Transfer pricing"],
  ["Country-by-country report", "Section 286; Form 3CEAD", "Section 511; Form 59", "/transfer-pricing-audit", "Transfer pricing"],
  ["Other CbCR forms", "Forms 3CEAB, 3CEAC, 3CEAE", "Forms 57, 58, 60", "/transfer-pricing-audit", "Transfer pricing"],
];

const PENALTIES: Row[] = [
  ["Accountant's report not furnished on time", "Penalty, Section 271BA", "Fee, Section 428(d)", "/blog/form-3ceb-due-date-applicability", "Form 3CEB and Form 48"],
  ["Transfer pricing documentation or reporting failures", "Section 271AA", "Section 442", "/transfer-pricing-audit", "Transfer pricing"],
  ["Documentation not produced on notice", "Section 271G", "Section 457", "/transfer-pricing-audit", "Transfer pricing"],
  ["Under-reporting and misreporting of income", "Section 270A", "Section 439", "/income-tax-notice-reply-chennai", "Income tax notice reply"],
  ["Country-by-country report not furnished", "Section 271GB", "Section 459", "/transfer-pricing-audit", "Transfer pricing"],
];

function MapTable({ rows }: { rows: Row[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Provision</th>
          <th>Income-tax Act, 1961</th>
          <th>Income-tax Act, 2025</th>
          <th>Explained on</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([topic, old, now, href, label]) => (
          <tr key={topic}>
            <td>{topic}</td>
            <td>{old}</td>
            <td>{now}</td>
            <td>{href ? <Link href={href}>{label}</Link> : "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Body() {
  return (
    <>
      <p>
        The tables below list the old and new numbers we use in our own work, grouped by topic. Each row links to the
        page where we explain that provision in practice. The new Act also brings new Income-tax Rules, 2026, so rule
        and form numbers change too.
      </p>

      <h2>Which general and business provisions were renumbered?</h2>
      <MapTable rows={GENERAL} />

      <h2>What are the new capital gains exemption sections?</h2>
      <MapTable rows={CAPITAL_GAINS} />

      <h2>What are the new TDS sections and forms?</h2>
      <MapTable rows={TDS} />

      <h2>Which sections now govern income tax notices and appeals?</h2>
      <MapTable rows={NOTICES} />

      <h2>What are the new transfer pricing sections, rules and forms?</h2>
      <MapTable rows={TP} />

      <h2>Which penalty sections changed?</h2>
      <MapTable rows={PENALTIES} />

      <h2>Which numbers apply to which year?</h2>
      <ul>
        <li><strong>FY 2025-26 (AY 2026-27) and earlier:</strong> the Income-tax Act, 1961 and its forms, even when the return, report or notice is filed after 1 April 2026.</li>
        <li><strong>Tax year 2026-27 (1 April 2026 to 31 March 2027) onwards:</strong> the Income-tax Act, 2025 and the Income-tax Rules, 2026.</li>
        <li><strong>Notices, assessments and appeals</strong> for earlier years continue under the 1961 Act&apos;s provisions.</li>
      </ul>
      <p>
        Read the new text before relying on a mapping for a deadline or a condition: some provisions were merged or
        reworded, not just renumbered. The Income Tax Department publishes the Act and rules on{" "}
        <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">incometax.gov.in</a>. For help
        applying either Act to your return, notice or transfer pricing report, see our{" "}
        <Link href="/direct-tax">tax consultants in Chennai</Link> page. Tax audit reports and transfer pricing reports in Form 48 under the new numbering are covered on our{" "}
        <Link href="/tax-audit-chennai">tax audit in Chennai</Link> and{" "}
        <Link href="/transfer-pricing-audit">transfer pricing audit</Link> pages.
      </p>
    </>
  );
}
