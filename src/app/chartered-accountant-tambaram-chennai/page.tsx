import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-tambaram-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Tambaram, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Tambaram: income tax, GST, MEPZ supplier compliance and company work, handled online from our Anna Nagar office, about 28 km away.",
  alternates: { canonical: "/chartered-accountant-tambaram-chennai", types: { "text/markdown": "/md/chartered-accountant-tambaram-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Tambaram, Chennai",
    description: "Income tax, GST and company work for Tambaram households, shops and MEPZ suppliers, handled online from our only office in Anna Nagar.",
    url: "/chartered-accountant-tambaram-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Tambaram"
      crumbHref="/chartered-accountant-tambaram-chennai"
      h1="Chartered Accountant in Tambaram, Chennai"
      subhead="Income tax returns for salaried Tambaram households, GST for shops along GST Road, and zero-rated supply paperwork for businesses selling to units in MEPZ, handled mostly online from our only office in J-Block, Anna Nagar."
      distanceNote="Tambaram is a long way from us: about 28.4 km by road, roughly 23 minutes on a completely clear road (route estimate), and much longer once peak traffic builds on GST Road and the bypass. We have no Tambaram branch. Tambaram clients usually work with us online, and visit our Anna Nagar office by appointment or walk in, Monday to Saturday, 9:30 AM to 6:30 PM."
      directAnswer="C S Rushil & Co. has one office, at J-Block, 13th Main Road, Anna Nagar, about 28.4 km from Tambaram by road, and no branch in Tambaram. Because of that distance, most Tambaram clients work with us online for income tax, GST and company filings, and come to Anna Nagar only when a meeting in person really helps."
      localContext={[
        "We will be straightforward about distance: Tambaram is at the far southern end of the area we serve, and nobody should cross the city for a routine return. Tambaram households and businesses share documents with us by email or WhatsApp, talk to the chartered accountant on a video call, and sign or e-verify online. An office visit is arranged only when it genuinely saves time.",
        "Tambaram is outside the Greater Chennai Corporation. OpenStreetMap places it in Chengalpattu district, in Tambaram taluk, split into East Tambaram and West Tambaram by the railway line. Tambaram railway station and Tambaram Sanatorium station sit on the suburban line, and Grand Southern Trunk Road (GST Road) runs through the town.",
        "The map also shows what Tambaram works around: the Madras Export Processing Zone (MEPZ), Madras Christian College in East Tambaram, the Tambaram Air Force Station near Selaiyur, and Chromepet just to the north in Pallavaram. That gives us a mix of salaried and institutional households, shops on the main roads, and small firms that supply units inside the export zone.",
      ]}
      sections={[
        {
          heading: "What kinds of households and businesses are in Tambaram?",
          body: (
            <>
              <p>
                Tambaram is largely residential, with independent houses and apartment blocks on both sides of the
                railway line. Residents include salaried staff of colleges, the Air Force station, export units and
                offices further into the city. Retail, restaurants, clinics and service shops line GST Road and the roads
                around the station.
              </p>
              <p className="mt-4">
                Their accounting needs follow from that. A salaried family wants a correct return that matches Form 16
                and the Annual Information Statement, plus help when a second house is rented out or a plot is sold.
                Shopkeepers need GST registration and returns, and professional tax once they employ staff. Smaller
                manufacturers, traders and service firms that sell to units inside MEPZ need to understand how GST treats
                a supply to a Special Economic Zone, which differs from an ordinary local sale.
              </p>
            </>
          ),
        },
        {
          heading: "How long is the drive from Tambaram to our Anna Nagar office?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s centre point for Tambaram, our office is about 28.4 km by road, roughly 23
                minutes on a fully clear road (route estimate). From Tambaram railway station the estimate is about 29.9
                km, roughly 26 minutes. The suggested route uses GST Road, the Chennai Bypass through the Maduravoyal
                interchange, and Ambattur Estate Road.
              </p>
              <p className="mt-4">
                These figures come from the public OSRM router on OpenStreetMap road data and assume no traffic at all,
                which almost never happens on GST Road or the bypass during working hours. Plan for a much longer journey
                if you drive in. By suburban train and Metro the trip needs at least one change. That is why we suggest a
                video call first, and a visit only for something like signing incorporation papers.
              </p>
            </>
          ),
        },
        {
          heading: "Is Tambaram treated as Chennai for registrations and local licences?",
          body: (
            <>
              <p>
                For company registration, yes in practice: both Chennai and Chengalpattu districts come under the
                Registrar of Companies, Chennai, so a Tambaram company files with the same ROC. For local licences, no:
                Tambaram is outside the Greater Chennai Corporation, so trade licences and professional tax go to the local
                body covering your address.
              </p>
              <p className="mt-4">
                The district can also decide which GST office has jurisdiction over a Tambaram business, so the
                registration application should use the exact address on the rent agreement or property tax receipt. A
                home in Tambaram can serve as a company&apos;s registered office with a recent utility bill and, where the
                property belongs to someone else, a rent agreement and the owner&apos;s no-objection letter. Read{" "}
                <Link href="/company-registration-chengalpattu" className={L}>
                  company registration in Chengalpattu
                </Link>
                , which covers Tambaram, or{" "}
                <Link href="/blog/registered-office-at-home-company" className={L}>
                  whether your home can be a registered office
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How does GST work for Tambaram firms that supply units in MEPZ?",
          body: (
            <>
              <p>
                Section 16 of the IGST Act treats supplies to SEZ units and developers as zero-rated. A Tambaram supplier
                selling to a unit inside MEPZ can either supply under a Letter of Undertaking without paying IGST, or pay
                IGST and claim a refund. The LUT is filed in Form GST RFD-11 for each financial year.
              </p>
              <p className="mt-4">
                The zero-rating applies only to supplies for the unit&apos;s authorised operations, so keep the purchase
                order, the unit&apos;s details and proof of delivery with each invoice. Because a supply to an SEZ unit counts
                as inter-state, charging CGST and SGST as on a local sale is the wrong tax and has to be corrected. A
                supplier who pays IGST and claims a refund should file the claim within two years of the relevant date.
                See{" "}
                <Link href="/blog/lut-for-exporters" className={L}>
                  LUT for exporters under GST
                </Link>{" "}
                and{" "}
                <Link href="/gst-return-filing-for-import-export-businesses" className={L}>
                  GST return filing for import and export businesses
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How do salaried Tambaram residents file income tax with us online?",
          body: (
            <>
              <p>
                You send Form 16, your Annual Information Statement, bank interest certificates and any rent, loan or
                sale papers by email or WhatsApp. We prepare the return, explain it on a short video call and file it
                only after you approve. You then e-verify on the income tax portal, so no trip to Anna Nagar is needed.
              </p>
              <p className="mt-4">
                The common Tambaram complications are a second flat let out to tenants, a plot bought years ago and now
                sold, interest on a housing loan, or salary from two employers in one year. Each must match what the
                department already sees in the AIS, because mismatches are a frequent trigger for notices. If you have
                already received one, we draft the reply online as well. See{" "}
                <Link href="/income-tax-return-filing-chennai" className={L}>
                  income tax return filing in Chennai
                </Link>{" "}
                or{" "}
                <Link href="/blog/why-income-tax-notices-issued" className={L}>
                  why income tax notices are issued
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Tambaram?",
          body: (
            <p>
              No. There is no Tambaram branch or collection point. Our only office is at Old Door No. AP-890, New No. 18,
              J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, open Monday to Saturday from 9:30 AM to 6:30
              PM. Tambaram clients usually work with us online and can visit by appointment or simply walk in.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Tambaram clients?",
          body: (
            <p>
              For Tambaram clients the first step is a free 15-minute consultation by phone or video, so there is no
              need to travel. You then get an itemised quote that separates government fees from our professional fees
              line by line. We start work only after you approve it in writing, even by WhatsApp. Call +91 72001 49711 to
              fix a time.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "income-tax-return-filing-chennai", why: "Online returns for salaried Tambaram households with rent from a second flat, a plot sale or two employers in a year." },
        { slug: "gst-return-filing-for-import-export-businesses", why: "Zero-rated supplies, LUT and refund claims for Tambaram firms selling to units inside MEPZ." },
        { slug: "gst-registration-chennai", why: "GST registration for shops and service businesses along GST Road, using the exact Chengalpattu district address." },
        { slug: "private-limited-company-incorporation-chennai", why: "Incorporating a company with a Tambaram registered office, filed with the Registrar of Companies, Chennai." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for small Tambaram manufacturers and traders supplying larger buyers on credit." },
        { slug: "income-tax-notice-reply-chennai", why: "Drafting replies online when a Tambaram resident's return does not match the AIS." },
        { slug: "bookkeeping-services-chennai", why: "Monthly books kept remotely for Tambaram shops and small firms, so GST and income tax figures agree." },
      ]}
      faqs={[
        { question: "Do I have to travel from Tambaram to Anna Nagar to work with you?", answer: "Usually not. Most Tambaram clients never need to visit: documents come by email or WhatsApp, reviews happen on video calls, and returns are e-verified online. If you prefer to meet, our Anna Nagar office takes appointments and walk-ins from Monday to Saturday, 9:30 AM to 6:30 PM, but please allow for heavy traffic." },
        { question: "My company's registered office will be in Tambaram. Which ROC handles it?", answer: "The Registrar of Companies, Chennai. Tambaram falls in Chengalpattu district, and both Chennai and Chengalpattu districts come under ROC Chennai, so incorporation and annual filings go there. The district matters more for GST jurisdiction and for professional tax, which a Tambaram company pays to its own local body, not the Greater Chennai Corporation." },
        { question: "We supply goods to a unit in MEPZ. Do we charge GST?", answer: "Supplies to an SEZ unit for its authorised operations are zero-rated. You can supply under a Letter of Undertaking without charging IGST, or charge IGST and claim a refund later. Charging CGST and SGST as on a local sale is a common mistake. File the LUT for the financial year before the first such invoice." },
        { question: "Where does a Tambaram shop get its trade licence and professional tax registration?", answer: "From the local body that covers the shop's address. Tambaram is outside the Greater Chennai Corporation, so the zone offices that serve Anna Nagar or Mylapore do not handle Tambaram licences. We prepare the application papers and the GST registration together, so the address and business details match across all three registrations." },
        { question: "How long is the drive from Tambaram to your office?", answer: "About 28.4 km by road, roughly 23 minutes only if the roads are completely clear, based on a route estimate along GST Road and the Chennai Bypass. In normal traffic it takes much longer, and peak hours on GST Road can stretch it considerably. That is why we offer a video call as the first meeting for Tambaram clients." },
      ]}
      furtherReading={[
        { slug: "lut-for-exporters", title: "LUT for Exporters Under GST: How to File and Why It Matters" },
        { slug: "registered-office-at-home-company", title: "Can Your Home Be a Company's Registered Office in India?" },
        { slug: "why-income-tax-notices-issued", title: "Why Income Tax Notices Get Issued: The Actual Triggers" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "gst-threshold-is-a-trigger", title: "The GST Threshold Isn't a Safe Zone, It's a Trigger" },
      ]}
    />
  );
}
