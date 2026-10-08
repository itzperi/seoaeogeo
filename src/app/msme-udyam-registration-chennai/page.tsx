import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "MSME / Udyam Registration in Chennai" },
  description:
    "Udyam (MSME) registration for small and medium enterprises in Chennai — unlock collateral-free loans, delayed-payment protection, and scheme benefits.",
  alternates: { canonical: "/msme-udyam-registration-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "MSME / Udyam Registration in Chennai",
    description: "Udyam registration process and benefits for Chennai small businesses.",
    url: "/msme-udyam-registration-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/msme-udyam-registration-chennai`}
      serviceType="MSME Registration"
      crumbLabel="MSME / Udyam Registration"
      crumbHref="/msme-udyam-registration-chennai"
      eyebrow="MSME · Udyam · Chennai"
      h1="MSME / Udyam Registration in Chennai"
      subhead="Register your business under Udyam to access collateral-free loans, delayed-payment protection, and government scheme benefits reserved for MSMEs."
      introHeading="What is Udyam (MSME) registration?"
      intro="Udyam registration is the government's official process for classifying a business as a Micro, Small, or Medium Enterprise (MSME), based on investment in plant/machinery or equipment and annual turnover. Registration is free, fully online, and based on self-declaration linked to PAN and GST data — but the classification itself unlocks real, tangible benefits: priority-sector bank lending, collateral-free credit under CGTMSE, protection against delayed payments from buyers under the MSMED Act for micro and small enterprises, and eligibility for government tenders and subsidy schemes."
      citation={{ label: "Udyam Registration Portal: registration form for new enterprises", href: "https://udyamregistration.gov.in/UdyamRegistration.aspx" }}
      subServicesHeading="What does our Udyam registration support include?"
      subServices={[
        { name: "Udyam Registration", text: "End-to-end filing on the Udyam Registration Portal using your PAN, GST, and business details, with certificate issuance." },
        { name: "MSME Classification Advisory", text: "Determining whether your business qualifies as Micro, Small, or Medium based on current investment and turnover thresholds." },
        { name: "Udyam Certificate Updates", text: "Amendments to your Udyam registration as your turnover or investment changes classification tier." },
        { name: "Delayed Payment Recovery Guidance", text: "Advisory for micro and small enterprises on invoking MSMED Act protections when a buyer delays payment beyond the statutory 45-day limit." },
        { name: "Scheme Eligibility Mapping", text: "Identifying applicable central and Tamil Nadu state MSME schemes — subsidies, credit-linked capital subsidy, and priority lending — relevant to your sector." },
        { name: "Bank Loan Documentation Support", text: "Preparing the financial documentation banks require to process collateral-free MSME loan applications." },
      ]}
      faqs={[
        { question: "Is Udyam registration mandatory?", answer: "It's not legally mandatory to operate a business, but without it you cannot access MSME-specific benefits — priority lending, delayed-payment protection, tender eligibility, and various subsidy schemes — so most eligible businesses register voluntarily to unlock these." },
        { question: "What documents are needed for Udyam registration?", answer: "Only your Aadhaar (of the proprietor/managing partner/karta) and PAN and GST details of the business — the process is largely self-declaration based, pulling investment and turnover figures from linked government databases." },
        { question: "How is a business classified as Micro, Small, or Medium?", answer: "Based on investment in plant, machinery, or equipment and annual turnover — thresholds are revised periodically by the government, so we confirm current limits at the time of your registration to classify correctly." },
        { question: "Can I register for Udyam if I don't have GST registration?", answer: "Businesses exempt from GST registration can still register on Udyam; those required to have GST must link their GSTIN as part of the process." },
        { question: "What happens if a buyer delays payment beyond 45 days?", answer: "Under the MSMED Act, registered micro and small enterprise suppliers are entitled to compound interest, with monthly rests, at three times the RBI bank rate on payments delayed beyond the agreed period (max 45 days), and can approach the Micro and Small Enterprises Facilitation Council for recovery. Medium enterprises are not covered by these provisions." },
        { question: "Does the buyer need to be MSME-registered for the 45-day payment rule to apply?", answer: "No. The rule protects the supplier, not the buyer: anyone buying goods or services from a registered micro or small enterprise must pay within the agreed period, which cannot exceed 45 days from acceptance, or within 15 days where there is no written agreement, whether or not the buyer is registered itself. Medium enterprises do not get this protection. Many small manufacturers supplying larger OEMs never invoke it for fear of upsetting a key customer, but knowing the right exists, tracking receivables against the 45-day limit, and knowing that income tax rules deny buyers a deduction for such overdue dues until they are paid all strengthen your position in payment-term discussions." },
        { question: "Does Udyam registration actually help me get a business loan?", answer: "Yes, it is the starting point for MSME lending. Udyam-registered enterprises qualify for priority-sector lending, and loans to micro and small enterprises can be covered by the CGTMSE credit guarantee scheme, so banks can lend without collateral or a third-party guarantee. Yet many registered traders and service businesses never use this and apply for a standard commercial loan instead. When a financing need comes up, ask the bank specifically for an MSME loan or CGTMSE cover, and pick the scheme that fits the need, whether working capital or equipment. Keeping books current means the financial statements lenders ask for are ready when you apply." },
      ]}
      relatedQuestions={[
        { question: "Do I need to be a registered company to get Udyam registration?", href: "/company-registration-chennai" },
        { question: "Does MSME status change my audit requirements?", href: "/audit-and-assurance" },
        { question: "Can you help us access MSME lending and scheme benefits?", href: "/management-consultancy" },
      ]}
      relatedSlugs={["company-registration-chennai", "audit-and-assurance", "management-consultancy"]}
    />
  );
}
