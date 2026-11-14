import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Neutral explainer: no prices, no firm statistics, no claims about other
// firms. Income tax numbers follow the Income-tax Act, 2025 (tax year 2026-27
// onwards) with the 1961 Act numbers in brackets, per the section mapping post.
export const meta: BlogPostMeta = {
  slug: "what-does-a-ca-firm-in-chennai-do",
  title: "What Does a CA Firm in Chennai Do? Services and Signatures",
  description:
    "What a CA firm in Chennai does, service by service, and which work only a practising chartered accountant may sign: statutory audit, tax audit and Form 146.",
  date: "2026-11-14",
  excerpt:
    "Company registration, GST, income tax, audit, ROC filings, bookkeeping, virtual CFO and NRI tax explained one by one, plus the reports that only a chartered accountant in practice can sign.",
  summary:
    "A CA firm in Chennai handles registrations, GST and income tax filings, ROC compliance, bookkeeping, financial advice and NRI tax. Most of this can legally be done by others, but a statutory audit, a tax audit report, a Form 146 certificate and a transfer pricing report in Form 48 must be signed by a chartered accountant in practice.",
  faqs: [
    {
      question: "What services does a CA firm in Chennai usually offer?",
      answer:
        "Most CA firms cover company and LLP registration, GST registration and returns, income tax returns and notices, statutory and tax audits, ROC annual filings, bookkeeping, payroll support, virtual CFO reporting and NRI tax. The mix varies by firm, so ask which of these the firm handles itself and which it refers to other professionals before you engage.",
    },
    {
      question: "Which work can only a chartered accountant in practice do?",
      answer:
        "A company's statutory audit under the Companies Act, 2013, the tax audit report under Section 63 of the Income-tax Act, 2025 (earlier Section 44AB), the accountant's certificate in Form 146 (earlier Form 15CB) for payments to non-residents, and the transfer pricing report in Form 48 (earlier Form 3CEB) are signed by a chartered accountant holding a certificate of practice.",
    },
    {
      question: "Do I need a CA to file my income tax return?",
      answer:
        "No. Any taxpayer can file their own income tax return on the income tax e-filing portal. People usually involve a chartered accountant when income comes from several sources, when capital gains or foreign assets are involved, when a tax audit applies, or when a notice has been received and the reply needs to be supported with records and computations.",
    },
    {
      question: "Is a certificate of practice different from ICAI membership?",
      answer:
        "Yes. ICAI membership means a person has qualified as a chartered accountant. A certificate of practice, issued under Section 6 of the Chartered Accountants Act, 1949, is what allows a member to practise and sign audit reports and certificates. A member employed in industry may hold membership without a certificate of practice and cannot sign attest reports.",
    },
    {
      question: "Does a company need a CA even if it has no turnover?",
      answer:
        "Yes, for the audit. Every company registered under the Companies Act, 2013 must have its financial statements audited by a chartered accountant in practice, whatever its turnover, and must file its annual returns with the Registrar. The board appoints the first auditor within 30 days of incorporation, so the requirement starts almost as soon as the company exists.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A CA firm in Chennai handles the registrations, filings, audits and
        certificates that keep a business or individual compliant with company
        law, GST and income tax. Much of that work can legally be done by
        others, but statutory audits, tax audits and some income tax
        certificates can only be signed by a chartered accountant in practice.
      </p>
      <p>
        This guide walks through each service a chartered accountancy firm
        typically offers, explains which pieces of work the law reserves for a
        practising chartered accountant, and shows how the work changes as a
        business grows. If you are already comparing firms, our guide on{" "}
        <Link href="/blog/how-to-choose-a-chartered-accountant-in-chennai">
          how to choose a chartered accountant in Chennai
        </Link>{" "}
        covers the checks to run before you hire.
      </p>

      <h2>What does a CA firm do, service by service?</h2>
      <p>
        The services below are the ones most Chennai businesses and families
        ask about. Not every firm offers all of them, and the depth of work in
        each area differs from firm to firm.
      </p>
      <ul>
        <li>
          <strong>Company and business registration.</strong> Advising on the
          right structure (private limited company, LLP, OPC, partnership or
          proprietorship), reserving the name, preparing the incorporation
          forms and charter documents, and obtaining PAN and TAN. Our page on{" "}
          <Link href="/company-registration-chennai">
            company registration in Chennai
          </Link>{" "}
          sets out the steps for each structure.
        </li>
        <li>
          <strong>GST.</strong> Registration, monthly or quarterly returns such
          as GSTR-1 and GSTR-3B, the annual return, reconciling input tax credit
          with supplier filings, e-invoicing and e-way bill questions, and
          replies to notices from the department.
        </li>
        <li>
          <strong>Income tax.</strong> Returns for individuals, firms and
          companies, advance tax estimates, TDS deduction and quarterly TDS
          statements, tax planning within the law, and replies to notices,
          assessments and appeals.
        </li>
        <li>
          <strong>Audit and assurance.</strong> Statutory audits of companies
          and LLPs, tax audits, and certificates that banks, regulators or
          overseas parents ask for.
        </li>
        <li>
          <strong>ROC compliance.</strong> Annual filings with the Registrar of
          Companies such as AOC-4 and MGT-7 or MGT-7A, director KYC, auditor
          appointment filings, and event-based filings when directors, capital
          or the registered office change.
        </li>
        <li>
          <strong>Bookkeeping and payroll.</strong> Recording transactions,
          bank reconciliations, monthly closing, salary processing and the
          statutory deductions that go with it.
        </li>
        <li>
          <strong>Virtual CFO.</strong> Monthly management reports, cash flow
          forecasts, budgets and board packs for businesses that need finance
          leadership without a full-time CFO.
        </li>
        <li>
          <strong>NRI tax.</strong> Returns for non-residents, residential
          status questions, tax on property sales in Chennai, treaty relief, and
          the paperwork banks need before money can be sent abroad.
        </li>
      </ul>

      <h2>Which work legally needs a chartered accountant in practice?</h2>
      <p>
        A handful of reports can only be signed by a chartered accountant who
        holds a certificate of practice. These are attest functions: the CA is
        giving an independent opinion or certificate that a regulator, the tax
        department or a bank relies on.
      </p>
      <table>
        <thead>
          <tr>
            <th>Report or certificate</th>
            <th>Law that requires it</th>
            <th>Who may sign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Statutory audit report of a company</td>
            <td>Companies Act, 2013, Sections 139, 141 and 143</td>
            <td>A chartered accountant in practice, or a firm whose partners practising in India are mostly chartered accountants</td>
          </tr>
          <tr>
            <td>Tax audit report</td>
            <td>Section 63 of the Income-tax Act, 2025 (earlier Section 44AB)</td>
            <td>An accountant, meaning a chartered accountant in practice</td>
          </tr>
          <tr>
            <td>Accountant&apos;s certificate for payments to non-residents</td>
            <td>Form 146 (earlier Form 15CB), filed with Form 145 (earlier Form 15CA)</td>
            <td>A chartered accountant in practice</td>
          </tr>
          <tr>
            <td>Transfer pricing accountant&apos;s report</td>
            <td>Section 172 and Form 48 (earlier Section 92E and Form 3CEB)</td>
            <td>A chartered accountant in practice</td>
          </tr>
        </tbody>
      </table>
      <p>
        Section 141 of the Companies Act, 2013 is the core rule for audits: only
        a chartered accountant may be appointed as a company&apos;s auditor, and
        a firm can be appointed in its own name when a majority of its partners
        practising in India qualify. The Act defines a chartered accountant as
        one holding a valid certificate of practice. You can read the Act on
        the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">
          Ministry of Corporate Affairs website
        </a>
        . The difference between a{" "}
        <Link href="/statutory-audit-chennai">statutory audit for companies</Link>{" "}
        and a tax audit is explained in our post on{" "}
        <Link href="/blog/statutory-vs-tax-vs-internal-audit">
          statutory, tax and internal audits
        </Link>
        .
      </p>
      <p>
        For income tax, the Income-tax Act, 2025 applies from tax year 2026-27,
        which began on 1 April 2026, and it renumbered most sections and forms.
        Earlier years still use the 1961 numbers, so both sets will appear on
        notices and reports for some time. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">
          old-to-new section mapping
        </Link>{" "}
        lists them side by side, and the forms themselves are on the{" "}
        <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">
          income tax e-filing portal
        </a>
        . If you are sending money abroad and your bank has asked for a CA
        certificate, see our page on{" "}
        <Link href="/form-15ca-15cb-chennai">Form 15CA and 15CB certification</Link>
        , which now covers Forms 145 and 146.
      </p>

      <h2>What is a certificate of practice, and why does it matter?</h2>
      <p>
        Passing the CA examinations and joining the Institute of Chartered
        Accountants of India (ICAI) makes someone a member. To practise, a
        member also needs a certificate of practice under Section 6 of the
        Chartered Accountants Act, 1949. Many members work in industry, banks
        or companies and do not hold one. They are qualified chartered
        accountants, but they cannot sign audit reports or attest certificates.
      </p>
      <p>
        When a report must come from a chartered accountant in practice, ask
        who will sign it and check that person on ICAI&apos;s{" "}
        <a href="https://traceamember.icai.org/" target="_blank" rel="noopener noreferrer">
          Trace a Member
        </a>{" "}
        search. More detail on the{" "}
        <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer">
          ICAI website
        </a>{" "}
        explains the Institute&apos;s role in regulating the profession.
      </p>

      <h2>Which work can someone other than a CA do?</h2>
      <p>
        Most compliance work is not reserved for chartered accountants. That
        does not make it simple, but it does mean the law lets you choose who
        does it.
      </p>
      <ul>
        <li>
          <strong>Income tax returns.</strong> Any taxpayer may file their own
          return on the e-filing portal.
        </li>
        <li>
          <strong>GST returns.</strong> A registered person can file directly
          on the{" "}
          <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
            GST portal
          </a>
          , or through an enrolled GST practitioner.
        </li>
        <li>
          <strong>Incorporation forms.</strong> MCA forms that need
          professional certification can generally be certified by a practising
          chartered accountant, company secretary or cost accountant.
        </li>
        <li>
          <strong>Bookkeeping and payroll.</strong> These can be done in-house
          or by any competent accountant.
        </li>
      </ul>
      <p>
        Whether to use a CA firm or an online filing service for this work is a
        separate question, covered in our post on{" "}
        <Link href="/blog/ca-firm-or-online-filing-platform">
          choosing between a CA firm and an online filing platform
        </Link>
        .
      </p>

      <h2>How does the work change as a business grows?</h2>
      <p>
        What a business needs from its chartered accountant shifts over time.
        A rough sequence for a Chennai company looks like this:
      </p>
      <ol>
        <li>
          <strong>Before and at incorporation:</strong> choice of structure,
          shareholding, registration, PAN, TAN and bank account.
        </li>
        <li>
          <strong>First year:</strong> first auditor appointment within 30 days,
          GST registration when the threshold or a mandatory trigger applies,
          bookkeeping set-up, and the first ROC and income tax filings.
        </li>
        <li>
          <strong>Growth:</strong> payroll and TDS on salaries, tax audit once
          turnover crosses the limits in Section 63, and monthly reporting for
          lenders or investors.
        </li>
        <li>
          <strong>Cross-border activity:</strong> foreign investment reporting,
          Form 145 and Form 146 for payments abroad, and transfer pricing once
          there are transactions with related parties outside India.
        </li>
      </ol>

      <h2>Does it matter that the firm is in Chennai?</h2>
      <p>
        Much compliance is now online, so location matters less than it used
        to. It still helps in a few ways. A Chennai firm deals regularly with
        the Registrar of Companies for Tamil Nadu (see our note on{" "}
        <Link href="/blog/roc-chennai-vs-roc-coimbatore">
          ROC Chennai and ROC Coimbatore
        </Link>
        ), with Tamil Nadu GST officers, and with property registration
        practice in the city, which matters for NRI property sales. Being able
        to sit down and go through original documents in person also speeds up
        work such as audits and notice replies.
      </p>

      <h2>How do you decide what you actually need?</h2>
      <p>
        Start with the work the law requires of you (audit, tax audit, GST
        returns, ROC filings), then add what would help you run the business
        better, such as monthly reports or cash flow planning. A good first
        conversation with any CA firm should leave you with a clear list of
        what applies to you, who will do it, and when.
      </p>
      <p>
        C S Rushil &amp; Co. is a{" "}
        <Link href="/">CA firm in Chennai</Link> based in J-Block, Anna Nagar,
        led by CA Rushil C S. If you would like to map out what applies to your
        business, book a free 15-minute consultation through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
