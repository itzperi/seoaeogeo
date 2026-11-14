import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-adyar-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Adyar, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Adyar: trust and NGO compliance, 12A and 80G, tax for doctors and consultants, and capital gains, from Anna Nagar, 15.4 km by road.",
  alternates: { canonical: "/chartered-accountant-adyar-chennai", types: { "text/markdown": "/md/chartered-accountant-adyar-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Adyar, Chennai",
    description: "Trust and NGO compliance, tax for professionals and capital gains planning for Adyar families, from our only office in Anna Nagar.",
    url: "/chartered-accountant-adyar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Adyar"
      crumbHref="/chartered-accountant-adyar-chennai"
      h1="Chartered Accountant in Adyar, Chennai"
      subhead="Trust and NGO compliance, tax for doctors, architects and consultants, and capital gains planning for long-settled families in Adyar, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Adyar is about 18 minutes by road on a clear run (OSRM route estimate) from our office, a drive of about 15.4 km through Nungambakkam, Alwarpet and the Thiru Vi Ka Bridge; peak traffic takes considerably longer. We have no branch in Adyar: our only office is in Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM, and Adyar clients visit us there or work with us online."
      directAnswer="C S Rushil & Co. serves Adyar from its only office at J-Block, 13th Main Road, Anna Nagar, about 15.4 km away by road. There is no Adyar branch. Trusts, NGOs, doctors, architects, consultants and families in Adyar can visit that office or handle 12A and 80G, income tax and capital gains work with us online."
      localContext={[
        "Adyar sits across the city from Anna Nagar, so Adyar engagements are designed to run largely online. Trust deeds, donation registers, bank statements and property papers are scanned and shared, trustees and families go through drafts with us by video, and a trip to our J-Block office is kept for originals and signatures that cannot wait.",
        "On OpenStreetMap, Adyar gives its name to the Greater Chennai Corporation's Adyar zone (Zone 13); our office is in the Anna Nagar zone (Zone 8). The neighbourhood lies on the southern bank of the Adyar River, reached from the north by the Thiru Vi Ka Bridge, with Gandhi Nagar near its centre, Besant Nagar and the Theosophical Society towards the coast, and Indira Nagar MRTS station to the south.",
        "Adyar is largely residential and institutional. Long-settled families live in independent houses and in apartments built where older homes once stood, and the area is home to educational, cultural and charitable institutions, with the IIT Madras campus to the south-west. That mix points to three kinds of work: trust and society compliance, practice-level tax for professionals, and capital gains advice when family property changes hands.",
      ]}
      sections={[
        {
          heading: "Which Adyar organisations and households typically need a chartered accountant?",
          body: (
            <>
              <p>
                Three groups in Adyar tend to need a chartered accountant. Educational, cultural and charitable bodies
                need trust or society accounts, audit and 12A and 80G compliance. Doctors, architects and consultants with
                private practices need return filing, advance tax and checks on tax audit. Long-settled families need
                capital gains and inheritance planning.
              </p>
              <p className="mt-4">
                Smaller businesses, from boutiques and cafés to clinics and music or dance schools, need what businesses
                anywhere in Chennai need: GST where turnover or the type of supply requires it, payroll and professional
                tax once they employ staff, and Shops and Establishments registration. Some of these schools are run as
                trusts or Section 8 companies, which brings them into the non-profit rules as well.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Adyar?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s centre point for Adyar, near Gandhi Nagar, our office is about 18 minutes by road
                on a clear run (OSRM route estimate), a distance of about 15.4 km. The route crosses the Adyar River on the
                Thiru Vi Ka Bridge, passes Alwarpet, follows TTK Road, Cathedral Road and Nungambakkam High Road, then Anna
                Arch into Anna Nagar.
              </p>
              <p className="mt-4">
                The figure comes from the public OSRM router on OpenStreetMap data and assumes an empty road. In practice
                the bridge, Alwarpet and the Anna Arch junction all slow down at office hours, so an Adyar trustee or
                doctor coming in person should allow well over the estimate. For most discussions, a video call saves the
                journey altogether.
              </p>
            </>
          ),
        },
        {
          heading: "What do Adyar trusts, societies and NGOs need each year?",
          body: (
            <>
              <p>
                A registered trust or society needs four things each year: accounts and, where required, an audit report,
                an income tax return in the correct form, a valid 12A or 12AB registration so that its income stays
                exempt, and, if it holds 80G approval, a statement of donations filed so donors&apos; deductions appear in
                their records.
              </p>
              <p className="mt-4">
                Registrations granted under the current rules are time-bound, so renewals must be applied for before they
                lapse, and a provisional registration must be converted within its deadline. An Adyar trust receiving
                foreign contributions also needs FCRA registration or prior permission and a designated bank account. We
                keep the trust&apos;s calendar in step with its trustee meetings. Read{" "}
                <Link href="/blog/12a-80g-registration-guide-chennai-ngos" className={L}>
                  12A and 80G registration for Chennai NGOs
                </Link>
                ,{" "}
                <Link href="/blog/fcra-registration" className={L}>
                  FCRA registration
                </Link>{" "}
                and{" "}
                <Link href="/trust" className={L}>
                  trust, society and Section 8 company services
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How are Adyar doctors, architects and consultants taxed?",
          body: (
            <>
              <p>
                Professionals with a private practice can either keep full books and pay tax on actual profit, or, within
                the gross receipts limit, opt for presumptive taxation and declare a set share of receipts as income. A
                tax audit becomes compulsory once receipts cross the audit limit, or, in some cases, when presumptive
                income is declared below the prescribed rate.
              </p>
              <p className="mt-4">
                Architects and consultants also need to watch GST, since professional services become taxable once
                turnover crosses the Tamil Nadu services threshold, and the client&apos;s location decides whether IGST or
                CGST and SGST applies. Doctors&apos; clinical services are largely exempt, but cosmetic procedures and
                pharmacy sales can be taxable. Advance tax applies to practice income, with instalments due in June,
                September, December and March. See{" "}
                <Link href="/tax-audit-chennai" className={L}>
                  tax audit in Chennai
                </Link>{" "}
                and{" "}
                <Link href="/blog/advance-tax-deadlines" className={L}>
                  advance tax due dates
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What should Adyar families know before selling or redeveloping an older house?",
          body: (
            <>
              <p>
                A house owned for over 24 months is a long-term capital asset, and an inherited house includes the time the
                earlier owner held it. The gain can be reduced by reinvesting in another house or in specified bonds in
                time. Where co-owners include a family member living abroad, the buyer must deduct TDS on that
                share at non-resident rates.
              </p>
              <p className="mt-4">
                When a builder offers to redevelop an older Adyar house under a joint development agreement, the timing of
                the gain and the GST position depend on the deal terms, so plan before signing. Returning NRIs who settle in
                Adyar should also check their residential status, since RNOR status can keep foreign income outside Indian
                tax for a period. Read{" "}
                <Link href="/blog/capital-gains-tax-property-sale" className={L}>
                  capital gains tax on selling property
                </Link>
                ,{" "}
                <Link href="/nri-property-sale-tds-chennai" className={L}>
                  TDS when an NRI sells property
                </Link>{" "}
                and{" "}
                <Link href="/blog/rnor-status-returning-nri" className={L}>
                  RNOR status for returning NRIs
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Adyar?",
          body: (
            <p>
              No. We have not opened a branch in Adyar. Our sole office is at Old Door No. AP-890, New No. 18, J-Block, 1st
              Street, 13th Main Rd, Anna Nagar, Chennai 600040, with hours of 9:30 AM to 6:30 PM from Monday to Saturday.
              Adyar clients either visit that office or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Adyar clients?",
          body: (
            <p>
              Trustees, professionals and families in Adyar begin with a free 15-minute consultation, usually by video or,
              if you prefer, at Anna Nagar. We then prepare an itemised quote showing government fees apart from our
              professional fees. No work is started until you approve the quote in writing or by message. Call +91 72001
              49711 to schedule.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "trust", why: "Trust, society and Section 8 company formation and compliance for Adyar's educational and cultural bodies." },
        { slug: "section-8-company-registration-chennai", why: "Section 8 company registration for Adyar music, dance and education ventures run on a non-profit basis." },
        { slug: "tax-audit-chennai", why: "Tax audit checks for Adyar doctors, architects and consultants whose receipts approach the audit limit." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for Adyar professionals and retired residents with practice income, pension, rent and interest." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Capital gains and reinvestment planning for Adyar families selling or redeveloping older houses." },
        { slug: "nri-property-sale-tds-chennai", why: "TDS and lower deduction certificates when a co-owner living abroad sells an Adyar property." },
        { slug: "nri-tax-services", why: "Residential status and RNOR planning for NRIs returning to settle in Adyar." },
        { slug: "gst-return-filing-for-freelancers", why: "GST returns for Adyar architects, designers and consultants once registration is required." },
      ]}
      faqs={[
        { question: "Our Adyar trust's 12A registration is due for renewal. When should we apply?", answer: "Apply well ahead of expiry, because the renewal must be filed within a window that closes some months before the registration ends. A lapsed registration can expose the trust's income to tax. We check the date on your certificate, update deed details if anything has changed and file the renewal on the income tax portal." },
        { question: "I am a doctor with a clinic in Adyar. Do I need a tax audit?", answer: "It depends on your gross receipts and how you declare income. If you opt for presumptive taxation within its limit, a tax audit is usually not needed. Once receipts cross the audit limit, or if you declare less than the presumptive rate while total income exceeds the exemption limit, an audit generally applies. We check your figures early." },
        { question: "How long does the drive from Adyar to your office take?", answer: "About 18 minutes for roughly 15.4 km on a clear road, according to an OSRM route estimate across the Thiru Vi Ka Bridge and through Alwarpet and Nungambakkam. Peak-hour traffic can make it far longer. Most trust, tax and property work for Adyar clients can be discussed by video, with visits kept for originals and signatures." },
        { question: "Can an Adyar music or dance school be run as a trust or Section 8 company?", answer: "Yes, if its objects are charitable, such as education or promotion of art and culture, and profits are not distributed to members. A trust is simpler to form, while a Section 8 company offers a corporate structure with ROC oversight. Either can then apply for 12A and 80G. We compare the two against your plans first." },
        { question: "My family is selling our old Adyar house and my brother lives in the US. What changes?", answer: "The buyer must deduct TDS on your brother's share at the rates for non-residents, which are usually much higher than for residents, unless he obtains a lower deduction certificate first. He may also need to file an Indian return to claim any excess. The resident co-owners' shares follow the normal rules for capital gains." },
      ]}
      furtherReading={[
        { slug: "12a-80g-registration-guide-chennai-ngos", title: "12A and 80G Registration: Step-by-Step for Chennai NGOs" },
        { slug: "fcra-registration", title: "FCRA Registration for Chennai NGOs Accepting Foreign Funds" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "rnor-status-returning-nri", title: "RNOR Status for NRIs Returning to Chennai: Tax Guide" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
      ]}
    />
  );
}
