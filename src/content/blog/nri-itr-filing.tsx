import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "nri-itr-filing",
  title: "NRI Income Tax Return Filing: A Guide for Chennai NRIs",
  description:
    "When NRIs with family, property or investments in India must file an Indian income tax return, which income is taxable here and how DTAA relief applies.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Non resident Indians with family, property, or investments back in Chennai often have a genuine Indian tax filing obligation that gets...",
  summary:
    "An NRI must file an Indian return when Indian income exceeds the basic exemption limit, and often should file anyway to claim back excess TDS or carry forward losses. Residential status depends on days in India, not passport. Rent, capital gains and NRO interest are taxable here, NRE interest is exempt and foreign income generally is not taxed.",
  faqs: [
    {
      question: "How is NRI status decided for tax purposes?",
      answer:
        "Residential status depends on days spent in India in the year and earlier years, not on passport or visa. You are resident if in India for 182 days or more, or 60 days plus 365 days over the four preceding years. For citizens leaving for work abroad, and citizens or PIOs visiting, the 60-day test becomes 182 days (120 days for visitors with Indian income above ₹15 lakh).",
    },
    {
      question: "What income of an NRI is taxable in India?",
      answer:
        "Income that arises or is received in India remains taxable regardless of residential status. This typically includes rental income from Indian property, capital gains on selling Indian property or investments, and interest on Indian bank accounts and fixed deposits. Foreign salary and foreign investment income generally stay outside Indian tax for a genuine NRI.",
    },
    {
      question: "Is NRE or NRO account interest taxable?",
      answer:
        "Interest on an NRE account is exempt from Indian tax, while interest on an NRO account is fully taxable and typically has TDS deducted at a higher rate at source. Assuming both are treated the same leads to overpaying tax that could have been avoided or underreporting taxable interest.",
    },
    {
      question: "Does an NRI need to file an Indian return if TDS was deducted?",
      answer:
        "Often yes. Filing is the only way to claim a refund when the TDS deducted is more than your actual tax, which is common on NRO interest and property sales. It is also needed to report capital gains, carry forward losses, or when total Indian income exceeds the basic exemption limit. NRIs cannot claim the Section 87A rebate.",
    },
    {
      question: "Which ITR form does an NRI use and what documents are needed?",
      answer:
        "For FY 2025-26, NRIs cannot use ITR-1. They file ITR-2 without business income, or ITR-3 with it. Keep Form 26AS and AIS, NRO interest certificates, rent records, sale and purchase deeds, and for treaty claims a tax residency certificate with Form 10F, which is Form 41 from tax year 2026-27.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        An NRI must file an Indian income tax return when taxable Indian income exceeds the basic exemption limit, and should often file anyway to claim back excess TDS, report capital gains or carry forward losses. Status depends on days spent in India, not passport. Rent, capital gains and NRO interest are taxable here; NRE interest is exempt.
      </p>

      <p>
        Non-resident Indians with family, property or investments back in Chennai often have a genuine Indian filing obligation that gets overlooked simply because they no longer live here, and the rules differ enough from resident taxation to cause real confusion.
      </p>

      <h2>What actually makes you an NRI for tax purposes?</h2>

      <p>
        Residential status depends on the number of days spent in India during the year and the preceding years, not on your passport, visa or where you consider home. Under Section 6 of the 1961 Act, you are resident in a year if either test is met:
      </p>

      <ul>
        <li>You are in India for 182 days or more in the year, or</li>
        <li>You are in India for 60 days or more in the year and 365 days or more over the four preceding years.</li>
      </ul>

      <p>
        For an Indian citizen who leaves India for employment abroad, and for an Indian citizen or person of Indian origin visiting India, the 60-day test is replaced by 182 days. For a visitor whose Indian income exceeds ₹15 lakh, it becomes 120 days, and such a person is treated as resident but not ordinarily resident. An Indian citizen with Indian income above ₹15 lakh who is not liable to tax in any other country can also be deemed resident. Returning NRIs should read our guide to{" "}
        <Link href="/blog/rnor-status-returning-nri">RNOR status after returning to India</Link>.
      </p>

      <h2>What income is taxable in India for an NRI?</h2>

      <p>
        Income that arises or is received in India remains taxable regardless of residential status. Foreign salary and foreign investment income generally stay outside Indian tax for a genuine NRI.
      </p>

      <table>
        <thead>
          <tr>
            <th>Income</th>
            <th>Taxable in India for an NRI?</th>
            <th>How tax is usually collected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rent from property in India</td>
            <td>Yes, after a 30% standard deduction on the net annual value</td>
            <td>Tenant deducts TDS on payments to a non-resident</td>
          </tr>
          <tr>
            <td>Capital gains on Indian property, shares or mutual funds</td>
            <td>Yes</td>
            <td>Buyer or fund deducts TDS</td>
          </tr>
          <tr>
            <td>Interest on NRO account and NRO fixed deposits</td>
            <td>Yes</td>
            <td>Bank deducts TDS</td>
          </tr>
          <tr>
            <td>Interest on NRE and FCNR deposits</td>
            <td>Exempt while you remain non-resident</td>
            <td>No TDS</td>
          </tr>
          <tr>
            <td>Dividends from Indian companies</td>
            <td>Yes</td>
            <td>Company deducts TDS</td>
          </tr>
          <tr>
            <td>Salary for work done outside India, paid abroad</td>
            <td>No</td>
            <td>Not applicable</td>
          </tr>
        </tbody>
      </table>

      <p>
        TDS on payments to non-residents falls under Section 195 of the 1961 Act, which becomes Section 393(2) of the Income-tax Act, 2025 from tax year 2026-27. If you are selling property, our page on{" "}
        <Link href="/nri-property-sale-tds-chennai">TDS on NRI property sales</Link> explains the buyer&apos;s deduction and how a lower deduction certificate works.
      </p>

      <h2>Why does the NRO and NRE account distinction matter?</h2>

      <p>
        Interest earned on an NRE account is exempt from Indian tax, while interest on an NRO account is fully taxable and has TDS deducted at the rates for non-residents, which are usually higher than your actual liability on modest income. Many NRIs assume both accounts are treated the same way, which leads either to overpaying tax that could have been reclaimed or to under-reporting taxable interest. NRE exemption also ends once you become resident, so the status of the year matters.
      </p>

      <h2>When must an NRI file an Indian return?</h2>

      <ul>
        <li>Total taxable Indian income exceeds the basic exemption limit. NRIs cannot claim the Section 87A rebate, which is available only to residents, so tax can arise at lower income levels than residents expect.</li>
        <li>TDS deducted is more than the tax actually due, and you want the refund.</li>
        <li>You sold property, shares or mutual funds in India, even if TDS was deducted.</li>
        <li>You have losses, such as a capital loss, that you want to carry forward.</li>
      </ul>

      <p>
        Even where TDS has already been deducted, <Link href="/income-tax-return-filing-chennai">filing an income tax return</Link> is the only way to get excess tax back (see the Income Tax Department&apos;s <a href="https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-0" target="_blank" rel="noopener noreferrer">return guidance for non-resident individuals</a>).
      </p>

      <h2>Which ITR form and documents do you need?</h2>

      <p>
        For FY 2025-26, NRIs cannot use ITR-1. They file ITR-2 if there is no business or professional income, or ITR-3 if there is. Schedule FA, the foreign assets schedule, applies to residents, not to NRIs. Keep these ready:
      </p>

      <ul>
        <li>Form 26AS and the Annual Information Statement from the e-filing portal.</li>
        <li>Interest certificates for NRO accounts and deposits.</li>
        <li>Rent agreement, rent received and municipal tax paid for let-out property.</li>
        <li>Sale deed, purchase deed and cost of improvement for any property sold.</li>
        <li>For treaty claims, a tax residency certificate and Form 10F, which is Form 41 under the 2025 Act from tax year 2026-27.</li>
        <li>An Indian bank account, pre-validated on the portal, to receive the refund.</li>
      </ul>

      <h2>How does DTAA relief work for an NRI?</h2>

      <p>
        A Double Taxation Avoidance Agreement between India and your country of residence may cap the Indian tax rate on interest or dividends, provided you hold a tax residency certificate and furnish Form 10F (Form 41 from tax year 2026-27). Indian tax paid is then usually claimed as a credit in your country of residence. Relief has to be claimed properly on both sides, and the Indian return is the evidence the other country will ask for. When money is sent abroad from an NRO account, the bank will also ask for the remittance forms, which our page on{" "}
        <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB</Link> (Form 145 and 146 from 1 April 2026) explains.
      </p>

      <h2>How do you file and verify the return from abroad?</h2>

      <p>
        The return is filed online on the e-filing portal and must be verified within 30 days of filing. NRIs can e-verify through net banking of an Indian bank account or a digital signature, or send a signed ITR-V by post to the Centralised Processing Centre in Bengaluru. An unverified return is treated as not filed.
      </p>

      <h2>What is a quick checklist for NRIs with Indian ties?</h2>

      <ul>
        <li>Confirm your residential status for the year from your actual days in India.</li>
        <li>List all India-sourced income: rent, capital gains, interest and dividends.</li>
        <li>Check whether NRO TDS was more than your actual liability.</li>
        <li>Review the DTAA with your country of residence and collect the residency certificate early.</li>
        <li>Verify the return within 30 days of filing.</li>
      </ul>

      <p>
        If you are an NRI with property, investments or family financial matters in Chennai and are unsure about your Indian filing obligation, C S Rushil &amp; Co. handles <Link href="/nri-tax-services">NRI tax filing</Link> and can review your situation remotely. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
