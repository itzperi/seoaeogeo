import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-shenoy-nagar-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Shenoy Nagar | C S Rushil & Co." },
  description:
    "Chartered accountant for Shenoy Nagar clinics, landlords and families: GST, income tax, property gains and licences from our Anna Nagar office, 3.7 km away.",
  alternates: { canonical: "/chartered-accountant-shenoy-nagar-chennai", types: { "text/markdown": "/md/chartered-accountant-shenoy-nagar-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Shenoy Nagar, Chennai",
    description: "Income tax, GST, property gains and registrations for Shenoy Nagar doctors, landlords and households, from our only office in Anna Nagar.",
    url: "/chartered-accountant-shenoy-nagar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Shenoy Nagar"
      crumbHref="/chartered-accountant-shenoy-nagar-chennai"
      h1="Chartered Accountant in Shenoy Nagar, Chennai"
      subhead="Income tax, GST, capital gains on property and business registrations for Shenoy Nagar's doctors, clinic owners, landlords and households, handled from our only office in J-Block, Anna Nagar, three Metro stops up the Green Line."
      distanceNote="Shenoy Nagar is about 5 minutes by road off-peak (route estimate) from our office, a drive of about 3.7 km by way of Pulla Avenue, 1st Avenue and 2nd Avenue. These are clear-road figures; peak traffic takes longer. We have no branch in Shenoy Nagar: our only office is in Anna Nagar, and Shenoy Nagar clients visit us there, Monday to Saturday from 9:30 AM to 6:30 PM, or work with us online."
      directAnswer="C S Rushil & Co. serves Shenoy Nagar from its only office at J-Block, 13th Main Road, Anna Nagar, about 3.7 km by road or three stops on the Metro Green Line. There is no Shenoy Nagar branch. Doctors, clinic owners, landlords, retired residents and small traders there can visit that office or work with us online."
      localContext={[
        "We serve Shenoy Nagar from Anna Nagar, a short ride north-west along Pulla Avenue. A Shenoy Nagar household typically needs us around a few moments: filing returns each July, answering an income tax notice, or working out the tax on a house that is being sold or rebuilt. Those meetings can happen at our J-Block office, and the paperwork in between moves over WhatsApp and email.",
        "Shenoy Nagar lies east of Anna Nagar and north of EVR Periyar Salai, which OpenStreetMap also records as Poonamallee High Road. OpenStreetMap places it in the Greater Chennai Corporation's Anna Nagar zone (Zone 8), the same zone as our office, and shows the Corporation's Zone 8 office on Pulla Avenue, a short walk from Shenoy Nagar Metro station.",
        "The neighbourhood is mainly residential, built around Thiru Vi Ka Park and a grid of quiet streets. OpenStreetMap marks a long list of hospitals, nursing homes and specialist clinics within a kilometre of its centre, and Pachaiyappa's College sits just to the south-east. Doctors, diagnostic centres and the landlords who rent premises to them are therefore a visible part of local business.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Shenoy Nagar?",
          body: (
            <>
              <p>
                Healthcare is the trade you notice first in Shenoy Nagar. OpenStreetMap lists many hospitals, nursing
                homes, eye and diabetes centres and smaller clinics within walking distance of Pulla Avenue. Around them
                sit pharmacies, labs, provision stores, eateries and small offices, while the interior streets remain
                largely independent houses and apartment blocks.
              </p>
              <p className="mt-4">
                That mix produces three kinds of accounting work. Practitioners and nursing homes need income tax planning
                and a clear view of which receipts fall outside GST. Owners of houses and commercial floors let to clinics
                need rental income and TDS to agree. Families sitting on older property need capital gains worked out
                when they sell, gift or hand a plot to a builder for redevelopment.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Shenoy Nagar?",
          body: (
            <>
              <p>
                From the centre of Shenoy Nagar, our office is about 5 minutes by road off-peak (route estimate), a drive of
                about 3.7 km. The route runs up Pulla Avenue past the Metro station, turns onto 1st Avenue and then 2nd
                Avenue through Anna Nagar, and reaches 13th Main Road. In a straight line the distance is about 3.1 km.
              </p>
              <p className="mt-4">
                The figure comes from the public OSRM routing service on OpenStreetMap road data, measured from
                OpenStreetMap&apos;s centre point for Shenoy Nagar to our office pin, and it assumes a clear road. The
                Anna Nagar roundabout and 2nd Avenue slow down sharply at school and office hours. The Metro is often easier:
                from Shenoy Nagar station, the Green Line passes Anna Nagar East and Anna Nagar Tower before Thirumangalam,
                whose 2nd Avenue entrance is about 300 metres from our door.
              </p>
            </>
          ),
        },
        {
          heading: "How should Shenoy Nagar doctors and clinic owners handle GST and income tax?",
          body: (
            <>
              <p>
                Many healthcare services provided by a clinic, nursing home or qualified practitioner are exempt from GST,
                but not every receipt is. Medicines sold over the counter, some cosmetic procedures and rent earned from
                letting part of a building can be taxable. A Shenoy Nagar clinic should map each income stream before
                deciding whether it needs GST registration.
              </p>
              <p className="mt-4">
                On the income tax side, a doctor in private practice reports fees as professional income, and a tax audit
                becomes compulsory once gross receipts cross the limit for professionals. Doctors who consult at a hospital
                on a fee basis usually see TDS on those fees, which must match the return. Where two or more doctors share
                premises, a written partnership or LLP agreement keeps the split of income and expenses clean. See{" "}
                <Link href="/gst-return-filing-for-clinics" className={L}>
                  GST return filing for clinics
                </Link>{" "}
                and{" "}
                <Link href="/tax-audit-chennai" className={L}>
                  tax audit in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What should Shenoy Nagar owners know before handing a house to a builder?",
          body: (
            <>
              <p>
                When a Shenoy Nagar owner gives an older house to a developer in exchange for new flats, the
                deal is usually a joint development agreement. Tax does not wait until the owner sells those flats: capital
                gains can arise when the completion certificate is issued, so the agreement, the valuation and the timing
                need planning before anything is signed.
              </p>
              <p className="mt-4">
                Families who simply sell the house face a different calculation, with the purchase cost, improvement costs
                and the holding period deciding how much of the sale price is taxed. Where the house was inherited, the
                earlier owner&apos;s cost and date often count. Reinvestment in another residential house can reduce the tax
                if the conditions are met. Read our guides on{" "}
                <Link href="/blog/joint-development-agreement-tax-chennai" className={L}>
                  joint development agreement tax for Chennai landowners
                </Link>{" "}
                and{" "}
                <Link href="/blog/capital-gains-tax-property-sale" className={L}>
                  capital gains tax on selling property in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does being in Zone 8 change anything for a Shenoy Nagar business?",
          body: (
            <>
              <p>
                Shenoy Nagar and our office share the Greater Chennai Corporation&apos;s Anna Nagar zone (Zone 8), according to
                OpenStreetMap. For a clinic, pharmacy or shop in Shenoy Nagar, the trade licence, property tax and
                professional tax enrolment all go through the Corporation, and the zone printed on the property tax receipt
                is the one that matters.
              </p>
              <p className="mt-4">
                A new practice or shop here usually lines up its registrations in this order: PAN and bank account in the
                right name, GST registration if the supplies and turnover require it, Tamil Nadu Shops and Establishments
                registration, the Corporation trade licence and, once staff are on the payroll, professional tax. A
                pharmacy also needs its drug licence before it sells. We prepare the list and the documents for each step.
                See{" "}
                <Link href="/proprietorship-registration-chennai" className={L}>
                  proprietorship registration in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Shenoy Nagar?",
          body: (
            <p>
              No. We have no branch in Shenoy Nagar. Our only office is at Old Door No. AP-890, New No. 18, J-Block, 1st
              Street, 13th Main Rd, Anna Nagar, Chennai 600040. Shenoy Nagar clients visit that office, open Monday to
              Saturday from 9:30 AM to 6:30 PM, or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Shenoy Nagar clients?",
          body: (
            <p>
              Every engagement starts with a free 15-minute consultation, either at our Anna Nagar office or on a video call.
              You then get an itemised quote that shows government fees on separate lines from our professional fees. We do
              not begin any work until you approve that quote. Call +91 72001 49711 or send a WhatsApp message to book.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "gst-return-filing-for-clinics", why: "GST returns for Shenoy Nagar clinics and nursing homes that mix exempt healthcare with taxable pharmacy sales." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for Shenoy Nagar doctors, landlords and retired residents with fees, rent, interest and capital gains." },
        { slug: "tax-audit-chennai", why: "Tax audits for Shenoy Nagar practitioners and nursing homes once receipts cross the audit limit." },
        { slug: "tds-return-filing-chennai", why: "Quarterly TDS returns for clinics paying rent and visiting consultants, matched with landlords' records." },
        { slug: "llp-registration-chennai", why: "An LLP for two or more Shenoy Nagar doctors sharing premises, staff and equipment." },
        { slug: "proprietorship-registration-chennai", why: "Setting up a Shenoy Nagar pharmacy, lab or shop with GST, Shops and Establishments and trade licence." },
        { slug: "income-tax-notice-reply-chennai", why: "Replies to notices about property sales, rent or high-value transactions reported against Shenoy Nagar taxpayers." },
        { slug: "bookkeeping-services-chennai", why: "Monthly books for Shenoy Nagar clinics and shops, so GST, TDS and income tax figures agree." },
      ]}
      faqs={[
        { question: "My Shenoy Nagar clinic also sells medicines. Do I need GST registration?", answer: "Possibly. Many healthcare services by a clinic or qualified practitioner are exempt, but medicines sold over the counter are taxable goods. Registration depends on how large the taxable sales are and how the pharmacy is run, separately or within the clinic. We review your receipts first, then tell you whether and when to register." },
        { question: "I am giving my old Shenoy Nagar house to a builder for flats. When is it taxed?", answer: "Under a registered joint development agreement, capital gains on your share usually arise in the year the completion certificate is issued, not when you sign. The value of the flats you receive drives the calculation. Rent paid to you during construction is a separate question, so we review the agreement before you sign." },
        { question: "How do I reach your office from Shenoy Nagar by Metro?", answer: "Board the Green Line at Shenoy Nagar station on Pulla Avenue and ride towards Thirumangalam, three stops away after Anna Nagar East and Anna Nagar Tower. The Thirumangalam entrance on 2nd Avenue is about 300 metres from our office. By road the trip is about 3.7 km, roughly 5 minutes on a clear road." },
        { question: "Is Shenoy Nagar in the same Corporation zone as your office?", answer: "Yes. OpenStreetMap places both Shenoy Nagar and our J-Block office in the Greater Chennai Corporation's Anna Nagar zone (Zone 8), and shows the Zone 8 office on Pulla Avenue near Shenoy Nagar Metro. Trade licences, property tax and professional tax for Shenoy Nagar premises are therefore all handled through the Corporation." },
        { question: "I let my Shenoy Nagar building to a nursing home. What should I check?", answer: "Check that the tenant deducts TDS on rent and files its returns on time, so the credit shows against your PAN. Commercial rent can also attract GST once your taxable turnover requires registration. Report the rent under house property, claim the standard deduction and municipal taxes paid, and keep the lease agreement ready." },
      ]}
      furtherReading={[
        { slug: "joint-development-agreement-tax-chennai", title: "Joint Development Agreement Tax for Chennai Landowners" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "tds-on-rent", title: "TDS on Rent: What Chennai Landlords and Tenants Should Know" },
        { slug: "why-income-tax-notices-issued", title: "Why Income Tax Notices Get Issued: The Actual Triggers" },
      ]}
    />
  );
}
