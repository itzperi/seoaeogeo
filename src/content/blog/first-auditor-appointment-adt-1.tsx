import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "first-auditor-appointment-adt-1",
  title: "Appointing a Company's First Auditor: Rules and ADT-1",
  description:
    "How the first auditor of a company is appointed under section 139(6), the 30-day board deadline, whether ADT-1 must be filed, and what to do if it is missed.",
  date: "2026-11-24",
  excerpt:
    "The board must appoint the first auditor within 30 days of incorporation. How the rule works, the ADT-1 position, and the fix if the deadline is missed.",
  faqs: [
    {
      question: "Who appoints the first auditor of a company and by when?",
      answer:
        "Under section 139(6) of the Companies Act, 2013, the Board of Directors appoints the first auditor of a company, other than a government company, within thirty days from the date of registration. The first auditor holds office until the conclusion of the first annual general meeting, where the shareholders appoint the auditor for the following term.",
    },
    {
      question: "Is filing ADT-1 mandatory for the first auditor?",
      answer:
        "The MCA's ADT forms FAQ notes that rule 4(2) of the Companies (Audit and Auditors) Rules, 2014 refers to section 139(1) and not to section 139(6), so ADT-1 is not strictly mandatory for the first auditor. However, the MCA recommends filing ADT-1 even for the first auditor, and doing so avoids complications later.",
    },
    {
      question: "What if the board does not appoint the first auditor within 30 days?",
      answer:
        "Section 139(6) provides that if the board fails to appoint the first auditor, it must inform the members, who must appoint the auditor within ninety days at an extraordinary general meeting. The auditor appointed by members holds office until the conclusion of the first annual general meeting. Missing both steps is a default under the Act.",
    },
    {
      question: "What period should be shown in ADT-1 for a first auditor?",
      answer:
        "The MCA's ADT forms FAQ says that for a first auditor appointment, the start date of the period of accounts should be the date of incorporation and the end date should be the end of the financial year. For example, a company incorporated on 15 August 2025 would show 15/08/2025 to 31/03/2026.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Appointing an auditor is one of the first tasks after incorporation, and
        it has a short deadline. The rules for the first auditor differ from
        later appointments: the board makes the appointment rather than the
        shareholders, and the filing position on ADT-1 has some nuance. This
        post explains the requirement and how to handle it correctly.
      </p>

      <h2>The rule: section 139(6)</h2>
      <p>
        Section 139(6) of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        says that the first auditor of a company, other than a government
        company, shall be appointed by the Board of Directors within thirty days
        from the date of registration. If the board fails to do so, it must
        inform the members, who shall appoint the auditor within ninety days at
        an extraordinary general meeting. In either case, the first auditor
        holds office until the conclusion of the first annual general meeting.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Who</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appoint first auditor</td>
            <td>Board of Directors</td>
            <td>Within 30 days of registration</td>
          </tr>
          <tr>
            <td>If the board fails: inform members</td>
            <td>Board</td>
            <td>After the 30-day window</td>
          </tr>
          <tr>
            <td>Appoint at an EGM</td>
            <td>Members</td>
            <td>Within 90 days</td>
          </tr>
          <tr>
            <td>Tenure ends</td>
            <td>Not applicable</td>
            <td>Conclusion of the first AGM</td>
          </tr>
        </tbody>
      </table>

      <h2>Before the board appoints: consent and eligibility</h2>
      <p>
        An auditor must be eligible under section 141 of the Act, which sets out
        who can be appointed and who is disqualified. Before the board meeting,
        obtain from the proposed auditor:
      </p>
      <ul>
        <li>A written consent to act as auditor</li>
        <li>A certificate that they are eligible for appointment and not disqualified, and that the appointment is within the limits on the number of audits</li>
        <li>The firm registration number and the membership number of the signing partner</li>
      </ul>
      <p>
        The board can fix the remuneration of the first auditor it appoints. The
        appointment is usually made at the{" "}
        <Link href="/blog/first-board-meeting-checklist">first board meeting</Link>,
        which itself must be held within thirty days of incorporation.
      </p>

      <h2>Is ADT-1 required for the first auditor?</h2>
      <p>
        This is the most common question. Form ADT-1 is the notice to the
        Registrar of an auditor&apos;s appointment, filed under rule 4(2) of the
        Companies (Audit and Auditors) Rules, 2014. The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/annual-filing/adt-forms.html" target="_blank" rel="noopener noreferrer">ADT forms FAQ</a>{" "}
        addresses it directly. It notes that rule 4(2) mentions only section
        139(1), the regular appointment of auditors, and not section 139(6), the
        appointment of the first auditor. So filing ADT-1 for the first auditor
        is not strictly mandatory.
      </p>
      <p>
        However, the same FAQ recommends that companies file ADT-1 even for the
        first auditor. The reason is practical: later forms, such as ADT-3 when
        an auditor resigns or ADT-1 for a casual vacancy, ask for the SRN of the
        original appointment. Where no first auditor ADT-1 exists, the MCA
        allows a placeholder SRN, Z99999999, to be entered. Filing ADT-1 at the
        start avoids relying on that workaround and gives the company a clean
        record.
      </p>

      <h2>Filing ADT-1 for the first auditor: practical points</h2>
      <ul>
        <li>In the form, choose the nature of appointment as first auditor appointed by the Board of Directors</li>
        <li>For the period of accounts, the MCA FAQ says the start date should be the date of incorporation and the end date the end of the financial year</li>
        <li>Enter financial year dates, not the date of the board meeting</li>
        <li>If the auditor is a sole proprietor and a PAN validation error occurs, the FAQ suggests selecting the category as Individual</li>
        <li>Attach the board resolution and the auditor&apos;s consent and eligibility certificate</li>
        <li>For regular appointments under section 139(1), rule 4(2) requires ADT-1 within fifteen days of the meeting in which the auditor is appointed; applying the same discipline to the first auditor is sensible</li>
      </ul>

      <h2>What if the 30-day deadline was missed?</h2>
      <p>
        If the board has not appointed the first auditor within thirty days,
        section 139(6) itself provides the remedy: the board informs the
        members, and the members appoint the auditor at an extraordinary general
        meeting within ninety days. In practice:
      </p>
      <ul>
        <li>Hold a board meeting to record the failure and call an EGM</li>
        <li>Obtain the auditor&apos;s consent and eligibility certificate</li>
        <li>Pass the ordinary resolution at the EGM</li>
        <li>File ADT-1 recording the appointment by members</li>
      </ul>
      <p>
        If both windows have passed, the company is in default under the Act and
        should regularise the position promptly with professional advice, since
        the financial statements of the first year must be audited before they
        are filed.
      </p>

      <h2>Who can be appointed as the first auditor?</h2>
      <p>
        Only a chartered accountant in practice, or a firm in which the majority
        of partners practising in India are chartered accountants, can be
        appointed as auditor, under section 141. The section also lists people
        who cannot be appointed, including:
      </p>
      <ul>
        <li>An officer or employee of the company</li>
        <li>A person who is a partner or employee of an officer or employee of the company</li>
        <li>A person who, or whose partner, holds securities of or interest in the company (a relative may hold only up to a small prescribed limit), or who, or whose relative or partner, is indebted to the company or has given guarantees beyond prescribed limits</li>
        <li>A person with a business relationship with the company of the kind prescribed</li>
        <li>A person whose relative is a director or in the employment of the company as a director or key managerial personnel</li>
        <li>A person who would exceed the limit of twenty company audits</li>
        <li>A person who directly or indirectly renders services listed in section 144, such as accounting and book keeping, to the company</li>
      </ul>
      <p>
        In a family-run company, the relative test is the one most often
        overlooked. A chartered accountant whose relative is a director of the
        company is not eligible to audit it.
      </p>

      <h2>What happens at the first AGM?</h2>
      <p>
        The first auditor&apos;s term ends at the conclusion of the first annual
        general meeting. At that AGM, the shareholders appoint an auditor under
        section 139(1), generally for a term of five years, and ADT-1 is
        mandatory for that appointment. For a company incorporated on or after
        1 January, the first financial year can run until 31 March of the
        following year under section 2(41), which affects when the first audit
        and AGM fall.
      </p>

      <h2>Documents checklist for the first auditor appointment</h2>
      <ul>
        <li>Written consent from the auditor</li>
        <li>Eligibility certificate confirming the auditor is qualified and not disqualified under section 141</li>
        <li>Firm registration number and the membership number of the signing partner</li>
        <li>PAN of the auditor or the firm</li>
        <li>Certified copy of the board resolution (or EGM resolution, if appointed by members)</li>
        <li>Appointment letter to the auditor, and an engagement letter setting out scope and responsibilities</li>
      </ul>

      <h2>Common mistakes</h2>
      <table>
        <thead>
          <tr>
            <th>Mistake</th>
            <th>Consequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No auditor appointed for months after incorporation</td>
            <td>Default under section 139(6); first-year accounts may be delayed</td>
          </tr>
          <tr>
            <td>Appointment made without consent and eligibility certificate</td>
            <td>The appointment may be open to challenge</td>
          </tr>
          <tr>
            <td>Wrong period entered in ADT-1</td>
            <td>Validation errors or overlap issues with later ADT-1 filings</td>
          </tr>
          <tr>
            <td>Assuming the first auditor continues automatically after the first AGM</td>
            <td>The term ends at the first AGM; a fresh appointment under section 139(1) with ADT-1 is required</td>
          </tr>
          <tr>
            <td>Auditor resigns and no ADT-1 exists for the original appointment</td>
            <td>Later forms need the Z99999999 placeholder SRN</td>
          </tr>
        </tbody>
      </table>

      <h2>Choosing your first auditor</h2>
      <p>
        The first auditor sees the company&apos;s opening balances, capital
        introduction and early transactions. Choose someone who will review the
        books during the year, not just at the end. You can read more about the
        audit itself on our{" "}
        <Link href="/statutory-audit-chennai">statutory audit</Link> page. If
        the same firm handles your bookkeeping or tax work, check the
        independence rules in section 144, which restrict an auditor from
        providing certain services to the company it audits.
      </p>

      <h2>Where this fits</h2>
      <p>
        Auditor appointment sits alongside INC-20A, share certificates and the
        first board meeting in the early compliance calendar. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service and{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        cover these filings. For the incorporation itself, see our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>.
      </p>
      <p>
        If you need help with your first auditor appointment or ADT-1, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
