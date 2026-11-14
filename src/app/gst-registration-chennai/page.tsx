import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BOOKING_LINK, SITE_URL } from "@/lib/site";

// GST facts: CGST Act ss.22-25; CGST Rules 8-10 (REG-01 Part A/B, REG-03,
// REG-04, REG-05, REG-06). Thresholds are those applying in Tamil Nadu.
// No professional fees on the page (owner's brief and ICAI); GST
// registration itself has no government fee on the GST portal.
const TITLE = "GST Registration in Chennai | CA Firm in Anna Nagar";
const DESCRIPTION =
  "Apply for GST registration in Chennai with a CA firm in Anna Nagar: eligibility check, documents, ARN tracking and officer query replies. Free consultation.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/gst-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "GST Registration in Chennai",
    description: DESCRIPTION,
    url: "/gst-registration-chennai",
  },
};

const LINK = "text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

export default function Page() {
  return (
    <ServicePageTemplate
      ownQuoteSection
      pageUrl={`${SITE_URL}/gst-registration-chennai`}
      serviceType="GST Registration"
      crumbLabel="GST Registration in Chennai"
      crumbHref="/gst-registration-chennai"
      parentCrumb={{ name: "GST Consultants in Chennai", href: "/goods-and-services-tax" }}
      eyebrow="GST Registration · Chennai"
      h1="GST Registration in Chennai"
      subhead="Eligibility check, documents, the GST REG-01 application, ARN tracking and replies to officer queries, handled from our Anna Nagar office or online."
      introHeading="Who needs GST registration in Chennai?"
      intro="A business in Tamil Nadu must register for GST once its aggregate turnover in a financial year crosses ₹40 lakh for supplies of goods or ₹20 lakh for supplies of services. Some businesses must register whatever their turnover, such as those making inter-State supplies of goods, casual and non-resident taxable persons and businesses that pay tax under reverse charge."
      citation={{ label: "GST Portal user guide: Apply for Registration as a Normal Taxpayer (tutorial.gst.gov.in)", href: "https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm" }}
      keyFacts={[
        { label: "Law", value: "Sections 22 to 25 of the CGST Act, 2017 and Rules 8 to 10 of the CGST Rules, 2017" },
        { label: "Application form", value: "GST REG-01, in two parts on the GST portal (Part A for PAN, mobile and email; Part B for business details and documents)" },
        { label: "Threshold in Tamil Nadu", value: "₹40 lakh aggregate turnover for goods; ₹20 lakh for services" },
        { label: "Officer query and reply", value: "Clarification notice in REG-03; reply in REG-04" },
        { label: "Outcome", value: "Registration certificate in REG-06, or rejection in REG-05" },
      ]}
      subServicesHeading="What does our GST registration service include?"
      subServices={[
        { name: "Eligibility check", text: "We confirm whether registration is compulsory for your turnover and activity, or whether voluntary registration makes sense." },
        { name: "Document review", text: "We check every document before upload so that names, addresses and signatures match across PAN, Aadhaar and premises proof." },
        { name: "REG-01 filing and ARN tracking", text: "We file Part A and Part B on the GST portal, complete Aadhaar authentication with you and track the ARN." },
        { name: "Replies to officer queries", text: "If the officer issues a REG-03 notice, we prepare the REG-04 reply and the supporting documents." },
        { name: "Amendments and additional places", text: "Changes to address, partners, directors or authorised signatory, and adding a branch or godown as an additional place of business." },
        { name: "Post-registration setup", text: "Invoice format, e-way bill applicability and your first return calendar, so filing starts on time." },
      ]}
      howTo={{
        heading: "How does GST registration work, step by step?",
        steps: [
          { name: "Part A on the GST portal", text: "Enter the business PAN, mobile number and email address, verify both with OTPs and receive a Temporary Reference Number (TRN)." },
          { name: "Part B of GST REG-01", text: "Using the TRN, fill in business details, promoters and partners, authorised signatory, principal place of business, bank account and goods or services, and upload the documents." },
          { name: "Aadhaar authentication", text: "Opt for Aadhaar authentication and complete it through the link sent to the promoter or authorised signatory." },
          { name: "ARN and officer review", text: "Submit with a digital signature or EVC to get an Application Reference Number (ARN). The officer reviews the application and may issue a REG-03 query." },
          { name: "Certificate", text: "Once approved, the GSTIN and the registration certificate in REG-06 are available on the portal." },
        ],
      }}
      faqs={[
        { question: "What is the turnover limit for GST registration in Tamil Nadu?", answer: "Registration becomes compulsory once aggregate turnover in a financial year crosses ₹40 lakh for businesses supplying only goods, or ₹20 lakh for businesses supplying services. Some businesses must register regardless of turnover, including those making inter-State supplies of goods, casual taxable persons and those liable to pay tax under reverse charge." },
        { question: "Can I register for GST voluntarily below the threshold?", answer: "Yes. Section 25(3) of the CGST Act allows voluntary registration. You can then claim input tax credit and supply to customers or marketplaces that insist on a GSTIN. In return you must file every return on time, even in months with no sales, so weigh the compliance work against the benefit first." },
        { question: "What documents are needed for GST registration?", answer: "Usually the business PAN, proof of constitution such as the incorporation certificate or partnership deed, PAN, Aadhaar and photograph of the proprietor, partners or directors, proof of the principal place of business with a rent agreement or NOC where the premises are not owned, bank account proof, and an authorisation for the signatory." },
        { question: "How long does GST registration take?", answer: "It depends on the officer and on Aadhaar authentication. When authentication is completed and no query is raised, registration is usually granted within a few working days. If the officer raises a REG-03 query or orders physical verification of the premises, it takes longer. Clean, matching documents are the best way to avoid delays." },
        { question: "Why do GST officers raise queries on new applications?", answer: "The most common reasons are a name on the electricity bill or property tax receipt that differs from the owner who signed the NOC, a missing or unsigned rent agreement, unclear scans, a mismatch between PAN and Aadhaar details, and a vague description of the business. Each query must be answered in REG-04 within the time stated in the notice." },
        { question: "What returns must I file after GST registration?", answer: "A regular taxpayer files GSTR-1 for outward supplies and GSTR-3B to pay tax, monthly or quarterly under the QRMP scheme where eligible, plus an annual return where applicable. Composition taxpayers file CMP-08 quarterly and GSTR-4 annually. Returns are due even when there is no business in the period." },
        { question: "How do you quote for GST registration?", answer: "Start with a free 15-minute consultation. We then send an itemised quote that shows government fees separately from our professional fees; the GST portal charges no government fee for registration itself. No work starts until you approve the quote." },
      ]}
      relatedQuestions={[
        { question: "What GST returns and services do businesses need after registration?", href: "/goods-and-services-tax" },
        { question: "Do I need to register the company before applying for GST?", href: "/company-registration-chennai" },
        { question: "What if I have already received a GST notice?", href: "/gst-notice-reply-chennai" },
      ]}
      relatedSlugs={["goods-and-services-tax", "gst-return-filing-chennai", "gst-notice-reply-chennai", "private-limited-company-incorporation-chennai"]}
      relatedPosts={["gst-registration-after-company-incorporation", "gst-threshold-is-a-trigger", "gst-freelancers-consultants"]}
    >
      <h2 className={H2}>Should you register for GST voluntarily?</h2>
      <p className={P}>
        Voluntary registration suits a business below the threshold that buys from GST-registered suppliers and wants to
        claim input tax credit, or that sells to customers and online marketplaces that ask for a GSTIN. It does not suit
        a small business selling mainly to consumers, because every return must be filed on time from the date of
        registration, including nil returns. We look at your customers, purchases and growth plans before recommending
        either way.
      </p>

      <h2 className={H2}>Which documents do you need?</h2>
      <p className={P}>
        The exact list depends on how the business is constituted. These are the documents most applications need:
      </p>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-slate">
        <li>PAN of the business, and proof of constitution such as the certificate of incorporation, LLP agreement or partnership deed.</li>
        <li>PAN, Aadhaar, photograph, mobile number and email of the proprietor, partners or directors.</li>
        <li>Proof of the principal place of business: a recent electricity bill or property tax receipt, with a rent agreement or a no-objection certificate from the owner if the premises are not owned.</li>
        <li>Bank account proof, such as a cancelled cheque or the first page of the bank statement.</li>
        <li>A letter of authorisation or board resolution for the authorised signatory.</li>
      </ul>

      <h2 className={H2}>How long does GST registration take?</h2>
      <p className={P}>
        Timelines depend on the officer and on how complete the application is. Where Aadhaar authentication is done and
        the documents match, approval generally comes within a few working days of the ARN. A REG-03 query or a physical
        verification of the premises extends that. We track the ARN daily and reply to queries quickly, but the officer
        decides the final timing.
      </p>

      <h2 className={H2}>Why do officers send queries on new applications?</h2>
      <p className={P}>
        Most REG-03 notices on Chennai applications come from a handful of avoidable problems: the premises proof is in a
        different name from the owner who signed the NOC, the rent agreement is unsigned or unclear, a scan is hard to
        read, PAN and Aadhaar details do not match, or the business description and HSN or SAC codes do not reflect what
        the business actually does. Checking these before filing is the single biggest time saver.
      </p>

      <h2 className={H2}>What happens after you get a GSTIN?</h2>
      <p className={P}>
        From the date of registration you must issue tax invoices with your GSTIN, display the registration certificate
        at the place of business and file returns: GSTR-1 and GSTR-3B for regular taxpayers, monthly or quarterly under
        the QRMP scheme, or CMP-08 and GSTR-4 under the composition scheme. Our{" "}
        <Link href="/gst-return-filing-chennai" className={LINK}>GST return filing</Link> service covers this, and the
        wider range of GST work is on our{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST consultants in Chennai</Link> page. If you have just
        incorporated, see{" "}
        <Link href="/private-limited-company-incorporation-chennai" className={LINK}>private limited company registration in Chennai</Link>{" "}
        for the order in which registrations are usually done.
      </p>

      <h2 className={H2}>How does our quote work?</h2>
      <p className={P}>
        Every engagement starts with a{" "}
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className={LINK}>free 15-minute consultation</a>.
        We then send an itemised quote that shows government fees separately from our professional fees. The GST portal
        does not charge a government fee for registration itself. No work starts until you approve the quote.
      </p>
    </ServicePageTemplate>
  );
}
