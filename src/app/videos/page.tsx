import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Video Guides — Tax & Compliance Explained",
  description:
    "Short video explainers on GST, income tax, and business compliance for Chennai businesses, from CA Rushil C S — from our Instagram.",
  alternates: { canonical: "/videos" },
};

const VIDEOS = [
  {
    id: "Ddtkk6AuFE2",
    topic: "Keep your business and personal expenses separate",
    blogSlug: "business-personal-expenses-separate",
  },
  {
    id: "Ddq4Oprzv43",
    topic: "How much cash can you safely deposit into your bank account?",
    blogSlug: "safe-cash-deposit-limit",
  },
  {
    id: "DW_lo3Kk_hd",
    topic: "Why income tax notices are commonly issued",
    blogSlug: "why-income-tax-notices-issued",
  },
  {
    id: "DWeSksGE6DS",
    topic: "The GST threshold is not a safe zone — it's a trigger",
    blogSlug: "gst-threshold-is-a-trigger",
  },
  {
    id: "DWRN8VAk-Oj",
    topic: "What can go wrong when you handle your own monthly GST filings",
    blogSlug: "cost-of-diy-gst-filing",
  },
  {
    id: "DWEf3Nmk80W",
    topic: "Why businesses fail from lack of cash, not lack of profit",
    blogSlug: "cash-flow-not-profit-business-failure",
  },
];

export default function VideosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Videos", href: "/videos" }]} />
      <PageHero
        eyebrow="Video Guides"
        h1="Tax and compliance, explained in short videos"
        subhead="Quick explainers from CA Rushil C S on GST, income tax, and the compliance mistakes that actually cost businesses money."
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-cards border border-ash bg-paper shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[9/16] w-full bg-fog">
                  <iframe
                    src={`https://www.instagram.com/reel/${video.id}/embed`}
                    className="h-full w-full border-0"
                    allowFullScreen
                    title={video.topic}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate">{video.topic}</p>
                  <Link
                    href={`/blog/${video.blogSlug}`}
                    className="mt-2 inline-block text-sm font-medium text-royal-violet underline underline-offset-2"
                  >
                    Read the full breakdown →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate">
            More videos on{" "}
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-royal-violet underline underline-offset-2"
            >
              our Instagram
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Have a specific question a video didn't cover?"
        subtitle="Book a free consultation and we'll walk through your actual situation."
      />
    </>
  );
}
