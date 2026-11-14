import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-omr-sholinganallur-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in OMR and Sholinganallur, Chennai" },
  description:
    "Chartered accountant for OMR and Sholinganallur IT firms, startups and tech staff: GST on exports, LUT, ESOPs, RSUs and subsidiary filings, handled online.",
  alternates: { canonical: "/chartered-accountant-omr-sholinganallur-chennai", types: { "text/markdown": "/md/chartered-accountant-omr-sholinganallur-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in OMR and Sholinganallur, Chennai",
    description: "Export GST, startup set-up, RSU tax and subsidiary compliance for businesses and professionals along OMR, handled online from our only office in Anna Nagar.",
    url: "/chartered-accountant-omr-sholinganallur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="OMR / Sholinganallur"
      crumbHref="/chartered-accountant-omr-sholinganallur-chennai"
      h1="Chartered Accountant in OMR / Sholinganallur, Chennai"
      subhead="GST on software exports, startup incorporation, ESOP and RSU taxation, and transfer pricing for foreign-owned subsidiaries along Rajiv Gandhi Salai, from Thoraipakkam to Sholinganallur and beyond, handled mostly online from our only office in J-Block, Anna Nagar."
      distanceNote="Sholinganallur is far from our office: about 27.0 km by road, roughly 30 minutes on a clear road (route estimate), and Thoraipakkam about 22.0 km, near 25 minutes. Weekday traffic on OMR and Anna Salai adds a lot to both. We have no branch on OMR, so clients there usually work with us online and visit Anna Nagar by appointment or walk in, Monday to Saturday, 9:30 AM to 6:30 PM."
      directAnswer="C S Rushil & Co. has a single office, at J-Block, 13th Main Road, Anna Nagar, about 27 km by road from Sholinganallur, and no branch anywhere on OMR. Founders, finance teams and salaried technology professionals along OMR usually work with us online for GST, incorporation, payroll tax and returns, visiting Anna Nagar only when they choose to."
      localContext={[
        "Given the distance from Anna Nagar, we run OMR engagements remotely by default: cloud accounting files, shared folders, digital signatures and board papers signed electronically, with reviews on video calls at times that suit a product team's sprint or a finance team's close. Founders who want to meet can come to our office, but nothing in an engagement requires it.",
        "Old Mahabalipuram Road is signposted on OpenStreetMap as Rajiv Gandhi Salai, with the Rajiv Gandhi IT Expressway at its northern end near the TIDEL Park stop in Tharamani. OpenStreetMap places Sholinganallur, Karapakkam and Semmancheri in the Greater Chennai Corporation's Sholinganallur zone (Zone 15) and Perungudi in Zone 14, while Navalur and the SIPCOT IT Park at Siruseri fall in Chengalpattu district.",
        "The map also shows the ELCOT special economic zone at Sholinganallur, reached from Rajiv Gandhi Salai. Along this stretch, software services firms, SaaS startups and Indian subsidiaries of foreign groups share the road with apartment complexes housing their employees, plus the restaurants, gyms, clinics and shops that serve them. That combination shapes both the business and the personal tax work.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate along OMR and in Sholinganallur?",
          body: (
            <>
              <p>
                The corridor is built around technology. Office campuses and IT parks, including the ELCOT special
                economic zone at Sholinganallur and SIPCOT IT Park further south at Siruseri, house software services
                firms, product startups, back-office centres and captive units of foreign companies. Residential towers,
                restaurants, co-working spaces and retail have grown alongside them.
              </p>
              <p className="mt-4">
                The compliance follows the money. A firm billing clients abroad deals with zero-rated exports, the Letter
                of Undertaking and inward remittance records. A funded startup worries about ESOPs, investor reporting and
                the startup tax holiday. A foreign-owned subsidiary needs transfer pricing documentation and RBI
                reporting. Employees ask about RSUs from a parent abroad, and the cafes and gyms serving them need ordinary
                GST registration and returns.
              </p>
            </>
          ),
        },
        {
          heading: "How far is our Anna Nagar office from Sholinganallur and OMR?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s centre point for Sholinganallur, our office is about 27.0 km by road, roughly 30
                minutes on a clear road (route estimate). From Thoraipakkam it is about 22.0 km, near 25 minutes. The
                suggested route runs up Rajiv Gandhi Salai, along Sardar Patel Road and Anna Salai, then through
                Kodambakkam to 100 Feet Road.
              </p>
              <p className="mt-4">
                These estimates come from the public OSRM router using OpenStreetMap road data and assume no traffic;
                the route also crosses the Madhya Kailash and Gandhi Mandapam flyovers.
                In practice, office hours on OMR and Anna Salai can stretch the journey a great deal, which is why we
                recommend video calls for OMR clients and treat a visit to Anna Nagar as optional. In a straight line,
                Sholinganallur is about 21 km from our office.
              </p>
            </>
          ),
        },
        {
          heading: "How do OMR software exporters bill foreign clients under GST?",
          body: (
            <>
              <p>
                Exports of services are zero-rated under Section 16 of the IGST Act. A registered OMR software firm
                normally files a Letter of Undertaking in Form GST RFD-11 for each financial year, before the first export
                invoice, and then bills overseas clients without IGST. Without an LUT, it pays IGST and waits for a refund.
              </p>
              <p className="mt-4">
                For a supply to count as an export of services, the client must be outside India and payment must
                generally arrive in convertible foreign exchange, or in Indian rupees where the RBI permits, so keep bank
                advices or foreign inward remittance certificates against each invoice. Supplies to units inside the ELCOT
                zone or another SEZ are also zero-rated when they are for authorised operations. A refund claim must
                generally be filed within two years of the relevant date. Read{" "}
                <Link href="/blog/lut-for-exporters" className={L}>
                  LUT for exporters under GST
                </Link>{" "}
                and{" "}
                <Link href="/gst-return-filing-for-startups" className={L}>
                  GST return filing for startups
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What should an OMR technology startup set up in its first year?",
          body: (
            <>
              <p>
                An OMR founder who plans to raise money from investors usually chooses a private limited company, with Articles that allow an
                ESOP pool and share classes investors expect. After incorporation come the commencement of business
                filing, the first auditor&apos;s appointment, a current account, GST registration where needed and DPIIT
                Startup India recognition.
              </p>
              <p className="mt-4">
                DPIIT recognition opens the door to the startup tax holiday under section 140 of the Income-tax Act,
                2025, which replaced section 80-IAC. An eligible company or LLP incorporated on or after 1 April 2016 and
                before 1 April 2030, with turnover within ₹100 crore and a certificate from the Inter-Ministerial Board, can
                claim full deduction of profits for any three consecutive years out of its first ten. A shareholders&apos;
                agreement among co-founders, signed early, avoids harder conversations later. See{" "}
                <Link href="/blog/company-registration-for-it-startups-chennai" className={L}>
                  company registration for IT and SaaS startups in Chennai
                </Link>{" "}
                and{" "}
                <Link href="/blog/section-140-startup-tax-holiday" className={L}>
                  the section 140 startup tax holiday
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How are OMR tech employees taxed on RSUs and ESPP shares from a foreign parent?",
          body: (
            <>
              <p>
                RSUs from a foreign parent are taxed twice in different ways: as a salary perquisite when they vest, and
                as capital gains when the shares are later sold. The cost for the capital gains calculation is the fair
                market value already taxed at vesting, not zero. The holding must also be reported in Schedule FA.
              </p>
              <p className="mt-4">
                Professionals on OMR campuses who hold shares through a foreign broker, receive dividends taxed abroad, or
                sell lots across several years need the foreign tax credit claimed correctly,
                the broker statements converted at the right rates, and every lot matched with its vest-date value from the
                payslip or Form 16. Missing a foreign asset in Schedule FA is a separate problem from paying the tax, and
                it can lead to a notice on its own. Read{" "}
                <Link href="/blog/foreign-rsu-tax-schedule-fa-chennai" className={L}>
                  foreign RSU and ESPP tax and Schedule FA
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What do foreign-owned subsidiaries on OMR need to file each year?",
          body: (
            <>
              <p>
                An Indian subsidiary of a foreign group on OMR usually needs a statutory audit, a transfer pricing report
                in Form 3CEB for transactions with its parent or group companies, RBI reporting such as Form FC-GPR after
                shares are allotted to the foreign parent, the annual FLA return, and its ROC annual filings.
              </p>
              <p className="mt-4">
                Captive software and back-office units are typically paid by the parent on a cost-plus basis, so the
                markup, the comparable companies used to support it, and the intercompany agreement all need to line up
                with the invoices and the GST treatment of the exports. Directors resident abroad need a DIN and digital
                signature before they can sign filings. Both Chennai and Chengalpattu districts fall under the Registrar
                of Companies, Chennai, so a Siruseri address does not change the ROC. See{" "}
                <Link href="/transfer-pricing-audit" className={L}>
                  transfer pricing audit
                </Link>{" "}
                and{" "}
                <Link href="/blog/form-3ceb-due-date-applicability" className={L}>
                  Form 3CEB due date and applicability
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch on OMR or in Sholinganallur?",
          body: (
            <p>
              No. There is no branch or desk on OMR or in Sholinganallur. We work only from Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai
              600040, open Monday to Saturday, 9:30 AM to 6:30 PM. OMR clients mostly work with us online and can visit
              by appointment or walk in.
            </p>
          ),
        },
        {
          heading: "How does our quote work for OMR / Sholinganallur clients?",
          body: (
            <p>
              OMR founders and employees usually take the free 15-minute consultation on a video call, though you are
              welcome at Anna Nagar. We then share an itemised quote that shows government fees separately from our
              professional fees, which helps when a finance team needs to approve the spend. No work starts until the
              quote is approved. Call +91 72001 49711.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Incorporation for OMR startups with ESOP-ready Articles, share allotment and the post-incorporation filings." },
        { slug: "gst-return-filing-for-startups", why: "GST returns, LUT filing and zero-rated export invoices for OMR software and SaaS companies." },
        { slug: "startup-india-registration-chennai", why: "DPIIT Startup India recognition for eligible OMR technology companies, the first step towards the section 140 holiday." },
        { slug: "virtual-cfo-services", why: "Monthly MIS, runway tracking and board-ready numbers for funded startups along Rajiv Gandhi Salai." },
        { slug: "transfer-pricing-audit", why: "Form 3CEB reports for OMR captives and subsidiaries billing their foreign parent on a cost-plus basis." },
        { slug: "fema-rbi-compliance", why: "FC-GPR, FLA and other RBI reporting for foreign-owned companies on the OMR corridor." },
        { slug: "payroll-services-chennai", why: "Salary TDS, ESOP perquisite reporting and payroll for growing teams in Sholinganallur and Thoraipakkam." },
        { slug: "income-tax-return-filing-chennai", why: "Returns for OMR professionals with RSUs, ESPP shares, foreign dividends and Schedule FA reporting." },
      ]}
      faqs={[
        { question: "Is Sholinganallur inside Greater Chennai Corporation limits?", answer: "Yes. OpenStreetMap places Sholinganallur, Karapakkam and Semmancheri in the Corporation's Sholinganallur zone (Zone 15), and Perungudi in Zone 14. Further south, Navalur and Siruseri fall in Chengalpattu district, which matters for professional tax and GST jurisdiction. For company incorporation and annual filings, both districts come under the Registrar of Companies, Chennai, so the ROC does not change." },
        { question: "Can our OMR startup work with you without ever visiting Anna Nagar?", answer: "Yes. Incorporation papers, board resolutions and most filings are signed with digital signatures, documents are shared through folders or email, and reviews happen on video calls. Founders who want to meet in person can visit our Anna Nagar office by appointment or walk in, but given the 27 km distance, most OMR clients choose not to." },
        { question: "Do we need an LUT to invoice our US client from our Sholinganallur office?", answer: "Not strictly, but it helps. Without a Letter of Undertaking you must pay IGST on the export invoice and then claim a refund, which ties up cash. With one, filed in Form GST RFD-11 before the first export invoice of the financial year, you invoice without IGST. Keep the foreign remittance proof for each invoice." },
        { question: "I receive RSUs from my employer's foreign parent. What do I report?", answer: "The value at vesting is taxed as a salary perquisite, usually through payroll. When you sell, the capital gain uses that vest-date value as cost, not zero. You must also report the shares, the foreign brokerage account and any dividends in Schedule FA every year, and claim foreign tax credit where tax was withheld abroad." },
        { question: "How long does it take to drive from Sholinganallur to your office?", answer: "About 27.0 km by road, roughly 30 minutes on a clear road, based on a route estimate via Rajiv Gandhi Salai, Sardar Patel Road and Anna Salai. Thoraipakkam is about 22.0 km. Weekday traffic adds considerably to both, which is why most OMR clients prefer a video call to a visit." },
      ]}
      furtherReading={[
        { slug: "virtual-cfo-omr-startups", title: "Virtual CFO Support for OMR's Growth-Stage Startups" },
        { slug: "foreign-rsu-tax-schedule-fa-chennai", title: "Foreign RSU and ESPP Tax and Schedule FA for Chennai Staff" },
        { slug: "section-140-startup-tax-holiday", title: "Section 140 Startup Tax Holiday: Eligibility Guide" },
        { slug: "lut-for-exporters", title: "LUT for Exporters Under GST: How to File and Why It Matters" },
        { slug: "form-3ceb-due-date-applicability", title: "Form 3CEB Due Date and Applicability: A Practical Guide" },
      ]}
    />
  );
}
