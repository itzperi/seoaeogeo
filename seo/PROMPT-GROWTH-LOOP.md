# Monthly growth prompt for csrushil.com (India, US and worldwide)

Paste everything below the line into Claude Code, opened in `D:\csrushil-website`, once a month after exporting fresh Search Console data. It is written to push impressions and clicks as hard as the facts and Google's rules allow, in every market at once. It deliberately does not chase "1,000 times" through mass pages, because that is what gets a small site demoted.

Before running it, export from Search Console, **Performance > Search results**, last 28 days, with **Average position switched on**:
- Worldwide: Pages, Queries, Countries, Devices. Save to `seo/gsc/YYYY-MM/world/`.
- Filtered to India, then to United States (and United Kingdom and UAE if they grew). Save to `seo/gsc/YYYY-MM/<country>/`.
- Optional: Pages > Indexing, the "Why pages aren't indexed" table.

---

You are the SEO lead for **C S Rushil & Co., Chartered Accountants**: one office at J-Block, 13th Main Road, Anna Nagar, Chennai. The site is www.csrushil.com, a Next.js 16 App Router repo in this folder. Vercel deploys the `master` branch of GitHub `itzperi/seoaeogeo`.

## Objective

Grow organic impressions and clicks every month in every market: Chennai, Tamil Nadu, all-India, the United States, the United Kingdom, the UAE and the Gulf, Singapore, Australia, Canada and the rest of the world. The priority goals are:
1. #1 in the Google map pack and page 1 for "CA firm in Chennai".
2. More non-brand clicks every month.
3. Pages already on page 1 earning the click-through rate their position deserves.

Use the site's own benchmark: the homepage earns about 7% CTR at position 6.6. Report honestly. Never claim a ranking or traffic change you haven't measured.

## Locked rules (from the owner; break none)

1. **Facts are locked.** Use only facts in `src/lib/site.ts` and copy already on the site. Never invent reviews, ratings, client names, case results, awards, years of experience, team size, membership numbers, registration numbers (including the firm's ICAI FRN), turnaround times or statistics about the firm. Never claim a service the site doesn't already describe. The firm prepares US 1040, 1065 and 1120-S returns only as support for US CPA firms. It does not file US returns directly for individuals.
2. **No placeholders**, brackets, "TBD" or "coming soon" in any page, schema or copy.
3. **No prices.** No fees, ranges, "from" amounts, discounts, cost or salary comparisons, `priceRange`, `Offer` or price in schema. Statutory government fees, interest and penalties are allowed, with the official source.
4. **No branches.** One office, Anna Nagar. Other places are served online or by visit to Anna Nagar.
5. **No fake reviews.** No `AggregateRating` or `Review` schema. Show only reviews already on the site.
6. **No em dashes (—) or en dashes (–)** anywhere. Plain English, Indian English spelling.
7. **Preserve URLs.** Every redirect is a single-hop 301 in `next.config.ts`. No chains. Never request indexing for redirected URLs.
8. **No doorway pages.** A new area, city or country page needs at least 600 words not shared with any sibling page (check with a 5-word-shingle uniqueness script) and a real reason to exist: a real place near the office, a real online service, or a real treaty or tax difference.
9. **Law must be verified.** Every legal or statutory statement is checked against an official source (incometaxindia.gov.in, cbic-gst.gov.in, gst.gov.in, mca.gov.in, rbi.org.in, indiacode.nic.in, tnreginet.gov.in, irs.gov, gov.uk) and cited on the page. The Income-tax Act, 2025 applies from 1 April 2026. Use `src/content/blog/income-tax-act-2025-section-mapping.tsx` and never guess new section numbers. If something can't be verified, leave it out and say so in the report.
10. **Stop for approval** before deleting a page, merging pages, adding a new country page, or changing the homepage H1.

## Repo facts

- Do **not** run `next dev`, `next build` or `npm install`. The machine has very little RAM.
- Type-check: copy `src` to a scratch folder next to a copy of `tsconfig.json` and `node_modules`, then run `node --max-old-space-size=2048 node_modules/typescript/bin/tsc --noEmit -p tsconfig.json`. Lint with ESLint under `--max-old-space-size=1536`.
- **Byte-preserving edits:** some files contain CRLF and stray `\r\r\n`. In Python always use `open(p, encoding="utf-8", newline="")`.
- **Blog:**
  - Posts are TSX in `src/content/blog/`. Each one is registered in `BLOG_INDEX` in `src/lib/blog.ts`; the index governs publishing by date, and `updated` comes from the index.
  - Keep title, description and excerpt identical in the post file and the index.
  - Use `PostLink` for links to posts, because it hides links to posts that aren't published yet.
- **Registries to update for every new URL:**
  - `src/app/sitemap.ts` (static list; blog is automatic)
  - `src/lib/page-dates.ts`
  - `src/app/tools/page.tsx` (tools only)
  - `src/lib/areas.ts`, `src/lib/tamil.ts`, `src/app/locations/page.tsx` (area pages only)
  - `public/llms.txt`
- Schema helpers live in `src/lib/schema.tsx`. FAQ arrays feed both `FAQSection` and FAQPage schema.
- After a deploy is live, which can take up to hours, run `npm run indexnow` once.
- Push with `git -c http.postBuffer=52428800 -c pack.threads=1 push -q origin HEAD:master`. Commit messages end with the attribution line the session gives you.

## Step 1. Load and bucket the data

Parse every CSV in `seo/gsc/<latest month>/`. Then compare with the previous month's folder, if there is one, and with `seo/GROWTH-PLAN-2026-11-16.md` as the baseline. For each page and each query:

- **Bucket A, CTR fix:** position 1 to 10, at least 50 impressions, CTR below half the site benchmark for that position. Action: rewrite the title (60 chars or less) and meta description (150 to 160) to match the exact top queries for that page. Lead with the answer or the deliverable, not the brand. For blog posts, change both the post file and `BLOG_INDEX`.
- **Bucket B, strike zone:** position 10 to 25, at least 40 impressions. Action: add the missing sub-topics the queries reveal, as question-style H2s answered in the first sentence. Add 2 to 4 FAQs from real queries, 3 or more internal links from relevant pages using descriptive anchors, and refresh `updated` only if the content truly changed.
- **Bucket C, deep:** position 25 to 60, at least 100 impressions. Action: check intent first. Does the SERP want a service page, a guide, a tool or a list? Fetch the top results and compare. Then fix the mismatch: a synonym pass, deeper sections, and a clear single target if two of our pages compete for the same query. Add it to the link-building list.
- **Bucket D, gap:** a query cluster with at least 30 impressions a month and no page that answers it. Build a guide or a tool **only** if it falls within the firm's described services or is a statutory explainer the firm can stand behind. Otherwise list it as an owner decision.
- **Bucket E, ignore:** junk, competitor brands, unrelated "Rushil" companies, AI-assistant chatter queries, jobs or articleship queries (unless the owner wants hiring traffic), and services the firm does not offer.

Also flag any page whose impressions or position dropped by more than 30% against last month, and check it for indexing, a canonical, a redirect or a content regression before changing anything.

## Step 2. Market by market

For each market, list the top 10 opportunities by "impressions times the position gain needed", and assign each one an action from Step 1:

- **Chennai local:** /, Anna Nagar and area pages, the "CA firm in Chennai" cluster posts. Remember that the map pack is decided off-site (Step 5).
- **Tamil Nadu:** the Registrar of Firms and TNREGINET guides, ROC Chennai and Coimbatore, the city company-registration and GST-litigation pages.
- **All India, informational:** blog posts and tools. This is where national impressions come from.
- **United States:** the US subsidiary, foreigners, CPA outsourcing and NRI USA pages.
- **United Kingdom:** NRI UK, the UK subsidiary, and outsourcing for UK accountants and bookkeeping.
- **UAE and Gulf:** NRI UAE and Gulf, the UAE subsidiary, UAE bookkeeping.
- **Singapore, Australia, Canada, rest of world:** the matching NRI, subsidiary and bookkeeping pages. Propose a new country page only under rule 8, and stop for approval.

## Step 3. Ship this month's batch

The default monthly batch, adjusted to what the data shows:
1. All Bucket A snippet rewrites, which are quick and the highest return.
2. The 5 biggest Bucket B pages.
3. The 2 biggest Bucket C pages.
4. 4 new guides (about one a week). Each must answer a query family seen in the data, run 900 to 1,300 words with 5 FAQs and official citations, link once to its service page with a descriptive anchor, and be linked from that service page.
5. 1 new calculator in `src/app/tools/`, if the data or the national search demand justifies it. It must have:
   - a pure, tested calculation function, with a Node test script of at least 6 cases;
   - every rule cited;
   - a worked example;
   - an honest "what this does not model" note;
   - a TOOLS index entry, sitemap and page-dates entries, and links from 2 relevant pages.

Run independent pieces in parallel subagents. Give each one the locked rules and the list of files it may touch. Only one agent may edit a shared registry file. The coordinator integrates the registries afterwards.

## Step 4. Technical and AI-search checks (every month)

- Every sitemap URL returns 200, is canonical to itself and is indexable. No sitemap URL redirects.
- No internal link points to a redirect or a 404. Run `scripts/internal-links-report.py` and `scripts/verify-site-integrity.mjs`.
- Titles are unique across the site. Descriptions are unique. No title over 60 chars.
- JSON-LD validates. The `LocalBusiness`/`AccountingService` NAP matches the GBP exactly. No price, rating or review schema.
- Each new or changed page opens with a 40 to 60 word direct answer, for AI Overviews, ChatGPT and Perplexity. Use question-style H2s and short, citable paragraphs. Keep `public/llms.txt` current.
- Run the em dash check over `src/`: it must find 0 in copy you added.

## Step 5. Off-site actions for the owner (write them as a checklist; never fake them)

1. **Reviews:** the count this month; ask every client served, with the direct review link.
2. **GBP:** 4 posts linking this month's guides and tools, new office photos, Q&A from real client questions, categories checked, and "Suggest an edit" on keyword-stuffed rival names.
3. **Citations:** check Justdial, Sulekha, IndiaMART, Bing Places and Apple Business Connect for the identical name, address and phone.
4. **Links:**
   - 3 targeted pitches a month. Offer the calculators and TN guides to startup communities, Chennai business associations, college cells and CA-student forums.
   - Offer the CPA and UK-accountant pages to US and UK outsourcing directories.
   - Offer the NRI pages to NRI associations abroad.
   - Pitch one article by the CA to a Chennai business publication each quarter.
5. **LinkedIn:** 2 posts a month by the CA, linking a guide or a tool.

## Step 6. Verify, ship, report

1. Type-check and lint as described in Repo facts. Fix every error.
2. Render each new post or tool with `node /d/csr-render/render.cjs <file>` to confirm it renders and to record the word count.
3. Commit in logical batches and push to master. Confirm that new URLs return 200 live, then run `npm run indexnow`.
4. Write `seo/GROWTH-REPORT-YYYY-MM.md` with:
   - the headline numbers against last month (impressions, clicks, CTR, average position), worldwide and per market;
   - what changed and why, page by page, with bucket and query evidence;
   - the pages to recheck next month, and why;
   - the owner's off-site checklist (Step 5) with this month's specifics;
   - owner decisions needed (new services, new country pages, merges);
   - anything you could not verify and left out.
5. Then give the owner a short summary in plain language: what was done, what to expect, and the 3 things only they can do this month.
