import TamilSummaryBox from "@/components/TamilSummaryBox";
import type { Metadata } from "next";
import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { getService, type ServiceSummary } from "@/lib/services";
import ContentAttribution from "@/components/ContentAttribution";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import EnquiryCard from "@/components/EnquiryCard";
import { EnquireButton } from "@/components/WhatsAppEnquiry";
import TrackedAnchor from "@/components/TrackedAnchor";
import StageMatrix from "@/components/StageMatrix";
import { JsonLd, moneyPageGraph } from "@/lib/schema";
import { CalcSticker, CoinSticker, Ribbon, StarSticker } from "@/components/Stickers";
import { PAGE_DATES } from "@/lib/page-dates";
import {
  ADDRESS_FULL,
  ADDRESS_SHORT,
  BOOKING_LINK,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  FIRM_REGISTRATION_NO,
  FOUNDER_CREDENTIALS,
  FOUNDER_LINKEDIN,
  FOUNDER_NAME,
  GBP_URL,
  LANGUAGES_SPOKEN,
  ICAI_MEMBERSHIP_NO,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  TEAM_SIZE,
  WHATSAPP_LINK,
  YEAR_FOUNDED,
} from "@/lib/site";

// The homepage is the one canonical page for "CA firm in Chennai" /
// "Chartered Accountants in Chennai". The old /chartered-accountant-chennai
// hub 301s here; its area list lives in the #areas section below.
const TITLE = "CA Firm in Chennai | C S Rushil & Co. Chartered Accountants";
const DESCRIPTION =
  "CA firm in Chennai (Anna Nagar) led by CA Rushil C S: Pvt Ltd company registration, GST litigation, virtual CFO, audit and income tax. Book a consultation.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/", types: { "text/markdown": "/md/index" } },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title: "CA Firm in Chennai: C S Rushil & Co. Chartered Accountants",
    description: DESCRIPTION,
    url: "/",
  },
};

const TRUST_FACTS = [
  ["Led by", `${FOUNDER_NAME}, practising Chartered Accountant (ICAI)`],
  ["Credentials", "ICAI Certificate in Forensic Accounting and Fraud Detection (FAFD); Start-up Mentor"],
  ["Team", `${TEAM_SIZE} professionals`],
  ["Office", ADDRESS_FULL],
  ["Established", `${YEAR_FOUNDED}`],
  ...(ICAI_MEMBERSHIP_NO ? [["ICAI membership no.", ICAI_MEMBERSHIP_NO]] : []),
  ...(FIRM_REGISTRATION_NO ? [["ICAI firm registration no.", FIRM_REGISTRATION_NO]] : []),
];

const HOME_FAQS = [
  {
    question: "What services does a CA firm in Chennai provide?",
    answer: "C S Rushil & Co. handles company registration, GST registration and returns, income tax, statutory and tax audit, ROC compliance and virtual CFO work from Anna Nagar, Chennai. The appropriate service depends on your entity, transactions and deadlines; the scope is agreed before an engagement begins.",
  },
  {
    question: "Is an auditor the same as a chartered accountant in Chennai?",
    answer: "In Tamil Nadu, people often call any chartered accountant their “auditor”, and use the word for tax, GST and accounts work as well as audits. Strictly, only a chartered accountant in practice can be appointed as a company's statutory auditor (Section 141, Companies Act, 2013). C S Rushil & Co. handles both the audits and the income tax, GST and company work people usually expect from their auditor.",
  },
  {
    question: "How do I verify a Chartered Accountant in India?",
    answer: "Ask for the CA's ICAI membership number, Certificate of Practice details and the firm's registration number. Use ICAI's Trace a Member service to check the member's identity, and contact ICAI for firm or practice-status verification. A professional biography or online review is not a substitute for these checks.",
  },
  {
    question: "How do I find a chartered accountant near me in Chennai for company registration?",
    answer:
      "C S Rushil & Co. is a Chennai-based chartered accountancy firm in Anna Nagar led by CA Rushil C S (Certified FAFD, Start-up Mentor), handling private limited company incorporation, GST, audit, and ROC compliance for businesses across Chennai, including Anna Nagar, T. Nagar, Nungambakkam, Guindy, OMR, and beyond. Our only office is in Anna Nagar; clients elsewhere are served online or by appointment at that office.",
  },
  {
    question: "Is there a chartered accountant near me in Anna Nagar, Chennai?",
    answer:
      "Yes. C S Rushil & Co. is based in Anna Nagar, Chennai, and serves clients across the city for company incorporation, GST, audit, direct tax, and ROC compliance. Book a consultation to visit our office or meet virtually.",
  },
  {
    question: "Do you handle GST litigation and notice replies?",
    answer:
      "Yes. We represent clients in GST show-cause notice replies, departmental audits, appeals before the Appellate Authority, and GST Appellate Tribunal (GSTAT) proceedings. See our dedicated GST litigation page for details.",
  },
  {
    question: "Where is your office located?",
    answer: `Our office is at ${ADDRESS_FULL}, open Monday to Saturday, 9:30 AM to 6:30 PM. Book a consultation first so the right team member is available; same-day visits are often possible.`,
  },
];

// Neutral checklist for choosing any CA firm. Each item states a firm fact
// only where it is verifiably true — no response-time or fee commitments.
const CHOOSING_CRITERIA: { title: string; text: string; firmFact?: string }[] = [
  {
    title: "ICAI membership you can verify",
    text: "Every practising chartered accountant holds an ICAI membership number, and every CA firm has a firm registration number (FRN). Ask for both and check them on icai.org before you sign up.",
    firmFact:
      ICAI_MEMBERSHIP_NO && FIRM_REGISTRATION_NO
        ? `${FOUNDER_NAME}: ICAI membership no. ${ICAI_MEMBERSHIP_NO}. Firm registration no. ${FIRM_REGISTRATION_NO}.`
        : ICAI_MEMBERSHIP_NO
          ? `${FOUNDER_NAME}: ICAI membership no. ${ICAI_MEMBERSHIP_NO}.`
          : FIRM_REGISTRATION_NO
            ? `Firm registration no. ${FIRM_REGISTRATION_NO}.`
            : undefined,
  },
  {
    title: "An itemised quote",
    text: "A clear quote separates government fees (MCA filing fees, stamp duty, DSC charges) from the firm's professional fees, so you can see exactly what you are paying for.",
  },
  {
    title: "A physical office you can visit",
    text: "Being able to meet the team, drop off documents and sign papers in person makes registrations and notices easier to manage.",
    firmFact: `Our office is at ${ADDRESS_FULL}.`,
  },
  {
    title: "Clear response times",
    text: "Ask every firm you are considering: how quickly will you reply to a query, and who will be my point of contact for filings and notices?",
  },
  {
    title: "Online service across Tamil Nadu",
    text: "Most GST, income tax and ROC work is filed online, so the firm should be able to work with you without repeated office visits.",
    firmFact: "We serve clients online across Tamil Nadu, and NRIs abroad, as well as in person in Chennai.",
  },
];

// Priority hubs own broad service intent; each hub links to specialist pages.
const HOME_SERVICES = [
  "company-registration-chennai", "goods-and-services-tax", "direct-tax",
  "audit-and-assurance", "virtual-cfo-services", "roc-compliances",
  "nri-tax-services", "outsourced-bookkeeping-services",
].map(getService).filter((s): s is ServiceSummary => Boolean(s));

function ServiceGroupCard({ label, services }: { label: string; services: ServiceSummary[] }) {
  return (
    <div className="flex flex-col rounded-cards border border-carbon bg-white p-7">
      <h3 className="text-2xl text-obsidian md:text-3xl">{label}</h3>
      <ul className="mt-4 flex-1 space-y-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/${service.slug}`} className="font-medium text-carbon underline underline-offset-2 hover:text-royal-violet">
              {service.name}
            </Link>
            <p className="text-sm leading-relaxed text-slate">{service.shortDescription}</p>
          </li>
        ))}
      </ul>
      <EnquireButton
        service={label}
        placement="home-service-group"
        className="mt-5 inline-flex min-h-[44px] items-center justify-center self-start rounded-full border border-carbon bg-[#25D366] px-4 text-xs font-bold uppercase tracking-[0.032em] text-carbon"
      >
        Enquire on WhatsApp
      </EnquireButton>
    </div>
  );
}

const QUICK_LINKS = [
  ["Private Limited Company Registration in Chennai", "private-limited-company-incorporation-chennai"],
  ["Company Registration in Chennai", "company-registration-chennai"],
  ["GST Consultants in Chennai", "goods-and-services-tax"],
  ["Tax Consultant in Chennai", "direct-tax"],
  ["Auditors in Chennai", "audit-and-assurance"],
  ["Virtual CFO in Chennai", "virtual-cfo-services"],
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={moneyPageGraph({
          path: "/",
          name: TITLE,
          description: DESCRIPTION,
          dateModified: PAGE_DATES["/"],
          service: {
            name: "Chartered accountancy services in Chennai",
            serviceType: "Chartered Accountancy Services",
            description:
              "Company and LLP registration, GST and GST litigation, income tax, statutory and tax audit, ROC compliance and virtual CFO services from a CA firm in Anna Nagar, Chennai.",
            offers: HOME_SERVICES.map((s) => ({ name: s.name, url: `${SITE_URL}/${s.slug}` })),
          },
          faqs: HOME_FAQS,
          crumbs: [],
          speakable: ["h1", "#lead-answer", "#ca-firm-answer"],
        })}
      />
      <section className="relative overflow-hidden border-b border-carbon bg-sky-wash">
        <Ribbon className="pointer-events-none absolute -bottom-10 left-0 h-44 w-full md:h-64" />
        <CoinSticker className="pointer-events-none absolute left-[46%] top-8 hidden w-20 -rotate-12 lg:block" />
        <CalcSticker className="pointer-events-none absolute bottom-28 left-[40%] hidden w-14 rotate-[14deg] lg:block" />
        <StarSticker className="pointer-events-none absolute right-6 top-6 hidden w-14 rotate-12 md:block" />
        <div className="container-page relative grid grid-cols-1 gap-10 pb-32 pt-12 md:pb-48 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="sticker-tag bg-sunburst">Chartered Accountants · {ADDRESS_SHORT}</p>
            <h1 className="mt-6 text-[52px] text-carbon sm:text-7xl lg:text-[96px]">
              CA Firm in Chennai: Chartered Accountants for Tax, GST, Audit &amp; Incorporation
            </h1>
            <p id="lead-answer" className="mt-6 max-w-xl text-lg leading-relaxed text-carbon">
              {BUSINESS_NAME} is a <strong>CA firm in Chennai</strong>, a{" "}
              <strong>chartered accountancy firm</strong> (the &ldquo;auditor&rdquo; most Tamil Nadu businesses call) in J-Block, Anna Nagar, led by {FOUNDER_NAME}. Our{" "}
              {TEAM_SIZE}-member team handles <strong>Private Limited Company registration</strong>,{" "}
              <strong>GST registration, returns and notices</strong>, <strong>virtual CFO</strong> work, audit and income tax.
              Our only office is in Anna Nagar; businesses, professionals and NRIs can consult in person or online.
            </p>
            <ContentAttribution path="/" updated={PAGE_DATES["/"]} />
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedAnchor
                action="book"
                placement="home-hero"
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-carbon px-6 text-sm font-bold uppercase tracking-[0.032em] text-white transition-opacity hover:opacity-85"
              >
                Book a 15-Minute Consultation
              </TrackedAnchor>{" "}
              <TrackedAnchor
                action="whatsapp"
                placement="home-hero"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full sm:w-auto border border-carbon bg-white px-6 text-sm font-bold uppercase tracking-[0.032em] text-carbon transition-colors hover:bg-mint-pop"
              >
                WhatsApp Us
              </TrackedAnchor>{" "}
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
                [String(TEAM_SIZE), "Professionals", "bg-white"],
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
            <p className="sticker-tag mb-3 bg-white">Tap a topic · reply on WhatsApp</p>
            <EnquiryCard placement="home-hero" />
          </div>
        </div>
      </section>

      <section aria-label="Credentials" className="border-b border-carbon bg-white py-4">
        <ul className="container-page flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-bold uppercase tracking-[0.032em] text-carbon">
          {[
            `Established ${YEAR_FOUNDED}`,
            `${TEAM_SIZE}-member team`,
            `Led by ${FOUNDER_NAME} (${FOUNDER_CREDENTIALS})`,
            ...(ICAI_MEMBERSHIP_NO ? [`ICAI membership no. ${ICAI_MEMBERSHIP_NO}`] : []),
            ...(FIRM_REGISTRATION_NO ? [`Firm registration no. ${FIRM_REGISTRATION_NO}`] : []),
          ].map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true">·</span>}
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="what-a-ca-firm-does" className="border-b border-carbon bg-white py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="sticker-tag bg-mint-pop">At a glance</p>
            <h2 id="what-a-ca-firm-does" className="mt-3 text-4xl text-obsidian md:text-5xl">
              What does a CA firm in Chennai do, and how is {BUSINESS_NAME} set up?
            </h2>
            <p id="ca-firm-answer" className="mt-5 max-w-2xl leading-relaxed text-carbon">
              A CA firm in Chennai is a practice of chartered accountants, members of the Institute of Chartered
              Accountants of India (ICAI), that keeps and audits accounts, files income tax and GST returns, registers
              companies with the Registrar of Companies (ROC), Chennai, and represents clients before tax authorities.
              Only a chartered accountant in practice can be appointed as a company&apos;s statutory auditor (Section 141,
              Companies Act, 2013). {BUSINESS_NAME} is one such firm. It was founded in {YEAR_FOUNDED}, is led by{" "}
              {FOUNDER_NAME} and has {TEAM_SIZE} professionals working from a single office in J-Block, Anna Nagar, open{" "}
              {BUSINESS_HOURS[0].days.replace(" – ", " to ")}, {BUSINESS_HOURS[0].hours.replace(" – ", " to ")}. The team
              handles private limited company and LLP registration, GST registration, returns and notices, income tax and
              TDS, statutory and tax audits, ROC filings and virtual CFO work in {LANGUAGES_SPOKEN.slice(0, -1).join(", ")}{" "}
              and {LANGUAGES_SPOKEN[LANGUAGES_SPOKEN.length - 1]}. Clients elsewhere in Chennai, across Tamil Nadu and
              abroad are served online.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate">
              Official sources:{" "}
              <a href="https://traceamember.icai.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">ICAI Trace a Member</a>
              {" · "}
              <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">Ministry of Corporate Affairs</a>
              {" · "}
              <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">Income Tax e-filing portal</a>
              {" · "}
              <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">GST portal</a>
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Looking for CA articleship in Chennai rather than a CA firm for your business? See{" "}
              <Link href="/career" className="font-medium text-royal-violet underline underline-offset-2">articleship and careers at {BUSINESS_NAME}</Link>.
            </p>
          </div>
          <dl className="self-start divide-y divide-ash overflow-hidden rounded-cards border border-carbon bg-paper">
            {[
              ["Office", ADDRESS_FULL],
              ["Hours", BUSINESS_HOURS.map((h) => `${h.days}: ${h.hours}`).join("; ")],
              ["Founded", String(YEAR_FOUNDED)],
              ["Team", `${TEAM_SIZE} professionals, led by ${FOUNDER_NAME}`],
              ["Languages", LANGUAGES_SPOKEN.join(", ")],
              ["Company registrations", "Filed with the Registrar of Companies, Chennai (MCA SPICe+)"],
              ["Service area", "In person in Chennai; online across Tamil Nadu and for NRIs"],
              ...(FIRM_REGISTRATION_NO ? [["ICAI firm registration no.", FIRM_REGISTRATION_NO]] : []),
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                <dt className="text-sm font-medium text-obsidian">{label}</dt>
                <dd className="text-sm text-slate">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <GoogleReviews />

      <section className="border-b border-carbon bg-white py-14 md:py-20">
        <div className="container-page">
          <StageMatrix />
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-lavender">Our services</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            What does our CA firm in Chennai handle?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            The full compliance lifecycle, from registering your company to filing its returns, audits and
            notices, in person in Chennai or remotely for NRIs and overseas businesses.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HOME_SERVICES.map((service) => <ServiceGroupCard key={service.slug} label={service.name} services={[service]} />)}
          </div>
        </div>
      </section>

      <section className="bg-fog py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-mint-pop">Choosing a CA firm</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            What should you look for in a CA firm in Chennai?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Whichever firm you choose, these are the checks worth making first. Where it applies, we have noted
            how {BUSINESS_NAME} measures up.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHOOSING_CRITERIA.map((c) => (
              <div key={c.title} className="flex flex-col rounded-cards border border-carbon bg-white p-7">
                <h3 className="text-lg font-medium text-obsidian">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-carbon">{c.text}</p>
                {c.firmFact && (
                  <p className="mt-4 border-t border-ash pt-3 text-sm font-medium text-obsidian">{c.firmFact}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-slate">
            For a fuller checklist, read our guide on{" "}
            <Link
              href="/blog/how-to-choose-a-chartered-accountant-in-chennai"
              className="font-medium text-royal-violet underline underline-offset-4"
            >
              how to choose a CA firm in Chennai
            </Link>
            . For membership checks, use{" "}
            <a href="https://traceamember.icai.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-4">ICAI&apos;s Trace a Member service</a>.
          </p>
        </div>
      </section>

      <section id="areas" className="scroll-mt-24 border-y border-carbon bg-concrete-gray py-14 md:py-20">
        <div className="container-page">
          <p className="sticker-tag bg-white">Areas we serve</p>
          <h2 className="mt-3 max-w-2xl text-5xl text-obsidian md:text-7xl">
            Which Chennai areas do we serve?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            All of Chennai, from one office in Anna Nagar: in person for clients nearby, by video for everyone
            else. Each area page covers the work we do there.
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
              Who leads C S Rushil &amp; Co.?
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              C S Rushil &amp; Co. is a chartered accountancy firm at J-Block, Anna Nagar, Chennai, led by{" "}
              <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">
                {FOUNDER_NAME}
              </a>{" "}
              ({FOUNDER_CREDENTIALS}). A team of {TEAM_SIZE} professionals handles audit, taxation, GST litigation,
              company law compliance and virtual CFO work.
            </p>
            <dl className="mt-6 divide-y divide-ash overflow-hidden rounded-cards border border-carbon bg-white">
              {TRUST_FACTS.map(([label, value]) => (
                <div key={label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                  <dt className="text-sm font-medium text-obsidian">{label}</dt>
                  <dd className="text-sm text-slate">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-slate">
              Client reviews are on our{" "}
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Google Business Profile
              </a>
              .
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

      <TamilSummaryBox path="/" />
      <FAQSection items={HOME_FAQS} schema={false} />
      <CTASection showForm={false} title="Ready to talk to a CA firm in Chennai?" />
    </>
  );
}
