# ICAI Code of Ethics — Website Compliance Audit

Chartered Accountant firms in India are bound by the ICAI Code of Ethics,
which restricts how a CA firm can market itself online — this is stricter
than normal marketing law, and getting it wrong risks disciplinary action
from the Institute, not just a weak marketing page. I audited the site
against the requirements you provided and fixed what was in my control.

## Essential requirements — status

| Requirement | Status |
|---|---|
| Member/firm name | ✅ Present everywhere via `BUSINESS_NAME` |
| Head office address | ✅ Present (Anna Nagar office, exact address) |
| Branch addresses | N/A — single office; add if a branch ever opens |
| Contact numbers | ✅ Present, single consistent number everywhere |
| Professional email | ✅ `admin@csrushil.com` present everywhere |
| **Establishment year** | ⚠️ **Missing — I don't have this and won't guess it.** Give me the firm's actual founding year and I'll add it to the About page and Organization schema in one pass. |
| Partner qualifications | ⚠️ Partial — added a real Leadership section for CA Rushil C S (Certified FAFD, Start-up Mentor) on `/about-us`. No other partners are named on the current site content, so I can't add profiles for people I have no real details on. |
| Passport-size photographs | ❌ Not added — I won't use a placeholder or stock photo standing in for a real staff photo; that would itself look unprofessional and arguably misleading. Send real photos and I'll add them properly. |
| Professional articles / blog | ✅ 11 published posts at `/blog` |
| News section | ⚠️ Not a separate section — the blog is doing double duty as articles + updates. If ICAI expects a visually distinct "News" area, I can add one, but I'd need actual firm news/announcements to populate it with, not filler. |
| Job openings | ✅ `/career` page exists |
| **Report website URL to ICAI within 30 days of launch** | ❌ Not done — this is a filing only you can make with ICAI directly, once the site is actually live. Flagging it clearly so it doesn't get missed after deployment. |

## Prohibited practices — audit findings and fixes

I searched the entire codebase for superlatives, fee-schedule language, and
government-liaison-style claims. Found and fixed:

| Issue found | Location | Fix |
|---|---|---|
| "Which is the **best** CA firm near me..." | Homepage FAQ question | Reworded to "How do I find a chartered accountant near me..." — same search intent, no superlative self-claim |
| "How to Choose the **Best** CA in Chennai" | Blog post title + slug | Renamed throughout to "How to Choose **a** Chartered Accountant in Chennai" (new slug: `how-to-choose-a-chartered-accountant-in-chennai`) — the content itself was always genuine buyer guidance, not self-promotion, but the title read as a superlative claim |
| "our **most requested** registration" | Formation page, Private Limited Company description | Removed — factual popularity claims can still read as solicitation |
| "The **fastest, lowest-cost** way..." | Formation page, Sole Proprietorship description | Reworded to a neutral factual description, removing both the speed and cost superlatives |
| `priceRange: "₹₹"` | Organization schema (`src/lib/schema.tsx`) | Removed — even an implied fee-tier indicator sits too close to the fee-disclosure restriction to be worth keeping |

**Checked and already compliant, no changes needed:**
- **No client testimonials or logos** anywhere on the site — this was already true by design (I never fabricate testimonials), and it happens to also be the ICAI-compliant position.
- **No fee schedule** — the site consistently says "get a free consultation for an itemised quote" rather than publishing rupee amounts for professional fees. Every ₹ figure on the site is a statutory threshold or government penalty amount (tax audit limits, TDS penalties, MSME turnover slabs) — never the firm's own fee.
- **No pop-ups or push advertising** — the site has none.
- **No government-liaison claims** — nothing on the site implies special government access or connections; searched specifically for this and found nothing.

## What still needs you

1. **Establishment year** — send it and I'll add it in one pass.
2. **Additional partner/team member details** (names, qualifications, real
   photos) for anyone beyond CA Rushil C S you want profiled.
3. **File the website URL with ICAI within 30 days of going live** — this is
   a regulatory filing only the firm can make; note the date you deploy so
   you don't miss the window.
4. Decide if you want a visually separate "News" section from the blog, and
   if so, what actual announcements should populate it at launch.
