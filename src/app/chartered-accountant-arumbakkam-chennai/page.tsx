import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-arumbakkam-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Arumbakkam | C S Rushil & Co." },
  description:
    "Chartered accountant for Arumbakkam firms, landlords and first-time taxpayers: GST, LLP conversion and income tax from our Anna Nagar office, 2.8 km by road.",
  alternates: { canonical: "/chartered-accountant-arumbakkam-chennai", types: { "text/markdown": "/md/chartered-accountant-arumbakkam-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Arumbakkam, Chennai",
    description: "GST, LLP conversion, rental income and first returns for Arumbakkam partnership firms, landlords and young earners, from our only office in Anna Nagar.",
    url: "/chartered-accountant-arumbakkam-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Arumbakkam"
      crumbHref="/chartered-accountant-arumbakkam-chennai"
      h1="Chartered Accountant in Arumbakkam, Chennai"
      subhead="GST, partnership and LLP work, rental income and first income tax returns for Arumbakkam's traders, showroom operators, landlords and young earners, handled from our only office in J-Block, Anna Nagar, just up 100 Feet Road."
      distanceNote="Arumbakkam is about 5 minutes by road off-peak (route estimate) from our office, a drive of about 2.8 km along 100 Feet Road and 4th Avenue (Santhi Colony Road). That is a clear-road figure, and rush hour on 100 Feet Road can stretch it. We have no branch in Arumbakkam: our only office is in Anna Nagar, and Arumbakkam clients visit us there, Monday to Saturday from 9:30 AM to 6:30 PM, or work with us online."
      directAnswer="C S Rushil & Co. serves Arumbakkam from its only office at J-Block, 13th Main Road, Anna Nagar, about 2.8 km by road along 100 Feet Road and Santhi Colony Road. There is no Arumbakkam branch. Partnership firms, showroom and shop owners, landlords and salaried residents there can visit that office or work with us online."
      localContext={[
        "We serve Arumbakkam from Anna Nagar, directly north along Jawaharlal Nehru Road (100 Feet Road). Arumbakkam clients tend to drop in when a deed has to be signed or a lease reviewed, and otherwise send invoices, bank statements and Form 16s by WhatsApp or email so that monthly GST and yearly returns carry on without a trip.",
        "Arumbakkam sits between Anna Nagar to the north, Koyambedu to the west and Aminjikarai to the east, with EVR Periyar Salai (Poonamallee High Road) and 100 Feet Road as its main roads. OpenStreetMap places it in the Greater Chennai Corporation's Anna Nagar zone (Zone 8), the same zone as our J-Block office.",
        "Its landmarks are easy to find. DG Vaishnav College stands on EVR Periyar Salai, Arumbakkam Metro station lies on 100 Feet Road, and MMDA Colony forms a large residential pocket. Vehicle showrooms line stretches of 100 Feet Road, and the CMBT bus terminus is just across the western edge of the locality.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Arumbakkam?",
          body: (
            <>
              <p>
                Arumbakkam&apos;s commercial life runs along its two big roads. 100 Feet Road carries vehicle showrooms,
                banks, offices and shops, while EVR Periyar Salai has shops, eateries and businesses that serve
                students at DG Vaishnav College. Behind both roads, residential colonies such as MMDA Colony hold
                homes, small offices and neighbourhood stores along their inner streets.
              </p>
              <p className="mt-4">
                Businesses of this size are often set up as partnerships under a deed signed long ago, as
                proprietorships, or as family concerns that also own the building they trade from. That shapes what they ask an accountant for:
                GST returns that match daily sales, a fresh look at whether the partnership still suits them, and clean
                records for rent earned from the floors above the shop.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Arumbakkam?",
          body: (
            <>
              <p>
                From the centre of Arumbakkam, our office is about 5 minutes by road off-peak (route estimate), a drive of
                about 2.8 km. The route heads north on 100 Feet Road, turns onto 4th Avenue (Santhi Colony Road) inside
                Anna Nagar, and reaches 13th Main Road. As the crow flies, the office is only about 1.6 km away.
              </p>
              <p className="mt-4">
                We took the estimate from the public OSRM routing service on OpenStreetMap road data, measured from
                OpenStreetMap&apos;s centre point for Arumbakkam to our office pin. It reflects a free-flowing road; the
                busy signals along 100 Feet Road add time at peak hours. By Metro, board the Green Line at
                Arumbakkam station and ride three stops, through CMBT and Koyambedu, to Thirumangalam, whose 2nd Avenue
                entrance is about 300 metres from our office.
              </p>
            </>
          ),
        },
        {
          heading: "Should an Arumbakkam partnership firm convert to an LLP?",
          body: (
            <>
              <p>
                An Arumbakkam partnership firm should consider an LLP when the partners want protection from each
                other&apos;s business debts, plan to change partners, or deal with lenders who prefer a registered entity.
                Conversion is allowed only if every partner of the firm becomes a partner of the LLP and no one else.
              </p>
              <p className="mt-4">
                Conversion is filed with the Registrar of Companies, and the firm&apos;s assets, liabilities, contracts and
                bank accounts move into the LLP. The LLP then takes its own GST registration and PAN, files a statement of
                accounts and an annual return every year, and may need an audit once it crosses the limits. Weigh those
                yearly filings against the protection before you apply. Read{" "}
                <Link href="/blog/convert-partnership-firm-to-llp" className={L}>
                  how to convert a partnership firm to an LLP
                </Link>{" "}
                and see{" "}
                <Link href="/llp-registration-chennai" className={L}>
                  LLP registration in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How is rental income from an Arumbakkam property taxed?",
          body: (
            <>
              <p>
                Rent from a flat, house or shop floor in Arumbakkam is taxed as income from house property. You start with
                the rent received, subtract the property tax actually paid to the Corporation, and then claim a flat
                standard deduction for repairs. Interest on a loan taken to buy or build the let-out property is also
                deductible.
              </p>
              <p className="mt-4">
                Two extra checks often apply. A business tenant, or an individual paying higher monthly rent, must deduct TDS,
                so the rent in your return has to agree with the TDS credit in your Form 26AS and annual information
                statement. Letting a home to a family to live in does not attract GST, but letting a showroom or office floor
                can, once your taxable turnover requires registration. Read{" "}
                <Link href="/blog/tds-on-rent" className={L}>
                  TDS on rent for Chennai landlords and tenants
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What should a first-time taxpayer in Arumbakkam know?",
          body: (
            <>
              <p>
                A graduate starting a first job, or earning from internships and freelance work, should first link PAN with
                Aadhaar and check the annual information statement on the income tax portal. Filing a return is worthwhile
                even when no tax is payable, because it is the only way to recover TDS deducted from salary or fees.
              </p>
              <p className="mt-4">
                The new tax regime applies by default and allows few deductions, so it suits many young earners, but the
                choice is worth checking each year once rent, insurance or a home loan enter the picture. Collect Form 16
                from your employer, compare it with Form 26AS, and e-verify the return after you file it, or it will not
                be processed. Our{" "}
                <Link href="/income-tax-return-filing-chennai" className={L}>
                  income tax return filing in Chennai
                </Link>{" "}
                page explains the documents we need.
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Arumbakkam?",
          body: (
            <p>
              No. We have no branch in Arumbakkam. Our only office is at Old Door No. AP-890, New No. 18, J-Block, 1st
              Street, 13th Main Rd, Anna Nagar, Chennai 600040. Arumbakkam clients visit that office, open Monday to
              Saturday from 9:30 AM to 6:30 PM, or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Arumbakkam clients?",
          body: (
            <p>
              Arumbakkam clients start with a free 15-minute consultation, in person at our Anna Nagar office or by video.
              After it we send an itemised quote that keeps government fees apart from our professional fees, line by line.
              No work begins and nothing is filed until you approve that quote. Book by calling +91 72001 49711.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "llp-registration-chennai", why: "Converting an Arumbakkam partnership firm into an LLP, with fresh GST registration and PAN." },
        { slug: "partnership-firm-registration-chennai", why: "Drafting or updating the deed for an Arumbakkam partnership that adds, retires or replaces partners." },
        { slug: "gst-return-filing-chennai", why: "Monthly GST returns for Arumbakkam showrooms, offices and shops on 100 Feet Road and EVR Periyar Salai." },
        { slug: "income-tax-return-filing-chennai", why: "First returns for young Arumbakkam earners and yearly returns for landlords with rent and interest." },
        { slug: "tds-return-filing-chennai", why: "TDS returns for Arumbakkam businesses paying rent, contractors and professionals." },
        { slug: "bookkeeping-services-chennai", why: "Books for Arumbakkam traders and showroom operators, kept in step with GST and bank statements." },
        { slug: "proprietorship-registration-chennai", why: "Registering a new Arumbakkam shop or service business as a proprietorship with GST and Udyam." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies when rent, TDS credits or high-value transactions in an Arumbakkam taxpayer's records do not match." },
      ]}
      faqs={[
        { question: "Our Arumbakkam partnership has run for years. Is converting to an LLP worth it?", answer: "It can be, if you want limited liability, expect partners to change, or need a registered entity for lenders and buyers. The cost is yearly filings with the Registrar and, above certain limits, an audit. We compare both structures against your actual turnover, borrowing and partner plans before anything is filed with the Registrar." },
        { question: "I rent out the floor above my Arumbakkam shop. How is that rent taxed?", answer: "It is income from house property. Deduct property tax paid to the Corporation, then a flat standard deduction, plus interest on any loan for that property. If the tenant is a business, it should deduct TDS. Commercial letting can also attract GST once your taxable turnover means you must register, so keep the lease and receipts filed." },
        { question: "I just started my first job near Arumbakkam. Do I have to file a return?", answer: "If your income is below the taxable limit, filing may not be compulsory, but it is still useful. A return is the only way to claim back TDS, and it builds a record for future loans and visas. Check Form 16 against Form 26AS and the annual information statement first, then e-verify the return after filing." },
        { question: "How do I reach your office from Arumbakkam by Metro?", answer: "Take the Green Line from Arumbakkam station on 100 Feet Road towards Thirumangalam. It is three stops, through CMBT and Koyambedu. The Thirumangalam entrance on 2nd Avenue is about 300 metres from our office. By road the trip is about 2.8 km, roughly 5 minutes when traffic is light, and longer at the evening rush." },
        { question: "Which Corporation zone is Arumbakkam in?", answer: "OpenStreetMap places Arumbakkam in the Greater Chennai Corporation's Anna Nagar zone (Zone 8), the same zone as our office, even though it borders Koyambedu, which falls in the Kodambakkam zone. For trade licences, property tax and professional tax, rely on the zone and ward printed on your own Corporation property tax receipts." },
      ]}
      furtherReading={[
        { slug: "convert-partnership-firm-to-llp", title: "Convert a Partnership Firm to an LLP: Form 17 Guide" },
        { slug: "tds-on-rent", title: "TDS on Rent: What Chennai Landlords and Tenants Should Know" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
        { slug: "business-personal-expenses-separate", title: "Mixing Business and Personal Expenses Costs You at Tax Time" },
      ]}
    />
  );
}
