import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/india-subsidiary-for-singapore-companies";
const title = "India Subsidiary for Singapore Companies | C S Rushil & Co.";
const description =
  "Set up an Indian subsidiary from Singapore: incorporation, resident director and FC-GPR filings. Book a consultation online or visit our Anna Nagar office.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: slug },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: slug,
  },
};

const linkClass = "font-medium text-royal-violet underline underline-offset-2";

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const DOCUMENTS = [
  ["Certificate of incorporation of the Singapore parent", "Issued by ACRA, confirming the parent is registered and its registration number.", "Apostille by the competent authority in Singapore, subject to the current rules."],
  ["Latest ACRA business profile", "Shows the registered office, directors and shareholders as recorded with ACRA.", "Obtained from ACRA; apostilled where the Indian bank or Registrar requires it."],
  ["Constitution of the parent", "Current constitutional documents of the Singapore parent.", "Certified copy, notarised in Singapore, then apostilled."],
  ["Board resolution of the parent", "Approves the investment, names the subscriber, the nominee shareholder and the authorised signatory for India.", "Signed by a director, notarised in Singapore, then apostilled."],
  ["Latest financial statements of the parent", "Shows the parent's financial position, used for the investment record and the bank's due diligence.", "Certified copy; apostille where required."],
  ["Details and passports of foreign directors", "Identity and address proof for the DIN and digital signature certificates.", "Notarised copies, then apostilled."],
];

const SG_INDIA = [
  ["India–Singapore Double Taxation Avoidance Agreement", "Income tax treaty between India and Singapore, with later amendments.", "Indian withholding on dividends, interest, royalties and fees paid to the parent, subject to residence and beneficial ownership conditions."],
  ["Comprehensive Economic Cooperation Agreement (CECA)", "Trade and economic agreement between India and Singapore, in force since 2005.", "Mainly trade in goods and services; it does not change the FDI Policy or the Companies Act."],
];

const TIMELINE = [
  ["Activity and structure check", "1 to 3 working days", "Sector, shareholding and director choice"],
  ["Documents certified and apostilled in Singapore", "2 to 4 weeks", "Notary and apostille turnaround in Singapore"],
  ["Digital signature certificates and name reservation", "3 to 7 working days", "Completeness of director KYC"],
  ["SPICe+ incorporation and certificate", "1 to 3 weeks after filing", "Registrar of Companies processing"],
  ["Bank account and remittance of capital", "2 to 6 weeks", "Bank KYC on the parent and directors"],
  ["FC-GPR filing", "Within 30 days of allotment", "Timely allotment of shares"],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="India Subsidiary Incorporation for Singapore Companies"
      crumbLabel="India Subsidiary for Singapore Companies"
      crumbHref={slug}
      parentCrumb={{ name: "Company Setup in India for Foreign Businesses", href: "/company-registration-india-for-foreigners" }}
      eyebrow="India Entry · Singapore Parent Companies"
      h1="Set Up a Subsidiary in India from Singapore"
      subhead="How a Singapore private limited company incorporates a wholly owned Indian subsidiary: ACRA documents and apostille, the resident director rule, the FDI automatic route, FC-GPR and FLA reporting, and transfer pricing with the parent."
      keyFacts={[
        { label: "Usual structure", value: "Singapore parent holds all or nearly all shares of an Indian private limited company, with a nominee as the second shareholder." },
        { label: "Directors", value: "At least two, with at least one who has stayed in India for 182 days (section 149(3), Companies Act, 2013), subject to the current rules." },
        { label: "Document legalisation", value: "Apostille under the Hague Apostille Convention, to which Singapore has been a party since 2021 and India since 2005." },
        { label: "FDI approval", value: "None under the automatic route in permitted sectors, subject to the sectoral limits in the current FDI policy." },
        { label: "RBI reporting", value: "Form FC-GPR within 30 days of share allotment; annual FLA return by 15 July, subject to the current rules." },
        { label: "Treaties", value: "India–Singapore Double Taxation Avoidance Agreement and CECA, subject to the current rules." },
      ]}
      introHeading="How does a Singapore company set up a wholly owned subsidiary in India?"
      intro="Yes. A Singapore company can own 100% of an Indian private limited company under the automatic route where the sector permits, subject to the sectoral limits in the current FDI policy. It needs two directors, one resident in India, apostilled documents and an FC-GPR filing within 30 days of allotment."
      subServicesHeading="What do we handle for a Singapore parent setting up in India?"
      subServices={[
        { name: "Structure and FDI Route Check", text: "We confirm whether your activity falls under the automatic route and recommend the shareholding and director structure, including a subsidiary compared with a branch office where relevant." },
        { name: "Document List and Apostille Guidance", text: "We give your Singapore team a precise list of documents to notarise and apostille, with drafts of the board resolution and authorisation letter for India." },
        { name: "DSC, DIN and SPICe+ Filing", text: "We obtain directors' digital signatures, reserve the name, draft the MOA and AOA, and file SPICe+ with the Registrar of Companies." },
        { name: "Bank Account and Capital", text: "We coordinate the current account opening, the remittance of share capital from Singapore, the remittance documents and the allotment of shares." },
        { name: "FC-GPR and First-Year Compliance", text: "We prepare FC-GPR, the commencement of business declaration, and set up GST, payroll and TDS so the company can start operating." },
        { name: "Transfer Pricing Support", text: "We help set the intercompany agreement, prepare Indian transfer pricing documentation, and give your Singapore adviser the Indian figures they need." },
      ]}
      howTo={{
        heading: "How does a Singapore company set up its Indian subsidiary step by step?",
        steps: [
          { name: "Confirm activity and structure", text: "Check the FDI policy for your sector, decide the shareholding, and identify two directors including one who meets the 182-day India stay test." },
          { name: "Notarise and apostille documents in Singapore", text: "Have resolutions and copies notarised in Singapore, then apostilled by the competent authority, and send the originals to India." },
          { name: "Obtain DSCs and reserve the name", text: "Directors' digital signature certificates are issued and the proposed name is reserved through SPICe+ Part A on the MCA portal." },
          { name: "File SPICe+ for incorporation", text: "SPICe+ Part B, the MOA and AOA and the linked forms are filed; on approval the company receives its certificate of incorporation, PAN and TAN." },
          { name: "Open the bank account and remit capital", text: "The company opens a current account with an authorised dealer bank, the Singapore parent remits the subscription money, and shares are allotted." },
          { name: "File FC-GPR and start operations", text: "FC-GPR is filed within 30 days of allotment, the commencement declaration is filed, and GST, payroll and the intercompany agreement are put in place." },
        ],
      }}
      faqs={[
        { question: "Can a Singapore company own 100% of an Indian company?", answer: "Yes, where the sector falls under the automatic route in the current FDI policy and within any sectoral limits. A private limited company needs at least two shareholders, so the Singapore parent usually holds all but one share, and a nominee, often a director or another group entity, holds the remaining share. The nominee arrangement should be documented before incorporation." },
        { question: "Do Singapore documents need an apostille for India?", answer: "Singapore and India are both parties to the Hague Apostille Convention, so an apostille generally replaces consular attestation, subject to the current rules. Private documents such as a board resolution are first notarised in Singapore. Public documents such as an ACRA certificate go to the competent authority in Singapore for an apostille. We confirm the list before you start." },
        { question: "Does the Indian subsidiary need a director who lives in India?", answer: "Yes. Section 149(3) of the Companies Act, 2013 requires at least one director who has stayed in India for a total of 182 days in the previous calendar year, subject to the current rules. Singapore-based directors can sign digitally and join board meetings remotely, but the resident director must meet the stay test. We recommend clear appointment terms." },
        { question: "Which RBI reports follow a Singapore investment?", answer: "FC-GPR must be filed within 30 days of share allotment, subject to the current rules. Later share transfers are reported on FC-TRS, and the annual FLA return is due by 15 July, subject to the current rules. Remittances of dividends, royalties or fees to the Singapore parent may need Forms 15CA and 15CB. We prepare these filings each year." },
        { question: "How is pricing with the Singapore parent documented?", answer: "Payments between the Indian company and the Singapore parent are international transactions between associated enterprises. They must be priced at arm's length and documented under Indian transfer pricing rules, subject to the current rules. Documentation is prepared each year, and the accountant's report in Form 3CEB is filed with the return where required. Our transfer pricing service prepares this support." },
        { question: "What should a Singapore company check with its Singapore adviser?", answer: "We advise on Indian law only. A Singapore adviser handles Singapore matters, including the tax and corporate consequences of holding the Indian company and the parent's own ACRA filings and tax position. We provide the Indian filings, figures and documents your Singapore adviser needs, and suggest the two advisers coordinate before the investment." },
        { question: "How long does the set-up usually take?", answer: "Typical timelines are indicative, depends on documents, and are not a commitment. Notarisation and apostille in Singapore often take the longest, followed by SPICe+ incorporation, bank account opening and the remittance of capital. FC-GPR follows allotment within 30 days. A complete document pack and prompt signatures are the main factors that shorten the timeline." },
      ]}
      relatedQuestions={[
        { question: "How do UK parents set up an Indian subsidiary?", href: "/india-subsidiary-for-uk-companies" },
        { question: "What FEMA filings follow a foreign investment?", href: "/fema-rbi-compliance" },
        { question: "What does annual compliance for an Indian subsidiary involve?", href: "/india-subsidiary-compliance-cfo" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "fema-rbi-compliance", "transfer-pricing-audit"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a Singapore parent need, and how are they legalised?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Singapore and India are both parties to the Hague Apostille Convention. Singapore became a party in 2021, so
        documents issued in Singapore can be legalised by an apostille from the competent authority in Singapore instead of
        consular attestation, subject to the current rules. Private documents, such as a board resolution, are first
        notarised in Singapore. Before filing, the Ministry of Corporate Affairs portal at{" "}
        <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className={linkClass}>
          mca.gov.in
        </a>{" "}
        sets out the company forms that these documents support.
      </p>
      <DataTable head={["Document", "What it is", "Legalisation"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">Does the Indian subsidiary need a director who lives in India?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Section 149(3) of the Companies Act, 2013 requires every company to have at least one director who has stayed in
        India for a total of 182 days in the previous calendar year, subject to the current rules. The Act also contains
        provisions for companies that have not yet carried on business, and we confirm which applies at incorporation. The
        Singapore-based directors do not need to travel to India to incorporate; they sign with digital signature
        certificates and attend board meetings by video. The resident director carries the same duties as other directors,
        so clear appointment terms and a regular reporting pack are important.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Is the investment covered by the automatic route?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Many activities, including software and IT-enabled services, consulting, research and several kinds of
        manufacturing, are open to 100% foreign investment under the automatic route. Some sectors carry caps, conditions
        or government approval, so we check your activity against the sectoral limits in the current FDI policy and the
        FEMA (Non-debt Instruments) Rules. We also review the beneficial owners of the Singapore parent. Investment where a
        beneficial owner is situated in, or is a citizen of, a country sharing a land border with India requires government
        approval in every sector, so the full ownership chain is checked at the start.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What FEMA and RBI reporting follows the investment?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The foreign investment is reported to the RBI through Form FC-GPR within 30 days of share allotment, subject to the
        current rules. Later transfers of shares are reported on Form FC-TRS, and the annual Foreign Liabilities and Assets
        (FLA) return is due by 15 July, subject to the current rules. Remittances of dividends, royalties or fees to the
        Singapore parent may need Forms 15CA and 15CB. Our{" "}
        <Link href="/fema-rbi-compliance" className={linkClass}>
          FEMA and RBI compliance service
        </Link>{" "}
        prepares these filings on a calendar agreed with your finance team.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are payments to the Singapore parent documented for transfer pricing?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Services, royalties and cost recharges between the Indian company and the Singapore parent are international
        transactions between associated enterprises. They must be priced at arm&apos;s length, supported by a benchmarking
        study and documented each year, subject to the current rules. The accountant&apos;s report in Form 3CEB is filed with
        the income tax return where the Act requires it. Our{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing service
        </Link>{" "}
        prepares this documentation alongside the statutory audit.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which India–Singapore agreements affect the subsidiary?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Two agreements are relevant to an Indian subsidiary owned from Singapore. The treaty affects routine payments made
        to the parent; the trade agreement matters if your Indian company trades goods or services with Singapore.
      </p>
      <DataTable head={["Agreement", "What it is", "Why it matters"]} rows={SG_INDIA} />

      <h2 className="mt-14 text-2xl text-obsidian">How long does the set-up usually take?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The ranges below are indicative, depends on documents, and are not a commitment. Document legalisation in Singapore
        is usually the longest step, so it is usually started first.
      </p>
      <DataTable head={["Stage", "Indicative range", "What it depends on"]} rows={TIMELINE} />

      <h2 className="mt-14 text-2xl text-obsidian">What ongoing compliance does the Indian subsidiary need?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        After incorporation, the company files annual returns with the Registrar of Companies, including the financial
        statements (AOC-4) and the annual return (MGT-7), income tax and GST returns, TDS, and the FEMA reports above. Our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs this cycle, and our{" "}
        <Link href="/annual-compliance-package" className={linkClass}>
          annual compliance package
        </Link>{" "}
        covers the statutory calendar.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What should a Singapore company check with its Singapore adviser?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        We advise on Indian law only. A Singapore adviser handles Singapore matters, including the tax and corporate
        consequences of holding the Indian company, the parent&apos;s own ACRA filings and its Singapore tax position. We
        supply the Indian figures, filings and documents your Singapore adviser needs, and suggest the two advisers
        coordinate before the investment is made. Other cross-border questions are covered on our{" "}
        <Link href="/company-registration-india-for-foreigners" className={linkClass}>
          company setup in India for foreign businesses
        </Link>{" "}
        page.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Who is this for?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        This page is for Singapore founders and companies expanding into India, and for Indian-origin owners living in
        Singapore who want to hold an Indian company. If you are comparing other routes, our pages for{" "}
        <Link href="/india-subsidiary-for-us-companies" className={linkClass}>
          US companies
        </Link>
        ,{" "}
        <Link href="/india-subsidiary-for-uk-companies" className={linkClass}>
          UK companies
        </Link>{" "}
        and{" "}
        <Link href="/india-subsidiary-for-uae-companies" className={linkClass}>
          UAE companies
        </Link>{" "}
        cover similar structures. For personal tax questions of an NRI founder, see our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        .
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How does a Singapore–India working model run day to day?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India Standard Time is 2.5 hours ahead of Singapore, so the working day overlaps for most of the afternoon in India.
        Our work is handled online from Anna Nagar, Chennai: documents move through a secure portal, filings are signed
        digitally, and a monthly calendar fixes dates for payroll, the books, GST and TDS. To begin, please{" "}
        <Link href="/contact" className={linkClass}>
          contact us
        </Link>{" "}
        with your structure and sector.
      </p>
    </ServicePageTemplate>
  );
}
