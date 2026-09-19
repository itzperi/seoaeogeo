import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/chartered-accountant-mylapore-chennai`;

export const metadata: Metadata = {
  title: "Chartered Accountant in Mylapore, Chennai",
  description:
    "Trust and NGO registration, income tax filing, and GST services for Mylapore's cultural institutions, professionals, and long-established traders in Chennai.",
  alternates: { canonical: "/chartered-accountant-mylapore-chennai" },
  openGraph: {
    title: "Chartered Accountant in Mylapore, Chennai",
    description: "Trust/NGO registration and tax services for Mylapore's institutions, professionals, and traders.",
    url: "/chartered-accountant-mylapore-chennai",
  },
};

export default function Page() {
  return (
    <AreaPageTemplate
      pageUrl={PAGE_URL}
      locality="Mylapore"
      crumbHref="/chartered-accountant-mylapore-chennai"
      h1="Chartered Accountant in Mylapore, Chennai"
      subhead="Trust and NGO registration, income tax filing, and GST support for Mylapore's cultural institutions, independent professionals, and long-established traders."
      distanceNote="Mylapore is on the opposite side of the city from our Anna Nagar office, so we serve Mylapore clients mainly through virtual consultations and digital filing, with in-person meetings arranged when needed. We do not operate a separate Mylapore office."
      localContext={[
        "Mylapore is one of Chennai's oldest neighbourhoods and its cultural heart — home to the Kapaleeshwarar Temple, San Thome Cathedral, and a dense concentration of cultural, religious, and educational institutions alongside a vibrant arts scene and long-established local trading community.",
        "That institutional density gives Mylapore a genuinely distinct compliance profile: trust, society, and Section 8 company registration — including 12A/80G exemption support — is a recurring, meaningful need given the number of temples, cultural bodies, and charitable institutions based in and around the area.",
        "Alongside institutional work, Mylapore's long-established traders and independent professionals (many family-run businesses spanning generations) most often need straightforward GST compliance and individual income tax filing, generally with a lower compliance-complexity profile than a fast-changing commercial district.",
      ]}
      relevantServices={[
        { slug: "trust", why: "Trust, society, and 12A/80G registration for Mylapore's cultural, religious, and charitable institutions." },
        { slug: "income-tax-return-filing-chennai", why: "Individual income tax filing for Mylapore's professionals and long-established trading families." },
        { slug: "goods-and-services-tax", why: "GST registration and return filing for local traders and small businesses." },
      ]}
      faqs={[
        { question: "Do you register temples and cultural trusts for tax exemption?", answer: "Yes — trust, society, and Section 8 company registration, including 12A registration (income tax exemption) and 80G registration (donor tax deduction), is a core service we provide, and Mylapore's concentration of cultural and religious institutions makes this a regular part of our work in the area." },
        { question: "Do you have an office in Mylapore?", answer: "No — we operate solely from Anna Nagar and serve Mylapore clients from that one office, mainly through virtual consultations given the distance." },
        { question: "Can a long-established family trading business in Mylapore get help transitioning to a formal company structure?", answer: "Yes — we assist with converting proprietorships and partnership firms into Private Limited Companies or LLPs, including asset transfer and re-registration of licenses, for businesses ready to formalise their structure." },
      ]}
    />
  );
}
