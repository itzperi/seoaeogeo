import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "msme-udyam-registration-checklist",
  title: "MSME Udyam Registration After Incorporation: A Checklist",
  description:
    "Udyam registration for new companies: the 2025 MSME limits, documents, the 45-day payment rule under Section 43B(h), the MSME-1 return and the key benefits.",
  date: "2026-09-19",
  updated: "2026-11-13",
  excerpt:
    "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  faqs: [
    {
      question: "Is Udyam registration mandatory?",
      answer:
        "No, it is voluntary and free on the official Udyam portal. It is still worth doing for most eligible companies, because delayed-payment protection under the MSMED Act, priority-sector lending and public procurement benefits all depend on being classified as a micro, small or medium enterprise through Udyam.",
    },
    {
      question: "What documents are required for Udyam registration?",
      answer:
        "No documents are uploaded. You need the Aadhaar number of the proprietor, managing partner or authorised signatory, the business PAN and, from 1 April 2021, the GSTIN where the business is required to hold one. Investment and turnover figures are drawn from the PAN and GST records linked to the enterprise.",
    },
    {
      question: "What are the MSME limits from 1 April 2025?",
      answer:
        "Micro: investment up to ₹2.5 crore and turnover up to ₹10 crore. Small: up to ₹25 crore and ₹100 crore. Medium: up to ₹125 crore and ₹500 crore. Both tests apply together, so an enterprise that crosses either limit moves to the next category. The Udyam portal shows these revised limits.",
    },
    {
      question: "What is the 45-day rule under Section 43B(h)?",
      answer:
        "If a business owes money to a micro or small enterprise and pays after the time limit in section 15 of the MSMED Act, which cannot exceed 45 days, the expense is deductible only in the year it is actually paid. From tax year 2026-27 the same rule sits in section 37(2)(g) of the Income-tax Act, 2025.",
    },
    {
      question: "Who has to file Form MSME-1?",
      answer:
        "A company that buys goods or services from micro or small enterprises and has payments outstanding to them for more than 45 days from acceptance or deemed acceptance files Form MSME-1 with the MCA. It is half-yearly: by 31 October for April to September, and by 30 April for October to March.",
    },
    {
      question: "Can a retail or wholesale trader get Udyam registration?",
      answer:
        "Yes. Retail and wholesale traders have been allowed to register on the Udyam portal since July 2021, but the Ministry of MSME restricted their benefits to priority-sector lending. A trading business should not assume that every MSME benefit, such as delayed-payment protection, applies to it simply because it holds a certificate.",
    },
  ],
  summary:
    "Udyam registration is free, mostly instant, and uses investment and turnover limits to classify a business as micro, small or medium, with revised limits in force from 1 April 2025. It brings delayed payment protection after 45 days, priority-sector lending, tender benefits and scheme access. Register on the Udyam portal with the proprietor's Aadhaar and the business PAN.",
};

export default function Body() {
  return (
    <>
      <p>
        <Link href="/msme-udyam-registration-chennai">Udyam registration</Link> is one of the simplest things a
        newly incorporated business can do. It is free, mostly instant, and unlocks protections that most founders
        only discover when a large customer pays late. It also works in the other direction: once your company buys
        from micro and small suppliers, the 45-day payment rule and the Form MSME-1 return apply to you as a buyer.
        This checklist covers both sides.
      </p>

      <h2>Who is eligible for Udyam registration, and what are the current limits?</h2>
      <p>
        <strong>Direct answer:</strong> Any manufacturing or service enterprise can register if it falls within
        the limits for its category. From 1 April 2025, a micro enterprise has investment up to ₹2.5 crore and
        turnover up to ₹10 crore; small, up to ₹25 crore and ₹100 crore; medium, up to ₹125 crore and ₹500 crore.
        Both tests apply together.
      </p>
      <p>
        Investment means investment in plant and machinery or equipment, and turnover is the enterprise&apos;s
        annual turnover. The limits below are the revised figures shown on the{" "}
        <a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener noreferrer">official Udyam Registration portal</a>,
        which replaced the earlier limits of ₹1 crore and ₹5 crore for micro, ₹10 crore and ₹50 crore for small,
        and ₹50 crore and ₹250 crore for medium.
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Investment in plant and machinery or equipment</th>
            <th>Annual turnover</th>
            <th>Limits before 1 April 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micro</td>
            <td>Up to ₹2.5 crore</td>
            <td>Up to ₹10 crore</td>
            <td>₹1 crore and ₹5 crore</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>Up to ₹25 crore</td>
            <td>Up to ₹100 crore</td>
            <td>₹10 crore and ₹50 crore</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>Up to ₹125 crore</td>
            <td>Up to ₹500 crore</td>
            <td>₹50 crore and ₹250 crore</td>
          </tr>
        </tbody>
      </table>
      <p>
        The classification is composite: if an enterprise crosses either the investment or the turnover limit of
        its category, it moves to the next category up. Most newly incorporated companies and start-ups fall in the
        micro category in their first years. Because the limits were raised, some companies that were classified as
        small or medium before April 2025 are now micro or small, which matters for the 45-day rule discussed below.
      </p>

      <h2>What documents do you need, and how do you register?</h2>
      <p>
        <strong>Direct answer:</strong> No documents are uploaded. Registration is online and free on the Udyam
        portal, using the Aadhaar number of the proprietor, managing partner or authorised signatory and the
        business PAN. From 1 April 2021 the GSTIN is also needed where the business is required to hold one. The
        e-certificate is usually issued on submission.
      </p>
      <ol>
        <li>Go to the official Udyam Registration portal; the portal states that no fee is payable to anyone.</li>
        <li>Enter the Aadhaar number of the proprietor, managing partner or authorised director and complete the OTP check.</li>
        <li>Enter the business PAN. Investment and turnover data are drawn from the income-tax and GST records linked to that PAN.</li>
        <li>Fill in the enterprise details: activity (manufacturing or services), NIC codes, bank account, address and number of employees.</li>
        <li>Verify and submit. The Udyam Registration Certificate is issued electronically.</li>
      </ol>
      <p>
        For a new company with no filed return yet, the self-declared figures are used until the first income-tax
        return and GST returns are available. Keep the certificate updated each year, because the classification
        follows the figures in those filings.
      </p>

      <h2>What benefits does Udyam registration give a new company?</h2>
      <p>
        <strong>Direct answer:</strong> The main benefits are statutory protection against delayed payment for
        micro and small enterprises, eligibility for priority-sector lending, preference in central government
        procurement, and access to schemes run by the Ministry of MSME and the states. Medium enterprises get the
        lending and scheme benefits but not the delayed-payment protection.
      </p>
      <ul>
        <li>
          <strong>Delayed payment protection:</strong> Under sections 15 and 16 of the Micro, Small and Medium
          Enterprises Development (MSMED) Act, 2006, a buyer must pay a micro or small supplier by the agreed date,
          which cannot be more than 45 days from acceptance of the goods or services, or within 15 days where there
          is no written agreement. Late payment attracts compound interest with monthly rests at three times the
          bank rate notified by the RBI.
        </li>
        <li>
          <strong>Recovery forum:</strong> A micro or small supplier can refer an unpaid claim to the Micro and Small
          Enterprises Facilitation Council, and can file it through the{" "}
          <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer">MSME Samadhaan portal</a>.
        </li>
        <li>
          <strong>Priority-sector lending:</strong> Bank lending to registered MSMEs counts towards the priority-sector
          targets set by the RBI, which makes MSME borrowers a category banks actively seek.
        </li>
        <li>
          <strong>Public procurement:</strong> Central ministries and public sector undertakings have an annual
          target to procure a share of their purchases from micro and small enterprises, and registered MSEs
          generally get tender documents free and are exempt from earnest money deposits.
        </li>
        <li>
          <strong>Schemes:</strong> Many central and Tamil Nadu schemes for credit guarantees and technology
          upgrades are open only to Udyam-registered units, so the certificate is usually the first document a
          bank or scheme office asks for.
        </li>
      </ul>
      <p>
        Retail and wholesale traders can register too, but the Ministry of MSME restricted their benefits to
        priority-sector lending, as the{" "}
        <a href="https://website.rbi.org.in/web/rbi/-/notifications/new-definition-of-micro-small-and-medium-enterprises-addition-of-retail-and-wholesale-trade-12126" target="_blank" rel="noopener noreferrer">RBI&apos;s circular of 7 July 2021</a>{" "}
        records.
      </p>

      <h2>How does the 45-day payment rule under Section 43B(h) affect your company as a buyer?</h2>
      <p>
        <strong>Direct answer:</strong> If your company owes a micro or small enterprise and pays after the MSMED
        Act time limit, which is at most 45 days, the expense is allowed as a tax deduction only in the year you
        actually pay. Paying before the return due date does not save it. The rule covers micro and small
        suppliers, not medium ones.
      </p>
      <p>
        Section 43B(h) was inserted into the Income-tax Act, 1961 by the Finance Act, 2023 and applies from
        financial year 2023-24. It continues under the Income-tax Act, 2025: in a Rajya Sabha reply dated 21 July
        2026 (Unstarred Question 242), the Ministry of Finance confirmed that the corresponding provision is section
        37(2)(g) of the 2025 Act, which applies from tax year 2026-27. Unlike other items in that section, such as
        statutory dues, payment before the due date of the return does not rescue a late MSE payment. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">table of old and new section numbers</Link>{" "}
        covers the related provisions.
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Time limit to pay</th>
            <th>Effect on the buyer&apos;s deduction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Written agreement with a micro or small supplier</td>
            <td>Agreed date, not more than 45 days from acceptance</td>
            <td>Deductible in the year of purchase if paid within the limit</td>
          </tr>
          <tr>
            <td>No written agreement</td>
            <td>15 days from acceptance or deemed acceptance</td>
            <td>Deductible in the year of purchase if paid within 15 days</td>
          </tr>
          <tr>
            <td>Paid after the limit, in a later year</td>
            <td>Limit already missed</td>
            <td>Deductible only in the year of actual payment</td>
          </tr>
          <tr>
            <td>Supplier is a medium enterprise or a trader registered for priority-sector lending</td>
            <td>Commercial terms</td>
            <td>Section 43B(h) and section 37(2)(g) are aimed at micro and small enterprises; confirm the supplier&apos;s category first</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Example:</strong> a Chennai company accepts goods from a micro supplier on 10 March 2027 under a
        written 45-day credit term, so payment is due by 24 April 2027. If it pays on or before 24 April, the
        purchase is deductible in tax year 2026-27. If it pays on 15 May 2027, the deduction moves to tax year
        2027-28, the year of payment. Interest paid to the supplier for the delay is not deductible at all, under
        section 23 of the MSMED Act.
      </p>
      <p>
        In practice, ask every supplier for its Udyam certificate at onboarding, record its category in your vendor
        master, and track the age of unpaid MSE bills at each month end. Your{" "}
        <Link href="/tax-audit-chennai">tax auditor</Link> will ask for this list at year end.
      </p>

      <h2>What is Form MSME-1, and when must a company file it?</h2>
      <p>
        <strong>Direct answer:</strong> Form MSME-1 is a half-yearly return to the Ministry of Corporate Affairs by
        companies that have payments outstanding to micro or small enterprise suppliers for more than 45 days from
        acceptance or deemed acceptance. It is due by 31 October for April to September and by 30 April for October
        to March.
      </p>
      <p>
        The requirement comes from the MCA&apos;s order under section 405 of the Companies Act, 2013 on furnishing
        information about payments to micro and small enterprise suppliers. The order was amended in July 2024 and
        the form was substituted with a version that asks for more detail on the outstanding dues. The return is
        filed on the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">MCA portal</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Half-year</th>
            <th>Due date</th>
            <th>What to keep ready</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 April to 30 September</td>
            <td>31 October</td>
            <td>Supplier-wise list of MSE dues over 45 days, with Udyam numbers, amounts, dates of acceptance and reasons for delay</td>
          </tr>
          <tr>
            <td>1 October to 31 March</td>
            <td>30 April</td>
            <td>The same list for the second half, reconciled to the year-end payables used for the Section 43B(h) review</td>
          </tr>
        </tbody>
      </table>
      <p>
        The same ageing list feeds three filings: Form MSME-1, the MSE disclosure in the company&apos;s financial
        statements required by section 22 of the MSMED Act, and the tax audit reporting on Section 43B(h). Building
        it once each half-year avoids three separate reconciliations.
      </p>

      <h2>What should be on your post-incorporation MSME checklist?</h2>
      <p>
        <strong>Direct answer:</strong> Register on Udyam once the company has its PAN and, if needed, its GSTIN;
        add your Udyam number to invoices and quotations; collect Udyam certificates from your own suppliers; set
        payment terms within 45 days in writing; and diarise Form MSME-1 for 30 April and 31 October.
      </p>
      <ul>
        <li>Register on Udyam soon after incorporation, alongside opening the current account and filing INC-20A.</li>
        <li>Print your Udyam number on invoices, quotations and purchase orders, so customers know the 45-day rule applies to them.</li>
        <li>Collect Udyam certificates from your own suppliers and mark micro, small and medium vendors separately in the accounting system.</li>
        <li>Put payment terms in writing; without an agreement, the time limit falls to 15 days.</li>
        <li>Review MSE payables at each month end and at 31 March for the Section 43B(h) or section 37(2)(g) test.</li>
        <li>File Form MSME-1 where any MSE dues are older than 45 days, and update the Udyam record if your figures cross a limit.</li>
      </ul>
      <p>
        We recommend completing Udyam registration as part of your post-incorporation checklist; see our full{" "}
        <Link href="/private-limited-company-incorporation-chennai">incorporation guide</Link>{" "}
        for the complete sequence. Our team in Anna Nagar, Chennai handles{" "}
        <Link href="/msme-udyam-registration-chennai">Udyam registration and MSME compliance</Link>{" "}
        for companies across India, online or in person.
      </p>
    </>
  );
}
