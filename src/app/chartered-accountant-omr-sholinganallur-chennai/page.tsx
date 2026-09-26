import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-omr-sholinganallur-chennai`;

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in OMR / Sholinganallur, Chennai" },
  description:
    "Company incorporation, GST, payroll TDS, and virtual CFO services for IT and startup businesses along Chennai's OMR IT corridor and Sholinganallur.",
  alternates: { canonical: "/chartered-accountant-omr-sholinganallur-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "Chartered Accountant in OMR / Sholinganallur, Chennai",
    description: "CA services for IT companies and startups along the OMR IT corridor.",
    url: "/chartered-accountant-omr-sholinganallur-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="OMR / Sholinganallur"
      crumbHref="/chartered-accountant-omr-sholinganallur-chennai"
      h1="Chartered Accountant in OMR / Sholinganallur, Chennai"
      subhead="Incorporation, GST, payroll compliance, and virtual CFO support built for the IT and startup businesses concentrated along Chennai's IT corridor."
      distanceNote="OMR/Sholinganallur is around 20-22 km from our Anna Nagar office. Given the distance and the nature of IT-sector engagements, most OMR clients work with us virtually — document sharing, video consultations, and digital filing — with in-person meetings scheduled as needed rather than routinely."
      localContext={[
        "Old Mahabalipuram Road (OMR) is Chennai's primary IT corridor, developed specifically to house the city's technology sector — it's home to major IT parks including SIPCOT IT Park and TIDEL Park, with large employers like TCS, Accenture, Cognizant, and a growing base of mid-size IT services firms and startups clustered around Sholinganallur, Siruseri, and the surrounding stretch.",
        "Businesses here have a distinct compliance profile compared to a trading or retail area: software/IT services businesses dealing with export invoicing and LUT filings under GST, companies managing employee stock option-adjacent payroll and TDS compliance at scale, and a steady stream of newly incorporated startups needing SPICe+ filing, founder equity structuring at incorporation, and early-stage GST registration.",
        "For growth-stage companies along OMR, the recurring need tends to shift from one-time incorporation work toward ongoing virtual CFO support — MIS reporting for investor updates, runway/burn tracking, and getting board-ready financials in order ahead of a funding round.",
      ]}
      relevantServices={[
        { slug: "private-limited-company-incorporation-chennai", why: "SPICe+ incorporation for OMR-based startups, including founder equity structuring at formation." },
        { slug: "virtual-cfo-services", why: "MIS reporting, runway tracking, and investor-ready financials for growth-stage IT and startup businesses." },
        { slug: "goods-and-services-tax", why: "GST registration, export invoicing, and LUT applications for IT/software services companies." },
        { slug: "transfer-pricing-audit", why: "Form 3CEB and arm's-length pricing documentation for OMR-based IT subsidiaries transacting with a foreign parent or group companies." },
        { slug: "bookkeeping-services-chennai", why: "Investor-ready MIS, foreign-subsidiary bookkeeping, and cloud accounting for OMR's IT and startup businesses." },
        { slug: "payroll-services-chennai", why: "Payroll and ESOP taxation for OMR's growth-stage startups, including pre-entity payroll for foreign companies setting up here." },
      ]}
      faqs={[
        { question: "Do you work with IT and software services companies specifically?", answer: "Yes — we handle incorporation, GST (including export invoicing and LUT filings), payroll TDS, and virtual CFO support for IT services firms and startups along the OMR corridor." },
        { question: "Can everything be handled remotely, or do we need to meet in person?", answer: "Most OMR engagements are handled fully remotely — document sharing, video consultations, and digital filing — given the distance from our Anna Nagar office. In-person meetings can be scheduled when genuinely needed." },
        { question: "Do you help with LUT filing for export of IT services?", answer: "Yes — Letter of Undertaking filing so you can invoice international clients without upfront IGST payment is a routine part of our GST services for OMR-based IT and software companies." },
      ]}
      furtherReading={[
        { slug: "virtual-cfo-omr-startups", title: "Virtual CFO Support for OMR's Growth-Stage Startups" },
        { slug: "transfer-pricing-omr-subsidiaries", title: "The Transfer Pricing Blind Spot for OMR's Indian Subsidiaries" },
        { slug: "payroll-omr-startup-esop", title: "Issuing ESOPs at Your OMR Startup? Payroll Has to Catch Up Before Exercise, Not After" },
      ]}
    />
  );
}
