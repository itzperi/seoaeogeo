import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const slug = "/income-tax-consultant-madurai";
const title = "Income Tax Consultant in Madurai for HNIs | C S Rushil & Co.";
const description =
  "Income tax for Madurai traders, doctors, hospital owners and jewellers: AIS high-value transactions, cash rules, farm income and property gains, served online.";

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

const CASH_RULES = [
  ["Receiving cash of ₹2 lakh or more", "Not allowed from one person in a day, for one transaction, or for one event or occasion. The penalty equals the amount received.", "A jewellery sale or hospital bill of ₹2 lakh or more must be received through banking channels, even if split into several bills."],
  ["Paying business expenses in cash above ₹10,000", "Payment to one person in a day above ₹10,000 otherwise than through banking channels is generally disallowed as a deduction (₹35,000 for transport operators).", "Purchases of gold, grain or textiles from suppliers paid in cash risk disallowance."],
  ["Taking or repaying loans and deposits in cash", "Cash loans or deposits of ₹20,000 or more, and repayments of that size, attract penalties equal to the amount.", "Family hand-loans between traders are a frequent source of notices."],
  ["Cash deposits in bank accounts", "Banks report aggregate cash deposits of ₹10 lakh or more in a year in savings accounts, and higher thresholds for current accounts, to the department.", "Appears in AIS; must be explained by recorded sales or withdrawals."],
  ["Cash sales of goods above ₹2 lakh", "Sellers whose accounts are audited report cash receipts above ₹2 lakh for sale of goods or services in the statement of financial transactions.", "Jewellers' and dealers' reporting shows up in buyers' AIS too."],
];

const CAPITAL_GAINS = [
  ["House or plot in K K Nagar, Anna Nagar or Tallakulam", "Long-term after 24 months: 12.5% without indexation; residents may compare 20% with indexation on property acquired before 23 July 2024.", "Reinvest in a residential house or specified bonds (up to ₹50 lakh within six months) to reduce tax."],
  ["Shop or commercial building in the old city or Goripalayam", "Same holding period and rates as other land and buildings, unless used in a business and depreciated, in which case the block rules apply.", "Where the shop is inherited, the previous owner's cost and holding period count."],
  ["Hospital or clinic building", "If depreciated in a doctor's or hospital's books, the gain is usually computed on the block of assets and treated as short-term.", "Separate land (not depreciable) from building in the sale deed."],
  ["Agricultural land in surrounding taluks", "Not a capital asset if it lies beyond the specified distance from a municipality; otherwise taxed like other land.", "Relief for buying new agricultural land within two years, if the land was farmed for two years before sale."],
  ["Gold and jewellery held as investment", "Long-term after 24 months: 12.5% without indexation; shorter holdings are taxed at slab rates.", "Purchase bills or valuation reports are needed to prove cost; old family jewellery is often undocumented."],
  ["Any property sold below guideline value", "Section 50C (1961 Act numbering) treats the stamp duty value as the sale price where it exceeds the actual price by more than 10%.", "Check the guideline value on tnreginet.gov.in for the survey number before agreeing the price."],
];

const DOCUMENTS = [
  ["Business books and stock records", "Sales and purchase registers, gold or stock registers, GST returns and the reconciliation between GST turnover and the books."],
  ["Bank statements for every account", "Savings, current and overdraft accounts of the proprietor, family members and any firm, with notes on large cash deposits."],
  ["Hospital and practice records", "Patient receipts by mode, insurer and TPA settlements, Form 16A from insurers, doctors' retainership agreements and equipment purchase invoices."],
  ["Property papers", "Sale deeds, guideline value printout, encumbrance certificate, patta, and loan statements for property bought on credit."],
  ["Agricultural records", "Chitta and adangal, sale bills for paddy, coconut or other produce, and lease agreements where land is let to a cultivator."],
  ["AIS, TIS and Form 26AS", "Downloaded for each family member before filing, with feedback submitted on any entry that is wrong."],
];

const CALENDAR = [
  ["15 June 2026", "First advance tax instalment for tax year 2026-27 (15% of estimated tax). Traders on presumptive taxation pay their full advance tax by 15 March instead."],
  ["15 September 2026", "Second instalment (45% cumulative)."],
  ["21 November 2026", "Return due for financial year 2025-26 for traders, hospitals and doctors whose accounts are audited (extended from 31 October by CBDT Circular No. 7/2026; audit report by 21 October 2026)."],
  ["15 December 2026", "Third instalment (75% cumulative)."],
  ["15 March 2027", "Final instalment (100%), and the single instalment date for presumptive taxpayers."],
  ["31 July 2027", "Return due for tax year 2026-27 for individuals without audited business income."],
  ["31 October 2027", "Return due for tax year 2026-27 for businesses and professionals whose accounts are audited."],
  ["31 December 2027", "Last date for a belated return for tax year 2026-27."],
  ["31 March 2028", "Last date to revise the tax year 2026-27 return (twelve months after the tax year ends, as amended by the Finance Act, 2026)."],
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}${slug}`}
      serviceType="Income Tax Consulting for High-Income Individuals"
      crumbLabel="Income Tax Consultant in Madurai"
      crumbHref={slug}
      parentCrumb={{ name: "Income Tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" }}
      eyebrow="Income Tax · Madurai · Traders and Professionals"
      h1="Income Tax Consultant in Madurai for Business Families and High-Income Individuals"
      subhead="Income tax for Madurai trading families, doctors and hospital owners, and jewellery and other cash-intensive businesses: high-value transactions in the AIS, cash restrictions, agricultural income and capital gains on city property. Our only office is in Anna Nagar, Chennai; we serve Madurai clients online."
      keyFacts={[
        { label: "Where we work from", value: "Anna Nagar, Chennai only. We have no office in Madurai; Madurai clients work with us online, with meetings in Chennai by appointment." },
        { label: "Typical client", value: "Wholesale and retail traders, jewellers, doctors with their own hospitals or clinics, and families with rented shops and farmland." },
        { label: "Main risk area", value: "Transactions reported to the department by banks, sub-registrars and other businesses, shown in the Annual Information Statement (AIS)." },
        { label: "Cash limit on receipts", value: "Cash of ₹2 lakh or more from one person in a day, transaction or occasion is prohibited; the penalty equals the amount received." },
        { label: "Law in force", value: "Income-tax Act, 2025 from tax year 2026-27; financial year 2025-26 returns still under the Income-tax Act, 1961." },
      ]}
      introHeading="Why do Madurai traders and doctors get income tax notices so often?"
      intro="Mostly because the department now sees their high-value transactions directly. Banks report large cash deposits, sub-registrars report property purchases, and businesses report big cash sales, and all of this appears in the AIS. If a return does not match it, a notice follows. We reconcile each family member's AIS with the books before filing, working online from Anna Nagar, Chennai."
      citation={{ label: "Income Tax Department FAQs on the Annual Information Statement (incometax.gov.in)", href: "https://www.incometax.gov.in/iec/foportal/ais-faq" }}
      subServicesHeading="What do we handle for Madurai families and professionals?"
      subServices={[
        { name: "AIS reconciliation", text: "Matching cash deposits, property deals, share and mutual fund transactions, interest and GST turnover in each person's AIS with the books and bank statements, and filing feedback where an entry is wrong." },
        { name: "Cash-intensive business review", text: "Checking that jewellery, textile and grain businesses keep within cash receipt and payment limits, and that stock and cash registers support reported sales." },
        { name: "Doctors and hospitals", text: "Returns for doctors in practice and hospital owners: presumptive versus regular accounts, insurer and TPA receipts, TDS credits, and the split between doctor and hospital entities." },
        { name: "Family returns", text: "Returns for the trader, spouse, children and any HUF prepared together, so gifts, loans and rent between them are reported consistently." },
        { name: "Property and gold gains", text: "Capital gains on shops, houses, farmland and gold, with guideline value checks and reinvestment planning." },
        { name: "Notices and scrutiny", text: "Replies to e-proceedings notices about unexplained cash, AIS mismatches and property transactions, coordinated with our notice-reply team." },
      ]}
      howTo={{
        heading: "How does a Madurai client work with us?",
        steps: [
          { name: "Video call to understand the business", text: "We learn how the business earns: trade, practice or hospital, the share of cash, and which family members hold property." },
          { name: "Collect statements and books", text: "Bank statements, GST returns, stock registers and property papers are shared through a secure link or email." },
          { name: "Download and review the AIS", text: "We review each person's AIS and TIS, list every high-value entry, and trace it to the books or a bank withdrawal." },
          { name: "Correct before filing", text: "Wrong AIS entries get feedback; genuine gaps are explained in the books or reported, before the return is filed." },
          { name: "File and verify returns", text: "Returns are filed and e-verified; we track processing, refunds and any intimation." },
          { name: "Meet by appointment if needed", text: "Clients who prefer to meet can visit our Anna Nagar, Chennai office by appointment; we do not hold meetings in Madurai." },
        ],
      }}
      faqs={[
        { question: "What is the AIS and why does it matter for Madurai traders?", answer: "The Annual Information Statement is the department's record of transactions reported about you by banks, sub-registrars, companies and other businesses. It includes cash deposits, property deals and large purchases. Returns that report less than the AIS shows usually trigger a notice, so it should be reviewed before filing." },
        { question: "Can a jeweller accept ₹3 lakh in cash for a single sale?", answer: "No. Receiving ₹2 lakh or more in cash from one person for one transaction, in one day or for one occasion is prohibited, and the penalty equals the amount received. Splitting one sale into several bills on the same day does not avoid the rule. The balance must come through banking channels." },
        { question: "Can a doctor in Madurai use presumptive taxation?", answer: "Yes, if gross professional receipts are within the limit, ₹50 lakh, or ₹75 lakh where cash receipts are within 5%. Half the receipts are then treated as income, unless the doctor declares more. A doctor who owns a hospital as a business generally keeps regular books and may need an audit." },
        { question: "What happens if my AIS shows a property I never bought?", answer: "You can submit feedback on that entry in the AIS, stating that the information is incorrect or relates to another person. The reporting entity may be asked to confirm. Keep the feedback acknowledgement, since it supports your position if a notice is issued later." },
        { question: "Is paddy or coconut income from our village land taxable?", answer: "Agricultural income from land in India is exempt. It is still reported in the return and, where other income is above the basic exemption, it raises the rate on that other income. The department compares claims with landholding and yield, so keep chitta, adangal and sale bills." },
        { question: "Do I need to visit Chennai to work with you?", answer: "No. Madurai clients work with us by video call, email and secure document sharing, and returns are e-verified online. If you prefer to meet in person, we see clients at our Anna Nagar, Chennai office by appointment. We do not have an office or representative in Madurai." },
        { question: "How is old family gold taxed if we sell it?", answer: "Gold held over 24 months gives long-term capital gain, taxed at 12.5% without indexation. Inherited gold carries the previous owner's cost and holding period. Where purchase bills are missing, a valuation report as on the date of acquisition, or as on 1 April 2001 for older gold, helps establish cost." },
      ]}
      relatedQuestions={[
        { question: "How do HNIs in Chennai plan their income tax?", href: "/income-tax-consultant-for-hni-chennai" },
        { question: "How should I reply to a notice about cash deposits?", href: "/income-tax-notice-reply-chennai" },
        { question: "How are GST appeals handled in Madurai?", href: "/gst-litigation-madurai" },
      ]}
      relatedSlugs={["income-tax-return-filing-chennai", "income-tax-notice-reply-chennai", "nri-tax-services"]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">What is the typical high-income taxpayer profile in Madurai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Madurai has long been a trading city for south Tamil Nadu, and many of its higher-income families earn from trade
        rather than manufacturing: textiles, grain and provisions, jewellery, hardware and building materials, often run as
        proprietorships or family partnerships. The city is also a medical centre for the surrounding districts, so doctors
        in private practice and families owning hospitals and diagnostic centres form a large share of high-income
        taxpayers. Many of these families live in K K Nagar, Anna Nagar (Madurai) or Tallakulam, own shops in the older
        commercial areas such as Goripalayam, and hold paddy or coconut land in the villages they came from.
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        What links these profiles is a high volume of cash and high-value transactions: jewellery sales, patient
        collections, supplier payments and property deals. These are exactly the transactions that banks, sub-registrars
        and audited businesses report to the department, so the tax work is less about finding deductions and more about
        making sure the return tells the same story as the department&apos;s own data.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Which cash rules matter most for Madurai businesses?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The table summarises the cash rules we review most often for trading families and hospitals. Section numbers are
        not shown because they differ between the 1961 Act and the 2025 Act; the substance described is the same.
      </p>
      <DataTable head={["Rule", "What it says", "Where it bites"]} rows={CASH_RULES} />

      <h2 className="mt-14 text-2xl text-obsidian">How should doctors and hospital owners structure their income?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        A doctor&apos;s consultation income, a hospital&apos;s room, pharmacy and procedure income, and rent for the
        hospital building are taxed differently, and often belong in different hands. Where the hospital is run by a firm
        or company, the doctor-owners&apos; remuneration, any rent paid to them for the building, and the hospital&apos;s
        own profit each need to be reported in the right return. Insurers and TPAs deduct TDS on settlements, and that TDS
        appears in the AIS of whichever PAN billed the insurer, so billing in the wrong name creates mismatches. We set out
        who earns what, check it against the TDS records, and keep cash collections at the counter within the receipt
        limits.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">Why does GST turnover in the AIS matter for Madurai traders?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The AIS now shows the turnover a business declares in its GST returns. For a trader, this creates a direct comparison
        between the sales reported for GST and the sales in the income tax return. Differences are common and often
        innocent: exempt goods outside the GST return, advances, returns and credit notes booked in another month, or a
        branch registered under a different GSTIN. But an unexplained gap looks like unreported income. Before filing, we
        reconcile GST turnover with the books month by month and keep a note of each difference, so that if a notice asks
        about it, the explanation is ready. Where the GST figure itself is wrong, the correction belongs in the GST return,
        and our GST team can advise on that.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">What should be planned before buying property or gold with business money?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Trading families in Madurai often invest surplus cash from the business in a house, a shop or gold. Each of these
        purchases is reported: sub-registrars report property deals of ₹30 lakh or more, and jewellers report high-value cash
        sales. The department then checks whether the buyer&apos;s declared income and savings can support the purchase. A
        purchase in a spouse&apos;s or child&apos;s name funded by the business owner also needs to be shown as a gift or
        loan, and income from it may be clubbed with the owner&apos;s. We look at the source of funds, the name in which the
        asset is bought and how the payment is made before the transaction, which is far easier than explaining it after a
        notice arrives.
      </p>

      <h2 className="mt-14 text-2xl text-obsidian">How are capital gains on Madurai property and gold taxed?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Stamp duty and capital gains both use the guideline value fixed by the Tamil Nadu Registration Department for each
        street or survey number. Values are revised from time to time, so we check the current figure on tnreginet.gov.in
        for the exact property rather than relying on a quoted rate. Sub-registrars report property purchases and sales of
        ₹30 lakh or more, so these deals appear in the AIS of both buyer and seller.
      </p>
      <DataTable head={["Asset", "How the gain is taxed", "Reliefs and checks"]} rows={CAPITAL_GAINS} />

      <h2 className="mt-14 text-2xl text-obsidian">What documents should a Madurai family keep ready?</h2>
      <DataTable head={["Document", "What it covers"]} rows={DOCUMENTS} />

      <h2 className="mt-14 text-2xl text-obsidian">What are the key income tax dates for tax year 2026-27?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Tax year 2026-27 runs from 1 April 2026 to 31 March 2027 under the Income-tax Act, 2025. These are the statutory
        dates; the CBDT sometimes extends them.
      </p>
      <DataTable head={["Date", "What is due"]} rows={CALENDAR} />

      <h2 className="mt-14 text-2xl text-obsidian">How do we serve Madurai clients from Chennai?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        C S Rushil &amp; Co. has one office, in Anna Nagar, Chennai, and no branch or representative in Madurai. We work
        with Madurai clients by video call and secure document sharing; returns are e-verified online, and notices are
        answered through the faceless e-proceedings system. Clients who want to meet can visit our Chennai office by
        appointment. For our wider approach, see the{" "}
        <Link href="/income-tax-consultant-for-hni-chennai" className={linkClass}>
          income tax service for HNIs
        </Link>{" "}
        and{" "}
        <Link href="/income-tax-return-filing-chennai" className={linkClass}>
          income tax return filing
        </Link>
        . If a notice has already arrived, see{" "}
        <Link href="/income-tax-notice-reply-chennai" className={linkClass}>
          income tax notice replies
        </Link>
        . Trading families incorporating a business can use{" "}
        <Link href="/company-registration-madurai" className={linkClass}>
          company registration in Madurai
        </Link>
        , GST disputes are covered under{" "}
        <Link href="/gst-litigation-madurai" className={linkClass}>
          GST litigation in Madurai
        </Link>
        , and relatives working abroad can use our{" "}
        <Link href="/nri-tax-services" className={linkClass}>
          NRI tax services
        </Link>
        . To start, use the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </ServicePageTemplate>
  );
}
