import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources: G.S.R. 943(E) dated 31 December 2025 (substituted rule 12A, in
// force 31 March 2026); MCA "Important MCA Update for Directors" with three
// illustrations; Companies (Registration Offices and Fees) Amendment Rules,
// 2026, G.S.R. 300(E) dated 21 April 2026 (nil / Rs 5,000 / Rs 500).
// Keep consistent with /blog/din-and-dsc-for-company-directors.
export const meta: BlogPostMeta = {
  slug: "dir-3-kyc-due-date-late-fee",
  title: "DIR-3 KYC 2026: Due Date, ₹5,000 Late Fee, Deactivated DIN",
  description:
    "DIR-3 KYC is now filed once every three financial years, by 30 June. The new due dates, the ₹5,000 late and reactivation fee, and how to revive a DIN.",
  date: "2026-11-13",
  excerpt:
    "Directors no longer file KYC every year. From 31 March 2026, DIR-3 KYC Web is due once every third financial year by 30 June. Here is when yours falls due and what a missed filing costs.",
  summary:
    "From 31 March 2026, a director holding a DIN on 31 March files DIR-3 KYC Web once every third consecutive financial year, by 30 June, instead of every year. Filing on time costs nothing. Filing late, or reactivating a deactivated DIN, costs ₹5,000. Changes in mobile, email or address must be filed within 30 days.",
  faqs: [
    {
      question: "Is DIR-3 KYC still an annual filing in 2026?",
      answer:
        "No. Rule 12A was substituted by a notification dated 31 December 2025, in force from 31 March 2026. Every individual holding a DIN on 31 March of a financial year now files DIR-3 KYC Web once every third consecutive financial year, by 30 June. The old 30 September annual deadline no longer applies.",
    },
    {
      question: "When is my next DIR-3 KYC due if I filed for FY 2025-26?",
      answer:
        "According to the MCA's illustration, a director whose DIN was allotted on or before 31 March 2025 and who filed KYC for FY 2025-26 need not file for FY 2026-27 or FY 2027-28, if nothing changes. The next filing window runs from April to June 2028.",
    },
    {
      question: "What is the DIR-3 KYC late fee now?",
      answer:
        "Under the fee rules amended on 21 April 2026, DIR-3 KYC Web filed within the due date carries no fee. Filing after the due date, or filing to reactivate a deactivated DIN, costs ₹5,000. Each filing made to update personal details under rule 12A(2) costs ₹500.",
    },
    {
      question: "Does a deactivated DIN mean the director is disqualified?",
      answer:
        "No. Deactivation for non-filing of KYC is a status on the MCA records, not a disqualification under Section 164. The person continues as a director, but the DIN cannot be used in MCA filings until it is reactivated by filing DIR-3 KYC Web with the ₹5,000 fee.",
    },
    {
      question: "Do I need to file if my mobile number or address changes?",
      answer:
        "Yes. Rule 12A(2) requires DIR-3 KYC Web within 30 days of a change in personal mobile number, email address or residential address, with a ₹500 fee. This event-based filing does not reset the three-year cycle, which the MCA says is still counted from the original cycle year.",
    },
    {
      question: "Is the DIR-3 KYC e-form still available?",
      answer:
        "No. From 31 March 2026 the separate e-form DIR-3 KYC and the DIR-3 KYC-WEB service were replaced by one form, DIR-3 KYC Web. The MCA said drafts of the older forms pending for signature or payment would be marked cancelled, and a fresh DIR-3 KYC Web had to be filed.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Since DIR-3 KYC was introduced in 2018, every DIN holder in India has had
        to file a KYC with the Ministry of Corporate Affairs every year, most
        recently by 30 September, or see the DIN deactivated. That changed in 2026. The rule now asks for KYC once
        every three financial years, with a June deadline, and the fee rules
        were rewritten in April 2026. This post sets out the current due dates,
        the fees and what to do if a DIN has already been deactivated.
      </p>

      <h2>What changed in the DIR-3 KYC rule in 2026?</h2>
      <p>
        Rule 12A of the Companies (Appointment and Qualification of Directors)
        Rules, 2014 was substituted by notification G.S.R. 943(E) dated 31
        December 2025, which came into force on 31 March 2026. Under the new
        rule 12A(1), every individual holding a DIN as on 31 March of a
        financial year files a KYC intimation in Form DIR-3 KYC Web on or before
        30 June following every third consecutive financial year. Under rule
        12A(2), any change in personal mobile number, email address or
        residential address must be filed within 30 days of the change.
      </p>
      <p>
        The amendment also replaced the two earlier filings, the e-form DIR-3
        KYC and the DIR-3 KYC-WEB web service, with a single form, DIR-3 KYC
        Web. The MCA announced the change on its portal, together with three
        worked illustrations, and the rule text is in the{" "}
        <a href="https://egazette.gov.in/" target="_blank" rel="noopener noreferrer">
          Gazette of India
        </a>
        . The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/din-related/dir-3-kyc-web.html" target="_blank" rel="noopener noreferrer">
          DIR-3 KYC Web FAQs
        </a>{" "}
        explain the form.
      </p>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Up to FY 2025-26</th>
            <th>From 31 March 2026</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frequency</td>
            <td>Every financial year</td>
            <td>Once every third consecutive financial year</td>
          </tr>
          <tr>
            <td>Deadline</td>
            <td>30 September</td>
            <td>30 June of the due year</td>
          </tr>
          <tr>
            <td>Form</td>
            <td>E-form DIR-3 KYC or web form DIR-3 KYC-WEB</td>
            <td>DIR-3 KYC Web only</td>
          </tr>
          <tr>
            <td>Change in mobile, email or address</td>
            <td>Updated through the KYC filing, with limits on how often</td>
            <td>Separate filing within 30 days of the change</td>
          </tr>
        </tbody>
      </table>

      <h2>Who has to file DIR-3 KYC Web?</h2>
      <p>
        The obligation attaches to the DIN, not to a board seat. The rule covers
        every individual holding a DIN as on 31 March of a financial year. That
        includes a director of a private limited company, an OPC or a Section 8
        company, a designated partner of an LLP who uses a DIN, and a person who
        once took a DIN but is not on any board today. An Indian resident
        director and a{" "}
        <Link href="/blog/foreign-national-director-indian-company">foreign national director</Link>{" "}
        are treated alike: both need a working personal mobile number and email
        that can receive verification codes.
      </p>
      <p>
        One DIN means one KYC, however many companies the person serves. A
        director on five boards files once, and all five companies benefit. The
        reverse is also true: if that one filing is missed, every company where
        the person is a director is affected. Someone who obtained a DIN but no
        longer needs it should look at whether it can be surrendered, rather
        than let it fall into deactivation and pay ₹5,000 later to revive it.
      </p>

      <h2>When is your next DIR-3 KYC due?</h2>
      <p>
        The MCA gave three illustrations. They are the most reliable guide to
        how the three-year cycle is counted, so the table below follows them
        closely.
      </p>
      <table>
        <thead>
          <tr>
            <th>Your situation</th>
            <th>Next DIR-3 KYC Web due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DIN allotted on or before 31 March 2025, KYC already filed for FY 2025-26, no change in details</td>
            <td>Nothing for FY 2026-27 or FY 2027-28; file between April and June 2028</td>
          </tr>
          <tr>
            <td>DIN allotted during FY 2025-26 (April 2025 to March 2026)</td>
            <td>First filing between April and June 2029, then every third financial year</td>
          </tr>
          <tr>
            <td>DIN allotted in FY 2025-26 and details updated in FY 2027-28</td>
            <td>Still April to June 2029; the update does not reset the cycle</td>
          </tr>
          <tr>
            <td>Mobile number, email or residential address changes at any time</td>
            <td>Within 30 days of the change, separately from the cycle</td>
          </tr>
        </tbody>
      </table>
      <p>
        The illustrations do not cover every case. A DIN that was already
        deactivated before 31 March 2026, or one allotted after that date, is
        not addressed directly. For these, check the DIN status on the MCA
        portal before assuming a due date, and file when the portal allows it.
      </p>

      <h2>How much does DIR-3 KYC cost after the April 2026 fee change?</h2>
      <p>
        The Companies (Registration Offices and Fees) Amendment Rules, 2026
        (G.S.R. 300(E) dated 21 April 2026) set three fee levels for DIR-3 KYC
        Web. These are government fees paid on the MCA portal.
      </p>
      <table>
        <thead>
          <tr>
            <th>Filing</th>
            <th>Government fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Periodic KYC filed on or before 30 June of the due year</td>
            <td>Nil</td>
          </tr>
          <tr>
            <td>Periodic KYC filed after the due date, or filed to reactivate a DIN</td>
            <td>₹5,000</td>
          </tr>
          <tr>
            <td>Update of mobile, email or residential address under rule 12A(2)</td>
            <td>₹500 for every filing</td>
          </tr>
        </tbody>
      </table>
      <p>
        The ₹5,000 figure is not new. It applied to late annual KYC under the
        old rule as well. What changed is the frequency, so a director who
        misses a due date now pays the same amount for a filing that comes round
        only once in three years.
      </p>

      <h2>What happens when a DIN is deactivated?</h2>
      <p>
        If the KYC is not filed by the due date, the MCA marks the DIN as
        deactivated for non-filing of DIR-3 KYC. Deactivation is not the same as
        disqualification under Section 164 of the Companies Act, 2013. The person
        stays a director of the companies on whose boards they sit. The problem
        is practical: a deactivated DIN cannot be used in MCA filings, so forms
        that need that director&apos;s DIN or signature are held up.
      </p>
      <p>
        That can stall routine company work. Annual filings such as AOC-4 and
        MGT-7, a new appointment in DIR-12, or an{" "}
        <Link href="/blog/add-remove-director">addition or resignation of a director</Link>{" "}
        may all need an active DIN. A deactivated DIN is usually discovered at
        the worst moment, when a deadline is a few days away.
      </p>

      <h2>How do you file DIR-3 KYC Web or reactivate a DIN?</h2>
      <p>
        The steps are the same for a periodic filing, a change in details and a
        reactivation. Only the fee differs.
      </p>
      <ol>
        <li>
          <strong>Check the DIN status.</strong> Look up the director&apos;s
          master data on the MCA portal and note whether the DIN is approved or
          deactivated.
        </li>
        <li>
          <strong>Confirm the personal details.</strong> The mobile number and
          email must be the director&apos;s own, not the company&apos;s or a
          consultant&apos;s, because verification codes are sent to them.
        </li>
        <li>
          <strong>Check the DSC.</strong> The director signs with their own
          Class 3 digital signature certificate, which must be valid and
          associated with their MCA login. Our{" "}
          <Link href="/blog/din-and-dsc-for-company-directors">guide to DIN and DSC</Link>{" "}
          covers the association step.
        </li>
        <li>
          <strong>Open DIR-3 KYC Web on the MCA V3 portal.</strong> Enter the
          DIN, verify the mobile and email, and update any address details that
          have changed.
        </li>
        <li>
          <strong>Sign and pay.</strong> Sign with the DSC and pay the fee, if
          any: nil within the due date, ₹500 for an update, ₹5,000 if late or
          for reactivation.
        </li>
        <li>
          <strong>Confirm the result.</strong> Keep the SRN and check that the
          DIN status changes. The MCA FAQs say the form is processed
          automatically and cannot be resubmitted, so details must be right the
          first time.
        </li>
      </ol>

      <h2>Why did the old web form and e-form distinction matter?</h2>
      <p>
        Under the annual system there were two routes. A director filing KYC for
        the first time, or changing details, used the e-form DIR-3 KYC, which
        needed certification by a practising professional. A director whose
        details had not changed could use the shorter web form, DIR-3
        KYC-WEB. A July 2024 amendment also restricted repeated changes of mobile
        number or email in the same financial year.
      </p>
      <p>
        From 31 March 2026 that choice has gone. There is one form, DIR-3 KYC
        Web, and the MCA&apos;s update stated that forms of either type stuck in
        draft or awaiting DSC upload and payment would be marked cancelled. If a
        director had started a KYC before 31 March 2026 and never completed it,
        a fresh filing in the new form is needed.
      </p>

      <h2>What should a company check for its directors now?</h2>
      <ul>
        <li>A list of every director&apos;s DIN, its allotment year and its next KYC window under the new cycle.</li>
        <li>The current DIN status of each director, especially anyone appointed or inactive in 2025 or 2026.</li>
        <li>Personal mobile numbers, emails and addresses on record, so any change is filed within 30 days.</li>
        <li>DSC expiry dates, since an expired DSC delays both KYC and company filings.</li>
        <li>KYC due dates added to the{" "}
          <Link href="/blog/annual-roc-filing-calendar">annual ROC filing calendar</Link>,
          so a three-year item is not forgotten.
        </li>
      </ul>
      <p>
        A three-year cycle is easier to miss than an annual one, because nobody
        remembers what was filed in 2026 by the time 2029 comes round. Directors
        who sit on several boards need only one KYC per DIN, but every company
        they serve is affected if it lapses. For ongoing tracking alongside other
        company filings, see our{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>.
      </p>
      <p>
        C S Rushil &amp; Co. handles DIR-3 KYC, DIN reactivation and other
        director filings from Anna Nagar, Chennai, and online, as part of our{" "}
        <Link href="/roc-compliances">ROC compliance services</Link>.
      </p>
    </>
  );
}
