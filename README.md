# C S Rushil & Co. — Website Rebuild

Next.js (App Router) rebuild of csrushil.com, built to fix the structural SEO
issues found in the September 2026 audit (`seo-audit-csrushil-com-2026-09-14`)
and target: **Private Limited Company Incorporation**, **GST Litigation**,
**Chartered Accountant near me**, and **Best CA nearby** in Chennai.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What was fixed from the audit

- **Duplicate title/meta (Critical)** — every page now has its own unique
  `<title>` and meta description via Next.js Metadata API (`src/app/*/page.tsx`).
- **No standalone incorporation page (High)** — new page at
  `/private-limited-company-incorporation-chennai`: 1,200+ words, exact-match
  H1, entity comparison table, FAQ + HowTo schema.
- **No GST Litigation page (Critical)** — new page at `/gst-litigation-chennai`
  covering SCN replies, appeals, GSTAT, dispute types, and the Section 116
  CGST Act representation-rights claim.
- **Phone number inconsistency (Critical for local SEO)** — standardized on a
  single number (`+91 72001 49711`) everywhere via `src/lib/site.ts`.
- **No embedded map / LocalBusiness schema (Quick win)** — Contact page now
  embeds a live Google Map and every page carries `AccountingService`
  (Organization + LocalBusiness-style) JSON-LD; FAQ, Service, HowTo, and
  Breadcrumb schema added throughout.
- **Blog URL bug (`/blog/blog/...`)** — rebuilt blog routing under Next.js, so
  this class of bug can't recur.
- **`sitemap.xml` / `robots.txt`** — generated dynamically from the route list.

## What I could NOT do — needs your input

I did not fabricate any credential, statistic, or testimonial. These need
real information from the firm before they go live:

1. **ICAI membership number** for CA Rushil C S — add to `src/lib/site.ts`
   and surface it on `/about-us` and the homepage. This is a high-trust
   signal the audit flags as missing (GEO/E-E-A-T).
2. **Team bios/photos** — the site says "16 professionals" but has no team
   page. Even short bios for senior staff would help.
3. **Testimonials / client logos / case studies** — none existed on the old
   site; none are invented here. Real ones matter a lot for the "Best CA
   nearby" keyword specifically.
4. **Exact Anna Nagar street address, pincode, and GPS coordinates** — the
   firm confirmed mid-project that the real office is in Anna Nagar, not the
   Vadapalani address from the original audit, but the exact door/street
   number and pincode haven't been provided yet. `src/lib/site.ts` currently
   has `[ADD EXACT STREET ADDRESS]` / `[ADD PINCODE]` placeholders and an
   approximate Anna Nagar lat/long — replace all of these the moment the real
   details are available. Until then, the Contact page map only centers on
   Anna Nagar generally rather than pointing at the office.
5. **Real blog content** — `/blog` currently has an empty shell with one
   placeholder post title. The audit calls building topical authority here
   "High effort/High impact" — plan for regular posts on GST, incorporation,
   and Chennai compliance topics.
6. **Logo/brand assets** — reuses the existing "C S RUSHIL & CO" wordmark
   concept as text; drop the actual logo file into `public/` and reference
   it in `Header.tsx` and `organizationSchema()`.

## What's entirely outside a website rebuild

Two of your four target keywords are **local-pack problems, not content
problems** (per the audit) — no amount of on-page work fixes them alone:

- **"Chartered Accountant near me" / "Best CA nearby"** — these are decided
  by Google Business Profile completeness, NAP consistency across the web
  (directories like ICAI, Justdial, Sulekha, IndiaMART), and review volume/
  recency. Claim and fully complete your GBP listing, get every directory
  listing to match this site's NAP exactly, and start a steady client-review
  request flow.
- **Rankings generally** — I cannot guarantee a #1 position for any keyword.
  Ranking depends on Google's algorithm, what competitors do, and time (the
  audit itself estimates 60–90 days to see movement after the fundamentals
  are fixed). This rebuild implements everything actionable on the site
  side; the rest (GBP, backlinks, reviews, directory citations, ongoing
  content) is an operating process, not a one-time build.

## Design

The visual system follows the "Lemon Squeezy" style reference you provided:
royal violet (`#5423e7`) hero/CTA bands, lemon zest (`#ffc233`) accents,
48px-radius cards, 8px-radius buttons, Circularpro-Book-style display
headings (substituted with Plus Jakarta Sans since the real font isn't
licensed here) paired with Inter body text. Tokens live in
`src/app/globals.css`.

(Two earlier design passes in this project — a navy/gold professional
palette, then a dark "Copilot Money" neomorphic theme — were superseded by
this one per your latest instructions. If you want to compare, check the
conversation history; the code always reflects the current direction only.)

## Deployment

This project currently lives on `D:\csrushil-website` (not the original
`Desktop\cafirm` folder) because C: had ~80MB free space, which is not
enough to install Next.js dependencies. Recommended next step: push this to
a Git repo and deploy on Vercel or similar, then point csrushil.com's DNS
at it.
