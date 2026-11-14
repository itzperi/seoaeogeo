import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-velachery-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Velachery | C S Rushil & Co." },
  description:
    "Chartered accountant for Velachery: income tax for salaried staff, RSUs, GST for shops and restaurants, from our Anna Nagar office, 16.5 km away by road.",
  alternates: { canonical: "/chartered-accountant-velachery-chennai", types: { "text/markdown": "/md/chartered-accountant-velachery-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Velachery, Chennai",
    description: "Income tax, RSU reporting, GST and payroll for Velachery residents, landlords and retailers, from our only office in Anna Nagar.",
    url: "/chartered-accountant-velachery-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Velachery"
      crumbHref="/chartered-accountant-velachery-chennai"
      h1="Chartered Accountant in Velachery, Chennai"
      subhead="Income tax, RSU reporting, GST, payroll and licences for Velachery's salaried professionals, landlords, retailers and restaurants, handled from our only office in J-Block, Anna Nagar, with most routine filing done online."
      distanceNote="Velachery is about 18 minutes by road on a clear run (OSRM route estimate) from our office, a drive of about 16.5 km; peak-hour traffic takes considerably longer. We have no branch in Velachery: our only office is in Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM, and Velachery clients visit us there or work with us online."
      directAnswer="C S Rushil & Co. serves Velachery from its only office at J-Block, 13th Main Road, Anna Nagar, roughly 16.5 km away by road. There is no Velachery branch. Salaried professionals, landlords, shop owners and restaurant operators in Velachery can visit the Anna Nagar office or work with us online for income tax, GST and payroll."
      localContext={[
        "Velachery is a long drive from Anna Nagar at rush hour, so we set up Velachery engagements to run mostly online. Form 16, AIS downloads, broker statements, sales registers and rent receipts travel over WhatsApp and email, reviews happen on a video call, and a visit to our J-Block office is kept for signatures, original documents or a detailed notice discussion.",
        "On OpenStreetMap, Velachery falls in the Greater Chennai Corporation's Adyar zone (Zone 13), whereas our office is in the Anna Nagar zone (Zone 8). The locality is organised around Velachery Main Road and Velachery Bypass Road, with the Velachery MRTS station at its southern end, Velachery Lake within it and Taramani immediately to the east.",
        "Apartment blocks line many Velachery streets, and plenty of the people living in them commute to offices in Taramani, Guindy or along Old Mahabalipuram Road. Alongside those households runs a busy retail economy: Phoenix Marketcity on Velachery Main Road, showrooms and eateries along the Bypass Road, and the tuition centres, clinics and grocery shops that serve each residential pocket.",
      ]}
      sections={[
        {
          heading: "What kinds of tax and business work come from Velachery?",
          body: (
            <>
              <p>
                Velachery work splits into two groups. Salaried residents need income tax returns that reconcile Form 16,
                AIS and capital gains, sometimes with foreign shares from an employer. Retailers, restaurants, tutors and
                clinic owners along Velachery Main Road and the Bypass Road need GST, payroll, licences and books that hold
                up when a notice arrives.
              </p>
              <p className="mt-4">
                Many households sit in both groups at once. A software engineer may let out a second flat near the MRTS
                station, a spouse may run a home bakery or tuition class, and a retired parent may live on deposit interest
                and pension. We look at the household as a whole, so each return uses consistent figures for rent, interest
                and jointly owned property.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Velachery?",
          body: (
            <>
              <p>
                From the centre of Velachery, our office is about 18 minutes by road on a clear run (OSRM route estimate),
                a drive of about 16.5 km. The suggested route leaves Velachery along Velachery Main Road and Five Furlong
                Road, passes Guindy on Anna Salai, then follows Inner Ring Road and 100 Feet Road to Anna Nagar.
              </p>
              <p className="mt-4">
                That figure comes from the public OSRM router working on OpenStreetMap road data, measured from
                OpenStreetMap&apos;s centre point for Velachery to our office pin. It assumes empty roads. Office-hour
                traffic at Guindy, Kathipara and Koyambedu can make the journey far longer, which is why we suggest
                Velachery clients share documents online and keep visits for the occasions that genuinely need one.
              </p>
            </>
          ),
        },
        {
          heading: "How should salaried Velachery residents check Form 16, AIS and their tax regime?",
          body: (
            <>
              <p>
                Start by matching three documents: Form 16 from your employer, the Annual Information Statement and Form
                26AS on the income tax portal. Salary, bank interest, dividends and mutual fund redemptions should agree
                across them. Then compare the old and new tax regimes using your real deductions, because the better
                choice can change from one year to the next.
              </p>
              <p className="mt-4">
                Mismatches are a frequent reason a straightforward return turns into a notice. A redemption missing from
                your own records, interest on a fixed deposit opened years ago, or TDS deducted by a former employer can
                all show up in AIS. We reconcile each line before filing, and if an employer or bank has reported
                something wrongly, we explain how to have it corrected. Read{" "}
                <Link href="/blog/why-income-tax-notices-issued" className={L}>
                  why income tax notices get issued
                </Link>{" "}
                or see{" "}
                <Link href="/income-tax-return-filing-chennai" className={L}>
                  income tax return filing in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What must Velachery employees with foreign shares or RSUs report?",
          body: (
            <>
              <p>
                Employees who receive RSUs or ESOP shares of a foreign parent company must deal with them in two places.
                The value at vesting or exercise is taxed as a salary perquisite, and while you are resident and ordinarily
                resident, the holding must also be disclosed in Schedule FA of the return, even in a year when you sell
                nothing.
              </p>
              <p className="mt-4">
                When the shares are sold, the gain is a capital gain, and shares of a company not listed in India become
                long-term only after being held for more than 24 months. Dividends from the foreign parent are taxable here
                too, with relief for foreign tax withheld where the treaty allows it and the claim is filed in time. Read
                our guide on{" "}
                <Link href="/blog/foreign-rsu-tax-schedule-fa-chennai" className={L}>
                  foreign RSU and ESPP tax and Schedule FA
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What do Velachery shops, restaurants and tuition centres need to register?",
          body: (
            <>
              <p>
                Most Velachery storefronts need GST registration once turnover or the kind of supply requires it, Tamil
                Nadu Shops and Establishments registration, a Greater Chennai Corporation trade licence and professional
                tax enrolment for staff. Restaurants and food outlets also need FSSAI registration or a licence, and a
                business tenant paying rent may have to deduct TDS from it.
              </p>
              <p className="mt-4">
                GST treatment varies by format. A standalone restaurant normally charges GST without claiming input tax
                credit, while a tuition centre&apos;s coaching fees become taxable once it crosses the services threshold,
                and in Tamil Nadu that threshold is lower for services than for goods. We set up billing, file monthly or
                quarterly returns and keep sales registers consistent with bank deposits. See{" "}
                <Link href="/gst-return-filing-for-restaurants" className={L}>
                  GST return filing for restaurants
                </Link>{" "}
                and{" "}
                <Link href="/fssai-license-chennai" className={L}>
                  FSSAI licence in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Velachery?",
          body: (
            <p>
              No. There is no Velachery branch. Our single office is at Old Door No. AP-890, New No. 18,
              J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, open Monday to Saturday from 9:30 AM to 6:30
              PM. Velachery clients come to that office or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Velachery clients?",
          body: (
            <p>
              Your first step is a free 15-minute consultation, by video from Velachery or in person at Anna Nagar. We
              follow it with an itemised quote that keeps government fees apart from our professional fees, so each charge
              is visible on its own line. Nothing begins until you approve that quote. Call +91 72001 49711 to arrange a
              time.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "Returns for Velachery salaried residents that reconcile Form 16, AIS, Form 26AS and mutual fund gains." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "RSU, ESOP and Schedule FA reporting for Velachery employees of foreign-owned companies." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to AIS mismatch and refund adjustment notices received by Velachery taxpayers." },
        { slug: "gst-return-filing-for-restaurants", why: "GST returns for restaurants and food outlets on Velachery Main Road and the Bypass Road." },
        { slug: "fssai-license-chennai", why: "FSSAI registration or licence for Velachery eateries, bakeries and home food businesses." },
        { slug: "gst-registration-chennai", why: "GST registration for Velachery shops and tuition centres once turnover or supply type requires it." },
        { slug: "payroll-services-chennai", why: "Payroll, TDS on salary and professional tax for Velachery retailers and clinics with staff." },
        { slug: "tds-return-filing-chennai", why: "Quarterly TDS returns for Velachery businesses that deduct tax on rent, salaries and contractor payments." },
      ]}
      faqs={[
        { question: "I live in Velachery and my AIS shows income I do not recognise. What should I do?", answer: "Do not ignore it. Check whether the entry is genuinely yours, such as interest on an old deposit or a redemption you forgot. If it is wrong, submit feedback on the income tax portal and keep proof. We reconcile AIS, Form 26AS and Form 16 line by line before your return is filed." },
        { question: "I rent out a flat near Velachery MRTS station. How is that rent taxed?", answer: "Rent from a let-out flat is taxed as income from house property. You deduct municipal tax actually paid and a standard deduction, and home loan interest on that flat is deductible, though setting off any resulting loss is restricted. If the tenant deducts TDS, the rent you declare should match the entries in Form 26AS." },
        { question: "How long does the drive from Velachery to your office take?", answer: "On a clear road, about 18 minutes for roughly 16.5 km, according to an OSRM route estimate through Guindy, Inner Ring Road and 100 Feet Road. At peak hours the trip takes considerably longer. Most routine work needs no visit at all, since documents, reviews and approvals can all be handled online." },
        { question: "I live in Velachery and hold RSUs from my employer's US parent. Do I need Schedule FA?", answer: "Usually yes, if you are resident and ordinarily resident in India. Foreign shares and the overseas brokerage account holding them are disclosed in Schedule FA even without a sale. Missing the disclosure can attract penalties under the black money law, so we review vesting statements and broker reports each year before filing." },
        { question: "Does a tuition centre in Velachery need GST registration?", answer: "It depends on turnover. Private coaching is a taxable service, so registration becomes compulsory once aggregate turnover crosses the services threshold applicable in Tamil Nadu, which is lower than the threshold for goods. Below it, registration is generally optional. We also check Shops and Establishments registration, professional tax for teachers and rented premises." },
      ]}
      furtherReading={[
        { slug: "why-income-tax-notices-issued", title: "Why Income Tax Notices Get Issued: The Actual Triggers" },
        { slug: "foreign-rsu-tax-schedule-fa-chennai", title: "Foreign RSU and ESPP Tax and Schedule FA for Chennai Staff" },
        { slug: "tds-on-rent", title: "TDS on Rent: What Chennai Landlords and Tenants Should Know" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
      ]}
    />
  );
}
