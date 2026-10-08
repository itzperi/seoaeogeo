import Link from "next/link";
import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { LANGUAGES_SPOKEN, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-anna-nagar-chennai`;

const LANGUAGES_TEXT =
  LANGUAGES_SPOKEN.length > 1
    ? `${LANGUAGES_SPOKEN.slice(0, -1).join(", ")} and ${LANGUAGES_SPOKEN[LANGUAGES_SPOKEN.length - 1]}`
    : LANGUAGES_SPOKEN.join("");

export const metadata: Metadata = {
  title: { absolute: "CA Firm in Anna Nagar, Chennai | C S Rushil & Co." },
  description:
    "CA firm in Anna Nagar, Chennai for company and LLP registration, GST and income tax. Visit Mon–Sat, 9:30 AM–6:30 PM; book first so the right CA is free.",
  alternates: { canonical: "/chartered-accountant-anna-nagar-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "CA Firm in Anna Nagar, Chennai",
    description: "Company and LLP registration, GST, audit and income tax services from a CA firm based in Anna Nagar.",
    url: "/chartered-accountant-anna-nagar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Anna Nagar"
      crumbHref="/chartered-accountant-anna-nagar-chennai"
      h1="CA Firm in Anna Nagar, Chennai"
      subhead="C S Rushil & Co. is a chartered accountant firm headquartered in Anna Nagar, at J-Block, 1st Street, 13th Main Rd — led by CA Rushil C S with a 16-member team handling company registration, GST, audit and tax."
      distanceNote="This is our home base: our office is in Anna Nagar itself, open Monday to Saturday, 9:30 AM to 6:30 PM. We recommend booking a free consultation first so the right team member is available — for Anna Nagar clients, a same-day meeting is often possible. Call us for directions and parking."
      directAnswer="Yes. C S Rushil & Co. is a chartered accountant firm headquartered in Anna Nagar, at J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040. The firm handles company registration, GST, audit and income tax, and Anna Nagar clients can meet the team in person at the office or work with the firm online."
      localContext={[
        "Anna Nagar is one of Chennai's original planned townships, laid out on a grid road system that's unusual for the city — a legacy of its development as a model residential-commercial district. That planning has aged into one of Chennai's more business-friendly neighbourhoods: wide roads, established commercial stretches, and a mix of long-standing local businesses alongside newer offices.",
        "Anna Nagar is served by the Chennai Metro Green Line, with stations at Thirumangalam, Anna Nagar Tower and Anna Nagar East, so clients from elsewhere in the city can reach the area by metro. Call us before you visit and we will give you directions from the station or main road that suits you, along with parking guidance.",
        "Anna Nagar's business mix includes traders and retailers, clinics run by doctors, consultants and other professionals, and early-stage startups, with small manufacturers and services businesses in the nearby industrial areas around Ambattur and Padi. Each brings different compliance needs, from GST returns for a shop to a first statutory audit for a growing company.",
      ]}
      sections={[
        {
          heading: "Company registration in Anna Nagar",
          body: (
            <p>
              We register private limited companies end to end — DSC, DIN, name approval, MoA/AoA and SPICe+ filing — and
              Anna Nagar founders can finish document drop-off and signing at our office in one visit. See{" "}
              <Link href="/private-limited-company-incorporation-chennai#anna-nagar" className="text-royal-violet underline underline-offset-2">
                private limited company registration in Anna Nagar
              </Link>{" "}
              or compare every structure on our{" "}
              <Link href="/company-registration-chennai" className="text-royal-violet underline underline-offset-2">
                company registration in Chennai
              </Link>{" "}
              page.
            </p>
          ),
        },
        {
          heading: "LLP registration in Anna Nagar",
          body: (
            <p>
              For partners, family businesses and professional practices that want limited liability with lighter
              compliance than a company, we handle the FiLLiP filing and the LLP agreement. Read more about{" "}
              <Link href="/llp-registration-chennai" className="text-royal-violet underline underline-offset-2">
                LLP registration in Chennai
              </Link>
              .
            </p>
          ),
        },
        {
          heading: "GST and income tax in Anna Nagar",
          body: (
            <p>
              We handle{" "}
              <Link href="/goods-and-services-tax" className="text-royal-violet underline underline-offset-2">
                GST registration, returns and notices
              </Link>
              , along with{" "}
              <Link href="/income-tax-return-filing-chennai" className="text-royal-violet underline underline-offset-2">
                income tax return filing
              </Link>{" "}
              for business owners, professionals and salaried residents of the area.
            </p>
          ),
        },
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "Private limited company registration in Anna Nagar with a CA firm you can visit in person: documents, DSC and SPICe+ filing in 7–12 working days." },
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
        { question: "Can I walk in to your Anna Nagar office without an appointment?", answer: "Our office is at J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai 600040. We recommend booking a free consultation first so the right team member is available, but for Anna Nagar clients a same-day in-person meeting is often possible. Call us for directions and parking." },
        { question: "Are you open on Saturdays?", answer: "Yes. The office is open Monday to Saturday, 9:30 AM to 6:30 PM, and closed on Sundays. Saturday slots suit many business owners and salaried clients, so book ahead if you want a specific time." },
        { question: "Which languages does your team speak?", answer: `Our team works with clients in ${LANGUAGES_TEXT}.` },
        { question: "What documents should I bring for company registration?", answer: "For each director and shareholder: PAN, Aadhaar and a recent passport-size photo. For the company: proof of the registered office address, such as a rent agreement or electricity bill, with a No Objection Certificate from the property owner. NRI or foreign directors need additional documents, and we share a checklist for your situation before you start." },
        { question: "Can I work with you online instead of visiting?", answer: "Yes. Most GST, income tax and ROC filings are online, so many clients work with us by phone, email, WhatsApp and video call. Anna Nagar clients can mix the two — meet once in person, then handle the rest remotely." },
        { question: "How do I book an appointment?", answer: "Book a free consultation through the booking button on this page, call +91 72001 49711, or message us on WhatsApp. Tell us what you need help with so we can schedule the right person." },
        { question: "Which services are best handled in person?", answer: "Company and LLP registration, where documents are checked and signed; first meetings for a statutory or tax audit; and replies to GST or income tax notices, where it helps to go through your records together. Routine return filing and bookkeeping usually do not need a visit." },
        { question: "How do I choose a CA firm in Anna Nagar?", answer: "Check four things: the partner's ICAI membership (verifiable on the ICAI website), whether the firm handles your specific work such as company registration, GST notices or audit, who on the team will actually do your filings, and how quickly they respond. Meeting the team at their office before you sign up is the simplest test." },
        { question: "What should I ask a CA firm before hiring them?", answer: "Ask how the firm communicates through the year, not just at filing time, and how quickly it replies to simple questions. Ask whether it regularly handles your type of work, and how it has dealt with GST or income tax notices, audit queries and disputes. Routine filing is easy to compare; handling problems is where firms differ. Also notice whether the partner can explain why a structure, deduction or filing approach applies to you in plain language rather than processing paperwork silently. If you leave the first conversation more confused than when you arrived, take that into account before committing to an ongoing relationship." },
      ]}
      furtherReading={[
        { slug: "how-to-choose-a-chartered-accountant-in-chennai", title: "How to Choose a CA Firm in Chennai: 9 Checks Before You Hire" },
        { slug: "itc-mismatch-notices", title: "ITC Mismatch Notices: Why They Happen and How to Respond" },
        { slug: "documents-checklist-before-auditor-visit", title: "Documents Checklist Before Your Auditor's Visit" },
        { slug: "audit-applicability-thresholds", title: "Audit Applicability Thresholds for Chennai Businesses" },
        { slug: "post-incorporation-compliance-checklist", title: "Post-Incorporation Compliance Checklist for Chennai Firms" },
        { slug: "outgrown-bookkeeping-signs", title: "Signs Your Chennai Business Has Outgrown Basic Bookkeeping" },
        { slug: "advance-tax-deadlines", title: "Advance Tax Deadlines for FY 2026 to 27: A Practical Guide" },
        { slug: "msme-udyam-registration-checklist", title: "MSME Udyam Registration After Incorporation: A Checklist" },
      ]}
    />
  );
}
