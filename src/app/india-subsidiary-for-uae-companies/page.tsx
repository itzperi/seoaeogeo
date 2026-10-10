import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/india-subsidiary-for-uae-companies";
const title = "Set Up a Subsidiary in India from the UAE | CA Chennai";
const description =
  "Set up an Indian subsidiary from the UAE: mainland or free-zone parent, MOFA and Indian mission attestation, FDI route, FC-GPR, India–UAE treaty, NRI founders.";

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
  ["Trade licence and certificate of incorporation or registration", "Issued by the mainland licensing authority or the free-zone authority that registered the parent.", "Notarised where required, attested by the UAE Ministry of Foreign Affairs, then attested by the Embassy of India in Abu Dhabi or the Consulate General of India in Dubai."],
  ["Memorandum and articles of association", "Current constitutional documents of the parent.", "Same attestation chain: UAE notary or issuing authority, UAE Ministry of Foreign Affairs, then the Indian mission."],
  ["Board or shareholders' resolution", "Approves the investment, names the subscriber, nominee shareholder and authorised representative for India.", "Signed and notarised in the UAE, then attested by the UAE Ministry of Foreign Affairs and the Indian mission."],
  ["Register of shareholders or share certificate", "Shows who owns the parent, used to establish beneficial ownership.", "Attested as above if requested by the bank or Registrar."],
  ["Passport and address proof of foreign directors", "Identity and address proof for DIN and DSC; UAE residents often use an Emirates ID and tenancy or utility documents with the passport.", "Notarised copies attested through the same chain. Indian citizens may instead self-attest some documents; we confirm what applies to each director."],
];

const UAE_INDIA = [
  ["India–UAE tax treaty", "Double Taxation Avoidance Agreement signed in 1992 and amended by protocols in 2007 and 2012, as modified by the BEPS Multilateral Instrument.", "Withholding rates on dividends, interest, royalties and fees, tax residence tests, permanent establishment and relief from double taxation."],
  ["Comprehensive Economic Partnership Agreement (CEPA)", "Signed on 18 February 2022 and in force from 1 May 2022.", "Tariffs and market access for trade in goods and services; relevant if the Indian company trades with the UAE."],
  ["Bilateral Investment Treaty (BIT)", "Signed on 13 February 2024 and in force from 31 August 2024, replacing the earlier treaty.", "Protection standards for investments made by investors of one country in the other, with dispute resolution conditions."],
];

const UAE_ITEMS = [
  ["UAE Corporate Tax position of the parent", "Applies for financial years starting on or after 1 June 2023; dividends and gains from the Indian subsidiary may qualify for relief subject to conditions.", "Your UAE tax adviser."],
  ["Qualifying free zone status", "Income from an Indian subsidiary, and services bought from it, can affect a free-zone parent's qualifying status.", "Your UAE tax adviser."],
  ["UAE transfer pricing", "Transactions with the Indian subsidiary must also satisfy UAE arm's length and documentation rules.", "Your UAE adviser, aligned with our Indian transfer pricing documentation."],
  ["Tax residence certificate", "Needed by the parent to claim treaty rates on payments from India.", "Applied for by the parent in the UAE; we file the Indian declarations."],
  ["Economic substance and management", "Where the parent is managed from matters for its treaty residence and for whether it is treated as a genuine holding company.", "Your UAE adviser, with input from us on Indian anti-avoidance provisions."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="India Subsidiary Incorporation for UAE Companies"
      crumbLabel="India Subsidiary for UAE Companies"
      crumbHref={slug}
      parentCrumb={{ name: "Company Setup in India for Foreign Businesses", href: "/company-registration-india-for-foreigners" }}
      eyebrow="India Entry · UAE Mainland & Free-Zone Companies"
      h1="Set Up a Subsidiary in India from the UAE"
      subhead="How a UAE mainland or free-zone company, or an NRI founder based in the UAE, incorporates an Indian private limited company: document attestation, the resident director rule, the FDI automatic route, FC-GPR, the India–UAE tax treaty, CEPA and investment treaty, and points for your UAE adviser."
      keyFacts={[
        { label: "Usual structure", value: "UAE company holds all or nearly all shares of an Indian private limited company, with a nominee as the second shareholder." },
        { label: "Directors", value: "At least two; at least one must have stayed in India for 182 days or more in the financial year (section 149(3), Companies Act, 2013)." },
        { label: "Document legalisation", value: "Attestation, not apostille: the UAE is not listed as a party to the Hague Apostille Convention. Documents go through the UAE Ministry of Foreign Affairs and then the Indian mission." },
        { label: "FDI approval", value: "None in automatic-route sectors, unless a beneficial owner is from a country sharing a land border with India." },
        { label: "RBI reporting", value: "Form FC-GPR within 30 days of share allotment, then the annual FLA return by 15 July." },
        { label: "Treaties", value: "India–UAE tax treaty; CEPA in force from 1 May 2022; Bilateral Investment Treaty in force from 31 August 2024." },
      ]}
      introHeading="Can a UAE company set up a wholly owned subsidiary in India?"
      intro="Yes. A UAE mainland or free-zone company can own 100% of an Indian private limited company under the automatic route in most sectors. Because the UAE is not a party to the Apostille Convention, its documents are attested by the UAE Ministry of Foreign Affairs and the Indian mission. One director must be resident in India for 182 days."
      citation={{ label: "Embassy of India, Abu Dhabi: attestation services (indembassyuae.gov.in)", href: "https://www.indembassyuae.gov.in/page/attestation-services/" }}
      subServicesHeading="What do we handle for a UAE parent or NRI founder setting up in India?"
      subServices={[
        { name: "Structure and Ownership Review", text: "We compare holding the Indian company through a UAE entity with holding it personally as an NRI, and check the FDI route, beneficial ownership and director structure." },
        { name: "Attestation Checklist", text: "We give a document-by-document list showing what must be notarised, attested by the UAE Ministry of Foreign Affairs and attested by the Indian mission, and in what order." },
        { name: "DSC, DIN and SPICe+ Filing", text: "We obtain directors' digital signatures, reserve the name, draft the MOA and AOA, and file SPICe+ with the Registrar of Companies." },
        { name: "Bank Account and Capital", text: "We coordinate the current account, the remittance of share capital from the UAE, the remittance documents and the allotment of shares." },
        { name: "FC-GPR and First-Year Compliance", text: "We file FC-GPR, the commencement of business declaration, and set up GST, payroll and TDS so the company can start operating." },
        { name: "Treaty and Transfer Pricing Support", text: "We prepare Indian transfer pricing documentation and the Indian declarations needed for treaty rates, and provide figures to your UAE adviser." },
      ]}
      howTo={{
        heading: "How does a UAE company set up its Indian subsidiary step by step?",
        steps: [
          { name: "Confirm activity, structure and owners", text: "Check the FDI Policy for your sector, confirm the parent's ultimate beneficial owners, and identify two directors including one who meets the 182-day India stay test." },
          { name: "Attest documents in the UAE", text: "Notarise resolutions and copies, have them attested by the UAE Ministry of Foreign Affairs, then by the Embassy of India in Abu Dhabi or the Consulate General in Dubai." },
          { name: "Obtain DSCs and reserve the name", text: "Directors' digital signature certificates are issued and the proposed name is reserved through SPICe+ Part A on the MCA portal." },
          { name: "File SPICe+ for incorporation", text: "SPICe+ Part B, the MOA and AOA and linked forms are filed; on approval the company receives its certificate of incorporation, PAN and TAN." },
          { name: "Open the bank account and remit capital", text: "The company opens a current account with an authorised dealer bank, the UAE parent remits the subscription money, and shares are allotted within 60 days of receipt." },
          { name: "File FC-GPR and start operations", text: "FC-GPR is filed within 30 days of allotment, the commencement declaration is filed, and GST, payroll and intercompany agreements are put in place." },
        ],
      }}
      faqs={[
        { question: "Can a UAE free-zone company own an Indian subsidiary?", answer: "Yes. A company registered in a UAE free zone or on the mainland can subscribe to shares of an Indian private limited company as a foreign investor, up to 100% in automatic-route sectors. Check that the parent's licence and constitutional documents allow it to hold investments, and confirm the free-zone tax implications with your UAE adviser." },
        { question: "Do UAE documents need an apostille for India?", answer: "No. The UAE is not listed as a party to the Hague Apostille Convention on the HCCH status table, so UAE documents are legalised by attestation instead. They are notarised or issued by the relevant authority, attested by the UAE Ministry of Foreign Affairs, and then attested by the Embassy of India in Abu Dhabi or the Consulate General in Dubai." },
        { question: "Can an NRI living in the UAE be a director of the Indian company?", answer: "Yes, but an NRI who lives in the UAE usually cannot be the resident director, because section 149(3) of the Companies Act, 2013 requires at least one director who stayed in India for 182 days or more in the financial year. The NRI can be one director, with a second director in India meeting the residency test." },
        { question: "Should an NRI founder invest personally or through a UAE company?", answer: "It depends on your plans. Holding personally is simpler and investment by an NRI on a non-repatriation basis is treated like domestic investment under the FEMA rules. Holding through a UAE company may suit group structures and outside investors, but it brings FC-GPR reporting, substance questions and UAE tax considerations. We compare both for your case." },
        { question: "Does the India–UAE tax treaty reduce tax on dividends?", answer: "The India–UAE Double Taxation Avoidance Agreement can reduce Indian withholding tax on dividends, interest, royalties and fees paid to a UAE resident parent, subject to conditions such as tax residence and beneficial ownership. The parent needs a UAE tax residence certificate and the prescribed declarations in India to claim the treaty rate." },
        { question: "Do CEPA and the investment treaty affect incorporation?", answer: "Not directly. CEPA, in force from 1 May 2022, deals mainly with trade in goods and services, and the Bilateral Investment Treaty, in force from 31 August 2024, sets protection standards for investments. Incorporation itself still follows the FDI Policy, the Companies Act and FEMA reporting." },
        { question: "What UAE Corporate Tax points should we check?", answer: "Your UAE adviser will usually look at whether dividends and gains from the Indian subsidiary qualify for relief, how the investment affects any qualifying free zone status, UAE transfer pricing on intercompany transactions, and substance. We do not advise on UAE tax, but we provide the Indian figures your adviser needs." },
        { question: "What if the UAE parent is owned by investors from a neighbouring country of India?", answer: "Investment where a beneficial owner is situated in, or is a citizen of, a country sharing a land border with India needs government approval in every sector, even if the investing company is in the UAE. We check the full ownership chain at the start so that this is identified before documents are prepared." },
      ]}
      relatedQuestions={[
        { question: "Should we hire through an EOR before incorporating?", href: "/eor-vs-subsidiary-india" },
        { question: "How are NRIs in the UAE taxed in India?", href: "/nri-tax-services-uae" },
        { question: "What FEMA filings follow a foreign investment?", href: "/fema-rbi-compliance" },
      ]}
      relatedSlugs={["india-subsidiary-compliance-cfo", "fema-rbi-compliance", "transfer-pricing-audit"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What documents does a UAE parent need, and how are they attested?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        The UAE is not listed as a party on the HCCH status table for the Apostille Convention, so UAE documents cannot be
        apostilled for India. They are legalised by attestation: the document is notarised or issued by the competent UAE
        authority, attested by the UAE Ministry of Foreign Affairs, and then attested by the Embassy of India in Abu Dhabi or
        the Consulate General of India in Dubai, whose attestation services are now handled through an outsourced service
        centre by appointment. Requirements for free-zone documents can differ between authorities, so we confirm the list
        before you start.
      </p>
      <DataTable head={["Document", "What it is", "Legalisation"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">Mainland or free-zone parent: does it make a difference?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        For Indian company law and FEMA, both are simply foreign companies investing in India, and the process is the same.
        The differences are on the UAE side: the licensing authority that issues the parent&apos;s documents, whether the
        licence permits holding investments abroad, and how the parent&apos;s UAE Corporate Tax position, including any
        qualifying free zone status, is affected by owning an Indian company or buying services from it. These are points to
        settle with your UAE adviser before the investment is made.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How should an NRI founder in the UAE structure the Indian company?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Many UAE-based founders are Indian citizens or overseas citizens of India. They can hold shares in the Indian company
        personally or through a UAE company. Personal holding is simpler, and investment by an NRI on a non-repatriation basis
        is treated in the same way as investment by a resident. Holding through a UAE company creates foreign direct investment,
        with FC-GPR and FLA reporting, but can suit groups with several businesses or outside investors. In either case the
        founder usually cannot be the resident director while living in the UAE, and the founder&apos;s own residential
        status for Indian income tax depends on days spent in India and other tests. Our{" "}
        <Link href="/nri-tax-services-uae" className={linkClass}>
          NRI tax services for the UAE
        </Link>{" "}
        cover the personal side.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which India–UAE agreements apply?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Three agreements between India and the UAE are relevant. The tax treaty affects routine payments between the
        companies; CEPA matters if you trade goods or services across the border; the investment treaty sets protection
        standards for the investment itself.
      </p>
      <DataTable head={["Agreement", "Status", "Why it matters"]} rows={UAE_INDIA} />

      <h2 className="mt-14 text-2xl text-obsidian">What should a UAE parent check with its UAE tax adviser?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        We do not advise on UAE tax. These are the items UAE advisers commonly review when a UAE company owns an Indian
        subsidiary, listed so you can raise them early and we can supply the Indian information in time.
      </p>
      <DataTable head={["Item for your UAE adviser", "Why it comes up", "Who handles it"]} rows={UAE_ITEMS} />

      <h2 className="mt-14 text-2xl text-obsidian">How does a UAE–India working model run day to day?</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        India Standard Time is 1.5 hours ahead of UAE time, so working days almost fully overlap. Our team in Anna Nagar,
        Chennai works with UAE clients remotely: documents move through a secure portal, filings are signed digitally, and
        a monthly calendar fixes dates for payroll, the books, GST and TDS. Transactions between the Indian company and the
        UAE parent are priced at arm&apos;s length and documented under our{" "}
        <Link href="/transfer-pricing-audit" className={linkClass}>
          transfer pricing service
        </Link>
        , and our{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={linkClass}>
          India subsidiary compliance and CFO service
        </Link>{" "}
        runs the annual cycle. If you want to hire before incorporating, compare an{" "}
        <Link href="/eor-vs-subsidiary-india" className={linkClass}>
          EOR with a subsidiary
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
