import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "company-registration-mistakes-founders-make",
  title: "10 Company Registration Mistakes Founders Make",
  description:
    "Ten practical mistakes founders make when registering a private limited company, from vague objects and wrong capital to missed INC-20A and mixed funds.",
  date: "2027-01-05",
  excerpt:
    "Vague objects, inflated capital, a missed INC-20A, personal money mixed with company money: ten avoidable mistakes in a company's first year.",
  faqs: [
    {
      question: "What is the most common compliance mistake after incorporating a company?",
      answer:
        "Missing the INC-20A declaration is one of the most common. Under section 10A, a company with share capital must file it within 180 days of incorporation, confirming subscribers have paid for their shares. Until it is filed the company cannot commence business or borrow, and the default attracts a ₹50,000 penalty on the company plus penalties on officers.",
    },
    {
      question: "How much authorised capital should a new private limited company have?",
      answer:
        "There is no minimum paid-up capital for a private company, so authorised capital should reflect realistic needs for the next year or two: founder contributions, an ESOP pool and any planned funding. Setting it too high increases stamp duty and registration fees upfront, while setting it too low forces an early increase and an SH-7 filing.",
    },
    {
      question: "Can a director lend money to their own private limited company?",
      answer:
        "Yes. A private company can accept money from a director, and it is treated as an exempt deposit if the director gives a written declaration that the amount is not from borrowed funds, and the company discloses it in the board's report. Lending company money to directors is far more restricted under section 185, so the flow should normally run one way.",
    },
    {
      question: "Does a company with no business still need to file annual returns?",
      answer:
        "Yes. A company's financial statements in AOC-4 and annual return in MGT-7 or MGT-7A are due every year whether or not it trades. Late filing attracts an additional fee of ₹100 per day per form, and three continuous years of default disqualifies the directors. A company with no activity can instead apply for dormant status or strike-off.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Registering a private limited company through SPICe+ is a
        well-defined process. Most of the problems founders face come not from
        the filing itself but from choices made in a hurry before it, and
        compliance steps missed in the months after. These are ten mistakes we
        see repeatedly, with what to do instead.
      </p>

      <h2>1. Writing a vague, or overly narrow, object clause</h2>
      <p>
        The main objects in the Memorandum of Association should describe what
        the company actually does. A clause that says &quot;to carry on all
        kinds of business&quot; invites questions from the Registrar, banks
        and GST officers. One that describes only a single product can force
        an alteration as soon as the business evolves. In SPICe+ Part A the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">
          MCA allows up to three NIC codes
        </a>
        , with one as the main activity. Choose codes and objects that match
        the business you will run in the next few years.
      </p>

      <h2>2. Picking authorised capital without a reason</h2>
      <p>
        Some founders set a large authorised capital because it sounds
        impressive. Stamp duty and registration fees scale with authorised
        capital, so this costs money upfront for no benefit. Others pick the
        minimum and then need to increase it within months for an investor or
        ESOP pool, which means a shareholder resolution and an SH-7 filing.
        Base the figure on founder contributions, the ESOP pool and any
        planned round.
      </p>

      <h2>3. Splitting shares 50:50 with no plan for disagreement</h2>
      <p>
        Equal splits between two founders are common and can work. The risk is
        a deadlock with no tie-breaker, or one founder leaving early with half
        the company. A founders&apos; agreement with vesting, transfer
        restrictions and a deadlock mechanism, reflected in the articles,
        prevents most of these disputes.
      </p>

      <h2>4. Choosing directors without checking eligibility</h2>
      <p>
        Every company must have at least one director who has stayed in India
        for 182 days or more during the financial year. Founders who are
        abroad, or who travel heavily, should check this before incorporation.
        Directors also need a DIN and must keep their KYC current, which since
        31 March 2026 has moved to a three-year cycle with changes in contact
        details reported within 30 days.
      </p>

      <h2>5. Missing the INC-20A declaration</h2>
      <p>
        Section 10A requires a declaration in Form INC-20A within 180 days of
        incorporation, confirming that every subscriber has paid for their
        shares. The company cannot commence business or borrow until it is
        filed. The penalty is ₹50,000 for the company and ₹1,000 per day for
        each officer in default, up to ₹1 lakh, and a missed declaration can
        lead to the Registrar initiating strike-off. Deposit the subscription
        money promptly and file early.
      </p>

      <h2>6. Mixing personal and company money</h2>
      <p>
        Paying company expenses from a personal card, or company funds into a
        personal account, creates problems in the audit, in income-tax
        scrutiny and under the Companies Act. Money a director lends to a
        private company is an exempt deposit if the director declares in
        writing that it is not from borrowed funds. Money flowing the other way
        is restricted by section 185 and should not happen casually. Open the
        company bank account immediately, route everything through it, and
        reimburse genuine expenses with bills.
      </p>

      <h2>7. Using an unsuitable registered office</h2>
      <p>
        A residential address can be used as the registered office, but it
        needs proof of address and a no-objection from the owner. The
        Registrar can physically verify the registered office, and the INC-20A
        form requires photographs of the office with a director or key
        managerial person present. A virtual address that cannot receive
        notices, or where no one can be met, is a risk.
      </p>

      <h2>8. Skipping the first-month board formalities</h2>
      <p>
        The first board meeting must be held within 30 days of incorporation,
        and the board must appoint the first auditor within 30 days. Share
        certificates must be issued to subscribers within two months. Statutory
        registers, including the register of members, must be set up from day
        one. These are simple steps, but they are hard to reconstruct
        convincingly a year later.
      </p>

      <h2>9. Getting registrations out of sequence</h2>
      <p>
        Some founders apply for GST registration on day one without needing it,
        then miss nil returns and accumulate late fees. Others start invoicing
        inter-state customers without registration. Profession tax, EPF and
        ESI also have their own triggers as staff join. Map which registrations
        the business actually needs and when, rather than applying for
        everything or nothing.
      </p>

      <h2>10. Treating annual filings as optional for a quiet company</h2>
      <p>
        A company that has not started trading still has to hold an AGM, have
        its accounts audited and file AOC-4 and MGT-7 or MGT-7A each year.
        Late filing attracts an additional fee of ₹100 per day for each form.
        If financial statements or annual returns are not filed for three
        continuous financial years, section 164(2) disqualifies the directors
        from being reappointed or appointed in any company for five years. A
        company that genuinely has no activity can apply for dormant status, or
        for its name to be struck off, which is cleaner than letting penalties
        build.
      </p>

      <h2>Two less obvious mistakes</h2>
      <p>
        <strong>Assuming name approval protects the brand.</strong> When the
        MCA approves a company name, it confirms only that the name is
        available under company law. It does not give trademark rights. A
        third party with an earlier trademark can still object to your use of
        the name in trade. Run a trademark search before settling on a name,
        and file a trademark application for the brand you will actually use
        with customers.
      </p>
      <p>
        <strong>Not keeping minutes and registers.</strong> Board and
        shareholder decisions need to be minuted, and statutory registers such
        as the register of members and register of directors must be kept up
        to date. These records are what auditors, investors and banks rely on
        to see that allotments, appointments and borrowings were properly
        approved. Gaps here are among the most common findings in due
        diligence on early-stage companies.
      </p>

      <h2>How to recover if you have already made some of these mistakes</h2>
      <p>
        Most of these problems can be fixed. An object clause can be altered
        by special resolution with an MGT-14 filing. Authorised capital can be
        increased through SH-7. A missed INC-20A can be filed late with
        additional fees, although any penalty for the delay remains. Pending
        annual filings can be brought up to date year by year, and personal and
        company transactions can be untangled with proper documentation and
        reimbursement records. The cost of fixing grows with time, so it pays
        to act once the gap is noticed.
      </p>

      <h2>A short first-year checklist</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First board meeting</td>
            <td>Within 30 days of incorporation</td>
          </tr>
          <tr>
            <td>Appoint first auditor</td>
            <td>Within 30 days of incorporation</td>
          </tr>
          <tr>
            <td>Issue share certificates</td>
            <td>Within two months of incorporation</td>
          </tr>
          <tr>
            <td>File INC-20A</td>
            <td>Within 180 days of incorporation</td>
          </tr>
          <tr>
            <td>First AGM</td>
            <td>Within nine months of the end of the first financial year</td>
          </tr>
          <tr>
            <td>AOC-4 and MGT-7 or MGT-7A</td>
            <td>Within 30 and 60 days of the AGM respectively</td>
          </tr>
        </tbody>
      </table>
      <p>
        For the full set-up, see our{" "}
        <Link href="/company-registration-chennai">
          company registration in Chennai
        </Link>{" "}
        guide, and for ongoing filings our{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>.
        If you are about to incorporate and want your plan reviewed for these
        issues, you can{" "}
        <Link href="/contact">book a consultation with our team</Link>.
      </p>
    </>
  );
}
