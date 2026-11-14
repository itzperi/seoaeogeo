import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-kolathur-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Kolathur | C S Rushil & Co." },
  description:
    "Chartered accountant for Kolathur flat buyers, contractors and shops: property TDS, capital gains, GST and income tax from our Anna Nagar office, 6.5 km away.",
  alternates: { canonical: "/chartered-accountant-kolathur-chennai", types: { "text/markdown": "/md/chartered-accountant-kolathur-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Kolathur, Chennai",
    description: "Property TDS, capital gains, GST and income tax for Kolathur homeowners, contractors and shopkeepers, from our only office in Anna Nagar.",
    url: "/chartered-accountant-kolathur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Kolathur"
      crumbHref="/chartered-accountant-kolathur-chennai"
      h1="Chartered Accountant in Kolathur, Chennai"
      subhead="TDS and capital gains on flat purchases and sales, GST and income tax for contractors, and registrations for shops on Kolathur Main Road and Paper Mills Road, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Kolathur is about 8 minutes by road off-peak (route estimate) from our office, a drive of about 6.5 km along 100 Feet Road and Kolathur Road. That figure assumes free-flowing traffic, and peak hours take noticeably longer. We have no branch in Kolathur: our only office is in Anna Nagar, and Kolathur clients visit us there, Monday to Saturday from 9:30 AM to 6:30 PM, or work with us online."
      directAnswer="C S Rushil & Co. serves Kolathur from its only office at J-Block, 13th Main Road, Anna Nagar, about 6.5 km by road along 100 Feet Road. There is no Kolathur branch. Homeowners, flat buyers, building contractors and shopkeepers in Kolathur can visit that office or handle their tax and GST work with us online."
      localContext={[
        "We serve Kolathur from Anna Nagar, to its south-west. Because the trip is longer than from the neighbourhoods right next to Anna Nagar, many Kolathur clients keep visits for the moments that need them, such as signing a sale deed review or a first meeting, and run the rest of their work with us online.",
        "Kolathur sits north of Villivakkam, with Kolathur Lake and the Kolathur Water Works beside it and Retteri Lake further north. Grand Northern Trunk Road passes close by, and 100 Feet Road links it south to Anna Nagar. OpenStreetMap places Kolathur in the Greater Chennai Corporation's Thiru. Vi. Ka. Nagar zone (Zone 6), not in the Anna Nagar zone (Zone 8) where our office is.",
        "Kolathur Main Road, Paper Mills Road and Villivakkam Road carry its shops and services, while the streets between them are lined with independent houses and apartment buildings. A locality like this produces a steady run of property transactions, home-based ventures and tradespeople who work for builders, each with its own tax questions.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Kolathur?",
          body: (
            <>
              <p>
                Kolathur&apos;s businesses mainly serve the households around them. Shops, pharmacies, eateries, clinics, small
                offices and service providers line Kolathur Main Road, Paper Mills Road and Villivakkam Road. On the residential
                streets, home-based ventures such as tuition classes, catering or online selling often start in a spare
                room before they need premises.
              </p>
              <p className="mt-4">
                Electricians, plumbers, masons, painters and small civil contractors who take jobs from builders form a
                separate group. Their accounting needs differ from a shop&apos;s: income
                arrives as bills paid by builders after TDS, expenses are mostly materials and labour paid in small
                amounts, and GST registration depends on how large the work has grown.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Kolathur?",
          body: (
            <>
              <p>
                From the centre of Kolathur, our office is about 8 minutes by road off-peak (route estimate), a drive of
                about 6.5 km. The route leaves along Kolathur Road and Senthil Nagar 2nd Main Road, joins Jawaharlal Nehru
                Road (100 Feet Road) heading south, and turns along 2nd Avenue to 13th Main Road.
              </p>
              <p className="mt-4">
                The estimate comes from the public OSRM routing service on OpenStreetMap road data, measured from
                OpenStreetMap&apos;s centre point for Kolathur to our office pin. It describes an empty road; 100 Feet Road
                is busy at school and office hours, and the real trip can take much longer. In a straight line,
                Kolathur is about 4.4 km from the office. Documents can be shared by WhatsApp or email, and meetings held by
                video, so a visit is needed only when you prefer one.
              </p>
            </>
          ),
        },
        {
          heading: "What tax steps apply when you buy a flat in Kolathur?",
          body: (
            <>
              <p>
                When a Kolathur flat costs ₹50 lakh or more and the seller is resident, the buyer deducts 1% TDS, calculated
                on the higher of the price and the stamp duty value, and deposits it with a challan-cum-statement quoting
                the seller&apos;s PAN. The buyer does not need a TAN for this, but must give the seller a TDS certificate.
              </p>
              <p className="mt-4">
                If the seller is a non-resident, the deduction is much larger and follows different rules, so check the
                seller&apos;s residential status before paying the advance. Buyers who take a home loan should keep the
                sanction letter and interest certificates, because interest on a loan for a self-occupied home may be
                deductible depending on the tax regime chosen. If the agreed price is well below the guideline value, both
                sides can face tax on the difference. Read{" "}
                <Link href="/nri-property-sale-tds-chennai" className={L}>
                  TDS when buying property from an NRI in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How is the sale of a Kolathur flat or house taxed?",
          body: (
            <>
              <p>
                Selling a Kolathur flat or house held for more than 24 months produces a long-term capital gain, taxed at
                12.5%, with an option of 20% after indexation for property bought before 23 July 2024. A shorter holding is
                taxed at slab rates. If the guideline value is more than 10% above the agreed price, the guideline value is
                used.
              </p>
              <p className="mt-4">
                The cost of purchase, registration charges paid at that time, documented improvements and brokerage on the
                sale all reduce the gain. Reinvesting in another residential house, or in specified bonds, within the time
                allowed can reduce or remove the tax, but the conditions are strict. Since the buyer&apos;s TDS appears in your
                annual information statement, the sale must be reported in that year&apos;s return. Read our guide to{" "}
                <Link href="/blog/capital-gains-tax-property-sale" className={L}>
                  capital gains tax on selling property in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How should Kolathur contractors and tradespeople handle TDS and GST?",
          body: (
            <>
              <p>
                A Kolathur contractor or tradesperson whose bills are paid by builders or companies usually sees TDS cut from
                each payment. That tax is not lost: it shows in Form 26AS and the annual information statement, and it is
                credited against the tax due when you file your return, with any excess refunded.
              </p>
              <p className="mt-4">
                Small contractors whose turnover is within the limit can opt for presumptive taxation and declare a set share
                of receipts as income, without maintaining full books. GST registration becomes compulsory once turnover
                crosses the services threshold applicable in Tamil Nadu, and builders often ask for a GSTIN earlier so they
                can claim input tax credit. Keeping a separate bank account for the work makes both easier. See{" "}
                <Link href="/gst-registration-chennai" className={L}>
                  GST registration in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Kolathur?",
          body: (
            <p>
              No. We have no branch in Kolathur. Our only office is at Old Door No. AP-890, New No. 18, J-Block, 1st Street,
              13th Main Rd, Anna Nagar, Chennai 600040. Kolathur clients visit that office, open Monday to Saturday from 9:30
              AM to 6:30 PM, or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Kolathur clients?",
          body: (
            <p>
              For Kolathur clients, the first step is a free 15-minute consultation, on a video call or at our Anna Nagar
              office. We then send an itemised quote in which government fees appear separately from our professional fees.
              Work begins only after you approve that quote, never before. Call +91 72001 49711 to arrange a time.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "Returns for Kolathur residents reporting a flat sale, salary, rent or contract income." },
        { slug: "nri-property-sale-tds-chennai", why: "TDS and lower deduction certificates when a Kolathur property is bought from or sold by an NRI." },
        { slug: "gst-registration-chennai", why: "GST registration for Kolathur contractors and tradespeople once turnover or a builder's terms require it." },
        { slug: "gst-return-filing-chennai", why: "Monthly or quarterly GST returns for Kolathur shops on Kolathur Main Road and Paper Mills Road." },
        { slug: "bookkeeping-services-chennai", why: "Simple books for Kolathur contractors tracking builder payments, materials and labour." },
        { slug: "proprietorship-registration-chennai", why: "Setting up a Kolathur shop or home venture as a proprietorship with GST and Udyam where needed." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices when a Kolathur property sale or TDS credit is missing from a return." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for Kolathur contractors and small suppliers working for larger builders." },
      ]}
      faqs={[
        { question: "I am buying a resale flat in Kolathur. Do I have to deduct TDS?", answer: "Yes, if the price is ₹50 lakh or more and the seller is resident. Deduct 1% of the higher of the price and the stamp duty value, deposit it quoting the seller's PAN, and give the seller the TDS certificate. A non-resident seller means a larger deduction under separate rules, so confirm status first." },
        { question: "I sold my Kolathur flat after several years. How is the gain taxed?", answer: "Held for more than 24 months, the gain is long-term and taxed at 12.5%, or at 20% with indexation if you bought before 23 July 2024. Purchase cost, improvements and brokerage reduce the gain, and reinvesting in another house can cut the tax. The buyer's TDS will appear in your annual information statement." },
        { question: "I do electrical work for builders around Kolathur. Why is TDS cut from my bills?", answer: "Builders and companies must deduct TDS on payments to contractors above set limits. The amount is credited to your PAN and appears in Form 26AS. When you file your return, it is set against your tax, and any excess is refunded. File every year, even when your income is small, to recover it." },
        { question: "Which Corporation zone is Kolathur in?", answer: "OpenStreetMap places Kolathur in the Greater Chennai Corporation's Thiru. Vi. Ka. Nagar zone (Zone 6). Our office is in the Anna Nagar zone (Zone 8). Trade licences, property tax and professional tax for Kolathur premises are still handled by the Corporation, so use the zone and ward printed on your property tax receipt." },
        { question: "Kolathur is 6.5 km from your office. Can I work with you without visiting?", answer: "Yes. Routine Kolathur work can run online: you share documents by WhatsApp or email, we meet by video, and returns are filed and e-verified remotely. Some clients still come in to sign a deed or review a notice in person. Our J-Block office is open Monday to Saturday from 9:30 AM to 6:30 PM." },
      ]}
      furtherReading={[
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "why-income-tax-notices-issued", title: "Why Income Tax Notices Get Issued: The Actual Triggers" },
        { slug: "business-personal-expenses-separate", title: "Mixing Business and Personal Expenses Costs You at Tax Time" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
      ]}
    />
  );
}
