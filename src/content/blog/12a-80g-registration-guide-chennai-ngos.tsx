import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "12a-80g-registration-guide-chennai-ngos",
  title: "12A and 80G Registration: A Step-by-Step Guide for Chennai NGOs",
  description:
    "How Chennai trusts, societies, and Section 8 companies can register under 12A and 80G to unlock tax exemption and donor deductions.",
  date: "2026-11-25",
  excerpt:
    "12A exempts your NGO's income; 80G lets your donors claim a deduction. Most Chennai NGOs need both — here's the process.",
  faqs: [
    {
      question: "What's the difference between 12A and 80G registration?",
      answer:
        "12A registration exempts the NGO's own income from income tax. 80G registration allows the NGO's donors to claim a tax deduction for their donations. They serve different purposes and most functioning NGOs need both.",
    },
    {
      question: "Is 12A/80G registration permanent?",
      answer:
        "No — since 2021, both registrations are granted for a limited validity period (typically 5 years) and must be renewed before expiry, rather than being a one-time permanent registration as it was under the older rules.",
    },
    {
      question: "Can a newly formed NGO apply for 12A and 80G immediately?",
      answer:
        "Yes, a newly formed trust, society, or Section 8 company can apply for provisional registration immediately after formation, which is typically valid for 3 years before conversion to regular registration based on actual activities.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A Chennai trust, society, or Section 8 company can be legally formed
        and still owe income tax and struggle to attract donations if it
        hasn&apos;t completed 12A and 80G registration. These two approvals are
        what actually unlock the tax benefits people associate with
        non-profits.
      </p>

      <h2>12A: exemption for the organisation&apos;s own income</h2>
      <p>
        Without 12A registration, an NGO&apos;s income — including donations
        received — is taxable like any other entity&apos;s income. 12A
        registration under the Income Tax Act exempts income applied toward
        the organisation&apos;s charitable or religious purposes from tax.
      </p>

      <h2>80G: deduction for the donor</h2>
      <p>
        80G registration doesn&apos;t change the NGO&apos;s own tax position —
        it allows individuals and businesses donating to the NGO to claim a
        deduction on their own taxable income. In practice, this is a major
        fundraising lever: donors, especially corporate CSR contributors, are
        far more likely to give when they can claim a deduction.
      </p>

      <h2>Step-by-step process</h2>
      <ol>
        <li>Complete formation of the entity (Trust deed registration, Society registration, or Section 8 Company incorporation).</li>
        <li>Apply for provisional 12A registration via Form 10A on the income tax e-filing portal — this is typically fast for newly formed entities.</li>
        <li>Apply for provisional 80G registration (also Form 10A), usually alongside 12A.</li>
        <li>Operate for the provisional period (commonly 3 years) while maintaining proper books, activity records, and donation receipts.</li>
        <li>Apply for regular registration via Form 10AB before the provisional period expires, supported by evidence of actual charitable activity.</li>
        <li>Renew regular registration before each validity period (typically 5 years) lapses.</li>
      </ol>

      <h2>Common mistakes that delay approval</h2>
      <ul>
        <li>Trust deed or governing document objects clauses that are too vague or don&apos;t clearly state charitable purpose</li>
        <li>Missing or inconsistent financial records from the period before applying</li>
        <li>Applying for regular registration without sufficient evidence of actual activity during the provisional period</li>
        <li>Letting the registration lapse by missing the renewal window — this is treated as a fresh application, not a simple renewal</li>
      </ul>

      <h2>FCRA — a separate consideration</h2>
      <p>
        If your NGO expects to receive donations from foreign sources, note
        that FCRA (Foreign Contribution Regulation Act) registration is a
        completely separate approval process from 12A/80G, with its own
        eligibility conditions and compliance obligations.
      </p>

      <p>
        Our <a href="/trust">Trust &amp; NGO registration service</a> handles
        formation, 12A/80G applications, and renewal tracking so your
        organisation doesn&apos;t inadvertently lapse into taxable status.
      </p>
    </>
  );
}
