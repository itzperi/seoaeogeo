import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "roc-chennai-vs-roc-coimbatore",
  title: "ROC Chennai vs ROC Coimbatore: Which ROC Is Yours?",
  description:
    "Which ROC handles your Tamil Nadu company? District-wise ROC Chennai and Coimbatore list, Puducherry, the Regional Director and official MCA contacts.",
  date: "2026-10-12",
  updated: "2026-11-13",
  excerpt:
    "Tamil Nadu has two Registrars of Companies. A district-by-district table, what the ROC actually decides for your company, and where Puducherry fits.",
  faqs: [
    {
      question: "Which districts come under ROC Coimbatore?",
      answer:
        "Nine districts: Coimbatore, Dharmapuri, Dindigul, Erode, Krishnagiri, Namakkal, the Nilgiris, Salem and Tiruppur. This is the list in the MCA's adjudication notifications, including the February 2026 notifications that took effect on 16 February 2026. Every other Tamil Nadu district comes under ROC Chennai, which also covers the Andaman and Nicobar Islands.",
    },
    {
      question: "Does my ROC affect how I incorporate a company?",
      answer:
        "No. SPICe+ incorporation applications are processed centrally by the Central Registration Centre, whichever ROC the registered office falls under. The certificate of incorporation records the jurisdictional ROC, and the CIN carries a state code, but the forms, documents and steps are the same for a company in Chennai, Salem or Hosur.",
    },
    {
      question: "Is there a separate ROC for Puducherry?",
      answer:
        "Yes. The MCA's notifications list a Registrar of Companies, Puducherry, with jurisdiction over the Union Territory of Puducherry, which includes Karaikal, Mahe and Yanam. A company with its registered office in Puducherry falls under ROC Puducherry, not ROC Chennai, even though it borders Tamil Nadu districts such as Cuddalore and Viluppuram.",
    },
    {
      question: "Hosur is near Bengaluru. Which ROC handles a Hosur company?",
      answer:
        "ROC Coimbatore. Hosur is in Krishnagiri district, one of the nine districts under the Registrar of Companies, Coimbatore. Proximity to Bengaluru does not matter: jurisdiction follows the state and district of the registered office, so a Hosur company does not come under the Karnataka Registrar of Companies.",
    },
    {
      question: "Can I move my registered office from Chennai to Coimbatore?",
      answer:
        "Yes, but it is not a simple address change. Moving between ROC jurisdictions within Tamil Nadu needs a special resolution and Regional Director confirmation in INC-23 under rule 28 of the Companies (Incorporation) Rules, 2014, then INC-28 and INC-22. A move to another town under the same ROC needs no Regional Director approval.",
    },
    {
      question: "Where do I appeal against an ROC adjudication order?",
      answer:
        "To the Regional Director, Southern Region, at Chennai, within 60 days of the order, in the form prescribed under the Companies (Adjudication of Penalties) Rules, 2014. Recent ROC Coimbatore adjudication orders name the Regional Director, Chennai, as the appellate authority, so companies under either Tamil Nadu ROC appeal to the same office.",
    },
    {
      question: "What is the official address of ROC Chennai?",
      answer:
        "The MCA lists the Registrar of Companies, Chennai at Block No. 6, B Wing, 2nd Floor, Shastri Bhawan, 26 Haddows Road, Chennai 600034, with the email roc.chennai@mca.gov.in. The Regional Director, Southern Region, is in the same building on the 5th floor. Filings go through the MCA portal, so write only for jurisdictional matters.",
    },
  ],
  summary:
    "Which Registrar handles a Tamil Nadu company depends on the district of its registered office. ROC Coimbatore covers nine western districts, namely Coimbatore, Dharmapuri, Dindigul, Erode, Krishnagiri, Namakkal, the Nilgiris, Salem and Tiruppur. ROC Chennai covers the other 29 districts, and Puducherry has its own ROC.",
};

const chennaiDistricts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Cuddalore",
  "Kallakurichi",
  "Kancheepuram",
  "Kanniyakumari",
  "Karur",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const coimbatoreDistricts = [
  "Coimbatore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Krishnagiri",
  "Namakkal",
  "The Nilgiris",
  "Salem",
  "Tiruppur",
];

export default function Body() {
  return (
    <>
      <p>
        Founders outside Chennai often find conflicting answers to a simple
        question: which Registrar of Companies is responsible for my company?
        Some websites put Madurai or Tirunelveli under Coimbatore; others say
        Tamil Nadu has a single ROC. The answer is set by MCA notification, and
        it is narrower than most people expect. This post gives the
        district-wise list and explains what the ROC actually decides for a
        company today.
      </p>

      <h2>Which ROC handles my Tamil Nadu company?</h2>
      <p>
        <strong>
          It depends on the district of your registered office. ROC Coimbatore
          covers nine western districts: Coimbatore, Dharmapuri, Dindigul,
          Erode, Krishnagiri, Namakkal, the Nilgiris, Salem and Tiruppur. ROC
          Chennai covers the other 29 districts of Tamil Nadu. A company
          registered in Puducherry falls under a separate ROC Puducherry.
        </strong>
      </p>
      <p>
        This allocation appears in the Ministry of Corporate Affairs&apos;
        notifications appointing Registrars as adjudicating officers: the 2015
        notification under section 454 of the Companies Act, 2013, and the
        revised notifications dated 10 February 2026 (S.O. 698(E) under the
        Companies Act and S.O. 696(E) under the LLP Act), effective 16 February
        2026. The 2026 revision restructured Registrars in some states, such as
        Delhi, but the Tamil Nadu split stayed the same. Office addresses and
        contacts are on the MCA&apos;s{" "}
        <a
          href="https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registrar of Companies contact page
        </a>
        .
      </p>

      <h2>Which districts fall under each ROC in Tamil Nadu and Puducherry?</h2>
      <table>
        <thead>
          <tr>
            <th>Registrar of Companies</th>
            <th>Districts or territory</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ROC Coimbatore</td>
            <td>{coimbatoreDistricts.join(", ")}</td>
            <td>9 districts</td>
          </tr>
          <tr>
            <td>ROC Chennai</td>
            <td>
              {chennaiDistricts.join(", ")}; also the Union Territory of
              Andaman and Nicobar Islands
            </td>
            <td>29 districts</td>
          </tr>
          <tr>
            <td>ROC Puducherry</td>
            <td>Union Territory of Puducherry (Puducherry, Karaikal, Mahe, Yanam)</td>
            <td>Separate UT</td>
          </tr>
        </tbody>
      </table>
      <p>
        The notifications list ROC Coimbatore&apos;s districts by name and
        give ROC Chennai &quot;the State of Tamil Nadu except&quot; those
        districts, so newer districts carved out since then, such as
        Chengalpattu, Ranipet, Tirupathur, Kallakurichi, Tenkasi and
        Mayiladuthurai, sit with ROC Chennai because their parent districts
        did. Two places people often get wrong: Karur and Madurai are under ROC
        Chennai, while Dindigul and Krishnagiri (which includes Hosur) are
        under ROC Coimbatore.
      </p>

      <h2>Which ROC covers common Tamil Nadu business towns?</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>District</th>
            <th>ROC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link href="/company-registration-coimbatore">Coimbatore</Link>
            </td>
            <td>Coimbatore</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-tiruppur">Tiruppur</Link>
            </td>
            <td>Tiruppur</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-salem">Salem</Link>
            </td>
            <td>Salem</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-erode">Erode</Link>
            </td>
            <td>Erode</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-namakkal">Namakkal</Link>
            </td>
            <td>Namakkal</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-hosur">Hosur</Link>
            </td>
            <td>Krishnagiri</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-karur">Karur</Link>
            </td>
            <td>Karur</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-madurai">Madurai</Link>
            </td>
            <td>Madurai</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-tiruchirappalli">Tiruchirappalli</Link>
            </td>
            <td>Tiruchirappalli</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-vellore">Vellore</Link>
            </td>
            <td>Vellore</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-thanjavur">Thanjavur</Link>
            </td>
            <td>Thanjavur</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-tirunelveli">Tirunelveli</Link>
            </td>
            <td>Tirunelveli</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-thoothukudi">Thoothukudi</Link>
            </td>
            <td>Thoothukudi</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-nagercoil">Nagercoil</Link>
            </td>
            <td>Kanniyakumari</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-kanchipuram">Kanchipuram</Link>
            </td>
            <td>Kancheepuram</td>
            <td>Chennai</td>
          </tr>
          <tr>
            <td>
              <Link href="/company-registration-chengalpattu">Chengalpattu</Link>
            </td>
            <td>Chengalpattu</td>
            <td>Chennai</td>
          </tr>
        </tbody>
      </table>

      <h2>What does the ROC change in practice?</h2>
      <p>
        For day-to-day filing, very little. Most of a company&apos;s
        interaction with the MCA is now online and processed centrally:
      </p>
      <ul>
        <li>
          <strong>Incorporation:</strong> SPICe+ applications go to the Central
          Registration Centre, not to the local ROC. See our{" "}
          <Link href="/blog/spice-plus-incorporation-explained">
            SPICe+ step-by-step guide
          </Link>
          .
        </li>
        <li>
          <strong>Event-based forms:</strong> since February 2024, many forms
          that need scrutiny are processed by the MCA&apos;s Central Processing
          Centre at Manesar, while straight-through forms are approved
          automatically.
        </li>
        <li>
          <strong>Voluntary strike-off:</strong> since 1 May 2023, STK-2
          applications go to the Centre for Processing Accelerated Corporate
          Exit (C-PACE), wherever the company is registered.
        </li>
        <li>
          <strong>Annual filings:</strong> AOC-4 and MGT-7 or MGT-7A are filed
          on the same portal with the same deadlines for every ROC.
        </li>
      </ul>
      <p>
        No founder needs to visit the ROC office to register or file. A company
        in Salem and one in Anna Nagar follow the same process.
      </p>

      <h2>When does the jurisdictional ROC still matter?</h2>
      <p>
        The jurisdictional Registrar keeps responsibility for everything that
        is not simple form processing. That is where the distinction becomes
        real:
      </p>
      <ul>
        <li>
          <strong>Adjudication of penalties:</strong> late or defective filings,
          such as delayed AOC-4, MGT-7 or MR-1, lead to show-cause notices and
          penalty orders issued by the jurisdictional ROC as adjudicating
          officer under section 454. Appeals go to the Regional Director,
          Southern Region, at Chennai.
        </li>
        <li>
          <strong>Notices, inquiries and inspections:</strong> letters seeking
          information or explanations, and inquiries into a company&apos;s
          affairs, come from the jurisdictional ROC, and replies go to it.
        </li>
        <li>
          <strong>ROC-initiated strike-off:</strong> where a company has not
          commenced business or has stopped filing, the notice proposing
          removal from the register comes from the jurisdictional ROC, unlike a
          voluntary application through C-PACE. See{" "}
          <Link href="/blog/strike-off-vs-winding-up">
            strike-off vs winding up
          </Link>
          .
        </li>
        <li>
          <strong>Conversions under section 366 (URC-1):</strong> when a
          partnership firm or LLP becomes a company, the URC-2 notice is
          published in newspapers circulating in the district of the principal
          place of business, so the district, and with it the ROC, is fixed
          before the URC-1 is filed with SPICe+.
        </li>
        <li>
          <strong>Shifting the registered office:</strong> moving between ROC
          Chennai and ROC Coimbatore areas within Tamil Nadu needs a special
          resolution and Regional Director confirmation in INC-23 under rule 28
          of the Companies (Incorporation) Rules, 2014. Moving within the same
          ROC&apos;s area, for example from Chennai to Madurai, needs a special
          resolution and INC-22 but no Regional Director approval; a move
          within the same city needs only a board resolution and INC-22.
        </li>
        <li>
          <strong>Prosecution and compounding:</strong> for offences that are
          still prosecutable, the jurisdictional ROC files the complaint in the
          court with jurisdiction over the registered office, and compounding
          applications are routed through it.
        </li>
      </ul>

      <h2>What does the Regional Director, Southern Region, do?</h2>
      <p>
        <strong>
          The Regional Director, Southern Region, works from Shastri Bhavan in
          Chennai and supervises the Registrars at Chennai, Coimbatore,
          Puducherry and Andaman. Some Central Government powers under the
          Companies Act are delegated to Regional Directors, so applications
          such as INC-23, RD-1 and appeals against ROC penalty orders go to
          this office rather than to the ROC.
        </strong>
      </p>
      <p>
        The MCA describes its Regional Directors as in charge of regions made
        up of several states and Union Territories. They supervise the
        Registrars of Companies and Official Liquidators in their region,
        liaise with state governments and the Central Government on the
        Companies Act and the LLP Act, and exercise powers the Central
        Government has delegated to them. The MCA&apos;s{" "}
        <a
          href="https://www.mca.gov.in/content/mca/global/en/contact-us/rd.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regional Directors page
        </a>{" "}
        maps the Chennai, Coimbatore, Pondicherry and Andaman registries to the
        Southern Region Directorate. The portal&apos;s approval services split
        the work like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>What it is for</th>
            <th>Decided by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INC-23</td>
            <td>Application to shift the registered office, for example from the ROC Chennai area to the ROC Coimbatore area</td>
            <td>Regional Director</td>
          </tr>
          <tr>
            <td>RD-1</td>
            <td>Applications to the Central Government (Regional Director) under sections 2(41), 16 and 18 of the Companies Act, 2013, as the form itself states</td>
            <td>Regional Director</td>
          </tr>
          <tr>
            <td>INC-18</td>
            <td>Conversion of a section 8 company</td>
            <td>Regional Director</td>
          </tr>
          <tr>
            <td>ADT-2</td>
            <td>Removal of an auditor</td>
            <td>Regional Director</td>
          </tr>
          <tr>
            <td>ADJ</td>
            <td>Memorandum of appeal against an adjudication order</td>
            <td>Regional Director</td>
          </tr>
          <tr>
            <td>INC-24, INC-12, MSC-1, MSC-4, GNL-1</td>
            <td>Change of name, section 8 licence for an existing company, dormant status and its reversal, general applications</td>
            <td>Registrar of Companies</td>
          </tr>
        </tbody>
      </table>
      <p>
        The MCA also publishes RD adjudication orders and RD compounding orders
        on its RD and ROC information pages, which is a useful way to see how
        the Southern Region has dealt with similar defaults before you reply to
        a notice.
      </p>

      <h2>Which ROC handles a Puducherry company?</h2>
      <p>
        The Union Territory of Puducherry has its own Registrar of Companies,
        listed in the MCA notifications with jurisdiction over the whole
        Union Territory: Puducherry, Karaikal, Mahe and Yanam. A company whose
        registered office is in Puducherry town or Karaikal therefore comes
        under ROC Puducherry, even though the surrounding Tamil Nadu districts
        are under ROC Chennai. Stamp duty on incorporation documents also
        follows Puducherry&apos;s rules, not Tamil Nadu&apos;s. Appeals from
        ROC Puducherry orders likewise go to the Regional Director, Southern
        Region.
      </p>
      <p>
        The practical consequence is in the registered office address. A
        business that trades across the border but takes premises in
        Puducherry is a Puducherry company for ROC purposes, and moving that
        registered office into Tamil Nadu later is a move out of the Union
        Territory, a bigger exercise than the intra-state shift described
        above. Decide
        the registered office address with this in mind before filing SPICe+.
      </p>

      <h2>How do you contact ROC Chennai, ROC Coimbatore or the Regional Director?</h2>
      <p>
        <strong>
          Use the addresses the MCA publishes. ROC Chennai and the Regional
          Director, Southern Region, are both at Shastri Bhavan, 26 Haddows
          Road, Chennai; ROC Coimbatore is at AGT Business Park on Avinashi
          Road; ROC Puducherry is in Muthialpet. Filings themselves go through
          the MCA V3 portal, so letters are for jurisdictional matters only.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Office</th>
            <th>Address as listed by the MCA</th>
            <th>Phone and email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ROC Chennai</td>
            <td>Block No. 6, B Wing, 2nd Floor, Shastri Bhawan, 26 Haddows Road, Chennai 600034</td>
            <td>044-28270071 / 28276654; roc.chennai@mca.gov.in</td>
          </tr>
          <tr>
            <td>ROC Coimbatore</td>
            <td>No. 7, AGT Business Park, 1st Floor, Phase II, Avinashi Road, Civil Aerodrome Post, Coimbatore 641014</td>
            <td>0422-2629640; roc.coimbatore@mca.gov.in</td>
          </tr>
          <tr>
            <td>ROC Puducherry</td>
            <td>No. 7, Second Floor, Karuvadikuppam Main Road, Senthamarai Nagar, Muthialpet, Puducherry 605003</td>
            <td>0413-2234129; roc.pondicherry@mca.gov.in</td>
          </tr>
          <tr>
            <td>Regional Director, Southern Region</td>
            <td>5th Floor, Shastri Bhavan, 26 Haddows Road, Chennai 600006</td>
            <td>044-28271737 (direct), 044-28276682/85, 044-28280436; rd.south@mca.gov.in</td>
          </tr>
          <tr>
            <td>Central Registration Centre (name reservation and incorporation)</td>
            <td>Indian Institute of Corporate Affairs, Plot No. 6, 7, 8, Sector 5, IMT Manesar, District Gurugram, Haryana 122050</td>
            <td>Through the MCA portal and helpdesk</td>
          </tr>
        </tbody>
      </table>
      <p>
        These details are taken from the MCA&apos;s ROC and Regional Director
        contact pages and its SPICe+ FAQs as they stood on 13 November 2026.
        The PIN codes differ for the ROC and the Regional Director even though
        both are in Shastri Bhavan; we have reproduced them as the MCA lists
        them. Officers change, so address letters to the office rather than to
        a named person, and quote the CIN and any SRN in every letter.
      </p>

      <h2>What are the common ROC queries and resubmissions?</h2>
      <p>
        <strong>
          Most queries now come from central offices, not the local ROC. The
          Central Registration Centre examines name and incorporation
          applications and marks defects for resubmission; SPICe+ allows two
          resubmissions under rule 38 of the Incorporation Rules. Penalty
          notices for late or defective filings still come from the
          jurisdictional ROC as adjudicating officer.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Who raises it</th>
            <th>Typical query</th>
            <th>How to respond</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name reservation (SPICe+ Part A or RUN)</td>
            <td>Central Registration Centre</td>
            <td>Name too close to an existing company, LLP or trademark; too descriptive; abbreviation unexplained; word needing approval</td>
            <td>Explain the name, attach the trademark owner&apos;s consent, or propose a different name</td>
          </tr>
          <tr>
            <td>Incorporation (SPICe+ Part B)</td>
            <td>Central Registration Centre</td>
            <td>Registered office proof not matching the address, missing NOC or rent agreement, illegible attachments, scanned INC-9 or MoA attached instead of web forms</td>
            <td>Correct the form or attachments, re-sign and resubmit within the date shown</td>
          </tr>
          <tr>
            <td>Event-based forms</td>
            <td>Central Processing Centre</td>
            <td>Defective attachment or inconsistent details</td>
            <td>Resubmit with the correction within the time shown on the SRN</td>
          </tr>
          <tr>
            <td>Late or defective filing</td>
            <td>Jurisdictional ROC (adjudicating officer)</td>
            <td>Show-cause notice before a penalty order under section 454</td>
            <td>Reply to the ROC with facts and proof of filing; appeal any order to the Regional Director in form ADJ</td>
          </tr>
        </tbody>
      </table>
      <p>
        The MCA has said that processing at the Central Registration Centre is
        faceless and randomised, and that a resubmitted application is
        normally not examined by the official who first processed it. Reply to
        every point in the remark in one go, because a partial fix uses up a
        resubmission. While an application is in resubmission, the system will
        not accept another application for the same or a similar name. For
        the detail on names, see{" "}
        <Link href="/blog/company-name-rejection-reasons">
          why the MCA rejects company names
        </Link>
        ; for the government charges at each step, see{" "}
        <Link href="/blog/government-fees-company-registration">
          government fees for company registration
        </Link>
        .
      </p>

      <h2>How do you check your ROC?</h2>
      <ul>
        <li>For an existing company, the certificate of incorporation and the master data on the MCA portal state the ROC.</li>
        <li>For a proposed company, find the revenue district of the registered office address and match it against the table above.</li>
        <li>Confirm the current office address and email on the MCA ROC contact page before writing to the Registrar.</li>
      </ul>

      <p>
        For the incorporation process, see{" "}
        <Link href="/private-limited-company-incorporation-chennai">
          private limited company incorporation in Chennai
        </Link>{" "}
        and{" "}
        <Link href="/company-registration-chennai">
          company registration in Chennai
        </Link>
        . After incorporation, our{" "}
        <Link href="/blog/post-incorporation-compliance-checklist">
          first-year compliance calendar
        </Link>{" "}
        and <Link href="/roc-compliances">ROC compliance</Link> page cover the
        filings that keep a company clear of adjudication. For a notice from
        either Tamil Nadu ROC, <Link href="/contact">contact us</Link>.
      </p>
    </>
  );
}
