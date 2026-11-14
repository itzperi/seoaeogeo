import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProfessionalVerification from "@/components/ProfessionalVerification";
import AboutTheCA from "@/components/AboutTheCA";
import Image from "next/image";
import { AREAS } from "@/lib/areas";
import {
  ADDRESS_FULL,
  FIRM_REGISTRATION_NO,
  FOUNDER_CREDENTIALS,
  FOUNDER_NAME,
  ICAI_MEMBERSHIP_NO,
  SOCIALS,
  YEAR_FOUNDED,
  YEAR_QUALIFIED,
} from "@/lib/site";

// Regulatory details for the founder, rendered only when the firm has
// supplied the real value in src/lib/site.ts (never a placeholder).
const FOUNDER_REG_DETAILS = [
  ICAI_MEMBERSHIP_NO ? { label: "ICAI membership no.", value: ICAI_MEMBERSHIP_NO } : null,
  YEAR_QUALIFIED ? { label: "Qualified as a Chartered Accountant", value: YEAR_QUALIFIED } : null,
  FIRM_REGISTRATION_NO ? { label: "Firm registration no. (FRN)", value: FIRM_REGISTRATION_NO } : null,
].filter((d): d is { label: string; value: string } => d !== null);

const TEAM = [
  { name: "Darsan Kanna", photo: "/images/team/darsan-kanna.webp", linkedin: "https://www.linkedin.com/in/darsan-kanna-v-684208253" },
  { name: "Harini", photo: "/images/team/harini.webp" },
  { name: "Athulia", photo: "/images/team/athulia.webp" },
  { name: "Ajay M", photo: "/images/team/ajay-c.webp", linkedin: "https://www.linkedin.com/in/ajay-m-578a21232" },
  { name: "Omair Khan", photo: "/images/team/omair-khan.webp", linkedin: "https://www.linkedin.com/in/omairxkhan" },
];

// Facts only from src/lib/site.ts and /how-we-work. No fees, outcomes or
// positions beyond what the rest of the site already states.
const ABOUT_FAQS = [
  {
    question: "Who leads C S Rushil & Co.?",
    answer: `The firm is led by ${FOUNDER_NAME}, a Chartered Accountant who founded it in ${YEAR_FOUNDED}. A team of 16 works with clients on company registration, GST, income tax, audit, FEMA and virtual CFO work.`,
  },
  {
    question: "Where is the C S Rushil & Co. office?",
    answer: `The firm's only office is at ${ADDRESS_FULL}, open Monday to Saturday, 9:30 AM to 6:30 PM. Clients elsewhere in Chennai, Tamil Nadu and abroad are served online.`,
  },
  {
    question: "Which languages can I use for a consultation?",
    answer: "Consultations are held in English, Tamil and Hindi, in person at the Anna Nagar office or by video call.",
  },
  {
    question: "How does an engagement with the firm start?",
    answer:
      "It starts with a 15-minute consultation. If the work suits the firm, a conflict and independence check follows, then a scoping call and a written engagement letter that sets out the scope and fees before any work begins.",
  },
  {
    question: "How can I check that a chartered accountant is an ICAI member?",
    answer:
      "The Institute of Chartered Accountants of India (ICAI) runs a public member search, Trace a Member, at traceamember.icai.org. You can check any chartered accountant's membership there before you engage them.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "About Our Chennai CA Firm and Team | C S Rushil & Co." },
  description:
    "C S Rushil & Co. is led by CA Rushil C S (Certified FAFD, Start-up Mentor) delivering audit, tax, GST, and compliance services from Anna Nagar, Chennai.",
  openGraph: {
    title: "About Our Chennai CA Firm and Team | C S Rushil & Co.",
    description: "C S Rushil & Co. is led by CA Rushil C S (Certified FAFD, Start-up Mentor) delivering audit, tax, GST, and compliance services from Anna Nagar, Chennai.",
    url: "/about-us",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/about-us" },
};

// Factual description of how engagements run. ICAI's website advisory
// (14 Oct 2020, item 27) does not permit a "why choose us" feature, and the
// Code of Ethics bars exaggerated or comparative claims, so this states process
// only — no superlatives, no comparison with other firms.
const VALUES = [
  { title: "Scoped in writing", text: "Each engagement starts with a scoping call and a written engagement letter that lists what is and is not included." },
  { title: "Explained in plain language", text: "Filings, notices and reports are explained in English, Tamil or Hindi before anything is signed or submitted." },
  { title: "Independence checked", text: "A conflict and independence check runs before we accept work. The firm does not audit a company whose books it keeps." },
  { title: "Fees agreed first", text: "Professional fees are agreed in the engagement letter before work begins. Government fees are shown separately." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
      <PageHero
        eyebrow="About the firm"
        h1="About C S Rushil & Co., Chartered Accountants in Anna Nagar, Chennai"
        lead={
          <>
            <strong>C S Rushil &amp; Co.</strong> is a chartered accountancy firm in J-Block, Anna Nagar, Chennai, founded in
            2024 and led by <strong>CA Rushil C S</strong> (ICAI; Certificate in Forensic Accounting and Fraud Detection). A
            team of 16 handles company registration, GST and income tax, audit, FEMA and virtual CFO work for clients in
            Chennai, across Tamil Nadu and abroad.
          </>
        }
        subhead="Our team helps Chennai businesses, NRIs and foreign-owned companies with audits, tax, compliance and financial decisions."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl text-obsidian">Our story</h2>
              <p className="mt-4 leading-relaxed text-slate">
                C S Rushil &amp; Co. is a chartered accountancy
                firm based in Anna Nagar, Chennai, founded in {YEAR_FOUNDED} by {FOUNDER_NAME} (
                {FOUNDER_CREDENTIALS}). The firm is built on the principle of demystifying
                financial complexity through precise audits and strategic insight — helping
                clients strengthen compliance, mitigate risk, and grow with confidence.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Backed by a team of 16 skilled professionals, we deliver audit, taxation,
                risk, compliance, and management consulting services for businesses across
                sectors — combining a technology-driven approach with hands-on experience.
              </p>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-royal-violet underline underline-offset-2"
              >
                C S Rushil &amp; Co. on LinkedIn
              </a>
            </div>
            <div>
              <h2 className="text-2xl text-obsidian">Our mission</h2>
              <p className="mt-4 leading-relaxed text-slate">
                To provide holistic financial, compliance, and advisory services that
                drive business transformation — supporting enterprises whether they are
                early-stage start-ups or established companies navigating growth.
              </p>
              <h2 className="mt-10 text-2xl text-obsidian">Our values</h2>
              <p className="mt-4 leading-relaxed text-slate">
                To bring clarity to financial reporting, ensure regulatory compliance,
                and provide reliable audit solutions that build trust and support
                long-term business success.
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-2xl text-obsidian">
            How we work with clients
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            The full process, from the 15-minute consultation to onboarding, is on{" "}
            <Link href="/how-we-work" className="font-medium text-royal-violet underline underline-offset-2">
              how we work
            </Link>
            .
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-medium text-obsidian">{v.title}</h3>
                <p className="mt-2 text-sm text-slate">{v.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl text-obsidian">Leadership</h2>
          <div className="mt-6 flex max-w-xl gap-6 rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-ash bg-fog">
              <Image
                src="/images/team/rushil-cs.webp"
                alt={`${FOUNDER_NAME}, practising Chartered Accountant and founder of C S Rushil & Co.`}
                width={96}
                height={96}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-obsidian">{FOUNDER_NAME}</h3>
              <p className="text-sm text-slate">Founder &amp; Managing Partner, Practising Chartered Accountant</p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {FOUNDER_CREDENTIALS}. Leads the firm&apos;s audit, taxation,
                and compliance practice, and heads client engagements across
                incorporation, GST, and advisory work.
              </p>
              {FOUNDER_REG_DETAILS.length > 0 && (
                <dl className="mt-3 space-y-1 text-sm text-slate">
                  {FOUNDER_REG_DETAILS.map((d) => (
                    <div key={d.label} className="flex flex-wrap gap-x-2">
                      <dt className="font-medium text-obsidian">{d.label}:</dt>
                      <dd>{d.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <a
                href="https://www.linkedin.com/in/rushil-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-royal-violet underline underline-offset-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm text-slate">
            Chartered Accountancy in India is regulated by the{" "}
            <a
              href="https://www.icai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal-violet underline underline-offset-2"
            >
              Institute of Chartered Accountants of India (ICAI)
            </a>
            , the statutory body that certifies and governs every practising CA in the country. You can
            verify any CA&apos;s membership on the ICAI website — one of the checks in our guide on{" "}
            <Link
              href="/blog/how-to-choose-a-chartered-accountant-in-chennai"
              className="font-medium text-royal-violet underline underline-offset-2"
            >
              how to choose a CA firm in Chennai
            </Link>
            .
          </p>
          <ProfessionalVerification />
          <AboutTheCA className="mt-8" />
          <h3 className="mt-10 text-lg font-medium text-obsidian">Our team</h3>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            {FOUNDER_NAME} leads a 16-member team working across audit, tax,
            GST and compliance. Some of the people you may work with:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-ash bg-fog">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, team member at C S Rushil & Co.`}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-obsidian">{member.name}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-medium text-royal-violet underline underline-offset-2"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl text-obsidian">Areas we serve</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Our office is in Anna Nagar, Chennai, and we work with clients
            across the city — in person for those nearby, and virtually for
            everyone else. Businesses regularly reach us from Anna Nagar,
            Kilpauk, Aminjikarai, Villivakkam, Ambattur, T. Nagar,
            Nungambakkam, Vadapalani, and Chennai&apos;s OMR/IT corridor,
            among other areas — wherever you&apos;re based in Chennai, our
            incorporation, GST, audit, and tax services are available to you.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            We also work remotely with Non-Resident Indians and overseas
            clients, including clients based in the United States, on Indian
            tax filing, DTAA benefit claims, and compliance matters that
            don&apos;t require an in-person visit. Our team communicates in
            English, Tamil, and Hindi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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

      <FAQSection items={ABOUT_FAQS} />

      <CTASection />
    </>
  );
}
