import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Schedule (15/45/75/100% on 15 Jun/Sep/Dec/Mar) and the ₹10,000 threshold
// are unchanged for tax year 2026-27 under the Income-tax Act, 2025.
// Interest sections: 234A-234C (1961 Act) = 423-425 (2025 Act), as stated
// on /direct-tax. Instalment-section numbers of the 2025 Act are deliberately
// not cited until checked against the official text.
export const meta: BlogPostMeta = {
  slug: "advance-tax-deadlines",
  title: "Advance Tax Due Dates 2026-27: Instalments and Interest",
  description:
    "Advance tax for tax year 2026-27 is due 15 June, 15 September, 15 December and 15 March: 15%, 45%, 75% and 100%. Who must pay and how the interest works.",
  date: "2026-09-19",
  updated: "2026-11-13",
  excerpt:
    "Advance tax for tax year 2026-27 is paid in four instalments: 15%, 45%, 75% and 100% by 15 June, 15 September, 15 December and 15 March. Who must pay, and how interest is avoided.",
  summary:
    "Advance tax is paid during the year by anyone whose tax after TDS is ₹10,000 or more. For tax year 2026-27 the cumulative instalments are 15% by 15 June 2026, 45% by 15 September, 75% by 15 December 2026 and 100% by 15 March 2027. Shortfalls carry interest of 1% a month.",
  faqs: [
    {
      question: "What are the advance tax due dates for 2026-27?",
      answer:
        "15 June 2026 (15% of the year's estimated tax), 15 September 2026 (45% cumulative), 15 December 2026 (75%) and 15 March 2027 (100%). The schedule is the same under the Income-tax Act, 2025 as it was under the 1961 Act; only the section numbers changed.",
    },
    {
      question: "Who has to pay advance tax?",
      answer:
        "Anyone whose tax for the year, after TDS and TCS, is expected to be ₹10,000 or more: business owners, professionals and freelancers, and salaried people with rent, interest, capital gains or freelance income. A resident senior citizen with no business or professional income has not had to pay advance tax.",
    },
    {
      question: "What interest applies if advance tax is short or late?",
      answer:
        "Simple interest of 1% a month. Under the 1961 Act, Section 234C applies to each instalment paid short and Section 234B where less than 90% of the year's tax is paid by 31 March. Under the 2025 Act these charges sit in Sections 424 and 425.",
    },
    {
      question: "Do presumptive-tax businesses pay in four instalments?",
      answer:
        "No. Businesses and professionals using presumptive taxation (Sections 44AD and 44ADA of the 1961 Act) may pay the whole advance tax in one instalment by 15 March. Paying earlier is allowed and avoids a large single payment at year-end.",
    },
    {
      question: "How is advance tax paid?",
      answer:
        "Online through e-Pay Tax on the income tax e-filing portal, choosing the assessment or tax year and the payment type \"Advance tax\". Keep the challan identification number; it is entered in the return so the payment is credited against your tax.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <h2>What are the advance tax instalment dates?</h2>
      <p>
        Advance tax is paid in four cumulative instalments. Each date is a running total: by 15 September you should
        have paid 45% of the year&apos;s estimated tax in all, not 45% on top of June&apos;s payment.
      </p>
      <table>
        <thead>
          <tr>
            <th>Due date</th>
            <th>Cumulative share of estimated tax</th>
            <th>Tax year 2026-27 (Income-tax Act, 2025)</th>
            <th>FY 2025-26 (Income-tax Act, 1961)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 June</td>
            <td>15%</td>
            <td>15 June 2026</td>
            <td>15 June 2025</td>
          </tr>
          <tr>
            <td>15 September</td>
            <td>45%</td>
            <td>15 September 2026</td>
            <td>15 September 2025</td>
          </tr>
          <tr>
            <td>15 December</td>
            <td>75%</td>
            <td>15 December 2026</td>
            <td>15 December 2025</td>
          </tr>
          <tr>
            <td>15 March</td>
            <td>100%</td>
            <td>15 March 2027</td>
            <td>15 March 2026</td>
          </tr>
        </tbody>
      </table>
      <p>
        The first instalment under the Income-tax Act, 2025 fell due on 15 June 2026. Payments for FY 2025-26, including
        the 15 March 2026 instalment, belong to the 1961 Act. If a due date falls on a holiday, check the portal and any
        CBDT notice for that year. The Income Tax Department&apos;s{" "}
        <a href="https://www.incometaxindia.gov.in/documents/d/guest/faq-on-advance-tax" target="_blank" rel="noopener noreferrer">FAQ on advance tax</a>{" "}
        sets out the basics.
      </p>

      <h2>Who has to pay advance tax?</h2>
      <p>
        The test is the tax you expect to owe for the year after deducting TDS and TCS. If it is ₹10,000 or more, advance
        tax applies. That catches more people than many expect:
      </p>
      <ul>
        <li><strong>Business owners and traders</strong>, since nobody deducts tax from their profits.</li>
        <li><strong>Professionals and freelancers</strong> whose clients deduct TDS at a lower rate than their actual tax.</li>
        <li><strong>Salaried people with other income</strong>: rent, fixed deposit interest, dividends, or capital gains on shares or property.</li>
        <li><strong>NRIs with Indian income</strong> where TDS does not cover the full tax, for example on rent or interest taxed at slab rates.</li>
      </ul>
      <p>
        A resident senior citizen (60 or over) who has no business or professional income has not had to pay advance
        tax; their tax is settled as self-assessment tax before filing the return.
      </p>

      <h2>How does advance tax work for presumptive taxation?</h2>
      <p>
        Small businesses and professionals using presumptive taxation (Sections 44AD and 44ADA of the 1961 Act) may pay
        their entire advance tax in a single instalment by 15 March. It is often simpler, and easier on cash, to pay in
        two or three parts during the year anyway.
      </p>

      <h2>How is interest on advance tax calculated?</h2>
      <p>
        Interest is simple interest at 1% a month, under three heads:
      </p>
      <table>
        <thead>
          <tr>
            <th>Interest for</th>
            <th>Income-tax Act, 1961</th>
            <th>Income-tax Act, 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filing the return after the due date</td>
            <td>Section 234A</td>
            <td>Section 423</td>
          </tr>
          <tr>
            <td>Paying less than 90% of the year&apos;s tax as advance tax</td>
            <td>Section 234B</td>
            <td>Section 424</td>
          </tr>
          <tr>
            <td>Paying an instalment short or late</td>
            <td>Section 234C</td>
            <td>Section 425</td>
          </tr>
        </tbody>
      </table>
      <p>
        Under the 1961 Act, instalment interest runs for three months on each of the first three shortfalls and one month
        on the last. Tax on capital gains or dividends that arise after an instalment date does not attract instalment
        interest if it is paid in the remaining instalments, so a property sold in January only needs to be covered by
        15 March. Check the 2025 Act&apos;s text for the equivalent relief before relying on it for tax year 2026-27. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">table of old and new section numbers</Link> has the other
        renumbered provisions.
      </p>

      <h2>How do you estimate advance tax?</h2>
      <ol>
        <li>Estimate the year&apos;s income under each head: salary, business or profession, house property, capital gains and other sources.</li>
        <li>Work out the tax under the regime you will use, including surcharge and cess.</li>
        <li>Subtract TDS and TCS you expect to be credited in Form 26AS and the AIS.</li>
        <li>If the balance is ₹10,000 or more, pay the cumulative share due by the next instalment date.</li>
        <li>Repeat before each date using actual figures to date. A one-off gain, such as a property or share sale, should be added to the next instalment after it happens.</li>
      </ol>

      <h2>How do you pay advance tax online?</h2>
      <p>
        Use e-Pay Tax on the <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">income tax e-filing portal</a>,
        log in with your PAN, choose the year and the payment type &quot;Advance tax&quot;, and pay by net banking, debit
        card, UPI or at the bank. Save the challan; its identification number (BSR code, date and serial number) is
        entered in the return so the payment is set against your tax. Check that it appears in Form 26AS within a few
        days.
      </p>

      <h2>What if you missed an advance tax instalment?</h2>
      <p>
        Pay the shortfall as soon as possible with the next instalment, or as advance tax before 31 March. Interest for
        the delay is charged when the return is filed, and the return form computes it. Anything still unpaid after 31
        March is paid as self-assessment tax, with interest, before filing.
      </p>
      <p>
        For business owners, the most reliable habit is to re-estimate income from actual sales before each date rather
        than paying the same amount every quarter. Seasonal businesses, such as traders with a strong festive quarter, are
        most at risk of a June or September shortfall. Our{" "}
        <Link href="/direct-tax">tax consultants in Chennai</Link> work out each instalment with clients, and the return
        itself is covered under <Link href="/income-tax-return-filing-chennai">income tax return filing</Link>. If a large
        capital gain is coming, read{" "}
        <Link href="/blog/capital-gains-tax-property-sale">capital gains tax on selling property</Link> first.
      </p>
    </>
  );
}
