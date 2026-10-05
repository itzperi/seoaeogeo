import type { Metadata } from "next";
import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { SERVICES, SPECIALIST_SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import QualifyForm from "@/components/QualifyForm";
import TrackedAnchor from "@/components/TrackedAnchor";
import { CalcSticker, CoinSticker, Ribbon, StarSticker } from "@/components/Stickers";
import { ADDRESS_FULL, ADDRESS_SHORT, BOOKING_LINK, FOUNDER_CREDENTIALS, FOUNDER_NAME, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "CA Firm in Chennai & Anna Nagar | C S Rushil & Co." },
  description:
    "C S Rushil & Co. is a Chennai CA firm led by CA Rushil C S. Company incorporation, GST litigation, audit, and tax services in Anna Nagar, Chennai.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "C S Rushil & Co. — Chartered Accountants in Chennai",
    description:
      "Private limited company incorporation, GST litigation, audit, and tax services from a Chennai-based CA firm in Anna Nagar.",
    url: "/",
  },
};

const HOME_FAQS = [
  {
    question: "How do I find a chartered accountant near me in Chennai for company registration?",
    answer:
      "C S Rushil & Co. is a Chennai-based chartered accountancy firm in Anna Nagar led by CA Rushil C S (Certified FAFD, Start-up Mentor), handling private limited company incorporation, GST, audit, and ROC compliance for businesses across Chennai — Anna Nagar, T. Nagar, Vadapalani, Guindy, OMR, and beyond.",
  },
  {
    question: "Is there a chartered accountant near me in Anna Nagar, Chennai?",
    answer:
      "Yes — C S Rushil & Co. is based in Anna Nagar, Chennai, and serves clients across the city for company incorporation, GST, audit, direct tax, and ROC compliance. Book a free consultation to visit our office or meet virtually.",
  },
  {
    question: "Do you handle GST litigation and notice replies?",
    answer:
      "Yes. We represent clients in GST show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal (GSTAT) proceedings. See our dedicated GST litigation page for details.",
  },
  {
    question: "Where is your office located?",
    answer: `Our office is in ${ADDRESS_FULL}. Walk-ins are welcome during business hours, or book a free consultation call.`,
  },
];

const QUICK_LINKS = [
  ["Private Limited Company Incorporation", "private-limited-company-incorporation-chennai"],
  ["GST Litigation & Appeals", "gst-litigation-chennai"],
  ["Audit & Assurance", "audit-and-assurance"],
  ["Virtual CFO Services", "virtual-cfo-services"],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-carbon bg-sky-wash">
        <Ribbon className="pointer-events-none absolute -bottom-10 left-0 h-44 w-full md:h-64" />
        <CoinSticker className="pointer-events-none absolute left-[46%] top-8 hidden w-20 -rotate-12 lg:block" />
        <CalcSticker className="pointer-events-none absolute bottom-28 left-[40%] hidden w-14 rotate-[14deg] lg:block" />
        <StarSticker className="pointer-events-none absolute right-6 top-6 hidden w-14 rotate-12 md:block" />
        <div className="container-page relative grid grid-cols-1 gap-10 pb-32 pt-12 md:pb-48 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="sticker-tag bg-sunburst">CA Firm in {ADDRESS_SHORT}</p>
            <h1 className="mt-6 text-[52px] text-carbon sm:text-7xl lg:text-[104px]">
              CA firm in Chennai for company registration, GST, and audit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-carbon">
              C S Rushil &amp; Co. is a chartered accountant firm in {ADDRESS_SHORT},
              led by {FOUNDER_NAME} ({FOUNDER_CREDENTIALS}). Our 16-member team handles private limited company
              registration, GST litigation, statutory audit, and full ROC compliance for businesses across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedAnchor
                action="book"
                placement="home-hero"
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
              >
                Book a Free Consultation
              </TrackedAnchor>
              <TrackedAnchor
                action="whatsapp"
                placement="home-hero"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-mint-pop"
              >
                WhatsApp Us
              </TrackedAnchor>
              <TrackedAnchor
                action="call"
                placement="home-hero"
                href={`tel:${PHONE_TEL}`}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-lavender"
              >
                Call {PHONE_DISPLAY}
              </TrackedAnchor>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {QUICK_LINKS.map(([label, slug], i) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className={`sticker-tag transition-transform hover:-rotate-2 ${["bg-lavender", "bg-mint-pop", "bg-white", "bg-sunburst"][i % 4]}`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
              {[
                ["16", "Professionals", "bg-white"],
                ["8+", "Service lines", "bg-lavender"],
                ["Anna Nagar", "Chennai office", "bg-mint-pop"],
              ].map(([value, label, bg]) => (
                <div key={label} className={`rounded-[20px] border border-carbon p-4 ${bg}`}>
                  <dt className="text-3xl uppercase leading-none text-carbon" style={{ fontFamily: "var(--font-display)" }}>
                    {value}
                  </dt>
                  <dd className="mt-1 text-[11px] font-bold uppercase tracking-[0.032em] text-carbon">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="get-started" className="relative scroll-mt-24">
            <p className="sticker-tag mb-3 bg-white">Free case review · under a minute</p>
            <QualifyForm placement="home-hero" />
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="bg-paper py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-lavender">Our services</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            Full compliance lifecycle, one firm.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-mint-pop">Specialist services</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            For NRIs, overseas businesses and urgent notices.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Remote engagements for clients in the UAE, UK and USA, foreign companies setting up in Tamil Nadu,
            overseas accounting firms, and anyone holding a GST or income tax notice.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALIST_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-carbon bg-concrete-gray py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-white">Areas we serve</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            Chartered accountant services across Chennai.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Our office is in Anna Nagar, and we work with clients across the
            city — in person for those nearby, virtually for everyone else.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="rounded-navpills border border-ash bg-paper px-5 py-2.5 text-sm font-medium text-obsidian transition hover:bg-fog"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="sticker-tag bg-sunburst">About the firm</p>
            <h2 className="mt-3 text-3xl text-obsidian">
              Founded by {FOUNDER_NAME}
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              C S Rushil &amp; Co. is a dynamic, fast-growing chartered accountancy
              firm based in {ADDRESS_FULL}. Founded by {FOUNDER_NAME}
              ({FOUNDER_CREDENTIALS}), the firm is backed by a team of 16 skilled
              professionals delivering audit, taxation, risk, compliance, and
              management consulting services — combining technology-driven process
              with hands-on experience across sectors.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-block text-sm font-medium text-royal-violet underline underline-offset-4"
            >
              Read our full story →
            </Link>
          </div>
          <div className="rounded-cards bg-paper p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-medium text-obsidian">
              Chartered Accountant near me in Anna Nagar
            </h3>
            <p className="mt-3 text-sm text-slate">
              Searching for a chartered accountant near you in Anna Nagar or
              anywhere in Chennai? Our office is at {ADDRESS_FULL}, and we serve
              clients across the city in person and virtually.
            </p>
            <p className="mt-3 text-sm text-slate">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-obsidian">{PHONE_DISPLAY}</a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-buttons bg-obsidian px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Get directions &amp; contact details
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={HOME_FAQS} />
      <CTASection showForm={false} />
    </>
  );
}
