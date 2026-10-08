import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "company-registration-for-it-startups-chennai",
  title: "Company Registration for IT and SaaS Startups in Chennai",
  description:
    "Structure choices for Chennai software and SaaS founders: private limited vs LLP, ESOPs, foreign client billing with LUT and inward remittances, and DPIIT.",
  date: "2026-12-18",
  excerpt:
    "Software and SaaS founders face specific questions: which structure investors expect, how ESOPs work, and how to bill foreign clients without paying IGST.",
  faqs: [
    {
      question: "Should a SaaS startup register as a private limited company or an LLP?",
      answer:
        "Most SaaS founders who plan to raise equity or offer ESOPs choose a private limited company, because investors take shares and employee stock options can only be issued by a company. An LLP can suit a bootstrapped services business with a small number of partners and no plans for outside equity, but converting later adds a step.",
    },
    {
      question: "Do I pay GST on software services billed to foreign clients?",
      answer:
        "Software services that qualify as export of services are zero-rated under the IGST Act. A registered exporter can supply without paying IGST by filing a Letter of Undertaking in Form GST RFD-11 each financial year. The export conditions include the recipient and place of supply being outside India and payment received in convertible foreign exchange or permitted rupees.",
    },
    {
      question: "Can an IT startup get DPIIT recognition?",
      answer:
        "Yes, if it meets the criteria. Startup India currently recognises private limited companies, partnership firms, LLPs and cooperative societies up to 10 years from incorporation, with turnover below ₹200 crore in every previous financial year, that are working on innovation or improvement of products, services or processes with potential for employment or wealth creation.",
    },
    {
      question: "Who can receive ESOPs in a startup company?",
      answer:
        "Under Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014, ESOPs can be granted to permanent employees and directors other than independent directors. Promoters and directors holding more than 10% are normally excluded, but DPIIT-recognised startups may grant options to them for up to ten years from incorporation.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Chennai has a deep pool of engineering talent, and a steady stream of
        founders leave product companies and IT services firms to build their
        own software, SaaS or tech-enabled services business. The incorporation
        steps are the same as for any other company, but software founders run
        into a particular set of questions early: what structure investors will
        expect, how to set aside equity for the team, and how to bill clients
        in the US, UK or Middle East correctly from the first invoice.
      </p>

      <h2>Which structure suits a software or SaaS startup?</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Private limited company</th>
            <th>LLP</th>
            <th>OPC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equity investment</td>
            <td>Standard route for angels and funds</td>
            <td>Investors become partners; uncommon for venture funding</td>
            <td>Only one member; no outside investors</td>
          </tr>
          <tr>
            <td>ESOPs</td>
            <td>Available under section 62 and Rule 12</td>
            <td>Not available in the same form</td>
            <td>Not practical</td>
          </tr>
          <tr>
            <td>Compliance load</td>
            <td>Higher: audit, AGM, board meetings, ROC filings</td>
            <td>Lower, though audit applies above thresholds</td>
            <td>Moderate, with some relaxations</td>
          </tr>
          <tr>
            <td>DPIIT recognition</td>
            <td>Eligible</td>
            <td>Eligible</td>
            <td>Not named separately in the criteria; check before relying on it</td>
          </tr>
        </tbody>
      </table>
      <p>
        For a founding team planning to raise money or hire against equity, a
        private limited company is usually the practical default. A
        bootstrapped consultancy with two partners and no investor plans may be
        well served by an LLP. Our page on{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>{" "}
        covers the incorporation steps.
      </p>

      <h2>Get the founding paperwork right</h2>
      <ul>
        <li><strong>Object clause.</strong> Describe the software, SaaS, IT-enabled services or product development activity clearly, with the correct NIC codes in SPICe+.</li>
        <li><strong>Founder equity.</strong> Agree the split, and whether founder shares vest over time, before incorporation rather than after.</li>
        <li><strong>IP assignment.</strong> Code written before incorporation belongs to the founders personally unless assigned to the company in writing. Investors check this in due diligence.</li>
        <li><strong>Authorised capital.</strong> Leave room for an ESOP pool and a first funding round, but do not inflate it without reason, as stamp duty and fees scale with it.</li>
      </ul>

      <h2>How do ESOPs work for a startup company?</h2>
      <p>
        ESOPs are issued under section 62(1)(b) of the Companies Act, 2013 with
        a special resolution of shareholders, following Rule 12 of the
        Companies (Share Capital and Debentures) Rules, 2014. Key points for
        founders:
      </p>
      <ul>
        <li>Options can be granted to permanent employees in or outside India and to directors other than independent directors, including employees of a holding or subsidiary company.</li>
        <li>Promoters, members of the promoter group, and directors holding more than 10% are normally excluded. A DPIIT-recognised startup can grant options to them for up to ten years from incorporation.</li>
        <li>There must be at least one year between grant and vesting.</li>
        <li>The plan, the pool size, exercise price and vesting schedule are approved by special resolution and disclosed in the explanatory statement.</li>
      </ul>
      <p>
        Tax arises for the employee as a perquisite when options are exercised,
        and again as capital gains when shares are sold. Employees of certain
        eligible startups can defer the tax on exercise under specific
        conditions, so design the plan with the tax side in view.
      </p>

      <h2>Billing foreign clients: LUT and export of services</h2>
      <p>
        Most early-stage Indian SaaS and software companies earn some revenue
        from abroad. Under the IGST Act, an export of services is a zero-rated
        supply. A supply qualifies as an export of services when the supplier
        is in India, the recipient is outside India, the place of supply is
        outside India, payment is received in convertible foreign exchange or
        in Indian rupees where permitted by the RBI, and the supplier and
        recipient are not merely establishments of the same person.
      </p>
      <p>
        To export without paying IGST, a registered business furnishes a{" "}
        <a href="https://tutorial.gst.gov.in/userguide/refund/Furnishing_of_Letter_of_Undertaking.htm" target="_blank" rel="noopener noreferrer">
          Letter of Undertaking in Form GST RFD-11
        </a>{" "}
        on the GST portal for each financial year. Without an LUT, the exporter
        pays IGST and claims a refund, which locks up cash.
      </p>
      <p>
        Keep the evidence trail clean from day one:
      </p>
      <ul>
        <li>Export invoices showing the supply is under LUT without payment of IGST.</li>
        <li>Foreign inward remittance advices or certificates from your bank for each receipt, with the correct purpose code.</li>
        <li>Contracts or statements of work showing the overseas client.</li>
        <li>Monthly matching of invoices to bank receipts, since unrealised export proceeds create both GST and FEMA questions.</li>
      </ul>
      <p>
        Funding from foreign investors brings its own reporting. When shares are
        issued to a non-resident, the company reports it in Form FC-GPR within
        30 days of allotment. Our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page
        explains the foreign investment reporting cycle.
      </p>

      <h2>Taxes deducted by foreign clients and related-party billing</h2>
      <p>
        Some overseas clients withhold tax on payments to Indian software
        companies under their own domestic law or a tax treaty. That amount is
        not lost. An Indian company can generally claim credit for foreign tax
        withheld against its Indian tax on the same income, subject to the
        treaty, the limits in Indian law and the prescribed procedure,
        including the statement that must be furnished to claim the credit.
        Keep the withholding certificates issued by the client along with the
        invoices and remittance advices.
      </p>
      <p>
        If the Indian company is a subsidiary or affiliate of a foreign
        company, or bills a related entity abroad, transfer pricing comes into
        play. Transactions with associated enterprises abroad must be at
        arm&apos;s length, documented, and reported in an accountant&apos;s
        report each year. Founders who set up a US or Singapore holding
        structure with an Indian operating company should plan the
        intercompany agreement and pricing method before the first invoice.
      </p>

      <h2>Registered office and workspace</h2>
      <p>
        Many early-stage software companies start from home or a coworking
        space. Both can serve as the registered office if there is a valid
        address proof and a no-objection from the owner or operator. A
        coworking agreement should allow the company to receive official
        correspondence and display its name, and should cover what happens if
        the Registrar or a GST officer visits for verification. The INC-20A
        declaration also requires photographs of the registered office with a
        director or key managerial person present, so choose an address you
        can actually use.
      </p>

      <h2>DPIIT recognition and the startup tax holiday</h2>
      <p>
        Under the current{" "}
        <a href="https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html" target="_blank" rel="noopener noreferrer">
          Startup India recognition criteria
        </a>
        , an entity can be recognised for up to 10 years from incorporation if
        its turnover has been below ₹200 crore in every previous financial
        year and it is working towards innovation or improvement of products,
        services or processes. Recognition unlocks the ESOP flexibility above,
        self-certification under certain labour and environmental laws, and the
        route to apply for the startup tax holiday, which needs a separate
        certificate from the Inter-Ministerial Board. The investment-related
        &quot;angel tax&quot; provision that once worried startups was
        abolished from the 2024-25 financial year.
      </p>
      <p>
        See{" "}
        <Link href="/startup-india-registration-chennai">
          Startup India registration in Chennai
        </Link>{" "}
        for how the application works.
      </p>

      <h2>First-year compliance for a software company</h2>
      <ul>
        <li>Open the company bank account and deposit share subscription money; file INC-20A within 180 days of incorporation.</li>
        <li>Appoint the first auditor within 30 days of incorporation and hold the first board meeting within 30 days.</li>
        <li>Register for GST when required, and file the LUT before the first export invoice.</li>
        <li>Register for profession tax and, as headcount grows, EPF and ESI.</li>
        <li>Set up payroll with TDS on salaries from the first hire.</li>
      </ul>
      <p>
        If you are setting up a software or SaaS company and want the
        structure, ESOP pool and export billing planned together, you can{" "}
        <Link href="/contact">book a consultation with our team</Link>.
      </p>
    </>
  );
}
