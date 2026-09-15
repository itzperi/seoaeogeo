import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { FOUNDER_CREDENTIALS, FOUNDER_NAME } from "@/lib/site";

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
                C S Rushil &amp; Co. is a dynamic, fast-growing chartered accountancy
                firm based in Anna Nagar, Chennai. Founded by {FOUNDER_NAME} (
                {FOUNDER_CREDENTIALS}), the firm is built on the principle of demystifying
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
