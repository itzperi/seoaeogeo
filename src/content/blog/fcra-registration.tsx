import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "fcra-registration",
  title: "FCRA Registration for Chennai NGOs Accepting Foreign Funds",
  description:
    "Any Chennai trust, society, or Section 8 company accepting foreign donations needs FCRA registration first, and the rules have tightened considerably.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Any trust, society, or Section 8 company in Chennai that wants to receive donations or grants from a foreign source needs FCRA registration...",
  summary:
    "A trust, society or Section 8 company must hold FCRA registration or prior permission before accepting foreign contributions. Registration generally needs three years of existence and ₹15 lakh spent on core activities in that period. Contributions must arrive in the FCRA account at SBI's New Delhi Main Branch, with an annual return in Form FC-4.",
  faqs: [
    {
      question: "Who needs FCRA registration in India?",
      answer:
        "Any trust, society or Section 8 company that intends to accept foreign contributions, including donations in kind and not just cash, needs FCRA registration or prior permission from the Ministry of Home Affairs. Foreign sources include foreign citizens, including OCI cardholders, foreign companies and foreign trusts, whatever the organisation's legal structure.",
    },
    {
      question: "What are the eligibility conditions for FCRA registration?",
      answer:
        "For registration in Form FC-3A, an organisation generally needs to have existed for at least three years and to have spent at least ₹15 lakh on its core activities over the three preceding financial years, excluding administrative expenses. An organisation without that track record can apply for prior permission in Form FC-3B for a specific contribution from a specific donor.",
    },
    {
      question: "Which bank account receives foreign contributions under FCRA?",
      answer:
        "All foreign contributions must first be received in a designated FCRA account at the New Delhi Main Branch of the State Bank of India. Many first-time applicants assume any bank will do. Funds can then be moved to separate utilisation accounts at other banks, but the receipt itself must go through the designated account.",
    },
    {
      question: "What compliance continues after FCRA registration?",
      answer:
        "Registered organisations file an annual return in Form FC-4 by 31 December for the previous financial year, keep separate books for foreign contributions, keep administrative expenses within 20 percent of the contribution received and renew the registration in Form FC-3C before it expires. Non-compliance can lead to suspension or cancellation of the registration.",
    },
    {
      question: "Can an FCRA-registered NGO pass funds to another NGO?",
      answer:
        "No. Since the 2020 amendment to the Foreign Contribution (Regulation) Act, 2010, an organisation that receives foreign contribution cannot transfer it to any other person or organisation, even one that is itself FCRA registered. Programmes that once relied on passing funds to smaller partner NGOs need to be restructured so the registered organisation spends the money directly.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A Chennai trust, society or Section 8 company must have FCRA registration or prior permission before it accepts
        any foreign contribution. Registration generally needs three years of existence and ₹15 lakh spent on core
        activities over that period. Funds must arrive in the designated FCRA account at SBI&apos;s New Delhi Main
        Branch, and an annual return is filed in Form FC-4.
      </p>

      <p>
        The rules around foreign contributions tightened considerably with the 2020 amendments to the Foreign
        Contribution (Regulation) Act, 2010, catching organisations off guard that assumed older, looser norms still
        applied. This guide covers who needs registration, the eligibility test, the bank account rule and the
        compliance that continues every year.
      </p>

      <h2>Who does FCRA apply to?</h2>

      <p>
        The Act governs how Indian organisations receive and use funds from foreign sources, including foreign citizens,
        foreign companies, foreign trusts and international bodies. It applies regardless of the organisation&apos;s
        structure, whether a <Link href="/trust">registered trust or society</Link> or a{" "}
        <Link href="/section-8-company-registration-chennai">Section 8 company</Link>, and covers contributions of any
        kind, including articles and securities, not just cash. Overseas Citizens of India are treated as foreign
        sources. An Indian citizen living abroad who donates from personal savings through normal banking channels is
        not treated as a foreign source.
      </p>

      <h2>Should you apply for registration or prior permission?</h2>

      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Form</th>
            <th>Who it suits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registration</td>
            <td>FC-3A</td>
            <td>Organisations with at least three years of existence and ₹15 lakh spent on core activities over the three preceding years</td>
          </tr>
          <tr>
            <td>Prior permission</td>
            <td>FC-3B</td>
            <td>Newer organisations, for a specific amount from a specific donor for a specific purpose</td>
          </tr>
          <tr>
            <td>Renewal</td>
            <td>FC-3C</td>
            <td>Registered organisations before the five-year validity ends</td>
          </tr>
          <tr>
            <td>Annual return</td>
            <td>FC-4</td>
            <td>Every registered organisation, by 31 December for the previous financial year</td>
          </tr>
        </tbody>
      </table>

      <p>
        Prior permission applications usually need a commitment letter from the donor stating the amount and purpose.
        Applications are made online on the{" "}
        <a href="https://fcraonline.nic.in/" target="_blank" rel="noopener noreferrer">Ministry of Home Affairs FCRA portal</a>,
        which also publishes the current forms, notices and lists of registered associations.
      </p>

      <h2>What are the eligibility conditions?</h2>

      <ul>
        <li>The organisation is registered as a trust, society or Section 8 company, with a definite cultural, economic, educational, religious or social programme.</li>
        <li>For registration, it has existed for at least three years and spent at least ₹15 lakh on core activities in the three preceding financial years, excluding administrative expenses.</li>
        <li>Key functionaries provide identification, including Aadhaar for Indian office bearers.</li>
        <li>Neither the organisation nor its office bearers have been prosecuted or convicted for diversion of funds or similar offences.</li>
        <li>Its accounts are audited and its income tax filings are current, which in practice links closely with <Link href="/blog/12a-80g-registration-guide-chennai-ngos">12A and 80G registration</Link>.</li>
      </ul>

      <h2>Why is the designated SBI account mandatory?</h2>

      <p>
        All foreign contributions must first be received in a designated FCRA account at the New Delhi Main Branch of
        the State Bank of India. This surprises many first-time applicants, who assume a local Chennai branch will do.
        From there, funds can be moved to one or more utilisation accounts at banks of the organisation&apos;s choice.
        No local money may be mixed into the FCRA account.
      </p>

      <h2>What are the steps to apply?</h2>

      <ol>
        <li>Confirm the existence and expenditure history from audited accounts for the last three years.</li>
        <li>Make sure the trust, society or Section 8 company registration and income tax filings are current.</li>
        <li>Open the designated FCRA account at SBI&apos;s New Delhi Main Branch.</li>
        <li>Collect key functionary details, the governing document, activity reports and audited financial statements.</li>
        <li>File Form FC-3A (or FC-3B for prior permission) online with the prescribed government fee.</li>
        <li>Respond to any queries from the Ministry, which may include a field enquiry.</li>
      </ol>

      <h2>What compliance continues after registration?</h2>

      <ul>
        <li>File the annual return in Form FC-4 by 31 December, with the income and expenditure, receipts and payments and balance sheet of the foreign contribution, certified by a chartered accountant.</li>
        <li>Maintain separate books of account for foreign contributions, apart from local funds.</li>
        <li>Keep administrative expenses within 20 percent of the foreign contribution received in the year.</li>
        <li>Do not transfer foreign contribution to any other person or organisation, a restriction introduced in 2020.</li>
        <li>Report changes in key functionaries, address or bank account to the Ministry within the prescribed time.</li>
        <li>Apply for renewal in Form FC-3C well before the five-year registration expires.</li>
      </ul>

      <p>
        Failure to file the annual return, use of funds outside the permitted purposes or receipt into the wrong account
        can lead to suspension or cancellation of the registration, and a cancelled organisation generally cannot
        reapply for some years.
      </p>

      <h2>Which mistakes cause the most trouble?</h2>

      <ul>
        <li>Accepting a gift from an overseas well-wisher or an OCI cardholder into the local bank account before registration</li>
        <li>Receiving a foreign grant directly into a utilisation account instead of the SBI New Delhi account</li>
        <li>Mixing foreign and local funds in the same account or the same set of books</li>
        <li>Booking salaries and office costs in a way that pushes administrative expenses past the 20 percent limit</li>
        <li>Filing Form FC-4 late, or not filing it in a year with no foreign receipts</li>
      </ul>

      <p>
        Older institutions that have quietly received support from abroad for years should review their position before
        a larger gift arrives, since the consequences of an unregistered receipt fall on the organisation and its office
        bearers.
      </p>

      <h2>What is a checklist before applying?</h2>

      <ul>
        <li>Confirm you meet the three-year and ₹15 lakh history requirements, or plan for prior permission instead</li>
        <li>Ensure your trust, society or Section 8 company registration is current and compliant</li>
        <li>Open the designated FCRA account at SBI&apos;s New Delhi Main Branch before applying</li>
        <li>Plan annual return filing and separate accounting from the start, not as an afterthought</li>
      </ul>

      <p>
        If your Chennai NGO or trust is planning to accept foreign funding and needs FCRA registration handled
        correctly, C S Rushil &amp; Co. in Anna Nagar can guide you through eligibility, the application and the annual
        compliance. Book a free 15-minute consultation.
      </p>
    </>
  );
}
