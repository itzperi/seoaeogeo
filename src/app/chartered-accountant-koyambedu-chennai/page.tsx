import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-koyambedu-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Koyambedu | C S Rushil & Co." },
  description:
    "Chartered accountant for Koyambedu market traders and transporters: GST, e-way bills, cash rules and income tax from our Anna Nagar office, 2.1 km away.",
  alternates: { canonical: "/chartered-accountant-koyambedu-chennai", types: { "text/markdown": "/md/chartered-accountant-koyambedu-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Koyambedu, Chennai",
    description: "GST on fresh produce, e-way bills, cash limits and income tax for Koyambedu wholesale traders and bus operators, from our only office in Anna Nagar.",
    url: "/chartered-accountant-koyambedu-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Koyambedu"
      crumbHref="/chartered-accountant-koyambedu-chennai"
      h1="Chartered Accountant in Koyambedu, Chennai"
      subhead="GST on fresh and packaged produce, e-way bills, cash limits and income tax for Koyambedu's wholesale traders, commission agents, transporters and bus operators, handled from our only office in J-Block, Anna Nagar, one Metro stop away."
      distanceNote="Koyambedu is about 3 minutes by road off-peak (route estimate) from our office, a drive of about 2.1 km along 100 Feet Road and 4th Avenue (Santhi Colony Road). That is a clear-road estimate; market and bus terminus traffic at peak hours makes it longer. We have no branch in Koyambedu: our only office is in Anna Nagar, and Koyambedu clients visit us there, Monday to Saturday from 9:30 AM to 6:30 PM, or work with us online."
      directAnswer="C S Rushil & Co. serves Koyambedu from its only office at J-Block, 13th Main Road, Anna Nagar, about 2.1 km by road or one stop on the Metro Green Line. There is no Koyambedu branch. Market traders, commission agents, transporters, bus and travel operators and residents there can visit that office or work with us online."
      localContext={[
        "We serve Koyambedu from Anna Nagar, just north of it up 100 Feet Road. Traders at the market start work long before office hours, so Koyambedu clients usually send purchase bills, sales books and bank statements by WhatsApp at the end of the day, and come to our J-Block office for registrations, notices or a year-end review.",
        "Koyambedu is home to Koyambedu Market, which OpenStreetMap maps as a fruit and vegetable market with a separate flower market, and to the Puratchi Thalaivar Dr. M.G.R. Bus Terminus, also known as the Chennai Mofussil Bus Terminus or CMBT. The Koyambedu Omni Bus Station stands on Thiruvallur Road, and the Kurungaleswarar temple is beside the EVR Periyar Salai flyover.",
        "OpenStreetMap places Koyambedu in the Greater Chennai Corporation's Kodambakkam zone (Zone 10), unlike our office, which falls in the Anna Nagar zone (Zone 8). Koyambedu and CMBT Metro stations on the Green Line connect the area to the rest of the city, and the Metro's Koyambedu depot sits nearby.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Koyambedu?",
          body: (
            <>
              <p>
                Koyambedu is a wholesale and transport hub. At Koyambedu Market, wholesale traders and commission agents
                handle fruit, vegetables and flowers that arrive by lorry and leave with retailers, hotels and smaller
                markets. Around the CMBT and the Omni Bus Station work bus operators, travel agents and the eateries and
                shops that serve passengers.
              </p>
              <p className="mt-4">
                These businesses share three features that shape their accounts: very high volumes of small transactions,
                a large share of cash, and goods that move by lorry between districts and states. That puts GST
                registration, cash limits under income tax, e-way bills and bank deposit reporting at the centre of their
                compliance, rather than the corporate filings that dominate an office business.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Koyambedu?",
          body: (
            <>
              <p>
                From the centre of Koyambedu, our office is about 3 minutes by road off-peak (route estimate), a drive of
                about 2.1 km. The route goes north on Jawaharlal Nehru Road (100 Feet Road), turns onto 4th Avenue (Santhi
                Colony Road) in Anna Nagar, and reaches 13th Main Road. In a straight line, the office is about 1.6 km away.
              </p>
              <p className="mt-4">
                The estimate comes from the public OSRM routing service on OpenStreetMap road data, measured from
                OpenStreetMap&apos;s centre point for Koyambedu to our office pin, on a clear road. Lorries entering the
                market and buses at the CMBT can slow 100 Feet Road considerably at peak times. The Metro is the simplest
                alternative: from Koyambedu station, Thirumangalam is the next stop on the Green Line, and its 2nd Avenue
                entrance is about 300 metres from our office.
              </p>
            </>
          ),
        },
        {
          heading: "Do Koyambedu fruit, vegetable and flower traders need GST registration?",
          body: (
            <>
              <p>
                Fresh, unprocessed fruit, vegetables and flowers are generally exempt from GST, and a trader who deals only
                in exempt goods is not required to register. Once a Koyambedu trader also sells taxable goods, such as
                dried, processed or pre-packaged and labelled items, the position changes and registration needs a fresh
                look.
              </p>
              <p className="mt-4">
                The reason is that aggregate turnover, which decides whether you cross the registration threshold, counts
                exempt sales as well as taxable ones. A trader with large exempt sales and a small taxable line can
                therefore be required to register sooner than expected. Exempt traders also cannot claim input tax credit on
                the GST they pay for rent, transport or packing material, so those costs stay in the price. We review the
                product mix before advising. Read{" "}
                <Link href="/blog/gst-threshold-is-a-trigger" className={L}>
                  why the GST threshold works as a trigger
                </Link>{" "}
                and see{" "}
                <Link href="/gst-registration-chennai" className={L}>
                  GST registration in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How do cash limits affect Koyambedu wholesale traders?",
          body: (
            <>
              <p>
                Income tax law prohibits receiving ₹2 lakh or more in cash from one person in a day, for one transaction or
                for one occasion, with a penalty equal to the amount received. For a Koyambedu wholesaler, that means a
                retailer&apos;s large daily purchases must be paid through banking channels, even if split into several bills.
              </p>
              <p className="mt-4">
                On the spending side, a business expense paid in cash above ₹10,000 to one person in a day is generally
                disallowed, though the rules carve out some payments made to cultivators and growers for their own produce,
                provided the trader keeps proof. Banks report large cash deposits, so every deposit should trace back to
                recorded sales. Keeping cash receipts and payments low also matters for the tax audit limit, which is higher
                only when each stays within 5% of the total. Read{" "}
                <Link href="/blog/safe-cash-deposit-limit" className={L}>
                  how much cash you can deposit in your bank account
                </Link>{" "}
                and see{" "}
                <Link href="/tax-audit-chennai" className={L}>
                  tax audit in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "When do goods leaving Koyambedu need an e-way bill?",
          body: (
            <>
              <p>
                An e-way bill is needed when taxable goods above the prescribed value move by road, whether within Tamil
                Nadu or to another state. Fresh fruit, vegetables and flowers that are exempt from GST are generally outside
                the e-way bill requirement, but packaged or processed taxable items in a mixed load usually still need
                one.
              </p>
              <p className="mt-4">
                The supplier, the buyer or the transporter can generate the e-way bill, and the vehicle number must be updated
                if goods are shifted to another lorry on the way. A missing or wrong e-way bill can lead to the goods and
                vehicle being detained under GST until tax and penalty are settled or the order is challenged, which for
                perishable stock can mean produce spoiling at the roadside. We help traders and transporters set up a simple check before each
                dispatch. Read{" "}
                <Link href="/blog/eway-bill-detention-section-129-appeal" className={L}>
                  e-way bill detention: release and appeal
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Koyambedu?",
          body: (
            <p>
              No. We have no branch in Koyambedu. Our only office is at Old Door No. AP-890, New No. 18, J-Block, 1st Street,
              13th Main Rd, Anna Nagar, Chennai 600040. Koyambedu clients visit that office, open Monday to Saturday from
              9:30 AM to 6:30 PM, or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Koyambedu clients?",
          body: (
            <p>
              Koyambedu clients begin with a free 15-minute consultation, at our Anna Nagar office or by video. We then
              prepare an itemised quote in which government fees are shown apart from our professional fees, so you can see
              each one. We do not start work until you approve the quote. Call +91 72001 49711 to book your slot.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "gst-registration-chennai", why: "Checking whether a Koyambedu trader's mix of exempt and taxable goods requires GST registration." },
        { slug: "gst-return-filing-chennai", why: "GST returns for Koyambedu traders who sell packaged or processed items alongside exempt fresh produce." },
        { slug: "bookkeeping-services-chennai", why: "Daily cash and bank records for Koyambedu Market traders, so deposits trace back to recorded sales." },
        { slug: "tax-audit-chennai", why: "Tax audits for Koyambedu wholesalers whose turnover or cash share takes them past the audit limit." },
        { slug: "gst-notice-reply-chennai", why: "Replies to GST notices and e-way bill detention orders affecting Koyambedu traders and transporters." },
        { slug: "income-tax-notice-reply-chennai", why: "Answering income tax notices triggered by large cash deposits or cash receipts in a Koyambedu business." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for Koyambedu traders, commission agents and bus operators, matched with bank and GST data." },
        { slug: "payroll-services-chennai", why: "Payroll, PF and ESI for Koyambedu businesses employing loaders, drivers and counter staff." },
      ]}
      faqs={[
        { question: "I sell only fresh vegetables wholesale at Koyambedu Market. Do I need GST registration?", answer: "Usually not. Fresh, unprocessed vegetables are generally exempt from GST, and a person supplying only exempt goods is not required to register. If you start selling packaged, labelled or processed items as well, your exempt sales count towards aggregate turnover, so registration may become compulsory. We review your product list before you add new lines." },
        { question: "A retailer wants to pay me ₹2.5 lakh in cash for one day's purchases. Is that allowed?", answer: "No. Accepting ₹2 lakh or more in cash from one person in a day, or for one transaction, is prohibited, and the penalty equals the amount received. Splitting the purchase into several bills on the same day does not help. Ask the retailer to pay the amount by bank transfer, UPI or cheque instead." },
        { question: "I pay farmers in cash for their produce. Will that expense be disallowed?", answer: "Cash payments for a business expense above ₹10,000 to one person in a day are generally disallowed, but the rules exempt certain payments made directly to the cultivator or grower for their own produce. The exemption depends on records showing who was paid and for what, so keep purchase slips, names and village details." },
        { question: "Do I need an e-way bill to send fruit from Koyambedu to another district?", answer: "Not for fresh fruit that is exempt from GST; such goods are generally outside the e-way bill rules. If the same lorry carries taxable goods above the prescribed value, such as packaged or processed items, an e-way bill is needed for those. Update the vehicle number whenever the goods are moved to another lorry." },
        { question: "How do I reach your office from Koyambedu?", answer: "By Metro, take the Green Line from Koyambedu station one stop to Thirumangalam; the 2nd Avenue entrance there is about 300 metres from our office. By road, the trip is about 2.1 km along 100 Feet Road and Santhi Colony Road, around 3 minutes off-peak, though market traffic often makes it longer." },
      ]}
      furtherReading={[
        { slug: "safe-cash-deposit-limit", title: "How Much Cash Can You Deposit in Your Bank Account?" },
        { slug: "eway-bill-detention-section-129-appeal", title: "E-Way Bill Detention Under Section 129: Release and Appeal" },
        { slug: "itc-mismatch-notices", title: "ITC Mismatch Notices: Why They Happen and How to Respond" },
        { slug: "why-income-tax-notices-issued", title: "Why Income Tax Notices Get Issued: The Actual Triggers" },
      ]}
    />
  );
}
