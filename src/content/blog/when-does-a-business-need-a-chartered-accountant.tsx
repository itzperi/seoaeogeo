import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Neutral explainer: no prices, no firm statistics, no claims about other
// firms. Thresholds are stated only where the law is settled; tax audit and
// LLP audit limits are left to the linked pages rather than repeated here.
export const meta: BlogPostMeta = {
  slug: "when-does-a-business-need-a-chartered-accountant",
  title: "When Does a Business Need a CA? 10 Triggers in Chennai",
  description:
    "Ten moments when a Chennai business should bring in a chartered accountant: incorporation, GST threshold, first notice, audit, payroll and foreign money.",
  date: "2026-11-14",
  excerpt:
    "Incorporation, crossing the GST threshold, a first tax notice, audit applicability, hiring staff, foreign money and property sales: ten points at which a chartered accountant stops being optional.",
  summary:
    "A Chennai business usually needs a chartered accountant at ten points: choosing a structure, crossing the GST threshold, receiving a first notice, when an audit applies, hiring staff, raising foreign investment, paying overseas vendors, selling property, approaching a lender and when books fall behind. Some of these, such as a company's statutory audit, legally require one.",
  faqs: [
    {
      question: "Does a small business need a chartered accountant from day one?",
      answer:
        "Not always. A proprietor with modest, simple income can often manage early filings alone. A private limited company is different: it must appoint a chartered accountant in practice as its first auditor within 30 days of incorporation, and every company's accounts must be audited each year, so a company needs a CA almost from the start.",
    },
    {
      question: "At what turnover must a business register for GST in Tamil Nadu?",
      answer:
        "A supplier dealing only in goods must register once aggregate turnover crosses 40 lakh rupees in a financial year, and a supplier of services or of both goods and services at 20 lakh rupees. Some businesses must register whatever their turnover, for example those making inter-state supplies of goods or liable to pay tax under reverse charge.",
    },
    {
      question: "Should I contact a CA as soon as I receive a tax notice?",
      answer:
        "Yes. Income tax and GST notices carry a response date, and the time is needed to collect records, reconcile figures and draft a reply. Read the notice fully, note its date and reference number, and share it with your chartered accountant early rather than close to the deadline, when options to seek more time or gather evidence are narrower.",
    },
    {
      question: "Do I need a CA when a foreign investor puts money into my company?",
      answer:
        "It is strongly advisable. Foreign investment in an Indian company has to be reported to the Reserve Bank of India under FEMA rules, including Form FC-GPR within 30 days of allotting shares to the foreign investor. Valuation, pricing and the annual foreign liabilities and assets return also come into play, and a chartered accountant usually handles these together.",
    },
    {
      question: "Is a CA needed when an NRI sells property in Chennai?",
      answer:
        "Usually, yes. The buyer must deduct tax at source on the payment to a non-resident seller under Section 393(2) of the Income-tax Act, 2025 (earlier Section 195), the seller must work out capital gains, and moving the sale money abroad generally needs Form 145 with a chartered accountant's certificate in Form 146 (earlier Forms 15CA and 15CB).",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A business needs a chartered accountant when a decision or a legal
        obligation goes beyond routine record-keeping: forming a company,
        crossing the GST threshold, receiving a tax notice, falling under an
        audit, hiring staff or dealing with foreign money. Some of these
        moments legally require a practising CA; the rest are where mistakes
        become expensive to undo.
      </p>
      <p>
        Below are ten triggers that Chennai businesses commonly meet, in
        roughly the order they arrive. If you are not sure what a chartered
        accountancy firm actually does across these areas, start with our
        overview of{" "}
        <Link href="/blog/what-does-a-ca-firm-in-chennai-do">
          what a CA firm in Chennai does
        </Link>
        .
      </p>

      <table>
        <thead>
          <tr>
            <th>Trigger</th>
            <th>Is a CA legally required?</th>
            <th>Main filings or decisions involved</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Choosing a structure and incorporating</td><td>No, but professional certification of MCA forms is needed</td><td>Structure, shareholding, SPICe+ forms, PAN and TAN</td></tr>
          <tr><td>2. Crossing the GST threshold</td><td>No</td><td>GST registration within 30 days of liability</td></tr>
          <tr><td>3. First tax notice</td><td>No, but representation matters</td><td>Reply, reconciliation, supporting evidence</td></tr>
          <tr><td>4. Audit becomes applicable</td><td>Yes</td><td>Statutory audit, tax audit, auditor appointment</td></tr>
          <tr><td>5. Hiring the first employees</td><td>No</td><td>TDS on salaries, quarterly TDS statements, PF and ESI</td></tr>
          <tr><td>6. Foreign investment</td><td>Advisable</td><td>Valuation, FC-GPR, annual FLA return</td></tr>
          <tr><td>7. Paying overseas vendors</td><td>Yes, where Form 146 applies</td><td>TDS on non-resident payments, Forms 145 and 146</td></tr>
          <tr><td>8. Selling property or a large asset</td><td>No, but often needed for NRI sellers</td><td>Capital gains, TDS, reinvestment exemptions</td></tr>
          <tr><td>9. Applying for a loan or facing due diligence</td><td>Often, for audited or certified figures</td><td>Financial statements, projections, certificates</td></tr>
          <tr><td>10. Books falling behind</td><td>No</td><td>Catch-up bookkeeping, monthly reporting</td></tr>
        </tbody>
      </table>

      <h2>1. Are you choosing a structure or incorporating?</h2>
      <p>
        The first decision, whether to run as a proprietorship, partnership,
        LLP, OPC or private limited company, affects tax, liability, fundraising
        and compliance cost for years. Incorporation itself happens through the
        SPICe+ forms on the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">
          MCA portal
        </a>
        , and certain forms need certification by a practising professional
        such as a chartered accountant, company secretary or cost accountant.
        Our{" "}
        <Link href="/company-registration-chennai">
          company registration service in Chennai
        </Link>{" "}
        explains each structure, and founders can avoid common errors with our
        list of{" "}
        <Link href="/blog/company-registration-mistakes-founders-make">
          company registration mistakes
        </Link>
        .
      </p>

      <h2>2. Has turnover crossed the GST threshold?</h2>
      <p>
        In Tamil Nadu, a supplier of only goods must register for GST once
        aggregate turnover crosses 40 lakh rupees in a financial year; for
        services, or a mix, the limit is 20 lakh rupees. Some businesses must
        register regardless of turnover, such as those making inter-state
        supplies of goods. Registration must be applied for within 30 days of
        becoming liable. The threshold is a trigger rather than a permanent
        exemption, as our post on{" "}
        <Link href="/blog/gst-threshold-is-a-trigger">
          why the GST threshold is a trigger
        </Link>{" "}
        explains. Official guidance is on the{" "}
        <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">
          GST portal
        </a>
        .
      </p>

      <h2>3. Have you received your first notice?</h2>
      <p>
        An intimation about a mismatch, a scrutiny notice or a GST show-cause
        notice is often the point at which a business first calls a CA. Every
        notice has a response date, and a reply that is late, incomplete or
        unsupported by records can turn a small query into a demand. Our posts
        on{" "}
        <Link href="/blog/why-income-tax-notices-issued">
          why income tax notices are issued
        </Link>{" "}
        and{" "}
        <Link href="/blog/gst-show-cause-notice-first-48-hours">
          the first 48 hours after a GST show-cause notice
        </Link>{" "}
        set out what to do before you draft anything.
      </p>

      <h2>4. Has an audit become applicable?</h2>
      <p>
        Every company must have its accounts audited by a chartered accountant
        in practice each year, whatever its turnover, and the board must
        appoint the first auditor within 30 days of incorporation. LLPs need an
        audit once turnover or contribution crosses the limits in the LLP
        rules. Separately, a business or profession must get a{" "}
        <Link href="/tax-audit-chennai">tax audit under Section 63</Link>{" "}
        (earlier Section 44AB) once its turnover or gross receipts cross the
        limits in that section. See our note on the{" "}
        <Link href="/blog/first-auditor-appointment-adt-1">
          first auditor appointment and Form ADT-1
        </Link>
        .
      </p>

      <h2>5. Are you hiring your first employees?</h2>
      <p>
        Once salaries are paid, the employer must deduct TDS where an
        employee&apos;s income is taxable, deposit it on time and file
        quarterly TDS statements, now Form 138 for salaries (earlier Form 24Q).
        Provident fund and ESI registration follow once headcount crosses the
        limits in those laws, and Tamil Nadu employers also deal with
        professional tax. Payroll errors compound month after month, so it pays
        to get the set-up right in the first payroll cycle: salary structure,
        declarations from employees, TAN, and a calendar of deposit and filing
        dates.
      </p>

      <h2>6. Is a foreign investor putting money in?</h2>
      <p>
        Foreign direct investment into an Indian company must be reported to
        the Reserve Bank of India. Shares issued to a foreign investor need a
        valuation, and Form FC-GPR is due within 30 days of allotment. After
        that, the company files an annual return on foreign liabilities and
        assets. Our posts on the{" "}
        <Link href="/blog/fc-gpr-filing-deadline">FC-GPR filing deadline</Link>{" "}
        and the{" "}
        <Link href="/blog/fla-return-due-date">FLA return due date</Link>{" "}
        cover the timelines.
      </p>

      <h2>7. Are you paying vendors or service providers abroad?</h2>
      <p>
        Payments to non-residents for software, consultancy, royalties or
        services may attract TDS under Section 393(2) of the Income-tax Act,
        2025 (earlier Section 195). Before the bank remits, it will usually ask
        for Form 145 (earlier Form 15CA) and, in many cases, a chartered
        accountant&apos;s certificate in Form 146 (earlier Form 15CB) confirming
        the tax position and any treaty relief claimed. These forms are filed
        on the{" "}
        <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer">
          income tax e-filing portal
        </a>
        .
      </p>

      <h2>8. Are you selling property or another large asset?</h2>
      <p>
        A sale of land, a flat, shares or a business brings capital gains
        computations, possible exemptions for reinvestment, and TDS by the
        buyer. Where the seller is a non-resident, the buyer deducts tax under
        Section 393(2), and the seller often needs help with lower deduction
        applications and repatriation. Our guide to{" "}
        <Link href="/blog/capital-gains-tax-property-sale">
          capital gains tax on property sales
        </Link>{" "}
        covers the basics.
      </p>

      <h2>9. Are you approaching a lender or an investor?</h2>
      <p>
        Banks ask for audited financial statements, projections and sometimes
        certificates on net worth or the use of funds. Investors run due
        diligence on books, tax filings and ROC compliance. Gaps found at this
        stage can delay or reduce funding, so a review before you approach
        them is worth the time.
      </p>
      <p>
        Typical gaps include GST returns that do not match the books, TDS
        deducted but not deposited, ROC forms filed late or not at all, and
        loans from directors or relatives that are not properly documented.
        Each of these can be fixed, but fixing them takes weeks, not days. A
        chartered accountant can also prepare projections that tie back to
        actual results, which lenders and investors tend to test closely.
      </p>

      <h2>10. Have your books fallen behind?</h2>
      <p>
        If bank statements have not been reconciled for months, GST returns are
        filed from estimates, or you cannot say how much cash you will have
        next quarter, the business has outgrown informal bookkeeping. Catching
        up, as described in our post on{" "}
        <Link href="/blog/catch-up-bookkeeping-how-long-what-to-send">
          catch-up bookkeeping
        </Link>
        , is the first step; monthly reporting through{" "}
        <Link href="/virtual-cfo-services">virtual CFO services</Link>{" "}
        is the next, for businesses that want regular numbers to make
        decisions with.
      </p>

      <h2>What should you do once a trigger applies?</h2>
      <p>
        Write down the trigger, the date it happened and any deadline it
        creates. Then speak to a chartered accountant before the deadline is
        close. To choose one, use the checks in our guide on{" "}
        <Link href="/blog/how-to-choose-a-chartered-accountant-in-chennai">
          how to choose a chartered accountant in Chennai
        </Link>
        .
      </p>
      <p>
        C S Rushil &amp; Co. is a{" "}
        <Link href="/">CA firm in Chennai</Link> with its office in J-Block,
        Anna Nagar. If one of these triggers has come up for your business,
        book a free 15-minute consultation through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
