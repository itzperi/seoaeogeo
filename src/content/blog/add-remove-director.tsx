import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "add-remove-director",
  title: "How to Add or Remove a Director from Your Company in India",
  description:
    "Founders in Chennai often need to add a co founder, an investor's nominee, or remove a director who is exiting, each has a specific procedure to follow.",
  date: "2026-09-19",
  updated: "2026-11-14",
  excerpt:
    "Founders in Chennai often need to add a co founder as a director, bring on an investor's nominee, or remove a director who is exiting the...",
  summary:
    "Adding a director needs a DIN, written consent in Form DIR-2, a declaration that the person is not disqualified, a board or shareholder resolution and Form DIR-12 filed within 30 days. A director leaves by written resignation under Section 168 or removal by ordinary resolution under Section 169. Update registers and minutes straight away.",
  faqs: [
    {
      question: "What is needed to appoint a new director in a company?",
      answer:
        "The person needs a Director Identification Number, gives written consent in Form DIR-2 and confirms in Form DIR-8 that they are not disqualified under Section 164. The board appoints them, often as an additional director under Section 161, and the company files Form DIR-12 with the Registrar within 30 days of the appointment.",
    },
    {
      question: "How can a director be removed or resign from a company?",
      answer:
        "A director can resign under Section 168 by written notice to the company, which then files Form DIR-12 within 30 days. Shareholders can remove a director under Section 169 by ordinary resolution after special notice, giving the director a chance to be heard. In both cases, update the statutory registers immediately.",
    },
    {
      question: "What happens if a director change is filed late with the ROC?",
      answer:
        "Filing DIR-12 after the 30-day window attracts additional fees that increase with the length of the delay, and a long delay can leave the MCA record out of step with reality, which causes problems with banks, investors and future filings. The change must also be reflected in minutes, the register of directors and any shareholders agreement.",
    },
    {
      question: "How long does an additional director hold office?",
      answer:
        "A director appointed by the board as an additional director under Section 161(1) holds office only until the next annual general meeting, or the last date on which it should have been held, whichever is earlier. To continue, the appointment must be regularised by the shareholders at that general meeting, and the company files DIR-12 again.",
    },
    {
      question: "Can a resignation leave the company with too few directors?",
      answer:
        "It can, and the company must fix it quickly. A private company needs at least two directors and a public company at least three, under Section 149, and every company needs at least one director who stayed in India for 182 days or more in the year. Plan a replacement before accepting a resignation that breaches these limits.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        To add a director, get a DIN, written consent in Form DIR-2 and a non-disqualification declaration, pass a
        board or shareholder resolution, and file Form DIR-12 within 30 days. To remove one, accept a written
        resignation under Section 168 or pass an ordinary resolution under Section 169. Either way, update the
        registers and minutes immediately.
      </p>

      <p>
        Founders in Chennai often need to add a co-founder as a director, bring on an investor&apos;s nominee, or remove
        a director who is leaving the business. Each situation has a procedure under the Companies Act, 2013, and
        following it correctly avoids the change being questioned later by a bank, an investor or the Registrar.
      </p>

      <h2>What are the steps to add a new director?</h2>

      <ol>
        <li>
          <strong>Check the DIN.</strong> The person needs a Director Identification Number. If they do not have one,
          they apply in Form DIR-3 with identity and address proof and a{" "}
          <Link href="/digital-signature-certificate-chennai">digital signature certificate</Link>. Our guide to{" "}
          <Link href="/blog/din-and-dsc-for-company-directors">DIN and DSC for company directors</Link> covers this
          step.
        </li>
        <li>
          <strong>Collect consent and declarations.</strong> The person signs Form DIR-2 (consent to act as director)
          and Form DIR-8 (a declaration that they are not disqualified under Section 164).
        </li>
        <li>
          <strong>Pass the resolution.</strong> The board can appoint an additional director under Section 161(1) if
          the articles allow it. Alternatively, shareholders appoint the director at a general meeting under Section
          152.
        </li>
        <li>
          <strong>File Form DIR-12.</strong> The company files DIR-12 with the Registrar of Companies within 30 days of
          the appointment, attaching the consent and the resolution (see the{" "}
          <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/e-filing-help-kits/company-efilings/din-related-forms.html" target="_blank" rel="noopener noreferrer">MCA help kit on DIR forms</a>).
        </li>
        <li>
          <strong>Disclosure of interest.</strong> At the first board meeting they attend, the new director discloses
          their interests in other entities in Form MBP-1 under Section 184.
        </li>
        <li>
          <strong>Update the records.</strong> Enter the appointment in the register of directors and key managerial
          personnel, and inform the bank if the director will be an authorised signatory.
        </li>
      </ol>

      <h2>How long does an additional director hold office?</h2>

      <p>
        An additional director appointed by the board holds office only until the next annual general meeting, or the
        last date on which it should have been held, whichever is earlier. To continue, shareholders must regularise
        the appointment at that meeting, and the change in designation is filed in DIR-12. This step is often
        forgotten, which leaves a director on the MCA record whose appointment has technically lapsed.
      </p>

      <h2>How does a director resign?</h2>

      <p>
        Under Section 168, a director resigns by giving written notice to the company. The resignation takes effect on
        the date the company receives the notice or the date stated in it, whichever is later. The board notes the
        resignation, and the company files DIR-12 within 30 days. The director may also inform the Registrar directly
        in Form DIR-11. A verbal exit is not enough: without a written letter, the company has nothing to attach to its
        filing.
      </p>

      <h2>How do shareholders remove a director?</h2>

      <p>
        Under Section 169, shareholders can remove a director, other than one appointed by the tribunal, by ordinary
        resolution. The process has safeguards:
      </p>

      <ul>
        <li>A member gives special notice of the proposed resolution under Section 115.</li>
        <li>The company sends a copy of the notice to the director concerned.</li>
        <li>The director has the right to be heard at the meeting and to make a written representation to members.</li>
        <li>After the resolution is passed, the company files DIR-12 within 30 days.</li>
      </ul>

      <p>
        A director can also vacate office automatically under Section 167, for example by becoming disqualified or by
        being absent from all board meetings for twelve months without leave of absence.
      </p>

      <h2>What about an investor&apos;s nominee director?</h2>

      <p>
        When an investor has the right to nominate a director, that right usually sits in the shareholders agreement
        and should also be reflected in the articles of association. The appointment itself follows the same steps:
        DIN, DIR-2, DIR-8, a resolution and DIR-12. When the investor exits or replaces its nominee, the outgoing
        nominee resigns in writing and the new one is appointed, ideally at the same board meeting so the board is never
        short.
      </p>

      <h2>Which forms and timelines apply?</h2>

      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Key documents</th>
            <th>Filing and timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New DIN needed</td>
            <td>Identity and address proof, DSC</td>
            <td>Form DIR-3, before appointment</td>
          </tr>
          <tr>
            <td>Appointment</td>
            <td>DIR-2 consent, DIR-8 declaration, board or shareholder resolution</td>
            <td>Form DIR-12 within 30 days</td>
          </tr>
          <tr>
            <td>Regularising an additional director</td>
            <td>Shareholder resolution at the general meeting</td>
            <td>Form DIR-12 within 30 days</td>
          </tr>
          <tr>
            <td>Resignation</td>
            <td>Written resignation, board noting</td>
            <td>Form DIR-12 within 30 days; DIR-11 optional for the director</td>
          </tr>
          <tr>
            <td>Removal</td>
            <td>Special notice, ordinary resolution</td>
            <td>Form DIR-12 within 30 days</td>
          </tr>
        </tbody>
      </table>

      <h2>What limits must the board keep in mind?</h2>

      <p>
        Under Section 149, a private company needs at least two directors, a public company at least three and a one
        person company one. Every company must also have at least one director who has stayed in India for 182 days or
        more in the financial year. A resignation that takes the company below either limit needs a replacement lined
        up first. If the incoming director lives outside India, our note on{" "}
        <Link href="/blog/nri-director-private-limited-company">appointing an NRI director</Link> covers the extra
        points.
      </p>

      <h2>Why do timing and paperwork both matter?</h2>

      <p>
        Filing DIR-12 after the 30-day window attracts{" "}
        <Link href="/roc-compliances">ROC</Link> additional fees that increase the longer the delay continues. Beyond
        the filing, the change must be reflected in board minutes, the register of directors and any shareholders
        agreement that names individuals as directors or gives an investor the right to nominate one.
      </p>

      <h2>What mistakes do companies commonly make?</h2>

      <ul>
        <li>Treating a verbal exit as a resignation, with no written letter on file</li>
        <li>Missing the 30-day DIR-12 deadline</li>
        <li>Forgetting to regularise an additional director at the AGM</li>
        <li>Updating the MCA record but not the internal registers or the bank mandate</li>
        <li>Letting the number of directors fall below the legal minimum</li>
      </ul>

      <p>
        If your company in Chennai needs to add or remove a director and you want the paperwork handled correctly and on
        time, C S Rushil &amp; Co. in Anna Nagar manages the full process end to end. Book a free 15-minute
        consultation.
      </p>
    </>
  );
}
