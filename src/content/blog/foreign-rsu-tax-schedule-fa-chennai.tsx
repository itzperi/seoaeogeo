import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "foreign-rsu-tax-schedule-fa-chennai",
  title: "Foreign RSU and ESPP Tax and Schedule FA for Chennai Staff",
  description:
    "How RSUs and ESPP shares from a foreign parent are taxed for Chennai employees: perquisite at vest, capital gains on sale, foreign tax credit and Schedule FA.",
  date: "2026-10-12",
  excerpt:
    "RSUs and ESPP shares from a US or other foreign parent are taxed at vest and again on sale, and must be reported in Schedule FA every year. A walk-through for Chennai employees.",
  faqs: [
    {
      question: "Are RSUs taxed when they are granted?",
      answer:
        "No. Nothing is taxable at grant. Tax arises when the shares vest and are released to you: the market value on that date is a salary perquisite taxed at your slab rate, and your Indian employer normally deducts TDS on it through payroll. A later sale gives a separate capital gain or loss.",
    },
    {
      question: "What is the cost of my RSU shares when I sell them?",
      answer:
        "The cost is the fair market value that was taxed as a perquisite at vesting, not zero. Using zero as the cost is the most common error in self-filed returns and doubles the tax on the same value. Match each lot to the vest-date value shown in your payslip or Form 16.",
    },
    {
      question: "Do I have to report RSUs in Schedule FA if I sold nothing?",
      answer:
        "Yes. A resident and ordinarily resident individual must report foreign shares held at any time during the calendar year, even if nothing was sold and no dividend was paid. The schedule asks for the initial value, peak value, closing value and any income or sale proceeds, converted to rupees.",
    },
    {
      question: "What penalty applies if I miss a foreign asset in Schedule FA?",
      answer:
        "The Black Money Act provides a ₹10 lakh penalty for failing to disclose a foreign asset in the return. Since 1 October 2024 this does not apply where the aggregate value of foreign assets other than immovable property is ₹20 lakh or less. Above that, correct omissions promptly through a revised or updated return.",
    },
    {
      question: "Can I claim credit for US tax withheld on my RSU dividends?",
      answer:
        "Usually yes. A resident can claim foreign tax credit for tax withheld abroad, limited to the Indian tax on that income. The claim needs a statement in the prescribed form filed on or before the return due date, supported by the broker's tax statement showing the withholding.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Many Chennai technology and finance employees, from OMR and Guindy to
        DLF Porur, receive restricted stock units (RSUs) or employee stock
        purchase plan (ESPP) shares from a parent company listed in the US or
        elsewhere. These are taxed at two points in India, must be reported
        every year as foreign assets, and are the single most common source of
        mismatches we see in salaried returns. This guide is for residents of
        Tamil Nadu holding shares through platforms such as E*TRADE, Fidelity or
        Schwab.
      </p>

      <h2>How are RSUs from a foreign parent taxed for a Chennai employee?</h2>
      <p>
        <strong>Direct answer:</strong> RSUs are taxed twice. When they vest,
        the market value of the shares released is a salary perquisite taxed at
        your slab rate, with TDS through your Indian payroll. When you later
        sell, the difference between the sale price and that vest-date value is
        a capital gain: long-term at 12.5% after 24 months, otherwise at slab
        rates.
      </p>
      <p>
        The foreign parent&apos;s shares are not listed in India, so the 12-month
        holding period and ₹1.25 lakh exemption for listed Indian equity do not
        apply. Each vesting tranche is a separate lot with its own date and
        cost. Values are converted to rupees at the State Bank of India
        telegraphic transfer buying rate on the dates the rules specify, which
        is why your payroll figure and your broker&apos;s dollar figure never match
        exactly.
      </p>

      <h2>What is taxed at each stage?</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Indian tax treatment</th>
            <th>Where it shows up</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RSU grant</td>
            <td>Not taxable</td>
            <td>Keep the grant agreement and plan document</td>
          </tr>
          <tr>
            <td>RSU vest and release</td>
            <td>Market value on vest date is a perquisite, taxed at slab rates</td>
            <td>Payslip, Form 16; TDS by the Indian employer</td>
          </tr>
          <tr>
            <td>Shares withheld or sold to cover tax</td>
            <td>Sale on or near vest date: small short-term gain or loss, still reportable</td>
            <td>Broker&apos;s supplemental or sale confirmation</td>
          </tr>
          <tr>
            <td>ESPP purchase</td>
            <td>Discount (market value less price paid) is a perquisite</td>
            <td>Payslip; purchase confirmation</td>
          </tr>
          <tr>
            <td>Dividend on foreign shares</td>
            <td>Taxed at slab rates; foreign tax withheld may be credited</td>
            <td>Broker&apos;s annual tax statement; foreign source income schedule</td>
          </tr>
          <tr>
            <td>Sale after 24 months</td>
            <td>Long-term gain at 12.5% (no indexation), plus surcharge and cess</td>
            <td>Capital gains schedule</td>
          </tr>
          <tr>
            <td>Sale within 24 months</td>
            <td>Short-term gain at slab rates</td>
            <td>Capital gains schedule</td>
          </tr>
          <tr>
            <td>Holding any shares or cash at the broker during the calendar year</td>
            <td>No tax, but disclosure required</td>
            <td>Schedule FA</td>
          </tr>
        </tbody>
      </table>

      <h2>How do you avoid double tax on the sale?</h2>
      <p>
        The cost of each lot for capital gains is the value that was already
        taxed as salary at vesting. If you use the broker&apos;s cost basis, check
        it: some platforms show zero or the grant price for RSUs, and others
        report a dollar cost that you still need to convert at the right rate.
        For ESPP shares, the cost is the price you paid plus the discount that
        was taxed as a perquisite, which in practice equals the market value on
        the purchase date.
      </p>
      <p>
        If the US withholds tax on a sale (this is uncommon for Indian
        residents who have filed the correct broker forms) or on dividends, a
        resident can claim foreign tax credit in India, limited to the Indian
        tax on the same income. For income up to FY 2025-26 the claim is made
        in Form 67; for tax year 2026-27 onwards the statement is filed in the
        form prescribed under the Income-tax Rules, 2026. Either way it must
        be filed on or before the return due date, so leave enough time.
      </p>

      <h2>What goes into Schedule FA, and why does the calendar year matter?</h2>
      <p>
        A resident and ordinarily resident individual must list every foreign
        asset held at any time during the relevant calendar year ending 31
        December: the brokerage account, each holding of shares, any cash
        balance at the broker, and any foreign bank account. For the return of
        FY 2025-26 (filed in 2026), the period is 1 January to 31 December
        2025. Values are converted at the telegraphic transfer buying rate on
        the relevant date. The{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/Step%20by%20Step%20Guide%20FA%20FSI.pdf" target="_blank" rel="noopener noreferrer">e-filing portal&apos;s step-by-step guide to Schedules FA, FSI and TR</a>{" "}
        explains each field.
      </p>
      <table>
        <thead>
          <tr>
            <th>When</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Throughout the year</td>
            <td>Keep every vest, release, sale-to-cover and dividend confirmation</td>
          </tr>
          <tr>
            <td>15 June, 15 September, 15 December, 15 March</td>
            <td>Advance tax instalments; include gains on any sale and dividends, since payroll TDS does not cover them</td>
          </tr>
          <tr>
            <td>31 December</td>
            <td>Calendar year closes for Schedule FA; note the closing share count and value</td>
          </tr>
          <tr>
            <td>January to May</td>
            <td>Download the broker&apos;s annual statement and US tax forms; reconcile vests with Form 16</td>
          </tr>
          <tr>
            <td>By the return due date (31 July for most salaried filers)</td>
            <td>File the foreign tax credit statement, then the return with Schedule FA</td>
          </tr>
        </tbody>
      </table>
      <p>
        Leaving out a foreign asset can attract a ₹10 lakh penalty under the
        Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax
        Act, 2015. Since 1 October 2024, that penalty does not apply where the
        aggregate value of foreign assets other than immovable property is ₹20
        lakh or less, but most employees with a few years of vesting are above
        that figure. For eligible taxpayers who missed past disclosures, the
        department also notified a time-bound foreign asset disclosure scheme
        for small taxpayers (FAST-DS 2026), open until 31 December 2026.
      </p>

      <h2>What mistakes do Chennai employees commonly make?</h2>
      <ul>
        <li><strong>Ignoring sell-to-cover lots.</strong> Shares sold on the vest date to pay tax are still a sale. Each one belongs in the capital gains schedule, and the shares were held during the calendar year, so they belong in Schedule FA too.</li>
        <li><strong>Using zero cost.</strong> This taxes the vest value twice. The cost is the perquisite value.</li>
        <li><strong>Forgetting dividends and cash.</strong> Small quarterly dividends and residual cash at the broker are income and a reportable foreign asset.</li>
        <li><strong>Choosing ITR-1.</strong> Anyone with foreign assets or foreign income must use a form that contains Schedule FA.</li>
        <li><strong>Treating RNOR years like resident years.</strong> If you recently returned from abroad, you may not need Schedule FA yet; see our guide to{" "}
          <Link href="/blog/rnor-status-returning-nri">RNOR status for returning NRIs</Link>.</li>
        <li><strong>Missing advance tax on a large sale.</strong> Payroll TDS covers vesting, not capital gains. Interest for short payment of advance tax follows.</li>
      </ul>

      <h2>Who can help with RSU reporting?</h2>
      <p>
        RSU and ESPP reporting is part of our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai">income tax work for HNIs and senior professionals in Chennai</Link>.
        We also handle the same work online for{" "}
        <Link href="/income-tax-consultant-bangalore">technology employees in Bengaluru</Link>{" "}
        and for families in{" "}
        <Link href="/income-tax-consultant-besant-nagar-chennai">Besant Nagar</Link>{" "}
        and nearby areas who have returned from abroad. All consultations take
        place at our Anna Nagar office or by video call. To have your vesting
        history reconciled before the next return,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
    </>
  );
}
