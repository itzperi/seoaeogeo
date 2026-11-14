# Task 6: blog hygiene (14 Nov 2026)

## 1. Audit summary (`blog-audit.csv`)
**Posts audited:** all 87, of which 64 are published and 23 are written and scheduled.

**Columns:** url, title, status, published, updated, word_count, topic, closest_post, shared_text_pct, title_similarity, recommendation and reason.

**How the measures work:**
- **Word count:** the article body only. The FAQ block is not counted.
- **shared_text_pct:** the share of a post's 5-word phrases that also appear in its closest post.
- **title_similarity:** how much the two titles overlap, on a scale of 0 to 1.

**Overlap:** text overlap between posts is low. The highest is 5.4%, between the two posts on foreign and NRI directors, and those cover different rules. So there is almost no duplicate content left after the 14 merges done earlier.

| Recommendation | Posts | What it means |
|---|---|---|
| Keep | 58 | Distinct topic with enough depth. This includes the 23 scheduled posts, which go live on their dates. |
| Refresh | 28 | 26 thin posts under 800 body words, mostly early posts of 300 to 500 words. Two more use only Income-tax Act, 1961 numbers: `tds-on-rent` and `why-income-tax-notices-issued`. Keep each URL and expand to 900+ words. |
| Merge | 1 | `gst-show-cause-notice-first-48-hours` (454 words) covers the same notice journey as `after-gst-show-cause-reply`. Fold its checklist into that post and 301 the URL. **Not done: this needs your approval**, like the earlier merges. |

## 2. Author and dates on every post (done in code)
- **Header line:** the sticker at the top of every post now always shows "Published <date> · Updated <date>". If a post has never been updated, the updated date equals the published date.
- **Byline:** "By CA Rushil C S, Chartered Accountant · Published by C S Rushil & Co." stays below the title. Its separate "Content updated" note is removed, so the date isn't shown twice.
- **Author bio:** a new "About the author" box sits after the article body on every post. It has two lines:
  - CA Rushil C S, practising Chartered Accountant, ICAI member, Certified FAFD and Start-up Mentor, leading the firm from Anna Nagar.
  - Links to the About page and to ICAI's member search ("verify a chartered accountant on ICAI").
  - No membership or registration numbers.
- **Schema is unchanged:** the Article already carries the author (Person), datePublished and dateModified.

## 3. Proposed publishing calendar: 2 posts a week for 12 weeks
The site already holds 23 written posts with future dates. They run 3 a week until mid-December, then thin out after 19 January. The proposal below evens them out to **Tuesday and Friday, 2 a week**, and adds **one new post** to fill the 24th slot. Nothing is bulk published: each post goes live on its own date through the existing date gate.

**Proposed date changes:** 4 posts move later, from the third weekly slot in weeks 1 to 4 to weeks 10 to 12. All other dates stay as they are, apart from the Thursday posts moving to the nearest Tuesday or Friday. Each change is one line in `src/lib/blog.ts`. **I have not changed any dates yet; say the word and I will.**

| Week | Tuesday | Friday | Supports (target search) |
|---|---|---|---|
| 1 (17, 20 Nov) | INC-20A: Declaration for Commencement of Business | First Board Meeting Checklist for a New Company | Pvt Ltd incorporation |
| 2 (24, 27 Nov) | Appointing a Company's First Auditor: Rules and ADT-1 | Opening a Current Account for a New Company | Pvt Ltd incorporation, statutory audit |
| 3 (1, 4 Dec) | Convert a Proprietorship to a Private Limited Company | Convert a Partnership Firm to an LLP: Form 17 Guide | Company registration |
| 4 (8, 11 Dec) | Convert an LLP to a Private Limited Company (URC-1) | OPC to Private Limited Conversion: INC-6 Process | Company registration |
| 5 (15, 18 Dec) | Private Limited Company for E-commerce Sellers | Company Registration for IT and SaaS Startups in Chennai | Pvt Ltd incorporation in Chennai |
| 6 (22, 25 Dec) | Company Registration for Manufacturers in Tamil Nadu | Share Allotment After Incorporation: A Founder's Guide | Company registration (TN cities) |
| 7 (29 Dec, 1 Jan) | ESOP-Ready Articles of Association for Startups | Shareholders' Agreement for Founders: What to Cover | Startup company registration |
| 8 (5, 8 Jan) | 10 Company Registration Mistakes Founders Make | GST Registration After Company Incorporation | Company registration, GST registration in Chennai |
| 9 (12, 15 Jan) | AGILE-PRO-S Explained: EPFO, ESIC, GSTIN and Bank | Private Limited Company Penalties for Non-Compliance | ROC compliance |
| 10 (19, 22 Jan) | Section 140 Startup Tax Holiday: Eligibility Guide | MTD for Income Tax: What Records Sole Traders Need From 2026 *(moved from 19 Nov)* | Startup tax; outsourced bookkeeping UK |
| 11 (26, 29 Jan) | Can an Overseas Bookkeeper Do My BAS? *(moved from 26 Nov)* | UAE E-Invoicing 2027: What to Fix in Your Books Now *(moved from 3 Dec)* | Outsourced bookkeeping (Australia, UAE) |
| 12 (2, 5 Feb) | Catch-Up Bookkeeping: How Long It Takes and What to Send *(moved from 10 Dec)* | **NEW: GST registration queries (REG-03): common reasons and how to reply** | GST registration in Chennai |

**Why the new post:** "GST registration in Chennai" is a target search, and only one scheduled post supports it. The new post answers the officer-query problem the `/gst-registration-chennai` page already describes, in more depth.

### Gap topics for the 12 weeks after this
These are drawn from the target searches that have the least blog support. Each one would link to the money page shown.

| Topic | Links to |
|---|---|
| ITR filing for tax year 2026-27: what changes under the Income-tax Act, 2025 | /income-tax-return-filing-chennai |
| Tax audit under Section 63 of the Income-tax Act, 2025: who needs it and by when | /tax-audit-chennai |
| A private limited company's first statutory audit: timeline and documents | /statutory-audit-chennai |
| Reading AIS and TIS before you file your return | /income-tax-return-filing-chennai |
| Form 15CA and 15CB when an NRI sells property in Chennai | /form-15ca-15cb-chennai, /nri-property-sale-tds-chennai |
| GST on commercial rent in Chennai: forward charge and reverse charge | /gst-return-filing-chennai |
| What a virtual CFO sets up in the first 90 days | /virtual-cfo-services |
| Choosing between an LLP and a private limited company for a professional practice | /llp-registration-chennai, /private-limited-company-incorporation-chennai |

## 4. Refresh track (alongside new posts)
Refresh 2 posts a week, keeping the URL. Each refresh:
- expands the post to 900+ words;
- adds the official source and Income-tax Act, 2025 numbering where relevant;
- sets `updated` in the post meta.

Suggested order:
1. `tds-on-rent` and `why-income-tax-notices-issued`, which have outdated section numbers.
2. The GST posts that feed the GST pages: `gst-threshold-is-a-trigger`, `gst-freelancers-consultants`, `itc-mismatch-notices`, `gstr9-annual-return-checklist`, `lut-for-exporters`.
3. `nri-itr-filing`, `tds-return-filing-deadlines` and `safe-cash-deposit-limit`.
4. The remaining thin posts, in the order listed in the CSV.

The merge of `gst-show-cause-notice-first-48-hours` waits for your approval.
