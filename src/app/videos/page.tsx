import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { SOCIALS } from "@/lib/site";

const TITLE = "Tax and Compliance Video Guides | C S Rushil & Co.";
const DESCRIPTION =
  "Watch short video guides from CA Rushil C S on GST, income tax, cash flow and business finance, with written summaries, takeaways and links to our services.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/videos",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/videos" },
};

type Video = {
  id: string;
  topic: string;
  blogSlug: string;
  summary: string;
  takeaways: string[];
  service: { href: string; label: string };
};

type Cluster = {
  heading: string;
  answer: string;
  intro: string;
  videos: Video[];
  more?: ReactNode;
};

const LINK = "text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

const CLUSTERS: Cluster[] = [
  {
    heading: "Which video explains how to keep business finances clean from the start?",
    answer:
      "The video on separating business and personal expenses is the starting point for anyone setting up a proprietorship, partnership or company.",
    intro:
      "Good financial habits begin before the first return is filed. This group covers company incorporation and the discipline of keeping a business entity's money apart from the owner's. We do not yet have a video on foreign subsidiaries, so that topic is covered on our written pages linked below.",
    videos: [
      {
        id: "Ddtkk6AuFE2",
        topic: "Keep your business and personal expenses separate",
        blogSlug: "business-personal-expenses-separate",
        summary:
          "CA Rushil C S explains why a business should have its own bank account and its own record of spending. When personal expenses run through business accounts, it becomes hard to show what the business actually earned and spent, and harder to defend expense claims if the books are ever questioned.",
        takeaways: [
          "Open a separate bank account for the business and use it for all business receipts and payments.",
          "Pay yourself through a clear route, such as salary, drawings or dividends, instead of paying personal bills from the business account.",
          "Keep invoices and records for every business expense so the books can be reconciled to the bank.",
          "Clean books make audits, tax returns and loan applications simpler.",
        ],
        service: { href: "/private-limited-company-incorporation-chennai", label: "private limited company incorporation in Chennai" },
      },
    ],
    more: (
      <p className={P}>
        If you are choosing a structure, see{" "}
        <Link href="/company-registration-chennai" className={LINK}>company registration in Chennai</Link> and{" "}
        <Link href="/company-registration-india-for-foreigners" className={LINK}>company registration in India for foreigners</Link>.
        For overseas parents, read about an{" "}
        <Link href="/india-subsidiary-for-us-companies" className={LINK}>India subsidiary for US companies</Link> and{" "}
        <Link href="/india-subsidiary-compliance-cfo" className={LINK}>India subsidiary compliance</Link>. Everyone outside Chennai is served online.
      </p>
    ),
  },
  {
    heading: "Which videos explain GST registration limits and filing mistakes?",
    answer:
      "Two videos cover why crossing the GST turnover limit changes your obligations and what tends to go wrong when a business files its own monthly returns.",
    intro:
      "GST problems often start quietly, with a missed registration or a return filed without reconciliation, and surface later as a notice. These videos explain the early warning signs. If you already hold a notice, go straight to our pages on GST notice replies and litigation.",
    videos: [
      {
        id: "DWeSksGE6DS",
        topic: "The GST threshold is not a safe zone — it's a trigger",
        blogSlug: "gst-threshold-is-a-trigger",
        summary:
          "The video argues that staying below the GST registration limit is not a comfortable place to sit. Once turnover crosses the limit that applies to your business, registration, invoicing and return obligations begin, and the department can look back at how you reached that point.",
        takeaways: [
          "Track turnover through the year, not only at year end, so you know when the limit is approaching.",
          "The limit that applies depends on what you supply and where you operate, so confirm your own position.",
          "Register on time and issue proper tax invoices from the date the obligation starts.",
          "Late registration can bring tax, interest and penalty questions later.",
        ],
        service: { href: "/gst-registration-chennai", label: "GST registration in Chennai" },
      },
      {
        id: "DWRN8VAk-Oj",
        topic: "What can go wrong when you handle your own monthly GST filings",
        blogSlug: "cost-of-diy-gst-filing",
        summary:
          "This video walks through the practical risks of filing GST returns without professional review: mismatches between sales reported and purchases claimed, input tax credit claimed without checking the supplier's filing, and missed due dates that add late fees and interest.",
        takeaways: [
          "Reconcile your purchase register with the credit shown on the GST portal before you claim input tax credit.",
          "Keep the monthly returns consistent with each other and with your books.",
          "Calendar the due dates, because late fees and interest build up automatically.",
          "Recurring mismatches are a common reason for a scrutiny notice.",
        ],
        service: { href: "/gst-return-filing-chennai", label: "GST return filing in Chennai" },
      },
    ],
    more: (
      <p className={P}>
        If a notice has already arrived, read about a{" "}
        <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>, or about{" "}
        <Link href="/gst-litigation-chennai" className={LINK}>GST litigation and appeals</Link> if the matter has moved to an order. The wider{" "}
        <Link href="/goods-and-services-tax" className={LINK}>GST services</Link> page lists everything we handle.
      </p>
    ),
  },
  {
    heading: "Which videos explain income tax notices and cash deposits?",
    answer:
      "One video covers the common reasons income tax notices are issued, and another explains why large cash deposits draw attention.",
    intro:
      "Individuals and businesses alike are surprised when a notice arrives for a return they believed was in order. This group covers the everyday triggers. We do not yet have a video specifically on NRI tax or FEMA, so those topics are covered on our written pages linked below.",
    videos: [
      {
        id: "DW_lo3Kk_hd",
        topic: "Why income tax notices are commonly issued",
        blogSlug: "why-income-tax-notices-issued",
        summary:
          "The video lists the situations that commonly lead to an income tax notice, such as a mismatch between the return and the information the department already holds, high-value transactions that were not explained, and returns that were not filed or were filed incompletely. It stresses reading the notice carefully and responding within the time it states.",
        takeaways: [
          "Compare your return with Form 26AS and the Annual Information Statement before you file.",
          "Keep documents that explain high-value transactions.",
          "Read the notice for the section, the year and the due date for your response.",
          "Do not ignore a notice, because the response time is stated in the notice itself.",
        ],
        service: { href: "/income-tax-notice-reply-chennai", label: "income tax notice reply in Chennai" },
      },
      {
        id: "Ddq4Oprzv43",
        topic: "How much cash can you safely deposit into your bank account?",
        blogSlug: "safe-cash-deposit-limit",
        summary:
          "This video explains that banks report certain cash deposits above prescribed thresholds to the tax department, and that the real question is not only the amount but whether you can show where the money came from. It encourages keeping a record of the source of any substantial cash you deposit.",
        takeaways: [
          "Know that banks report cash deposits above the prescribed thresholds.",
          "Keep proof of the source, such as sale records, withdrawal slips or a gift document.",
          "Avoid splitting a deposit to stay under a limit, because patterns are also visible.",
          "Check the current thresholds with a CA before a large transaction.",
        ],
        service: { href: "/direct-tax", label: "direct tax services" },
      },
    ],
    more: (
      <p className={P}>
        For individuals living abroad, see{" "}
        <Link href="/nri-tax-services" className={LINK}>NRI tax services</Link> and{" "}
        <Link href="/fema-rbi-compliance" className={LINK}>FEMA and RBI compliance</Link>. If a return or an order is in dispute, read about{" "}
        <Link href="/income-tax-assessment-appeals-chennai" className={LINK}>income tax assessment and appeals</Link>. We advise on Indian law
        only, and clients abroad are served by video call.
      </p>
    ),
  },
  {
    heading: "Which video explains why profitable businesses still run out of cash?",
    answer:
      "The cash flow video explains how a business can show a profit on paper and still be unable to pay its bills.",
    intro:
      "This group sits where finance leadership and audit meet: understanding cash, reading the numbers and having someone review them regularly.",
    videos: [
      {
        id: "DWEf3Nmk80W",
        topic: "Why businesses fail from lack of cash, not lack of profit",
        blogSlug: "cash-flow-not-profit-business-failure",
        summary:
          "The video explains the gap between accounting profit and cash in the bank. Sales on credit, stock bought in advance and tax or loan payments falling due can all drain cash even while the profit and loss statement looks healthy, which is why a forward-looking cash view matters.",
        takeaways: [
          "Track receivables and chase overdue customers, since credit sales are not cash until collected.",
          "Watch inventory and advance payments, which tie up money before it comes back.",
          "Plan for tax, GST and loan instalments so they are not a surprise.",
          "Prepare a simple cash-flow forecast and review it every month.",
        ],
        service: { href: "/virtual-cfo-services", label: "virtual CFO services" },
      },
    ],
    more: (
      <p className={P}>
        A part-time finance lead can build the forecast and the monthly reports through{" "}
        <Link href="/virtual-cfo-services" className={LINK}>virtual CFO services</Link>, and independent review of the books is covered under{" "}
        <Link href="/audit-and-assurance" className={LINK}>audit and assurance</Link> and{" "}
        <Link href="/statutory-audit-chennai" className={LINK}>statutory audit</Link>.
      </p>
    ),
  },
];

const FAQS = [
  {
    question: "Who presents these videos?",
    answer:
      "The videos are explainers from CA Rushil C S, who leads the firm and is a member of ICAI and Certified FAFD. They are short, general guides to common situations, and each links to a written article and to the service page that covers the topic in detail.",
  },
  {
    question: "Can I rely on a video as tax advice for my case?",
    answer:
      "No. The videos are general education, and tax rules, limits and due dates change. Your facts decide the answer, so use a video to understand the issue and then speak to a chartered accountant, who can look at your documents and the current law before you act.",
  },
  {
    question: "Where can I read more than the video covers?",
    answer:
      "Each video on this page links to a full written breakdown on our blog and to a matching service page. The written article goes deeper than a short video can, and the service page explains how we handle the matter for clients, including what documents we ask for.",
  },
  {
    question: "Where can I find more videos?",
    answer:
      "More short videos are published on our Instagram profile, which is linked at the end of the video list. This page collects the videos we have organised by topic so you can find the one that matches your question without scrolling through a feed.",
  },
  {
    question: "What if my question is not covered by any video?",
    answer:
      "Book a 15-minute consultation and tell us your situation. We will explain which service fits, what documents would be needed and how the work would proceed. Clients in Chennai can meet us in person, and clients elsewhere are served by video call.",
  },
];

export default function VideosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Videos", href: "/videos" }]} />
      <PageHero
        eyebrow="Video Guides"
        h1="Tax and compliance, explained in short videos"
        subhead="Quick explainers from CA Rushil C S on GST, income tax, and the finance mistakes that actually cost businesses money."
        lead={
          <>
            These short video guides from CA Rushil C S explain GST registration and filing, income tax notices, cash
            deposits, business expenses and cash flow. Each video comes with a written summary, key takeaways and a link to
            the matching service page, so you can understand the issue first and then speak to a chartered accountant.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <p className={`${P} mt-0`}>
            The videos below are grouped by topic: company set-up and business finance, GST, income tax and cash deposits,
            and cash flow and finance leadership. They are general guides, not advice for your particular case.
          </p>

          {CLUSTERS.map((cluster, ci) => (
            <div key={cluster.heading}>
              <h2 className={ci === 0 ? "mt-10 text-2xl text-obsidian" : H2}>{cluster.heading}</h2>
              <p className={P}>{cluster.answer}</p>
              <p className={P}>{cluster.intro}</p>

              <div className="mt-8 space-y-10">
                {cluster.videos.map((video) => (
                  <article
                    key={video.id}
                    className="grid grid-cols-1 gap-6 overflow-hidden rounded-cards border border-ash bg-paper p-4 shadow-[var(--shadow-card)] md:grid-cols-[260px_1fr] md:p-6"
                  >
                    <div className="mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-cards bg-fog">
                      <iframe
                        src={`https://www.instagram.com/reel/${video.id}/embed`}
                        className="h-full w-full border-0"
                        allowFullScreen
                        title={video.topic}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian">{video.topic}</h3>
                      <p className="mt-3 leading-relaxed text-slate">{video.summary}</p>
                      <p className="mt-4 text-sm font-medium text-obsidian">Key takeaways</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate">
                        {video.takeaways.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-slate">
                        Related service:{" "}
                        <Link href={video.service.href} className={LINK}>
                          {video.service.label}
                        </Link>
                      </p>
                      <Link
                        href={`/blog/${video.blogSlug}`}
                        className="mt-2 inline-block text-sm font-medium text-royal-violet underline underline-offset-2"
                      >
                        Read the full breakdown →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              {cluster.more}
            </div>
          ))}

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

      <FAQSection items={FAQS} />

      <CTASection
        title="Have a specific question a video didn't cover?"
        subtitle="Book a consultation and we'll walk through your actual situation."
      />
    </>
  );
}
