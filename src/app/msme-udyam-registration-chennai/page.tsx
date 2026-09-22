import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "MSME / Udyam Registration in Chennai",
  description:
    "Udyam (MSME) registration for small and medium enterprises in Chennai — unlock collateral-free loans, delayed-payment protection, and government scheme benefits.",
  alternates: { canonical: "/msme-udyam-registration-chennai" },
  openGraph: {
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
      introHeading="What is Udyam registration?"
      intro="Udyam registration is the government's official process for classifying a business as a Micro, Small, or Medium Enterprise (MSME), based on investment in plant/machinery or equipment and annual turnover. Registration is free, fully online, and based on self-declaration linked to PAN and GST data — but the classification itself unlocks real, tangible benefits: priority-sector bank lending, collateral-free credit under CGTMSE, protection against delayed payments from buyers under the MSMED Act, and eligibility for government tenders and subsidy schemes."
      citation={{ label: "Udyam Registration Portal", href: "https://udyamregistration.gov.in/" }}
      subServicesHeading="What's included"
      subServices={[
        { name: "Udyam Registration", text: "End-to-end filing on the Udyam Registration Portal using your PAN, GST, and business details, with certificate issuance." },
        { name: "MSME Classification Advisory", text: "Determining whether your business qualifies as Micro, Small, or Medium based on current investment and turnover thresholds." },
        { name: "Udyam Certificate Updates", text: "Amendments to your Udyam registration as your turnover or investment changes classification tier." },
        { name: "Delayed Payment Recovery Guidance", text: "Advisory on invoking MSMED Act protections when a buyer delays payment beyond the statutory 45-day limit." },
        { name: "Scheme Eligibility Mapping", text: "Identifying applicable central and Tamil Nadu state MSME schemes — subsidies, credit-linked capital subsidy, and priority lending — relevant to your sector." },
        { name: "Bank Loan Documentation Support", text: "Preparing the financial documentation banks require to process collateral-free MSME loan applications." },
      ]}
      faqs={[
        { question: "Is Udyam registration mandatory?", answer: "It's not legally mandatory to operate a business, but without it you cannot access MSME-specific benefits — priority lending, delayed-payment protection, tender eligibility, and various subsidy schemes — so most eligible businesses register voluntarily to unlock these." },
        { question: "What documents are needed for Udyam registration?", answer: "Only your Aadhaar (of the proprietor/managing partner/karta) and PAN and GST details of the business — the process is largely self-declaration based, pulling investment and turnover figures from linked government databases." },
        { question: "How is a business classified as Micro, Small, or Medium?", answer: "Based on investment in plant, machinery, or equipment and annual turnover — thresholds are revised periodically by the government, so we confirm current limits at the time of your registration to classify correctly." },
        { question: "Can I register for Udyam if I don't have GST registration?", answer: "Businesses exempt from GST registration can still register on Udyam; those required to have GST must link their GSTIN as part of the process." },
        { question: "What happens if a buyer delays payment beyond 45 days?", answer: "Under the MSMED Act, registered MSME suppliers are entitled to compound interest at three times the RBI bank rate on delayed payments beyond the agreed period (max 45 days), and can approach the Micro and Small Enterprises Facilitation Council for recovery." },
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
