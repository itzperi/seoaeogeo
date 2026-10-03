import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "NRI Tax Services for Clients in the USA & UK" },
  description:
    "Indian tax filing, DTAA benefit claims, and repatriation compliance for NRI clients in the United States and United Kingdom — handled fully remotely.",
  alternates: { canonical: "/nri-tax-services-usa-uk" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "NRI Tax Services for Clients in the USA & UK",
    description: "Indian tax filing and DTAA compliance for NRI clients in the US and UK, handled remotely.",
    url: "/nri-tax-services-usa-uk",
  },
};

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/nri-tax-services-usa-uk`}
      serviceType="NRI Tax Advisory"
      crumbLabel="NRI Tax Services — USA & UK"
      crumbHref="/nri-tax-services-usa-uk"
      eyebrow="NRI Clients · USA & UK"
      h1="Chartered Accountant for NRI Clients in the USA & UK"
      subhead="Indian tax filing, DTAA benefit claims, and repatriation compliance for NRI clients based in the United States and United Kingdom — the entire engagement handled remotely, with no in-person visit required."
      introHeading="Why NRIs in the US and UK still need an Indian CA"
      intro="Non-resident status in India doesn't end your Indian tax obligations if you have income sourced there — rental income from property, capital gains from selling assets, interest on NRO accounts, or income from investments held in India. NRIs based in the US and UK also deal with a second layer most resident taxpayers don't: reconciling Indian tax filings against US or UK tax residency rules and claiming the correct relief under the applicable Double Taxation Avoidance Agreement (DTAA), so the same income isn't taxed twice."
      citation={{ label: "Income Tax Department — NRI Taxation", href: "https://www.incometax.gov.in/" }}
      subServicesHeading="What we handle for US and UK-based NRI clients"
      subServices={[
        { name: "Indian-Source Income Tax Filing", text: "ITR filing covering rental income, capital gains, interest income, and any other India-sourced earnings for the financial year." },
        { name: "DTAA Benefit Claims", text: "Applying the India-US or India-UK DTAA correctly to claim foreign tax credit or exemption, avoiding double taxation on the same income." },
        { name: "Capital Gains on Property or Investment Sale", text: "Calculating and reporting capital gains on Indian property, mutual funds, or shares sold while resident in the US or UK, including TDS considerations." },
        { name: "Repatriation Compliance", text: "Form 15CA/15CB certification and related compliance for repatriating sale proceeds or income out of India." },
        { name: "NRO/NRE Account Tax Treatment", text: "Correct tax treatment and reporting of interest earned on NRO and NRE accounts, which are treated differently under Indian tax law." },
        { name: "Advance Tax Planning", text: "Quarterly advance tax estimation for NRI clients with recurring Indian-source income, to avoid interest charges from a lump-sum settlement at filing time." },
      ]}
      faqs={[
        { question: "Do I need to file an Indian tax return if I live in the US or UK?", answer: "If you have any India-sourced income — rental income, capital gains, interest on NRO accounts, or similar — you generally have a filing obligation in India regardless of your US or UK tax residency status. We assess your specific situation to confirm what's required." },
        { question: "How does the DTAA actually help me avoid double taxation?", answer: "The India-US and India-UK Double Taxation Avoidance Agreements let you claim a credit in your country of residence for tax already paid in India (or vice versa, depending on the income type), so the same income isn't taxed twice. Applying this correctly requires matching the right article of the treaty to your specific income type." },
        { question: "Can the entire process be handled without me visiting India?", answer: "Yes — document sharing, video consultations, digital signatures, and e-filing mean the entire engagement, from initial documents to final filing, can be completed without an in-person visit, which is how we handle the large majority of our US and UK-based NRI clients." },
        { question: "Do you help with repatriating money out of India after selling property?", answer: "Yes — Form 15CA/15CB certification, which is required before remitting sale proceeds or other income out of India, is a routine part of our NRI service. This typically needs to happen before the outward remittance, not after." },
        { question: "What time zone do consultations happen in?", answer: "We schedule video consultations around US and UK time zones for NRI clients — this is a routine accommodation, not something that needs to be specially requested." },
      ]}
      relatedQuestions={[
        { question: "What does DTAA-related ITR filing actually involve?", href: "/income-tax-return-filing-chennai" },
        { question: "How is capital gains tax calculated on property sold from abroad?", href: "/direct-tax" },
        { question: "Do you handle bookkeeping for NRI-owned property or investments?", href: "/bookkeeping-services-chennai" },
      ]}
      relatedSlugs={["income-tax-return-filing-chennai", "direct-tax", "bookkeeping-services-chennai"]}
    />
  );
}
