import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "foreign-national-director-indian-company",
  title: "Foreign Nationals as Directors of an Indian Company",
  description:
    "How foreign nationals can be directors of an Indian company: apostille vs consular attestation, business visa, DIN, FDI routes and land-border country rules.",
  date: "2026-10-27",
  excerpt:
    "Foreign nationals can be directors and shareholders of Indian companies. Here is how attestation, business visas, FDI routes and Press Note 3 rules apply.",
  faqs: [
    {
      question: "Can a foreign national be a director of an Indian private limited company?",
      answer:
        "Yes. A foreign national can be a director and a shareholder, provided they obtain a DIN and Digital Signature Certificate and submit properly attested identity and address documents. The company must also have at least one director who stays in India for at least 182 days in the financial year, as required by section 149(3) of the Companies Act.",
    },
    {
      question: "What is the difference between apostille and consular attestation?",
      answer:
        "An apostille is a single certificate issued by a designated authority in a country that is party to the Hague Apostille Convention, 1961, confirming a notarised document. Consular attestation applies to countries outside the Convention and the Commonwealth: the document is notarised and then authenticated by the Indian Embassy or consulate in that country.",
    },
    {
      question: "Does a foreign director need a business visa?",
      answer:
        "MCA links the business visa to how the MoA and AoA are signed. A foreign subscriber with a valid DIN can use the electronic e-MoA and e-AoA only with a valid business visa. Without one, physically signed and apostilled MoA and AoA must be attached. A missing business visa or OCI with arrival stamps is also a listed rejection ground.",
    },
    {
      question: "Can investors from China or other neighbouring countries invest under the automatic route?",
      answer:
        "No. Under India's FDI policy introduced through Press Note 3 of 2020 and reflected in RBI's Master Direction, an entity or citizen of a country sharing a land border with India, or an investment whose beneficial owner is from such a country, can invest only under the Government approval route.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Foreign founders and parent companies set up Indian companies regularly,
        and foreign nationals frequently sit on Indian boards. The legal path is
        well defined, but it involves three separate systems: company law (the
        Ministry of Corporate Affairs), foreign investment law (FEMA, administered
        by RBI, and the government&apos;s FDI policy), and immigration (visas).
        This post explains how each one affects a foreign national who wants
        to be a director or shareholder.
      </p>

      <h2>Who counts as a foreign national here?</h2>
      <p>
        For MCA filings, a foreign national is anyone who is not an Indian
        citizen. That includes Overseas Citizens of India (OCI cardholders) and
        persons of Indian origin who hold another passport. Indian citizens
        living abroad are NRIs and follow a slightly different path, covered in
        our post on{" "}
        <Link href="/blog/nri-director-private-limited-company">NRI directors</Link>.
      </p>

      <h2>Company law requirements</h2>
      <p>
        A foreign national can be a director if they have a Director
        Identification Number (DIN) and a Digital Signature Certificate (DSC).
        For a new company, DINs for up to three directors can be applied for
        within SPICe+. Instead of PAN, a foreign national provides passport
        details, and MCA&apos;s systems do not allow the same passport number
        to be linked to more than one DIN.
      </p>
      <p>
        Two structural rules matter. A private limited company needs at least
        two directors, and section 149(3) of the Companies Act, 2013 requires at
        least one director who stays in India for 182 days or more during the
        financial year. A board made up entirely of foreign residents will not
        meet this rule, so foreign-owned companies usually appoint at least one
        India-resident director.
      </p>

      <h2>Apostille versus consular attestation</h2>
      <p>
        Identity and address documents of a foreign director, and the MoA and
        AoA where signed physically, must be attested in the country of
        residence. The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
        set three tracks:
      </p>
      <table>
        <thead>
          <tr>
            <th>Residence</th>
            <th>What is needed</th>
            <th>Practical note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commonwealth country</td>
            <td>Attestation by a notary public of that country</td>
            <td>Usually the quickest route</td>
          </tr>
          <tr>
            <td>Hague Apostille Convention country</td>
            <td>Notarisation followed by an apostille</td>
            <td>The apostille is issued by a designated government authority, not the notary</td>
          </tr>
          <tr>
            <td>Neither of the above</td>
            <td>Notarisation, then authentication by the Indian Embassy or consulate</td>
            <td>Also called consularisation; typically takes the longest</td>
          </tr>
        </tbody>
      </table>
      <p>
        The documents covered include the passport, proof of address, the
        certificate of incorporation of any foreign corporate subscriber, and
        the MoA and AoA. Where a document is executed matters: a document signed
        outside India is attested according to the place of execution.
      </p>

      <h2>Business visa: why it matters for filing</h2>
      <p>
        MCA guidance links the business visa to the format of the MoA and AoA.
        A foreign national subscriber who holds a valid DIN and DSC can use the
        electronic e-MoA and e-AoA only if they submit proof of a valid business
        visa. Without a business visa, physically signed and apostilled MoA and
        AoA must be attached, and the e-forms are not accepted for that company.
      </p>
      <p>
        For foreign subsidiaries, the MCA lists a missing business visa or OCI
        card with arrival stamps among the grounds for rejection. If a foreign
        director travels to India to set up or run the company, check with the
        immigration authorities that the visa category matches the intended
        activity; immigration rules are outside company law and change from
        time to time.
      </p>

      <h2>The FDI side: automatic or government route?</h2>
      <p>
        When a foreign national or foreign company subscribes to shares, it is
        foreign direct investment. Under India&apos;s FDI framework, most
        sectors allow up to 100 per cent foreign investment under the automatic
        route, meaning no prior government approval is needed. Some sectors
        have caps, conditions or require approval, and a few are prohibited.
        Check the sector before you commit to a structure.
      </p>

      <h2>Land-border countries: Press Note 3 of 2020</h2>
      <p>
        RBI&apos;s{" "}
        <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200" target="_blank" rel="noopener noreferrer">Master Direction on Foreign Investment in India</a>{" "}
        reflects the policy change made through Press Note 3 of 2020. An entity
        or citizen of a country that shares a land border with India, or an
        investment whose beneficial owner is a citizen of such a country, can
        invest only under the Government route.
      </p>
      <p>
        The beneficial ownership test looks through intermediate holding
        companies, so routing the investment through a company in a third
        country does not avoid the rule. If any investor or ultimate owner is
        connected to a land-border country, take advice before filing SPICe+,
        because shares cannot be issued to them without approval.
      </p>

      <h2>Reporting after shares are issued</h2>
      <p>
        Once shares are allotted to a foreign subscriber, the company reports
        the issue to RBI in Form FC-GPR through the FIRMS portal within thirty
        days from the date of issue. The company also files the annual return
        on foreign liabilities and assets. Our{" "}
        <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page
        explains these filings.
      </p>

      <h2>Why foreign subsidiary applications get rejected</h2>
      <p>
        The MCA&apos;s SPICe+ FAQs list the most common grounds on which
        applications for foreign-owned companies are rejected:
      </p>
      <ul>
        <li>Documents that are not apostilled, notarised or attested by the consulate as required</li>
        <li>A missing PAN undertaking for the foreign subscriber</li>
        <li>No business visa, or no OCI card with arrival stamps, attached</li>
        <li>A board resolution of the foreign parent that does not state the number of shares subscribed and the name of the authorised representative</li>
      </ul>
      <p>
        Each of these is avoidable with a careful review before filing. The
        board resolution point is especially common: a generic resolution
        approving an Indian subsidiary is not enough.
      </p>

      <h2>Choosing the resident director</h2>
      <p>
        Because at least one director must stay in India for 182 days or more in
        the financial year, foreign-owned companies need to think carefully
        about who fills that role. Options include an Indian employee who will
        run the business, an expatriate who will be based in India for most of
        the year, or an independent professional. Whoever it is, remember that
        all directors share responsibility for the company&apos;s compliance.
        The resident director should have genuine access to information and a
        clear mandate from the parent, not just a signature role.
      </p>

      <h2>Should the foreign entity be a subscriber, or the individuals?</h2>
      <p>
        A foreign company can subscribe to shares directly, making the Indian
        company its subsidiary, or individual foreign founders can subscribe
        personally. A corporate subscriber needs its certificate of
        incorporation and board resolution attested, and the parent&apos;s
        ownership chain is examined for the land-border test. Individual
        subscribers need personal documents attested instead. The choice also
        has tax, accounting and future fundraising consequences in both
        countries, so decide it before drafting the SPICe+ application.
      </p>

      <h2>A typical setup sequence for a foreign-owned company</h2>
      <ul>
        <li>Confirm the sector is open under the automatic route and that no investor is linked to a land-border country</li>
        <li>Identify a resident director who meets the 182-day test</li>
        <li>Obtain DSCs for all signatories, including video verification for foreign directors</li>
        <li>Get passports, address proofs and corporate documents notarised and apostilled or consularised</li>
        <li>Prepare the board resolution of the foreign parent naming its authorised representative and the shares subscribed</li>
        <li>File SPICe+ with physical apostilled MoA and AoA where required</li>
        <li>Open the bank account, receive share capital through banking channels, and file FC-GPR</li>
      </ul>
      <p>
        Our page on{" "}
        <Link href="/company-registration-india-for-foreigners">company registration in India for foreigners</Link>{" "}
        covers the full process, and our{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        guide explains the domestic steps.
      </p>
      <p>
        Once the company is running, foreign directors take part in board
        meetings by video conference, sign filings with their DSC, and keep
        their DIN active through DIR-3 KYC, which MCA now requires once every
        three financial years and within thirty days of any change in contact
        or address details.
      </p>
      <p>
        If you are a foreign founder or parent company planning an Indian
        entity, you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
