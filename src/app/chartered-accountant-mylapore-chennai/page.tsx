import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-mylapore-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Mylapore, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Mylapore trusts, sabhas, clinics and families: 12A and 80G, income tax, GST and inherited property, from our Anna Nagar office.",
  alternates: { canonical: "/chartered-accountant-mylapore-chennai", types: { "text/markdown": "/md/chartered-accountant-mylapore-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Mylapore, Chennai",
    description: "12A and 80G for trusts and sabhas, income tax for families holding inherited homes, and GST for Mylapore shops and clinics, from our only office in Anna Nagar.",
    url: "/chartered-accountant-mylapore-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Mylapore"
      crumbHref="/chartered-accountant-mylapore-chennai"
      h1="Chartered Accountant in Mylapore, Chennai"
      subhead="12A and 80G registration for trusts and cultural societies, income tax for families holding inherited homes, and GST for the shops and clinics around the Kapaleeshwarar Temple tank, all handled from our only office in J-Block, Anna Nagar."
      distanceNote="By road, central Mylapore is roughly 12.8 km from our office, about 16 minutes on a clear road (route estimate); weekday traffic through Nungambakkam and Cathedral Road usually adds more. There is no Mylapore branch. Our single office is in Anna Nagar, open Monday to Saturday, 9:30 AM to 6:30 PM, and most Mylapore work runs online between visits."
      directAnswer="C S Rushil & Co. serves Mylapore from its single office at J-Block, 13th Main Road, Anna Nagar, roughly 12.8 km away by road. We have no Mylapore branch. Trustees, sabha committees, doctors, shopkeepers and families there meet us at Anna Nagar by appointment or work with us online for 12A and 80G, income tax and GST."
      localContext={[
        "Mylapore sits on the other side of the city from Anna Nagar, so we keep the trips few. A Mylapore trust secretary or family usually comes in once at the start, with deeds, registration papers or a notice, and the rest of the year's filings move over email, WhatsApp and short video calls, with digital signatures where a form allows them.",
        "OpenStreetMap places Mylapore in the Greater Chennai Corporation's Teynampet zone (Zone 9). The old core is built around the Kapaleeshwarar Temple and its tank, with North Mada Street and Luz Corner close by, the Santhome Cathedral towards the sea, and the Ramakrishna Math on Norton Road. Thirumayilai station on the MRTS line serves the area.",
        "That history shapes the accounting work. Map data for the streets around the temple shows dense clusters of hospitals, clinics, schools, colleges such as Vivekananda College and the Sanskrit College, places of worship and sabhas such as Mylapore Fine Arts and Rasika Ranjani Sabha. Charitable registration, professional fees and family property therefore come up far more often here than factory compliance.",
      ]}
      sections={[
        {
          heading: "What kinds of organisations and businesses are based in Mylapore?",
          body: (
            <>
              <p>
                Mylapore mixes institutions with neighbourhood trade. Temples, churches and the Ramakrishna Math draw
                visitors daily, sabhas host concerts and dance programmes, and schools, colleges and hospitals employ many
                residents. Around the tank and Luz Corner, shops sell clothing, jewellery, puja articles and sweets, while
                clinics, labs and small professional offices fill the side streets.
              </p>
              <p className="mt-4">
                Each of these brings a different set of filings. A cultural society or educational trust worries about its
                exemption, donor receipts and the annual audit report. A family-run shop near the temple needs GST returns
                that match its billing and a Corporation trade licence from the Teynampet zone office. A doctor with a
                consulting room on a Mylapore side street needs practice income, hospital salary and clinic payroll kept
                in step.
              </p>
            </>
          ),
        },
        {
          heading: "How long does the trip from Mylapore to our Anna Nagar office take?",
          body: (
            <>
              <p>
                From the centre of Mylapore, our office is about 12.8 km by road, roughly 16 minutes when the roads are
                clear (route estimate). The route runs past Anna Arch, along Nelson Manickam Road, Sterling Road and
                College Road, through Nungambakkam High Road and Cathedral Road, then over the Music Academy flyover
                towards Mylapore.
              </p>
              <p className="mt-4">
                We took this figure from the public OSRM router on OpenStreetMap road data, between OpenStreetMap&apos;s
                centre point for Mylapore and our office pin; the Kapaleeshwarar Temple gives almost the same result.
                Office-hour traffic can make the drive far longer. There is no direct train between Thirumayilai MRTS
                station and Anna Nagar, which is why many Mylapore clients prefer a video call for routine reviews.
              </p>
            </>
          ),
        },
        {
          heading: "How do Mylapore trusts, sabhas and Section 8 companies get 12A and 80G?",
          body: (
            <>
              <p>
                A trust, society or Section 8 company first applies for provisional registration in Form 10A on the
                income tax portal. It must then apply for regular registration in Form 10AB before the provisional period
                ends, and renew it when each validity period, typically five years, runs out. 12A exempts its income; 80G
                lets donors claim a deduction.
              </p>
              <p className="mt-4">
                Choosing the vehicle comes first. A sabha or cultural association often runs as a registered society
                with elected office-bearers, a family endowment usually suits a trust deed, and a larger educational or
                arts body that wants corporate governance may prefer a Section 8 company. After registration, the
                exemption depends on applying income to the objects, keeping proper books and filing the audit report in
                Form 10B or 10BB each year. Foreign donations need separate FCRA approval. See{" "}
                <Link href="/trust" className={L}>
                  trust and NGO registration
                </Link>{" "}
                and our step-by-step guide to{" "}
                <Link href="/blog/12a-80g-registration-guide-chennai-ngos" className={L}>
                  12A and 80G registration for Chennai NGOs
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Which tax questions come up for long-settled Mylapore families?",
          body: (
            <>
              <p>
                Older Mylapore households often own an ancestral house jointly among siblings or across generations, and
                sometimes hold assets through a Hindu Undivided Family. The usual questions are how shared rent is split
                between co-owners, how the gain is worked out when such a house is sold, and when gifts between relatives
                stay tax-free.
              </p>
              <p className="mt-4">
                Land or a building held for more than 24 months is a long-term capital asset, and for an inherited house
                the earlier owner&apos;s holding period generally counts. Reinvesting in another residential house under
                Section 54, or in Section 54EC bonds, can reduce the tax if the time limits are met. When an old bungalow
                goes to a builder under a joint development agreement, the timing of the tax deserves planning before
                anyone signs. Retired residents with pension and deposit interest also ask about TDS refunds and advance
                tax. Read{" "}
                <Link href="/blog/capital-gains-tax-property-sale" className={L}>
                  capital gains tax on selling property in Chennai
                </Link>{" "}
                or see{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={L}>
                  income tax planning for high-income families
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What do Mylapore shops, clinics and performing artists need for GST and income tax?",
          body: (
            <>
              <p>
                A Mylapore shop needs GST registration once its turnover or type of supply requires it, a Shops and
                Establishments registration, a Corporation trade licence and professional tax enrolment once it hires
                staff. Clinics check which services are exempt. Musicians, dancers and teachers earning fees from
                performances or classes report them as professional income.
              </p>
              <p className="mt-4">
                Tamil Nadu&apos;s GST threshold is lower for services than for goods, so a music teacher or event
                performer can reach it sooner than a shop with the same sales. A clinic that only provides exempt
                healthcare services may not need GST at all, while one that also sells medicines or cosmetic treatments
                may. Artists whose fees arrive irregularly usually owe advance tax, and eligible professionals can look at
                presumptive taxation. See{" "}
                <Link href="/gst-registration-chennai" className={L}>
                  GST registration in Chennai
                </Link>{" "}
                and{" "}
                <Link href="/gst-return-filing-for-clinics" className={L}>
                  GST return filing for clinics
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Mylapore?",
          body: (
            <p>
              No, there is no Mylapore branch, and no associate office there either. All work is done from our one
              office at Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040,
              open Monday to Saturday between 9:30 AM and 6:30 PM. Mylapore clients meet us there by appointment or work
              with us online.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Mylapore clients?",
          body: (
            <p>
              It starts with a free 15-minute consultation, on a video call or at our Anna Nagar office if you are
              visiting. We then email an itemised quote that lists government fees on separate lines from our
              professional fees, so a trust or family sees exactly what goes to the department. Nothing begins until you
              approve it. Call +91 72001 49711.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "trust", why: "Trust deeds, society registration and 12A and 80G applications for Mylapore cultural, educational and charitable bodies." },
        { slug: "section-8-company-registration-chennai", why: "Section 8 company formation for larger Mylapore arts or education bodies that want a board and corporate governance." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Planning for Mylapore families who own ancestral houses jointly, run an HUF or are weighing a sale or redevelopment." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for Mylapore doctors, performing artists, teachers and retired residents with pension and deposit interest." },
        { slug: "gst-registration-chennai", why: "GST registration for shops around the Kapaleeshwarar Temple tank and for performers whose service fees cross the limit." },
        { slug: "gst-return-filing-for-clinics", why: "Returns for Mylapore clinics and labs that bill exempt consultations alongside taxable medicine or cosmetic sales." },
        { slug: "nri-property-sale-tds-chennai", why: "TDS and capital gains when a Mylapore heir living abroad sells a share of the family house." },
      ]}
      faqs={[
        { question: "Can a Mylapore sabha or cultural society apply for 12A and 80G registration?", answer: "Yes, if it is registered as a trust, society or Section 8 company with charitable objects. It applies for provisional registration in Form 10A, then regular registration in Form 10AB before the provisional period ends. We review the bye-laws or deed first, because objects that read as commercial can delay or block approval." },
        { question: "How far is your office from Mylapore, and can I avoid the trip?", answer: "Our Anna Nagar office is about 12.8 km from central Mylapore by road, roughly 16 minutes on a clear road and longer in office traffic. You can avoid most trips: documents move by email or WhatsApp, reviews happen on video, and many forms are signed digitally. One visit at the start is common." },
        { question: "I inherited a share of an old house in Mylapore. How is rent or a sale taxed?", answer: "Each co-owner reports their own share of the rent under house property. On a sale, the earlier owner's holding period generally counts, so the gain is usually long-term once the combined period exceeds 24 months. Reinvestment under Section 54 or in Section 54EC bonds can reduce tax. Bring the deeds and legal heir papers." },
        { question: "Do retired Mylapore residents have to pay advance tax?", answer: "Resident senior citizens who have no business income are exempt from advance tax, even when pension and deposit interest are taxable. They still file a return if income crosses the limit, and many claim refunds of excess TDS on deposits. A retired person who also runs a practice or business follows the normal instalments." },
        { question: "Which Corporation zone is Mylapore in, and does it matter for a shop?", answer: "OpenStreetMap places Mylapore in the Greater Chennai Corporation's Teynampet zone (Zone 9), while our office is in the Anna Nagar zone (Zone 8). For a Mylapore shop, the trade licence and professional tax enrolment go through the Corporation for the zone where the shop stands, not where its accountant sits." },
      ]}
      furtherReading={[
        { slug: "12a-80g-registration-guide-chennai-ngos", title: "12A and 80G Registration: Step-by-Step for Chennai NGOs" },
        { slug: "fcra-registration", title: "FCRA Registration for Chennai NGOs Accepting Foreign Funds" },
        { slug: "capital-gains-tax-property-sale", title: "Capital Gains Tax on Selling Property in Chennai: 2026 Guide" },
        { slug: "joint-development-agreement-tax-chennai", title: "Joint Development Agreement Tax for Chennai Landowners" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
      ]}
    />
  );
}
