import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import HighTicketSections, { type Audience } from "@/components/HighTicketSections";
import { SITE_URL } from "@/lib/site";

const slug = "/nri-tax-services";
const title = "NRI Tax Services in India | CA Firm in Chennai";
const description =
  "Residential status, DTAA relief, property-sale TDS, NRO repatriation and RNOR planning for NRIs, handled online by a Chennai chartered accountant firm.";

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
const P = "mt-4 max-w-3xl leading-relaxed text-slate";
const H2 = "mt-14 text-2xl text-obsidian";

function DataTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
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
          {rows.map((r, ri) => (
            <tr key={ri}>
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

const STATUS_ROWS: ReactNode[][] = [
  [
    "Non-resident (NRI)",
    "Taxable in India: income received, accrued or arising in India, such as rent, NRO interest, capital gains on Indian assets and Indian dividends.",
    "Not taxable in India, unless it is received in India or arises from a business controlled from India.",
    "Not required. Schedule FA is for residents.",
  ],
  [
    "Resident but not ordinarily resident (RNOR)",
    "Taxable in India: all Indian income, as for an NRI.",
    "Generally not taxable, except income from a business controlled from India or a profession set up in India, or income received in India.",
    "Generally not required. Schedule FA applies to residents other than RNOR.",
  ],
  [
    "Resident and ordinarily resident (ROR)",
    "Taxable in India: all Indian income.",
    "Taxable in India: worldwide income, with a foreign tax credit where a treaty or the Act allows it.",
    "Required. Foreign bank accounts, shares, RSUs, property and signing authority are disclosed.",
  ],
];

const TDS_ROWS: ReactNode[][] = [
  [
    "Who deducts",
    "The buyer, who needs a TAN and deposits the tax with the government under section 195 of the Income-tax Act, 1961 (the 2025 Act carries an equivalent provision).",
    "The buyer deducts only the amount stated in the certificate, which the Assessing Officer issues after reviewing your gain computation.",
  ],
  [
    "On what amount",
    "In practice, buyers often deduct on the full sale price because the gain is not known to them. The deduction is a prepayment of your tax, not the tax itself.",
    "On the tax actually payable on your real gain, which can be a fraction of the sale price, or nil where the gain is exempt or there is no gain.",
  ],
  [
    "What you do",
    "Nothing before the sale, but the cash locked up as TDS is recovered only when you file a return and claim the refund.",
    "Apply online with your sale agreement, cost of acquisition and exemption plan before the registration date and before the buyer pays.",
  ],
  [
    "Effect on cash flow",
    "The buyer pays you the price less the full TDS. Repatriating the balance is limited by what you actually receive.",
    "More of the price reaches your account at closing; any difference between certificate tax and final tax is settled in your return.",
  ],
  [
    "After the sale",
    "File the return, show the TDS credit from Form 26AS and AIS, and claim the refund of the excess.",
    "File the return as usual; the certificate does not remove the duty to report the sale and claim any exemption.",
  ],
];

const HUB_ROWS: ReactNode[][] = [
  [
    <Link key="usa" href="/nri-tax-services-usa" className={linkClass}>
      NRIs in the USA
    </Link>,
    "US citizens, green-card holders and H-1B workers with Indian rent, NRO interest or a flat to sell.",
    "Indian return, Indian tax-paid figures for your US CPA, FBAR and FATCA data points from the Indian side.",
  ],
  [
    <Link key="uk" href="/nri-tax-services-uk" className={linkClass}>
      NRIs in the UK
    </Link>,
    "Individuals filing UK Self Assessment who also have Indian income or property.",
    "Indian return, DTAA position and evidence for your UK accountant to claim credit.",
  ],
  [
    <Link key="uae" href="/nri-tax-services-uae" className={linkClass}>
      NRIs in the UAE
    </Link>,
    "Dubai, Abu Dhabi and Sharjah residents with Indian income, including those near the deemed-residency threshold.",
    "Tax Residency Certificate and Form 10F planning, deemed residency check, Indian return.",
  ],
  [
    <Link key="gulf" href="/nri-tax-services-gulf" className={linkClass}>
      NRIs in the Gulf
    </Link>,
    "Residents of Saudi Arabia, Qatar, Kuwait, Oman and Bahrain, and other Gulf states.",
    "Indian return, NRO and rent TDS reconciliation, repatriation paperwork.",
  ],
  [
    <Link key="sg" href="/nri-tax-services-singapore" className={linkClass}>
      NRIs in Singapore
    </Link>,
    "Employees and business owners in Singapore with Indian income or assets.",
    "Indian return, DTAA review, capital gains and repatriation steps.",
  ],
  [
    <Link key="prop" href="/nri-property-sale-tds-chennai" className={linkClass}>
      NRI property sale TDS in Chennai
    </Link>,
    "NRIs selling a flat, house or plot in Chennai.",
    "Lower-deduction certificate, capital gains computation and buyer coordination.",
  ],
  [
    <Link key="15ca" href="/form-15ca-15cb-chennai" className={linkClass}>
      Form 15CA and 15CB in Chennai
    </Link>,
    "NRIs moving money out of an NRO account or property proceeds abroad.",
    "Chartered accountant certificate (15CB), declaration (15CA) and bank submission.",
  ],
];

const AUDIENCES: Audience[] = [
  {
    who: "NRI selling a Chennai flat",
    need: "A buyer waiting to deduct tax, a gain to compute and sale proceeds to move abroad.",
    help: "Lower-deduction application, capital gains computation, sections 54 and 54EC planning and repatriation paperwork.",
    enquiry: "selling a flat in Chennai as an NRI and reducing the TDS",
  },
  {
    who: "Returning NRI (RNOR planning)",
    need: "Moving back to India and unsure what happens to foreign income, accounts and RSUs in the first years.",
    help: "Residency calendar, RNOR window, foreign asset disclosure and a plan for the transition years.",
    enquiry: "returning to India as an NRI and planning my RNOR status",
  },
  {
    who: "NRI with an income tax notice",
    need: "A notice or intimation that arrived while you are abroad, with a response date running.",
    help: "Reading the notice, collecting records online and preparing the reply for e-filing.",
    enquiry: "an income tax notice received as an NRI",
  },
  {
    who: "Gulf NRI with rent and NRO interest",
    need: "TDS on Chennai rent and NRO interest, and a question on whether to file at all.",
    help: "TDS reconciliation against Form 26AS, return filing and refund of any excess deduction.",
    enquiry: "filing an Indian return as a Gulf NRI with rent and NRO interest",
  },
  {
    who: "NRI moving NRO funds abroad",
    need: "Money in an NRO account that has to go to a foreign account or to NRE.",
    help: "Tax-paid check, Form 15CB certificate, Form 15CA and the bank's documentation.",
    enquiry: "transferring NRO funds abroad with Form 15CA and 15CB",
  },
  {
    who: "Employee with foreign RSUs or ESOPs coming back",
    need: "Shares vesting after relocation, with tax in two countries and Schedule FA to complete.",
    help: "Perquisite and capital gains computation, foreign tax credit claim and disclosure schedules.",
    enquiry: "taxation of foreign RSUs after returning to India",
  },
];

const NOT_INCLUDED = [
  "Advice on UK, US, UAE or other foreign tax, or your overseas returns. Your local accountant or CPA handles those; we supply the Indian figures they need.",
  "Immigration, banking or investment advice, or the choice of an investment product for your NRE or NRO funds.",
  "Acting as your guarantor, trustee or attorney, or registering a property for you. A Power of Attorney is drawn up by an advocate.",
  "Promising a refund, a certificate or a timeline. These depend on the department and on your records.",
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services"
      crumbHref={slug}
      eyebrow="NRI Clients · USA · UK · UAE · Gulf · Singapore"
      h1="NRI Tax Services in India"
      subhead="Indian tax returns, residential status, DTAA claims, property-sale TDS, repatriation and RNOR planning for non-resident Indians, with separate guidance by country. Handled remotely from our Anna Nagar office in Chennai."
      keyFacts={[
        { label: "Who counts as an NRI", value: "Non-resident under section 6: below 182 days in India, and below the 60 plus 365-day test, with special rules for citizens." },
        { label: "Taxed in India", value: "Indian rent, NRO interest, dividends and capital gains, even when you live abroad." },
        { label: "Treaty relief", value: "Tax Residency Certificate of your country of residence and Form 10F." },
        { label: "Property sale", value: "Buyer deducts TDS under section 195 unless you hold a lower or nil deduction certificate." },
        { label: "Moving money abroad", value: "NRO balances up to USD 1 million per financial year, with Forms 15CA and 15CB." },
        { label: "Where we work", value: "Online for clients in any time zone; our only office is in Anna Nagar, Chennai." },
      ]}
      introHeading="Do NRIs need to file an income tax return in India?"
      intro="Yes, if they earn income in India above the basic exemption limit, or have tax deducted they want refunded. Rent from a Chennai flat, NRO interest, capital gains and dividends are taxable in India even when you live abroad. How that income is treated where you live depends on your country of residence."
      citation={{ label: "Income Tax Department - Non-resident individuals", href: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-0" }}
      subServicesHeading="Which NRI tax services apply to where you live?"
      subServices={[
        { name: "NRIs in the UAE and Gulf", text: "No personal income tax on salary in the UAE, so the questions are different: India-UAE DTAA claims with a Tax Residency Certificate, and the deemed-residency rule for Indian citizens with Indian income above ₹15 lakh." },
        { name: "NRIs in the UK", text: "Indian rent, interest and gains also go on your UK Self Assessment. We prepare the Indian return and the tax-paid evidence your UK accountant needs to claim credit under the India-UK DTAA." },
        { name: "NRIs in the USA", text: "US citizens and green-card holders report worldwide income. We file the Indian return and give your US CPA the Indian tax and account figures for the foreign tax credit, FBAR and FATCA." },
        { name: "Selling property in Chennai", text: "The buyer must deduct TDS under section 195 unless you hold a lower-deduction certificate. We apply for the certificate, compute the capital gain and handle Forms 15CA and 15CB for repatriation." },
        { name: "NRE, NRO and FCNR accounts", text: "NRE and FCNR interest is exempt in India while you remain non-resident; NRO interest is taxable and tax is deducted at source. We reconcile the TDS against your return and claim refunds where too much was deducted." },
        { name: "Returning to India", text: "Moving back changes your residential status over the following years. We plan the RNOR (resident but not ordinarily resident) window so foreign income, accounts and RSUs are handled correctly in the transition years." },
      ]}
      howTo={{
        heading: "How do NRIs file an Indian income tax return remotely?",
        steps: [
          { name: "Status check", text: "We confirm your residential status for the year from your days in India, citizenship and Indian income. This decides what India can tax." },
          { name: "Document collection", text: "You upload Form 26AS, AIS, bank and NRO statements, rent agreements or sale deeds, your passport entry and exit stamps, and any Tax Residency Certificate to a shared folder. Nothing needs to be couriered." },
          { name: "Computation and treaty review", text: "We compute Indian taxable income, apply DTAA relief where it changes the Indian tax, and list the TDS to be claimed back." },
          { name: "Review call and filing", text: "A video call at a time that overlaps our working hours walks you through the computation. We then e-file the return and you verify it online." },
          { name: "Refund and repatriation", text: "We track the refund, answer any intimation that follows, and prepare Forms 15CA and 15CB if you are moving money abroad. You also get the Indian tax-paid figures your overseas adviser needs." },
        ],
      }}
      faqs={[
        { question: "Who counts as an NRI for Indian income tax?", answer: "You are resident in a year if you spend 182 days or more in India, or 60 days or more in that year plus 365 days or more over the four preceding years. For Indian citizens leaving for work abroad, and for citizens or persons of Indian origin visiting India, the 60-day test is replaced by 182 days, or 120 days if Indian income exceeds ₹15 lakh. Deemed residency can apply to citizens not taxed anywhere else." },
        { question: "Is NRE account interest taxable in India?", answer: "Interest on NRE and FCNR deposits is exempt from Indian income tax while you remain a non-resident under the Income-tax Act. Interest on an NRO account is taxable in India, and the bank deducts tax at source; if your actual liability is lower, the excess can be claimed back by filing a return." },
        { question: "Do I still need an Indian return if TDS was already deducted?", answer: "Often yes. TDS on NRO interest, rent or a property sale is usually deducted at a high flat rate, so filing a return is how you claim back tax deducted beyond your real liability. A return is also needed to carry forward losses or report capital gains correctly." },
        { question: "How do I claim DTAA relief as an NRI?", answer: "You usually need a Tax Residency Certificate from the tax authority of your country of residence and Form 10F, filed electronically on the income tax portal, along with your PAN. These support the treaty position in your Indian return and with payers who deduct tax. The treaty can reduce Indian tax or give you credit abroad, depending on the article and your facts." },
        { question: "How is TDS deducted when an NRI sells property in Chennai?", answer: "The buyer must deduct tax under section 195 of the Income-tax Act, 1961 and deposit it with the government. Because the buyer does not know your actual gain, the deduction is often on the whole sale price. A lower or nil deduction certificate from the Assessing Officer lets the buyer deduct only the amount stated in it." },
        { question: "How much can an NRI send abroad from an NRO account?", answer: "The RBI facility lets NRIs remit up to USD 1 million per financial year from NRO balances, including sale proceeds of assets, once Indian tax is paid. The bank needs Form 15CB from a chartered accountant and Form 15CA. Conditions apply, so we check your source of funds and tax position first." },
        { question: "What is RNOR status and when does it help a returning NRI?", answer: "Resident but not ordinarily resident is a transition status for people who were non-resident in nine of the ten years before, or stayed 729 days or less in India in the previous seven years. During it, foreign income that does not arise from an Indian business or profession is generally not taxed in India. We plan your return date around it." },
        { question: "How are foreign RSUs taxed when I move back to India?", answer: "On vesting, the market value less any amount you paid is generally taxed as salary perquisite in India for the part of the vesting period you work here. On sale, the gain over that vesting value is capital gain. Once resident and ordinarily resident, you also disclose the shares in Schedule FA and can claim credit for foreign tax." },
        { question: "Can you handle everything without me travelling to India?", answer: "Yes. Documents are shared digitally, reviews happen on video calls, and returns are e-filed and verified online. For property sales, a Power of Attorney attested at an Indian embassy or consulate lets someone in Chennai sign at the Sub-Registrar office if you cannot travel." },
        { question: "Do you advise on UK, US or UAE tax as well?", answer: "We advise on the Indian side only. We coordinate with your local accountant or CPA and give them the Indian figures, tax-paid evidence and DTAA position they need, so your overseas return and your Indian return tell the same story." },
        { question: "Which tax law applies after the new Income-tax Act?", answer: "The Income-tax Act, 2025 applies from 1 April 2026 and renumbers most sections. Income for financial year 2025-26 and earlier is still assessed under the 1961 Act, so notices and certificates for those years quote the old section numbers. We map both for you." },
        { question: "What time can I schedule a call from abroad?", answer: "Our hours are 9:30 AM to 6:30 PM India time, Monday to Saturday. We schedule calls where your day overlaps ours: the Gulf can use most of our day, the UK your morning, and the USA your early morning or our late afternoon. Documents and filings are handled online between calls." },
      ]}
      relatedQuestions={[
        { question: "Am I an NRI, RNOR or resident this year?", href: "/tools/nri-residential-status-calculator" },
        { question: "How do I reduce TDS when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "How do I move money abroad with Forms 15CA and 15CB?", href: "/form-15ca-15cb-chennai" },
        { question: "I live in Dubai. Do I pay tax in India?", href: "/nri-tax-services-uae" },
        { question: "How does my US CPA use my Indian tax figures?", href: "/nri-tax-services-usa" },
      ]}
      relatedPosts={["nri-itr-filing", "rnor-status-returning-nri"]}
      relatedSlugs={["nri-tax-services-uae", "nri-tax-services-uk", "nri-tax-services-usa", "nri-property-sale-tds-chennai"]}
    >
      <HighTicketSections audiences={AUDIENCES} notIncluded={NOT_INCLUDED} />

      <h2 className={H2}>What is my residential status under section 6?</h2>
      <p className={P}>
        Your status for a year is decided by your days in India in that year and the years before it, not by your passport or
        where your family lives.
      </p>
      <p className={P}>
        Under section 6 of the Income-tax Act, 1961 (the 2025 Act carries an equivalent provision), you are resident if you
        are in India for 182 days or more in the year. You are also resident if you spent 60 days or more in the year and 365
        days or more across the four years before it. If you meet neither test, you are a non-resident. Each financial year is
        tested separately, so you can be an NRI one year and resident the next. Keep your passport stamps, boarding passes and
        employer travel records, because the department can ask for them and the days are easy to miscount.
      </p>

      <h2 className={H2}>When does the 120-day rule or deemed residency apply to me?</h2>
      <p className={P}>
        Two special rules change the simple tests for Indian citizens, and both turn on how much Indian income you have.
      </p>
      <p className={P}>
        If you are an Indian citizen who leaves India for employment abroad, or a citizen or person of Indian origin who
        visits India, the 60-day test is replaced by 182 days. The limit drops to 120 days where your Indian income, excluding
        foreign income, is more than ₹15 lakh in the year; in that case you become resident but only as RNOR. Separately,
        section 6(1A) deems an Indian citizen with Indian income above ₹15 lakh to be resident if they are not liable to tax
        in any other country because of domicile or residence there. This is why Gulf-based NRIs with large Chennai rent or
        interest should check their days each year. We also see it with people whose income sits just above the line.
      </p>

      <h2 className={H2}>What is the RNOR window and how long does it last?</h2>
      <p className={P}>
        RNOR is a middle status between NRI and fully resident, and it matters most in the years after you return to India.
      </p>
      <p className={P}>
        You are resident but not ordinarily resident if you were non-resident in nine of the ten years before the current
        year, or if you stayed in India for 729 days or less in the seven years before it. For many returning NRIs this gives
        a window of about two or three years, depending on the days spent in India before and after the move. In the window,
        income from foreign sources is generally outside the Indian tax net unless it comes from a business controlled in
        India or a profession set up in India, or is received in India. The window is easy to lose, so the date you land, the
        timing of foreign share sales and when you close or move foreign accounts all deserve planning. Our guide to{" "}
        <Link href="/blog/rnor-status-returning-nri" className={linkClass}>
          RNOR status for returning NRIs
        </Link>{" "}
        goes through the calendar in detail.
      </p>

      <h2 className={H2}>What is taxable in India for an NRI, an RNOR and a resident?</h2>
      <p className={P}>
        The status you land in decides whether India taxes only its own income or your global income, and whether foreign
        assets must be disclosed.
      </p>
      <DataTable head={["Status", "Indian income", "Foreign income", "Schedule FA disclosure"]} rows={STATUS_ROWS} />
      <p className={P}>
        These are the general outcomes; your own facts can change them, for example where income is received in India or a
        treaty applies. For filing steps, read{" "}
        <Link href="/blog/nri-itr-filing" className={linkClass}>
          how an NRI files an Indian income tax return
        </Link>
        , and for your wider planning see our{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax consulting for high-net-worth clients in Chennai
        </Link>
        .
      </p>

      <h2 className={H2}>How does DTAA relief work with a Tax Residency Certificate and Form 10F?</h2>
      <p className={P}>
        A double taxation avoidance agreement lets you claim relief so the same income is not fully taxed in both countries,
        but you must prove where you live for tax purposes.
      </p>
      <p className={P}>
        To use the treaty with India, you generally obtain a Tax Residency Certificate from the tax authority of your country
        of residence and file Form 10F electronically on the income tax portal. You also need an Indian PAN. The treaty may
        limit the rate at which India taxes dividends, interest, royalties or fees, or it may decide which country has the
        first right to tax gains. The result depends on the specific article and on whether you meet its conditions. Often
        the treaty works in the other direction as well, because your home country gives a credit for the Indian tax paid. We
        read the treaty for your country, prepare the Indian side of the claim and give your overseas adviser the tax-paid
        evidence; the foreign tax treatment stays with your home adviser. See the country pages for{" "}
        <Link href="/nri-tax-services-uae" className={linkClass}>
          the UAE
        </Link>
        ,{" "}
        <Link href="/nri-tax-services-uk" className={linkClass}>
          the UK
        </Link>{" "}
        and{" "}
        <Link href="/nri-tax-services-usa" className={linkClass}>
          the USA
        </Link>
        .
      </p>

      <h2 className={H2}>How is tax deducted when an NRI sells a flat in Chennai?</h2>
      <p className={P}>
        The buyer deducts tax at source under section 195 of the Income-tax Act, 1961 (the 2025 Act carries an equivalent
        provision) and pays it to the government on your behalf.
      </p>
      <p className={P}>
        Because the buyer cannot know your cost or exemptions, buyers often deduct on the whole sale price rather than only on
        the gain. Long-term gains on property are currently taxed at 12.5% plus surcharge and cess; short-term gains are taxed
        at slab rates. The deduction can therefore far exceed your real tax. The table compares the default route with a
        lower-deduction certificate, and the mechanism is the same on every sale.
      </p>
      <DataTable head={["Point", "Default deduction under section 195", "With a lower or nil deduction certificate"]} rows={TDS_ROWS} />
      <p className={P}>
        We cover the Chennai-specific steps, including guideline value and the sale deed, on our page for{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale TDS in Chennai
        </Link>
        .
      </p>

      <h2 className={H2}>How do I get a lower or nil deduction certificate for property sale TDS?</h2>
      <p className={P}>
        You apply online to the income tax department, which issues a certificate telling the buyer the amount of tax to
        deduct.
      </p>
      <p className={P}>
        The application is made to the Assessing Officer (International Taxation) through the income tax portal, using Form 13
        under the Income-tax Act, 1961. It needs a computation of your gain with the cost of acquisition and any planned
        exemption, the draft or signed sale agreement, PAN details of buyer and seller, and your last returns. The officer may
        ask for more information, so start before the agreement date and before any advance is paid. Once issued, the
        certificate applies to that transaction for the period stated in it; you hand a copy to the buyer, who deducts only the
        stated amount. We prepare the computation and respond to queries while you remain abroad. We cannot promise the amount
        or the time the officer will take.
      </p>

      <h2 className={H2}>Which capital gains exemptions can an NRI use under sections 54 and 54EC?</h2>
      <p className={P}>
        Both are available to NRIs on long-term gains from property, but they have different conditions and they are not
        interchangeable.
      </p>
      <p className={P}>
        Section 54 exempts the long-term gain on sale of a residential house if you reinvest it in a new residential house in
        India. You buy within one year before or two years after the sale, or construct within three years after it. The
        exemption is capped at the amount invested in the new house, and there is an overall cap on the exempt gain set by
        the Act. Section 54EC exempts long-term gain on land or building if you invest the gain in specified bonds within six
        months of the sale; the investment limit is ₹50 lakh per financial year and the bonds have a five-year lock-in. If
        you cannot invest before your return due date, unspent gain under section 54 can be placed in the Capital Gains
        Account Scheme. Because the exemptions affect the certificate you apply for and the tax you can send abroad, we decide
        the reinvestment plan before the sale rather than after it.
      </p>

      <h2 className={H2}>How do I move money from an NRO account to NRE or abroad?</h2>
      <p className={P}>
        You can remit NRO balances abroad after Indian tax is paid, up to the RBI limit, and the bank needs two forms to do it.
      </p>
      <p className={P}>
        The RBI allows NRIs to remit up to USD 1 million per financial year from NRO balances, which can include the proceeds
        of selling assets such as property, subject to the conditions in the rules. The bank asks for Form 15CB, a certificate
        from a chartered accountant on the nature of the payment and the tax position, and Form 15CA, the declaration filed
        online by you. Both forms are renumbered under the 2025 Act. NRE balances are generally freely repatriable, and
        moving money from NRO to NRE is treated as a transfer within the same overall limit. We check that the tax on the
        income or sale has been paid before signing the certificate, which is why sale TDS and repatriation are planned
        together. Our page on{" "}
        <Link href="/form-15ca-15cb-chennai" className={linkClass}>
          Forms 15CA and 15CB in Chennai
        </Link>{" "}
        explains the certificate and the bank submission.
      </p>

      <h2 className={H2}>How are NRO, NRE and FCNR interest and Chennai rent taxed?</h2>
      <p className={P}>
        NRE and FCNR interest is exempt while you are non-resident, and NRO interest and rent are taxable in India.
      </p>
      <p className={P}>
        Banks deduct tax on NRO interest, commonly at 30% plus surcharge and cess, regardless of your actual slab. A tenant
        paying rent to an NRI also deducts tax under section 195. Both deductions are creditable, and the return is where you
        reconcile them against your real tax, claim the excess back and apply any treaty relief. Rent gets a standard deduction
        for repairs, and you can deduct municipal tax paid and loan interest within the rules. If your tenant or bank has not
        deducted tax, or has deducted it on the wrong basis, we correct the position in the return.
      </p>

      <h2 className={H2}>How are foreign RSUs and ESOPs taxed when I return to India?</h2>
      <p className={P}>
        Two events are taxed separately: the day the shares vest, and the day you sell them.
      </p>
      <p className={P}>
        On vesting, the market value of the share less anything you paid is generally taxed as a salary perquisite in India for
        the part of the vesting period you worked here. For someone who relocates mid-vesting, the split between India and
        abroad usually follows the days worked in each place. When you sell, the gain over the vesting value is a capital gain.
        Foreign shares are not listed in India, so they generally need to be held for more than 24 months to be long-term.
        Foreign tax paid at vesting or sale can be claimed as credit in India, usually through Form 67 filed with the return.
        Once you are resident and ordinarily resident, the shares and the foreign brokerage account go into Schedule FA, and a
        missed disclosure can bring penalties. If you are RNOR in the vesting year, the position differs, and this is a
        standard reason to plan the return date before the vesting date. Our guide on{" "}
        <Link href="/blog/foreign-rsu-tax-schedule-fa-chennai" className={linkClass}>
          foreign RSU and ESPP tax and Schedule FA
        </Link>{" "}
        covers the mechanics.
      </p>

      <h2 className={H2}>Which country page or related service fits my case?</h2>
      <p className={P}>
        Start with the page for the country you live in, then add the property or remittance page if you have a transaction
        coming up.
      </p>
      <DataTable head={["Page", "Who it is for", "What it covers on the Indian side"]} rows={HUB_ROWS} />
      <p className={P}>
        We are an Indian chartered accountancy firm, so foreign tax stays with your home adviser. The hub pages say exactly
        what we hand over to them.
      </p>

      <h2 className={H2}>What happens if I receive an Indian income tax notice while abroad?</h2>
      <p className={P}>
        Read the date and the section in the notice at once, because the reply period is set by the notice itself.
      </p>
      <p className={P}>
        Notices reach your email and the e-filing portal, and many NRIs miss them because they come to an old Indian address
        or an inactive email. Common triggers are mismatched TDS, high-value transactions, a property sale and unreported
        foreign assets. You can authorise us on the portal and respond online without travelling. Our page on{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies in Chennai
        </Link>{" "}
        describes how we read and answer notices, and the same process applies to NRIs.
      </p>

      <h2 className={H2}>How do calls and filing work across time zones?</h2>
      <p className={P}>
        We are open from 9:30 AM to 6:30 PM India time, Monday to Saturday, and calls are scheduled where your day overlaps
        ours.
      </p>
      <p className={P}>
        From the Gulf, most of our working day is available. From the UK, the overlap is your morning and early afternoon.
        From the USA, we usually speak at the end of our day, which falls in your early morning, and you receive written
        computations before the call so you can read them first. Our only office is at Anna Nagar, Chennai, and clients
        elsewhere are served online. Documents sit in a shared folder, authorisations are given on the income tax portal, and
        the return is e-filed and verified online.
      </p>
    </ServicePageTemplate>
  );
}
