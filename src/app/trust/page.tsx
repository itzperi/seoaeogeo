import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Trust & NGO Registration Services in Chennai" },
  description:
    "Formation and compliance for trusts, societies, and Section 8 companies in Chennai, including 12A/80G registration support for tax-exempt status.",
  alternates: { canonical: "/trust" },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/trust`}
      serviceType="NGO & Trust Compliance"
      crumbLabel="Trust & NGO Registration"
      crumbHref="/trust"
      eyebrow="NGO & Trust · Chennai"
      h1="Trust & NGO Registration"
      subhead="Formation and compliance for trusts, societies, and Section 8 companies — including 12A/80G registration to unlock tax-exempt status and donor benefits."
      introHeading="What is trust/NGO registration?"
      intro="Non-profit entities in India can be structured as a Trust, Society, or Section 8 Company, each with different governance and compliance requirements. Registering under Section 12A grants the entity income tax exemption, while 80G registration allows donors to claim a tax deduction on their contributions — both are essential for credible fundraising."
      citation={{ label: "Income Tax Department — 12A/80G Registration", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="Our trust & NGO services"
      subServices={[
        { name: "Trust Deed Drafting & Registration", text: "Drafting the trust deed and registering with the local Sub-Registrar." },
        { name: "Society Registration", text: "Registration under the Tamil Nadu Societies Registration Act." },
        { name: "Section 8 Company Registration", text: "Incorporation of non-profit companies under the Companies Act." },
        { name: "12A & 80G Registration", text: "Income tax exemption and donor deduction registration with the Income Tax Department." },
        { name: "FCRA Advisory", text: "Guidance on Foreign Contribution Regulation Act compliance for entities receiving foreign donations." },
        { name: "Annual NGO Compliance", text: "Annual return filing, audit, and renewal support to maintain exempt status." },
      ]}
      faqs={[
        { question: "Which structure is best — Trust, Society, or Section 8 Company?", answer: "Trusts suit family or single-founder charitable initiatives; Societies suit membership-based organisations; Section 8 Companies suit NGOs wanting a corporate governance structure and easier access to institutional funding. We help you choose based on your goals." },
        { question: "What is the difference between 12A and 80G registration?", answer: "12A registration exempts the NGO's own income from tax; 80G registration allows donors to claim a tax deduction for their donations to the NGO. Most NGOs need both." },
        { question: "Do you help with FCRA registration for foreign donations?", answer: "We provide advisory on FCRA eligibility and compliance requirements; FCRA registration itself involves a separate government approval process we can guide you through." },
        { question: "Is annual audit mandatory for NGOs?", answer: "Yes — Trusts, Societies, and Section 8 Companies above prescribed income thresholds must have their accounts audited annually to retain exempt status." },
      ]}
      relatedQuestions={[
        { question: "Should our NGO be a Trust, Society, or Section 8 Company?", href: "/formation-of-business-entity" },
        { question: "How does 12A exemption affect our income tax filing?", href: "/direct-tax" },
        { question: "Does a Section 8 Company have ROC filing requirements too?", href: "/roc-compliances" },
      ]}
      relatedSlugs={["formation-of-business-entity", "direct-tax", "roc-compliances"]}
    />
  );
}
