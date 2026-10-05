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
      introHeading="What is trust and NGO registration in Chennai?"
      intro="Non-profit entities in India can be structured as a Trust, Society, or Section 8 Company, each with different governance and compliance requirements. Registering under Section 12A grants the entity income tax exemption, while 80G registration allows donors to claim a tax deduction on their contributions — both are essential for credible fundraising. From 1 April 2026, these registrations are granted under Section 332 (registration) and Section 354 (donor-deduction approval) of the Income-tax Act, 2025."
      citation={{ label: "Income Tax Department — Form 105 (registration under Section 332 / approval under Section 354)", href: "https://www.incometax.gov.in/iec/foportal/newformpage/forms/Form%20105%20&%20107-UM" }}
      howTo={{
        heading: "How do you get 12A and 80G registration for a Trust, Society, or Section 8 Company?",
        steps: [
          { name: "Entity formation first", text: "The Trust deed, Society, or Section 8 Company must already be registered — 12A/80G applications are filed against an existing, formed entity, not before." },
          { name: "12A application", text: "An application is filed with the Income Tax Department for 12A registration, exempting the NGO's own income from tax, along with governing documents and activity details." },
          { name: "80G application", text: "A separate application is filed for 80G registration, which lets donors claim a tax deduction on contributions — most NGOs apply for both together." },
          { name: "Provisional vs regular registration", text: "New NGOs typically receive provisional registration first, valid for a limited period, before applying for regular registration once activities are underway." },
          { name: "Periodic renewal", text: "Both 12A and 80G registration require renewal within the prescribed validity period (regular registration runs for 5 or 10 years, depending on the conditions in Section 332(5)) — missing this lapses the exempt status rather than renewing automatically." },
        ],
      }}
      subServicesHeading="Which trust and NGO services do we provide?"
      subServices={[
        { name: "Trust Deed Drafting & Registration", text: "Drafting the trust deed and registering with the local Sub-Registrar." },
        { name: "Society Registration", text: "Registration under the Tamil Nadu Societies Registration Act." },
        { name: "Section 8 Company Registration", text: "Incorporation of non-profit companies under the Companies Act." },
        { name: "12A & 80G Registration", text: "Income tax exemption and donor deduction registration with the Income Tax Department." },
        { name: "FCRA Advisory", text: "Guidance on Foreign Contribution Regulation Act compliance for entities receiving foreign donations." },
        { name: "Annual NGO Compliance", text: "Annual return filing, audit, and renewal support to maintain exempt status." },
      ]}
      faqs={[
        { question: "Should we register as a Trust, Society, or Section 8 Company?", answer: "Trusts suit family or single-founder charitable initiatives; Societies suit membership-based organisations; Section 8 Companies suit NGOs wanting a corporate governance structure and easier access to institutional funding. We help you choose based on your goals." },
        { question: "What is the difference between 12A and 80G registration?", answer: "12A registration exempts the NGO's own income from tax; 80G registration allows donors to claim a tax deduction for their donations to the NGO. Most NGOs need both. From 1 April 2026, they are granted under Sections 332 and 354 of the Income-tax Act, 2025." },
        { question: "Do you help with FCRA registration for foreign donations?", answer: "We provide advisory on FCRA eligibility and compliance requirements; FCRA registration itself involves a separate government approval process we can guide you through." },
        { question: "Is annual audit mandatory for NGOs?", answer: "Yes, in most cases. A Section 8 Company must have its accounts audited every year under the Companies Act, whatever its income. A Trust or Society registered for income tax exemption must have its accounts audited by a Chartered Accountant when its total income, before claiming the exemption, exceeds the maximum amount not chargeable to tax." },
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
