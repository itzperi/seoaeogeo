import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import GoogleProfileStrip from "@/components/GoogleProfileStrip";
import { JsonLd, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import TamilSummaryBox from "@/components/TamilSummaryBox";
import { AREAS } from "@/lib/areas";
import { getService } from "@/lib/services";

// Anchor sets for the links every area page gives the four money pages.
// Rotated by area so 18 pages do not repeat one identical sentence.
const MONEY_ANCHORS = [
  { home: "CA firm in Chennai", pvt: "Private Limited Company registration in Chennai", vcfo: "Virtual CFO in Chennai", gst: "GST litigation and appeals in Chennai" },
  { home: "chartered accountancy practice in Chennai", pvt: "private limited company registration", vcfo: "virtual CFO services in Chennai", gst: "GST appeals and litigation" },
  { home: "Chennai CA firm", pvt: "registering a private limited company in Chennai", vcfo: "a virtual CFO", gst: "GST litigation in Chennai" },
];
const LINK = "font-medium text-royal-violet underline underline-offset-2";

const STEPS = (locality: string) => [
  { name: "Message or call us", text: `Tell us on WhatsApp or by phone what you need and any deadline. ${locality} clients can also book a slot online.` },
  { name: "15-minute consultation", text: "A chartered accountant reviews the need with you, at our Anna Nagar office or by video." },
  { name: "Scope and engagement letter", text: "We agree the scope, responsibilities and fees in writing before any work starts." },
  { name: "Work begins", text: "Documents are shared as agreed, and filings or reports follow on a calendar we share with you." },
];

function MoneyLinks({ locality, crumbHref, residents }: { locality: string; crumbHref: string; residents: boolean }) {
  const i = Math.max(0, AREAS.findIndex((a) => `/${a.slug}` === crumbHref));
  const a = MONEY_ANCHORS[i % MONEY_ANCHORS.length];
  const home = <Link href="/" className={LINK}>{a.home}</Link>;
  const pvt = <Link href="/private-limited-company-incorporation-chennai" className={LINK}>{a.pvt}</Link>;
  const vcfo = <Link href="/virtual-cfo-services" className={LINK}>{a.vcfo}</Link>;
  const gst = <Link href="/gst-litigation-chennai" className={LINK}>{a.gst}</Link>;
  return residents ? (
    <p>
      Many {locality} residents also own a business or practice. For that side of their affairs, our {home} handles{" "}
      {pvt} when a business is ready to incorporate, monthly reporting through {vcfo}, and {gst} when a GST notice turns
      into a demand.
    </p>
  ) : (
    <p>
      {locality} clients work with the same team as the rest of our {home}: {pvt} for new ventures, {vcfo} for
      businesses that need monthly MIS and cash-flow forecasting, and {gst} when a show-cause notice or demand order
      needs a reply or an appeal.
    </p>
  );
}

export default function AreaPageTemplate({
  pageUrl,
  locality,
  crumbHref,
  topic = "Chartered Accountant",
  h1,
  subhead,
  distanceNote,
  localContext,
  relevantServices,
  faqs,
  furtherReading,
  directAnswer,
  sections = [],
}: {
  pageUrl: string;
  locality: string;
  crumbHref: string;
  // Lead service for the page, e.g. "Income Tax Consultant"; drives the
  // breadcrumb, eyebrow, schema name and WhatsApp topic.
  topic?: string;
  h1: string;
  subhead: string;
  distanceNote: string;
  localContext: string[];
  relevantServices: { slug: string; why: string }[];
  faqs: FAQItem[];
  furtherReading?: { slug: string; title: string }[];
  /** 40–60 word answer to "Is there a CA firm near <locality>?" — the passage snippets and AI answers quote. */
  directAnswer?: string;
  /** Extra H2 sections with rich body (inline links), rendered after the local context. */
  sections?: { heading: string; body: ReactNode }[];
}) {
  const services = relevantServices
    .map((r) => ({ ...getService(r.slug), why: r.why }))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> & { why: string } => Boolean(s?.slug));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${topic} Services for ${locality}, Chennai`,
          description: subhead,
          url: pageUrl,
          serviceType: topic === "Chartered Accountant" ? "Chartered Accountancy Services" : `${topic} Services`,
          areaServedName: `${locality}, Chennai`,
        })}
      />
      {directAnswer && <JsonLd data={speakableSchema(["#direct-answer"])} />}
      <Breadcrumbs items={[{ name: `${topic} — ${locality}`, href: crumbHref }]} />
      <PageHero eyebrow={`${topic} · ${locality}, Chennai`} h1={h1} subhead={subhead} reviewedPath={crumbHref} service={topic === "Chartered Accountant" ? `CA services in ${locality}` : `${topic} in ${locality}`} />

      <section className="bg-paper py-16">
        <div className="container-page">
          {directAnswer && (
            <p id="direct-answer" className="mb-6 max-w-2xl text-lg leading-relaxed text-carbon">
              {directAnswer}
            </p>
          )}
          <p className="rounded-cards border border-royal-violet/20 bg-lilac-mist p-5 text-sm leading-relaxed text-obsidian">
            {distanceNote}
          </p>

          <h2 className="mt-12 text-2xl text-obsidian">
            How do we serve {locality}?
          </h2>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-slate">
            {localContext.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="mt-12 text-2xl text-obsidian">{sec.heading}</h2>
              <div className="mt-4 max-w-2xl leading-relaxed text-slate">{sec.body}</div>
            </div>
          ))}

          <h2 className="mt-12 text-2xl text-obsidian">
            How do {locality} clients work with our CA firm in Chennai?
          </h2>
          <div className="mt-4 max-w-2xl leading-relaxed text-slate">
            <MoneyLinks locality={locality} crumbHref={crumbHref} residents={topic !== "Chartered Accountant"} />
          </div>
          <nav aria-label={`Services for ${locality}`} className="mt-6 max-w-3xl rounded-cards border border-ash bg-paper p-6">
            <p className="font-medium text-obsidian">Services for {locality} clients</p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {[
                { href: "/private-limited-company-incorporation-chennai", label: `Private Limited Company registration for ${locality} founders` },
                { href: "/virtual-cfo-services", label: `Virtual CFO for ${locality} businesses` },
                { href: "/gst-litigation-chennai", label: `GST litigation and appeals for ${locality} businesses` },
                { href: "/gst-notice-reply-chennai", label: `Replying to a GST notice in ${locality}` },
                { href: "/income-tax-notice-reply-chennai", label: `Income tax notice reply for ${locality} residents` },
                { href: "/nri-tax-services", label: `NRI tax for ${locality} families abroad` },
                { href: "/statutory-audit-chennai", label: `Statutory audit for ${locality} companies` },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-royal-violet underline underline-offset-2">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <h2 className="mt-14 text-2xl text-obsidian">
            Which services matter most to {topic === "Chartered Accountant" ? `${locality} businesses` : `${locality} residents`}?
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <h3 className="font-medium text-obsidian">{s.name}</h3>
                <p className="mt-2 text-sm text-slate">{s.why}</p>
              </Link>
            ))}
          </div>

          {furtherReading && furtherReading.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl text-obsidian">Which of our guides are most useful here?</h2>
              <ul className="mt-4 space-y-2">
                {furtherReading.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-royal-violet underline underline-offset-2"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <h2 className="mt-14 text-2xl text-obsidian">How do we start work with a {locality} client?</h2>
          <ol className="mt-4 max-w-2xl space-y-3">
            {STEPS(locality).map((s, i) => (
              <li key={s.name} className="rounded-cards border border-ash bg-paper p-5">
                <p className="font-medium text-obsidian">{i + 1}. {s.name}</p>
                <p className="mt-1 text-sm text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
          <JsonLd data={howToSchema({ name: `How we start work with a ${locality} client`, description: "The four steps from first contact to engagement letter.", steps: STEPS(locality) })} />

          <nav aria-label="Other Chennai areas" className="mt-14">
            <h2 className="text-2xl text-obsidian">Which other Chennai areas do we serve?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {AREAS.filter((area) => `/${area.slug}` !== crumbHref).map((area) => (
                <li key={area.slug}>
                  <Link href={`/${area.slug}`} className="inline-block rounded-navpills border border-ash bg-paper px-4 py-2 text-sm text-obsidian hover:bg-fog">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#areas" className="inline-block rounded-navpills border border-carbon bg-white px-4 py-2 text-sm font-medium text-obsidian hover:bg-fog">
                  All Chennai areas →
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <TamilSummaryBox path={crumbHref} />
      <FAQSection items={faqs} />
      <GoogleProfileStrip />
      <CTASection
        title={`Chartered accountant serving ${locality}, Chennai`}
        subtitle="Message us on WhatsApp, call, or visit our Anna Nagar office."
        service={topic === "Chartered Accountant" ? `CA services in ${locality}` : `${topic} in ${locality}`}
      />
    </>
  );
}
