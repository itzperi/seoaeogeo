# Company registration growth plans: how the two plans fit together

Plans:
- `01-COMPANY-REGISTRATION-CHENNAI.md`: hub, `/company-registration-chennai`
- `02-PRIVATE-LIMITED-INCORPORATION-CHENNAI.md`: money page, `/private-limited-company-incorporation-chennai`

Both use `_FACT-SHEET-company-registration.md` and `_BRIEF.md`.

## One owner per URL

Where both plans proposed the same tool or article, there is now one URL with one owner. The other plan links to it.

| Asset | Single URL | Owner plan | Other plan's role |
|---|---|---|---|
| Government fee and TN stamp duty calculator | `/tools/company-registration-government-fee-calculator` | 01 hub (all structures) | 02 links with `?structure=private-limited` preset. 02's tool T1 is no longer a separate build. |
| First-year deadline tracker | `/tools/first-year-compliance-deadline-tracker` | 01 hub (company and LLP) | 02 links with `?structure=private-limited` preset. 02's tool T3 is no longer a separate build. |
| Pvt Ltd document checklist | `/tools/pvt-ltd-document-checklist` | 02 | 01 links to it from the hub's Pvt Ltd row |
| Structure selector | `/tools/business-structure-selector` | 01 | 02 links to it for undecided readers |
| SPICe+ resubmission / CRC queries article | `/blog/spice-plus-resubmission-crc-queries` | 02 | 01's NEW `/blog/spice-plus-resubmission-fix` is dropped; 01 links to 02's post |
| Pvt Ltd vs LLP (two-way) | `/blog/private-limited-vs-llp-chennai-startups` | 02 (comparison C1) | 01 links to it but does not run its own upgrade. 01's comparison C1 is reassigned to 02, so 01 builds 4 comparisons. |
| Six-way structure comparison | `/blog/llp-vs-opc-vs-pvt-ltd` | 01 | 02 links to it |
| FAQ pages | `/faq/company-registration` (01) and `/faq/private-limited-company` (02) | Each its own | Each FAQ appears on one page only. The structure-choice FAQs go on 01's page; SPICe+, stamp duty and ROC FAQs go on 02's page. |
| Case studies | `/case-studies/company-registration` (01) and `/case-studies/private-limited-incorporation-chennai` (02) | Build one template, two entries | Both stay noindex until a client gives written consent |
| Kanchipuram Sriperumbudur–Oragadam block | `/company-registration-kanchipuram` | 01 owns the page | 02's Pvt Ltd block is added there by 01's owner |

## Keyword split (unchanged from the fact sheet)

| Owner | Owns |
|---|---|
| `/company-registration-chennai` | company registration in Chennai; business registration Chennai; which structure; company registration cost Chennai (all structures) |
| `/private-limited-company-incorporation-chennai` | private limited company registration / incorporation in Chennai; pvt ltd registration Chennai; SPICe+; ROC Chennai; TN stamp duty |

## Do before any publishing (both plans)

1. Fix the Google Business Profile hours, which currently show "Open 24 hours".
2. Add the ICAI membership number and firm registration number to `src/lib/site.ts`.
3. CA Rushil C S signs off the verification registers: 01 §13.3 (48 items) and 02 §13.3 (V1–V45), plus the facts already on the live pages that each plan's section 1 lists. The overlapping items, starting with s.149(3) wording, are cleared once.
4. ICAI check on the word "free" in "free 15-minute consultation".
5. Align the s.149(3) wording on both live pages. The Pvt Ltd page currently says it two different ways.

## Combined weekly effort

The two calendars run in parallel at about 2× the brief's weekly load. If the team cannot sustain that, run 02 (BOFU money page) in weeks 1–6 and 01 from week 4, staggering the overlapping GBP posts.

---

# Addendum (4 Nov 2026): plans 03, 16, 20–25 and 90

## Further single-owner decisions
| Asset | Single URL | Owner | Others |
|---|---|---|---|
| Composition vs regular GST post | `/blog/regular-vs-composition-gst-scheme` | 20 GST registration (the choice is made at registration) | 21 links; 21's duplicate post is dropped |
| GST scheme tool (composition vs regular, QRMP vs monthly) | `/tools/gst-filing-scheme-selector` | 21 GST returns | 20 links with `?question=composition`; 20's separate checker is dropped, leaving 20 with 2 tools |
| GSTR-1 / 3B / 2B reconciliation method | `/blog/gstr-2b-itc-reconciliation-guide` | 21 | 22 links; 22's duplicate post is dropped |
| LUT for exporters | `/blog/lut-for-exporters` and LUT copy | 21 | 20 removes LUT as a sub-service from `/gst-registration-chennai` and links |
| REG-03 clarification notices | `/gst-notice-reply-chennai` | 22 | 20 stops at the application stage and links |
| GST notice vs litigation | "Has an order been issued?" No goes to 22 `/gst-notice-reply-chennai`. Yes goes to `/gst-litigation-chennai` | — | — |

## Shared routes to build once
`/tools/<name>`, `/faq/<topic>`, `/case-studies/<topic>`, plus plan 90's `/how-we-work` and `/resources/<name>`, are proposed by several plans. Build one shared layout, breadcrumb and schema pattern for each route group before any plan ships its own page there. Case studies stay noindex until the client gives written consent. FAQ hubs in use: company-registration, private-limited-company, llp-registration, digital-signature-certificate, gst-registration, gst-return-filing, gst-notice-reply, income-tax-return-filing, income-tax-notice. Each FAQ appears on one hub only.

## Thin-page gate (applies to every plan)
Plans 22, 24 and 25 gate their audience and problem pages: a page ships only if its copy is at least 60% unique, otherwise it becomes a section on the money page. Apply the same gate to all plans. It matters most for plan 16 (DSC): its 10 new audience and problem pages are unlikely to clear it for a low-ticket service, so start them as sections on `/digital-signature-certificate-chennai`.

## Shared host pages
Plans 16, 20, 22, 24 and 25 each add a section to the same Chennai area pages (Anna Nagar, T Nagar, OMR, Guindy, Ambattur and others) and to the `/income-tax-consultant-<city>` pages. Put these into one "Services for <area> clients" block per page, with a short paragraph and link per service, so the area pages do not turn into stacks of service copy.

## Scheduled posts that plans link to before they go live
- `/blog/gst-registration-after-company-incorporation`: dated 8 Jan 2027, linked from 01, 02 and 20
- `/blog/convert-partnership-firm-to-llp`: dated 4 Dec 2026, owned by 03
- `/blog/company-registration-timeline-day-by-day` and `/blog/authorised-vs-paid-up-capital`: scheduled
Bring the dates forward or hold the links until each post is live. A link to an unpublished post returns 404.

## Decision for the firm: GST litigation page vs plan 22
Plan 22 notes that `/gst-litigation-chennai` (from the Nov 2026 overhaul) still has early-stage content: "SCN Reply" in the title, "DRC-01 SCN replies" in the meta, ASMT-10 and DRC-01A/DRC-01 playbook cards, a "received a show-cause notice" FAQ, and a REG-17/19/21 card. The firm's brief asked for those cards. To make the split clean, rename the title to "GST Litigation & Appeals in Chennai | GSTAT & Demand Orders", keep the cards as short summaries that each link to `/gst-notice-reply-chennai`, and move the REG-17 card's detail there. Decide before shipping plan 22.

## Live-site fixes found across plans (not yet made)
- `StartingFees` placeholder on `/gst-return-filing-chennai` would print a professional fee once filled. Remove it, because ICAI rules do not allow published fees.
- Turnaround promises: "3–7 working days" (GST registration page and online-sellers post) and "often the same day" (DSC page)
- GSTR-2A written where GSTR-2B is meant (online-sellers post)
- Conflicting figures: LLP late fees (blog vs page); cash-deposit thresholds and the old-regime rule of thumb (ITR page vs posts)
- Meta descriptions 1–2 characters over 155 on three GST return pages; the ITR meta names NRIs (plan 27's intent); the GST notice meta says "appeals"
- Booking link named "30min" while the offer is a 15-minute consultation
- Independence: `/india-subsidiary-compliance-cfo` includes statutory audit in a retainer. Set one published rule on audit vs non-audit services (Companies Act and ICAI, verify)
- Form names mixed old/new on the subsidiary page (Form 3CEB vs Form 48)
- Data-security claims on live pages (NDA, named logins, work inside client systems) need the firm's confirmation

## Sign-off load
Every plan has its own verify register (section 13.3 or Appendix A). Many items repeat across plans (s.149(3), ITR/GST due dates, 2025-Act section mapping, ICAI on "free"). CA Rushil C S can sign each repeated item once, then tick it in every register.

## Plan 27 (NRI tax), added 4 Nov 2026
- NRI income tax notices belong to plan 25 at `/income-tax-notice-reply-for-nris`. Plan 27 no longer proposes its own post (`/blog/income-tax-notice-nri-abroad`) and links to plan 25's page instead.
- New country pages `/nri-tax-services-singapore` and `/nri-tax-services-canada` must pass the same 60% unique-copy gate as the existing UAE, UK and USA pages. Australia and Malaysia stay deferred until Search Console shows demand.
- Live-page risk to fix first: the UAE page FAQ about salary credited to an Indian account (plan 27, L7). It also omits the 60 + 365 day residency test (L1).

## Status of live-site fixes (4 Nov 2026, commit a5e8035)
Fixed:
- StartingFees block and fee config removed from all four pages that rendered it
- NRI main-page FAQ now gives both residency tests; UAE salary FAQ rewritten
- Turnaround promises removed: GST registration page and online-sellers post, DSC page, Pvt Ltd sidebar
- s.149(3) wording changed to "during the financial year" on 13 pages and one post
- Subsidiary page: audit-independence line (s.144); Form 3CEB / Form 48 dates clarified
- Five meta descriptions fixed (length, NRI and "appeals" intent)

Checked and left unchanged (the plans misread these):
- "GSTR 2A" in the online-sellers post is correct, because marketplace TCS data appears in GSTR-2A, not 2B
- LLP late fees: the page describes the Form 3 slab fee and the blog the per-day fee for Forms 8 and 11. These are different rules, not a conflict
- Cash deposits: ₹1 crore / ₹50 lakh is the return-filing trigger and ₹10 lakh is the bank-reporting (SFT) threshold. Different rules, not a conflict
- Old-regime "₹4–5 lakh" rule of thumb: not on the ITR page as plan 24 described

Still open, for the firm:
- Decision on the GST litigation page title and cards (see above)
- Contact page says "we typically respond within one business day". Keep it only if the firm meets it
- Booking link named "30min" while the offer is a 15-minute consultation (Calendly event setting)
- Data-security claims on live pages need confirming
- ITR page: confirm CBDT Circular 7/2026 and the 21 Nov 2026 audit due date exist as stated
- GBP hours ("Open 24 hours"), ICAI membership and firm registration numbers
