# Page-build brief for agents (4 Nov 2026)

You are building production pages in the Next.js repo `D:\csrushil-website` (branch `seo/high-ticket-pages`, already checked out). Another engineer works in the same checkout at the same time, so stay strictly inside the files you are given.

## Files you may touch
- Only the page files named in your task (`src/app/<route>/page.tsx`), plus new helper files you create **inside your own route folder**. For a client component, use something like `src/app/<route>/Calculator.tsx`.
- Do NOT edit any shared file. That includes:
  - `src/lib/*` and `src/components/*`
  - `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`
  - `public/*`, `next.config.ts`
  - any page other than your own

  If you need something in a shared file, such as a sitemap entry, nav link or llms.txt line, list it in your final report and the coordinator will add it.
- Do NOT run builds, `npm`, `tsc`, git, or dev servers. The coordinator builds and verifies everything. Make the TypeScript compile by reading the components you use and matching their props exactly.
- Use LF line endings and UTF-8.

## Patterns to reuse (read these files first)
- **Existing service pages** use `src/components/ServicePageTemplate.tsx`.
  - Props include `topBanner`, `keyFacts`, `subServices`, `howTo`, `faqs`, `relatedQuestions`, `relatedSlugs`, `relatedPosts`, `parentCrumb` and `children`.
  - The template emits the Service, HowTo, FAQPage, BreadcrumbList and Speakable JSON-LD itself.
  - `intro` renders as `<p id="direct-answer">` and is the 40–60 word direct answer.
  - Examples:
    - `src/app/gst-notice-reply-chennai/page.tsx`
    - `src/app/india-subsidiary-for-us-companies/page.tsx`, a long page with tables in `children`
- **Custom money pages** use `src/components/PageHero.tsx` with `lead` (renders `<p id="lead-answer">`), `schema={false}`, `reviewedPath`, `moneyPageGraph()` from `src/lib/schema.tsx`, `Breadcrumbs` with `schema={false}`, and `FAQSection` with `schema={false}`. Examples:
  - `src/app/gst-litigation-chennai/page.tsx`
  - `src/app/virtual-cfo-services/page.tsx`
- **Buyer rows with pre-filled WhatsApp enquiries:** `src/components/HighTicketSections.tsx`. You can pass `audiences` and `notIncluded`, and `objections` defaults to true. For custom rows, `EnquireButton` from `src/components/WhatsAppEnquiry.tsx` takes a `service` string that becomes the WhatsApp message.
- **Silo links** are added by the template. Do not add your own "more services" block.
- **Firm facts** come from `src/lib/site.ts` (address, hours, phone, `FOUNDER_NAME`, `TEAM_SIZE`). Import them; never hard-code a different NAP.
- **Styling:** match the Tailwind classes in the example pages:
  - `mt-14 text-2xl text-obsidian` for H2
  - `mt-4 max-w-3xl leading-relaxed text-slate` for paragraphs
  - the bordered table pattern with a `bg-carbon text-white` head

## SEO rules every page must meet
- A unique `<title>` of 30–60 characters, set via `title: { absolute: ... }`, and a unique meta description of 120–160 characters. Count them.
- Exactly one H1 (the hero's).
- A self-referencing canonical (`alternates: { canonical: "/route" }`).
- At least 75% of H2s phrased as natural buyer questions ending in "?". Follow each with a one-sentence direct answer before any table or list.
- A 40–60 word lead or direct answer under the H1.
- FAQ answers of 40–80 words each. FAQ JSON-LD must match the visible FAQ text exactly, which the template or `FAQSection` handles.
- A HowTo only where the numbered steps are visible on the page.
- Every image has `alt`. Internal links use descriptive anchors to existing routes only. To list existing routes, look in `src/app/*` and `src/lib/services.ts`.
- Escape apostrophes in JSX text as `&apos;`.

## Content rules (non-negotiable)
- **ICAI.** These are not allowed:
  - professional fee amounts
  - ratings, review counts or testimonials
  - superlatives ("best", "leading", "No.1")
  - guaranteed timelines or outcomes
  - names of competitor firms

  Government fees and statutory figures are fine. Write "15-minute consultation", never "free".
- **Accuracy over completeness.** State a section number, form, time limit, rate or threshold only if you are confident it is correct and current.
  - If you are not sure, write it generally, for example "within the time stated in the notice", rather than inventing a figure.
  - Never put "verify" notes in page copy.
  - List every statutory claim you are less than certain of in your final report, so the firm's CA can check it.
- **Income tax framing.** The site treats the Income-tax Act, 2025 (in force from 1 April 2026) as current. People still search by Income-tax Act, 1961 section numbers (143(1), 148A, 195, 6(1A) and so on). Use those numbers as the familiar labels: for example, "section 143(1) intimation (under the Income-tax Act, 1961; the 2025 Act carries an equivalent provision)". Do not invent 2025-Act section numbers.
- **Served online.** The firm's only office is Anna Nagar, Chennai. Any city or country content must say clients there are served online.
- **Indian law only.** The firm advises on Indian law. For foreign tax, say the client's home adviser handles it.
- Sources you may draw on:
  - `seo/growth/_FACT-SHEET-company-registration.md`
  - `seo/growth/_FACT-SHEET-tax-gst-dsc-nri.md`
  - the matching growth plan in `seo/growth/`, especially section 5 (money-page blueprint) and the AEO answer bank
  - the existing page's own content

  Keep facts consistent with the live site.

## Final report (reply to the coordinator)
- Files created or changed.
- Word count of the visible main content, the H2 question ratio, the number of FAQs, and the title and meta lengths.
- Shared-file additions needed: sitemap paths, nav or footer links, llms.txt lines, and links you want added on other pages.
- Every statutory claim you were less than fully certain of.
