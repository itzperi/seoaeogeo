# Execution report: enquiry growth system, 14 October 2026

Repository: https://github.com/itzperi/seoaeogeo (branch master). Live site: https://www.csrushil.com.

## Headline

- The latest SEO sweep (835b51f) is live: the live homepage title, H1, speakable markup and description match the repository.
- The WhatsApp-only change (4151623) is **not** live. The live `/api/leads` still answers a POST with 400, so the old lead form is still active on the live site. Deploying the latest commit is the first priority.
- The Singapore page (438fb1e) is in the repository and returns 404 live until the deploy.
- No rubric score is claimed as 10 out of 10. Measured results are below.

## Workstream status

| Workstream | Status | What was done | What is not done |
|---|---|---|---|
| WS-1 Enquiry flow (WhatsApp only) | Done in code; not live | Removed the lead save helper and the unused Supabase insert and publishable key. Corrected a stale comment. The lead endpoint returns 410. Click tracking validates but stores nothing. Grep: no write path remains (`from("leads")`, `insertRow`, `saveLead`, `cta_clicks` only in the admin read path). | Live deploy. The live site still runs the old form. |
| WS-2 Local and GBP readiness | Partly done | `seo/GBP-CHECKLIST-VERIFY.md` (16 fields checked against `site.ts`). `seo/GBP-POSTS-OCT-DEC-2026.md` (the eight posts, with UTM links). `seo/CITATIONS.md` (nine listings, all "to check"). | Profile edits and photos are the firm's to make. The legal name punctuation mismatch needs a firm decision. ICAI number and FRN are missing. |
| WS-3 High-ticket pages | Partly done | Singapore page `/india-subsidiary-for-singapore-companies` built and registered in the catalog, the India-entry group, the country schema, llms.txt and the India-entry hub. Director rule corrected to the previous calendar year (s.149(3)) on the UK, US and company pages. | Verification of the other high-ticket pages against the checklist (section 7 of the prompt) was not completed. The apostille competent authority for Singapore is not named (to verify on hcch.net). |
| WS-4 Content engine | Audit only | `seo/BLOG-TOPIC-AUDIT-OCT-2026.md`: all six topics checked against existing posts. Decisions: upgrade capital gains, upgrade the GST 48-hours post into the step-by-step reply guide, keep the GSTAT post, upgrade the compliance checklist, upgrade the transfer pricing post, upgrade the NRI filing post. | The six upgrades are not written. Non-allowed citation domains (gstcouncil.gov.in, indiacode.nic.in) remain in some posts. |
| WS-5 International | Partly done | Singapore page. Country pages checked for the director rule. | Full attestation guide check for the twelve listed countries is not done. |
| WS-6 SEO, GEO and AEO | Checks done; fixes partly done | `scripts/seo-check.py` passes: 109 routes, every title 50 to 60 characters, every description 140 to 160, no duplicates, no banned words in source. Removed "free consultation" from pages, components and posts. Rephrased "on top of" and "near the top". | Byline and "Last updated" checks on every page. Alt text audit. Rich Results and validator tests (need the live site). |
| WS-7 Local and technical health | Partly done | Live crawl (earlier this round): 166 of 166 URLs return 200; no duplicate titles or metas; no broken internal links found. | Internal inlink and orphan check after this round's changes. Rendered mobile layout at 375px (human check needed). Image dimensions and WebP audit. |
| WS-8 Analytics without storing leads | Done (docs) | `seo/ANALYTICS-SETUP.md` (Search Console and GA4 steps; event names checked against `src/lib/track.ts`). `seo/KPI-DASHBOARD.md` (weekly metrics and sources). | The firm's decision on GA4 event tracking is pending (checkboxes in the setup doc). |
| WS-9 Deploy and verify | Partly done | Live homepage verified against the repository (title, H1, speakable, description). Live `/api/leads` returns 400, confirming the old lead route is live. | Deploy of 4151623 and later. `npm run indexnow` after the deploy. Live check of the Singapore page and the new GST and company pages. |

## Commits in this round

- b3978ee: WS-1, no write path to the database; WhatsApp-only enquiries.
- 438fb1e: WS-3, India subsidiary page for Singapore companies.
- 6b53327: WS-6, remove "free consultation", banned words, and correct the director test. Adds `scripts/seo-check.py`.
- b9f0660: WS-2, GBP field check, eight posts, citation list, blog topic audit.
- 4151623: WhatsApp-only enquiry and the growth roadmap (earlier in this round).

Links: https://github.com/itzperi/seoaeogeo/commit/b3978ee, https://github.com/itzperi/seoaeogeo/commit/438fb1e, https://github.com/itzperi/seoaeogeo/commit/6b53327, https://github.com/itzperi/seoaeogeo/commit/b9f0660, https://github.com/itzperi/seoaeogeo/commit/4151623.

## Verification with evidence

- `python scripts/seo-check.py`: routes checked 109; PASSED (titles and descriptions in range and unique; no banned words in source).
- `npx tsc --noEmit`: passes.
- `npx eslint src scripts`: passes.
- Live homepage (curl): title "Chartered Accountants, Anna Nagar | C S Rushil & Co.", H1 matches the repository, speakable present, description 157 characters.
- Live `/api/leads` POST: 400 (old behaviour). Expected 410 after deploy.
- Live `/india-subsidiary-for-singapore-companies`: 404 (expected until deploy).
- Live sitemap: 166 entries (earlier crawl: all return 200).

## Human decisions outstanding

1. Deploy the latest commit. Vercel must build from itzperi/seoaeogeo (branch master).
2. ICAI membership number and FRN.
3. Legal name punctuation: "C S Rushil & Co, Chartered Accountants" (site) or "C S Rushil & Co., Chartered Accountants" (prompt).
4. Working hours, and whether in-person meetings are offered to clients from other cities.
5. Whether to run Google Ads (check ICAI advertising guidelines first).
6. GA4 event tracking: enable (page path and service only) or skip.
7. Whether to publish the Singapore NRI content as a separate page (currently a section plan only).
8. Confirm the Singapore apostille competent authority on hcch.net.
9. Confirm the CA sign-off items in `seo/CA-SIGNOFF.md`.

## Rubric statement (measured, not claimed)

- SEO: titles and descriptions meet the rules across 109 routes in the repository. The live site is on the SEO sweep, not the latest commits. Rich Results and PageSpeed were not run.
- GEO: AI crawlers allowed; Organization, Person and speakable present in the repository. ICAI number and FRN still missing. Schema validity not checked with the validator.
- AEO: direct answers and FAQ blocks on templates; speakable on the homepage. Blog upgrades not done.

## 100 enquiries a day

This is not a 90-day target. The planning targets (5 to 10 a day by month 3, 15 to 30 by month 6, 40 to 70 by month 12) assume the site is deployed, Google Business Profile is updated and reviews are steady. The 3% visitor-to-chat rate in the roadmap is an assumption and must be replaced with measured figures.
