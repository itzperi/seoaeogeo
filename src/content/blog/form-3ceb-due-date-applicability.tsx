import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "form-3ceb-due-date-applicability",
  title: "Form 3CEB Due Date and Applicability: A Practical Guide",
  description:
    "Form 3CEB applies to any international transaction with an associated enterprise, regardless of value — here's who needs it and when it's due.",
  date: "2026-09-25",
  excerpt:
    "Form 3CEB applies to any international transaction with an associated enterprise, regardless of value. Here's who needs it and when it's due.",
  summary:
    "Form 3CEB is the transfer pricing report a Chartered Accountant certifies. It applies to any international transaction with an associated enterprise regardless of value, and to specified domestic related-party transactions above the prescribed threshold. It is due by 31 October after the financial year, before the income tax return.",
  faqs: [
    {
      question: "Who needs to file Form 3CEB?",
      answer:
        "Two categories trigger it. First, any international transaction with an associated enterprise, such as a foreign parent, subsidiary or group company, regardless of value. Second, specified domestic transactions between related Indian entities, but only once the aggregate value crosses the prescribed threshold. It commonly applies to Indian subsidiaries paying management fees or royalties to a foreign parent.",
    },
    {
      question: "What is the due date for Form 3CEB?",
      answer:
        "Form 3CEB must be filed by 31 October following the end of the relevant financial year, one month before the 30 November income tax return due date for taxpayers required to furnish a transfer pricing report. It is filed on the e-filing portal and must be filed before the income tax return, since the ITR utility checks for it.",
    },
    {
      question: "What counts as an associated enterprise?",
      answer:
        "The definition is statutory, not a general sense of a related company. It includes a parent-subsidiary relationship, entities under common control or common shareholding above prescribed thresholds, and entities where one has effective management or capital control over the other. A shared director or long-standing vendor does not automatically qualify.",
    },
    {
      question: "What happens if Form 3CEB is not filed?",
      answer:
        "Failing to file when required, or filing with inadequate documentation, exposes a company to penalties under the Income Tax Act. More significantly, the tax authority may adjust reported income at assessment if it is not satisfied the pricing was at arm's length. If the other country gives no corresponding adjustment, the same income can be taxed twice.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Form 3CEB is the <Link href="/transfer-pricing-audit">transfer pricing audit</Link> report a Chartered Accountant must certify for businesses with related-party transactions, and one of the most common mistakes founders make is assuming it only applies once a company reaches a certain size. It doesn&apos;t — for international transactions with an associated enterprise, there is no minimum value threshold at all.
      </p>

      <h2>Who actually needs to file Form 3CEB</h2>

      <p>
        Two categories trigger the requirement. First, any international transaction with an associated enterprise — a foreign parent, subsidiary, or group company — regardless of the transaction&apos;s value. This most commonly applies to Indian subsidiaries of foreign companies paying management fees, royalties, or intercompany service charges to their parent. Second, specified domestic transactions between related Indian entities, but only once the aggregate value crosses the prescribed threshold under the Income Tax Act — this is where the domestic and international rules genuinely differ.
      </p>

      <h2>When Form 3CEB is due</h2>

      <p>
        Form 3CEB must be filed by 31st October following the end of the relevant financial year — one month before the 30th November income tax return due date that applies to taxpayers required to furnish a transfer pricing report. The form itself is filed on the e-filing portal (see the <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/income-tax-forms" target="_blank" rel="noopener noreferrer">income tax statutory forms help</a>). The report has to be filed before the income tax return itself, since the ITR filing utility checks for it.
      </p>

      <h2>What counts as an &quot;associated enterprise&quot;</h2>

      <p>
        The definition is specific, not a general sense of &quot;related company.&quot; It includes a parent-subsidiary relationship, entities under common control or common shareholding above prescribed thresholds, and entities where one has effective management or capital control over the other. A lot of genuine confusion here comes from assuming informal business relationships — a shared director, a long-standing vendor — count as associated enterprises when they don&apos;t meet the statutory definition, or conversely missing a relationship that does qualify because it doesn&apos;t look like the textbook parent-subsidiary case.
      </p>

      <h2>The cost of getting this wrong</h2>

      <p>
        Failing to file Form 3CEB when required, or filing it with inadequate documentation, exposes a company to penalties under the Income Tax Act and, more significantly, to the tax authority making its own adjustment to reported income during <Link href="/income-tax-assessment-appeals-chennai">income tax assessment</Link> if it isn&apos;t satisfied the pricing was at arm&apos;s length. If the other jurisdiction doesn&apos;t grant a corresponding adjustment, this can mean the same income gets taxed twice — once in each country.
      </p>

      <h2>A practical starting checklist</h2>

      <ul>
        <li>List every transaction with a foreign parent, subsidiary, or group company from the financial year</li>
        <li>Confirm which of those transactions involve an associated enterprise as statutorily defined</li>
        <li>For domestic related-party transactions, check the aggregate value against the specified domestic transaction threshold</li>
        <li>Select and document the appropriate pricing method (CUP, RPM, CPM, TNMM, or PSM) for each transaction type</li>
        <li>File Form 3CEB by 31st October, ahead of the income tax return</li>
      </ul>

      <p>
        This is a genuinely common blind spot for Indian subsidiaries in their first year or two of operation, since the trigger is the existence of the transaction, not the company&apos;s revenue scale. C S Rushil &amp; Co. handles Form 3CEB certification and transfer pricing documentation for businesses across Chennai with cross-border or related-party transactions. Reach out for a consultation.
      </p>
    </>
  );
}
