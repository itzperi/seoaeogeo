import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "cash-flow-not-profit-business-failure",
  title: "Businesses Fail From a Lack of Cash, Not a Lack of Profit",
  description:
    "A business that is profitable on paper can still run out of cash to pay its bills. Why the gap between profit and cash opens up, and the steps that close it.",
  date: "2026-09-26",
  updated: "2026-11-14",
  excerpt:
    "A business that is profitable on paper can still run out of cash to pay its bills. Why the gap between profit and cash opens up, and the steps that close it.",
  summary:
    "A profitable business can still run out of cash because profit is recorded when a sale is earned while cash arrives when the customer pays. Inventory, GST paid before customers pay, loan repayments and asset purchases also drain cash without touching profit. A rolling 13-week cash forecast, kept separate from profit, catches shortfalls early.",
  faqs: [
    {
      question: "Why can a profitable business run out of cash?",
      answer:
        "Profit is recorded when it is earned, but cash arrives when it is actually paid. A sale might not turn into cash for 60 or 90 days on credit terms, while rent, salaries and supplier payments fall due on their own schedule. Fast growth can make this worse, because receivables grow faster than the cash coming in.",
    },
    {
      question: "How does inventory affect cash but not profit?",
      answer:
        "Money spent on inventory sits on the balance sheet, not as an expense in the profit and loss statement, until the goods are sold. A business building stock ahead of a busy season can look profitable on paper while its cash quietly drains to pay for goods that have not yet generated any revenue.",
    },
    {
      question: "How can a business avoid a cash shortfall?",
      answer:
        "Forecast cash separately from profit. A rolling 13-week cash flow forecast tracks when money actually arrives and leaves, not just what is recorded as earned or spent. It catches a coming shortfall weeks early, leaving time to adjust payment terms, chase overdue receivables or arrange short-term financing before the situation becomes urgent.",
    },
    {
      question: "Does GST affect cash flow even if the customer has not paid?",
      answer:
        "Yes. GST on a supply is generally payable in the return for the period in which the invoice is issued, whether or not the customer has paid. On large credit sales, you may pay the tax to the government well before you collect it. Input tax credit on purchases helps, but only once the supplier has reported the invoice.",
    },
    {
      question: "What is the cash conversion cycle?",
      answer:
        "It is the number of days cash stays tied up in the business: debtor days plus inventory days, minus the days you take to pay suppliers. A business that collects in 75 days, holds stock for 30 and pays suppliers in 45 has 60 days of cash locked up, which must be funded from capital or borrowing.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A profitable business can run out of cash because profit is counted when a sale is earned, while cash arrives
        only when the customer pays. Stock purchases, GST paid on unpaid invoices, loan repayments and asset purchases
        also drain the bank balance without touching profit. Forecasting cash separately from profit is how you see the
        gap coming.
      </p>

      <p>
        A business can show a healthy <Link href="/bookkeeping-services-chennai">profit and loss statement in its books</Link>{" "}
        and still not have enough cash to pay its suppliers or payroll on time. This is not a contradiction. It is one of
        the most common reasons genuinely profitable businesses run into serious trouble, and it comes down to timing,
        not performance.
      </p>

      <div className="mx-auto max-w-xs">
        <div className="aspect-[9/16] overflow-hidden rounded-cards border border-ash">
          <iframe
            src="https://www.instagram.com/reel/DWEf3Nmk80W/embed"
            className="h-full w-full border-0"
            title="Most businesses don't fail because of lack of profit, they fail because of lack of cash"
          />
        </div>
      </div>

      <h2>Why is profit recorded before the cash arrives?</h2>

      <p>
        Under accrual accounting, a sale is recorded when it is earned, typically when the goods are delivered or the
        service is performed. A sale recorded today might not turn into cash for 60 or 90 days if the buyer pays on
        credit terms. Meanwhile, rent, salaries and supplier payments are due on their own schedule, regardless of when
        customers pay. A business growing quickly can show strong profit while its cash position gets tighter every
        month, purely because receivables are growing faster than the cash coming in.
      </p>

      <h2>Which items drain cash without showing up as a loss?</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Effect on profit</th>
            <th>Effect on cash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Credit sales not yet collected</td>
            <td>Counted as income</td>
            <td>No cash until the customer pays</td>
          </tr>
          <tr>
            <td>Stock bought but not yet sold</td>
            <td>No expense yet</td>
            <td>Cash already paid out</td>
          </tr>
          <tr>
            <td>GST on invoices raised</td>
            <td>Not income or expense</td>
            <td>Paid in the return, even if the customer has not paid</td>
          </tr>
          <tr>
            <td>Loan principal repayment</td>
            <td>Not an expense (only interest is)</td>
            <td>Full EMI leaves the bank</td>
          </tr>
          <tr>
            <td>Machinery or equipment purchase</td>
            <td>Spread over years as depreciation</td>
            <td>Paid upfront or in a few instalments</td>
          </tr>
          <tr>
            <td>Advance tax instalments</td>
            <td>Tax expense is booked at year end</td>
            <td>Paid in instalments during the year</td>
          </tr>
        </tbody>
      </table>

      <p>
        Each line is ordinary on its own. Together, in a growing business, they can absorb more than the year&apos;s
        entire profit. Advance tax is a good example: the instalments fall due during the year, as explained in our
        guide to <Link href="/blog/advance-tax-deadlines">advance tax deadlines</Link>, regardless of when customers pay.
      </p>

      <h2>How does inventory tie up cash the profit and loss does not show?</h2>

      <p>
        Money spent on inventory sits on the balance sheet, not as an expense in the profit and loss statement, until the
        goods are actually sold. A business building stock ahead of Deepavali, Pongal or a wedding season can look
        profitable on paper while its cash reserves quietly drain to pay for goods that have not generated revenue yet.
        Slow-moving stock is worse still, because the cash stays locked up long after the season has passed.
      </p>

      <h2>How do you measure the gap between profit and cash?</h2>

      <p>
        The simplest measure is the cash conversion cycle: debtor days plus inventory days, minus creditor days. If you
        collect from customers in 75 days, hold stock for 30 days and pay suppliers in 45 days, 60 days of your cash is
        locked up in operations at any time. That 60 days has to be funded from your own capital or from borrowing. When
        sales grow, the amount locked up grows with them, which is why fast growth so often brings a cash squeeze.
      </p>

      <p>
        Companies prepare a cash flow statement as part of their annual financial statements, except one person
        companies, small companies and dormant companies, which are exempt. But an annual statement looks backwards. To
        manage the business, you need a forward-looking forecast.
      </p>

      <h2>How do you build a rolling cash flow forecast?</h2>

      <ol>
        <li>Start with today&apos;s actual bank balance, not the book balance.</li>
        <li>List expected receipts week by week for the next 13 weeks, based on when each customer actually pays, not on the invoice due date.</li>
        <li>List fixed payments: salaries, rent, EMIs, GST, TDS, PF and ESI, and advance tax on their due dates.</li>
        <li>Add variable payments to suppliers, based on the terms you actually follow.</li>
        <li>Calculate the closing balance for each week and flag any week where it falls below a safe minimum.</li>
        <li>Update the forecast every week with actual figures and roll it forward by one week.</li>
      </ol>

      <h2>What can you do once you see a shortfall coming?</h2>

      <ul>
        <li>Chase overdue receivables first, starting with the largest and oldest balances.</li>
        <li>Review credit terms for new customers, or ask for part payment in advance on large orders.</li>
        <li>
          If you are a micro or small enterprise registered on Udyam, use the MSMED Act protection: buyers must
          generally pay within the agreed period, which cannot exceed 45 days. Our{" "}
          <Link href="/blog/msme-udyam-registration-checklist">Udyam registration checklist</Link> explains how to
          register.
        </li>
        <li>Slow down purchases of slow-moving stock and avoid building inventory without confirmed demand.</li>
        <li>
          Pay suppliers on time, but not early, and remember that GST input credit must be reversed if a supplier is not
          paid within 180 days of the invoice date (the rules and return formats are on the{" "}
          <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST portal</a>).
        </li>
        <li>Arrange working capital limits before you need them, since banks lend more readily against a forecast than a crisis.</li>
      </ul>

      <h2>Who should own the cash forecast?</h2>

      <p>
        In many owner-run businesses, nobody does. The accountant records what has happened and the owner keeps a rough
        figure in mind. A forecast works only when one person updates it weekly and reviews it with the owner. Our note
        on <Link href="/blog/what-virtual-cfo-reviews-monthly">what a virtual CFO reviews every month</Link> shows how
        cash fits into a wider monthly review.
      </p>

      <p>
        If your business is profitable on paper but cash feels perpetually tight, C S Rushil &amp; Co. can build a proper
        cash flow forecast through our <Link href="/virtual-cfo-services">virtual CFO services</Link> to show you exactly
        where the gap is coming from. Book a free 15-minute consultation.
      </p>
    </>
  );
}
