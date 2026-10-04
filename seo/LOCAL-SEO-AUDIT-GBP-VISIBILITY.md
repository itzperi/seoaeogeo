# Local SEO Audit — Making the Google Profile appear wherever the website ranks
**C S Rushil & Co., Anna Nagar, Chennai · csrushil.com · 4 October 2026**

## Executive summary: health score 58 / 100

| Category | Weight | Score | Why |
|---|---|---|---|
| GBP completeness | 25% | 60 | Categories and services rebuilt (32 services). **The map pin is still about 3.9 km from the office.** The address text now has a stray comma. |
| NAP consistency | 20% | 55 | Website, schema and footer match each other. The GBP address differs ("13th**,** Main Road"), and the GBP pin doesn't match the website's coordinates. |
| On-site local SEO | 20% | 70 | City and area in titles and H1s, AccountingService schema with geo, service and area pages. **The live site is still last week's build**, so none of this month's fixes are visible to Google yet. |
| Reviews & reputation | 20% | 55 | 4.8★ from 57 reviews, but almost all are about 20 weeks old (velocity has stalled). One review contains template text. |
| Local content & links | 15% | 40 | Few local backlinks or citations (ICAI CA Connect, JustDial, Bing and Apple not confirmed). |

### The honest answer to "show my profile for every search my website appears in"
Google shows the Business Profile (map pack) **only for searches with local intent**: "GST consultant Chennai", "tax audit Anna Nagar", "CA near me". Your Search Console data shows the website currently appears mostly for **informational** searches ("Form 3CEB due date", "GST for freelancers", "LLP Form 8 Form 11"). Google never shows a map pack for those, for any business. No setting changes that.

What is achievable is that **for every local search where the website appears, the profile appears too.** That depends on four things: the pin, the category/service match, the entity link between website and profile, and reviews.

## Critical (fix now)

| # | Issue | Evidence | Fix |
|---|---|---|---|
| 1 | **Map pin still wrong** | Google Maps (CID 9218487927688159679) shows plus code **466F+5V** = 13.1104, 80.2247. It moved about 200 m since 3 Oct but is still **about 3.9 km** from the office (13.0859, 80.1997 = **35PX+9V**). | GBP → Edit profile → Location → Adjust pin → satellite view → drag onto the building on J-Block 1st Street, 13th Main Road. Do not change anything else that day. |
| 2 | **Address text changed** | GBP now reads "…1st Street, **13th, Main Road**…". The website reads "…1st Street, **13th Main Road**…". | Remove the comma after "13th" so it matches the website exactly. |
| 3 | **Website changes aren't live** | csrushil.com serves a cached build about 5–6 days old. New pages return 404 and the canonical tag is still non-www. | Vercel → Deployments: fix the failed build, or set Production Branch = `master` (Settings → Git). |

## High priority (2 weeks)

| # | Action | Why it helps the profile appear |
|---|---|---|
| 4 | Restart reviews: 2–3 a week, each naming the service ("GST notice", "tax audit", "virtual CFO") | Google matches review text to searches and highlights it in the map pack |
| 5 | Finish adding the 32 services and 3 extra categories (PDF from 3 Oct) | The category is the strongest relevance signal for each search |
| 6 | Update the GBP appointment link and post buttons to https://calendly.com/ceo-csrushil/30min | Booking actions shown in the map pack |
| 7 | Set the GBP website link to https://www.csrushil.com | Matches the canonical domain |

## Done in code today (live once Vercel deploys)
- **Exact listing link:** schema `sameAs` and the new `hasMap` point to the profile's permanent CID URL (`maps.google.com/?cid=9218487927688159679`) instead of a short redirect link.
- **"On Google Maps" strip** on every service, specialist and area page: identical name, address, phone and hours, plus links to the profile and directions. Repeating the same details and the listing link across pages tells Google the website and the profile are one business.

## Medium priority (30 days)
- Claim ICAI CA Connect, JustDial, Bing Places (import from GBP) and Apple Business Connect with identical details.
- Weekly GBP posts that link to the matching service page.
- 10–15 real photos taken at the office after the pin fix.

## Competitive snapshot (from 3 Oct local results)
Anna Nagar results are won by firms within about 1.5 km of 13th Main Road with 35–49 reviews (K. Balamurugan 4.9/35, Smaya 5.0/49). Your 57 reviews at 4.8 already beat that; the wrong pin is what keeps you out.

## Action order
1. Pin + address comma (owner, 10 minutes) → 2. Vercel deploy (owner) → 3. Services/categories → 4. Weekly reviews → 5. Citations → 6. Posts and photos.
