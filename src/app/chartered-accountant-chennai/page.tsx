import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { AREAS } from "@/lib/areas";
import { ALL_SERVICES } from "@/lib/services";
import { JsonLd, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Chartered Accountant in Chennai | C S Rushil & Co." },
  description:
    "Chartered accountant in Chennai for income tax, GST, company registration, audit, ROC filings and virtual CFO. Book a consultation online or visit our office.",
  alternates: { canonical: "/chartered-accountant-chennai" },
  openGraph: {
    title: "Chartered Accountant in Chennai | C S Rushil & Co.",
    description:
      "Chartered accountant in Chennai for income tax, GST, company registration, audit, ROC filings and virtual CFO. Book a consultation online or visit our office.",
    url: "/chartered-accountant-chennai",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

// The Chennai service pages, in the order a visitor is most likely to need them.
const SERVICE_SLUGS = [
  "income-tax-consultant-for-hni-chennai",
  "income-tax-return-filing-chennai",
  "income-tax-notice-reply-chennai",
  "gst-litigation-chennai",
  "goods-and-services-tax",
  "private-limited-company-incorporation-chennai",
  "llp-registration-chennai",
  "statutory-audit-chennai",
  "annual-compliance-package",
  "virtual-cfo-services",
  "nri-tax-services",
];

const HNI_AREA_SLUGS = [
  ["income-tax-consultant-besant-nagar-chennai", "Besant Nagar"],
  ["income-tax-consultant-alwarpet-chennai", "Alwarpet"],
  ["income-tax-consultant-ra-puram-chennai", "R A Puram"],
  ["income-tax-consultant-kotturpuram-chennai", "Kotturpuram"],
  ["income-tax-consultant-gopalapuram-chennai", "Gopalapuram"],
  ["income-tax-consultant-neelankarai-ecr-chennai", "Neelankarai and ECR"],
] as const;

export default function Page() {
  const services = SERVICE_SLUGS.map((slug) => ALL_SERVICES.find((s) => s.slug === slug)).filter(
    (s): s is (typeof ALL_SERVICES)[number] => Boolean(s)
  );
  const chennaiAreas = AREAS.filter((a) => a.slug.endsWith("-chennai") && a.slug.startsWith("chartered-accountant-"));

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Breadcrumbs items={[{ name: "Chartered Accountant in Chennai", href: "/chartered-accountant-chennai" }]} />
      <PageHero
        reviewedPath="/chartered-accountant-chennai"
        eyebrow="Chartered Accountants · Chennai"
        h1="Chartered Accountant in Chennai"
        subhead="C S Rushil & Co. is a chartered accountancy firm in Anna Nagar, Chennai, led by CA Rushil C S. We handle income tax, GST, company registration, audit and ROC compliance for businesses and individuals across the city, with video meetings for clients elsewhere."
      />

      <section className="bg-paper py-16">
        <div className="container-page max-w-3xl space-y-6 text-slate">
          <h2 className="text-2xl text-obsidian">What a chartered accountant in Chennai can do for you</h2>
          <p>
            A chartered accountant is qualified and regulated by the Institute of Chartered Accountants of India (ICAI). In Chennai,
            CAs are the usual adviser for income tax returns and notices, GST registration, returns and litigation, company and LLP
            registration, statutory and tax audits, and the annual compliance that companies and LLPs must file with the Ministry of
            Corporate Affairs.
          </p>
          <p>
            Our office is on 13th Main Road, J-Block, Anna Nagar, open Monday to Saturday from 9:30 AM to 6:30 PM. Clients who prefer to
            meet at the office can book a visit, and clients in other parts of Chennai, Tamil Nadu and abroad are served through video
            calls and secure document exchange.
          </p>
          <p>
            Work usually begins with a short consultation to understand the position: which returns or registrations are due, what
            notices or deadlines are open, and what records are available. We then confirm the scope in writing before any filing.
            Each engagement is led by a chartered accountant, and we tell clients which parts of the work need the firm&apos;s own
            judgement and which need documents from the client.
          </p>
          <p>
            Chennai businesses often come to us for one of three reasons: a notice from the tax department that must be answered on
            time, a new company or LLP that needs its first-year compliance set up, or a growing business that wants its books,
            payroll and filings in order before an audit or a fundraising round.
          </p>
        </div>
      </section>

      <section className="bg-sky-wash py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">Our services in Chennai</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="rounded-cards border border-carbon bg-white p-5">
                <Link href={`/${s.slug}`} className="text-lg font-medium text-royal-violet underline underline-offset-2">
                  {s.name}
                </Link>
                <p className="mt-2 text-sm text-slate">{s.shortDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">Chennai areas we serve</h2>
          <p className="mt-4 max-w-3xl text-slate">
            Each area page describes the work we do for that part of the city. The office is in Anna Nagar.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chennaiAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className="block rounded-cards border border-carbon bg-white px-4 py-3 text-sm font-medium text-carbon hover:bg-mint-pop">
                  Chartered accountant in {a.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl text-obsidian">Income tax for families and high-income individuals</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HNI_AREA_SLUGS.map(([slug, name]) => (
              <li key={slug}>
                <Link href={`/${slug}`} className="block rounded-cards border border-carbon bg-white px-4 py-3 text-sm font-medium text-carbon hover:bg-mint-pop">
                  Income tax consultant in {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Book a consultation"
        subtitle="Book a video call or visit our Anna Nagar office. Tell us which return, notice or registration you need help with."
      />
    </>
  );
}
