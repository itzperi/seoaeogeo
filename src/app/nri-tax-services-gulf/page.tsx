import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import HighTicketSections, { type Audience } from "@/components/HighTicketSections";
import { SITE_URL } from "@/lib/site";

const slug = "/nri-tax-services-gulf";
const linkClass = "font-medium text-royal-violet underline underline-offset-2";
const h2 = "mt-14 text-2xl text-obsidian";
const p = "mt-4 max-w-3xl leading-relaxed text-slate";

export const metadata: Metadata = {
  title: { absolute: "India Tax for NRIs in Saudi, Qatar, Oman, Kuwait, Bahrain" },
  description:
    "Indian tax for NRIs in Saudi Arabia, Qatar, Oman, Kuwait and Bahrain: DTAA, Form 10F, NRE/NRO interest, Tamil Nadu property TDS, 15CA/15CB and RNOR planning.",
  alternates: { canonical: slug },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "India Tax for NRIs in the Gulf: Saudi, Qatar, Oman, Kuwait, Bahrain",
    description:
      "Residency checks, treaty claims, property sale TDS and return-to-Tamil-Nadu planning for NRIs in the Gulf, served online from Chennai.",
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

const COUNTRIES: ReactNode[][] = [
  ["Saudi Arabia", "Yes, India has a DTAA with Saudi Arabia", "Generally the Zakat, Tax and Customs Authority (ZATCA)", "Expatriate salary is generally not subject to a personal income tax there. Check whether your certificate states you as a tax resident, because the Indian deemed-residency rule looks at liability to tax."],
  ["Qatar", "Yes, India has a DTAA with Qatar", "Generally the General Tax Authority", "Salary is generally not charged to personal income tax. Confirm with the authority whether it issues a certificate to a salaried individual and what the certificate says."],
  ["Oman", "Yes, India has a DTAA with Oman", "Generally the Tax Authority under the Ministry of Finance", "Salary is generally not charged to personal income tax. Whether a certificate can be issued to an individual is a procedure question to confirm locally."],
  ["Kuwait", "Yes, India has a DTAA with Kuwait", "Generally the Ministry of Finance, through its tax department", "Salary is generally not charged to personal income tax. Procedure and wording of any certificate should be confirmed with the authority."],
  ["Bahrain", "Yes, India has a DTAA with Bahrain", "Generally the National Bureau for Revenue", "Salary is generally not charged to personal income tax. Confirm how an individual applies and what residence the certificate records."],
];

const DOC_ROWS: ReactNode[][] = [
  ["Passport", "Proves identity and nationality, and the entry and exit stamps used for day counts.", "Every country on this page."],
  ["Residence permit or national ID", "Shows the address and the status under which you live in the country. Saudi Arabia: iqama. Qatar: Qatar ID. Oman: resident card. Kuwait: civil ID. Bahrain: CPR card.", "Copy of front and back, current."],
  ["Tax residency certificate", "The certificate from the country's tax authority that Form 10F relies on, where one can be obtained.", "Apply in the country; the authority sets the procedure."],
  ["Employment contract or sponsor letter", "Supports the period and nature of your stay and your source of income.", "Your employer or sponsor."],
  ["PAN and foreign tax identification details", "Form 10F asks for your Indian PAN, and for a foreign tax identification number where the country issues one.", "Your PAN card, and the authority's records."],
];

const AUDIENCES: Audience[] = [
  { who: "Engineer or manager in Riyadh, Jubail or Dammam", need: "A clear Indian tax position on a Chennai flat, NRO interest and shares, without visiting India.", help: "Residential status review, Indian return, treaty documents and TDS reconciliation over WhatsApp and booked calls.", enquiry: "Indian tax filing as an NRI in Saudi Arabia" },
  { who: "Healthcare or oil and gas professional in Qatar or Kuwait", need: "Confidence that tax-free salary does not trigger an Indian deemed-residency surprise.", help: "A day count, an income check against the deemed-residency threshold, and a written view before filing.", enquiry: "deemed residency check as an NRI in Qatar or Kuwait" },
  { who: "NRI in Muscat or Manama selling a Tamil Nadu property", need: "A buyer who deducts the right TDS, and a remittance that clears the bank.", help: "Lower-deduction certificate application, capital gains workings and Form 15CA/15CB for the remittance.", enquiry: "selling property in Tamil Nadu as an NRI in Oman or Bahrain" },
  { who: "Gulf family planning to settle back in Tamil Nadu", need: "A move that uses the RNOR years and does not rush the account conversions.", help: "A dated plan covering arrival month, end-of-service benefits and NRE and FCNR deposits.", enquiry: "return-to-Tamil-Nadu tax planning from the Gulf" },
];

const NOT_INCLUDED = [
  "Advice on Saudi, Qatari, Omani, Kuwaiti or Bahraini law, including zakat, residence permits or labour rules. Your local adviser or employer handles these.",
  "Applying for the tax residency certificate on your behalf in the country. We tell you what the Indian side needs from it.",
  "Investment, banking or immigration advice.",
  "Acting as your authorised representative before a foreign authority.",
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — Gulf"
      crumbHref={slug}
      parentCrumb={{ name: "NRI Tax Services", href: "/nri-tax-services" }}
      eyebrow="NRI Clients · Saudi Arabia, Qatar, Oman, Kuwait, Bahrain"
      h1="India Tax for NRIs in Saudi Arabia, Qatar, Oman, Kuwait and Bahrain"
      subhead="Indian return filing, residential status, treaty paperwork, property sale TDS and return-to-Tamil-Nadu planning for Indians working in the Gulf, served online from our Anna Nagar office in Chennai."
      introHeading="Do NRIs in the Gulf pay tax in India?"
      intro="Yes, but only on income earned or received in India, such as rent from a Tamil Nadu flat, NRO interest, gains on Indian shares or property and Indian business income. Tax-free Gulf salary is not taxed in India while you remain a non-resident, but the deemed-residency rule and your day count can change that, so status needs checking every year."
      keyFacts={[
        { label: "Countries covered", value: "Saudi Arabia, Qatar, Oman, Kuwait and Bahrain; the UAE has its own page" },
        { label: "Taxable in India", value: "Indian-source income: rent, NRO interest, capital gains, Indian business income" },
        { label: "Property sale", value: "Buyer deducts TDS under section 195; a lower-deduction certificate can reduce it" },
        { label: "Calls", value: "Gulf working hours overlap with our Mon–Sat 9:30 AM–6:30 PM IST office" },
      ]}
      subServicesHeading="Which Indian tax services do Gulf NRIs need?"
      subServices={[
        { name: "Residential Status and Deemed-Residency Review", text: "A day count for the year and a check of your Indian income against the deemed-residency threshold, which matters because Gulf salary is generally untaxed locally." },
        { name: "Indian ITR Filing for Gulf NRIs", text: "Returns covering rent, NRO interest, capital gains and other Indian income, reconciled against Form 26AS and the Annual Information Statement." },
        { name: "Treaty Claims and Form 10F", text: "Organising the residence document from the country and filing Form 10F on the e-filing portal where a treaty claim is worth making." },
        { name: "NRE, NRO and FCNR Review", text: "Confirming exempt NRE and FCNR interest, reporting NRO interest and claiming back excess TDS on NRO deposits." },
        { name: "Tamil Nadu Property Purchase and Sale", text: "Section 195 TDS mechanics, the lower-deduction certificate, capital gains computation and the repatriation paperwork." },
        { name: "Return-to-Tamil-Nadu Planning", text: "Sequencing arrival, end-of-service benefits and account conversions to make use of RNOR years." },
      ]}
      howTo={{
        heading: "How does a Gulf NRI file an Indian tax return with us?",
        steps: [
          { name: "Send your travel dates", text: "Share the dates you entered and left India during the financial year from your passport stamps or the e-gate record, so the residential status tests can be applied." },
          { name: "Share bank and income papers", text: "Send NRO, NRE and FCNR statements, interest certificates, rent receipts, tenant TDS certificates, broker statements and any property papers." },
          { name: "Arrange the country document if a treaty claim is needed", text: "Where a treaty claim helps, obtain the residence certificate from the country's tax authority. We then prepare Form 10F for the e-filing portal." },
          { name: "Review the computation on a call", text: "We share the draft computation and walk through it on a video call booked in Gulf working hours." },
          { name: "Approve, file and e-verify", text: "After your approval we file the return and you e-verify it through Aadhaar OTP, net banking or a digital signature." },
          { name: "Track refunds and notices", text: "We follow up on refunds of excess TDS and respond to any intimation or notice after filing." },
        ],
      }}
      faqs={[
        { question: "Is my Saudi, Qatari, Omani, Kuwaiti or Bahraini salary taxable in India?", answer: "Not while you are a non-resident: salary for work done in the Gulf and received outside India is outside Indian tax for an NRI. Two cautions apply. Salary credited directly into an Indian account can be treated as received in India, and the deemed-residency rule can change your status. Keep payslips, contract and travel records to support the position." },
        { question: "Does the deemed-residency rule apply to Gulf NRIs?", answer: "It can. An Indian citizen with Indian-source income above ₹15 lakh who is not liable to tax in any country by reason of residence or domicile can be treated as resident, classed as Resident but Not Ordinarily Resident. Since many Gulf countries levy no personal income tax on salary, we test your facts every year before the return is filed." },
        { question: "Is NRE interest taxable in India for Gulf NRIs?", answer: "No. Interest on NRE and FCNR deposits is exempt while you are a non-resident, and no Indian TDS is deducted on it. NRO interest is taxable and banks deduct TDS at the non-resident rate, which often exceeds the tax actually due, so many Gulf NRIs are owed a refund through their return." },
        { question: "Can I get a lower TDS certificate when I sell my Tamil Nadu flat?", answer: "Yes. You can apply to the income tax department for a certificate that lets the buyer deduct TDS at a lower rate or nil, based on your actual capital gain. Without it, the buyer deducts TDS at the statutory rate, which can be far more than your tax. We prepare the application and the capital gains workings." },
        { question: "What is Form 10F and who needs it?", answer: "Form 10F is an electronic statement filed on the Indian e-filing portal by a non-resident who claims treaty relief, giving details such as the country of residence and the residence certificate. A banker, buyer or tenant paying you may ask for it. If no treaty claim is made, you may not need it." },
        { question: "Do I need Form 15CA and 15CB to send sale proceeds abroad?", answer: "Generally yes. When money is remitted abroad from an NRO account, banks ask for Form 15CA, and a chartered accountant's Form 15CB where required, confirming the tax position on the payment. The 2025 Act carries equivalent forms. We prepare both once tax on the sale has been settled." },
        { question: "I am returning to Tamil Nadu from the Gulf. What should I plan?", answer: "Plan RNOR first. A returning NRI is often Resident but Not Ordinarily Resident for some years, during which most foreign income stays outside Indian tax. Sequence your arrival date, end-of-service benefits and the conversion of NRE and FCNR deposits so you keep the benefit of those years." },
        { question: "Can we speak during Gulf working hours?", answer: "Yes. Our office runs Monday to Saturday, 9:30 AM to 6:30 PM IST, which falls inside the working day in Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. Gulf time is one and a half to two and a half hours behind India. We also take documents on WhatsApp and book video calls around your own roster." },
        { question: "My family in Tamil Nadu manages my accounts. Who files my return?", answer: "You file it in your own name and PAN, even if family collects rent and runs the NRO account. We work with you and your family to gather statements and tenant TDS certificates, then file and e-verify the return online so nobody has to visit an office." },
      ]}
      relatedQuestions={[
        { question: "How do NRIs in the UAE file Indian returns?", href: "/nri-tax-services-uae" },
        { question: "How do I get a lower TDS certificate when selling my Chennai flat?", href: "/nri-property-sale-tds-chennai" },
        { question: "How do Form 15CA and 15CB work?", href: "/form-15ca-15cb-chennai" },
      ]}
      relatedSlugs={["nri-tax-services", "nri-tax-services-uae", "nri-property-sale-tds-chennai", "form-15ca-15cb-chennai"]}
      relatedPosts={["nri-itr-filing", "rnor-status-returning-nri", "capital-gains-tax-property-sale"]}
    >
      <h2 className={h2}>Which Gulf countries does this page cover, and does India have a DTAA with each?</h2>
      <p className={p}>
        India has a double taxation avoidance agreement with each of the five countries below, and this page covers them
        together because the Indian questions are close to identical. NRIs in the UAE have a separate page at{" "}
        <Link href="/nri-tax-services-uae" className={linkClass}>
          NRI tax services for UAE residents
        </Link>
        . Foreign tax and certificate procedures are decided by each country, so the table describes them in general terms and
        your local employer or adviser confirms current practice.
      </p>
      <DataTable
        head={["Country", "India has a DTAA with it?", "Tax residency certificate: who issues it", "Note on residency for tax-free salaries"]}
        rows={COUNTRIES}
      />
      <p className={p}>
        The column on residence matters because a treaty claim needs proof that you are a tax resident of the other country,
        and many people on tax-free salaries are unsure whether they qualify. If the authority will not issue a certificate to
        you, a treaty claim may not be available, and we plan the Indian return on that basis rather than assuming relief.
      </p>

      <h2 className={h2}>How is a Gulf NRI taxed in India when the salary is tax-free abroad?</h2>
      <p className={p}>
        Gulf salary earned for work done there is generally outside Indian tax while you are a non-resident, but residential
        status is a yearly test, and tax-free salary makes one rule especially relevant.
      </p>
      <p className={p}>
        You are a resident of India for a financial year if you stay 182 days or more, or if you stay 60 days or more in the
        year and 365 days or more over the preceding four years. For an Indian citizen or person of Indian origin who visits
        India, the 60-day limit becomes 120 days where Indian income exceeds ₹15 lakh. A long summer break plus a few
        family visits can reach these numbers, so we count your days rather than estimate them.
      </p>
      <p className={p}>
        The deemed-residency rule is the second test. An Indian citizen whose Indian income is above ₹15 lakh and who is not
        liable to tax in any other country by reason of residence or domicile is treated as resident, but only as Resident
        but Not Ordinarily Resident. In that class foreign income that does not arise from an Indian business generally stays
        outside Indian tax, while Indian income remains taxable as before. Because most of the Gulf does not tax personal
        salary, we review this each year, together with the facts that show where you live and work.
      </p>
      <p className={p}>
        The practical advice is to keep your employment contract, residence permit, payslips and a simple travel log. They
        support your position if the department asks a question later, and they are also the base for the Form 10F papers
        described below.
      </p>

      <h2 className={h2}>How are NRE and NRO accounts taxed for Gulf NRIs?</h2>
      <p className={p}>
        Interest on NRE and FCNR deposits is exempt from Indian tax while you are a non-resident, while interest on NRO
        accounts is taxable and carries TDS.
      </p>
      <p className={p}>
        An NRE account holds money you have brought in from abroad, and the interest, along with the principal, can be sent
        back abroad. An NRO account holds Indian income such as rent or a dividend, and the interest is added to your Indian
        income. Banks deduct TDS on NRO interest at the rate set for non-residents, which is a flat rate that has no regard to
        your slab. Where your total Indian income is modest, the TDS often exceeds the final tax, and a refund is claimed by
        filing a return.
      </p>
      <p className={p}>
        We reconcile the TDS credits in Form 26AS and the Annual Information Statement, confirm that exempt interest has been
        reported as exempt, and check that rent received through a family member is reported in your name. If a treaty gives a
        lower rate on a particular kind of income and you hold the paperwork, we examine whether claiming it is worthwhile for
        the amounts involved.
      </p>
      <p className={p}>
        Two Gulf-specific habits cause trouble. The first is crediting salary or savings directly into an Indian resident
        account, which can create a question of whether the income was received in India. The second is leaving NRE accounts
        unchanged after returning, when the account should be redesignated within the time banks and the law allow. Both are
        easy to avoid when raised early.
      </p>

      <h2 className={h2}>What happens when a Gulf NRI sells or buys property in Tamil Nadu?</h2>
      <p className={p}>
        When an NRI sells property, the buyer must deduct tax at source under section 195 of the Income-tax Act, 1961 (the
        2025 Act carries an equivalent provision), and a lower-deduction certificate can bring that deduction down to the
        tax actually due.
      </p>
      <p className={p}>
        The mechanism is simple to describe and easy to get wrong. The buyer obtains a tax deduction account number, deducts
        tax at the rate stated in law on the payment to you, deposits it, and files the TDS statement. Because the
        deduction is generally applied to the sale consideration rather than only the gain, it can be far larger than your real
        liability. A buyer who does not deduct risks a default, which is why many buyers are firm on this point.
      </p>
      <p className={p}>
        To avoid over-deduction, you apply to the income tax department for a lower or nil deduction certificate before the
        sale is registered. The application is supported by the sale agreement, the purchase cost and improvement records, a
        capital gains computation and your return history. When the officer is satisfied, the certificate states the rate at
        which the buyer may deduct, and the buyer relies on it. Allow time for this step, since registration plans usually
        depend on it.
      </p>
      <p className={p}>
        Our separate page on{" "}
        <Link href="/nri-property-sale-tds-chennai" className={linkClass}>
          NRI property sale TDS in Chennai
        </Link>{" "}
        walks through the application. Where you buy rather than sell, the purchase itself does not attract Indian income tax
        for you, but funds should come through proper banking channels, and rent and sale later enter your return. We
        coordinate with your family in Tamil Nadu and the buyer&apos;s or seller&apos;s adviser so the registration day does not
        stall on paperwork.
      </p>

      <h2 className={h2}>How are Indian shares, mutual funds and rent taxed for a Gulf NRI?</h2>
      <p className={p}>
        Each is taxed in India because the income arises there, and the rate and the TDS depend on the type of income and how
        long you held the asset.
      </p>
      <p className={p}>
        Rent from a Chennai flat is taxed after the standard deduction for house property and interest on any housing loan, as
        the law permits, and a tenant paying rent to an NRI is expected to deduct TDS. Capital gains on listed shares and
        equity mutual funds depend on the holding period and carry their own rates, and the broker or fund house may deduct tax
        before paying you. Gains on unlisted shares, gold funds and debt funds follow different rules again. We prepare the
        gains statement with purchase dates and cost, match it with the broker&apos;s report, and set off any losses in the
        permitted order.
      </p>
      <p className={p}>
        If you have built a portfolio over years of Gulf employment, the paperwork is usually scattered across brokers, fund
        houses and old demat accounts. A consolidated statement from the registrar and the Annual Information Statement help
        us find everything, and a clear record also makes a later sale or a return to India far simpler to plan.
      </p>

      <h2 className={h2}>What documents does Form 10F need from someone living in the Gulf?</h2>
      <p className={p}>
        Form 10F needs your identity, your residence details and, where it can be obtained, the residence certificate issued by
        the country&apos;s tax authority.
      </p>
      <DataTable head={["Document", "Why it is needed", "Notes"]} rows={DOC_ROWS} />
      <p className={p}>
        Two points save time. First, ask your employer early, because some sponsors help with letters, while the certificate
        itself comes from the authority. Second, if the certificate cannot be issued to an individual, tell us at the outset,
        and we advise on what can still be filed and which claims to drop.
      </p>

      <h2 className={h2}>How do Form 15CA and 15CB work for sending money out of India?</h2>
      <p className={p}>
        Form 15CA is your declaration of the remittance, and Form 15CB is the chartered accountant&apos;s certificate on its tax
        treatment, so together they let the bank send the money abroad.
      </p>
      <p className={p}>
        A Gulf NRI repatriating the proceeds of a Tamil Nadu property or a large NRO balance must satisfy the bank that tax on
        the money has been dealt with. The bank asks for the forms, our CA examines the basis of the payment, the sale papers
        and the TDS already deducted, and the forms are filed on the e-filing portal. Repatriation from an NRO account is also
        subject to the annual limit set under the foreign exchange rules, and we flag that to you before you plan the transfer.
        Our page on{" "}
        <Link href="/form-15ca-15cb-chennai" className={linkClass}>
          Form 15CA and 15CB in Chennai
        </Link>{" "}
        covers the forms in more depth.
      </p>

      <h2 className={h2}>How should a Gulf NRI plan the return to Tamil Nadu and RNOR?</h2>
      <p className={p}>
        Plan the order of events: when you arrive, when end-of-service benefits are paid and when accounts are converted, since
        your status in the year you land and the years after decides which income stays outside Indian tax.
      </p>
      <p className={p}>
        A returning NRI is often classed as Resident but Not Ordinarily Resident if they were non-resident in nine of the ten
        preceding years, or stayed 729 days or fewer in India in the preceding seven years. While RNOR, foreign income that
        does not arise from an Indian business generally stays outside Indian tax. Those years are valuable, and a badly
        timed arrival month can shorten them. Gulf families moving for a child&apos;s admission or an elder&apos;s care often choose
        a date for school reasons, without knowing it affects tax.
      </p>
      <p className={p}>
        End-of-service benefits, which are common across the Gulf, are paid by the employer after you leave, and their
        treatment in India depends on your status in the year you receive them and on the nature of the payment. We map this
        before you resign, not after. We also plan NRE and FCNR accounts, which should be redesignated in line with the rules,
        and we point out Indian and foreign assets that will need disclosure once you become a resident and ordinarily
        resident. The blog guide on{" "}
        <Link href="/blog/rnor-status-returning-nri" className={linkClass}>
          RNOR status for returning NRIs
        </Link>{" "}
        covers the tests in detail.
      </p>

      <h2 className={h2}>When can we speak, given Gulf time zones?</h2>
      <p className={p}>
        You can reach us during Gulf working hours, because India is one and a half to two and a half hours ahead of the Gulf.
      </p>
      <p className={p}>
        Saudi Arabia, Qatar, Kuwait and Bahrain run three hours ahead of UTC, so India is two and a half hours ahead of them.
        Oman is four hours ahead of UTC, so India is one and a half hours ahead. Our office hours are Monday to Saturday, 9:30 AM
        to 6:30 PM IST, which covers a Gulf morning from 7:00 AM (Saudi Arabia, Qatar, Kuwait, Bahrain) or 8:00 AM (Oman) into the
        early evening. The Gulf working week and weekend differ by country and employer, so we book video calls around your own
        roster, and WhatsApp covers document exchange between calls. All clients are served online; our only office is in
        Anna Nagar, Chennai.
      </p>

      <HighTicketSections audiences={AUDIENCES} notIncluded={NOT_INCLUDED} />
    </ServicePageTemplate>
  );
}
