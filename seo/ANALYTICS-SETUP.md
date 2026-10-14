# Analytics setup for csrushil.com (Search Console and GA4)

Status: steps for the firm to follow. Only add GA4 events if the firm agrees (see the decision at the end).

## 1. Google Search Console (do first)

1. Go to https://search.google.com/search-console and add a property for `https://www.csrushil.com`.
2. Verify ownership with a DNS TXT record (recommended) or the HTML tag. Do not verify with a method that needs a code change to the site unless the DNS route is closed.
3. Submit the sitemap: `https://www.csrushil.com/sitemap.xml`.
4. Check the Coverage (Pages) report after two weeks. Expect the new pages to show as "Discovered" and then "Indexed" over several weeks.
5. Use URL Inspection on the homepage and the three pillars: income tax for HNIs, GST litigation and private limited incorporation. Request indexing once after each deploy.
6. Set the country filter when reviewing queries, to see clicks from the United States, the United Kingdom, the UAE and Singapore.

## 2. Google Analytics 4 (only if the firm agrees)

1. Create a GA4 property for the site and a web data stream for `https://www.csrushil.com`.
2. Copy the Measurement ID (format `G-XXXXXXXXXX`). Add it to Vercel as `NEXT_PUBLIC_GA_ID`, then redeploy. The site does not add the tag until this variable is set.
3. Turn on "enhanced measurement" for page views only. Turn off form tracking (the site has no forms).
4. Mark these events as conversions. The code sends them (src/lib/track.ts): `click_whatsapp`, `click_call`, `click_calendly` and `enquiry_open`. Each carries only the placement, the page path and, where relevant, the service name. None carries a name, phone number or message text.
5. Do not link GA4 to Google Ads until the firm decides to run ads (see the decision list).

## 3. Privacy rules for analytics

- No personal data in any event, URL parameter or report: no names, phone numbers, emails, client matters or message text.
- The WhatsApp message is typed by the visitor and opened in WhatsApp. The site never reads it.
- Use the firm's privacy notice to say that analytics cookies are used, if GA4 is enabled.

## 4. What to check after setup

- Search Console: impressions and clicks for the target queries, weekly.
- GA4: sessions by landing page and by country.
- Confirm that a test WhatsApp tap produces one `click_whatsapp` event with no personal data.

## Decision for the firm

- [ ] Enable GA4 event tracking for WhatsApp, call and booking clicks (placement, page path and service only).
- [ ] Keep page views only.
- [ ] Skip analytics: write "skipped by firm decision" in the execution report.
