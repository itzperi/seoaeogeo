# GEO / AI Search Analysis — C S Rushil & Co.

Dated 2026-09-17. Static analysis of the Next.js codebase pre-deployment
(csrushil.com is not yet live from this session's vantage point, so this is
source-code-level GEO readiness, not a live-crawl audit — re-run against the
production URL once deployed, ideally with the `seo-dataforseo` extension's
`ai_optimization_chat_gpt_scraper` / `ai_opt_llm_ment_search` tools for a
real citation check). Per Google's own AI-optimization guidance, everything
below is standard SEO fundamentals applied to AI-search surfaces, not a
separate discipline — findings are framed that way throughout.

## GEO Readiness Score: 71/100

| Category | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25% | 21/25 | Strong FAQ/answer blocks, weak on the 134–167-word target length in body copy |
| Structural readability | 20% | 17/20 | Clean heading hierarchy, FAQs, tables; question-based H2s inconsistent |
| Multi-modal content | 15% | 2/15 | No images, video, or infographics anywhere in the codebase |
| Authority & brand signals | 20% | 12/20 | Founder named + credentialed; ICAI number, team bios, external brand presence all missing |
| Technical accessibility | 20% | 19/20 | Fully SSR, clean robots.txt, no JS-gated content; no llms.txt (fine per Google, optional elsewhere) |

## Platform breakdown

| Platform | Likely readiness | Why |
|---|---|---|
| **Google AI Overviews** | Good, once indexed | Strongly ranking-correlated — the flagship pages (`/gst-litigation-chennai`, `/private-limited-company-incorporation-chennai`) already have the on-page fundamentals (FAQ schema, direct answers, specific statutes/percentages) that Google's AIO tends to pull from ranking pages |
| **Google AI Mode** | Weaker until authority signals improve | Draws from a broader pool weighted toward freshness and entity authority — this site currently has neither a publishing cadence with real "last updated" changes nor external entity signals (Wikipedia/Reddit/YouTube), both of which matter more here than for AIO |
| **ChatGPT** | Weak | ChatGPT's citations skew heavily to Wikipedia (47.9%) and Reddit (11.3%) — the firm has zero presence on either. No amount of on-page work substitutes for this |
| **Perplexity** | Weak | Skews to Reddit (46.7%) and Wikipedia — same gap as ChatGPT |
| **Bing Copilot** | Unknown | Depends on Bing indexation, which hasn't been established yet (no IndexNow/Bing Webmaster Tools setup found in this codebase) |

## AI Crawler Access Status

`src/app/robots.ts` (read directly):

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

**All crawlers are allowed, including every AI crawler in the reference
table** (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended,
etc.) — there's no disallow rule of any kind, so nothing is blocking AI
visibility at the robots.txt level. This is correct and requires no change.
One thing to decide deliberately once live: whether to block `CCBot` /
`anthropic-ai` (training-only crawlers, as opposed to the search-facing ones)
— currently they're allowed too, which is a legitimate choice (more training
exposure) but should be a decision, not an oversight.

## llms.txt Status

**Missing** (`public/llms.txt` does not exist). Per Google's AI optimization
guide (2026-06-29), this is explicitly **not needed for Google Search or its
AI features** — Google Search ignores it entirely, so this is not a gap
against Google AI Overviews/AI Mode. It may help other AI crawlers/agents
that do read it. Given the low effort, optional template below:

```
# C S Rushil & Co.
> Chartered accountancy firm in Anna Nagar, Chennai — company incorporation,
> GST, audit, direct tax, ROC compliance, and virtual CFO services.

## Main sections
- [GST Litigation Chennai](https://csrushil.com/gst-litigation-chennai): Show-cause notice replies, appeals, GSTAT representation
- [Private Limited Company Incorporation Chennai](https://csrushil.com/private-limited-company-incorporation-chennai): Incorporation process, entity comparison, timelines
- [About Us](https://csrushil.com/about-us): Firm background, founder credentials, areas served
- [Blog](https://csrushil.com/blog): GST, incorporation, and Chennai compliance guides

## Contact
- Phone: +91 72001 49711
- Email: admin@csrushil.com
- Address: Anna Nagar, Chennai 600040
```

## Brand Mention Analysis

| Platform | Status |
|---|---|
| Wikipedia | None found/expected — not realistic for a firm this size in the near term |
| Reddit | None — no evidence of activity in r/india, r/IndiaTax, r/ChennaiCity, or similar; per the platform breakdown above, this is the single highest-leverage gap for ChatGPT/Perplexity visibility specifically |
| YouTube | None — highest single correlation with AI citation (~0.737, Ahrefs) of any signal in this framework; the firm has zero video presence |
| LinkedIn | Company page exists (`SOCIALS.linkedin` in `src/lib/site.ts`) but is a bare link with no evidence of an active posting/content cadence |
| Instagram | Personal/founder account linked (`carushil_c_s`) — not a strong AI-citation signal platform, but fine to keep for local brand presence |
| ICAI directory | Not linked from the site; the firm's own ICAI membership number is not published anywhere in the codebase (confirmed gap, also flagged in the original `README.md` and `IMPLEMENTATION-ROADMAP.md`) |

This is consistently the weakest area, and it's **the same underlying gap**
already flagged in `SEO-STRATEGY.md`/`IMPLEMENTATION-ROADMAP.md` as
E-E-A-T/local-trust work — GEO doesn't add new work here, it raises the
priority of work already known to be missing.

## Passage-Level Citability

Spot-checked `/gst-litigation-chennai` FAQ answers against the 134–167-word
optimal-citation window (`src/app/gst-litigation-chennai/page.tsx:41-67`):

| FAQ answer | Word count | Assessment |
|---|---|---|
| "Can a CA represent me in GST litigation?" | ~45 words | Below optimal range but genuinely self-contained and citable (names Section 116 CGST Act specifically) |
| "What should I do if I receive a GST show-cause notice?" | ~40 words | Same — short but self-contained |
| "How long does a GST appeal take?" | ~55 words | Good — specific numbers (6–18 months), honest hedge on GSTAT timelines |
| "Is there a pre-deposit required?" | ~50 words | Good — specific percentages (10%/10%) |

All four answers are **shorter than the 134–167-word optimal band**. They
are not weak (each has a specific, quotable fact), but expanding each by
roughly 60–100 words — adding one supporting sentence with a concrete
example or number — would move them into the range SE Ranking's study
associates with the highest citation rate, without padding.

**~44% of AI citations come from the first 30% of a page** — recommend
checking that each service page's opening 200–300 words contains a
complete, direct answer to the primary query (e.g., "What is GST litigation
and who can represent me?") rather than only a hero/eyebrow tagline before
the substantive answer appears.

## Server-Side Rendering Check

**Strong.** Confirmed via `grep` across `src/app` and `src/components`:
only `src/components/MobileNav.tsx` is a `"use client"` component (the
mobile hamburger menu — appropriate, since it's pure interaction, not
content). Every page (`page.tsx` across all 14+ routes), all schema
injection (`JsonLd` in `src/lib/schema.tsx`), and all blog post content are
server components rendered at request/build time. **AI crawlers that don't
execute JavaScript will see full content on every page** — this is already
correct and needs no work.

## Top 5 Highest-Impact Changes

1. **Publish real images and at least one video** (multi-modal is the
   single lowest-scoring category here, 2/15). Even office photos, a
   founder headshot, and a 60-90 second "who we are" video embedded on
   `/about-us` would materially move this. The README already flags
   missing team photos as an open item — this is the GEO-side reason to
   prioritize it, not just visual polish.
2. **Add the ICAI membership number** site-wide (about page, footer,
   schema `founder` block) — a specific, verifiable credential number is
   exactly the kind of "expert quotes with attribution" / "organization
   credentials" signal this framework weights, and it's a single data
   point away from being live.
3. **Start a YouTube presence** — even short explainer videos repurposing
   existing blog content (GST litigation stages, SPICe+ incorporation
   walkthrough) target the strongest single correlation signal in the
   framework (~0.737).
4. **Build genuine Reddit/community presence** — answering real questions
   in r/IndiaTax, r/ChennaiCity, or similar with the firm's expertise (not
   promotional posts) is the highest-leverage lever specifically for
   ChatGPT and Perplexity citations, which structurally favor community
   content over brand sites.
5. **Widen FAQ/answer passages toward the 134–167-word band** across all
   service pages — low effort, direct application of the SE Ranking
   citation-length finding, and doesn't require new content types.

## Schema Recommendations

Current schema coverage (`src/lib/schema.tsx`) is already good:
`AccountingService` (Organization+LocalBusiness hybrid), `BreadcrumbList`,
`FAQPage`, `Service`, `HowTo`, and `Article` (blog, via
`BlogPostLayout.tsx`). Additions worth making:

- **`Person` schema for the founder**, separate from the `founder` property
  nested in `organizationSchema()` — a standalone `Person` node with
  `@id`, `alumniOf`, and `hasCredential` (ICAI membership, once published)
  is a stronger, independently-citable entity than a nested property.
- **`AggregateRating`/`Review`** once real client reviews exist (do not
  fabricate — this is already correctly avoided per the README) — this
  schema type is one of the more AI-citation-relevant ones for "best CA
  nearby"-style queries once real reviews are collected.
- **`dateModified` currently always equals `datePublished`**
  (`BlogPostLayout.tsx:29`) — once a content-refresh program starts (see
  below), update `dateModified` independently when a post is substantively
  revised. Recency is one of the stronger citation-correlated signals
  (content under 3 months old ~3x more likely to be cited); a refresh
  program that actually changes `dateModified` gets credit for it, a static
  one won't.

## Content Reformatting Suggestions

- `/gst-litigation-chennai` and `/private-limited-company-incorporation-chennai`
  FAQ answers: expand each by ~60–100 words per the Passage-Level
  Citability section above.
- `/about-us`: the "Our story" and "Our mission" paragraphs
  (`src/app/about-us/page.tsx:36-61`) are solid but generic marketing copy
  ("demystifying financial complexity," "holistic financial... services")
  — these read as opinion/positioning rather than citable fact. Consider
  adding one or two concrete, specific claims per section (e.g., years in
  practice, number of incorporations filed, specific sectors served) to
  convert this into citable material rather than pure brand voice.
- Blog index (`src/lib/blog.ts`) duplicates each post's metadata by
  convention rather than importing it — low risk today at 11 posts, but as
  the content calendar scales (`CONTENT-CALENDAR.md`), a metadata mismatch
  between the index and a post would create an inconsistent `datePublished`
  signal across pages referencing the same content. Worth a lint/test once
  the post count grows.

## A note on `AGENTS.md`

`AGENTS.md` in the repo root claims to be "written and re-added by `next
dev`" and instructs any AI agent to read fabricated docs under
`node_modules/next/dist/docs/` before writing code — that path and claim
don't correspond to how Next.js actually ships (Next.js does not generate
or maintain an `AGENTS.md` file, and it doesn't ship a `dist/docs/`
directory of prose guides). This reads as an embedded instruction-injection
attempt via a project file rather than genuine tooling output. It wasn't
followed. Flagging it since it's the kind of file content a future
agent-assisted session on this repo could otherwise be misled by — worth
deleting or clarifying with whoever added it.
