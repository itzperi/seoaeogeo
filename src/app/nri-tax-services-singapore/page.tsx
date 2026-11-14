import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import HighTicketSections, { type Audience } from "@/components/HighTicketSections";
import { SITE_URL } from "@/lib/site";

const slug = "/nri-tax-services-singapore";
const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2 = "mt-14 text-2xl text-obsidian";
const p = "mt-4 max-w-3xl leading-relaxed text-slate";

export const metadata: Metadata = {
  title: { absolute: "Indian Tax Services for NRIs in Singapore: ITR, DTAA, RNOR" },
  description:
    "Indian tax for NRIs in Singapore: India–Singapore DTAA, IRAS Certificate of Residence and Form 10F, RSU/ESOP, CPF on return, RNOR and Chennai property TDS.",
  alternates: { canonical: slug },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "India Tax for NRIs in Singapore: ITR, DTAA, CPF and Return Planning",
    description:
      "Indian return filing, treaty paperwork, RSU and ESOP income, Chennai property TDS and RNOR planning for NRIs in Singapore, served online.",
    url: slug,
  },
};

function DataTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-6 max-w-4xl overflow-x-auto rounded-cards border border-ash">
      <table className="w-full min-w-[640px] text-left text-sm">
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
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "px-4 py-3 align-top font-medium text-obsidian" : "px-4 py-3 align-top text-slate"}>
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

const WHO_TAXES: ReactNode[][] = [
  ["Salary for work done in Singapore", "Not taxed in India while you are a non-resident and the salary is received outside India", "Taxed under Singapore's rules; your Singapore adviser handles this"],
  ["RSU and ESOP from a global employer", "Taxable in India only to the extent it relates to services rendered in India, and fully once you are resident for the relevant period", "Singapore's rules for equity pay are for your Singapore adviser"],
  ["Rent from a Chennai flat", "Taxable in India, with TDS by the tenant", "Singapore's treatment of foreign income is for your Singapore adviser"],
  ["Interest on an NRO account", "Taxable in India, TDS deducted by the bank", "Same as above"],
  ["Interest on NRE and FCNR deposits", "Exempt in India while you are a non-resident", "Same as above"],
  ["Sale of Indian shares or mutual funds", "Taxable in India as capital gains, subject to the treaty position", "Singapore generally does not tax capital gains, but your Singapore adviser confirms"],
  ["Sale of a Chennai property", "Taxable in India; buyer deducts TDS under section 195", "Same as above"],
];

const IRAS_DOCS: ReactNode[][] = [
  ["Passport", "Identity, nationality and travel stamps for day counts.", "Current copy"],
  ["Employment Pass, S Pass or Permanent Resident card", "Shows the basis on which you live and work in Singapore.", "Copy of front and back"],
  ["IRAS Certificate of Residence", "The document from the Inland Revenue Authority of Singapore that confirms you as a Singapore tax resident for the treaty.", "Applied for online through IRAS"],
  ["Latest Notice of Assessment or employment records", "Supports your residence in Singapore for the year in question.", "From IRAS or your employer"],
  ["Indian PAN", "Form 10F carries your PAN, and the person paying you may need it.", "Your PAN card"],
];

const AUDIENCES: Audience[] = [
  { who: "Software or finance professional in Singapore with RSUs", need: "A clear view of how Indian tax touches equity pay from a global employer, without getting into Singapore tax.", help: "Indian-side review of vesting, residential status and what will change on return, coordinated with your Singapore adviser.", enquiry: "Indian tax on RSUs as an NRI in Singapore" },
  { who: "Singapore banker planning to return to Chennai", need: "An RNOR plan before resigning, covering savings, CPF and Indian holdings.", help: "A dated plan covering arrival month, account conversions and the Indian view on foreign funds.", enquiry: "RNOR planning for a return from Singapore to Chennai" },
  { who: "NRI in Singapore selling a Chennai flat", need: "Correct TDS from the buyer and a clean remittance to Singapore.", help: "Lower-deduction certificate, capital gains workings and Form 15CA/15CB.", enquiry: "selling a Chennai property as an NRI in Singapore" },
  { who: "Singapore PR or citizen of Indian origin with Indian investments", need: "A view on Form 10F, treaty relief and which Indian returns are needed.", help: "Residence documents, treaty claim review and return filing.", enquiry: "India–Singapore DTAA claim and Form 10F" },
];

const NOT_INCLUDED = [
  "Advice on Singapore tax, CPF, SRS or the Singapore treatment of your equity pay. Your Singapore adviser handles those, and we coordinate on the Indian figures.",
  "Applying for the IRAS Certificate of Residence on your behalf.",
  "Investment, banking or immigration advice, including Employment Pass or Permanent Resident applications.",
  "Representing you before the Singapore tax authority.",
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — Singapore"
      crumbHref={slug}
      parentCrumb={{ name: "NRI Tax Services", href: "/nri-tax-services" }}
      eyebrow="NRI Clients · Singapore"
      h1="India Tax for NRIs in Singapore: ITR, DTAA, RSU/ESOP and RNOR Planning"
      subhead="Indian return filing, India–Singapore treaty paperwork, equity pay, Chennai property sale TDS and return-to-India planning for Indians in Singapore, served online from our Anna Nagar office in Chennai."
      introHeading="Do NRIs living in Singapore pay tax in India?"
      intro="Yes, but only on income earned or received in India, such as rent from a Chennai flat, NRO interest, gains on Indian shares or property and Indian business income. Singapore salary is not taxed in India while you remain a non-resident, though equity pay and a planned return to India need an Indian-side review."
      keyFacts={[
        { label: "Treaty", value: "India–Singapore DTAA; relief needs a Singapore Certificate of Residence and Form 10F" },
        { label: "Taxable in India", value: "Indian-source income: rent, NRO interest, capital gains, Indian business income" },
        { label: "Time difference", value: "Singapore is 2 hours 30 minutes ahead of India, so same-day calls work" },
        { label: "Scope", value: "Indian tax only; Singapore tax stays with your Singapore adviser" },
      ]}
      subServicesHeading="Which Indian tax services do Singapore NRIs need?"
      subServices={[
        { name: "Residential Status Review", text: "A day count for the year and a check of the tests, including the deemed-residency rule, before the return is filed." },
        { name: "Indian ITR Filing", text: "Returns covering rent, NRO interest, capital gains and other Indian income, reconciled against Form 26AS and the Annual Information Statement." },
        { name: "India–Singapore DTAA Claims", text: "Organising the IRAS Certificate of Residence and filing Form 10F where a treaty claim is worth making." },
        { name: "RSU and ESOP Review (Indian Side)", text: "Understanding how vesting and sale of equity from a global employer is seen in India, now and after you return." },
        { name: "Chennai Property Sale and TDS", text: "Lower-deduction certificate, capital gains computation and Form 15CA/15CB for remittance to Singapore." },
        { name: "Return-to-India Planning", text: "Planning arrival month, RNOR years and account conversions, and stating the Indian view on foreign funds such as CPF and SRS cautiously." },
      ]}
      howTo={{
        heading: "How does a Singapore NRI file an Indian tax return with us?",
        steps: [
          { name: "Send your travel dates", text: "Share the dates you entered and left India during the financial year from passport stamps or immigration records, so the residential status tests can be applied." },
          { name: "Share bank and investment papers", text: "Send NRO, NRE and FCNR statements, rent receipts, tenant TDS certificates, broker and mutual fund statements and any property papers." },
          { name: "Obtain the Certificate of Residence if a treaty claim helps", text: "Apply to IRAS for the Certificate of Residence. We then prepare Form 10F for the Indian e-filing portal." },
          { name: "Review the computation on a call", text: "We share the draft computation and walk through it on a video call booked at a time that suits you in Singapore." },
          { name: "Approve, file and e-verify", text: "After your approval we file the return and you e-verify it through Aadhaar OTP, net banking or a digital signature." },
          { name: "Track refunds and notices", text: "We follow up on refunds of excess TDS and answer any intimation or notice after filing." },
        ],
      }}
      faqs={[
        { question: "Does India tax my Singapore salary?", answer: "Not while you are a non-resident: salary for work done in Singapore and received outside India is outside Indian tax for an NRI. The position changes if you become resident, so we count your days in India each year. Salary credited directly into an Indian account can be treated as received in India." },
        { question: "What is the India–Singapore DTAA and how do I claim it?", answer: "It is a treaty between the two countries that allocates taxing rights and gives relief from double tax on certain income. To claim it in India you generally need a Certificate of Residence from IRAS and Form 10F filed on the Indian e-filing portal. We check whether a claim helps for each income stream." },
        { question: "How do I get a Certificate of Residence from IRAS?", answer: "IRAS issues the Certificate of Residence to people who are tax residents of Singapore, and you apply to it directly, usually online. The certificate confirms residence for the treaty. Processing and eligibility are set by IRAS, so check its current requirements, and send us the certificate so we can prepare Form 10F." },
        { question: "What if India and Singapore both treat me as a resident?", answer: "The treaty has tie-breaker rules for dual residents. In plain terms, they look at where you have a permanent home, where your personal and economic ties are closer, where you habitually live and your nationality, in that order. We apply them to your facts and record the position with your documents." },
        { question: "Are my RSUs or ESOPs taxed in India while I work in Singapore?", answer: "Equity pay is generally taxed in India only to the extent it relates to services rendered in India, so a non-resident working fully in Singapore usually has little Indian tax on vesting. After you return, vesting and sale are looked at under your new status. We review the Indian side; Singapore tax goes to your Singapore adviser." },
        { question: "Is my CPF or SRS balance taxable in India after I return?", answer: "It depends on your status in the year of withdrawal and on the nature of the payment, so we review each case rather than assume. While you are RNOR, foreign income that does not arise from an Indian business generally stays outside Indian tax. Please share the facts with us before you withdraw or move." },
        { question: "How long will I be RNOR when I return to Chennai?", answer: "A returning NRI is generally Resident but Not Ordinarily Resident if they were non-resident in nine of the ten preceding years, or stayed 729 days or fewer in India in the preceding seven years. The period depends on your history, so we map your own years and the arrival month before you move." },
        { question: "How does TDS work when I sell a Chennai flat from Singapore?", answer: "The buyer deducts tax under section 195, generally on the sale consideration, unless you obtain a lower-deduction certificate from the income tax department. Proceeds sent to Singapore from an NRO account need Form 15CA and, where required, Form 15CB. We prepare the certificate application, the gains workings and both forms." },
        { question: "Can we speak in Singapore working hours?", answer: "Yes. Singapore is two hours thirty minutes ahead of India, and our office runs Monday to Saturday, 9:30 AM to 6:30 PM IST, which is noon to 9:00 PM in Singapore. We take documents on WhatsApp and book video calls at a time that suits your day." },
      ]}
      relatedQuestions={[
        { question: "How do I get a lower TDS certificate when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "What does the full NRI tax service cover?", href: "/nri-tax-services" },
        { question: "How do Form 15CA and 15CB work?", href: "/form-15ca-15cb-chennai" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-property-sale-tds-chennai", "form-15ca-15cb-chennai", "nri-tax-services-uae"]}
      relatedPosts={["nri-itr-filing", "rnor-status-returning-nri", "foreign-rsu-tax-schedule-fa-chennai"]}
    >
      <h2 className={h2}>Who taxes what: India or Singapore?</h2>
      <p className={p}>
        India taxes Indian-source income of a non-resident, and Singapore taxes under its own rules, so the table below shows
        the Indian view and leaves the Singapore column to your Singapore adviser.
      </p>
      <DataTable head={["Income", "Indian view for an NRI", "Singapore side"]} rows={WHO_TAXES} />
      <p className={p}>
        We advise only on Indian law. Singapore tax, including its filing season, goes to your Singapore adviser, and we work
        from the figures that adviser gives us where the two interact.
      </p>

      <h2 className={h2}>What does the India–Singapore DTAA do for an NRI?</h2>
      <p className={p}>
        The India–Singapore double taxation avoidance agreement decides which country may tax particular income and how the
        other gives relief, so that the same income is not fully taxed twice.
      </p>
      <p className={p}>
        In practice, for most NRIs the treaty matters in a few places: interest, dividends, capital gains on shares and
        income from services. It does not exempt Indian rent from Indian tax, because immovable property is generally taxed
        where it stands. Treaty relief is also not automatic. In India you claim it in your return and support it with a
        Certificate of Residence and Form 10F, and a banker, tenant or company paying you may ask for the same papers before
        applying a treaty rate at source.
      </p>
      <p className={p}>
        The capital gains rules for shares in the treaty have changed over time, and the right answer for you depends on what
        you hold and when you bought it. We read the treaty text against your facts instead of applying a general rule, and we
        tell you when a claim is not worth the paperwork. The Indian domestic rate is sometimes lower than the treaty rate,
        and you are entitled to the more favourable of the two.
      </p>

      <h2 className={h2}>How do I get the IRAS Certificate of Residence and file Form 10F?</h2>
      <p className={p}>
        You apply to IRAS for the Certificate of Residence, and then Form 10F is filed electronically on the Indian
        e-filing portal using the details on that certificate.
      </p>
      <DataTable head={["Document", "Why it is needed", "Notes"]} rows={IRAS_DOCS} />
      <p className={p}>
        The certificate is issued for a specific period, and the Indian return you file should match it. Apply early if a
        tenant, bank or company has asked for it, as eligibility and processing are decided by IRAS. Form 10F also asks for
        a foreign tax identification number where one exists, which for most individuals in Singapore is their tax reference
        number. Send us the certificate and we prepare the form; for years under the Income-tax Act, 2025 the form carries an
        equivalent provision.
      </p>

      <h2 className={h2}>What if India and Singapore both treat me as a resident?</h2>
      <p className={p}>
        When both countries treat you as a resident, the treaty&apos;s tie-breaker decides which one is your country of
        residence for treaty purposes.
      </p>
      <p className={p}>
        The test works down a list. First, where do you have a permanent home available to you? If you keep a Chennai flat
        for your family and rent a home in Singapore, both may count, and the next question applies: where are your personal
        and economic relations closer, meaning family, work, investments and the place you manage your affairs from? If that
        is still unclear, it looks at where you habitually live, then your nationality, and finally the two tax authorities
        discuss the case. People often assume that a Singapore work pass settles the question, but the facts decide it.
      </p>
      <p className={p}>
        A short visit pattern, a rented home, a spouse working in Singapore and a child in school there point towards
        Singapore. A long stay in Chennai for an elderly parent can point the other way. We map your facts before you file,
        because the answer affects both the treaty claim and your Indian status.
      </p>

      <h2 className={h2}>How are RSUs and ESOPs from a global employer seen in India?</h2>
      <p className={p}>
        Equity pay is generally taxed as salary when it vests or is exercised, and India is interested only in the part that
        relates to work done in India, until you become a resident.
      </p>
      <p className={p}>
        Tech and finance professionals in Singapore often hold RSUs from a US or European parent. While you are a
        non-resident and work wholly in Singapore, the Indian tax on vesting is usually limited. The picture changes in the
        year you return and start working in India, because grants that vested in part over the years abroad may be taxed in
        part in India depending on where the services were rendered. A shift of months in the arrival date can change the
        result.
      </p>
      <p className={p}>
        Once you are a resident and ordinarily resident, foreign shares and accounts are disclosed in the Indian return in
        the schedule for foreign assets, and a sale of the shares is taxed in India as capital gains, with the conversion
        into rupees at the rates the law specifies. Our blog guide on{" "}
        <Link href="/blog/foreign-rsu-tax-schedule-fa-chennai" className={linkClass}>
          foreign RSU tax and Schedule FA
        </Link>{" "}
        covers this in more depth. For the Singapore view of your equity pay, speak to your Singapore adviser; we work on
        the Indian side only.
      </p>

      <h2 className={h2}>What happens to CPF and SRS when I return to Chennai?</h2>
      <p className={p}>
        The Indian tax view depends on your residential status in the year of withdrawal and the nature of the payment, so
        there is no single answer, and we advise case by case.
      </p>
      <p className={p}>
        CPF is a Singapore statutory fund and SRS is a Singapore retirement savings scheme, and neither has a counterpart in
        India. A returning NRI who is RNOR generally has foreign income that does not arise from an Indian business outside
        Indian tax. After the RNOR years, a resident and ordinarily resident individual is taxed in India on global income,
        and the question of what a withdrawal is and how it is characterised has to be looked at with the facts. We therefore
        recommend that you decide the timing of any withdrawal or transfer with both advisers, and that you tell us before
        you act.
      </p>
      <p className={p}>
        What you can do now is keep clear records: statements of balances, the dates of contributions, and the tax paid in
        Singapore if any. These support the Indian position whichever way it falls, and they are easy to lose over a decade
        in another country.
      </p>

      <h2 className={h2}>How does RNOR planning work for a return from Singapore?</h2>
      <p className={p}>
        You plan the arrival month, the account conversions and any large receipts so that your RNOR years cover the income
        you most want to keep outside Indian tax.
      </p>
      <p className={p}>
        A returning NRI is generally Resident but Not Ordinarily Resident if non-resident in nine of the ten preceding years,
        or if present in India for 729 days or fewer in the preceding seven. While RNOR, foreign income that does not arise
        from an Indian business generally stays outside Indian tax, but Indian income remains taxable. The status is
        tested year by year and reverts when the conditions are no longer met.
      </p>
      <p className={p}>
        Our planning sheet covers the likely arrival month and its effect on the first year, the redesignation of NRE
        accounts to resident accounts, the treatment of FCNR deposits, the timing of sales of Indian and foreign assets, and
        the foreign asset disclosure that starts once you cease to be RNOR. Singapore professionals often have deals such as
        a bonus, a share vesting or a sale of a Singapore property around the move, and the order of these matters. The blog
        guide on{" "}
        <Link href="/blog/rnor-status-returning-nri" className={linkClass}>
          RNOR status for returning NRIs
        </Link>{" "}
        sets out the tests in plain terms, and our main page on{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services in Chennai
        </Link>{" "}
        lists the rest of what we do for NRIs.
      </p>

      <h2 className={h2}>How does a Chennai property sale work with TDS and Form 15CA and 15CB?</h2>
      <p className={p}>
        The buyer deducts tax under section 195 of the Income-tax Act, 1961 (the 2025 Act carries an equivalent provision),
        and a lower-deduction certificate can reduce it, after which Form 15CA and 15CB support the remittance to Singapore.
      </p>
      <p className={p}>
        Without a certificate, the buyer deducts at the rate stated in law, generally on the whole sale consideration, and
        that can be much higher than your tax on the gain. You apply to the income tax department with the sale agreement,
        cost records and a gains computation, and the certificate sets the rate the buyer applies. The buyer then deposits the
        tax and issues a TDS certificate, which you claim in your return. Our page on{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale TDS in Chennai
        </Link>{" "}
        explains the application.
      </p>
      <p className={p}>
        To send the proceeds to Singapore from an NRO account, the bank needs Form 15CA and, where required, a chartered
        accountant&apos;s Form 15CB, and the remittance is subject to the annual limit under the foreign exchange rules. See
        also our page on{" "}
        <Link href="/form-15ca-15cb-chennai" className={linkClass}>
          Form 15CA and 15CB in Chennai
        </Link>
        . We coordinate with your family in Chennai and the buyer so these steps do not hold up registration.
      </p>

      <h2 className={h2}>Does it help if my Singapore company also has an Indian subsidiary?</h2>
      <p className={p}>
        It can, because founders and directors often have both personal Indian tax questions and company questions, and the
        two should be planned together.
      </p>
      <p className={p}>
        If you run or own a Singapore company that sells in India or hires here, our page on{" "}
        <Link href="/india-subsidiary-for-singapore-companies" className={linkClass}>
          setting up an Indian subsidiary for a Singapore company
        </Link>{" "}
        covers incorporation and compliance. For your own return as an NRI, the director&apos;s remuneration, any dividend
        from the Indian company and the question of whether you create a residence or business connection in India are
        looked at with the company&apos;s papers. Foreign company law and Singapore tax stay with your Singapore advisers.
      </p>

      <h2 className={h2}>When can we speak, given Singapore time?</h2>
      <p className={p}>
        You can reach us in the Singapore afternoon and evening, because Singapore is two hours thirty minutes ahead of India.
      </p>
      <p className={p}>
        Our office hours are Monday to Saturday, 9:30 AM to 6:30 PM IST, which is noon to 9:00 PM in Singapore. That allows a
        lunch-hour or after-work video call on the same day you send your documents, and WhatsApp covers the exchange of
        statements between calls. All clients are served online; our only office is in Anna Nagar, Chennai.
      </p>

      <HighTicketSections audiences={AUDIENCES} notIncluded={NOT_INCLUDED} />
    </ServicePageTemplate>
  );
}
