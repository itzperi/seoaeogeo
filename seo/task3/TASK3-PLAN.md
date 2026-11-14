# Task 3: area and city pages, audit and plan (awaiting approval)

**Prepared:** 14 Nov 2026 from the live site (195 sitemap URLs).

- **Data:** `seo/task3/area-pages.csv`, 50 location pages in 5 families.
- **"Unique words":** words on the page outside any 5-word phrase shared with a sibling page in the same family (main content only, excluding header, nav and footer).
- **Inbound links:** distinct pages linking to it from body content.
- **Impressions:** Search Console, last 3 months, from the owner's export.

## 1. Results against the 600-unique-word rule

| Family | Pages | Pass | Fail |
|---|---|---|---|
| Chartered accountant areas (Chennai) | 12 | 1 (Anna Nagar, 1,301 unique) | 11 (258–500 unique) |
| Income-tax consultant areas (Chennai) | 7 | **7** (1,067–1,478 unique, 19–26% shared) | 0 |
| Company registration cities (Tamil Nadu) | 16 | 12 | 4: Vellore 596, Kanchipuram 581, Tirunelveli 509, Thoothukudi 468 |
| GST litigation cities | 6 | 6 (1,296–1,676) | 0 |
| Income-tax cities outside Chennai | 9 | 9 (1,437–2,107) | 0 (but only 1–2 inbound links each) |

All 50 are indexable today. No existing redirect points at any of them, so the new redirects can be single-hop.

## 2. Proposed actions

### A. Rewrite to pass (step 4 of the brief)

| Page | Now | Action |
|---|---|---|
| /chartered-accountant-anna-nagar-chennai | Passes (1,301) | Enrich per the brief: client types the area has (business mix, not claims about our clients), travel time, area compliance topics, 5 area-only FAQs. Walk-in wording fixed (Task 7). Keep the no-branch line |
| /chartered-accountant-kilpauk-chennai | Fails (360) | Rewrite to at least 600 unique words with the same elements |
| /chartered-accountant-mogappair-chennai | Missing | **Create** (Mogappair East is about 1.7 km from the office) |
| /chartered-accountant-aminjikarai-chennai | Missing | **Create** (about 2.7 km from the office) |

- **Travel times** will come from an OpenStreetMap route calculation, stated as an off-peak estimate. No invented figures.
- **Reviews:** none already on the site can be reused (testimonials are switched off), so the review element is left out, as Rule 5 requires.

### B. Other failing Chennai area pages (10)

| Page | Impressions | Recommendation |
|---|---|---|
| Ambattur | 13 | **Rewrite** in the next wave (most impressions) |
| OMR / Sholinganallur | 11 | **Rewrite** in the next wave |
| T Nagar | 11 | **Rewrite** in the next wave (closest to passing, 500) |
| Velachery | 9 | `noindex,follow` until rewritten; remove from sitemap |
| Porur | 8 | `noindex,follow` until rewritten |
| Guindy | 7 | `noindex,follow` until rewritten |
| Nungambakkam | 7 | `noindex,follow` until rewritten |
| Adyar | 6 | `noindex,follow` until rewritten |
| Mylapore | 4 | `noindex,follow` until rewritten |
| Tambaram | 4 | `noindex,follow` until rewritten |

**Why noindex rather than a 301:** it is reversible, keeps each page usable for visitors and links, and avoids sending area searches to a page about a different place. The 7 pages had 45 impressions in total over 3 months. Each comes back into the index when it is rewritten to 600 unique words.

### C. The seven income-tax area pages (brief step 3): **your decision needed**
The brief asks to merge them into a new `/income-tax-consultant-chennai`. Two facts argue against a new URL:
1. All seven **pass** the uniqueness rule, at 19–26% shared text.
2. `/direct-tax` already owns "tax consultant in Chennai" and "income tax consultant Chennai" (title "Tax Consultant in Chennai | Income Tax, TDS & NRI Tax", live since 14 Nov). A new `/income-tax-consultant-chennai` would compete with it for the same searches.

| Option | What happens |
|---|---|
| **B1 (recommended)** | 301 the seven into `/direct-tax`, which already ranks and holds the keyword. Move each page's unique material (HNI capital gains, ESOPs, property sales) into `/income-tax-consultant-for-hni-chennai` or `/direct-tax` where useful |
| B2 (as briefed) | Create `/income-tax-consultant-chennai` from the best of the seven and 301 them there. `/direct-tax` would then need retargeting to "direct tax services" to avoid two pages chasing one keyword |
| B3 | Keep all seven: they pass the rule |

### D. Four failing Tamil Nadu company-registration city pages (no impressions)
- **Vellore (596) and Kanchipuram (581)** are a few words short. Add district-specific facts: ROC jurisdiction, and the district's industrial estates from official sources. Plus area FAQs.
- **Tirunelveli (509) and Thoothukudi (468):** the same top-up, or `noindex,follow` if you'd rather not invest in pages with no demand yet.

### E. Passing pages with weak internal links
The 9 income-tax city pages and 4 of the GST litigation cities have only 1–2 inbound links. Task 5 (internal linking and the `/locations` hub) fixes this.

## 3. Redirect and sitemap mechanics
- **Status code:** Next.js `permanent: true` sends **308**. New redirects will use `statusCode: 301` as the brief requires (Google treats both as permanent). Existing redirects can be switched too, if you want.
- **Single hop:** each old URL goes straight to its final page. No old URL redirects to a page that itself redirects.
- **Sitemap:** merged and noindexed URLs are removed from the sitemap via the registries (`src/lib/areas.ts`, `location-pages.ts`).
- **Links:** footer, homepage `#areas` and internal links are updated so nothing links to a redirect.

Draft redirects: `seo/task3/redirects.csv`, which assumes option B1.

## 4. Order once approved
1. Create Mogappair and Aminjikarai; rewrite Anna Nagar and Kilpauk.
2. Apply option B1, B2 or B3 to the income-tax pages (301s).
3. `noindex,follow` the 7 Chennai area pages and drop them from the sitemap.
4. Top up or noindex the 4 Tamil Nadu city pages.
5. Update the registries, footer, homepage areas list and internal links.
6. Verify with the type check, lint, render and a redirect test.
