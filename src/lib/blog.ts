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
  "add-remove-director": () =>
    import("@/content/blog/add-remove-director"),
  "advance-tax-deadlines": () =>
    import("@/content/blog/advance-tax-deadlines"),
  "after-gst-show-cause-reply": () =>
    import("@/content/blog/after-gst-show-cause-reply"),
  "annual-roc-filing-calendar": () =>
    import("@/content/blog/annual-roc-filing-calendar"),
  "audit-applicability-thresholds": () =>
    import("@/content/blog/audit-applicability-thresholds"),
  "capital-gains-tax-property-sale": () =>
    import("@/content/blog/capital-gains-tax-property-sale"),
  "cash-flow-forecasting-framework": () =>
    import("@/content/blog/cash-flow-forecasting-framework"),
  "choosing-ca-firm-anna-nagar": () =>
    import("@/content/blog/choosing-ca-firm-anna-nagar"),
  "common-compliance-mistakes-chennai-startups": () =>
    import("@/content/blog/common-compliance-mistakes-chennai-startups"),
  "documents-checklist-before-auditor-visit": () =>
    import("@/content/blog/documents-checklist-before-auditor-visit"),
  "fcra-registration": () =>
    import("@/content/blog/fcra-registration"),
  "gst-freelancers-consultants": () =>
    import("@/content/blog/gst-freelancers-consultants"),
  "gst-registration-online-sellers-chennai": () =>
    import("@/content/blog/gst-registration-online-sellers-chennai"),
  "gstr9-annual-return-checklist": () =>
    import("@/content/blog/gstr9-annual-return-checklist"),
  "itc-mismatch-notices": () =>
    import("@/content/blog/itc-mismatch-notices"),
  "llp-vs-opc-vs-pvt-ltd": () =>
    import("@/content/blog/llp-vs-opc-vs-pvt-ltd"),
  "lut-for-exporters": () =>
    import("@/content/blog/lut-for-exporters"),
  "msme-loan-schemes-tamil-nadu": () =>
    import("@/content/blog/msme-loan-schemes-tamil-nadu"),
  "nri-itr-filing": () =>
    import("@/content/blog/nri-itr-filing"),
  "old-vs-new-tax-regime": () =>
    import("@/content/blog/old-vs-new-tax-regime"),
  "outgrown-bookkeeping-signs": () =>
    import("@/content/blog/outgrown-bookkeeping-signs"),
  "post-incorporation-compliance-checklist": () =>
    import("@/content/blog/post-incorporation-compliance-checklist"),
  "rera-registration-renewal": () =>
    import("@/content/blog/rera-registration-renewal"),
  "startup-india-registration": () =>
    import("@/content/blog/startup-india-registration"),
  "statutory-vs-tax-vs-internal-audit": () =>
    import("@/content/blog/statutory-vs-tax-vs-internal-audit"),
  "strike-off-vs-winding-up": () =>
    import("@/content/blog/strike-off-vs-winding-up"),
  "tds-on-rent": () =>
    import("@/content/blog/tds-on-rent"),
  "trust-vs-society-vs-section8": () =>
    import("@/content/blog/trust-vs-society-vs-section8"),
  "what-virtual-cfo-reviews-monthly": () =>
    import("@/content/blog/what-virtual-cfo-reviews-monthly"),
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
    date: "2026-09-19",
    excerpt:
      "The first 48 hours after a GST show-cause notice decide whether this becomes a quick reply or a years-long appeal. Here's the checklist.",
  },
  {
    slug: "spice-plus-incorporation-explained",
    title: "SPICe+ vs. the Old MCA Incorporation Process: What Changed",
    description:
      "How SPICe+ replaced the older multi-form MCA incorporation process, and what it means for Chennai founders registering a company today.",
    date: "2026-09-19",
    excerpt:
      "SPICe+ folded incorporation, PAN, TAN, EPFO, ESIC, and profession tax registration into a single form. Here's what actually changed.",
  },
  {
    slug: "private-limited-vs-llp-chennai-startups",
    title: "Private Limited vs. LLP for Chennai Startups: A 2026 Comparison",
    description:
      "Choosing between a Private Limited Company and an LLP in Chennai? Compare liability, compliance cost, fundraising fit, and taxation.",
    date: "2026-09-19",
    excerpt:
      "Fundraising plans, compliance appetite, and taxation all point in different directions. Here's how Chennai founders should actually decide.",
  },
  {
    slug: "gst-appellate-tribunal-gstat-explained",
    title: "GST Appellate Tribunal (GSTAT): What Chennai Businesses Need to Know",
    description:
      "GSTAT benches are becoming operational across states. Here's what Chennai businesses need to know about the new GST appeal process.",
    date: "2026-09-19",
    excerpt:
      "The GST Appellate Tribunal is the second appeal stage after the Appellate Authority — and it's newly operational. Here's what's changed.",
  },
  {
    slug: "tds-return-filing-deadlines",
    title: "TDS Return Filing Deadlines for FY 2026-27",
    description:
      "Quarterly TDS return due dates, late filing penalties, and a practical filing calendar for FY 2026-27.",
    date: "2026-09-19",
    excerpt:
      "Every quarterly TDS deadline for FY 2026-27, plus the penalty math for missing one — bookmark this one.",
  },
  {
    slug: "msme-udyam-registration-checklist",
    title: "MSME (Udyam) Registration After Incorporation: A Founder's Checklist",
    description:
      "Should your newly incorporated company register under MSME/Udyam? Here's the eligibility, process, and benefits checklist.",
    date: "2026-09-19",
    excerpt:
      "Udyam registration unlocks delayed-payment protection, priority lending, and tender eligibility. Here's whether you qualify and how to apply.",
  },
  {
    slug: "virtual-cfo-vs-full-time-cfo-cost-comparison",
    title: "Virtual CFO vs. Hiring a Full-Time CFO: A Cost Comparison for Chennai SMEs",
    description:
      "A real cost comparison between a Virtual CFO engagement and a full-time in-house CFO hire for growing Chennai businesses.",
    date: "2026-09-19",
    excerpt:
      "A full-time CFO in Chennai costs significantly more than most growth-stage businesses assume. Here's the actual math against a Virtual CFO engagement.",
  },
  {
    slug: "rera-compliance-calendar-tamil-nadu",
    title: "RERA Compliance Calendar for Tamil Nadu Developers",
    description:
      "Every recurring RERA filing deadline Tamil Nadu developers need to track, from Quarterly Progress Reports to project extensions.",
    date: "2026-09-19",
    excerpt:
      "Quarterly Progress Reports, escrow certifications, and extension filings — the full TNRERA compliance calendar in one place.",
  },
  {
    slug: "12a-80g-registration-guide-chennai-ngos",
    title: "12A and 80G Registration: A Step-by-Step Guide for Chennai NGOs",
    description:
      "How Chennai trusts, societies, and Section 8 companies can register under 12A and 80G to unlock tax exemption and donor deductions.",
    date: "2026-09-19",
    excerpt:
      "12A exempts your NGO's income; 80G lets your donors claim a deduction. Most Chennai NGOs need both — here's the process.",
  },
  {
    slug: "statutory-audit-checklist",
    title: "Statutory Audit Checklist: What Auditors Actually Ask For",
    description:
      "The documents and records a statutory auditor will actually request — prepare your company for a faster, smoother audit.",
    date: "2026-09-19",
    excerpt:
      "Most audit delays come from documents nobody prepared in advance. Here's exactly what your auditor is going to ask for.",
  },
  {
    slug: "add-remove-director",
    title: "How to Add or Remove a Director from Your Company",
    description:
      "Founders in Chennai often need to add a co founder as a director, bring on an investor's nominee, or remove a director who is exiting the business, and...",
    date: "2026-09-19",
    excerpt:
      "Founders in Chennai often need to add a co founder as a director, bring on an investor's nominee, or remove a director who is exiting the...",
  },
  {
    slug: "advance-tax-deadlines",
    title: "Advance Tax Deadlines for FY 2026 to 27: A Practical Guide",
    description:
      "Advance tax catches a lot of consultants, freelancers, and small business owners in Chennai off guard, mainly because it requires estimating income and...",
    date: "2026-09-19",
    excerpt:
      "Advance tax catches a lot of consultants, freelancers, and small business owners in Chennai off guard, mainly because it requires...",
  },
  {
    slug: "after-gst-show-cause-reply",
    title: "What Happens After You Reply to a GST Show Cause Notice",
    description:
      "If you have already read our guide on the first forty eight hours after receiving a GST show cause notice and filed your reply, the natural next question...",
    date: "2026-09-19",
    excerpt:
      "If you have already read our guide on the first forty eight hours after receiving a GST show cause notice and filed your reply, the natural...",
  },
  {
    slug: "annual-roc-filing-calendar",
    title: "Annual ROC Filing Deadlines: A Calendar for Chennai Companies",
    description:
      "Registrar of Companies filings follow a predictable annual cycle, but the specific forms and their deadlines are scattered enough across the year that...",
    date: "2026-09-19",
    excerpt:
      "Registrar of Companies filings follow a predictable annual cycle, but the specific forms and their deadlines are scattered enough across...",
  },
  {
    slug: "audit-applicability-thresholds",
    title: "Audit Applicability Thresholds Every Chennai Business Owner Should Know",
    description:
      "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes mandatory.",
    date: "2026-09-19",
    excerpt:
      "One of the most common questions from growing businesses in Chennai is simple: has my business crossed the point where an audit becomes...",
  },
  {
    slug: "capital-gains-tax-property-sale",
    title: "Capital Gains Tax on Property Sale: What Chennai Sellers Need to Know",
    description:
      "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises a lot of first time sellers, mainly because the tax depends...",
    date: "2026-09-19",
    excerpt:
      "Selling a flat or plot in Chennai triggers a capital gains tax calculation that surprises a lot of first time sellers, mainly because the...",
  },
  {
    slug: "cash-flow-forecasting-framework",
    title: "A Simple Cash Flow Forecasting Framework for Small Businesses",
    description:
      "Cash flow forecasting sounds like something only large companies need, but small and mid sized businesses in Chennai often run into far more serious cash...",
    date: "2026-09-19",
    excerpt:
      "Cash flow forecasting sounds like something only large companies need, but small and mid sized businesses in Chennai often run into far...",
  },
  {
    slug: "choosing-ca-firm-anna-nagar",
    title: "Choosing a CA Firm in Anna Nagar: What to Actually Look For",
    description:
      "Anna Nagar has no shortage of chartered accountants and CA firms, which makes choosing one feel harder rather than easier for a business owner who just...",
    date: "2026-09-19",
    excerpt:
      "Anna Nagar has no shortage of chartered accountants and CA firms, which makes choosing one feel harder rather than easier for a business...",
  },
  {
    slug: "common-compliance-mistakes-chennai-startups",
    title: "Common Compliance Mistakes Chennai Startups Make in Their First Year",
    description:
      "Founders launching a business in Chennai are usually focused on customers and product, which is exactly right, but it also means compliance mistakes tend...",
    date: "2026-09-19",
    excerpt:
      "Founders launching a business in Chennai are usually focused on customers and product, which is exactly right, but it also means compliance...",
  },
  {
    slug: "documents-checklist-before-auditor-visit",
    title: "Documents Checklist Before Your Auditor's Visit",
    description:
      "A surprising amount of audit delay in Chennai businesses has nothing to do with the complexity of the books and everything to do with documents not being...",
    date: "2026-09-19",
    excerpt:
      "A surprising amount of audit delay in Chennai businesses has nothing to do with the complexity of the books and everything to do with...",
  },
  {
    slug: "fcra-registration",
    title: "FCRA Registration: What Chennai NGOs Need to Know Before Accepting Foreign Funds",
    description:
      "Any trust, society, or Section 8 company in Chennai that wants to receive donations or grants from a foreign source needs FCRA registration first, and the...",
    date: "2026-09-19",
    excerpt:
      "Any trust, society, or Section 8 company in Chennai that wants to receive donations or grants from a foreign source needs FCRA registration...",
  },
  {
    slug: "gst-freelancers-consultants",
    title: "GST on Freelancers and Consultants: Do You Need to Register?",
    description:
      "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
    date: "2026-09-19",
    excerpt:
      "Freelance designers, consultants, developers, and marketing professionals in Chennai often assume GST is only for shops and factories.",
  },
  {
    slug: "gst-registration-online-sellers-chennai",
    title: "GST Registration for Online Sellers in Chennai: What Is Different",
    description:
      "Selling on Amazon, Flipkart, Meesho, or your own website is not the same as running a regular shop when it comes to GST, and a lot of first time sellers...",
    date: "2026-09-19",
    excerpt:
      "Selling on Amazon, Flipkart, Meesho, or your own website is not the same as running a regular shop when it comes to GST, and a lot of first...",
  },
  {
    slug: "gstr9-annual-return-checklist",
    title: "GSTR 9 Annual Return: A Filing Checklist for Small Businesses",
    description:
      "GSTR 9 is the annual return every regular GST registered business needs to file, summarizing an entire financial year of GSTR 1 and GSTR 3B filings into...",
    date: "2026-09-19",
    excerpt:
      "GSTR 9 is the annual return every regular GST registered business needs to file, summarizing an entire financial year of GSTR 1 and GSTR 3B...",
  },
  {
    slug: "itc-mismatch-notices",
    title: "Input Tax Credit Mismatch Notices: Why They Happen and How to Respond",
    description:
      "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to one simple...",
    date: "2026-09-19",
    excerpt:
      "An Input Tax Credit (ITC) mismatch notice is one of the most common GST notices Chennai businesses receive, and it usually comes down to...",
  },
  {
    slug: "llp-vs-opc-vs-pvt-ltd",
    title: "LLP vs OPC vs Private Limited: Choosing the Right Structure in Chennai",
    description:
      "Every founder starting a business in Chennai eventually faces the same decision: which legal structure to register under.",
    date: "2026-09-19",
    excerpt:
      "Every founder starting a business in Chennai eventually faces the same decision: which legal structure to register under.",
  },
  {
    slug: "lut-for-exporters",
    title: "LUT for Exporters: How to File and Why It Matters",
    description:
      "If your Chennai business sells services or goods to clients outside India, a Letter of Undertaking (LUT) is one of the most valuable and most overlooked...",
    date: "2026-09-19",
    excerpt:
      "If your Chennai business sells services or goods to clients outside India, a Letter of Undertaking (LUT) is one of the most valuable and...",
  },
  {
    slug: "msme-loan-schemes-tamil-nadu",
    title: "MSME Loan Schemes Available to Small Businesses in Tamil Nadu",
    description:
      "Small business owners in Chennai often assume bank loans are their only financing option, without realizing that registering as an MSME under Udyam opens...",
    date: "2026-09-19",
    excerpt:
      "Small business owners in Chennai often assume bank loans are their only financing option, without realizing that registering as an MSME...",
  },
  {
    slug: "nri-itr-filing",
    title: "NRI Income Tax Return Filing: A Guide for Chennai Origin NRIs",
    description:
      "Non resident Indians with family, property, or investments back in Chennai often have a genuine Indian tax filing obligation that gets overlooked simply...",
    date: "2026-09-19",
    excerpt:
      "Non resident Indians with family, property, or investments back in Chennai often have a genuine Indian tax filing obligation that gets...",
  },
  {
    slug: "old-vs-new-tax-regime",
    title: "Old vs New Tax Regime for FY 2026 to 27: Which One Actually Saves You Money",
    description:
      "Every year around this time, salaried professionals and small business owners in Chennai ask the same question: should I stick with the old tax regime or...",
    date: "2026-09-19",
    excerpt:
      "Every year around this time, salaried professionals and small business owners in Chennai ask the same question: should I stick with the old...",
  },
  {
    slug: "outgrown-bookkeeping-signs",
    title: "Signs Your Chennai Business Has Outgrown Basic Bookkeeping",
    description:
      "Bookkeeping keeps your transaction records accurate, but there is a point where a growing business needs more than accurate records, it needs someone...",
    date: "2026-09-19",
    excerpt:
      "Bookkeeping keeps your transaction records accurate, but there is a point where a growing business needs more than accurate records, it...",
  },
  {
    slug: "post-incorporation-compliance-checklist",
    title: "Post Incorporation Compliance Checklist for New Chennai Companies",
    description:
      "Getting the incorporation certificate feels like the finish line, but for a newly registered company it is actually the starting point for a set of...",
    date: "2026-09-19",
    excerpt:
      "Getting the incorporation certificate feels like the finish line, but for a newly registered company it is actually the starting point for...",
  },
  {
    slug: "rera-registration-renewal",
    title: "RERA Registration Renewal Deadlines: What Chennai Developers Need to Track",
    description:
      "Real estate developers and agents in Chennai working on projects that fall under the Real Estate Regulatory Authority need to track not just their initial...",
    date: "2026-09-19",
    excerpt:
      "Real estate developers and agents in Chennai working on projects that fall under the Real Estate Regulatory Authority need to track not...",
  },
  {
    slug: "startup-india-registration",
    title: "Startup India Registration: Is It Worth It for Your Chennai Business",
    description:
      "Startup India recognition gets mentioned often by founders in Chennai, but there's genuine confusion about what it actually provides versus what people...",
    date: "2026-09-19",
    excerpt:
      "Startup India recognition gets mentioned often by founders in Chennai, but there's genuine confusion about what it actually provides versus...",
  },
  {
    slug: "statutory-vs-tax-vs-internal-audit",
    title: "Statutory Audit vs Tax Audit vs Internal Audit: What Is the Difference",
    description:
      "Business owners in Chennai often use the word audit as if it means one single thing, but statutory audit, tax audit, and internal audit are three separate...",
    date: "2026-09-19",
    excerpt:
      "Business owners in Chennai often use the word audit as if it means one single thing, but statutory audit, tax audit, and internal audit are...",
  },
  {
    slug: "strike-off-vs-winding-up",
    title: "Company Strike Off vs Winding Up: What Is the Difference",
    description:
      "When a Chennai business owner decides to shut down a company that never took off or has stopped operating, one of the first questions is whether to apply...",
    date: "2026-09-19",
    excerpt:
      "When a Chennai business owner decides to shut down a company that never took off or has stopped operating, one of the first questions is...",
  },
  {
    slug: "tds-on-rent",
    title: "TDS on Rent: What Chennai Landlords and Tenants Both Need to Know",
    description:
      "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it and landlords...",
    date: "2026-09-19",
    excerpt:
      "Tax deducted at source on rent payments trips up both sides of the transaction in Chennai, tenants who don't realize they need to deduct it...",
  },
  {
    slug: "trust-vs-society-vs-section8",
    title: "Trust vs Society vs Section 8 Company: Choosing the Right NGO Structure",
    description:
      "Anyone starting a charitable or nonprofit initiative in Chennai has to choose between three common structures, a trust, a society, or a Section 8 company,...",
    date: "2026-09-19",
    excerpt:
      "Anyone starting a charitable or nonprofit initiative in Chennai has to choose between three common structures, a trust, a society, or a...",
  },
  {
    slug: "what-virtual-cfo-reviews-monthly",
    title: "What a Virtual CFO Actually Reviews Every Month",
    description:
      "Business owners considering virtual CFO support often aren't sure what the service actually involves month to month, beyond a vague sense that it's more...",
    date: "2026-09-19",
    excerpt:
      "Business owners considering virtual CFO support often aren't sure what the service actually involves month to month, beyond a vague sense...",
  },
];

export function getPostLoader(slug: string) {
  return (modules as Record<string, (() => Promise<BlogPostModule>) | undefined>)[slug];
}

export function getPostMeta(slug: string) {
  return BLOG_INDEX.find((p) => p.slug === slug);
}

// BLOG_INDEX doubles as a content calendar — most dates are intentionally in
// the future (see CONTENT-CALENDAR.md's "steady drip, not a burst" guidance).
// Since this is a statically-built site, every post would otherwise go live
// simultaneously on deploy with a false past-tense "published" date. This
// gates both the listing and the post route itself so a post genuinely
// isn't reachable — and doesn't claim a datePublished — before its date.
export function isPublished(date: string) {
  const today = new Date().toISOString().slice(0, 10);
  return date <= today;
}

export function getPublishedPosts() {
  return BLOG_INDEX.filter((p) => isPublished(p.date));
}
