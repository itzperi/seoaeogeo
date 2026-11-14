import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-guindy-chennai`;
const L = "text-royal-violet underline underline-offset-2";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Guindy, Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant for Guindy: statutory audit, GST, ROC filings and payroll for industrial estate units and offices, from Anna Nagar, 13.2 km by road.",
  alternates: { canonical: "/chartered-accountant-guindy-chennai", types: { "text/markdown": "/md/chartered-accountant-guindy-chennai" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in Guindy, Chennai",
    description: "Statutory audit, GST, GST notices, ROC filings and payroll for Guindy manufacturers and offices, from our only office in Anna Nagar.",
    url: "/chartered-accountant-guindy-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Guindy"
      crumbHref="/chartered-accountant-guindy-chennai"
      h1="Chartered Accountant in Guindy, Chennai"
      subhead="Statutory audit, GST, GST notice replies, ROC filings and payroll for Guindy Industrial Estate units, corporate offices and the families who live nearby, handled from our only office in J-Block, Anna Nagar."
      distanceNote="Guindy is about 15 minutes by road on a clear run (OSRM route estimate) from our office, a drive of about 13.2 km along 100 Feet Road, Inner Ring Road and Anna Salai; rush-hour traffic takes much longer. We have no branch in Guindy: our only office is in Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM, and Guindy clients visit us there or work with us online."
      directAnswer="C S Rushil & Co. serves Guindy from its only office at J-Block, 13th Main Road, Anna Nagar, about 13.2 km away by road. There is no Guindy branch. Manufacturers in Guindy Industrial Estate, companies with offices on Anna Salai and Inner Ring Road, and local residents can visit that office or work with us online."
      localContext={[
        "Audit and compliance work for Guindy companies runs mainly online and on the client's own premises rather than at our office. Ledgers, GST returns and payroll data reach us through shared folders, and audit fieldwork for a Guindy unit is scheduled at its factory or office, so that stock, fixed assets and statutory registers are checked where they are kept.",
        "Guindy straddles two Greater Chennai Corporation zones on OpenStreetMap. Its centre point, Guindy Industrial Estate and Raj Bhavan on Sardar Patel Road all fall in the Adyar zone (Zone 13), while the Guindy railway and metro stations on Anna Salai are mapped in the Alandur zone (Zone 12). Our office sits in the Anna Nagar zone (Zone 8).",
        "Guindy mixes industry, offices, education and protected green space. The industrial estate holds engineering and manufacturing units alongside newer office buildings, the College of Engineering, Guindy and Guindy National Park occupy large campuses, and Kathipara Junction on the western edge connects Anna Salai with the Grand Southern Trunk Road and Inner Ring Road.",
      ]}
      sections={[
        {
          heading: "What kinds of businesses operate in Guindy?",
          body: (
            <>
              <p>
                Guindy&apos;s business base has two main parts. Guindy Industrial Estate, which OpenStreetMap also links to
                the name Thiru Vi Ka Estate, holds small and medium engineering, fabrication and manufacturing units.
                Around it, and along Anna Salai and Inner Ring Road, sit corporate and branch offices, IT and service
                companies, showrooms and the suppliers that serve them.
              </p>
              <p className="mt-4">
                The two parts need different things. A manufacturing unit in the estate deals with job work, e-way bills,
                stock valuation and an annual statutory audit that relies on physical verification. An office-based
                company deals with ROC filings, TDS on contractor and professional payments, payroll and, if it belongs to
                a foreign group, transfer pricing and FEMA reporting.
              </p>
            </>
          ),
        },
        {
          heading: "How long does it take to reach our Anna Nagar office from Guindy?",
          body: (
            <>
              <p>
                From OpenStreetMap&apos;s centre point for Guindy, our office is about 15 minutes by road on a clear run
                (OSRM route estimate), a distance of about 13.2 km. The route goes up Anna Salai past the industrial
                estate, turns onto Inner Ring Road, crosses Koyambedu on the flyover and follows 100 Feet Road into Anna
                Nagar.
              </p>
              <p className="mt-4">
                The estimate uses the public OSRM routing service on OpenStreetMap data and assumes free-flowing traffic;
                the Kathipara and Koyambedu stretches are much slower at peak times. By Metro, Guindy station is on the
                Blue Line and Thirumangalam station, about 300 metres from our office, is on the Green Line, so the trip
                involves changing lines at Alandur.
              </p>
            </>
          ),
        },
        {
          heading: "What do Guindy Industrial Estate manufacturers need for GST and audit?",
          body: (
            <>
              <p>
                Manufacturers in the estate need four things: GST returns that track inputs sent out for job work and
                brought back, e-way bills for every qualifying movement of goods, input tax credit that matches
                suppliers&apos; filings, and a statutory audit, or a tax audit for non-corporate units above the limit,
                supported by stock and fixed asset records.
              </p>
              <p className="mt-4">
                Input tax credit mismatches are a common trigger for GST scrutiny, so we reconcile purchase registers with
                GSTR-2B every month rather than at year end. For audit, we agree a stock count date, review costing for
                work in progress and check that the fixed asset register matches what is on the shop floor. Factory
                registration and licences have come under the Occupational Safety, Health and Working Conditions Code,
                2020 since 21 November 2025. See{" "}
                <Link href="/gst-return-filing-for-manufacturers" className={L}>
                  GST return filing for manufacturers
                </Link>{" "}
                and{" "}
                <Link href="/statutory-audit-chennai" className={L}>
                  statutory audit in Chennai
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "How should a Guindy business respond to a GST notice?",
          body: (
            <>
              <p>
                Read the notice type and deadline first. A scrutiny notice in ASMT-10 asks you to explain discrepancies,
                an intimation in DRC-01A lets you pay or object before a formal demand, and a show-cause notice starts
                adjudication. Each has its own reply format and time limit, and a missed date can lead to an order passed
                without hearing your side.
              </p>
              <p className="mt-4">
                For a Guindy manufacturer, notices commonly concern credit claimed on purchases from suppliers who did not
                file, e-way bill mismatches or gaps between GSTR-1 and GSTR-3B. We map each allegation to invoices and
                returns, draft a reply with supporting documents and, if an adverse order follows, prepare the appeal.
                Show-cause notices for periods from 2024-25 onwards fall under Section 74A. Read{" "}
                <Link href="/blog/asmt-10-gst-scrutiny-notice-reply" className={L}>
                  how to reply to an ASMT-10 scrutiny notice
                </Link>{" "}
                and{" "}
                <Link href="/blog/section-74a-gst-notice" className={L}>
                  Section 74A GST notices
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "What annual filings do Guindy corporate offices need?",
          body: (
            <>
              <p>
                A private limited company with an office in Guindy files its financial statements in AOC-4 and its annual
                return in MGT-7 or MGT-7A with the ROC each year, after the statutory audit and the annual general meeting.
                Each director also completes DIR-3 KYC, and the company files quarterly TDS returns and pays professional
                tax for staff.
              </p>
              <p className="mt-4">
                Late ROC forms attract additional fees that build up day by day, and a company that misses filings for long
                enough risks being struck off. Offices that belong to a foreign group also have RBI reporting under FEMA
                and may need a transfer pricing report in Form 3CEB. We keep one compliance calendar for the year. See{" "}
                <Link href="/roc-compliances" className={L}>
                  ROC compliances
                </Link>
                ,{" "}
                <Link href="/blog/aoc-4-mgt-7-late-fee" className={L}>
                  AOC-4 and MGT-7 late fees
                </Link>{" "}
                and{" "}
                <Link href="/virtual-cfo-services" className={L}>
                  virtual CFO services
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Does C S Rushil & Co. have a branch in Guindy?",
          body: (
            <p>
              No. C S Rushil & Co. has no Guindy branch. All our work runs from one office at Old Door No. AP-890, New No.
              18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040, open from 9:30 AM to 6:30 PM, Monday to
              Saturday. Guindy clients visit there or work with us online by phone, WhatsApp, email and video.
            </p>
          ),
        },
        {
          heading: "How does our quote work for Guindy clients?",
          body: (
            <p>
              Each Guindy engagement opens with a free 15-minute consultation, by video or at our Anna Nagar office. We
              then send an itemised quote, with government fees shown separately from our professional fees, covering the
              audit, filings or notice work discussed. Work starts only after you approve the quote. Call +91 72001 49711
              to set a time.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "statutory-audit-chennai", why: "Statutory audit with stock observation and fixed asset checks at Guindy Industrial Estate units." },
        { slug: "gst-return-filing-for-manufacturers", why: "GST returns for Guindy manufacturers covering job work, e-way bills and GSTR-2B reconciliation." },
        { slug: "gst-notice-reply-chennai", why: "Replies to ASMT-10, DRC-01A and show-cause notices received by Guindy businesses." },
        { slug: "gst-litigation-chennai", why: "Appeals against adverse GST orders for Guindy manufacturers and service companies." },
        { slug: "roc-compliances", why: "AOC-4, MGT-7 and DIR-3 KYC filings for companies with offices in Guindy." },
        { slug: "payroll-services-chennai", why: "Payroll, TDS on salary and professional tax for Guindy factory and office staff." },
        { slug: "transfer-pricing-audit", why: "Form 3CEB reports for Guindy offices of foreign groups with intra-group transactions." },
        { slug: "virtual-cfo-services", why: "Monthly MIS, cash-flow forecasts and compliance calendars for growing Guindy companies." },
      ]}
      faqs={[
        { question: "My unit in Guindy Industrial Estate sends parts out for job work. How is GST handled?", answer: "Inputs and capital goods can go to a job-worker under a delivery challan without paying GST, provided they come back within the time limits, generally one year for inputs and three years for capital goods. If they do not return in time, the original dispatch is treated as a supply. We track each challan against returns." },
        { question: "Do you carry out statutory audit fieldwork at a Guindy factory?", answer: "Yes. Statutory audit fieldwork, including stock observation and fixed asset checks, is scheduled at the factory or office in Guindy, while document review and most queries are handled online. We agree the dates, the stock count plan and a document list with your accounts staff in advance, so production is disturbed as little as possible." },
        { question: "How do I reach your office from Guindy by Metro?", answer: "Take the Blue Line from Guindy station to Alandur, change to the Green Line and ride to Thirumangalam, which is about 300 metres from our office. By road the distance is about 13.2 km, roughly 15 minutes on a clear road according to an OSRM route estimate, though peak traffic adds considerably." },
        { question: "We received a DRC-01A intimation for our Guindy company. What should we do?", answer: "Respond by the date given in the intimation. DRC-01A gives you a chance to pay the tax, interest and penalty proposed, or to explain in writing why you disagree, before a show-cause notice is issued. A careful reply can narrow or close the issue. We review the working behind the figures and draft the response." },
        { question: "Our Guindy office is the Indian arm of a foreign company. Which extra filings apply?", answer: "Besides ROC, income tax and GST compliance, a foreign-owned Indian company usually files the yearly FLA return with the Reserve Bank, reports fresh share allotments in Form FC-GPR, and may need a transfer pricing audit in Form 3CEB for transactions with group entities. We put all these dates into one calendar for you." },
      ]}
      furtherReading={[
        { slug: "itc-mismatch-notices", title: "ITC Mismatch Notices: Why They Happen and How to Respond" },
        { slug: "asmt-10-gst-scrutiny-notice-reply", title: "ASMT-10 GST Scrutiny Notice: Time Limit and How to Reply" },
        { slug: "drc-01a-gst-intimation", title: "DRC-01A GST Intimation 2026: What It Means, How to Reply" },
        { slug: "statutory-audit-checklist", title: "Statutory Audit Checklist: What Auditors Actually Ask For" },
        { slug: "eway-bill-detention-section-129-appeal", title: "E-Way Bill Detention Under Section 129: Release and Appeal" },
      ]}
    />
  );
}
