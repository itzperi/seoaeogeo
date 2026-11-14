import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "tds-on-rent",
  title: "TDS on Rent: What Chennai Landlords and Tenants Should Know",
  description:
    "TDS on rent trips up both sides in Chennai, tenants who don't realize they must deduct it, and landlords who forget to check it against their return.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it...",
  summary:
    "Rent paid by businesses is subject to TDS under Section 194-I of the 1961 Act, and rent above ₹50,000 a month paid by other individuals and HUFs under Section 194-IB. From tax year 2026-27 both fall under Section 393(1) of the Income-tax Act, 2025. Tenants deposit the tax; landlords should match it in Form 26AS before filing.",
  faqs: [
    {
      question: "When does a tenant have to deduct TDS on rent?",
      answer:
        "For FY 2025-26, a company, firm or individual under tax audit deducts TDS under Section 194-I once rent exceeds ₹50,000 for a month or part of a month. Other individuals and HUFs deduct under Section 194-IB when monthly rent exceeds ₹50,000. From tax year 2026-27, both obligations sit in Section 393(1) of the Income-tax Act, 2025.",
    },
    {
      question: "What is the difference between Section 194-I and 194-IB?",
      answer:
        "Section 194-I applies to business tenants, at 10% for land, buildings and furniture or 2% for plant and machinery, with monthly deposits and quarterly statements under a TAN. Section 194-IB applies to other individuals and HUFs at 2%, deducted once a year in the last month of the year or tenancy, using PAN, without a TAN.",
    },
    {
      question: "What changed for TDS on rent under the Income-tax Act, 2025?",
      answer:
        "From 1 April 2026, rent paid by individuals and HUFs is covered by Section 393(1), Table Sl. No. 2(i), and reported in Form 141 (earlier Form 26QC). Business tenants report in the quarterly Form 140 (earlier 26Q). The department says rates and thresholds are largely unchanged. Rent for FY 2025-26 still follows the 1961 Act.",
    },
    {
      question: "How is TDS deducted when the landlord is an NRI?",
      answer:
        "Rent paid to a non-resident landlord falls under Section 195 of the 1961 Act, which becomes Section 393(2) from tax year 2026-27, with no ₹50,000 threshold. The tenant needs a TAN, deducts at the rates for non-residents, deposits the tax and files the quarterly statement, Form 27Q, which is Form 144 from tax year 2026-27.",
    },
    {
      question: "What should landlords check about TDS on rent?",
      answer:
        "Landlords should verify that TDS deducted by the tenant appears in Form 26AS and the Annual Information Statement before filing their own return, and should report the gross rent, not the amount received after TDS. A mismatch is a common, avoidable notice trigger, usually caused by deposit under the wrong PAN or a missed deadline.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        TDS on rent applies when a business tenant pays more than ₹50,000 of rent in a month (Section 194-I), or an individual or HUF tenant pays more than ₹50,000 a month (Section 194-IB), under the 1961 Act for FY 2025-26. From tax year 2026-27, both are covered by Section 393(1) of the Income-tax Act, 2025.
      </p>

      <p>
        It trips up both sides of the transaction in Chennai: tenants who do not realise they need to deduct it, and landlords who do not realise a deduction is coming and forget to check it against their return.
      </p>

      <h2>Which Act and section apply to your rent payment?</h2>

      <p>
        The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026. Rent for FY 2025-26 and earlier follows the 1961 Act, even if the statement is filed after April 2026. Rent paid from tax year 2026-27 follows the 2025 Act, and the department&apos;s{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tax-payments-faq" target="_blank" rel="noopener noreferrer">tax payments FAQs</a> ask deductors to quote the relevant item of the Section 393 table, not the old section.
      </p>

      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>FY 2025-26 and earlier (1961 Act)</th>
            <th>Tax year 2026-27 onwards (2025 Act)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rent paid to a resident by a company, firm or individual under tax audit</td>
            <td>Section 194-I; quarterly statement in Form 26Q</td>
            <td>Section 393(1), rent item of the table; quarterly statement in Form 140</td>
          </tr>
          <tr>
            <td>Rent above ₹50,000 a month paid to a resident by other individuals and HUFs</td>
            <td>Section 194-IB; challan-cum-statement in Form 26QC</td>
            <td>Section 393(1), Table Sl. No. 2(i); challan-cum-statement in Form 141</td>
          </tr>
          <tr>
            <td>Rent paid to a non-resident landlord</td>
            <td>Section 195; quarterly statement in Form 27Q</td>
            <td>Section 393(2); quarterly statement in Form 144</td>
          </tr>
          <tr>
            <td>Late fee for TDS statements</td>
            <td>Section 234E</td>
            <td>Section 427</td>
          </tr>
          <tr>
            <td>Interest for TDS not deducted or not paid</td>
            <td>Section 201(1A)</td>
            <td>Section 398</td>
          </tr>
        </tbody>
      </table>

      <p>
        The portal&apos;s{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/form-141-faqs" target="_blank" rel="noopener noreferrer">Form 141 FAQs</a> confirm the Table Sl. No. 2(i) entry for rent paid by individuals and HUFs. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">old and new section table</Link> lists the other TDS forms.
      </p>

      <h2>What are the rates and thresholds?</h2>

      <table>
        <thead>
          <tr>
            <th>Provision (FY 2025-26)</th>
            <th>Who deducts</th>
            <th>Threshold</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Section 194-I</td>
            <td>Any tenant other than an individual or HUF not under tax audit</td>
            <td>Rent above ₹50,000 for a month or part of a month</td>
            <td>10% for land, buildings and furniture; 2% for plant, machinery and equipment</td>
          </tr>
          <tr>
            <td>Section 194-IB</td>
            <td>Individuals and HUFs not covered by Section 194-I</td>
            <td>Rent above ₹50,000 for a month or part of a month</td>
            <td>2%</td>
          </tr>
        </tbody>
      </table>

      <p>
        If the landlord has not given a PAN, TDS is deducted at 20%, and under Section 194-IB that higher deduction cannot exceed the rent for the last month. The department states that TDS rates and thresholds are largely the same under the 2025 Act; confirm the table entry before relying on a figure for tax year 2026-27.
      </p>

      <h2>What does a business tenant have to do?</h2>

      <ol>
        <li>Obtain a TAN before the first deduction.</li>
        <li>Deduct TDS when rent is credited or paid, whichever is earlier. Where GST is shown separately on the landlord&apos;s invoice, CBDT has clarified that TDS is worked out on the rent excluding GST.</li>
        <li>Deposit the tax by the 7th of the following month, or by 30 April for tax deducted in March (see the <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" target="_blank" rel="noopener noreferrer">income tax portal guidance on TDS compliance</a>).</li>
        <li>File the quarterly statement, Form 26Q for FY 2025-26 or Form 140 from tax year 2026-27, through <Link href="/tds-return-filing-chennai">quarterly TDS return filing</Link>. Our post on{" "}
          <Link href="/blog/tds-return-filing-deadlines">TDS return due dates</Link> lists each quarter&apos;s deadline.</li>
        <li>Issue the TDS certificate to the landlord after each quarter.</li>
      </ol>

      <h2>What does an individual tenant have to do?</h2>

      <p>
        Under Section 194-IB, the tenant deducts tax only once: from the rent for the last month of the financial year, or the last month of the tenancy if it ends earlier. No TAN is needed; the tenant uses their PAN and the landlord&apos;s PAN. The tax is paid with the challan-cum-statement in Form 26QC, which is Form 141 from tax year 2026-27, within 30 days from the end of the month of deduction, and a TDS certificate is then given to the landlord. For example, a tenant paying ₹60,000 a month for all of FY 2025-26 deducts 2% of ₹7,20,000, which is ₹14,400, from the March rent. This annual rhythm is easy to miss if you are used to monthly TDS.
      </p>

      <h2>What if the landlord is an NRI?</h2>

      <p>
        Rent paid to a non-resident landlord is not covered by Section 194-I or 194-IB. It falls under Section 195, which is Section 393(2) from tax year 2026-27, with no ₹50,000 threshold. The tenant needs a TAN, deducts tax at the rates for non-residents, deposits it and files the quarterly statement in Form 27Q, or Form 144 from tax year 2026-27. Our{" "}
        <Link href="/nri-tax-services">NRI tax services</Link> page covers the landlord&apos;s side, including refunds when the deduction is higher than the tax due.
      </p>

      <h2>What happens if TDS is deducted late or not at all?</h2>

      <ul>
        <li><strong>Interest (Section 201(1A), Section 398 from 2026-27):</strong> 1% a month from the date tax was deductible to the date it was deducted, and 1.5% a month from the date of deduction to the date of payment.</li>
        <li><strong>Late fee (Section 234E, Section 427 from 2026-27):</strong> ₹200 a day until the statement is filed, capped at the tax deductible.</li>
        <li><strong>Disallowance:</strong> for a business tenant under the 1961 Act, 30% of rent on which TDS was not deducted or paid is disallowed under Section 40(a)(ia).</li>
      </ul>

      <h2>What should landlords check?</h2>

      <p>
        Landlords should verify that TDS deducted by the tenant actually appears in their <a href="https://www.incometax.gov.in/iec/foportal/help/e-filing-manage-tax-credit-mismatch-faq" target="_blank" rel="noopener noreferrer">Form 26AS tax credit</a> and Annual Information Statement before filing their own <Link href="/income-tax-return-filing-chennai">income tax return</Link>. Report the gross rent, not the amount received after TDS, and claim the TDS as a credit. A mismatch between what the tenant says was deducted and what appears in the landlord&apos;s credit is a common and avoidable notice trigger, usually caused by the tenant depositing under the wrong PAN or missing the deposit deadline.
      </p>

      <h2>What is a practical checklist?</h2>

      <ul>
        <li>Confirm which provision applies to your arrangement: 194-I, 194-IB or 195 for FY 2025-26, and the matching Section 393 item from tax year 2026-27.</li>
        <li>Check the rate and threshold before the first payment, not after.</li>
        <li>Collect the landlord&apos;s PAN at the start of the tenancy.</li>
        <li>Tenants should deposit TDS within the deadline and issue the certificate promptly.</li>
        <li>Landlords should reconcile TDS credit against Form 26AS every year before filing.</li>
      </ul>

      <p>
        If you are a landlord or tenant in Chennai unsure which TDS provision applies to your rent arrangement, C S Rushil &amp; Co. can confirm the correct treatment and help you stay compliant on both sides. Book a free 15-minute consultation through our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
