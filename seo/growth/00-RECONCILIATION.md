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
