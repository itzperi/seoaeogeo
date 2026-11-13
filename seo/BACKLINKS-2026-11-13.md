# Backlink and authority analysis: www.csrushil.com

Date: 2026-11-13. Read-only research. No forms, accounts or outreach.

## 0. What could and could not be measured

| Item | Result |
|---|---|
| claude-seo runtime (backlinks_auth.py) | Not ready ("Run /seo setup"). Fell back to direct curl. |
| MOZ_* / BING_* / OPR env vars | None set. Tier 0 only. |
| Moz / Ahrefs / Semrush / DataForSEO / Open PageRank | No keys. No DA, spam score, referring-domain counts, anchors or velocity. |
| Common Crawl URL index (index.commoncrawl.org) | FAILED. Every query returned 502/504, across 6+ attempts on CC-MAIN-2026-43, -39, -34, -30, -21. The latest collection is CC-MAIN-2026-43 (Oct 2026). Result: **zero referring pages found via CC, and inbound-page counts for csrushil.com and competitors are NOT measured.** |
| CC host/domain web graph (cc-main-2026-aug-sep-oct) | Partly done: I streamed the 2.5 GB domain-ranks file and filtered for target domains. Edge files (who links to whom) were not practical. See section 4 for the completeness caveat. |
| Search-engine "link:" style lookups | Not usable (no API). A Google HTML fetch returned a page but I did not parse it as evidence. |

**Bottom line: I found no referring domains for csrushil.com. That is not proof there are none; it means the free sources I could reach did not expose them.**

## 1. Referring domains/pages found

None verified from a third-party source.

Outbound/self-declared profiles only (from the site's homepage HTML, Parsed, confidence 0.95). These are the site's own claims, not confirmed backlinks:
- https://in.linkedin.com/company/csrushil-co (JSON-LD sameAs)
- https://in.linkedin.com/in/rushil-cs (person sameAs)
- https://www.instagram.com/carushil_c_s/
- https://maps.google.com/?cid=9218487927688159679 (Google Business Profile)
- WhatsApp link wa.me/917200149711

The homepage links out to only these. There are no outbound links to authority, ICAI or government sources from the homepage.

## 2. Anchor text

Not visible. No inbound link data was obtained, so anchor distribution cannot be assessed.

## 3. Toxic / spam signals

- No inbound data, so no toxic-link ratio can be computed. I make no claim of clean or spammy.
- Duplicate-content check: `csrushil.digitalvicky.com` does NOT resolve. `nslookup` returned "Non-existent domain" (NXDOMAIN) and curl on http/https returned nothing. The old copy is not a live duplicate-content risk from DNS. Residual caveat: Google may still have old URLs indexed. Check with `site:csrushil.digitalvicky.com` in Google or Search Console, and remove any stale links pointing there.
- Canonical host: `https://csrushil.com` returns 308 to `https://www.csrushil.com/`. Fine.
- robots.txt allows all crawlers, including GPTBot, Googlebot and Bingbot. Sitemap has 201 `<loc>` entries, consistent with about 200 pages.
- The homepage HTML is about 243 KB. Crawlable.

## 4. Authority comparison (Common Crawl domain graph, Aug-Sep-Oct 2026, confidence 0.50, domain-level)

Rows from `cc-main-2026-aug-sep-oct-domain-ranks.txt.gz`. Lower position = stronger. Total domain nodes: about 135.0M.

| Domain | Harmonic centrality pos | PageRank pos | Note |
|---|---|---|---|
| indiafilings.com | 19,727 | 50,160 | Benchmark filing platform |
| taxguru.in | 43,724 | 103,851 | Tax news / publication |
| caclubindia.com | 58,157 | 270,754 | CA community |
| vakilsearch.com | 358,662 | 176,014 | Filing platform |
| legalwiz.com | 654,869 | 1,200,456 | In the page-1 incorporation set (you named legalwiz) |
| taxscan.in | 1,050,973 | 527,603 | Tax news |
| legalwiz.in | 1,088,294 | 1,174,468 | |
| corpbiz.io | 2,280,493 | 1,348,355 | In the page-1 set |
| kanakkupillai.com | 2,435,832 | 723,270 | In the page-1 set |
| dalmaf.com | 27,505,999 | 61,946,640 | Weak by this measure, yet ranks on page 1 (see below) |
| **csrushil.com** | **not found** | **not found** | See caveat |

Caveats, stated plainly:
- The stream ended at my 20-minute curl cap, so I cannot prove I scanned the whole file. The file is sorted by harmonic centrality and my last hit was at position 27.5M of about 135M. Absence of csrushil.com is therefore **conclusive only down to roughly position 27.5M**, and unproven below that.
- I also searched for mncindiafilings, incorpadvisor, a Chennai CA firm (eshwar and madhavan variants) and the old digitalvicky domain. None were found in that range. That is consistent with small sites sitting deep in the tail, or with my guessed domain strings being wrong. I did not verify those competitors' real domains.
- Common Crawl is a sample crawl. "Not found" means "not prominent in the crawled link graph", not "no links".
- Inbound page counts for kanakkupillai.com, corpbiz.io and a Chennai CA firm: **not obtained** (URL index outage). I will not give numbers.

Interpretation (inference, not measured fact): national filing platforms sit in the top 2.5M domains and have been linked for years. A two-year-old local firm domain most likely sits far below them. But dalmaf.com (position about 27.5M) also ranks on page 1, so link authority alone does not explain the incorporation result. Relevance, dedicated service pages and conversion-style content probably matter as much.

## 5. Why the site likely does not rank, from the link/authority side

Labelled as hypotheses. I could not confirm them with link-tool data.

1. **No visible third-party link footprint.** Neither Common Crawl graph data nor the site's own homepage shows any external authority link or citation source. Treat as likely weak (confidence low-moderate).
2. **"CA firm in Chennai" is a local-pack query.** The map-pack leaders (S. Madhavan & Associates, Eshwar & Co, RN Associates) win mostly on Google Business Profile signals (reviews, proximity, categories, citations). Links matter less. Action items are reviews, GBP completeness and NAP citations (section 6).
3. **"Private limited company incorporation" is dominated by established national brands** with strong domain graphs (rows above). Competing head-on is unrealistic. Target the Chennai-modified long tail and local proof (Chennai ROC jurisdiction, TN-specific steps).
4. **Brand-entity signals are thin.** There are only LinkedIn and Instagram profiles. No evidence of ICAI/SIRC directory presence, chamber or incubator pages, or press mentions.
5. **No external citations in own content.** Linking out to ICAI, MCA and GST pages in guides helps trust but gives no inbound authority.

## 6. Prioritised link and citation prospects (Chennai / India, ICAI-compliant)

Reachability was checked with curl from this machine on 2026-11-13. "200" = loaded. "unverified" = timed out or blocked from here, not necessarily down. I did not confirm that any of these sites offer a listing or accept a link. Each is a place to **check eligibility**, not a guaranteed placement.

ICAI guardrails: no paid links, no paid "top CA" lists or rankings, no solicitation-style outreach, no unverifiable claims. Factual profile listings, member directories, event speaking and unsolicited-quality editorial contributions only. Verify against the current ICAI Code of Ethics and website guidelines before each submission.

### Priority 1: professional body and identity (free, factual)
1. https://caconnect.icai.org/ (200). ICAI-run member platform. Check whether a member or firm profile can carry a website URL. Fit: highest trust and relevance.
2. https://www.sirc-icai.org/ (200). ICAI Southern Regional Council, which covers Chennai. Fit: member and event pages, CPE seminars where a member can speak. Chennai branch deep links I guessed returned 404, so navigate from the homepage.
3. https://www.icai.org/post/regional-councils (200). Entry point to the Chennai branch and council bodies. Fit: find the branch sites that list members or events.
4. https://www.caclubindia.com/ (200; CC rank 58k). Member profile and Q&A community. Fit: expertise-led answers on incorporation and tax. Profile links are factual.
5. https://taxguru.in/ (200; CC rank 44k). Accepts author contributions per its own policy (verify). Fit: strong topical authority. Offer genuinely useful analyses, not promotional posts.
6. https://taxscan.in/ (200). Tax news site. Same logic as TaxGuru; check its contribution policy.

### Priority 2: Chennai startup and business ecosystem (relevance for incorporation queries)
7. https://www.startuptn.in/ (200). Tamil Nadu startup mission. Check whether service-provider, mentor or resource listings exist for CA/compliance help.
8. https://www.startupindia.gov.in/ (200). National portal. Check mentor and service-provider registration.
9. https://www.tiechennai.org/ (200). TiE Chennai. Fit: founder events and a member directory. Speaking on incorporation and compliance basics is natural.
10. https://www.cii.in/ (200). CII, Southern Region based in Chennai. Fit: membership listing, SME events (membership may carry a fee; that is a normal association fee, not a paid link, but check it does not breach ICAI rules on how you promote).
11. https://fisme.org.in/ (200). Federation of Indian Micro and Small and Medium Enterprises. Fit: SME compliance workshops.
12. https://www.nasscom.in/ (200). Startup and SME resources. Lower local fit.
13. https://nsrcel.org/ (200). IIM Bangalore incubator. Not Chennai, so low priority.
14. https://www.iitmrp.com/ and https://www.iitmincubationcell.org/ (unverified from here). IIT Madras Research Park and its incubation cell. Fit: Chennai deep-tech startups needing incorporation help. Confirm the URLs.
15. https://www.madraschamber.org/ and https://www.mcmcmadras.org/ (both unverified from here). Madras Chamber of Commerce and Industry. Fit: Chennai business body. Confirm URLs and whether a member list exists.

### Priority 3: local citations (NAP consistency; mostly nofollow, so their value is for the map pack)
16. Google Business Profile (already live, cid in the homepage). Keep categories, services, hours and reviews complete. Highest-impact local lever.
17. https://www.bing.com/maps. Bing Places claim. Free.
18. Apple Business Connect. Free. Not curl-tested.
19. https://www.justdial.com/Chennai (200). Free basic listing only. Do not buy promotions (ICAI-sensitive).
20. https://www.sulekha.com/ (200). Free basic listing.
21. LinkedIn company page (already linked). Ensure the About text and URL match.

### Priority 4: local media (earned, not solicited)
22. https://www.thehindubusinessline.com/ (200) and https://www.thehindu.com/ (200). Chennai-based business desks. Earned route: publish data-led local content (for example Chennai/TN compliance changes) that journalists may cite. Respond to journalist queries only when they come to you. No paid placement.
23. https://inc42.com/ (200) and https://yourstory.com/ (403 from here, unverified). Startup press. Same earned-only logic.

### Priority 5: content-driven (no outreach needed)
24. Publish a Chennai-specific, factual resource (for example a Tamil Nadu incorporation checklist citing MCA, ROC Chennai, and GST pages). Link out to https://www.mca.gov.in/ (403 from here, unverified), https://www.gst.gov.in/ (200) and https://www.msme.gov.in/ (200). The inbound benefit comes later from citation by others. Do not claim any inbound result.
25. Check Search Console "Links" report. It is free and the only source for the site's real inbound profile. Export top linking sites, top linked pages and anchors, and send them back for a full analysis.

## 7. Recommended next steps

1. Pull Search Console Links data (free, authoritative). This is the quickest way to replace the gaps in this report.
2. Retry the CC index later, for example `https://index.commoncrawl.org/CC-MAIN-2026-43-index?url=csrushil.com&matchType=domain&output=json`, or run the claude-seo setup so the scripts can retry with proper tooling.
3. Prioritise map-pack work (reviews, categories, citations) for "CA firm in Chennai" before links.
4. Skip head-on competition for "private limited company incorporation" and aim for Chennai-modified and TN-specific long-tail pages with proof of local expertise.
5. Check `site:csrushil.digitalvicky.com` in Google to rule out stale indexed duplicates, even though DNS is gone.
6. For E-E-A-T and technical depth, run `/seo content https://www.csrushil.com` and `/seo technical https://www.csrushil.com` (not duplicated here).

Confidence summary: site HTML facts, 0.95 (Parsed); CC domain graph, 0.50 (domain-level, quarterly, partly scanned); URL reachability, point-in-time curl; all prospect fit statements are my judgement, not verified listing policies.
