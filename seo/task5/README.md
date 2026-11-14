# Task 5: internal linking and navigation (14 Nov 2026)

## Files
- `internal-links.csv`: every internal link on the live site, crawled from the 183 sitemap URLs before this change deployed.
  - Columns: source, target, anchor, zone.
  - Zone is one of: header, nav, body (inside `<main>`), footer.
- `internal-links-added.csv`: the links this change adds. They appear on the live site once Vercel deploys it.

## Orphan check (live crawl)
- No sitemap page has zero inbound links.
- Four service pages had no links from page text, only from menus. All four now get a link in body text:
  - `/gst-return-filing-for-clinics`, `/gst-return-filing-for-startups` and `/gst-return-filing-for-manufacturers`: the GST hub's "which GST situation are you in" table now has one row per sector. Before, a single row covered all of these sectors.
  - `/fssai-license-chennai`: the restaurants GST page's related services.
- `/blog`, `/videos`, `/faq` and `/tools` are linked from the header and footer, which is enough for utility pages.

## What changed
1. **Header:** six groups replace the previous menus: Company & LLP registration, GST, Income tax & NRI, Audit, Virtual CFO & Accounting, and About & Contact. No area links are left in the header.
2. **Area links** live in the footer, which now features the indexable pages nearest the office, and on the new `/locations` hub.
   - `/locations` lists every Chennai area page, Tamil Nadu company-registration city, income tax and GST litigation city, and overseas page.
3. **Blog to service:** the 4 posts that had only one service link now have two or three.
4. **Service to blog:** service pages with fewer than three related guides get extras from `src/lib/related-posts.ts`. The template shows up to five published guides.
   - Guides with a future publish date appear automatically on that date.
   - `/trust` shows two guides until `trust-vs-society-vs-section8` is published.
