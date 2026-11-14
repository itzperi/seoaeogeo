import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-ambattur-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Ambattur, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Ambattur factories and traders: statutory audit, GST on job work, Udyam, payroll and ROC filings from our Anna Nagar office nearby.",
  alternates: { canonical: "/chartered-accountant-ambattur-chennai", types: { "text/markdown": "/md/chartered-accountant-ambattur-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Ambattur, Chennai",
    description: "Statutory audit, job-work GST, Udyam and payroll for Ambattur Industrial Estate units and local businesses, from our only office in Anna Nagar.",
    url: "/chartered-accountant-ambattur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Ambattur"
      crumbHref="/chartered-accountant-ambattur-chennai"
      h1="Chartered Accountant in Ambattur, Chennai"
      subhead="Statutory audit, GST on job work, Udyam registration, payroll and ROC filings for factories, workshops and traders in and around Ambattur Industrial Estate, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Ambattur Industrial Estate is about 4.7 km by road from our office, close to 5 minutes off-peak (route estimate); the centre of the Ambattur zone is about 6.9 km, near 7 minutes, and Ambattur OT about 9.6 km. We have no Ambattur branch. Clients come to our Anna Nagar office, Monday to Saturday, 9:30 AM to 6:30 PM, or work online."
      directAnswer="C S Rushil & Co. works with Ambattur businesses from its only office at J-Block, 13th Main Road, Anna Nagar, which is about 4.7 km by road from Ambattur Industrial Estate. There is no Ambattur branch. Factory owners, job-workers, traders and salaried residents meet us at Anna Nagar, or we handle audits, GST and payroll with them online."
      localContext={[
        "Ambattur's industrial estate is a short run from our office along Ambattur Estate Road, so a unit owner can come to Anna Nagar for signatures or a review without losing most of a working day. Monthly GST, TDS and payroll work then continues over email and WhatsApp. For a statutory audit, stock and asset checks take place at the unit on dates fixed in advance.",
        "OpenStreetMap places Ambattur in the Greater Chennai Corporation's Ambattur zone (Zone 7), while our office is in the Anna Nagar zone (Zone 8). The industrial estate lies on the side nearest Anna Nagar, with Pattaravakkam station beside it, while Ambattur OT, Ambattur railway station and Ambattur Lake lie further west, around the Chennai to Thiruvallur High Road.",
        "Away from the estate, Ambattur is a busy residential and shopping area. That gives us two quite different client groups: manufacturers and their suppliers, who deal with job-work challans, buyer audits and factory payroll, and the households and shopkeepers around Ambattur OT and the railway station, who need income tax returns, GST registration and local licences.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Ambattur?",
          body: (
            <>
              <p>
                The industrial estate holds factories, machine shops, fabrication and assembly units, warehouses and
                transport operators, many of them small private limited companies or proprietorships supplying larger
                manufacturers. Outside the estate, Ambattur has retail streets, restaurants, schools, clinics and service
                businesses serving the surrounding residential neighbourhoods and the people who work on the estate.
              </p>
              <p className="mt-4">
                For an estate unit, the recurring work is GST with inputs moving to and from job-workers, e-way bills for
                outward consignments, statutory audit, payroll with PF and ESI, and the ROC annual return. For a shop or
                service business near Ambattur OT, it is GST registration and returns, a Corporation trade licence from
                the Ambattur zone, professional tax and the owner&apos;s own income tax. Salaried residents mainly need returns
                that match Form 16 and the AIS.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our office from Ambattur?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s outline of Ambattur Industrial Estate, our office is about 4.7 km by road, close to
                5 minutes off-peak (route estimate). From the centre point of the Ambattur zone it is about 6.9 km, near 7
                minutes, and from Ambattur OT about 9.6 km, roughly 9 minutes, all via Ambattur Estate Road.
              </p>
              <p className="mt-4">
                We measured these with the public OSRM router on OpenStreetMap road data, from each point to our office
                pin. They assume clear roads; shift changes at the estate and school traffic can lengthen the trip, so
                allow extra time when you have a fixed appointment. If you prefer the train, Ambattur and Pattaravakkam
                stations are on the suburban line, and Thirumangalam Metro station is about 300 metres from our office.
              </p>
            </>
          ),
        },
        {
          heading: "How should an Ambattur unit handle GST when goods go out for job work?",
          body: (
            <>
              <p>
                Inputs or capital goods can be sent to a job-worker without paying GST, under a delivery challan. Under
                Section 143 of the CGST Act, inputs not returned within one year, or capital goods within three years, are
                treated as supplied by you on the day they left your unit, so the tax then becomes payable with interest.
              </p>
              <p className="mt-4">
                In Ambattur this matters because castings, sheet-metal parts or half-finished components often travel
                between several units on the same estate roads before they reach the buyer. Each movement needs a challan
                and, where the value calls for one, an e-way bill. The principal reports goods sent and received in Form
                ITC-04, and scrap generated at the job-worker&apos;s premises needs to be treated consistently. A wrong or
                missing e-way bill can see goods detained in transit. See{" "}
                <Link href="/gst-return-filing-for-manufacturers" className={L}>
                  GST return filing for manufacturers
                </Link>{" "}
                and our note on{" "}
                <Link href="/blog/eway-bill-detention-section-129-appeal" className={L}>
                  e-way bill detention and appeal
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What does a statutory audit of an Ambattur manufacturing company involve?",
          body: (
            <>
              <p>
                Every company, however small, needs an annual statutory audit under the Companies Act. For an Ambattur
                manufacturer, the auditor concentrates on inventory: raw material, work in progress and finished goods are
                counted, matched with stock records and valued correctly. Machinery is checked against the fixed asset
                register and depreciation schedules.
              </p>
              <p className="mt-4">
                The auditor also looks at goods lying with job-workers, related-party purchases from a family concern on
                the same estate, dues to MSME suppliers and whether statutory payments such as GST, TDS, PF and ESI were
                deposited on time. Where turnover crosses the tax audit limit, a separate tax audit report is also
                needed. Keeping a clean stock register through the year makes the year-end count far shorter. See{" "}
                <Link href="/statutory-audit-chennai" className={L}>
                  statutory audit in Chennai
                </Link>{" "}
                and our{" "}
                <Link href="/blog/documents-checklist-before-auditor-visit" className={L}>
                  documents checklist before an auditor visits
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How do Udyam registration and the 45-day rule help Ambattur suppliers?",
          body: (
            <>
              <p>
                A micro or small enterprise registered under Udyam is protected by the MSMED Act when a buyer delays
                payment beyond the agreed period, capped at 45 days. It can claim compound interest at three times the RBI
                bank rate and approach the Micro and Small Enterprises Facilitation Council. Medium enterprises do not get
                this protection.
              </p>
              <p className="mt-4">
                There is a second lever. Under Section 43B(h), a buyer that does not pay a registered micro or small
                supplier within the time the MSMED Act allows can claim that expense only in the year it actually pays,
                which gives large customers a tax reason to clear Ambattur suppliers&apos; bills promptly. Registration is free on the government portal,
                but the classification depends on investment and turnover, so we check both before filing. Read{" "}
                <Link href="/msme-udyam-registration-chennai" className={L}>
                  MSME Udyam registration in Chennai
                </Link>{" "}
                or the{" "}
                <Link href="/blog/msme-udyam-registration-checklist" className={L}>
                  Udyam registration checklist
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Which payroll and labour registrations does an Ambattur factory need?",
          body: (
            <>
              <p>
                An Ambattur factory with employees usually needs EPF and ESI registration once it crosses the headcount
                limits, professional tax enrolment with the Greater Chennai Corporation, monthly TDS on salaries above the
                exemption level, and quarterly TDS returns. Factory registration and licensing now fall under the
                Occupational Safety, Health and Working Conditions Code, 2020.
              </p>
              <p className="mt-4">
                That Code replaced the Factories Act, 1948 from 21 November 2025, so older licences and registers should be
                reviewed against it. Shop-floor wages often include overtime, shift allowances and advances, and the
                payroll records need to agree with the PF and ESI returns and with the salary costs in the audited
                accounts. Contract labour supplied by agencies needs the agency&apos;s registrations and challans on file.
                See{" "}
                <Link href="/payroll-services-chennai" className={L}>
                  payroll services in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Ambattur?",
          body: (
            <p>
              We do not have a branch or site office in Ambattur. Every engagement is run from our single office at Old
              Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, which is open
              Monday to Saturday, 9:30 AM to 6:30 PM. Ambattur clients visit us there or work with us online.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Ambattur clients?",
          body: (
            <p>
              Ambattur owners can start with a free 15-minute consultation at Anna Nagar or on a video call between
              shifts. Afterwards we send an itemised quote in which government fees appear separately from our
              professional fees, so filing charges and our work are never mixed. No work begins until you approve that
              quote. Phone +91 72001 49711 to book.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "statutory-audit-chennai", why: "Annual audits for Ambattur manufacturing companies, including stock counts, job-work stock and fixed asset checks." },
        { slug: "gst-return-filing-for-manufacturers", why: "Returns covering job-work challans, ITC-04 and e-way bills for units in Ambattur Industrial Estate." },
        { slug: "msme-udyam-registration-chennai", why: "Udyam registration so Ambattur micro and small suppliers can rely on the 45-day payment protection." },
        { slug: "payroll-services-chennai", why: "Payroll with EPF, ESI, professional tax and TDS for Ambattur factory and workshop staff." },
        { slug: "roc-compliances", why: "Annual ROC returns and board compliance for the small private limited companies on the Ambattur estate." },
        { slug: "tax-audit-chennai", why: "Tax audit reports for Ambattur manufacturers and traders whose turnover crosses the audit limit." },
        { slug: "tds-return-filing-chennai", why: "Quarterly TDS returns for Ambattur units deducting tax on salaries, contractor payments and rent." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for salaried Ambattur residents and for unit owners drawing salary and dividends from their companies." },
      ]}
      faqs={[
        { question: "Our Ambattur unit sends castings out for machining. What GST rules apply?", answer: "You can send them under a delivery challan without paying GST. If the inputs do not come back within one year, Section 143 treats them as supplied on the day they left, so tax and interest become payable. Report the movements in Form ITC-04, and generate an e-way bill whenever the consignment requires one." },
        { question: "Can you carry out the stock count for our statutory audit at our Ambattur factory?", answer: "Yes. For a statutory audit, the physical verification of inventory and machinery takes place at your unit on a date agreed in advance, usually close to the year end. Before that, we ask for the stock register, job-work records and fixed asset register, so the count at the factory takes less of your staff's time." },
        { question: "A large buyer pays our Ambattur unit after 90 days. What can we do?", answer: "If you are a micro or small enterprise registered under Udyam, payment is due within the agreed period, capped at 45 days. Delay attracts compound interest at three times the RBI bank rate, and you can approach the Facilitation Council. If the buyer pays late, Section 43B(h) also pushes its tax deduction to the year of payment." },
        { question: "How long does it take to drive from Ambattur to your office?", answer: "Off-peak, the industrial estate is about 4.7 km away, close to 5 minutes by road; the centre of the Ambattur zone is about 6.9 km, near 7 minutes; Ambattur OT is about 9.6 km. These are clear-road route estimates along Ambattur Estate Road. Shift changes and peak traffic make the trip longer." },
        { question: "Which Corporation zone is Ambattur in?", answer: "OpenStreetMap places Ambattur, including the industrial estate, in the Greater Chennai Corporation's Ambattur zone (Zone 7). Our office is in the Anna Nagar zone (Zone 8). An Ambattur factory or shop therefore takes its trade licence and professional tax enrolment through the Ambattur zone, even though its accountant is in Anna Nagar." },
      ]}
      furtherReading={[
        { slug: "statutory-audit-checklist", title: "Statutory Audit Checklist: What Auditors Actually Ask For" },
        { slug: "documents-checklist-before-auditor-visit", title: "Documents Checklist Before Your Statutory Auditor's Visit" },
        { slug: "eway-bill-detention-section-129-appeal", title: "E-Way Bill Detention Under Section 129: Release and Appeal" },
        { slug: "msme-udyam-registration-checklist", title: "MSME Udyam Registration After Incorporation: A Checklist" },
        { slug: "company-registration-for-manufacturers-tamil-nadu", title: "Company Registration for Manufacturers in Tamil Nadu" },
      ]}
    />
  );
}
