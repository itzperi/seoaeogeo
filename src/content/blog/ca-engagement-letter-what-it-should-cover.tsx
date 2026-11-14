import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Neutral guide to engagement letter clauses. No amounts or fee ranges
// anywhere (owner's brief); fees are discussed only as structure.
export const meta: BlogPostMeta = {
  slug: "ca-engagement-letter-what-it-should-cover",
  title: "CA Engagement Letter: What It Should Cover Before You Sign",
  description:
    "What a CA firm's engagement letter should cover: scope, deliverables, timelines, responsibilities, confidentiality, itemised fees, scope changes and exit.",
  date: "2026-11-14",
  excerpt:
    "Scope, exclusions, deliverables, timelines, who does what, confidentiality, an itemised quote with government fees shown separately, scope changes and termination: the clauses to read before you sign.",
  summary:
    "A CA engagement letter should state the exact scope and exclusions, the deliverables and timelines, what you and the firm are each responsible for, how your data is kept confidential, an itemised quote with government fees separate from professional fees, how scope changes are approved, and how either side can end the engagement and hand over records.",
  faqs: [
    {
      question: "Is an engagement letter with a CA mandatory?",
      answer:
        "For audits, yes in substance. ICAI's Standard on Auditing 210 requires the auditor and management to agree the terms of an audit engagement in an engagement letter or another suitable written form. For tax, GST, bookkeeping and advisory work there is no single legal requirement, but a written letter is good practice and protects both you and the firm.",
    },
    {
      question: "Should government fees be included in a CA's quote?",
      answer:
        "They should be shown, but separately. Government fees such as MCA filing fees, stamp duty and statutory late fees are paid to the authorities, not to the firm. A clear quote lists the firm's professional fees for each service on one side and government fees, passed through at actual cost, on the other, so you can see exactly what the firm charges for its own work.",
    },
    {
      question: "What happens if I need work that is not in the engagement letter?",
      answer:
        "The letter should say. Usually the firm tells you in writing that the request falls outside the agreed scope, gives you an estimate, and starts only after you approve it. Common examples are replying to a notice, filing a revised return, or adding a new entity. Agreeing this process upfront prevents surprise invoices and arguments later.",
    },
    {
      question: "Can I end an engagement with my CA firm midway?",
      answer:
        "Generally yes, on the notice period in the letter, with fees settled for work already done. The letter should also cover how your books, documents and portal access will be handed back. A company's statutory auditor is different: removal or resignation must follow Section 140 of the Companies Act, 2013, including the prescribed filings.",
    },
    {
      question: "Who owns the working papers prepared by my CA?",
      answer:
        "Your books of account, vouchers and records remain yours and should be returned when the engagement ends. Under ICAI's standards, an auditor's working papers belong to the auditor, who may share extracts at their discretion. A good engagement letter says which documents will be returned, in what form, and how long the firm will retain its own copies.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        An engagement letter with a CA firm should set out the exact scope of
        work and what is excluded, the deliverables and deadlines, what you and
        the firm are each responsible for, how your information is kept
        confidential, an itemised fee structure with government fees shown
        separately, how scope changes are approved, and how either side can end
        the engagement.
      </p>
      <p>
        Reading it carefully takes a few minutes and avoids most of the
        disputes that arise between businesses and their accountants. This
        guide goes through each clause. If you are still choosing a firm, the
        wider checks are in our guide on{" "}
        <Link href="/blog/how-to-choose-a-chartered-accountant-in-chennai">
          how to choose a chartered accountant in Chennai
        </Link>
        .
      </p>

      <h2>What is a CA engagement letter?</h2>
      <p>
        It is a written agreement between you and the chartered accountancy
        firm that records what the firm will do, on what terms, and what it
        needs from you. It is usually issued by the firm after an initial
        discussion and signed by both sides before work starts. Some firms
        issue one letter per service; others issue a single letter with a
        schedule for each service.
      </p>

      <h2>Is an engagement letter legally required?</h2>
      <p>
        For audits, the terms must be agreed in writing. ICAI&apos;s Standard on
        Auditing (SA) 210, Agreeing the Terms of Audit Engagements, requires the
        auditor and management to record the agreed terms in an engagement
        letter or another suitable written form. The standards are published on
        the{" "}
        <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer">
          ICAI website
        </a>
        . For a company&apos;s{" "}
        <Link href="/statutory-audit-chennai">statutory audit</Link>, the
        appointment itself is made under the Companies Act, 2013 and reported
        to the Registrar on Form ADT-1 through the{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer">
          MCA portal
        </a>
        , but that filing does not replace the engagement letter. For tax,
        GST, bookkeeping and advisory work, a written letter is not mandated by
        a single rule, but it is the clearest way to avoid misunderstandings.
      </p>

      <h2>What should the scope section say?</h2>
      <p>
        Scope is the clause that causes the most disputes, so it should be
        specific. A good scope section names:
      </p>
      <ul>
        <li>The entity or individual covered, with PAN or CIN where relevant</li>
        <li>Each service by name, for example GST returns, income tax return, ROC annual filings or monthly bookkeeping</li>
        <li>The period covered, such as tax year 2026-27 or the financial year ending 31 March 2027</li>
        <li>The volume assumptions behind the work, such as the number of bank accounts, invoices or employees</li>
        <li>What is excluded, stated plainly</li>
      </ul>
      <p>
        Exclusions are as important as inclusions. Typical exclusions are
        replies to notices, appeals, revised returns, work for group companies
        and catch-up work for earlier years. If something you expected is not
        listed, ask before signing.
      </p>
      <p>
        Volume assumptions deserve a second look. If the scope assumes one
        bank account and a modest number of invoices a month, and your
        business already runs three accounts with several hundred invoices,
        the letter will not reflect the real work. Correcting the assumptions
        now is easier than renegotiating after the first quarter&apos;s
        filings.
      </p>

      <h2>What deliverables and timelines should it list?</h2>
      <p>
        Each service should map to a deliverable you can recognise: a filed
        return with acknowledgement, a signed audit report, monthly management
        accounts, or a reconciliation. Timelines should be tied to statutory due
        dates where they exist, and they should also say by when you must send
        documents for the firm to meet those dates. A deadline that depends on
        your documents arriving on time should say so.
      </p>

      <h2>How should responsibilities be divided?</h2>
      <p>
        The letter should make clear that you, as the business owner or
        management, are responsible for the accuracy and completeness of the
        records you provide and for the final decisions on your filings. The
        firm is responsible for doing the agreed work with due care and in line
        with professional standards. It should also cover:
      </p>
      <ul>
        <li>Who in the firm is your main contact, and who reviews and signs the work</li>
        <li>How portal logins and your digital signature certificate will be held and used</li>
        <li>Whether filings will be shared with you as drafts for approval before submission</li>
        <li>How and when the firm will communicate deadlines and missing documents</li>
      </ul>

      <h2>What should it say about confidentiality and data?</h2>
      <p>
        Chartered accountants are bound by ICAI&apos;s professional rules on
        confidentiality, but the letter should still describe the practical
        arrangements: how documents are shared and stored, who can access them,
        and how data is returned or deleted at the end. The Digital Personal
        Data Protection Act, 2023 has made this a reasonable expectation for
        anyone handling personal data such as PAN, Aadhaar and salary details.
      </p>

      <h2>How should fees be shown?</h2>
      <p>
        The fee section should describe the structure clearly enough that you
        can predict your invoices. Look for:
      </p>
      <ul>
        <li>Professional fees itemised by service, rather than one lump sum</li>
        <li>Government fees, such as MCA filing fees, stamp duty and statutory late fees, listed separately and passed through at actual cost</li>
        <li>Out-of-pocket expenses and how they are approved</li>
        <li>Whether GST is charged on professional fees</li>
        <li>The billing cycle (monthly, per filing or per engagement) and payment terms</li>
      </ul>
      <p>
        Separating government fees matters because they are set by law and
        are the same whichever professional you use; our post on{" "}
        <Link href="/blog/government-fees-company-registration">
          government fees for company registration
        </Link>{" "}
        shows how they are calculated for one common case. ICAI&apos;s ethical
        rules generally do not allow fees that depend on the findings or
        results of the work, so a fee linked to the size of a refund is a
        reason to ask questions.
      </p>

      <h2>How are scope changes handled?</h2>
      <p>
        Business needs change mid-year: a notice arrives, a new branch opens,
        or the number of transactions doubles. The letter should set out a
        simple change process. The firm flags in writing that a request is
        outside scope, gives an estimate, and starts only after you approve.
        This applies equally to ongoing services such as{" "}
        <Link href="/bookkeeping-services-chennai">bookkeeping services</Link>
        , where volumes can grow quietly, and to one-time projects.
      </p>

      <h2>How can either side end the engagement?</h2>
      <p>
        A termination clause should state the notice period, how fees for
        work in progress are settled, and how records are handed back,
        including books of account, documents you supplied and portal access.
        It should also say how long the firm will keep its own copies. A
        company&apos;s statutory auditor cannot simply be dropped or walk away:
        removal and resignation follow Section 140 of the Companies Act, 2013,
        and an incoming auditor must communicate with the outgoing auditor in
        writing before accepting the appointment.
      </p>

      <h2>What does a quick checklist look like?</h2>
      <table>
        <thead>
          <tr>
            <th>Clause</th>
            <th>What to look for</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Parties</td><td>Firm name, FRN, responsible partner, and your entity details</td></tr>
          <tr><td>Scope</td><td>Each service, period and volume assumption, with exclusions listed</td></tr>
          <tr><td>Deliverables and timelines</td><td>Output for each service, due dates, and your document deadlines</td></tr>
          <tr><td>Responsibilities</td><td>Your records and approvals; the firm&apos;s work and review; DSC and login handling</td></tr>
          <tr><td>Confidentiality and data</td><td>How documents are shared, stored, returned or deleted</td></tr>
          <tr><td>Fees</td><td>Itemised professional fees; government fees separate at actual cost; billing terms</td></tr>
          <tr><td>Scope changes</td><td>Written flag, estimate and your approval before extra work</td></tr>
          <tr><td>Termination</td><td>Notice period, settlement of fees, handover of records</td></tr>
        </tbody>
      </table>

      <h2>How does this work at our firm?</h2>
      <p>
        C S Rushil &amp; Co. is a{" "}
        <Link href="/">CA firm in Chennai</Link> based in J-Block, Anna Nagar.
        Every engagement starts with a written engagement letter covering the
        points above, as described on our{" "}
        <Link href="/how-we-work">how we work</Link> page. To talk through what
        your letter should include, book a free 15-minute consultation through
        our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
