import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-anna-nagar-chennai`;
const L = "text-royal-violet underline underline-offset-2";
const WALK_IN = "Walk-ins are welcome, and booking a slot saves waiting time.";

// Title and description exactly as specified in the owner's brief (Task 7.2),
// although they run past the 60 and 158 character targets.
export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Anna Nagar, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant in J-Block, Anna Nagar, Chennai for company registration, GST, income tax and audit. Visit our 13th Main Road office or work online. Free consultation.",
  alternates: { canonical: "/chartered-accountant-anna-nagar-chennai", types: { "text/markdown": "/md/chartered-accountant-anna-nagar-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Anna Nagar, Chennai",
    description: "Company and LLP registration, GST, audit and income tax from a CA firm whose only office is in J-Block, Anna Nagar.",
    url: "/chartered-accountant-anna-nagar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Anna Nagar"
      crumbHref="/chartered-accountant-anna-nagar-chennai"
      h1="Chartered Accountant in Anna Nagar, Chennai"
      subhead="C S Rushil & Co. is a chartered accountant firm based in Anna Nagar, at J-Block, 1st Street, 13th Main Rd. Led by CA Rushil C S, the firm handles company registration, GST, audit and income tax for the neighbourhood and beyond."
      distanceNote={`Anna Nagar is our office's home area: our only office is here, on 1st Street, 13th Main Road, J-Block, open Monday to Saturday from 9:30 AM to 6:30 PM and closed on Sunday. ${WALK_IN} Call +91 72001 49711 for directions and parking.`}
      directAnswer="Yes. C S Rushil & Co. is a chartered accountant firm whose only office is in Anna Nagar, at Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Chennai 600040. Anna Nagar is the office's home area, so clients here can drop in, book a slot, or work with the firm online."
      localContext={[
        "We serve Anna Nagar from inside the neighbourhood. Our office on 13th Main Road in J-Block is a short walk or drive from most Anna Nagar streets, so clients can bring original documents, sign forms and meet a chartered accountant face to face, then switch to WhatsApp, email and video calls for routine filings.",
        "Anna Nagar is one of Chennai's planned townships, laid out on a grid of numbered main roads, avenues and lettered blocks, which is unusual for the city. That planning has aged into a business-friendly district: wide avenues, established commercial stretches such as 2nd Avenue, and long-standing local businesses alongside newer offices.",
        "The Chennai Metro Green Line serves Anna Nagar through Thirumangalam, Anna Nagar Tower and Anna Nagar East stations, so clients from elsewhere in the city can reach the area without driving. OpenStreetMap places Anna Nagar in the Greater Chennai Corporation's Anna Nagar zone (Zone 8), which matters for trade licences and professional tax.",
      ]}
      sections={[
        {
          heading: "How do clients from nearby areas reach our J-Block office?",
          body: (
            <>
              <p>
                The office is on 1st Street, 13th Main Road, J-Block, about 300 metres from the Thirumangalam Metro
                entrance on 2nd Avenue, a few minutes&apos; walk from the Chennai Metro Green Line. By road, Anna Nagar Tower
                Park is about 2 minutes off-peak (route estimate), about 1.7 km via 2nd Avenue and 6th Main Road.
              </p>
              <p className="mt-4">For clients coming from nearby areas, the approximate straight-line distances from the office are:</p>
              <table>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>Approximate distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Thirumangalam Metro (2nd Avenue entrance)</td><td>About 0.3 km</td></tr>
                  <tr><td>Anna Nagar West</td><td>About 1.2 km</td></tr>
                  <tr><td>Anna Nagar Tower Park</td><td>About 1.6 km</td></tr>
                  <tr><td>Mogappair East</td><td>About 1.7 km</td></tr>
                  <tr><td>CMBT (Koyambedu bus terminus)</td><td>About 2 km</td></tr>
                  <tr><td>Aminjikarai</td><td>About 2.7 km</td></tr>
                  <tr><td>Shenoy Nagar Metro</td><td>About 2.9 km</td></tr>
                  <tr><td>Kilpauk</td><td>About 4.2 km</td></tr>
                </tbody>
              </table>
              <p className="mt-4">
                Distances are straight-line from the office pin, measured on OpenStreetMap; road distance is longer. The
                Tower Park drive time comes from the public OSRM routing service on OpenStreetMap road data and assumes
                clear roads. For turn-by-turn directions, open the office on Google Maps from the section below, or see
                the <Link href="/contact" className={L}>contact page</Link>. {WALK_IN}
              </p>
            </>
          ),
        },
        {
          heading: "What kinds of businesses operate in Anna Nagar?",
          body: (
            <>
              <p>
                Anna Nagar mixes retail, healthcare, professional services and young companies. Its avenues and main roads
                carry showrooms, restaurants, boutiques, banks and coaching centres, while the side streets hold clinics,
                diagnostic centres, consultants&apos; offices and early-stage startups working from small commercial units or
                converted homes.
              </p>
              <p className="mt-4">
                Each of these brings a different compliance load. A 2nd Avenue retailer needs GST returns that reconcile
                card, UPI and cash sales. A specialist doctor needs practice income and tax audit limits watched. A startup
                in its first year needs its first board meeting, first auditor and commencement filing done on time. Small
                manufacturers and service firms in the industrial areas around Ambattur, a short drive west, need e-way
                bills, job-work records and Udyam registration.
              </p>
            </>
          ),
        },
        {
          heading: "How do Anna Nagar founders register a company or LLP?",
          body: (
            <>
              <p>
                Anna Nagar founders can register a private limited company or LLP with us end to end: DSC, DIN, name
                approval, MoA and AoA or the LLP agreement, and the SPICe+ or FiLLiP filing. Because the office is in the
                neighbourhood, document checks and signing usually happen in a single visit, and the rest moves online.
              </p>
              <p className="mt-4">
                A private limited company usually takes 7 to 12 working days once documents and digital signatures are
                ready. An LLP suits partners, family businesses and professional practices that want limited liability with
                lighter compliance than a company. See{" "}
                <Link href="/private-limited-company-incorporation-chennai#anna-nagar" className={L}>
                  private limited company registration in Anna Nagar
                </Link>
                ,{" "}
                <Link href="/llp-registration-chennai" className={L}>
                  LLP registration in Chennai
                </Link>{" "}
                or compare every structure on our{" "}
                <Link href="/company-registration-chennai" className={L}>
                  company registration in Chennai
                </Link>{" "}
                page.
              </p>
            </>
          ),
        },
        {
          heading: "Which GST and local registrations do Anna Nagar shops and clinics need?",
          body: (
            <>
              <p>
                An Anna Nagar shop usually needs GST registration once its turnover or type of supply requires it, Tamil
                Nadu Shops and Establishments registration, a Greater Chennai Corporation trade licence and professional tax
                enrolment once it employs staff. Clinics check which services are
                GST-exempt, and a clinic run as a company or LLP applies separately for clinical establishment registration.
              </p>
              <p className="mt-4">
                We handle{" "}
                <Link href="/goods-and-services-tax" className={L}>
                  GST registration, returns and notices
                </Link>
                , along with{" "}
                <Link href="/income-tax-return-filing-chennai" className={L}>
                  income tax return filing
                </Link>{" "}
                for business owners, professionals and salaried residents of the area. Restaurants and bakeries also need FSSAI
                registration or a licence. Tamil Nadu&apos;s GST threshold is
                lower for services than for goods, so a consultant and a retailer with the same turnover can get different
                answers.
              </p>
            </>
          ),
        },
        {
          heading: "How do we help Anna Nagar families with income tax?",
          body: (
            <>
              <p>
                Many long-settled Anna Nagar families now earn from several sources at once: a family business or practice,
                rent from flats and shop units on the main roads, interest and dividends, and capital gains when an older
                house is sold or redeveloped. We plan advance tax across those sources and keep ownership shares consistent
                between family members.
              </p>
              <p className="mt-4">
                Several generations often file together, and property may be jointly owned by parents and children, so we
                handle the reinvestment choices after a property sale with the whole family in view. Because our office is
                in Anna Nagar, families can bring deeds and statements in person. See our{" "}
                <Link href="/income-tax-consultant-for-hni-chennai" className={L}>
                  income tax services for high-income individuals and families in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Is Anna Nagar the only place C S Rushil & Co. has an office?",
          body: (
            <p>
              Yes. Anna Nagar is the office&apos;s home area, and our only office is at Old Door No. AP-890, New No. 18,
              J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040. We have no branches elsewhere; clients from
              other parts of Chennai, other cities and abroad visit this office or work with us online.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Anna Nagar clients?",
          body: (
            <p>
              You start with a free 15-minute consultation, at our J-Block office or by video. We then send an itemised
              quote that shows government fees separately from our professional fees, so you know exactly what is paid to
              each authority. No work starts until you approve the quote. Book through this page or call +91 72001 49711.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Private limited company registration in Anna Nagar with a CA firm you can visit in person: documents, DSC and SPICe+ filing in 7 to 12 working days once papers are ready." },
        { slug: "company-registration-chennai", why: "Compare business structures and register the right one for your Anna Nagar business." },
        { slug: "llp-registration-chennai", why: "LLP registration for Anna Nagar partners, family businesses and professional practices, including the LLP agreement." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for Anna Nagar's mix of retail, trading, and services businesses." },
        { slug: "income-tax-return-filing-chennai", why: "Income tax return filing for Anna Nagar business owners, professionals and salaried residents." },
        { slug: "statutory-audit-chennai", why: "Statutory audit for Anna Nagar-based companies, with fieldwork scheduled around your calendar." },
        { slug: "roc-compliances", why: "Annual ROC filings and Companies Act compliance for Anna Nagar companies, from incorporation onward." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration for Anna Nagar's small manufacturers and trading businesses." },
        { slug: "bookkeeping-services-chennai", why: "Cloud accounting and monthly MIS reporting for Anna Nagar's manufacturers, traders, and services businesses." },
        { slug: "payroll-services-chennai", why: "Payroll outsourcing with PF, ESI, and TDS compliance for Anna Nagar employers." },
      ]}
      faqs={[
        { question: "Can I walk in to your Anna Nagar office without an appointment?", answer: `Yes. ${WALK_IN} The office is at J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, open Monday to Saturday from 9:30 AM to 6:30 PM and closed on Sunday. Call +91 72001 49711 for directions and parking guidance before you set out.` },
        { question: "How far is your office from Thirumangalam Metro station?", answer: "About 300 metres from the Thirumangalam Metro entrance on 2nd Avenue, a few minutes' walk. Thirumangalam is on the Chennai Metro Green Line, which also serves Anna Nagar Tower and Anna Nagar East stations, so clients from other Green Line stops can reach the office without driving or looking for parking." },
        { question: "Can my Anna Nagar home be the registered office of my new company?", answer: "Often, yes. The Companies Act does not insist on commercial premises, and a home address is commonly used with a recent utility bill, ownership or rent documents, and a no objection certificate from the owner naming the proposed company. We check these papers at our J-Block office before filing SPICe+." },
        { question: "Which documents should an Anna Nagar family bring for a property sale?", answer: "Bring the sale deed, the original purchase deed or inheritance papers, bills for improvements, the buyer's TDS certificate, and PAN and Aadhaar of every co-owner. If the sale money will go into another house or specified bonds, bring those papers too, so the capital gains exemption is worked out correctly for each owner." },
        { question: "Do Anna Nagar shops and clinics need professional tax enrolment?", answer: "Usually, yes, once they employ staff. Anna Nagar falls under the Greater Chennai Corporation, so an employer enrols for Tamil Nadu professional tax with the Corporation, deducts it from eligible salaries and pays it on the half-yearly cycle. We handle enrolment together with GST, Shops and Establishments registration and the trade licence." },
      ]}
      furtherReading={[
        { slug: "how-to-choose-a-chartered-accountant-in-chennai", title: "How to Choose a CA Firm in Chennai: 9 Checks Before You Hire" },
        { slug: "itc-mismatch-notices", title: "ITC Mismatch Notices: Why They Happen and How to Respond" },
        { slug: "documents-checklist-before-auditor-visit", title: "Documents Checklist Before Your Statutory Auditor's Visit" },
        { slug: "post-incorporation-compliance-checklist", title: "Post-Incorporation Compliance Checklist for Chennai Firms" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Due Dates 2026-27: Instalments and Interest" },
        { slug: "msme-udyam-registration-checklist", title: "MSME Udyam Registration After Incorporation: A Checklist" },
      ]}
    />
  );
}
