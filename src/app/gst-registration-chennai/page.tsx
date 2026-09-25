import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "GST Registration in Chennai | New Registration & LUT" },
  description:
    "New GST registration for businesses and professionals in Chennai — document preparation, ARN tracking, amendments, and LUT applications by C S Rushil & Co.",
  alternates: { canonical: "/gst-registration-chennai" },
  openGraph: {
    title: "GST Registration in Chennai",
    description: "New GST registration, amendments, and LUT applications for Chennai businesses.",
    url: "/gst-registration-chennai",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/gst-registration-chennai`}
      serviceType="GST Registration"
      crumbLabel="GST Registration"
      crumbHref="/gst-registration-chennai"
      eyebrow="GST Registration · Chennai"
      h1="GST Registration in Chennai"
      subhead="Register for GST correctly the first time — document preparation, ARN tracking, and follow-up with the department, handled end-to-end."
      introHeading="Who needs to register for GST?"
      intro="GST registration is mandatory once your aggregate turnover crosses ₹40 lakh for goods (₹20 lakh in special-category states) or ₹20 lakh for services, or if you sell across state lines, sell on e-commerce marketplaces, or are otherwise required under the CGST Act regardless of turnover (e.g. casual taxable persons, e-commerce operators). Registering late attracts penalties and blocks Input Tax Credit for the pre-registration period, so getting the timing and documentation right at the outset matters."
      citation={{ label: "GST Portal (gst.gov.in)", href: "https://www.gst.gov.in/" }}
      subServicesHeading="What's included"
      subServices={[
        { name: "New GST Registration", text: "Document preparation, application filing on the GST portal, and ARN tracking through to certificate issuance." },
        { name: "Voluntary Registration", text: "For businesses below the threshold who want to register anyway — to claim ITC or sell on marketplaces requiring GSTIN." },
        { name: "Registration Amendment", text: "Updates to business address, additional place of business, contact details, or authorised signatory." },
        { name: "Casual & Non-Resident Taxable Person Registration", text: "Short-term GST registration for exhibitions, events, or non-resident suppliers operating temporarily in India." },
        { name: "LUT Application", text: "Letter of Undertaking filing for exporters to supply without upfront IGST payment, renewed annually." },
        { name: "Post-Registration Setup", text: "Guidance on invoicing format, e-way bill applicability, and your first return-filing calendar." },
      ]}
      howTo={{
        heading: "Step-by-step GST registration process",
        steps: [
          { name: "Applicability check", text: "We confirm whether registration is mandatory for your turnover/business type, or worth doing voluntarily." },
          { name: "Document preparation", text: "PAN, Aadhaar, business constitution proof, address proof, and bank details are collected and verified before filing." },
          { name: "GST portal application", text: "We file Form GST REG-01 on the GST portal with all supporting documents." },
          { name: "ARN tracking & department queries", text: "We track the Application Reference Number and respond to any departmental clarification requests." },
          { name: "GSTIN & certificate issuance", text: "On approval, you receive your GSTIN and registration certificate, ready to start invoicing." },
        ],
      }}
      faqs={[
        { question: "What is the turnover limit for mandatory GST registration?", answer: "₹40 lakh for suppliers of goods (₹20 lakh in special-category states) and ₹20 lakh for suppliers of services. Certain categories — inter-state suppliers, e-commerce sellers, casual taxable persons — must register regardless of turnover." },
        { question: "How long does GST registration take?", answer: "Typically 3–7 working days from application if documents are in order and there's no departmental query; it can extend to 15–20 days if a physical verification or additional clarification is required." },
        { question: "What documents are required for GST registration?", answer: "PAN, Aadhaar, photograph, proof of business constitution (partnership deed/incorporation certificate), address proof for the principal place of business, and bank account details. Additional documents apply for companies and LLPs." },
        { question: "Can I register for GST voluntarily even if I'm below the threshold?", answer: "Yes. Voluntary registration lets you claim Input Tax Credit and is often required by marketplaces (Amazon, Flipkart) and larger B2B customers who prefer to deal only with GST-registered vendors." },
        { question: "What if I need to fix a GST notice or dispute after registration?", answer: "Routine post-registration notices and amendments are handled here. For show-cause notices, appeals, or GST Appellate Tribunal matters, see our dedicated GST litigation service." },
      ]}
      relatedQuestions={[
        { question: "What are the ongoing GST return filing requirements after registration?", href: "/goods-and-services-tax" },
        { question: "What if I've already received a GST notice or demand?", href: "/gst-litigation-chennai" },
        { question: "Should I register my company before or after GST registration?", href: "/company-registration-chennai" },
      ]}
      relatedSlugs={["goods-and-services-tax", "gst-litigation-chennai", "company-registration-chennai"]}
    />
  );
}
