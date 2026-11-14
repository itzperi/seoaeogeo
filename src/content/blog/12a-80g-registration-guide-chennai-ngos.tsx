import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "12a-80g-registration-guide-chennai-ngos",
  title: "12A and 80G Registration: Step-by-Step for Chennai NGOs",
  description:
    "How Chennai trusts, societies and Section 8 companies register under 12A and 80G for tax exemption and donor deductions, and how provisional approval works.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "12A exempts your NGO's income; 80G lets your donors claim a deduction. Most Chennai NGOs need both, and here's the process.",
  faqs: [
    {
      question: "What's the difference between 12A and 80G registration?",
      answer:
        "12A registration exempts the NGO's own income, applied to its charitable purposes, from income tax. 80G approval allows donors to claim a tax deduction for their donations. They serve different purposes and most functioning NGOs need both. From 1 April 2026, they are granted under Sections 332 and 354 of the Income-tax Act, 2025.",
    },
    {
      question: "Is 12A/80G registration permanent?",
      answer:
        "No. Since the 2021 changes, registrations are granted for a fixed period and must be renewed before they expire. Provisional registration runs for three years, and regular registration for five years or, where the conditions in Section 332(5) of the 2025 Act are met, ten years. Old open-ended registrations had to be revalidated.",
    },
    {
      question: "Can a newly formed NGO apply for 12A and 80G immediately?",
      answer:
        "Yes. A newly formed trust, society or Section 8 company can apply for provisional registration straight after formation, before it has started activities. Provisional registration is valid for three years. The NGO must then apply for regular registration on the basis of its actual activities before the provisional period ends, or earlier if activities start sooner.",
    },
    {
      question: "When should an NGO apply for regular registration?",
      answer:
        "Under the rules that applied up to tax year 2025-26, an NGO with provisional registration applies for regular registration in Form 10AB at least six months before the provisional period expires, or within six months of starting its activities, whichever is earlier. Renewals are also due at least six months before expiry. Check the current form under the 2025 Act.",
    },
    {
      question: "What compliance continues after 12A and 80G registration?",
      answer:
        "The NGO keeps proper books, gets its accounts audited where required, files its income tax return every year, applies its income to its objects within the limits allowed, and, with 80G approval, files an annual statement of donations received and issues donation certificates to donors. Missing these can put the exemption and approval at risk.",
    },
  ],
  summary:
    "12A registration exempts an NGO's income applied to charitable purposes from tax, while 80G lets donors claim a deduction. A new trust, society or Section 8 company first gets provisional registration, valid for three years, then regular registration based on actual activities, then renews it on time. From tax year 2026-27, these sit in Sections 332 and 354.",
};

export default function Body() {
  return (
    <>
      <p>
        A Chennai NGO needs two separate approvals: 12A registration, which exempts its own income from tax, and 80G
        approval, which lets donors claim a deduction. A new trust, society or Section 8 company applies for provisional
        registration, valid for three years, then for regular registration based on actual activities, and renews it
        before expiry.
      </p>

      <p>
        A trust, society or Section 8 company can be legally formed and still owe income tax, and struggle to attract
        donations, if it has not completed 12A and 80G registration. These two approvals are what actually unlock the tax
        benefits people associate with non-profits, and since 2021 neither is permanent.
      </p>

      <h2>What does 12A registration do for the organisation?</h2>
      <p>
        Without 12A registration, an NGO&apos;s income, including donations received, is taxable like any other
        entity&apos;s income. Registration exempts income applied to the organisation&apos;s charitable or religious
        purposes. The exemption comes with conditions: broadly, at least 85 percent of the year&apos;s income must be
        applied to the objects, with limited accumulation allowed, and the money must not benefit trustees or related
        persons.
      </p>

      <h2>What does 80G approval do for donors?</h2>
      <p>
        80G approval does not change the NGO&apos;s own tax position. It allows individuals and businesses donating to
        the NGO to claim a deduction on their own taxable income. In practice it is a major fundraising lever,
        especially for corporate donors. Note that individual donors who use the new tax regime, which is the default,
        generally cannot claim this deduction, so it matters most to donors who stay in the old regime and to companies.
      </p>

      <h2>Which law and section apply now?</h2>
      <p>
        The Income-tax Act, 2025 applies from 1 April 2026, for tax year 2026-27 onwards. Registration of charitable
        institutions is now granted under Section 332 and approval for donor deductions under Section 354, in place of
        Sections 12A, 12AB and 80G of the 1961 Act. Earlier years, and applications already decided, remain under the
        1961 numbering, so both sets of references will be seen on certificates for some time. Our{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping">1961 to 2025 section mapping</Link> explains how the
        renumbering works.
      </p>

      <h2>What are the stages of registration?</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>When to apply</th>
            <th>Validity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provisional registration (Form 10A under the 1961 rules)</td>
            <td>After formation, before activities begin</td>
            <td>Three years</td>
          </tr>
          <tr>
            <td>Regular registration (Form 10AB under the 1961 rules)</td>
            <td>At least six months before provisional registration expires, or within six months of starting activities, whichever is earlier</td>
            <td>Five years, or ten years where Section 332(5) conditions are met</td>
          </tr>
          <tr>
            <td>Renewal</td>
            <td>At least six months before the current registration expires</td>
            <td>A fresh validity period</td>
          </tr>
        </tbody>
      </table>
      <p>
        Applications are made online on the{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/income-tax-forms" target="_blank" rel="noopener noreferrer">income tax e-filing portal</a>,
        which lists the current statutory forms. Form numbers have changed under the 2025 rules, so confirm the right
        form there before filing.
      </p>

      <h2>What is the step-by-step process?</h2>
      <ol>
        <li>Complete formation of the entity: trust deed registration, society registration, or <Link href="/section-8-company-registration-chennai">Section 8 company incorporation in Chennai</Link>.</li>
        <li>Obtain a PAN for the entity and open a bank account in its name.</li>
        <li>Apply for provisional 12A registration on the e-filing portal, attaching the deed or constitution and details of objects and trustees.</li>
        <li>Apply for provisional 80G approval, usually alongside 12A.</li>
        <li>Operate during the provisional period while maintaining <Link href="/bookkeeping-services-chennai">proper books of account</Link>, activity records, photographs, reports and donation receipts.</li>
        <li>Apply for regular registration within the time limit, supported by evidence of actual charitable activity and accounts.</li>
        <li>Track the expiry date and renew before each validity period lapses.</li>
      </ol>

      <h2>Which documents are needed for the application?</h2>
      <ul>
        <li>The registered trust deed, society bye-laws, or the memorandum and articles of a Section 8 company</li>
        <li>The registration certificate of the entity and its PAN</li>
        <li>PAN and identity details of trustees, governing body members or directors</li>
        <li>A note on the activities carried out or planned, with supporting reports where activities have started</li>
        <li>Financial statements for the years since formation, if any, and bank statements</li>
        <li>Details of any earlier registration or approval under the income tax law</li>
      </ul>
      <p>
        Keep the names, addresses and objects identical across these documents. Small inconsistencies are one of the
        most frequent reasons the department asks for clarification.
      </p>

      <h2>What compliance continues after registration?</h2>
      <ul>
        <li>Keep books of account and get them audited where the law requires, with the audit report filed before the return.</li>
        <li>File the income tax return every year, even if all income is exempt.</li>
        <li>With 80G approval, file an annual statement of donations received (Form 10BD under the 1961 rules, by 31 May) and issue donation certificates (Form 10BE) to donors.</li>
        <li>Record any change in objects and report it, since a change can require fresh registration.</li>
        <li>For CSR funding, register on the MCA in Form CSR-1, which requires 12A and 80G registration.</li>
      </ul>

      <h2>What common mistakes delay approval?</h2>
      <ul>
        <li>Objects clauses in the trust deed or governing document that are vague or do not clearly state a charitable purpose</li>
        <li>Missing or inconsistent financial records from the period before applying</li>
        <li>Applying for regular registration without evidence of actual activity during the provisional period</li>
        <li>Missing the deadline for regular registration or renewal, which can leave the NGO without exemption</li>
        <li>Mismatched names, addresses or trustee details between the deed, PAN and application</li>
      </ul>

      <h2>Is FCRA part of the same process?</h2>
      <p>
        No. If your NGO expects donations from foreign sources, Foreign Contribution (Regulation) Act registration is a
        completely separate approval from the Ministry of Home Affairs, with its own eligibility conditions, bank
        account rules and annual return. Our guide to{" "}
        <Link href="/blog/fcra-registration">FCRA registration for Chennai NGOs</Link> covers it.
      </p>

      <p>
        Our <Link href="/trust">Trust &amp; NGO registration service</Link> handles formation, 12A and 80G
        applications, and renewal tracking so your organisation does not slip into taxable status. To discuss your
        NGO&apos;s position, book a free 15-minute consultation with C S Rushil &amp; Co. in Anna Nagar.
      </p>
    </>
  );
}
