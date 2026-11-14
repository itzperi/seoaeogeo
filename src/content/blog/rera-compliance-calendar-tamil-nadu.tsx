import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "rera-compliance-calendar-tamil-nadu",
  title: "RERA Compliance Calendar for Tamil Nadu Developers",
  description:
    "Every recurring RERA filing deadline Tamil Nadu developers need to track, from quarterly progress reports and annual audits to project extension requests.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Quarterly Progress Reports, escrow certifications and extension filings: the full TNRERA compliance calendar in one place.",
  faqs: [
    {
      question: "What happens if a developer misses a Quarterly Progress Report deadline?",
      answer:
        "TNRERA can levy penalties under the Act for non-filing, and repeated non-compliance can affect the project's registration status, which in turn can restrict the developer's ability to keep marketing or selling units. The missed update is also visible to buyers who check the project page on the TNRERA website, which affects confidence in the project.",
    },
    {
      question: "Does every real estate project need RERA registration?",
      answer:
        "No. Section 3(2)(a) of the Real Estate (Regulation and Development) Act, 2016 exempts a project where the land does not exceed 500 square metres or the apartments do not exceed eight, including all phases. Other projects without a completion certificate must register with TNRERA before any advertising, marketing, booking or sale of units.",
    },
    {
      question: "Can the RERA registration validity period be extended?",
      answer:
        "Yes. A developer can apply to TNRERA to extend the registered completion date, using Form E under the Tamil Nadu RERA Rules, 2017, with reasons for the delay. Extension is not automatic, so the application should be filed well before the registration lapses. Letting it lapse creates a compliance gap that is harder to fix afterwards.",
    },
    {
      question: "When is the annual audit of RERA project accounts due?",
      answer:
        "The promoter must have the project accounts audited by a practising chartered accountant within six months after the end of each financial year, which means by 30 September for a 31 March year end. The audit confirms that money collected for the project was used for that project and that withdrawals matched the stage of completion.",
    },
    {
      question: "Do real estate agents in Tamil Nadu have recurring RERA obligations?",
      answer:
        "Yes. Under Section 9 of the Act, an agent must register with TNRERA before facilitating any sale in a registered project. In Tamil Nadu the application is made in Form G under the 2017 Rules, and renewal is applied for in Form J at least one month before the registration expires, so agents need their own calendar too.",
    },
  ],
  summary:
    "RERA compliance in Tamil Nadu continues until the completion certificate. Developers upload quarterly progress reports within 15 days of each quarter end, keep 70 percent of buyer collections in a separate project account, withdraw only against CA, engineer and architect certificates, get project accounts audited within six months of each year end, and apply for extensions before registration lapses.",
};

export default function Body() {
  return (
    <>
      <p>
        RERA compliance in Tamil Nadu runs until the project receives its completion certificate. Developers upload a
        quarterly progress report within 15 days of each quarter end, keep 70 percent of buyer collections in a separate
        project account, withdraw only against professional certificates, get project accounts audited within six
        months of each year end, and seek extensions in time.
      </p>

      <p>
        RERA is not a one-time registration event. It is a recurring set of quarterly, annual and event-based
        obligations under the Real Estate (Regulation and Development) Act, 2016 and the Tamil Nadu Real Estate
        (Regulation and Development) Rules, 2017, administered by the{" "}
        <a href="https://rera.tn.gov.in/" target="_blank" rel="noopener noreferrer">Tamil Nadu Real Estate Regulatory Authority (TNRERA)</a>.
        Here is the full calendar, and how to run it without gaps.
      </p>

      <h2>What are the recurring RERA obligations?</h2>
      <table>
        <thead>
          <tr>
            <th>Filing</th>
            <th>Frequency and timing</th>
            <th>What it covers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quarterly progress report</td>
            <td>Within 15 days of the end of every quarter</td>
            <td>Construction progress, units booked and sold, approvals and financial progress</td>
          </tr>
          <tr>
            <td>Escrow withdrawal certificates</td>
            <td>Each withdrawal from the separate project account</td>
            <td>Certificates from a practising CA, an engineer and an architect that the withdrawal is in proportion to completion</td>
          </tr>
          <tr>
            <td>Annual audit of project accounts</td>
            <td>Within six months after each financial year end</td>
            <td>CA-audited statement confirming funds were used only for the project</td>
          </tr>
          <tr>
            <td>Extension application</td>
            <td>Before the registered completion date lapses</td>
            <td>Formal request in Form E to extend the completion date</td>
          </tr>
          <tr>
            <td>Amendment filings</td>
            <td>When registered details change</td>
            <td>Changes to plans, specifications, promoter details or other registered particulars</td>
          </tr>
        </tbody>
      </table>

      <h2>What does a year look like on the calendar?</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Obligation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 July</td>
            <td>Quarterly update for April to June</td>
          </tr>
          <tr>
            <td>30 September</td>
            <td>Annual audit of project accounts for the previous financial year</td>
          </tr>
          <tr>
            <td>15 October</td>
            <td>Quarterly update for July to September</td>
          </tr>
          <tr>
            <td>15 January</td>
            <td>Quarterly update for October to December</td>
          </tr>
          <tr>
            <td>15 April</td>
            <td>Quarterly update for January to March</td>
          </tr>
          <tr>
            <td>Throughout the year</td>
            <td>CA, engineer and architect certificates before each escrow withdrawal</td>
          </tr>
        </tbody>
      </table>

      <h2>What information goes into each quarterly update?</h2>
      <ul>
        <li>Stage-wise construction progress for each building or phase</li>
        <li>Number and type of units booked, sold and still available</li>
        <li>Status of approvals received and pending</li>
        <li>Amounts collected from allottees, deposited in the separate account and withdrawn during the quarter</li>
      </ul>
      <p>
        The figures should agree with the bank statements of the project account and with the withdrawal certificates
        issued during the quarter.
      </p>

      <h2>How does the 70 percent escrow rule work in practice?</h2>
      <p>
        This is the item developers most often underestimate. Under Section 4(2)(l)(D) of the Act, 70 percent of the
        amounts realised from allottees must be deposited in a separate account in a scheduled bank, commonly called the
        RERA escrow account. That money can be used only for the land and construction cost of that project, not for
        other projects, general working capital or unrelated expenses. The promoter&apos;s declaration in Form B, filed
        with the registration application, records this undertaking.
      </p>
      <p>
        Every withdrawal needs certificates from a practising chartered accountant, an engineer and an architect
        confirming that it is in proportion to the percentage of completion. The CA&apos;s certificate draws on the
        engineer&apos;s cost estimate and the latest quarterly update, so the three documents must agree. Tamil Nadu&apos;s
        rules use lettered forms, such as Form A for registration and Form E for extension, and do not prescribe a
        numbered CA certificate, so numbered formats used in some other states do not apply here.
      </p>

      <h2>What does the annual audit cover?</h2>
      <p>
        Within six months after the end of each financial year, the promoter must have the project accounts audited by a
        practising chartered accountant. The audit checks that amounts collected for the project were used for that
        project and that withdrawals from the separate account were in proportion to completion. This is separate from
        the developer&apos;s statutory audit under company law, although the two are usually planned together, as part
        of <Link href="/audit-and-assurance">audit and assurance</Link> work.
      </p>

      <h2>When are extensions and amendments needed?</h2>
      <p>
        If the project will not be completed by the registered date, the developer applies to TNRERA for an extension in
        Form E with reasons, before the registration lapses. Extension is not automatic. Changes to sanctioned plans,
        layout or specifications are restricted under Section 14 of the Act and may need allottee consent as well as an
        amendment to the registered details. Treat any planned change as a compliance event, not only a design decision.
      </p>

      <h2>What are the consequences of non-compliance?</h2>
      <ul>
        <li>Penalties under the Act for missed or delayed filings and for contravention of the escrow rules</li>
        <li>Possible restriction on continuing to market or sell units</li>
        <li>Reputational damage, since compliance status is publicly visible on the TNRERA website and buyers increasingly check it</li>
        <li>Harder conversations with lenders and joint development partners, who often ask for RERA compliance confirmation</li>
      </ul>

      <h2>What is a practical way to stay on top of it?</h2>
      <ol>
        <li>Set up the separate project account and the withdrawal approval process on the first day of registration.</li>
        <li>Agree a monthly cut-off with the site engineer for cost and progress data.</li>
        <li>Prepare the quarterly update in the first week after each quarter, leaving a margin before the 15-day deadline.</li>
        <li>Reconcile collections and the 70 percent deposit every month, not only at the quarter end.</li>
        <li>Diarise the annual audit and the registration expiry date, with a reminder well before each.</li>
      </ol>
      <p>
        Most compliance failures come from developers underestimating the escrow certification and quarterly cadence,
        not from a single missed one-off filing. Where land is developed with a landowner, the tax side also needs
        planning, as our note on{" "}
        <Link href="/blog/joint-development-agreement-tax-chennai">joint development agreement tax in Chennai</Link>{" "}
        explains.
      </p>

      <p>
        Our <Link href="/rera">RERA compliance service</Link> handles the recurring cycle, including quarterly updates,
        escrow withdrawal certificates, the annual project audit and extension applications, from our Anna Nagar office.
        Book a free 15-minute consultation to review your project calendar.
      </p>
    </>
  );
}
