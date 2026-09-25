import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-t-nagar-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in T Nagar, Chennai" },
  description:
    "GST, tax, and audit services for T Nagar traders and retail businesses — from a Chennai chartered accountancy firm familiar with high-volume retail compliance.",
  alternates: { canonical: "/chartered-accountant-t-nagar-chennai" },
  openGraph: {
    title: "Chartered Accountant in T Nagar, Chennai",
    description: "GST, tax, and audit services tailored to T Nagar's retail and trading businesses.",
    url: "/chartered-accountant-t-nagar-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="T Nagar"
      crumbHref="/chartered-accountant-t-nagar-chennai"
      h1="Chartered Accountant in T Nagar, Chennai"
      subhead="Retail and trading-focused compliance support for one of India's busiest commercial shopping districts."
      distanceNote="T Nagar is roughly 8-9 km from our Anna Nagar office — a short drive for in-person meetings, with most T Nagar engagements also handled efficiently over calls and document sharing given the area's business pace."
      localContext={[
        "T Nagar is one of India's busiest commercial shopping districts, built around Ranganathan Street, Usman Road, and Pondy Bazaar — a dense concentration of silk saree stores, gold jewellery showrooms, textile traders, and everyday retail that draws shoppers from across Tamil Nadu and beyond.",
        "That retail density brings a specific compliance profile: high daily transaction volumes, significant cash and card mix, seasonal spikes around festivals and wedding season, and GST considerations specific to jewellery (with its own valuation and ITC rules) and textiles. Traders here often need GST return filing that keeps pace with genuinely high transaction counts, not a once-a-month afterthought.",
        "Many T Nagar businesses are also family-run trading concerns that have operated for years without a formal Private Limited or LLP structure — for these, our focus is usually GST compliance accuracy and tax audit applicability once turnover crosses the Section 44AB threshold, rather than a full corporate restructuring conversation.",
      ]}
      relevantServices={[
        { slug: "goods-and-services-tax", why: "High-volume GST return filing built for retail and trading transaction patterns." },
        { slug: "tax-audit-chennai", why: "Section 44AB tax audit for traders crossing the turnover threshold — common among established T Nagar businesses." },
        { slug: "gst-litigation-chennai", why: "Support if a GST notice or ITC mismatch arises from supplier non-compliance, a frequent issue in high-volume retail chains." },
      ]}
      faqs={[
        { question: "Do you handle GST for jewellery and textile retailers specifically?", answer: "Yes — we work with T Nagar retail and trading businesses across jewellery, textiles, and general retail, including the specific valuation and Input Tax Credit considerations that apply to high-value goods like gold." },
        { question: "Can you manage GST returns for a business with very high daily transaction volumes?", answer: "Yes, this is a routine part of serving T Nagar clients — we structure the return-filing process around your actual transaction volume and point-of-sale data rather than a generic monthly template." },
        { question: "Is a tax audit mandatory for my T Nagar retail business?", answer: "It depends on your turnover and the proportion of cash transactions — see our tax audit page for the current thresholds, or book a free consultation and we'll assess your specific position." },
      ]}
    />
  );
}
