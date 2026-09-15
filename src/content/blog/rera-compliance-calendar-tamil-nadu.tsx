import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "rera-compliance-calendar-tamil-nadu",
  title: "RERA Compliance Calendar for Tamil Nadu Developers",
  description:
    "Every recurring RERA filing deadline Tamil Nadu developers need to track, from Quarterly Progress Reports to project extensions.",
  date: "2026-11-18",
  excerpt:
    "Quarterly Progress Reports, escrow certifications, and extension filings — the full TNRERA compliance calendar in one place.",
  faqs: [
    {
      question: "What happens if a developer misses a Quarterly Progress Report deadline?",
      answer:
        "TNRERA can levy penalties for non-filing, and repeated non-compliance can affect the project's registration status, which in turn can restrict the developer's ability to continue marketing or selling units.",
    },
    {
      question: "Does every real estate project need RERA registration?",
      answer:
        "Projects with land area exceeding 500 sq. metres or more than 8 apartments, where a completion certificate hasn't been issued, must register before any marketing, advertising, or sale of units begins.",
    },
    {
      question: "Can the RERA registration validity period be extended?",
      answer:
        "Yes, developers can apply for an extension of the project completion timeline, but this requires a formal application with justification — it isn't automatic, and delays in filing the extension request can create a compliance gap.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        RERA compliance in Tamil Nadu is not a one-time registration event —
        it&apos;s an ongoing quarterly and annual filing obligation that runs
        for the life of the project until the completion certificate is
        issued. Here is the full recurring calendar.
      </p>

      <h2>Recurring RERA obligations</h2>
      <table>
        <thead>
          <tr>
            <th>Filing</th>
            <th>Frequency</th>
            <th>What it covers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quarterly Progress Report (QPR)</td>
            <td>Every quarter</td>
            <td>Construction progress, unit sales status, funds utilisation update</td>
          </tr>
          <tr>
            <td>Escrow account certification</td>
            <td>Ongoing, verified alongside QPR</td>
            <td>Confirmation that 70% of collected funds remain in the designated project escrow account</td>
          </tr>
          <tr>
            <td>Annual audit of project accounts</td>
            <td>Annually</td>
            <td>CA-certified statement confirming funds were utilised only for the specific project</td>
          </tr>
          <tr>
            <td>Extension application</td>
            <td>As needed, before original timeline lapses</td>
            <td>Formal request to extend the registered project completion date</td>
          </tr>
          <tr>
            <td>Amendment filings</td>
            <td>Event-based</td>
            <td>Changes to project specifications, developer details, or other registered particulars</td>
          </tr>
        </tbody>
      </table>

      <h2>The 70% escrow rule, in practice</h2>
      <p>
        This is the compliance item developers most often underestimate. Every
        rupee collected from allottees must have 70% deposited into a
        dedicated project escrow account, usable only for construction and
        land costs of that specific project — not for other projects, general
        working capital, or unrelated expenses. TNRERA requires periodic
        certification (typically by a chartered accountant) confirming this
        segregation is actually being maintained, not just declared.
      </p>

      <h2>Consequences of non-compliance</h2>
      <ul>
        <li>Financial penalties for missed or delayed filings</li>
        <li>Potential restriction on continuing to market or sell units</li>
        <li>Reputational damage — RERA compliance status is publicly visible on the TNRERA portal, and buyers increasingly check it</li>
      </ul>

      <h2>A practical approach</h2>
      <p>
        Treat RERA compliance as a recurring quarterly cycle from day one of
        registration, not a set of deadlines to react to individually. Most
        compliance failures come from developers underestimating the escrow
        certification and QPR cadence, not from a single missed one-off
        filing.
      </p>

      <p>
        Our <a href="/rera">RERA compliance service</a> handles the full
        recurring cycle — QPR filing, escrow certification, and extension
        applications — so nothing slips between quarters.
      </p>
    </>
  );
}
