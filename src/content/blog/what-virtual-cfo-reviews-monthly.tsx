import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "what-virtual-cfo-reviews-monthly",
  title: "What a Virtual CFO Actually Reviews Every Month: A Checklist",
  description:
    "Business owners considering Virtual CFO support often aren't sure what it actually involves month to month. Here's what a genuine monthly review covers.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Business owners considering virtual CFO support often aren't sure what the service actually involves month to month, beyond a vague sense...",
  summary:
    "A monthly virtual CFO review checks that the books are closed and reconciled, then covers profit and loss trends against prior months and last year, cash position with a short-term forecast, receivables and payables ageing, margins and unit economics, budget against actual, and whether GST, TDS, PF and ESI were filed and paid on time.",
  faqs: [
    {
      question: "What does a virtual CFO review every month?",
      answer:
        "A monthly review typically covers profit and loss trends against prior months and the same period last year, cash position and a forward-looking forecast, receivables and payables ageing, gross and operating margins, unit economics, budget against actual results, and a check that statutory dues such as GST, TDS, PF and ESI were filed and paid on time.",
    },
    {
      question: "Why does a virtual CFO look at trends and not just the current month?",
      answer:
        "A single bad month can be noise, while a trend across three months usually is not. Reviewing the profit and loss against prior months and the same period last year shows real movement in revenue, cost of goods and operating expenses, rather than treating each month as an isolated snapshot that is easy to explain away.",
    },
    {
      question: "Why review receivables and payables ageing?",
      answer:
        "Reviewing how much is owed to you, for how long, against how much you owe suppliers and when it is due, catches collection problems early and lets you plan payment timing without damaging supplier relationships. It also confirms that the cash the business generates is consistent with the profit it reports, which is where many problems first show.",
    },
    {
      question: "What does the monthly MIS pack contain?",
      answer:
        "Usually a one-page summary of key numbers, the profit and loss with comparisons, a balance sheet, a cash flow summary and 13-week forecast, receivables and payables ageing, a budget variance table and a short commentary on what changed and what needs a decision. The commentary matters most, because numbers without interpretation rarely change behaviour.",
    },
    {
      question: "When in the month should the review happen?",
      answer:
        "Soon after the books are closed, ideally within the first two weeks of the following month. Statutory deadlines help set the rhythm: TDS is deposited by the 7th, monthly GSTR-1 is due by the 11th, GSTR-3B by the 20th, and PF and ESI by the 15th, so a reconciled close naturally follows those filings.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Every month, a virtual CFO checks that the books are closed and reconciled, then reviews profit and loss trends,
        cash position and a short-term forecast, receivables and payables ageing, margins and unit economics, budget
        against actual, and statutory compliance. The aim is to spot problems while they are still small and decide what
        to change.
      </p>

      <p>
        Business owners considering virtual CFO support often are not sure what the service actually involves month to
        month, beyond a vague sense that it is more strategic than{" "}
        <Link href="/bookkeeping-services-chennai">bookkeeping</Link>. Here is what a genuine monthly review typically
        covers, in the order it usually happens.
      </p>

      <h2>What has to happen before the review can start?</h2>

      <p>
        A review is only as good as the numbers underneath it. Before any analysis, the month&apos;s books need a proper
        close:
      </p>

      <ol>
        <li>All sales invoices, purchase bills and expenses for the month are recorded.</li>
        <li>Every bank account and credit card is reconciled to the statement.</li>
        <li>GST output and input are reconciled with GSTR-1 and GSTR-2B.</li>
        <li>Salaries, TDS, PF and ESI are booked and agreed to the payroll register.</li>
        <li>Accruals and prepayments are posted, so expenses fall in the right month.</li>
        <li>Depreciation is posted and stock is updated, where relevant.</li>
      </ol>

      <h2>Why look at profit and loss trends, not just the current month?</h2>

      <p>
        A virtual CFO looks at your profit and loss statement in the context of prior months and the same period last
        year, watching for trends in revenue, cost of goods and operating expenses rather than treating each month as an
        isolated snapshot. A single bad month can be noise; a trend across three months usually is not. Seasonal
        businesses in Chennai, such as textile and jewellery retail around festival months, need the same-month-last-year
        comparison most of all.
      </p>

      <h2>How are cash and the short-term forecast reviewed?</h2>

      <p>
        Beyond the profit and loss, the actual cash position and a rolling forecast for the next 13 weeks are reviewed
        every month. The question is whether the business is generating cash consistent with its reported profit, since
        profitable businesses can still run into cash trouble when receivables or inventory are tying up money. Our
        article on why <Link href="/blog/cash-flow-not-profit-business-failure">businesses fail from a lack of cash, not profit</Link>{" "}
        explains the mechanics.
      </p>

      <h2>Why review receivables and payables ageing?</h2>

      <p>
        How much money is owed to you, and for how long, against how much you owe suppliers and when it is due, is
        reviewed to catch collection problems early and to manage payment timing in a way that protects cash without
        damaging supplier relationships. Balances moving from the 30 to 60 day bucket into 60 to 90 days are the early
        warning, and the review ends with named actions on specific customers.
      </p>

      <h2>Which ratios and unit economics are tracked?</h2>

      <p>
        Gross margin, operating margin and, for businesses with clear per-unit or per-client economics, the revenue and
        cost per unit are tracked every month to catch margin erosion before it becomes serious. A slowly shrinking margin
        is much easier to notice and fix in month two than in month eight.
      </p>

      <h2>What does a monthly review cover at a glance?</h2>

      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Typical measures</th>
            <th>Question it answers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Profit and loss</td>
            <td>Revenue, gross margin, operating expenses against last month and last year</td>
            <td>Is performance improving or slipping?</td>
          </tr>
          <tr>
            <td>Cash</td>
            <td>Closing bank balance, 13-week forecast, lowest projected balance</td>
            <td>Will we have enough cash in the coming weeks?</td>
          </tr>
          <tr>
            <td>Working capital</td>
            <td>Debtor days, creditor days, stock days</td>
            <td>Where is cash getting stuck?</td>
          </tr>
          <tr>
            <td>Unit economics</td>
            <td>Revenue and cost per unit, client or order</td>
            <td>Is each sale still worth making?</td>
          </tr>
          <tr>
            <td>Budget</td>
            <td>Actual against budget, with variances explained</td>
            <td>What needs to change in the plan?</td>
          </tr>
          <tr>
            <td>Compliance</td>
            <td>GST, TDS, PF, ESI filings and payments</td>
            <td>Are any penalties or interest building up?</td>
          </tr>
        </tbody>
      </table>

      <h2>How is budget against actual used to correct course?</h2>

      <p>
        If a budget or financial plan exists, actual performance is compared with it every month, with a conversation
        about what is driving any significant variance and what, if anything, needs to change. The point is a decision,
        not a note. If marketing spend is running ahead of plan without a matching rise in enquiries, the review should
        end with a revised spend figure for next month.
      </p>

      <h2>Why is a compliance check part of a CFO review?</h2>

      <p>
        Late filing fees and interest are a direct leak from profit, and they are entirely avoidable. The monthly review
        confirms that TDS was deposited by the 7th, monthly GSTR-1 and GSTR-3B were filed by the 11th and 20th (on the{" "}
        <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST portal</a>), and PF and ESI were
        paid by the 15th. It also looks ahead at quarterly items, such as TDS returns and the advance tax instalments
        covered in our <Link href="/blog/advance-tax-deadlines">advance tax deadlines</Link> guide.
      </p>

      <h2>What does this look like in practice?</h2>

      <ul>
        <li>A closed and reconciled set of books by an agreed working day each month</li>
        <li>An MIS pack with a one-page summary, trend comparisons and a cash forecast</li>
        <li>Receivables and payables ageing reviewed with named follow-up actions</li>
        <li>Margins and unit economics tracked against prior periods</li>
        <li>Budget against actual with a decision on what to adjust</li>
        <li>A compliance check for the month and a look ahead at the next quarter</li>
      </ul>

      <p>
        For startups, the same rhythm adds runway and fundraising readiness, as described in our note on{" "}
        <Link href="/blog/virtual-cfo-omr-startups">virtual CFO support for OMR startups</Link>. If you want this kind
        of monthly financial oversight for your Chennai business without hiring a full-time CFO, C S Rushil &amp; Co.
        provides <Link href="/virtual-cfo-services">virtual CFO services</Link> structured around exactly this rhythm.
        Book a free 15-minute consultation to see how it would work for you.
      </p>
    </>
  );
}
