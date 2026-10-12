import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "roc-chennai-vs-roc-coimbatore",
  title: "ROC Chennai vs ROC Coimbatore: Which ROC Is Yours?",
  description:
    "Which Registrar of Companies handles your Tamil Nadu company? District-wise ROC Chennai and ROC Coimbatore list, what it changes in practice, and Puducherry.",
  date: "2026-10-12",
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
  ],
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

      <h2>District-to-ROC table for Tamil Nadu and Puducherry</h2>
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

      <h2>Common Tamil Nadu business locations and their ROC</h2>
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

      <h2>What about Puducherry companies?</h2>
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
