# Search Console "Why pages aren't indexed": what each status means and what was fixed (14 Nov 2026)

**Source:** the owner's Page indexing report on 14 Nov 2026, plus the example URLs pasted on 13 Nov.

| Status | Pages | Cause on this site | Fix | Your action in Search Console |
|---|---|---|---|---|
| **Page with redirect** | 27 | The 14 thin blog posts merged into service pages, the 7 income-tax area pages merged into `/direct-tax`, the old `/ca-fees-chennai`, `/formation-of-business-entity` and `/nri-tax-services-usa-uk` URLs, and trailing-slash variants such as `/about-us/` and `/trust/`. | Working as intended. All redirects are now single-hop **301**s (Task 8). None is in the sitemap. No internal link points at a redirect. | None. Let the started validation finish; these URLs are meant to stay out of the index. Do not "request indexing" for them. |
| **Not found (404)** | 1 | A link to a post that was not yet published. Three live links pointed to scheduled posts. | `PostLink` shows those links as plain text until a post is live (27480bb). All 23 scheduled posts are now published (14 Nov), so every one of those links resolves. A source scan finds 0 broken internal links. | After the deploy, open the URL in the report and click **Validate fix**. |
| **Alternate page with proper canonical tag** | 1 | A duplicate URL, such as a `?` parameter or `/md/` copy, that correctly points its canonical at the main page. | Working as intended. | None. |
| **Crawled, currently not indexed** | 9 | The examples were thin posts, 300 to 560 words: strike-off-vs-winding-up, statutory-vs-tax-vs-internal-audit, what-virtual-cfo-reviews-monthly and similar. Google crawled them and judged them not worth indexing yet. | All 25 posts under 600 words are expanded to 900+ words, with an updated date, 5 FAQs, official sources and internal links (this release). The 10 thin area pages are rewritten to 600+ unique words. | After the deploy, use **URL Inspection > Request indexing** for the expanded posts. That is about 10 a day, the Search Console limit. Then **Validate fix**. |
| **Discovered, currently not indexed** | 33 | New pages Google knows about but has not crawled yet. This is common on a young domain with many new URLs. Crawl priority follows internal links and perceived quality. | `/locations` hub, six-group header and footer links, contextual service-to-blog and blog-to-service links (Task 5), thin pages expanded, and the sitemap kept clean (canonical, indexable, 200 only). | Resubmit `sitemap.xml`. Request indexing for the money pages first: `/`, `/private-limited-company-incorporation-chennai`, `/company-registration-chennai`, `/gst-registration-chennai`, `/direct-tax`, `/chartered-accountant-anna-nagar-chennai`, `/locations`. Run `npm run indexnow` for Bing after each deploy. |

## Order of work after the deploy goes live
1. **Sitemaps:** in Search Console, go to Sitemaps and resubmit `https://www.csrushil.com/sitemap.xml`.
2. **Day 1:** request indexing for the 7 money pages above, plus the 3 new nearby area pages.
3. **Days 2 to 4:** request indexing for the expanded thin posts, 10 a day.
4. **Days 5 to 6:** request indexing for the new "CA firm in Chennai" cluster posts and the rewritten area pages.
5. **After two weeks:** click **Validate fix** on "Crawled, currently not indexed" and "Not found (404)".
6. **Bing:** run `npm run indexnow` after every deploy. Bing feeds ChatGPT and Copilot answers.

## What not to do
- Do not request indexing for redirected URLs.
- Do not remove pages from the sitemap to "fix" Discovered or Crawled statuses.
- Do not bulk-create thin pages. That is what put pages in "Crawled, not indexed" in the first place.
