import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { JsonLd, personSchema } from "@/lib/schema";
import { AREAS } from "@/lib/areas";
import { FOUNDER_CREDENTIALS, FOUNDER_NAME, YEAR_FOUNDED } from "@/lib/site";

const TEAM = [
  { name: "Darsan Kanna", photo: "/images/team/darsan-kanna.webp" },
  { name: "Harini", photo: "/images/team/harini.webp" },
  { name: "Athulia", photo: "/images/team/athulia.webp" },
  { name: "Ajay C", photo: "/images/team/ajay-c.webp" },
  { name: "Omair Khan", photo: "/images/team/omair-khan.png" },
];

export const metadata: Metadata = {
  title: "About Us — Chartered Accountants in Chennai",
  description:
    "C S Rushil & Co. is led by CA Rushil C S (Certified FAFD, Start-up Mentor) with a 16-member team delivering audit, tax, GST, and compliance services from Anna Nagar, Chennai.",
  alternates: { canonical: "/about-us" },
};

const VALUES = [
  { title: "Expert-Led Financial Guidance", text: "Deep, current expertise across audit, tax, and compliance — not generic advice." },
  { title: "Tailored, Client-Centric Solutions", text: "Every engagement is scoped to your business stage, sector, and risk profile." },
  { title: "Support At Every Stage", text: "From first-time incorporation to enterprise-scale audits, we scale with you." },
  { title: "Commitment To Clarity & Trust", text: "Transparent fees, plain-language explanations, and ethical practice in every engagement." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
      <PageHero
        eyebrow="About the firm"
        h1="Enabling smarter compliance with expertise and assurance"
        subhead="Our experienced consultants help Chennai businesses navigate audits, regulations, and financial decisions through tailored solutions and dependable support."
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
            Why choose us
          </h2>
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
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-obsidian">{FOUNDER_NAME}</h3>
              <p className="text-sm text-slate">Founder &amp; Managing Partner — Practising Chartered Accountant</p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {FOUNDER_CREDENTIALS}. Leads the firm&apos;s audit, taxation,
                and compliance practice, and heads client engagements across
                incorporation, GST, and advisory work.
              </p>
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
            , the statutory body that certifies and governs every practising CA in the country.
          </p>
          <h3 className="mt-10 text-lg font-medium text-obsidian">Our team</h3>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            Our full team includes 16 professionals across audit, tax, and
            GST.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-ash bg-fog">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, team member at C S Rushil & Co.`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-obsidian">{member.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm text-slate">
            Individual profiles for the remaining team members will be added here as they&apos;re finalised.
          </p>

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

      <CTASection />
    </>
  );
}
