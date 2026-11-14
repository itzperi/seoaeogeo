import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "itc-mismatch-notices",
  title: "ITC Mismatch Notices: Why They Happen and How to Respond",
  description:
    "An ITC mismatch notice is one of the most common GST notices Chennai businesses receive, usually because GSTR-3B and a supplier's GSTR-1 don't match.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to...",

  summary:
    "An ITC mismatch notice usually arises because credit claimed in GSTR-3B is more than suppliers reported, as shown in your GSTR-2B. It may come as a DRC-01C intimation, an ASMT-10 scrutiny notice or a show cause notice. Compare GSTR-2B with your purchase register invoice by invoice, contact suppliers, keep written proof and reply within the time allowed.",
  faqs: [
    {
      question: "Why did I get an ITC mismatch notice?",
      answer:
        "Your input tax credit depends on your supplier filing correctly and on time. Under Section 16(2)(aa) of the CGST Act, credit is available only for invoices the supplier has reported. If a supplier delays GSTR-1, files wrong figures or stops filing, the credit will not appear in your GSTR-2B, and the system flags the gap.",
    },
    {
      question: "How should I respond to an ITC mismatch notice?",
      answer:
        "Do not immediately reverse the full amount. Pull GSTR-2B for the exact period and compare it invoice by invoice with your purchase register to find which invoices cause the gap. Where a supplier has filed late or wrongly, explain with the invoice, proof of payment and the supplier's correction. Genuine errors on your side need reversal with interest.",
    },
    {
      question: "What is a DRC-01C intimation and how long do I have?",
      answer:
        "Form DRC-01C is an automated intimation under Rule 88D when credit claimed in GSTR-3B exceeds the credit available in GSTR-2B beyond a set limit. Within seven days you must either pay the excess through Form DRC-03 or explain the difference in Part B. Ignoring it can restrict filing of your next GSTR-1.",
    },
    {
      question: "What are the most common causes of an ITC mismatch?",
      answer:
        "The supplier has not yet filed GSTR-1 for the period, filed the invoice under the wrong GSTIN, or entered the value or tax wrongly. You may also have claimed credit on an invoice later amended or cancelled, rejected the invoice on the Invoice Management System, or recorded the same invoice twice in your own books.",
    },
    {
      question: "What happens if I ignore an ITC mismatch notice?",
      answer:
        "An unanswered ITC mismatch notice typically escalates into a formal show cause notice with interest and penalty proposed, and potentially into GST litigation. Responding within the given window, even with a partial explanation and a plan for the remainder, is always better than silence.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        An ITC mismatch notice means the input tax credit you claimed in GSTR-3B is more than your suppliers reported, as shown in your GSTR-2B. It can arrive as a DRC-01C intimation, an ASMT-10 scrutiny notice or a show cause notice. Most are resolved by an invoice-level reconciliation, supplier follow-up and a documented reply on time.
      </p>

      <h2>Why does the mismatch happen in the first place?</h2>

      <p>
        Your credit depends on your supplier filing correctly and on time. Section 16(2)(aa) of the CGST Act allows credit only for invoices the supplier has reported in GSTR-1, and Section 16(2)(c) requires the supplier to have paid the tax. GSTR-2B is the monthly statement of what your suppliers reported (see the GST portal&apos;s <a href="https://www.gst.gov.in/help/returns" target="_blank" rel="noopener noreferrer">returns help</a>). If a supplier delays GSTR-1, files wrong figures or stops filing altogether, the credit will not appear in GSTR-2B and the system flags the gap. You may have done nothing wrong, but you are still the one who gets the notice.
      </p>

      <p>
        Since October 2024, the Invoice Management System also lets you accept, reject or keep pending each supplier invoice before GSTR-2B is finalised. An invoice rejected or left pending there does not flow into your credit for that month, which is another source of differences.
      </p>

      <h2>Which notice have you received?</h2>

      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Legal basis</th>
            <th>Time to respond</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DRC-01C</td>
            <td>Rule 88D</td>
            <td>7 days</td>
            <td>Automated intimation that GSTR-3B credit exceeds GSTR-2B. Pay through DRC-03 or explain in Part B.</td>
          </tr>
          <tr>
            <td>ASMT-10</td>
            <td>Section 61 scrutiny</td>
            <td>30 days, or as allowed, in ASMT-11</td>
            <td>An officer has found discrepancies in your returns and wants an explanation.</td>
          </tr>
          <tr>
            <td>DRC-01A</td>
            <td>Rule 142(1A)</td>
            <td>Date stated</td>
            <td>Intimation of an ascertained amount before a show cause notice.</td>
          </tr>
          <tr>
            <td>DRC-01 (show cause notice)</td>
            <td>Section 73 or 74 for FY 2023-24 and earlier; Section 74A from FY 2024-25</td>
            <td>Date stated</td>
            <td>Formal proceedings proposing tax, interest and penalty.</td>
          </tr>
        </tbody>
      </table>

      <p>
        Our guides to the{" "}
        <Link href="/blog/asmt-10-gst-scrutiny-notice-reply">ASMT-10 scrutiny notice</Link> and the{" "}
        <Link href="/blog/drc-01a-gst-intimation">DRC-01A intimation</Link> cover those stages in more depth.
      </p>

      <h2>What are the most common causes, in order of frequency?</h2>

      <ol>
        <li>The supplier has not filed GSTR-1 for the relevant period yet.</li>
        <li>The supplier filed the invoice under the wrong GSTIN.</li>
        <li>The invoice value or tax amount was entered incorrectly by the supplier.</li>
        <li>You claimed credit on an invoice that was later amended or cancelled.</li>
        <li>The invoice was rejected or left pending on the Invoice Management System.</li>
        <li>A genuine duplicate claim in your own books.</li>
      </ol>

      <p>
        A related trigger is Rule 37A: if a supplier reported the invoice but did not file GSTR-3B for that period by 30 September of the following year, the credit has to be reversed, and it can be claimed again once the supplier files.
      </p>

      <h2>How should you respond once you receive the notice?</h2>

      <ol>
        <li>Note the form, the period and the reply date. A DRC-01C gives only seven days.</li>
        <li>Download GSTR-2B for each month in question and your purchase register for the same period.</li>
        <li>Match invoice by invoice, and sort differences into supplier not filed, supplier error, timing difference and your own error.</li>
        <li>Gather the invoice, proof of payment through banking channels and the goods receipt or service evidence for each disputed invoice.</li>
        <li>Ask suppliers to file or correct their returns, and keep the correspondence.</li>
        <li>Reply with a reconciliation statement and documents, and pay only the part that is genuinely your error.</li>
      </ol>

      <p>
        Do not panic and do not immediately reverse the full amount. Reversing credit you are entitled to costs money and can look like an admission for the whole period.
      </p>

      <h2>When do you have to reverse credit and pay interest?</h2>

      <p>
        Credit must be reversed where the error is yours: duplicate claims, credit on items blocked by Section 17(5), invoices from suppliers who have cancelled registration without filing, or bills unpaid for more than 180 days. Credit wrongly taken and used carries interest at 18% a year under Section 50(3). Paying through Form DRC-03 before a show cause notice is issued generally limits the consequences, because in cases not involving fraud no penalty is levied when tax and interest are paid at that stage.
      </p>

      <h2>Why does talking to your supplier matter more than the notice itself?</h2>

      <p>
        The fastest fix is often a phone call. Ask the supplier to check their GSTR-1 filing status and correct it in their next return if there was an error. Keep that communication in writing, even a simple email, since it becomes useful evidence if the department asks for it later. For recurring suppliers, a monthly check of GSTR-2B before you file GSTR-3B stops most mismatches from building up in the first place.
      </p>

      <h2>What happens if you ignore it?</h2>

      <p>
        An unanswered ITC mismatch notice typically escalates into a formal show cause notice with interest and penalty proposed, and potentially into <Link href="/gst-litigation-chennai">GST litigation</Link>. Responding within the given window, even with a partial explanation and a plan for the remainder, is always better than silence. If a show cause notice has already arrived, our post on{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">the first 48 hours after a GST show cause notice</Link> sets out what to do first.
      </p>

      <p>
        If an ITC demand is confirmed, our free{" "}
        <Link href="/tools/gst-appeal-deadline-pre-deposit-calculator">GST appeal deadline and pre-deposit calculator</Link>{" "}
        shows the appeal deadline and the pre-deposit.
      </p>
      <p>
        If you have received a GST mismatch notice and are not sure how much of it is genuinely your liability versus a supplier filing delay, C S Rushil &amp; Co. reviews the reconciliation and drafts the <Link href="/gst-notice-reply-chennai">GST notice reply</Link> on your behalf. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link> before the reply deadline passes.
      </p>
    </>
  );
}
