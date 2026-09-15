# Implementation Roadmap

Status as of 2026-09-15. "Done" means shipped in this codebase and verified
with a passing build; nothing here is marked done that wasn't actually built.

## Phase 1 — Google Business Profile (manual, off-site)

| Task | Status | Owner |
|---|---|---|
| Fill out full GBP profile with confirmed NAP | **Not started — requires your Google account** | You (checklist in `GBP-CHECKLIST.md`) |
| Select 3 categories | Not started | You |
| List every service | Not started | You |
| Upload real photos | Not started | You |
| Start review-request flow | Not started | You |

I cannot complete this phase — it requires owning/verifying a Google account
tied to the business, which is outside anything I can access from here.

## Phase 2 — Website core structure

| Task | Status |
|---|---|
| Homepage title/H1 defines what + where | ✅ Done — "Chartered Accountant Near Me in Chennai — Company Registration, GST & Audit" |
| NAP matches exactly across schema, footer, contact page | ✅ Done — single source of truth in `src/lib/site.ts` |
| Footer contact details (phone, email, address) | ✅ Done |
| Embedded Google Map in footer | ✅ Done (uses precise lat/long, not address-text search) |
| Fix phone number inconsistency from original audit | ✅ Done — standardized on `+91 72001 49711` everywhere |

## Phase 3 — Dedicated service pages & internal links

| Task | Status |
|---|---|
| Standalone page per unique service | ✅ Done — 11 services, each its own URL (was previously an anchor link, per the audit) |
| Detailed what/who/where content per service page | ✅ Done — every page states Chennai-specific context |
| Homepage links to every service subpage | ✅ Done |
| Interlink related service subpages | ✅ Done — "Related services" block added to all 7 generic service pages this session |
| Exact-match pages for target keywords #1 and #2 | ✅ Done — `/private-limited-company-incorporation-chennai`, `/gst-litigation-chennai` |

## Phase 4 — Competitor citation analysis

| Task | Status |
|---|---|
| Identify local competitors | ✅ Done via web search — see `COMPETITOR-ANALYSIS.md` (4 named firms) |
| Identify citation platforms competitors use | ✅ Done — Sulekha, Justdial, ICAI directory, RegisterKaro, QwikFilings, IndiaMART |
| Inspect competitor GBP citation footprint directly | ⚠️ Partial — Google blocked automated search from this session; needs a manual check from your phone (steps in `COMPETITOR-ANALYSIS.md`) |
| Register on matching directories with identical NAP | ⚠️ Copy drafted, submission needs you — see `LISTING-COPY.md`. I can't create these accounts myself; each needs your phone/email for OTP verification. |

## Ongoing

| Task | Status |
|---|---|
| Blog content calendar execution | ✅ 11 of 12 posts written and live at `/blog/<slug>` with full FAQ schema, Article schema, and internal links back to relevant service pages. The 12th (a client case study) is intentionally not written — it needs a real, named client, which I can't fabricate. |
| Mobile navigation menu | ✅ Done — hamburger menu with full service list, nav links, and call CTA, verified at 375px width |
| ICAI membership number disclosure | Not started — needs the actual number from you |
| Team bios / photos | Not started |
| Real client testimonials | Not started — none fabricated |

## Realistic timeline

The original audit estimated 60–90 days to see ranking movement once the
on-site fundamentals were fixed (they now are). GBP optimization, citation
building, and review accumulation typically take a similar or longer window
to compound — local ranking algorithms weight review recency/velocity over
time, not as a one-time signal. Expect incremental movement over the next
2–3 months rather than an immediate jump, and expect the "near me"/"nearby"
keywords specifically to track GBP progress more than any further website
changes.
