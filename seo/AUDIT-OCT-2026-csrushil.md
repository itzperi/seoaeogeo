# SEO / GEO / AEO and Local Audit: csrushil.com

**Date:** 14 October 2026  |  **Scope:** Full audit. Live crawl of all 166 URLs, the code in the repository, and the Google Business Profile (GBP) field checks.

## Scores

| Dimension | Live site now | Repository (latest commit, not yet live) | Status |
|---|---|---|---|
| SEO | 6/10 | 8/10 | On Track |
| GEO (AI search) | 7/10 | 8/10 | Strong |
| AEO (answer boxes) | 7/10 | 8/10 | Strong |
| Local (GBP + on-site) | 6/10 | 7/10 | On Track |

"Live" is what Google can see today. "Repository" is what the latest commit will show once it deploys.

**Top 3 priorities**
1. Deploy the latest commit (835b51f). The live homepage still shows the old title, H1 and description, and "Book a free consultation" in the meta description.
2. Add the ICAI membership number and FRN to the site and to GBP. Both are missing, and they are the largest trust gap for GEO and local.
3. Update the GBP profile as set out in section 4 below.

**Biggest strength:** the site is technically clean. All 166 live URLs return 200, with no redirect chains, no noindex and no canonical mismatches. AI crawlers are explicitly allowed.

## 1. Technical (live crawl, 166 URLs)

| Check | Result |
|---|---|
| HTTP status | 166 of 166 return 200 |
| Redirect chains and loops | None |
| Duplicate titles | None |
| Duplicate meta descriptions | None |
| Canonical mismatches | None |
| noindex on money pages | None |
| Broken internal links | None |
| Meta descriptions over 160 characters (live) | 4: statutory audit, transfer pricing, FEMA, one blog post. Fixed in the repository, not yet live |
| Orphan or near-orphan pages | 1 post with one internal link: /blog/company-name-rejection-reasons |
| Sitemap coverage | All 108 site routes are in the sitemap registries |
| Robots and AI crawlers | Allowed, with explicit named rules for GPTBot, PerplexityBot, ClaudeBot and others |

Note on the crawl: a rendered-page check (mobile layout, pop-ups, image loading) needs a human with a browser. This audit cannot see those.

## 2. GEO and AEO findings

- **Entity and E-E-A-T:** Organization, Person (CA Rushil C S) and WebSite schema are emitted, with sameAs links to LinkedIn and the Business Profile. Missing: the ICAI membership number and FRN. They are not in the code, so none is shown.
- **Reviews schema:** none, which is correct. Keep it that way unless you publish verifiable reviews.
- **Answer formats:** FAQ and direct-answer blocks on service and area pages, speakable markup on those templates, HowTo on process pages, Article schema on blog posts.
- **Gap (live):** the homepage has no speakable markup and its description says "Book a free consultation". The repository fixes both; neither is live yet.
- **Gap (repository):** the answer boxes and FAQ answers on older pages were not all rechecked to the 40–60 word range.

## 3. Repository changes (commit 835b51f, not yet live)

- 108 of 108 titles are 50–60 characters as rendered, end with the firm name, and are unique.
- 108 of 108 meta descriptions are 140–160 characters and unique.
- Homepage title and H1 now state the firm's services and location.
- Speakable markup on the homepage hero.
- Promotional words removed from visible text: best, top, leading, expert, premier, free consultation.

## 4. Google Business Profile: exact updates

Edit at business.google.com. Change one section at a time, and do not change the category and the address on the same day.

**Keep unchanged**
- Business name: `C S Rushil & Co.`
- Primary category: `Chartered accountant`

**Address (confirm it matches exactly)**
- `Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040`
- Use "Rd", not "Road". The profile pin must sit at 13.0859694, 80.1997378.

**Phone, website, booking**
- Phone: `+91 72001 49711`
- Website: `https://www.csrushil.com`
- Appointment link: `https://calendly.com/ceo-csrushil/30min`

**Hours:** Monday to Saturday 9:30 AM to 6:30 PM. Sunday closed.

**Secondary categories (add in this order, and check each name in the picker)**
1. Tax consultant
2. Tax preparation service
3. Auditor
4. Accounting firm
5. Accountant
6. Business management consultant
7. Financial consultant
8. Bookkeeping service
9. Payroll service

If a name isn't offered, skip it. Do not add lawyer, tax attorney or financial planner categories.

**Business description:** paste the 700-character text from section 5 of `seo/GBP-ACTIONS-OCT-2026.md`.

**Services:** add the 10 priority services with their descriptions from section 3a of the same file.

**Service areas (20 maximum):** Anna Nagar, Besant Nagar, Adyar, Alwarpet, Raja Annamalai Puram, Mylapore, Nungambakkam, Kotturpuram, Gopalapuram, Neelankarai, T. Nagar, Kilpauk, Velachery, Sholinganallur, Coimbatore, Madurai, Tiruchirappalli, Tiruppur, Salem, Hosur. Service areas don't change where you rank; the Anna Nagar address does.

**Posts:** publish the eight drafts in section 6, one per week from the week of 13 October. Each links to a page on the site.

**Photos:** office exterior and signage, interior, the team and a meeting room. Add two or three a month.

**Reviews:** send the review request from the WhatsApp template in section 8. Do not offer incentives or suggest wording. Reply to reviews without naming any client or their matter.

**Q&A:** Google has retired this section, so there is nothing to edit. The FAQ answers are on the site.

**Citations:** claim the listings in section 9 with the exact same name, address and phone.

## 5. Actions in order

1. Deploy commit 835b51f so the live site matches the repository.
2. Send the ICAI membership number and FRN. They will be added to the site, schema and footer.
3. Make the GBP updates in section 4.
4. Publish the first two GBP posts this week.
5. Ask for reviews from recent clients using the approved WhatsApp message.
6. Run the Google PageSpeed Insights and Rich Results tests on the live homepage and three pillar pages after the deploy.

## 6. Not verified from code

- Rendered mobile layout and text size at 375px.
- PageSpeed scores and Core Web Vitals.
- Google Business Profile content as Google displays it, and map-pack rank.
- Schema as Google parses it (the Rich Results Test).
- Whether the live site serves the repository's latest commit.
