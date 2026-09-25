import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers | Chennai CA Firm",
  description:
    "Join C S Rushil & Co.'s 16-member team in Anna Nagar, Chennai. We hire article assistants, semi-qualified accountants, and experienced CAs across audit, tax, and GST.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Careers", href: "/career" }]} />
      <PageHero
        eyebrow="Careers"
        h1="Build your career with C S Rushil & Co."
        subhead="We're a growing 16-member team in Anna Nagar, Chennai, looking for article assistants, semi-qualified accountants, and experienced professionals across audit, tax, and GST."
      />
      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="rounded-cards border border-ash bg-paper p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-medium text-obsidian">
              Open roles
            </h2>
            <p className="mt-3 text-slate">
              We don&apos;t always have active job postings live on the site, but we
              review every application we receive. Send your resume with the role
              you&apos;re interested in — Article Assistant, Audit Executive, GST
              Executive, or Semi-Qualified CA — to{" "}
              <a href={`mailto:${EMAIL}`} className="text-royal-violet hover:underline">
                {EMAIL}
              </a>.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Interested in joining us?" subtitle="Email your resume and we'll reach out when a suitable role opens up." />
    </>
  );
}
