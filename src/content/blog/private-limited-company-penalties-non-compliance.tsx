import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "private-limited-company-penalties-non-compliance",
  title: "Private Limited Company Penalties for Non-Compliance",
  description:
    "What a private limited company risks when filings slip: ₹100 per day late fees on AOC-4 and MGT-7, penalties, director disqualification and strike-off.",
  date: "2027-01-15",
  excerpt:
    "Missed annual filings cost more than late fees. How additional fees, penalties, section 164(2) disqualification and strike-off build up, and how to fix it.",
  faqs: [
    {
      question: "What is the late fee for filing AOC-4 and MGT-7 after the due date?",
      answer:
        "An additional fee of ₹100 per day of delay applies to each form, AOC-4 for financial statements and MGT-7 or MGT-7A for the annual return, on top of the normal filing fee. There is no upper cap on this additional fee, so a company that misses both forms for a year accumulates a substantial amount quickly.",
    },
    {
      question: "When are directors disqualified for non-filing?",
      answer:
        "Under section 164(2)(a) of the Companies Act, 2013, a person who is or has been a director of a company that has not filed financial statements or annual returns for any continuous period of three financial years becomes ineligible to be reappointed as a director of that company, or appointed in any other company, for five years.",
    },
    {
      question: "Can the Registrar strike off a company that is not filing returns?",
      answer:
        "Yes. Under section 248, the Registrar can remove a company's name if it has not commenced business within a year of incorporation, has not carried on business for two immediately preceding financial years without applying for dormant status, or has not filed the INC-20A declaration, among other grounds. Prolonged non-filing is often how such companies are identified.",
    },
    {
      question: "Are penalties lower for small companies and startups?",
      answer:
        "Yes. Section 446B provides that if a small company, one person company, producer company or start-up company defaults in specified provisions, including filing of financial statements and annual returns, the penalty is not more than half of the penalty otherwise specified, subject to maximum limits for the company and its officers. Additional filing fees still apply in full.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Private limited companies have a fixed annual compliance cycle: board
        meetings, an AGM, audited financial statements and annual returns
        filed with the Registrar of Companies. When the business is busy, or
        when it has gone quiet, these filings are easy to postpone. The cost of
        postponing grows in layers: daily additional fees first, then
        penalties, then consequences for the directors personally.
      </p>

      <h2>What are the annual filing deadlines?</h2>
      <table>
        <thead>
          <tr>
            <th>Filing</th>
            <th>Due date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual general meeting</td>
            <td>Within six months of the financial year end, usually by 30 September; the first AGM within nine months of the first year end</td>
          </tr>
          <tr>
            <td>AOC-4 (financial statements)</td>
            <td>Within 30 days of the AGM</td>
          </tr>
          <tr>
            <td>MGT-7 or MGT-7A (annual return)</td>
            <td>Within 60 days of the AGM</td>
          </tr>
          <tr>
            <td>ADT-1 (auditor appointment at AGM)</td>
            <td>Within 15 days of the meeting</td>
          </tr>
          <tr>
            <td>Director KYC</td>
            <td>Under the three-year cycle effective from 31 March 2026, by 30 June of the applicable year</td>
          </tr>
        </tbody>
      </table>
      <p>
        The{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/annual-filing/aoc-4-and-linked-filings.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s AOC-4 help pages
        </a>{" "}
        explain how AGM dates and extended due dates flow into the forms.
      </p>

      <h2>Layer 1: additional fees of ₹100 per day</h2>
      <p>
        Since July 2018, forms filed under sections 92 and 137 after their due
        date attract an additional fee of ₹100 for every day of delay, for each
        form. That covers AOC-4 and MGT-7 or MGT-7A. The fee has no upper limit,
        so a company that misses both forms by a year faces roughly ₹73,000 in
        additional fees before any penalty is considered. This is a fee for
        accepting the late filing; it is not a substitute for penalties.
      </p>

      <h2>Layer 2: penalties on the company and its officers</h2>
      <p>
        Many offences under the Companies Act were converted into civil
        penalties, adjudicated by the Registrar under section 454. The main
        penalties relevant to annual compliance:
      </p>
      <table>
        <thead>
          <tr>
            <th>Default</th>
            <th>Company</th>
            <th>Officers in default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Not filing financial statements (section 137)</td>
            <td>₹10,000 plus ₹100 per day of continuing default, up to ₹2 lakh</td>
            <td>₹10,000 plus ₹100 per day, up to ₹50,000</td>
          </tr>
          <tr>
            <td>Not filing annual return (section 92)</td>
            <td>₹10,000 plus ₹100 per day of continuing default, up to ₹2 lakh</td>
            <td>₹10,000 plus ₹100 per day, up to ₹50,000</td>
          </tr>
          <tr>
            <td>Not holding the AGM (section 99)</td>
            <td>₹1 lakh plus ₹5,000 per day of continuing default</td>
            <td>Same as the company</td>
          </tr>
          <tr>
            <td>Not filing INC-20A (section 10A)</td>
            <td>₹50,000</td>
            <td>₹1,000 per day, up to ₹1 lakh</td>
          </tr>
        </tbody>
      </table>
      <p>
        Under section 446B, small companies, one person companies, producer
        companies and start-up companies pay not more than half of these
        penalties for specified defaults, subject to caps. The additional filing
        fees apply in full regardless.
      </p>

      <h2>Layer 3: director disqualification under section 164(2)</h2>
      <p>
        If a company fails to file its financial statements or annual returns
        for any continuous period of three financial years, every person who is
        or has been a director of that company becomes ineligible to be
        reappointed as its director, or appointed as a director of any other
        company, for five years from the date the company fails to file.
      </p>
      <p>
        The consequences spread beyond the defaulting company. Under section
        167, the disqualified director&apos;s office in other companies falls
        vacant, and the director&apos;s DIN may be flagged on the MCA portal,
        blocking filings in which they are named. Founders with several
        companies sometimes discover this only when a filing in a healthy
        company is rejected.
      </p>

      <h2>Layer 4: strike-off of the company</h2>
      <p>
        Section 248 allows the Registrar to remove a company&apos;s name from
        the register where it has reasonable cause to believe that:
      </p>
      <ul>
        <li>The company has failed to commence business within one year of incorporation.</li>
        <li>It has not carried on business or operations for two immediately preceding financial years and has not applied for dormant status.</li>
        <li>Subscribers have not paid their subscription and the INC-20A declaration has not been filed within 180 days.</li>
        <li>It is not carrying on business, as revealed after physical verification.</li>
      </ul>
      <p>
        The Registrar issues a notice before striking off, and the company can
        respond. Once struck off, the company cannot operate its bank accounts
        or enforce contracts normally, and restoring it requires an application
        to the National Company Law Tribunal. Directors of a struck-off company
        can also face disqualification where filings were in default.
      </p>

      <h2>Other defaults that attract penalties</h2>
      <p>
        Annual filings are the most common problem, but not the only one.
        Other everyday defaults with their own consequences include:
      </p>
      <ul>
        <li>
          <strong>Registered office.</strong> Failing to maintain a registered
          office capable of receiving communications, or to notify a change,
          attracts a penalty of ₹1,000 per day of default, up to ₹1 lakh, for
          the company and each officer in default.
        </li>
        <li>
          <strong>Director KYC.</strong> A DIN for which KYC is not filed when
          due is deactivated, and reactivation or late filing attracts a fee of
          ₹5,000 under the fee rules as amended in April 2026.
        </li>
        <li>
          <strong>Charges.</strong> A charge not registered within the time
          allowed needs additional fees or condonation, and an unregistered
          charge is not taken into account by a liquidator against other
          creditors.
        </li>
        <li>
          <strong>Return of allotment.</strong> PAS-3 filed late attracts
          additional fees and can lead to penalty proceedings under the
          provisions on allotment.
        </li>
      </ul>

      <h2>A simple illustration of how fees build up</h2>
      <p>
        Take a small private company that misses both AOC-4 and MGT-7 for one
        year and files them 200 days late. The additional fee alone is ₹100 per
        day for each form, or ₹20,000 per form and ₹40,000 in total, before
        normal filing fees. If the Registrar initiates adjudication, penalties
        under sections 137 and 92 are added, halved under section 446B for a
        small company but still applied to both the company and its officers.
        Leave it for three years and the directors face disqualification.
        These figures are illustrative; the portal computes the actual fees at
        the time of filing.
      </p>

      <h2>What should a company in default do?</h2>
      <ol>
        <li><strong>Take stock.</strong> List every year and form pending, including AOC-4, MGT-7, ADT-1 and INC-20A.</li>
        <li><strong>Complete the underlying work.</strong> Accounts must be prepared and audited and meetings held, or regularised, before forms can be filed.</li>
        <li><strong>File the oldest years first,</strong> paying additional fees as the portal computes them.</li>
        <li><strong>Watch for relief schemes.</strong> MCA has from time to time announced schemes reducing additional fees for pending filings. Check whether one is open before filing.</li>
        <li><strong>Address adjudication notices</strong> from the Registrar promptly, as penalties are often lower where defaults are made good.</li>
        <li><strong>If the company has no future,</strong> consider dormant status under section 455 or voluntary strike-off in Form STK-2 once pending filings are dealt with.</li>
      </ol>

      <h2>Staying out of trouble</h2>
      <p>
        Most defaults happen because no one owns the calendar. A fixed annual
        compliance plan, with the audit scheduled well before September,
        prevents almost all of them. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service and{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        are built around that calendar. If your company has pending filings and
        you want a clear plan to regularise them, you can{" "}
        <Link href="/contact">speak with our team</Link>.
      </p>
    </>
  );
}
