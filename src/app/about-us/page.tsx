import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { FOUNDER_CREDENTIALS, FOUNDER_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Chartered Accountants in Chennai",
  description:
    "C S Rushil & Co. is led by CA Rushil C S (Certified FAFD, Start-up Mentor) with a 16-member team delivering audit, tax, GST, and compliance services from Vadapalani, Chennai.",
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

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">Our story</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
              C S Rushil &amp; Co. is a dynamic, fast-growing chartered accountancy
              firm based in Vadapalani, Chennai. Founded by {FOUNDER_NAME} (
              {FOUNDER_CREDENTIALS}), the firm is built on the principle of demystifying
              financial complexity through precise audits and strategic insight — helping
              clients strengthen compliance, mitigate risk, and grow with confidence.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
              Backed by a team of 16 skilled professionals, we deliver audit, taxation,
              risk, compliance, and management consulting services for businesses across
              sectors — combining a technology-driven approach with hands-on experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-[var(--color-navy-900)]">Our mission</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
              To provide holistic financial, compliance, and advisory services that
              drive business transformation — supporting enterprises whether they are
              early-stage start-ups or established companies navigating growth.
            </p>
            <h2 className="mt-10 text-2xl font-medium text-[var(--color-navy-900)]">Our values</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
              To bring clarity to financial reporting, ensure regulatory compliance,
              and provide reliable audit solutions that build trust and support
              long-term business success.
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-medium text-[var(--color-navy-900)]">
          Why choose us
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-[var(--radius-card)] border border-[var(--color-ash)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-[var(--color-navy-900)]">{v.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
