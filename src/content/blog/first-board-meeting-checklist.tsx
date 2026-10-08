import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "first-board-meeting-checklist",
  title: "First Board Meeting Checklist for a New Company",
  description:
    "What to cover at a new company's first board meeting: the 30-day deadline, agenda items, director disclosures, statutory registers and share certificates.",
  date: "2026-11-20",
  excerpt:
    "A new company must hold its first board meeting within 30 days of incorporation. Here is a practical agenda, the registers to open, and what to file next.",
  faqs: [
    {
      question: "When must the first board meeting be held?",
      answer:
        "Section 173(1) of the Companies Act, 2013 requires every company to hold its first board meeting within thirty days of the date of its incorporation. The date on the Certificate of Incorporation starts the clock. Directors can attend in person or by video conferencing, and participation by video counts towards the quorum.",
    },
    {
      question: "What is the quorum for a board meeting of a new private company?",
      answer:
        "Under section 174, the quorum is one-third of the total strength of the board or two directors, whichever is higher. For a typical new private company with two directors, both must participate. Directors joining by video conferencing count towards the quorum, provided the meeting follows the prescribed procedure for virtual participation.",
    },
    {
      question: "When must share certificates be issued to subscribers?",
      answer:
        "Section 56(4)(a) requires a company to deliver share certificates to the subscribers to the memorandum within two months from the date of incorporation. The first board meeting is a convenient place to approve issuing them. Certificates are signed as required by the Share Capital Rules and may attract state stamp duty.",
    },
    {
      question: "How many board meetings must a small private company hold each year?",
      answer:
        "Section 173(5) treats a One Person Company, small company or dormant company as compliant if it holds at least one board meeting in each half of a calendar year with a gap of not less than ninety days between the two. Other companies must hold at least four meetings a year with no more than 120 days between consecutive meetings.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        The first board meeting is where a newly incorporated company starts to
        operate as a legal entity: it adopts its basic records, appoints its
        auditor, authorises its bank account, and sets up the registers the law
        requires. It has a firm deadline, and several items on its agenda have
        deadlines of their own. This checklist covers what to include and what
        to do afterwards.
      </p>

      <h2>The legal deadline</h2>
      <p>
        Section 173(1) of the{" "}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf" target="_blank" rel="noopener noreferrer">Companies Act, 2013</a>{" "}
        requires every company to hold the first meeting of its Board of
        Directors within thirty days of its incorporation. Directors may
        participate in person or through video conferencing (section 173(2)),
        and each director must be given at least seven days&apos; written notice
        of a board meeting at their registered address (section 173(3)), unless
        the meeting is called at shorter notice for urgent business under the
        conditions the section sets.
      </p>
      <p>
        The quorum under section 174 is one-third of the board or two directors,
        whichever is higher. With a two-director board, both must attend.
      </p>

      <h2>A practical agenda for the first board meeting</h2>
      <table>
        <thead>
          <tr>
            <th>Agenda item</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appoint a chairperson for the meeting</td>
            <td>To conduct proceedings and sign the minutes</td>
          </tr>
          <tr>
            <td>Note the Certificate of Incorporation, MoA and AoA</td>
            <td>Places the constitutional documents on record</td>
          </tr>
          <tr>
            <td>Note the first directors named in the Articles</td>
            <td>Confirms who constitutes the board</td>
          </tr>
          <tr>
            <td>Receive disclosures of interest (form MBP-1) from each director</td>
            <td>Section 184(1) requires disclosure at the first board meeting a director participates in</td>
          </tr>
          <tr>
            <td>Receive declarations of non-disqualification (form DIR-8)</td>
            <td>Confirms directors are not disqualified under section 164</td>
          </tr>
          <tr>
            <td>Confirm the registered office address</td>
            <td>Section 12 requires a registered office within thirty days of incorporation</td>
          </tr>
          <tr>
            <td>Appoint the first statutory auditor</td>
            <td>Section 139(6) requires the board to appoint within thirty days of registration</td>
          </tr>
          <tr>
            <td>Authorise the bank account and signatories</td>
            <td>Banks need a board resolution naming who can operate the account</td>
          </tr>
          <tr>
            <td>Approve issue of share certificates to subscribers</td>
            <td>Section 56(4)(a) requires delivery within two months of incorporation</td>
          </tr>
          <tr>
            <td>Authorise a director to file INC-20A</td>
            <td>The commencement of business declaration needs a board-authorised signatory</td>
          </tr>
          <tr>
            <td>Approve reimbursement of preliminary expenses</td>
            <td>Founders often pay incorporation costs personally before the account opens</td>
          </tr>
          <tr>
            <td>Decide where statutory registers and books of account will be kept</td>
            <td>Records are normally kept at the registered office</td>
          </tr>
          <tr>
            <td>Adopt a common seal, if the company chooses to have one</td>
            <td>A seal is optional under the current Act</td>
          </tr>
        </tbody>
      </table>

      <h2>Statutory registers to open</h2>
      <p>
        From incorporation, the company is required to maintain certain
        registers. The main ones for a new private company are:
      </p>
      <ul>
        <li>Register of members (form MGT-1), under section 88</li>
        <li>Register of directors and key managerial personnel and their shareholding, under section 170</li>
        <li>Register of contracts or arrangements in which directors are interested (form MBP-4), under section 189</li>
        <li>Register of share transfers and allotments, as applicable</li>
        <li>Register of charges, once the company creates any charge over its assets</li>
      </ul>
      <p>
        The minutes of each board meeting must also be recorded in a minutes book
        and signed within the prescribed time. These are simple to set up at the
        start and difficult to reconstruct later.
      </p>

      <h2>Share certificates: getting them right</h2>
      <p>
        Each subscriber should receive a share certificate showing the number of
        shares, their distinctive numbers and the amount paid. Under the Share
        Capital Rules, certificates are signed by two directors, or by a director
        and the company secretary where there is one. Share certificates may
        attract state stamp duty, so check the Tamil Nadu requirement before
        issue.
      </p>
      <p>
        Note the separate rules on dematerialisation. Rule 9B of the Companies
        (Prospectus and Allotment of Securities) Rules, 2014 requires private
        companies other than small companies to issue securities in demat form.
        Most newly incorporated companies are small companies and fall outside
        it, but confirm the position as your company grows.
      </p>

      <h2>Appointing the first auditor</h2>
      <p>
        The first auditor must be appointed by the board within thirty days of
        registration. If the board fails to do so, it must inform the members,
        who then appoint the auditor at an extraordinary general meeting within
        ninety days. Obtain the auditor&apos;s written consent and eligibility
        certificate before the meeting. Our post on{" "}
        <Link href="/blog/first-auditor-appointment-adt-1">first auditor appointment and ADT-1</Link>{" "}
        explains the filing nuances.
      </p>

      <h2>What to prepare before the meeting</h2>
      <ul>
        <li>Notice of the meeting to every director, at least seven days in advance, with the agenda</li>
        <li>Draft resolutions for each agenda item</li>
        <li>Blank forms MBP-1 and DIR-8 for each director to sign</li>
        <li>The auditor&apos;s consent and eligibility certificate</li>
        <li>The bank&apos;s account opening resolution format</li>
        <li>Draft share certificates for the subscribers</li>
        <li>Receipts for preliminary expenses paid by founders</li>
        <li>The statutory registers, ready to be written up</li>
      </ul>

      <h2>Sample wording for key resolutions</h2>
      <p>
        Resolutions do not need legal flourish, but they should be specific.
        Typical wording looks like this:
      </p>
      <ul>
        <li><strong>Auditor:</strong> Resolved that, pursuant to section 139(6) of the Companies Act, 2013, [firm name], Chartered Accountants (Firm Registration No. [number]), be appointed as the first auditor of the company to hold office until the conclusion of the first annual general meeting, at a remuneration fixed by the Board.</li>
        <li><strong>Bank account:</strong> Resolved that a current account be opened in the name of the company with [bank and branch], and that [names] be authorised to operate the account [singly or jointly].</li>
        <li><strong>Share certificates:</strong> Resolved that share certificates be issued to the subscribers to the memorandum for the shares subscribed by them, signed by any two directors.</li>
      </ul>

      <h2>Common mistakes at the first board meeting</h2>
      <ul>
        <li>Holding the meeting after day 30 because the bank account or auditor was not ready; the meeting can be held and items carried forward</li>
        <li>Forgetting the MBP-1 disclosures, which are required at the first meeting a director attends</li>
        <li>Signing minutes weeks later, or not at all</li>
        <li>Issuing share certificates without recording them in the register of members</li>
        <li>Passing resolutions without the required quorum</li>
      </ul>

      <h2>After the meeting: what to file and do</h2>
      <ul>
        <li>Prepare and sign the minutes</li>
        <li>Issue share certificates within two months of incorporation</li>
        <li>Send the auditor an appointment letter; consider filing ADT-1</li>
        <li>Complete bank account formalities and collect subscription money</li>
        <li>File INC-22 if the registered office was not verified at incorporation</li>
        <li>File INC-20A within 180 days, once subscription money is received</li>
        <li>Diary the next board meeting according to section 173</li>
      </ul>

      <h2>Can the first meeting be held by video conference?</h2>
      <p>
        Yes. Section 173(2) allows directors to participate through video
        conferencing or other audio visual means capable of recording and
        recognising their participation and storing the proceedings, and section
        174 counts such participation towards the quorum. For an NRI or
        foreign director, this is often the practical choice. Record in the
        minutes which directors attended in person and which by video, and
        make sure each director can sign their disclosures digitally or send
        signed copies promptly.
      </p>

      <h2>How often after the first meeting?</h2>
      <p>
        Most companies must hold at least four board meetings each year with no
        more than 120 days between two consecutive meetings. Under section
        173(5), a One Person Company, small company or dormant company is treated
        as compliant if it holds at least one meeting in each half of the
        calendar year, with at least ninety days between the two.
      </p>

      <h2>Keeping it manageable</h2>
      <p>
        The first meeting sets the pattern for the company&apos;s governance. A
        clear agenda, properly signed minutes and up-to-date registers make
        later audits, bank requests and investor due diligence much easier. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service and{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        cover board meetings and registers through the year. If you are still at
        the incorporation stage, see our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>.
      </p>
      <p>
        If you would like help preparing the agenda and resolutions for your
        first board meeting, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
