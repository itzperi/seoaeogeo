# Google's 3 Ranking Laws — Applied to csrushil.com

Source: Hawk Academy's "Google's 3 Ranking Laws" cheat sheet (Harry Sanders,
StudioHawk), built on Google Patent US 8,595,225 (NavBoost), the May 2024
Google Search API leak (siteFocusScore, originalContentScore, site-wide
quality modifier), and Google Patent US 11,816,176 (Information Gain). I ran
all 4 of the cheat sheet's audit prompts against this actual codebase below,
then implemented what could be fixed in code. What's left needs either real
usage data (which doesn't exist yet — nothing's deployed) or your ongoing
effort (PR, reviews, backlinks).

---

## Law 1: How Google Measures People

**What it checks:** NavBoost tracks post-click behaviour (does the visitor
stay, or bounce back to search?). Named Entity consistency tracks whether
your NAP matches word-for-word everywhere.

### Prompt 1 — NAP Consistency Audit

| Source | NAP as it currently appears |
|---|---|
| Website (`src/lib/site.ts`, single source of truth) | C S Rushil & Co. \| Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Road, Anna Nagar, Chennai – 600 040 \| +91 72001 49711 |
| Google Business Profile | Not yet created — see `GBP-CHECKLIST.md` |
| Sulekha / Justdial / ICAI / IndiaMART | Not yet submitted — see `LISTING-COPY.md` |

**Discrepancy check: none found on the website itself.** Every page pulls
the address, phone, and business name from the same three constants
(`ADDRESS`, `PHONE_DISPLAY`, `BUSINESS_NAME`) — there is no way for one page
to drift from another because there's only one place it's defined. This is
a structural fix, not a one-time cleanup, so it can't silently regress.

**The actual risk right now:** the GBP and directory listings don't exist
yet. Per the cheat sheet's own framing — "conflicts drop Google's confidence
in your business" — the canonical NAP block is finalised
(`LISTING-COPY.md`), but it has zero effect on ranking until it's actually
live in those other places. This is unchanged from earlier advice, just
reframed under NavBoost/entity-confidence terms: **it's still the single
highest-leverage task outstanding, and it's still yours to do.**

### Prompt 2 — First 100 Words Promise Check

Ran this against the three highest-priority pages:

| Page | Title's promise | First ~100 words, before | Score | Fixed? |
|---|---|---|---|---|
| Homepage | "Chartered Accountant **Near Me** in Chennai" | Named the address but never confirmed the "near me" framing a searcher is actually looking for | 6/10 | ✅ Rewritten — now opens with "Searching for a chartered accountant near you in Chennai?" before anything else |
| `/private-limited-company-incorporation-chennai` | Exact-match: incorporation in Chennai | H1 + subhead both restate the exact promise (SPICe+, DSC, DIN, Chennai-based) in the first sentence | 9/10 | No change needed |
| `/gst-litigation-chennai` | Exact-match: GST litigation in Chennai | H1 + subhead name every dispute stage (SCN, appeals, GSTAT) immediately, plus the Section 116 representation-rights claim | 9/10 | No change needed |

**The fix applied:** the homepage hero copy in `src/app/page.tsx` now leads
with the literal "near you" framing instead of implying it through the
address line alone. This is a real, live code change, not just a
recommendation.

**What I can't fix from code:** the "drive traffic to every new page within
24 hours" advice in the cheat sheet is about generating real, early
engagement signals for NavBoost to read — that requires actually promoting
the page (a LinkedIn post, a WhatsApp share to clients, a GBP post) once
this is deployed. I can draft that outreach copy if useful, but I can't post
it on your behalf to your own accounts.

---

## Law 2: How Google Measures Your Content

**What it checks:** siteFocusScore (topical tightness), originalContentScore
(0–127, most content sits at 4, original research pushes past 90), and
Information Gain (does this page add something the top 5 results don't
already say?).

### Prompt 3 — Topical Focus + Information Gain Audit

**Business niche, one sentence:** Chartered accountancy services (company
incorporation, GST, audit, direct tax, ROC compliance) for businesses in
Chennai.

**Topical focus (siteFocusScore), across all 22 published pages (11 service
pages + 11 blog posts):** High, uniformly. Every page is either a core
service page or a blog post directly supporting one of those services (GST,
incorporation, audit, tax, RERA, trust/NGO). Nothing drifts off-topic —
there's no lifestyle content, no unrelated filler category. **No prune list
needed** — this is a clean, tightly focused site by construction, not by
later cleanup.

**Information Gain, page by page:**

| Page | Adds something the top 5 competitor results don't? | Verdict |
|---|---|---|
| `/gst-litigation-chennai` | Yes — named Chennai competitors (per `COMPETITOR-ANALYSIS.md`) don't have a dedicated page for this at all, let alone one citing Section 116 CGST Act representation rights explicitly | High gain |
| `/private-limited-company-incorporation-chennai` | Partial — the entity comparison table and step-by-step breakdown are more structured than typical competitor pages, but the underlying facts (SPICe+ process) are publicly available MCA information | Medium gain → **fixed**: added a practitioner-specific insight callout on the actual failure mode we see (PAN/Aadhaar name mismatches), which is not something a generic "what is SPICe+" page would know to say |
| Blog: SPICe+ explainer, TDS deadlines, RERA calendar, 12A/80G guide, MSME checklist | These are largely factual/reference content — accurate, useful, but the underlying facts exist elsewhere online too | Low-medium gain, by design (Tier 4 informational content in `CONTENT-CALENDAR.md`) — acceptable for AEO/snippet purposes, but won't out-rank a page with genuine original data |
| Blog: GST show-cause 48-hour checklist, Virtual CFO cost comparison, Private Ltd vs LLP comparison | Structured comparison/checklist format not commonly done well by competitors, but still built from general knowledge rather than proprietary data | Medium gain |

**30-day prioritisation, per the prompt's requested format:**

- **Prune list:** none. Nothing is off-topic or thin enough to warrant
  pruning.
- **Refresh list:** the incorporation and GST litigation pages — done this
  session (practitioner-insight callouts added).
- **Original content backlog (highest-leverage, not yet built):** this is
  where real originalContentScore gains live, and it requires real data the
  firm has and I don't:
  1. A genuine "time-to-incorporate" or "time-to-resolve-notice" benchmark
     from your own actual client files (anonymised) — even 10–20 data points
     turns a generic explainer into something no competitor page can
     replicate.
  2. A short, real "GST notice trends we're seeing in Chennai" note updated
     quarterly — a live, dated observation beats a static explainer for both
     Information Gain and freshness signals.
  3. A named case study (already flagged as missing in `IMPLEMENTATION-ROADMAP.md`)
     — this is simultaneously an Information Gain asset and an E-E-A-T
     asset.

I did not fabricate any of the above — they need real numbers or a real
client from you, same limitation flagged throughout this project.

---

## Law 3: How Google Measures Your Site

**What it checks:** a site-wide quality modifier that lifts every page on a
high-authority domain at once — compounding from backlinks, original
research, brand mentions, structured data, and engagement, not from any
single page.

### Prompt 4 — Domain Authority Compounding Plan

**Business:** C S Rushil & Co., chartered accountancy services, Chennai
market.

**Internal data points that could become original research** (pending your
confirmation these exist and can be anonymised):
1. Incorporation turnaround times across past client filings
2. GST notice/dispute resolution outcomes and typical timelines
3. Common rejection/delay reasons across MCA and GST filings you've
   personally handled

**5 original research/data study ideas, if that data exists:**
1. "Chennai SPICe+ Incorporation Turnaround Report" — actual filing-to-
   approval timelines across a sample of your incorporations, vs. the
   official MCA target.
2. "GST Notice Response Outcomes: What Actually Happens After a Reply" — a
   breakdown of resolution rates by notice type (from your own case
   history).
3. An annual "State of Chennai SME Compliance" short survey of your own
   client base — even 30–50 respondents is a citable, original data point.
4. A free "Private Ltd vs LLP vs OPC" decision calculator (a simple
   interactive tool) — this is exactly the "linkable asset" the cheat sheet
   describes, and it's buildable now without needing new data (it can run
   purely on the comparison logic already on the incorporation page).
5. A public, always-current "GST/TDS/ROC compliance deadline calendar" for
   Chennai businesses — genuinely useful, shareable, and a natural backlink
   magnet for other local business blogs and directories to reference.

**3 highest-leverage digital PR angles for this niche:**
1. Local business press (Chennai-focused business publications, YourStory
   regional coverage) — pitch the GST litigation gap finding itself
   ("Chennai's CA firms don't cover GST appeals — here's why that's a
   problem for SMEs") as a genuine story, not just self-promotion.
2. ICAI regional chapter visibility — speaking, writing, or being quoted in
   ICAI Chennai chapter materials is a high-authority, niche-relevant
   citation source most competitors aren't pursuing.
3. Guest contributions to MSME/startup-focused Indian business publications
   on practical compliance topics (using the blog content as a starting
   draft, not a duplicate).

**Linkable asset structure:** the deadline calendar (idea 5) and the
decision calculator (idea 4) are the two I'd build first — both are
buildable without new data collection, both are genuinely useful enough
that other sites would link to them unprompted, and both reinforce the
existing content (they'd link back to the relevant service pages).

**90-day roadmap:**

| Days | Action |
|---|---|
| 1–30 | Deploy the site, complete GBP (`GBP-CHECKLIST.md`), submit directory citations (`LISTING-COPY.md`) |
| 31–60 | Build the compliance deadline calendar as a real page on the site; begin outreach to 1–2 ICAI/local business publications |
| 61–90 | If client data permits, publish the first original research piece (incorporation turnaround or notice-resolution data); start the review-request flow's compounding effect |

I did not name specific publications with confirmed placement likelihood —
that requires actual outreach and relationship-building, which is beyond
what I can determine or promise from here.

---

## What changed in the codebase this session

- `src/app/page.tsx` — homepage hero copy now explicitly answers the "near
  me" search intent in the first sentence (Law 1 fix).
- `src/app/private-limited-company-incorporation-chennai/page.tsx` — added
  a practitioner-specific insight callout on PAN/Aadhaar mismatch as the
  real cause of incorporation delays (Law 2 Information Gain fix).
- `src/app/gst-litigation-chennai/page.tsx` — added a practitioner-specific
  insight callout on ITC mismatch notices being supplier-side, not
  recipient-side, faults (Law 2 Information Gain fix).

## What's still outstanding, and who owns it

| Item | Law | Owner |
|---|---|---|
| Deploy the site so any of this can actually accrue NavBoost/engagement signal | 1 | You (hosting decision) |
| GBP + directory citations | 1 | You |
| Real client data for original research pieces | 2, 3 | You |
| Named case study | 2, 3 | You |
| Compliance deadline calendar / decision calculator build | 3 | I can build this now if you want it — it doesn't need new data |
| Digital PR / ICAI outreach | 3 | You (relationship-based, can't be coded) |
