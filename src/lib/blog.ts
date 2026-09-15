import type { ComponentType } from "react";
import type { FAQItem } from "@/components/FAQSection";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  faqs?: FAQItem[];
};

export type BlogPostModule = {
  meta: BlogPostMeta;
  default: ComponentType;
};

// Static registry — Next.js needs statically analyzable imports for the App
// Router, so each post is its own module rather than loaded from a CMS.
const modules = {
  "how-to-choose-a-chartered-accountant-in-chennai": () =>
    import("@/content/blog/how-to-choose-a-chartered-accountant-in-chennai"),
  "gst-show-cause-notice-first-48-hours": () =>
    import("@/content/blog/gst-show-cause-notice-first-48-hours"),
  "spice-plus-incorporation-explained": () =>
    import("@/content/blog/spice-plus-incorporation-explained"),
  "private-limited-vs-llp-chennai-startups": () =>
    import("@/content/blog/private-limited-vs-llp-chennai-startups"),
  "gst-appellate-tribunal-gstat-explained": () =>
    import("@/content/blog/gst-appellate-tribunal-gstat-explained"),
  "tds-return-filing-deadlines": () =>
    import("@/content/blog/tds-return-filing-deadlines"),
  "msme-udyam-registration-checklist": () =>
    import("@/content/blog/msme-udyam-registration-checklist"),
  "virtual-cfo-vs-full-time-cfo-cost-comparison": () =>
    import("@/content/blog/virtual-cfo-vs-full-time-cfo-cost-comparison"),
  "rera-compliance-calendar-tamil-nadu": () =>
    import("@/content/blog/rera-compliance-calendar-tamil-nadu"),
  "12a-80g-registration-guide-chennai-ngos": () =>
    import("@/content/blog/12a-80g-registration-guide-chennai-ngos"),
  "statutory-audit-checklist": () =>
    import("@/content/blog/statutory-audit-checklist"),
} as const;

export type BlogSlug = keyof typeof modules;

// Metadata for the index page — kept in sync with each post's own `meta`
// export by convention; duplicated here (rather than importing every module
// eagerly) so the /blog index stays a cheap static list.
export const BLOG_INDEX: BlogPostMeta[] = [
  {
    slug: "how-to-choose-a-chartered-accountant-in-chennai",
    title: "How to Choose a Chartered Accountant in Chennai",
    description:
      "A practical checklist for picking a chartered accountant in Chennai — credentials, service breadth, responsiveness, and red flags to watch for.",
    date: "2026-09-16",
    excerpt:
      "Credentials, service breadth, responsiveness, and red flags — a practical checklist for picking a chartered accountant in Chennai.",
  },
  {
    slug: "gst-show-cause-notice-first-48-hours",
    title: "GST Show-Cause Notice: What to Do in the First 48 Hours",
    description:
      "Received a GST show-cause notice? Here's exactly what to check, gather, and do in the first 48 hours before your reply deadline.",
    date: "2026-09-23",
    excerpt:
      "The first 48 hours after a GST show-cause notice decide whether this becomes a quick reply or a years-long appeal. Here's the checklist.",
  },
  {
    slug: "spice-plus-incorporation-explained",
    title: "SPICe+ vs. the Old MCA Incorporation Process: What Changed",
    description:
      "How SPICe+ replaced the older multi-form MCA incorporation process, and what it means for Chennai founders registering a company today.",
    date: "2026-10-07",
    excerpt:
      "SPICe+ folded incorporation, PAN, TAN, EPFO, ESIC, and profession tax registration into a single form. Here's what actually changed.",
  },
  {
    slug: "private-limited-vs-llp-chennai-startups",
    title: "Private Limited vs. LLP for Chennai Startups: A 2026 Comparison",
    description:
      "Choosing between a Private Limited Company and an LLP in Chennai? Compare liability, compliance cost, fundraising fit, and taxation.",
    date: "2026-10-14",
    excerpt:
      "Fundraising plans, compliance appetite, and taxation all point in different directions. Here's how Chennai founders should actually decide.",
  },
  {
    slug: "gst-appellate-tribunal-gstat-explained",
    title: "GST Appellate Tribunal (GSTAT): What Chennai Businesses Need to Know",
    description:
      "GSTAT benches are becoming operational across states. Here's what Chennai businesses need to know about the new GST appeal process.",
    date: "2026-10-21",
    excerpt:
      "The GST Appellate Tribunal is the second appeal stage after the Appellate Authority — and it's newly operational. Here's what's changed.",
  },
  {
    slug: "tds-return-filing-deadlines",
    title: "TDS Return Filing Deadlines for FY 2026-27",
    description:
      "Quarterly TDS return due dates, late filing penalties, and a practical filing calendar for FY 2026-27.",
    date: "2026-10-28",
    excerpt:
      "Every quarterly TDS deadline for FY 2026-27, plus the penalty math for missing one — bookmark this one.",
  },
  {
    slug: "msme-udyam-registration-checklist",
    title: "MSME (Udyam) Registration After Incorporation: A Founder's Checklist",
    description:
      "Should your newly incorporated company register under MSME/Udyam? Here's the eligibility, process, and benefits checklist.",
    date: "2026-11-04",
    excerpt:
      "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  },
  {
    slug: "virtual-cfo-vs-full-time-cfo-cost-comparison",
    title: "Virtual CFO vs. Hiring a Full-Time CFO: A Cost Comparison for Chennai SMEs",
    description:
      "A real cost comparison between a Virtual CFO engagement and a full-time in-house CFO hire for growing Chennai businesses.",
    date: "2026-11-11",
    excerpt:
      "A full-time CFO in Chennai costs significantly more than most growth-stage businesses assume. Here's the actual math against a Virtual CFO engagement.",
  },
  {
    slug: "rera-compliance-calendar-tamil-nadu",
    title: "RERA Compliance Calendar for Tamil Nadu Developers",
    description:
      "Every recurring RERA filing deadline Tamil Nadu developers need to track, from Quarterly Progress Reports to project extensions.",
    date: "2026-11-18",
    excerpt:
      "Quarterly Progress Reports, escrow certifications, and extension filings — the full TNRERA compliance calendar in one place.",
  },
  {
    slug: "12a-80g-registration-guide-chennai-ngos",
    title: "12A and 80G Registration: A Step-by-Step Guide for Chennai NGOs",
    description:
      "How Chennai trusts, societies, and Section 8 companies can register under 12A and 80G to unlock tax exemption and donor deductions.",
    date: "2026-11-25",
    excerpt:
      "12A exempts your NGO's income; 80G lets your donors claim a deduction. Most Chennai NGOs need both — here's the process.",
  },
  {
    slug: "statutory-audit-checklist",
    title: "Statutory Audit Checklist: What Auditors Actually Ask For",
    description:
      "The documents and records a statutory auditor will actually request — prepare your company for a faster, smoother audit.",
    date: "2026-12-02",
    excerpt:
      "Most audit delays come from documents nobody prepared in advance. Here's exactly what your auditor is going to ask for.",
  },
];

export function getPostLoader(slug: string) {
  return (modules as Record<string, (() => Promise<BlogPostModule>) | undefined>)[slug];
}

export function getPostMeta(slug: string) {
  return BLOG_INDEX.find((p) => p.slug === slug);
}
