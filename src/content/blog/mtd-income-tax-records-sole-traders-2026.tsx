import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "mtd-income-tax-records-sole-traders-2026",
  title: "MTD for Income Tax: What Records Sole Traders Need From 2026",
  description:
    "MTD for Income Tax starts 6 April 2026 above £50,000 of qualifying income. What digital records sole traders and landlords keep, and who sends the updates.",
  date: "2026-11-14",
  excerpt:
    "From 6 April 2026, sole traders and landlords over £50,000 of qualifying income keep digital records and send quarterly updates. What that means for your books.",
  summary:
    "From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must keep digital records in compatible software, send HMRC a quarterly update for each business and file a final declaration after the tax year. The threshold falls to £30,000 from April 2027 and £20,000 from April 2028. You or your agent submit.",
  faqs: [
    {
      question: "What counts as qualifying income for MTD for Income Tax?",
      answer:
        "Qualifying income is your gross income from self-employment plus your gross income from property, before any expenses are taken off. A sole trader with £30,000 of turnover who also receives £25,000 of rent has qualifying income of £55,000, which is above the £50,000 threshold that applies from 6 April 2026.",
    },
    {
      question: "Can an overseas bookkeeper send my MTD quarterly updates?",
      answer:
        "The quarterly updates and the final declaration are sent by you or by an agent you have authorised with HMRC, usually your UK accountant. A bookkeeper, wherever based, keeps the digital records and prepares the quarterly totals so the person submitting has reconciled figures to send.",
    },
    {
      question: "Does MTD for Income Tax replace my Self Assessment return?",
      answer:
        "For people in scope, the final declaration takes the place of the Self Assessment return. You still confirm your total income for the year and any other income, reliefs and allowances, but the business and property figures come from the digital records and quarterly updates you have already kept.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Making Tax Digital for Income Tax changes how UK sole traders and landlords keep their records and report to HMRC. According to HMRC&apos;s guidance on <a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" target="_blank" rel="noopener noreferrer">whether and when you need to use Making Tax Digital for Income Tax</a>, it applies from 6 April 2026 to people whose qualifying income is over £50,000, and the threshold then steps down in each of the next two years.
      </p>

      <p>
        This post explains who is in scope, what digital records mean in practice, what gets sent to HMRC, who sends it, and what a bookkeeper does to keep the records ready. It is general guidance; HMRC&apos;s own checker is the place to confirm your position.
      </p>

      <h2>Does MTD for Income Tax apply to you?</h2>

      <p>
        It depends on your qualifying income, which is gross self-employment income plus gross property income, before expenses. Profit does not matter for this test, so a landlord with modest profits but high rents can be in scope. The thresholds are:
      </p>

      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>Qualifying income above</th>
            <th>Who it catches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6 April 2026</td>
            <td>£50,000</td>
            <td>Larger sole traders and landlords</td>
          </tr>
          <tr>
            <td>April 2027</td>
            <td>£30,000</td>
            <td>Most established sole traders and many landlords</td>
          </tr>
          <tr>
            <td>April 2028</td>
            <td>£20,000</td>
            <td>Smaller sole traders and landlords</td>
          </tr>
        </tbody>
      </table>

      <p>
        HMRC works out whether you are in scope from the income on an earlier Self Assessment return, not from this year&apos;s figures, so check the GOV.UK guidance rather than estimating. Some people are exempt or can apply for an exemption, and the same page lists those cases. Limited companies are not part of MTD for Income Tax; their income is taxed through Corporation Tax.
      </p>

      <h2>What are digital records?</h2>

      <p>
        Digital records mean each business transaction is recorded in software that works with MTD, instead of in a paper book or a spreadsheet you retype at the year end. For every sale and expense, the record needs the date, the amount and the category it falls into. Software that connects to your bank feed does most of the capture; the work is in making sure each line is categorised correctly and that personal and business items are kept apart.
      </p>

      <p>
        If you run more than one business, such as a sole trade and a rental property, each one is recorded and reported separately. A joint property with a spouse or partner is reported on your share.
      </p>

      <h2>What do you send to HMRC, and when?</h2>

      <ul>
        <li><strong>Quarterly updates.</strong> Four times a year, a summary of income and expenses for each self-employment or property business, sent from your software. HMRC sets a deadline for each quarter.</li>
        <li><strong>The final declaration.</strong> After the tax year ends, you confirm your total taxable income, add any other income, reliefs and allowances, and make any year-end adjustments. This takes the place of the Self Assessment return for people in scope.</li>
      </ul>

      <p>
        Quarterly updates are summaries, not tax returns, so a figure can be corrected in a later update or at the final declaration. That makes the year-end less of a scramble, but only if the records behind each quarter are kept up to date.
      </p>

      <h2>Who submits the updates?</h2>

      <p>
        You do, or an agent you have authorised with HMRC, usually a UK accountant. A bookkeeper who is not your HMRC agent, whether in the UK or overseas, does not send anything to HMRC for you. The bookkeeper&apos;s job is to make sure the numbers in the software are complete and reconciled before the person submitting presses send.
      </p>

      <h2>What does a bookkeeper do for MTD for Income Tax?</h2>

      <ul>
        <li>Set up separate business and property records in your MTD software, with categories that match HMRC&apos;s.</li>
        <li>Connect bank feeds and categorise every transaction, keeping personal spending out of the business record.</li>
        <li>Reconcile each bank and card account at the end of every quarter.</li>
        <li>Prepare the quarter&apos;s income and expense totals for you or your agent to review and send.</li>
        <li>Keep receipts and invoices attached to the transactions they support.</li>
        <li>At the year end, list the adjustments your accountant needs for the final declaration, such as capital items and private-use costs.</li>
      </ul>

      <h2>What should you do before your start date?</h2>

      <p>
        Check your qualifying income with the GOV.UK guidance. Choose software that works with MTD for Income Tax and move this year&apos;s records into it early, so the first quarterly update is not built from a shoebox of receipts. Decide who will submit: you, or an accountant authorised as your agent. If someone else keeps the books, agree in writing who prepares the quarter&apos;s figures, who reviews them and who sends them, and by which date. Record-keeping rules still apply alongside MTD, so keep the supporting documents as well as the digital entries.
      </p>

      <p>
        How bookkeeping from India fits around a UK accountant who submits as your HMRC agent is set out on the <Link href="/outsourced-bookkeeping-uk">outsourced bookkeeping for UK businesses</Link> page. UK accounting practices that want a white-label team for client books can read about <Link href="/outsourced-accounting-for-uk-accountants">outsourced accounting for UK accountants</Link>.
      </p>
    </>
  );
}
