import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "section-140-startup-tax-holiday",
  title: "Section 140 Startup Tax Holiday: Eligibility Guide",
  description:
    "The startup tax holiday under section 140 of the Income-tax Act, 2025 (formerly 80-IAC): eligibility, IMB certificate, ₹100 crore turnover cap, 3 of 10 years.",
  date: "2027-01-19",
  excerpt:
    "Section 140 of the Income-tax Act, 2025 carries forward the 80-IAC startup tax holiday. Who qualifies, what changed, and how to claim it properly.",
  faqs: [
    {
      question: "What is the startup tax holiday under section 140?",
      answer:
        "Section 140 of the Income-tax Act, 2025 allows an eligible start-up a deduction of 100% of the profits and gains from its eligible business for three consecutive tax years. The start-up chooses which three years to claim, out of the ten years beginning with the year of incorporation. It replaces section 80-IAC of the 1961 Act.",
    },
    {
      question: "Who is an eligible start-up under section 140?",
      answer:
        "An eligible start-up is a company or LLP engaged in eligible business that was incorporated on or after 1 April 2016 but before 1 April 2030, whose total turnover does not exceed ₹100 crore in the tax year for which the deduction is claimed, and which holds a certificate of eligible business from the Inter-Ministerial Board of Certification.",
    },
    {
      question: "Is DPIIT recognition enough to claim section 140?",
      answer:
        "No. DPIIT recognition is a first step, but the deduction also needs a separate certificate of eligible business from the Inter-Ministerial Board, applied for through the Startup India portal. The company or LLP must also meet the incorporation window, turnover limit and anti-abuse conditions in section 140, and have its accounts audited with the report furnished on time.",
    },
    {
      question: "Can a partnership firm claim the section 140 deduction?",
      answer:
        "No. Although partnership firms can be recognised as startups by DPIIT, section 140 defines an eligible start-up as a company or a limited liability partnership. A partnership firm that wants the tax holiday would need to operate through an LLP or company that meets all the conditions, including that it is not formed by splitting up or reconstructing an existing business.",
    },
    {
      question: "Is the turnover limit for the tax holiday the same as for DPIIT recognition?",
      answer:
        "No. The Income Tax Department's published text of section 140 caps total turnover at ₹100 crore in the tax year for which the deduction is claimed. DPIIT's startup recognition criteria use a separate limit of below ₹200 crore (₹300 crore for deep-tech startups). A startup can be DPIIT-recognised and still exceed the tax-holiday limit, so check both for the relevant year.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        For profitable startups, the most valuable tax incentive in India has
        long been the three-year tax holiday under section 80-IAC of the
        Income-tax Act, 1961. From 1 April 2026, the Income-tax Act, 2025
        applies, and the same incentive now sits in section 140. The structure
        is familiar, but the turnover limit has changed and the terminology has
        moved from previous years and assessment years to tax years.
      </p>

      <h2>What does section 140 allow?</h2>
      <p>
        The{" "}
        <a href="https://www.incometaxindia.gov.in/w/section-140-91" target="_blank" rel="noopener noreferrer">
          text of section 140 published by the Income Tax Department
        </a>{" "}
        provides that where the gross total income of an eligible start-up
        includes profits and gains from eligible business, a deduction of 100%
        of those profits is allowed for three consecutive tax years. The
        start-up chooses the three years, out of the ten years beginning with
        the year in which it is incorporated.
      </p>
      <p>
        The choice matters. Most startups make losses in early years, so the
        deduction is worth most in the first three consecutive profitable
        years within the ten-year window. Planning when to start the claim is
        a real decision, not a formality.
      </p>

      <h2>Who qualifies as an eligible start-up?</h2>
      <table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Requirement under section 140</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entity type</td>
            <td>Company or limited liability partnership</td>
          </tr>
          <tr>
            <td>Incorporation date</td>
            <td>On or after 1 April 2016 and before 1 April 2030</td>
          </tr>
          <tr>
            <td>Turnover</td>
            <td>Total turnover not exceeding ₹100 crore in the tax year for which the deduction is claimed</td>
          </tr>
          <tr>
            <td>Certification</td>
            <td>Certificate of eligible business from the Inter-Ministerial Board of Certification</td>
          </tr>
          <tr>
            <td>Nature of business</td>
            <td>Innovation, development or improvement of products, processes or services, or a scalable business model with high potential for employment or wealth creation</td>
          </tr>
        </tbody>
      </table>
      <p>
        The turnover figure is worth noting. The tax-holiday limit of ₹100
        crore is lower than the DPIIT recognition limit (below ₹200 crore, or
        ₹300 crore for deep-tech startups), so a recognised startup can still
        fall outside section 140. Check the current text of the section for any
        amendment before you plan around it.
      </p>

      <h2>How does DPIIT recognition fit in?</h2>
      <p>
        The tax holiday builds on startup recognition. Under the current{" "}
        <a href="https://www.startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html" target="_blank" rel="noopener noreferrer">
          Startup India recognition criteria
        </a>
        , private limited companies, partnership firms, LLPs and cooperative
        societies can be recognised for up to 10 years from incorporation, with
        turnover below ₹200 crore in every previous financial year, or higher
        limits for deep-tech startups. After recognition, the startup applies
        separately to the Inter-Ministerial Board for the certificate of
        eligible business.
      </p>
      <p>
        Two consequences follow. First, a partnership firm can be a recognised
        startup but cannot claim section 140, which is limited to companies and
        LLPs. Second, the DPIIT turnover limit and the section 140 limit are
        different, so a growing startup needs to check both. Our page on{" "}
        <Link href="/startup-india-registration-chennai">
          Startup India registration in Chennai
        </Link>{" "}
        explains the recognition process.
      </p>

      <h2>What are the anti-abuse conditions?</h2>
      <ul>
        <li>
          <strong>No splitting or reconstruction.</strong> The start-up must not
          be formed by splitting up or reconstructing a business already in
          existence. Moving an existing proprietorship or firm into a new
          company may fail this test.
        </li>
        <li>
          <strong>No transfer of used plant and machinery.</strong> It must not
          be formed by transferring previously used machinery or plant to a new
          business. Transfers up to 20% of the total value of plant and
          machinery are permitted, and certain imported machinery not
          previously used in India is not treated as used.
        </li>
        <li>
          <strong>Arm&apos;s length dealings.</strong> If goods or services move
          between the eligible business and another business of the same
          assessee at other than market value, profits are recomputed at market
          value. Arrangements with closely connected persons that produce
          excessive profits can be adjusted by the Assessing Officer.
        </li>
        <li>
          <strong>No double deduction.</strong> Profits claimed under section
          140 cannot also be claimed under other deductions in the same part of
          the Act, and the deduction cannot exceed the profits of the eligible
          business.
        </li>
      </ul>

      <h2>What compliance is needed to claim it?</h2>
      <p>
        Section 140 makes the deduction conditional on the accounts of the
        eligible business for the relevant tax year being audited by an
        accountant before the specified date, with the audit report in the
        prescribed form furnished by that date. Profits are computed as if the
        eligible business were the only source of income from the initial
        year onwards. In practice, a startup that intends to claim should keep:
      </p>
      <ul>
        <li>The DPIIT recognition certificate and the IMB certificate of eligible business.</li>
        <li>Clean, audited books with the eligible business clearly identifiable.</li>
        <li>Evidence that the business was not formed by splitting or reconstruction, and records of any plant and machinery transferred in.</li>
        <li>Transfer pricing support for transactions with group or related entities.</li>
      </ul>

      <h2>Applying for the IMB certificate</h2>
      <p>
        The application for the certificate of eligible business is made
        online through the Startup India portal after DPIIT recognition. The
        Inter-Ministerial Board looks at whether the business genuinely
        involves innovation, development or improvement of products,
        processes or services, or a scalable model with high potential for
        employment or wealth creation. Applications that succeed tend to have
        a few things in common:
      </p>
      <ul>
        <li>A clear explanation of the problem being solved and how the product or service is new or meaningfully better than existing options.</li>
        <li>Evidence of traction, such as customers, revenue, users, pilots or patents, rather than plans alone.</li>
        <li>Financial statements and income-tax returns that are consistent with the story being told.</li>
        <li>A business model that can scale beyond the founders&apos; own time, which is often the weak point for pure services businesses.</li>
      </ul>
      <p>
        Apply well before the year in which you intend to start claiming, so
        that the certificate is in hand when the return is filed.
      </p>

      <h2>Which years should you choose?</h2>
      <p>
        The deduction is 100% of eligible profits, so its value depends on
        profits in the chosen years. A startup that expects to break even in
        year four and grow sharply in years five to seven would usually want
        its three-year block to cover the high-profit years, not the
        break-even year. Because the years must be consecutive and fall within
        the first ten years from incorporation, revisit the choice each year
        with updated projections, and remember that the turnover limit is
        tested in each year for which the deduction is claimed.
      </p>

      <h2>Interaction with other tax provisions</h2>
      <p>
        A start-up company should model the holiday alongside its overall tax
        position. Under the 1961 Act, companies choosing the concessional
        corporate tax regime could not combine it with the 80-IAC deduction,
        and companies claiming the deduction could still face minimum
        alternate tax on book profits. Review how the corresponding provisions
        of the 2025 Act apply before choosing a regime. Startups that began
        claiming under section 80-IAC should also confirm how the transitional
        provisions treat the remaining years of their three-year block.
      </p>

      <h2>Practical sequence for founders</h2>
      <ol>
        <li>Incorporate as a private limited company or LLP with a genuinely new business.</li>
        <li>Obtain DPIIT recognition.</li>
        <li>Apply to the Inter-Ministerial Board for the certificate of eligible business, with a clear explanation of the innovation or scalable model.</li>
        <li>Keep audited books and identify the year in which the three-year claim should begin.</li>
        <li>Claim the deduction in the return for each chosen tax year, with the audit report furnished on time.</li>
      </ol>
      <p>
        For the structure itself, see our guide to{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>
        . If you are considering the startup tax holiday and want your
        eligibility and timing reviewed, you can{" "}
        <Link href="/contact">book a consultation with our team</Link>.
      </p>
    </>
  );
}
