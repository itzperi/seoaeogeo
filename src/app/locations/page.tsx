import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import GoogleProfileStrip from "@/components/GoogleProfileStrip";
import CTASection from "@/components/CTASection";
import { AREAS } from "@/lib/areas";
import { LOCATION_PAGES } from "@/lib/location-pages";
import { TN_CITY_PAGES } from "@/lib/tn-cities";
import { ADDRESS_FULL, BUSINESS_HOURS, GBP_DIRECTIONS_URL, GBP_URL, PHONE_DISPLAY, PHONE_TEL, PLUS_CODE } from "@/lib/site";

// Locations hub (owner's brief, Task 5.1). Area links moved out of the header
// to here and the footer. One office only: every page listed is served from
// Anna Nagar, in person or online. Road distances are the OSRM estimates
// already published on each area page.

const TITLE = "Locations We Serve | CA Firm in Anna Nagar, Chennai";
const DESCRIPTION =
  "Every area and city C S Rushil & Co. serves from its only office in J-Block, Anna Nagar: Chennai neighbourhoods, Tamil Nadu cities, other metros and abroad.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Locations We Serve",
    description: DESCRIPTION,
    url: "/locations",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const NEAR_OFFICE: { slug: string; note: string }[] = [
  { slug: "chartered-accountant-anna-nagar-chennai", note: "Our office area; Anna Nagar Tower Park is about 1.7 km by road" },
  { slug: "chartered-accountant-mogappair-chennai", note: "Mogappair East is about 2.6 km by road" },
  { slug: "chartered-accountant-aminjikarai-chennai", note: "About 4.3 km by road over the Anna Arch flyover" },
  { slug: "chartered-accountant-kilpauk-chennai", note: "About 4.6 km by road" },
];

const ABROAD: { href: string; label: string }[] = [
  { href: "/nri-tax-services", label: "NRI tax services (all countries)" },
  { href: "/nri-tax-services-uae", label: "NRI tax for residents of the UAE" },
  { href: "/nri-tax-services-uk", label: "NRI tax for residents of the UK" },
  { href: "/nri-tax-services-usa", label: "NRI tax for residents of the USA" },
  { href: "/nri-tax-services-gulf", label: "NRI tax for residents of the Gulf" },
  { href: "/nri-tax-services-singapore", label: "NRI tax for residents of Singapore" },
  { href: "/india-subsidiary-for-us-companies", label: "India subsidiary for US companies" },
  { href: "/india-subsidiary-for-uk-companies", label: "India subsidiary for UK companies" },
  { href: "/india-subsidiary-for-singapore-companies", label: "India subsidiary for Singapore companies" },
  { href: "/india-subsidiary-for-uae-companies", label: "India subsidiary for UAE companies" },
  { href: "/outsourced-bookkeeping-usa", label: "Outsourced bookkeeping for US businesses" },
  { href: "/outsourced-bookkeeping-uk", label: "Outsourced bookkeeping for UK businesses" },
  { href: "/outsourced-bookkeeping-singapore", label: "Outsourced bookkeeping for Singapore companies" },
  { href: "/outsourced-bookkeeping-australia", label: "Outsourced bookkeeping for Australian businesses" },
  { href: "/outsourced-bookkeeping-uae", label: "Outsourced bookkeeping for UAE companies" },
];

const FAQS = [
  {
    question: "Does C S Rushil & Co. have offices outside Anna Nagar?",
    answer:
      "No. We have one office, at J-Block, 13th Main Road, Anna Nagar, Chennai. Clients near the office meet us there, and clients elsewhere in Chennai, Tamil Nadu, India and abroad work with us by phone, video call, email and WhatsApp. Every page on this list is served from that one office.",
  },
  {
    question: "Can I work with you if I live outside Chennai?",
    answer:
      "Yes. Company registration, GST, income tax and bookkeeping are filed online, so most of the work needs no visit. Documents are shared securely, signatures are done with a digital signature certificate or Aadhaar e-sign where the law allows, and meetings are held on video at a time that suits you.",
  },
  {
    question: "How do I reach your Anna Nagar office?",
    answer:
      "The office is on 13th Main Road in J-Block, Anna Nagar, a short walk from the Thirumangalam Metro station on the Green Line. Use the Get directions link on this page for the exact pin. Walk-ins are welcome, and booking a slot saves waiting time.",
  },
];

const LIST = "mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3";
const LINK = "text-sm font-medium text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

export default function LocationsPage() {
  const near = NEAR_OFFICE.map((n) => ({ ...n, area: AREAS.find((a) => a.slug === n.slug) })).filter((n) => n.area);
  const nearSlugs = new Set(NEAR_OFFICE.map((n) => n.slug));
  const otherAreas = AREAS.filter((a) => !nearSlugs.has(a.slug));
  const itCities = LOCATION_PAGES.filter((l) => l.service === "Income tax consultation");
  const gstCities = LOCATION_PAGES.filter((l) => l.service === "GST litigation");

  return (
    <>
      <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />
      <PageHero
        eyebrow="Locations · One office in Anna Nagar"
        h1="Locations We Serve from Anna Nagar, Chennai"
        subhead="One office in J-Block, Anna Nagar. Clients nearby meet us in person; everyone else works with us online."
        lead="C S Rushil & Co. is a chartered accountancy firm with one office, in J-Block, Anna Nagar, Chennai. We serve clients across Chennai, the rest of Tamil Nadu, other Indian cities and abroad from that office: in person for those nearby, and by phone, video and email for everyone else."
        reviewedPath="/locations"
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">Where is our office?</h2>
          <address className="mt-4 max-w-3xl not-italic leading-relaxed text-slate">
            <strong className="text-obsidian">C S Rushil &amp; Co., Chartered Accountants</strong>
            <br />
            {ADDRESS_FULL}
            <br />
            Plus code: {PLUS_CODE}
            <br />
            <a href={`tel:${PHONE_TEL}`} className="underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            {" · "}
            {BUSINESS_HOURS.map((h) => `${h.days}: ${h.hours}`).join(" · ")}
          </address>
          <p className={P}>
            This is our only office; we have no branches. The nearest Metro station is Thirumangalam on the Green Line.{" "}
            <a href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
              Get directions
            </a>{" "}
            or{" "}
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
              see our Google profile
            </a>
            .
          </p>

          <h2 className={H2}>Which neighbourhoods are closest to the office?</h2>
          <p className={P}>
            These areas are a short drive from J-Block. The distances are clear-road route estimates from our office
            pin; peak traffic takes longer. Each page covers the businesses, landmarks and compliance questions of that
            area.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {near.map((n) => (
              <li key={n.slug} className="rounded-cards border border-ash bg-white p-4">
                <Link href={`/${n.slug}`} className={LINK}>
                  Chartered accountant in {n.area!.name}
                </Link>
                <p className="mt-1 text-sm text-slate">{n.note}</p>
              </li>
            ))}
          </ul>

          <h2 className={H2}>Which other Chennai areas do we serve?</h2>
          <p className={P}>
            Clients in these areas can visit the Anna Nagar office or work with us online. Each page explains how we
            work with businesses and families in that part of the city.
          </p>
          <ul className={LIST}>
            {otherAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className={LINK}>
                  Chartered accountant in {a.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className={H2}>Where in Tamil Nadu do we register companies?</h2>
          <p className={P}>
            Company and LLP registration is filed online with the Ministry of Corporate Affairs, so we incorporate
            companies for founders anywhere in Tamil Nadu. These pages cover the local ROC jurisdiction and the
            practical points for each city. The Chennai page is{" "}
            <Link href="/company-registration-chennai" className={LINK}>
              company registration in Chennai
            </Link>
            .
          </p>
          <ul className={LIST}>
            {TN_CITY_PAGES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className={LINK}>
                  Company registration in {c.city}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className={H2}>Which cities do we serve for income tax?</h2>
          <p className={P}>
            Income tax returns, notices and capital gains planning are handled online for individuals and families in
            other Tamil Nadu cities and Indian metros. The main page is{" "}
            <Link href="/income-tax-consultant-for-hni-chennai" className={LINK}>
              income tax for HNIs in Chennai
            </Link>
            .
          </p>
          <ul className={LIST}>
            {itCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className={LINK}>
                  Income tax consultant in {c.place}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className={H2}>Where do we handle GST litigation?</h2>
          <p className={P}>
            GST appeals are decided first by the Appellate Authority and then by the GST Appellate Tribunal, and the
            paperwork is filed online, so we act for businesses across Tamil Nadu. The main page is{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>
              GST litigation and appeals in Chennai
            </Link>
            .
          </p>
          <ul className={LIST}>
            {gstCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className={LINK}>
                  GST litigation in {c.place}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className={H2}>Do we work with clients outside India?</h2>
          <p className={P}>
            Yes. NRIs, foreign companies setting up in India and overseas businesses that outsource their books work
            with us online from Chennai. For businesses abroad, our role covers the Indian side or the bookkeeping;
            filings in your own country stay with your local tax agent or accountant.
          </p>
          <ul className={LIST}>
            {ABROAD.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={LINK}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <GoogleProfileStrip />
      <CTASection />
    </>
  );
}
