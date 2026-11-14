import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Sources: Companies Act ss. 12(4)-(6), 13(4)-(7), 117; Companies
// (Incorporation) Rules, 2014 rules 27, 28, 30 (as amended up to 20.10.2023),
// 31; Form INC-26 text (objections within 14 days). Draft Companies
// (Incorporation) Amendment Rules, 2026 (public notice 8 April 2026) propose
// merging INC-22/23/24 into E-CHNG: not in force as far as we could verify on
// 13 Nov 2026. Re-check before updating.
export const meta: BlogPostMeta = {
  slug: "change-registered-office-company",
  title: "Registered Office Change 2026: INC-22, INC-23 and MGT-14",
  description:
    "How a company changes its registered office in India: same city, same state under another ROC, or another state. INC-22, INC-23, MGT-14 and timelines.",
  date: "2026-11-13",
  excerpt:
    "A move across the road needs one form. A move to another state needs a special resolution, newspaper notices and Regional Director approval. Here is each route, step by step.",
  summary:
    "A company moving within the same city files INC-22 within 30 days. Moving outside the city but under the same ROC also needs a special resolution and MGT-14. Moving to another ROC in the same state needs Regional Director confirmation in INC-23. Moving to another state needs an altered memorandum, notices and Regional Director approval.",
  faqs: [
    {
      question: "What form is filed to change a company's registered office?",
      answer:
        "Form INC-22 is filed with the Registrar within 30 days of every change of registered office, under Section 12(4). Depending on the distance of the move, the company may also need MGT-14 for a special resolution, INC-23 for Regional Director approval and INC-28 to file that approval with the Registrar.",
    },
    {
      question: "Is a special resolution needed to change the registered office?",
      answer:
        "Not for a move within the local limits of the same city, town or village, which needs only a board resolution. A move outside those local limits needs a special resolution under Section 12(5), filed in MGT-14 within 30 days. A move to another state also alters the memorandum and needs one.",
    },
    {
      question: "Can a company in Chennai move its office to Coimbatore?",
      answer:
        "Yes, but it is a move between two Registrar jurisdictions in the same state, so it needs Regional Director confirmation in INC-23 after the special resolution. Coimbatore, Salem, Erode and six other western districts come under ROC Coimbatore, while all other Tamil Nadu districts, including Chennai, come under ROC Chennai.",
    },
    {
      question: "How long does the Regional Director take to approve a shift?",
      answer:
        "Within a state, Section 12(6) requires the confirmation within 30 days of receiving the application. For a move between states, rule 30 provides for an order within 15 days of the application if no objection is received, and within 60 days where objections are heard. Incomplete applications take longer.",
    },
    {
      question: "Who can object to a shift of registered office to another state?",
      answer:
        "Creditors, debenture holders and others whose interests are affected. The company advertises the proposal in Form INC-26 and serves individual notices. Objections go to the Regional Director, with a copy to the company, within 14 days of the advertisement. An objection leads to a hearing before the order is passed.",
    },
    {
      question: "Has the MCA replaced INC-22 and INC-23 with a new form?",
      answer:
        "Not yet, as far as we could verify. In April 2026 the MCA published draft amendment rules proposing a single form, E-CHNG, to replace INC-22, INC-23 and related forms. Until final rules are notified and the form is live on the MCA portal, the existing forms apply.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Every company must keep a registered office where it can receive
        communications from the Registrar and the public. Moving it can be as
        simple as one form, or it can take months and a Regional Director&apos;s
        order. The difference lies in how far the office moves. This post sets
        out the four routes under the Companies Act, 2013, with the forms and
        time limits for each.
      </p>

      <h2>Which approvals does each kind of move need?</h2>
      <table>
        <thead>
          <tr>
            <th>Type of move</th>
            <th>Approval needed</th>
            <th>Forms</th>
            <th>Statutory time limits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Within the local limits of the same city, town or village</td>
            <td>Board resolution</td>
            <td>INC-22</td>
            <td>INC-22 within 30 days of the change</td>
          </tr>
          <tr>
            <td>Outside local limits, same state, same ROC</td>
            <td>Board resolution and special resolution</td>
            <td>MGT-14, INC-22</td>
            <td>Each within 30 days</td>
          </tr>
          <tr>
            <td>Same state, another ROC&apos;s jurisdiction</td>
            <td>Special resolution and Regional Director confirmation</td>
            <td>MGT-14, INC-23, INC-28, INC-22</td>
            <td>RD to confirm within 30 days; company files it within 60 days</td>
          </tr>
          <tr>
            <td>From one state or union territory to another</td>
            <td>Special resolution altering the memorandum and Regional Director approval</td>
            <td>MGT-14, INC-26, INC-23, INC-28, INC-22</td>
            <td>RD order within 15 days (no objection) or 60 days; INC-28 within 30 days of the order</td>
          </tr>
        </tbody>
      </table>
      <p>
        The sections are 12 and 13 of the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules/companies-act/companies-act-2013.html" target="_blank" rel="noopener noreferrer">
          Companies Act, 2013
        </a>
        , read with rules 27 to 31 of the Companies (Incorporation) Rules, 2014.
      </p>

      <h2>How do you move within the same city, town or village?</h2>
      <p>
        A move within the local limits of the same city, town or village needs
        only a board resolution approving the new address. Section 12(4) then
        requires notice of the change to the Registrar within 30 days, filed in
        INC-22. The 30-day period was 15 days before the Companies (Amendment)
        Act, 2017.
      </p>
      <p>
        INC-22 is supported by proof of the new premises: the title document or
        rent or lease agreement, a no-objection letter from the owner where the
        company is not the owner, and a recent utility bill. If the office is in
        a director&apos;s home, see our post on{" "}
        <Link href="/blog/registered-office-at-home-company">using a home as the registered office</Link>.
        Section 12(3) also requires the new address on the company&apos;s
        letterheads, invoices and other official documents, and on the board
        outside the office.
      </p>

      <h2>What changes when the new office is outside local limits?</h2>
      <p>
        If the new office is outside the local limits of the current city, town
        or village, Section 12(5) requires a special resolution of the
        shareholders. That means a general meeting, or a postal ballot where
        permitted, with at least three-quarters of the votes cast in favour.
        Under Section 117, the special resolution is filed with the Registrar in
        MGT-14 within 30 days. INC-22 follows within 30 days of the actual
        change.
      </p>
      <p>
        No Regional Director approval is needed as long as the new address stays
        under the same Registrar. A move from Anna Nagar to Tambaram, for
        example, stays under ROC Chennai. Keep the dates in order: the special
        resolution comes first, the physical move second, and INC-22 is counted
        from the date the office actually changes, so a resolution passed months
        before the move does not start that clock. A company that was set up
        recently should also check its{" "}
        <Link href="/private-limited-company-incorporation-chennai">incorporation documents</Link>{" "}
        for any address-linked registrations.
      </p>

      <h2>How does a move to another ROC within the same state work?</h2>
      <p>
        Tamil Nadu has two Registrars. ROC Coimbatore covers nine western
        districts, including Coimbatore, Salem, Erode, Tiruppur and Krishnagiri,
        and ROC Chennai covers the rest of the state. Our{" "}
        <Link href="/blog/roc-chennai-vs-roc-coimbatore">ROC Chennai and ROC Coimbatore guide</Link>{" "}
        has the district list. A move between the two, such as Chennai to Hosur,
        changes the Registrar and needs more than a special resolution.
      </p>
      <p>
        The proviso to Section 12(5) requires the shift to be confirmed by the
        Regional Director. The company applies in INC-23 under rule 28, with the
        special resolution and supporting documents. Section 12(6) sets three
        clocks: the Regional Director communicates the confirmation within 30
        days of receiving the application, the company files it with the
        Registrar within 60 days of the confirmation (in INC-28), and the
        Registrar registers and certifies it within 30 days of that filing.
        INC-22 for the new address completes the process. Both Tamil Nadu ROCs
        come under the Regional Director, Southern Region, at Chennai.
      </p>

      <h2>What is the process for shifting to another state?</h2>
      <p>
        A move from, say, Tamil Nadu to Karnataka changes the state clause of
        the memorandum, so Section 13(4) applies. The application goes to the
        Central Government, whose power has been delegated to the Regional
        Director, under rule 30. The steps are:
      </p>
      <ol>
        <li>
          <strong>Board meeting.</strong> Approve the proposal, fix the general
          meeting and authorise a director or company secretary to apply.
        </li>
        <li>
          <strong>Special resolution.</strong> Pass a special resolution altering
          the memorandum, and file it in MGT-14 within 30 days.
        </li>
        <li>
          <strong>Advertisement.</strong> Not more than 30 days before filing the
          application, publish the notice in Form INC-26 in a vernacular
          newspaper and an English newspaper with wide circulation in the state
          of the current registered office. Objections are invited within 14
          days of publication.
        </li>
        <li>
          <strong>Individual notices.</strong> Serve notice on every creditor and
          debenture holder by registered post with acknowledgement due, and send
          a copy of the application to the Registrar, to SEBI if the company is
          listed, and to any sector regulator.
        </li>
        <li>
          <strong>File INC-23.</strong> Attach the altered memorandum, the
          meeting minutes with voting details, the list of creditors and
          debenture holders, the advertisement and notices, any objections with
          the company&apos;s response, and a declaration that no employee will
          be retrenched because of the shift.
        </li>
        <li>
          <strong>Regional Director&apos;s order.</strong> If no objection is
          received, the order is passed within 15 days of the application. If
          there are objections, a hearing follows and the order is passed within
          60 days.
        </li>
        <li>
          <strong>File the order in INC-28.</strong> File the certified copy with
          the Registrar of each state within 30 days of receiving it. The
          Registrar of the new state issues a fresh certificate of incorporation.
        </li>
        <li>
          <strong>File INC-22.</strong> Notify the new address, and update
          statutory registers, stationery and signboards.
        </li>
      </ol>
      <p>
        A non-banking financial company also needs a no-objection from the
        Reserve Bank before the shift.
      </p>

      <h2>When can a company not move to another state?</h2>
      <p>
        Rule 30(9) bars the shift while an inquiry, inspection or investigation
        has been initiated against the company, or a prosecution is pending
        under the Act. Once the inquiry, inspection or investigation ends with no
        prosecution envisaged or pending, the shift can proceed. An October 2023
        amendment allows a company that has new management under a resolution
        plan approved under the Insolvency and Bankruptcy Code to shift, if no
        appeal is pending and no new inquiry has begun. The Regional Director
        can also attach conditions to the approval.
      </p>

      <h2>How long does each route take in practice?</h2>
      <p>
        The statutory clocks are only part of the picture. Board and general
        meetings need notice periods, newspapers need lead time, and a Regional
        Director may ask for more documents. As a rough guide:
      </p>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Fixed periods in the law</th>
            <th>Main source of delay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Same city</td>
            <td>INC-22 within 30 days</td>
            <td>Address proof and owner&apos;s no-objection letter</td>
          </tr>
          <tr>
            <td>Same ROC, different town</td>
            <td>General meeting notice; MGT-14 and INC-22 within 30 days each</td>
            <td>Calling the general meeting</td>
          </tr>
          <tr>
            <td>Different ROC, same state</td>
            <td>RD 30 days; INC-28 within 60 days; ROC 30 days</td>
            <td>Queries on the INC-23 application</td>
          </tr>
          <tr>
            <td>Another state</td>
            <td>14-day objection period; RD 15 or 60 days; INC-28 within 30 days</td>
            <td>Creditor objections and hearings</td>
          </tr>
        </tbody>
      </table>

      <h2>Is a new single form replacing INC-22 and INC-23?</h2>
      <p>
        On 8 April 2026, the MCA issued draft Companies (Incorporation)
        Amendment Rules, 2026 for public comment. They propose merging the name
        and registered office forms, including INC-22, INC-23 and INC-24, into a
        single form called E-CHNG, and allowing some notices to be served by
        speed post or email. As of 13 November 2026, we have not been able to
        confirm a final notification or the form going live. Until it does,
        file in the existing forms, and check the{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/acts-rules.html" target="_blank" rel="noopener noreferrer">
          MCA&apos;s Acts and Rules page
        </a>{" "}
        and the{" "}
        <a href="https://egazette.gov.in/" target="_blank" rel="noopener noreferrer">
          Gazette of India
        </a>{" "}
        before starting a move.
      </p>

      <h2>What else must be updated after the move?</h2>
      <ul>
        <li>GST registration: if the principal place of business also moves to another state, a new registration is needed there; within a state, the address is amended.</li>
        <li>PAN and TAN address, bank accounts and any licences tied to the address.</li>
        <li>Letterheads, invoices, website and the board outside the office, as Section 12(3) requires.</li>
        <li>Shops and establishments registration and professional tax enrolment in the new location.</li>
        <li>The registers and the next annual return, which will show the new address.</li>
      </ul>
      <p>
        For other routine filings that follow a change, see the{" "}
        <Link href="/blog/annual-roc-filing-calendar">annual ROC filing calendar</Link>.
        C S Rushil &amp; Co. handles registered office changes, including
        Regional Director applications, from Anna Nagar, Chennai, and online, as
        part of our <Link href="/roc-compliances">ROC compliance services</Link>.
      </p>
    </>
  );
}
