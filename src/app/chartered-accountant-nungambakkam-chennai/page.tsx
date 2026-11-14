import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-nungambakkam-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Nungambakkam | C S Rushil & Co." },
  description:
    "Chartered accountant for Nungambakkam: company and LLP work, ROC filings, executive tax and FEMA reporting from our Anna Nagar office, 6.6 km by road.",
  alternates: { canonical: "/chartered-accountant-nungambakkam-chennai", types: { "text/markdown": "/md/chartered-accountant-nungambakkam-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Nungambakkam, Chennai",
    description: "Company and LLP work, ROC filings, executive and promoter tax, and FEMA reporting for Nungambakkam, from our only office in Anna Nagar.",
    url: "/chartered-accountant-nungambakkam-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Nungambakkam"
      crumbHref="/chartered-accountant-nungambakkam-chennai"
      h1="Chartered Accountant in Nungambakkam, Chennai"
      subhead="Company and LLP work, ROC filings, executive and promoter tax, and FEMA reporting for offices and households in Nungambakkam, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Nungambakkam is about 8 minutes by road on a clear run (OSRM route estimate) from our office, a drive of about 6.6 km via Nelson Manickam Road and the Anna Arch flyover; peak-hour traffic makes it longer. We have no branch in Nungambakkam: our only office is in Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM, and Nungambakkam clients visit us there or work with us online."
      directAnswer="C S Rushil & Co. serves Nungambakkam from its only office at J-Block, 13th Main Road, Anna Nagar, about 6.6 km away by road. There is no Nungambakkam branch. Companies, LLPs, consultancies, executives and promoters in Nungambakkam can meet a chartered accountant at that office or handle ROC, tax and FEMA work with us online."
      localContext={[
        "Nungambakkam is close enough to Anna Nagar that many meetings can happen face to face. Board resolutions, share transfer papers and original deeds are easy to bring across to our J-Block office, while routine work, such as GST returns, TDS filings and monthly bookkeeping, runs online between visits.",
        "OpenStreetMap places Nungambakkam in the Greater Chennai Corporation's Teynampet zone (Zone 9), while our office is in the Anna Nagar zone (Zone 8). The locality is threaded by Uttamar Gandhi Salai, still widely called Nungambakkam High Road, along with Sterling Road, College Road and Haddows Road, and Loyola College and Nungambakkam suburban railway station sit on its western side.",
        "Nungambakkam is a central office district as well as a residential one. Its main roads carry corporate and regional offices, consultancies, clinics, showrooms and restaurants, while the side streets hold apartments and older bungalows. The Registrar of Companies, Chennai also works from Shastri Bhavan on Haddows Road, although almost every ROC filing is now made online.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Nungambakkam?",
          body: (
            <>
              <p>
                Many of Nungambakkam&apos;s businesses are office-based. Uttamar Gandhi Salai, Sterling Road and Haddows
                Road carry corporate and regional offices, consultancies, private clinics, showrooms and restaurants.
                Because the address is central, some companies also choose Nungambakkam for their registered office even
                when their operations or warehouses sit in other parts of Chennai.
              </p>
              <p className="mt-4">
                Office-based businesses here tend to need structured compliance rather than one-off registrations: monthly
                GST and TDS returns, payroll and professional tax, annual ROC filings, statutory audit and, for larger or
                foreign-linked companies, transfer pricing and FEMA reporting. Consultancies and professional firms also
                need careful GST treatment for services billed to clients in other states or abroad.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Nungambakkam?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s centre point for Nungambakkam, our office is about 8 minutes by road on a clear
                run (OSRM route estimate), a distance of about 6.6 km. The route runs along Sterling Road and Nelson
                Manickam Road, crosses the Anna Arch flyover, and follows Anna Arch Road and 2nd Avenue into Anna Nagar.
              </p>
              <p className="mt-4">
                The estimate comes from the public OSRM routing service on OpenStreetMap data and describes an empty road;
                Nelson Manickam Road and the Anna Arch junction are slow during office hours. Because the trip is short
                outside the rush, it is usually practical for Nungambakkam directors to sign documents in person and leave
                the recurring filings to email and WhatsApp.
              </p>
            </>
          ),
        },
        {
          heading: "Does a Nungambakkam company ever need to visit the ROC on Haddows Road?",
          body: (
            <>
              <p>
                Rarely. The Registrar of Companies, Chennai is at Shastri Bhavan, 26 Haddows Road, Nungambakkam, but
                incorporation, annual returns, charge filings, changes in directors and changes of registered office are
                all filed online on the MCA portal with digital signatures. A physical visit is now exceptional, usually
                limited to a matter where the Registrar specifically asks to see you.
              </p>
              <p className="mt-4">
                What matters more is that filings reach the ROC on time and the company&apos;s records agree with them.
                Moving a registered office within the local limits of Chennai needs a board resolution and Form INC-22
                within the set period, while a move to another state also needs a special resolution and Regional
                Director approval. We keep director DIN and DSC details current, since an expired DSC holds up every
                form. Read{" "}
                <Link href="/blog/roc-chennai-vs-roc-coimbatore" className={L}>
                  ROC Chennai vs ROC Coimbatore
                </Link>{" "}
                and{" "}
                <Link href="/blog/change-registered-office-company" className={L}>
                  changing a company&apos;s registered office
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How are executives and promoters in Nungambakkam taxed?",
          body: (
            <>
              <p>
                Senior executives and promoters usually have several income streams at once: salary with perquisites,
                stock awards, director&apos;s remuneration or dividends from their own company, interest on loans to that
                company and rent from property. Each falls under its own head, and advance tax has to be planned across
                all of them, since salary TDS rarely covers the full liability.
              </p>
              <p className="mt-4">
                Loans between a promoter and a closely held company need care, because some advances from the company to
                a shareholder can be treated as deemed dividend. Foreign shares and accounts are disclosed in Schedule
                FA, and capital gains on listed and unlisted shares follow different holding periods. We coordinate the
                promoter&apos;s personal return with the company&apos;s books so that both tell the same story. See{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={L}>
                  income tax planning for high-income individuals and families in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What FEMA and transfer pricing filings apply to foreign-owned offices in Nungambakkam?",
          body: (
            <>
              <p>
                If your Nungambakkam office is an Indian company owned by a foreign parent, three filings usually follow:
                Form FC-GPR within 30 days of issuing shares to the foreign investor, the annual return on foreign
                liabilities and assets to the RBI, and a transfer pricing report in Form 3CEB when the company transacts
                with group entities.
              </p>
              <p className="mt-4">
                Delays in FEMA reporting lead to late submission fees or compounding, so we track allotment dates and the
                15 July deadline for the FLA return alongside the ROC and tax calendar. Transfer pricing documentation
                needs benchmarking of service fees, cost recharges and royalty payments, and the report is due ahead of
                the return filing date. Read{" "}
                <Link href="/blog/fc-gpr-filing-deadline" className={L}>
                  the FC-GPR filing deadline
                </Link>
                ,{" "}
                <Link href="/blog/fla-return-due-date" className={L}>
                  FLA return due date
                </Link>{" "}
                and{" "}
                <Link href="/fema-rbi-compliance" className={L}>
                  FEMA and RBI compliance
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Nungambakkam?",
          body: (
            <p>
              No. Nungambakkam has no C S Rushil & Co. branch. We work only from Old Door No. AP-890, New No. 18, J-Block,
              1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, which opens Monday to Saturday, 9:30 AM to 6:30 PM.
              Nungambakkam clients come there in person or work with us online through phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Nungambakkam clients?",
          body: (
            <p>
              The first conversation is a free 15-minute consultation, held at our Anna Nagar office or over video. After
              it, you receive an itemised quote that sets out government fees separately from our professional fees for
              each filing or engagement. We start work only once you have approved that quote. Call +91 72001 49711 to fix
              a time.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Incorporating a private limited company with a Nungambakkam office as its registered address." },
        { slug: "roc-compliances", why: "Annual AOC-4, MGT-7, DIR-3 KYC and event-based ROC filings for Nungambakkam companies." },
        { slug: "fema-rbi-compliance", why: "FC-GPR, FLA returns and other FEMA reporting for foreign-owned offices in Nungambakkam." },
        { slug: "transfer-pricing-audit", why: "Form 3CEB reports and benchmarking for Nungambakkam companies dealing with group entities." },
        { slug: "income-tax-consultant-for-hni-chennai", why: "Tax planning for Nungambakkam executives and promoters with salary, stock awards, dividends and rent." },
        { slug: "statutory-audit-chennai", why: "Annual statutory audit for established Nungambakkam companies." },
        { slug: "gst-return-filing-for-freelancers", why: "GST returns for Nungambakkam consultants, including exports of services under a Letter of Undertaking." },
        { slug: "llp-registration-chennai", why: "LLP registration for Nungambakkam professional firms that want limited liability without share capital." },
      ]}
      faqs={[
        { question: "Can I use a Nungambakkam commercial address as my company's registered office?", answer: "Yes. Any address in India where the company can receive official communication can be its registered office. For a rented Nungambakkam office, you need the rent agreement, a recent utility bill and a no objection certificate from the owner. The registered office then falls under ROC Chennai, which is itself based on Haddows Road." },
        { question: "I am a director of a Nungambakkam company and lent it money. How is that treated?", answer: "A loan from a director to a private company is generally allowed if the director gives a written declaration that the money is not borrowed. Interest you receive is taxable as other income, and the company may need to deduct TDS on it. Advances flowing the other way, from company to shareholder, can be taxed as deemed dividend." },
        { question: "How long does it take to drive from Nungambakkam to your office?", answer: "On a clear road it is about 8 minutes for roughly 6.6 km, according to an OSRM route estimate via Sterling Road, Nelson Manickam Road and the Anna Arch flyover. Office-hour traffic makes it noticeably longer. Since the trip is short outside the rush, many signings are easiest done at our J-Block office." },
        { question: "Our Nungambakkam office is a subsidiary of a UK company. When is the FLA return due?", answer: "The annual return on foreign liabilities and assets is due to the RBI by 15 July each year, covering the previous financial year's position. It is required for an Indian company that has received foreign direct investment, even if no new shares were issued that year. We prepare it from the audited or provisional accounts." },
        { question: "Does a Nungambakkam consultancy pay GST on fees from overseas clients?", answer: "Services to a client abroad can qualify as an export of services when payment is received in foreign exchange and the other conditions are met. Exports are zero-rated, so a registered consultancy can supply them without paying IGST by filing a Letter of Undertaking each year, or pay IGST and claim a refund later." },
      ]}
      furtherReading={[
        { slug: "roc-chennai-vs-roc-coimbatore", title: "ROC Chennai vs ROC Coimbatore: Which ROC Is Yours?" },
        { slug: "change-registered-office-company", title: "Registered Office Change 2026: INC-22, INC-23 and MGT-14" },
        { slug: "fc-gpr-filing-deadline", title: "FC-GPR Filing 2026: 30-Day Deadline, Documents, Late Fee" },
        { slug: "fla-return-due-date", title: "FLA Return Due 15 July 2027: Who Must File and How" },
        { slug: "form-3ceb-due-date-applicability", title: "Form 3CEB Due Date 2026, Applicability and Form 48" },
      ]}
    />
  );
}
