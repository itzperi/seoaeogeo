import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "audit-applicability-thresholds",
  title: "Audit Applicability Thresholds for Chennai Businesses",
  description:
    "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes mandatory.",
  date: "2026-09-19",
  excerpt:
    "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes...",
  summary:
    "Which audit applies depends on the law. Tax audit under the Income Tax Act turns on turnover or professional receipts, with a higher limit if cash transactions stay low. Statutory audit applies to every private limited company and to LLPs above their threshold. GST reconciliation is filed with the annual return above a turnover threshold.",
  faqs: [
    {
      question: "When is a tax audit mandatory for a business?",
      answer:
        "Under the Income Tax Act, a business exceeding the specified turnover threshold in a financial year needs a tax audit, reported in Form 3CA/3CB and 3CD. A higher threshold is available if cash transactions are kept within a specified limit. Professionals face a separate, generally lower threshold based on gross receipts rather than turnover.",
    },
    {
      question: "Does a private limited company need an audit if it made no sales?",
      answer:
        "Yes. Every registered private limited company needs a statutory audit regardless of profitability or activity level. A company that made no sales during the year still needs one because it is registered as a company, which often surprises founders of dormant or early stage entities. LLPs need it above the specified contribution or turnover threshold.",
    },
    {
      question: "Can a business cross an audit threshold without noticing?",
      answer:
        "Yes. Turnover thresholds are assessed on the full financial year, so a business that grows rapidly partway through can cross one without the owner realising until the accountant flags it at year end, leaving less time to prepare. Tracking turnover on a running basis through the year helps you spot it early.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes mandatory. The answer depends on which type of audit you&apos;re asking about, since each has its own threshold under a different law.
      </p>

      <h2>Tax audit turnover thresholds</h2>

      <p>
        Under the Income Tax Act, a business exceeding the specified turnover threshold in a financial year is required to get a <Link href="/tax-audit-chennai">tax audit</Link> done (reported in <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/videos/tax-audit-report-form-3ca-3cd" target="_blank" rel="noopener noreferrer">Form 3CA/3CB and 3CD</a>), with a higher threshold available if cash transactions are kept within a specified limit, effectively rewarding businesses that transact mostly digitally. Professionals face a separate, generally lower threshold based on gross receipts rather than turnover.
      </p>

      <h2>Statutory audit under company law</h2>

      <p>
        Every registered private limited company and every LLP above the specified contribution or turnover threshold requires <Link href="/statutory-audit-chennai">statutory audit</Link> regardless of profitability or activity level. A company that made no sales during the year still needs statutory audit if it is registered as a company, which surprises founders of dormant or early stage entities.
      </p>

      <h2>GST audit and reconciliation requirements</h2>

      <p>
        Beyond income tax and company law audits, GST law requires certain reconciliation filings once turnover crosses a specified threshold, historically bundled with a formal GST audit requirement and now largely folded into self certified reconciliation statements filed alongside the <Link href="/gst-return-filing-chennai">GST annual return</Link> (see the <a href="https://tutorial.gst.gov.in/userguide/returns/FAQs_gstr9.htm" target="_blank" rel="noopener noreferrer">GSTR-9 FAQs on the GST portal</a>).
      </p>

      <h2>Why crossing a threshold mid year catches people off guard</h2>

      <p>
        Turnover thresholds are assessed based on the full financial year, so a business that grows rapidly partway through the year can cross an audit threshold without the owner realizing it until the accountant flags it at year end, by which point there is less time to prepare properly for the audit.
      </p>

      <h2>A practical way to monitor this</h2>

      <ul>
        <li>Track turnover or gross receipts on a running basis through the year, not just at year end</li>
        <li>Know the current tax audit threshold and the reduced cash transaction threshold that applies</li>
        <li>Confirm your entity type&apos;s statutory audit obligation regardless of turnover</li>
        <li>Flag internally the moment you&apos;re approaching any threshold, not after you&apos;ve crossed it</li>
      </ul>

      <p>
        If you want to know exactly where your Chennai business stands against these thresholds for the current financial year, C S Rushil &amp; Co. can review your numbers and tell you plainly what applies. Reach out for a consultation.
      </p>
    </>
  );
}
