# Blog Topic Audit, October 2026

Scope: six topics checked against `src/content/blog/*.tsx` and the registry in `src/lib/blog.ts`. Word counts are approximate. Posts dated after 2026-10-14 are hidden by `isPublished()`, so only live posts are treated as existing. No site files were changed.

Site-wide findings (for a separate decision):
- "free consultation" appears in 35 blog posts, breaking the rule.
- Non-allowed domains are cited in several posts (incometaxindia.gov.in, tnreginet.gov.in, gstcouncil.gov.in, indiacode.nic.in, gst.gov.in, plus Instagram embeds).

---

## T1. Capital gains on Chennai property (12.5% vs 20% indexed)

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| capital-gains-tax-property-sale | Capital Gains Tax on Selling Property in Chennai: 2026 Guide | 2026-09-19, upd 2026-10-12 | ~1,870 | How is tax on a Chennai flat or plot sale computed, and should I pick 12.5% or 20% indexed |
| joint-development-agreement-tax-chennai | Joint Development Agreement Tax for Chennai Landowners | 2026-10-12 | ~1,710 | Tax on JDA deals (adjacent niche, not a duplicate) |

**Decision: UPGRADE** `capital-gains-tax-property-sale`

Problems:
- Cites non-allowed sources: incometaxindia.gov.in and tnreginet.gov.in. Replace with incometax.gov.in or remove.
- CII values (384 for 2026-27, 376 for 2025-26), Form 141 and the 1 April 2026 TDS date are unsourced. Verify before keeping.
- Verify the non-resident limb of the direct answer against section 112.

Outline: Keep the existing question H2s and six FAQs. Direct answer (about 50 words): "For a resident individual or HUF selling land or a building acquired before 23 July 2024, tax is the lower of 12.5% on the gain without indexation and 20% on the indexed gain. Later acquisitions pay 12.5% without indexation." Tables: keep the existing 12.5% vs 20% worked table; add an acquisition-date vs rate table. Six FAQs: keep the existing six.

---

## T2. GST notice reply, step by step (DRC-01, ASMT-10, DRC-06)

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| gst-show-cause-notice-first-48-hours | GST Show-Cause Notice: What to Do in the First 48 Hours | 2026-09-19 | ~700 | What to do right after receiving a show-cause notice |
| after-gst-show-cause-reply | What Happens After You Reply to a GST Show Cause Notice | 2026-09-19 | ~510 | What follows a filed reply (hearing, order) |
| section-74a-gst-notice | Section 74A GST Notice: Time Limits, Penalty and Reply | 2026-10-12 | ~1,620 | Section 74A limits, penalty, DRC-01 to DRC-06 reply |
| itc-mismatch-notices | ITC Mismatch Notices: Why They Happen and How to Respond | 2026-09-19 | ~520 | GSTR-2B mismatch notices (adjacent) |

**Decision: OVERLAP.** Upgrade `gst-show-cause-notice-first-48-hours` into the step-by-step reply guide. Keep `section-74a-gst-notice` as the Section 74A specialist and link to it. Fold `after-gst-show-cause-reply` into the upgraded post or redirect it.

Gaps: no post mentions ASMT-10 (zero hits). The 48-hours post has no DRC-01 or DRC-06 steps. DRC-06 is the reply to DRC-01; my understanding is that ASMT-10 replies go in ASMT-11. Verify on cbic-gst.gov.in.

Outline: H2s: "What is the difference between a DRC-01 notice and an ASMT-10 notice?"; "How do you reply to a GST show-cause notice, step by step?"; "Which form carries the reply, and what must it contain?"; "What happens if you miss the reply deadline?"; "When does a personal hearing get called?" Direct answer (about 50 words): "A GST show-cause notice is uploaded on the portal with a summary in Form DRC-01. You reply in Form DRC-06 within the period stated, usually 30 days, attaching documents that answer each allegation, and ask for a personal hearing. ASMT-10 notices on return mismatches are answered separately." Tables: notice type, form, reply form, time limit; a day-by-day reply timetable. Six FAQs: reply time limit; missed deadline; extension; ASMT-10 vs DRC-01; whether a CA must file; what happens after a demand order.

---

## T3. GSTAT appeal in Tamil Nadu

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| gst-appellate-tribunal-gstat-explained | How to File a GSTAT Appeal in Tamil Nadu: Step by Step | 2026-09-19, upd 2026-10-12 | ~1,870 | How to file APL-05 at GSTAT from Tamil Nadu |
| eway-bill-detention-section-129-appeal | E-Way Bill Detention Under Section 129 | 2026-10-12 | ~1,840 | Appeal route for detention (adjacent) |
| tiruppur-export-refund-rejection | Export Refund Rejected? A Guide for Tiruppur Exporters | 2026-10-12 | ~1,810 | Refund rejection (adjacent) |

**Decision: EXISTS-GOOD.** Question-style structure, allowed sources only, no firm promotion or forbidden words, links to `/gst-litigation-chennai`.

Verify before publishing: TN bench list against gstat.gov.in/state-bench; the 31 July 2026 window; the 1 October Finance Act 2025 rule; pre-deposit caps.

---

## T4. Compliance calendar for a foreign-owned Indian subsidiary

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| post-incorporation-compliance-checklist | First-Year Compliance Calendar for New Companies (2026-27) | 2026-09-19, upd 2026-10-12 | ~1,810 | First-year deadlines for any new company |
| annual-roc-filing-calendar | Annual ROC Filing Deadlines: Calendar for Chennai Companies | 2026-09-19 | ~470 | Annual MCA deadlines (thin, has "free consultation") |

Weak adjacent matches: `foreign-national-director-indian-company` (directors, not calendar), `nri-director-private-limited-company` (directors).

**Decision: OVERLAP.** Upgrade `post-incorporation-compliance-checklist` with a foreign-ownership layer. Fold `annual-roc-filing-calendar` into it.

Gaps: no FEMA or RBI reporting (FC-GPR, annual FLA return), no transfer pricing note, no link to `/india-subsidiary-compliance-cfo`. Verify timings on rbi.org.in.

Outline: H2s: "What does a foreign-owned Indian subsidiary file each year?"; "Which FEMA and RBI returns apply, and when?"; "When does transfer pricing reporting apply?" Direct answer (about 50 words): "A foreign-owned Indian subsidiary runs the normal MCA and income-tax calendar plus FEMA reporting. Share issues to a non-resident need FC-GPR, and the annual FLA return is filed with the RBI. Transfer pricing reporting applies where there are related-party transactions." Tables: month-by-month calendar; regime, form, due date. Six FAQs: FC-GPR timing, FLA return, transfer pricing, dates from incorporation, dormant subsidiary filings, who signs.

---

## T5. Transfer pricing study, step by step (Form 48 / Form 3CEB)

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| form-3ceb-due-date-applicability | Form 3CEB Due Date and Applicability: A Practical Guide | 2026-09-25 | ~620 | When Form 3CEB is required and due |

Weak adjacent matches: `statutory-vs-tax-vs-internal-audit`, `audit-applicability-thresholds` (one mention each).

**Decision: OVERLAP.** Upgrade `form-3ceb-due-date-applicability` into the step-by-step study guide. Do not create a new post.

Problems:
- Due date stated as 31 October, while the same paragraph refers to a 30 November ITR date. My understanding is that section 92E sets the report due date at 30 November. Verify and correct.
- No mention of the Income-tax Act, 2025, Form 48, or the FY transition.
- Contains the "free consultation" sentence (line 56).

Outline: H2s: "What is a transfer pricing study, and when is one needed?"; "Which form applies to FY 2025-26 and which to tax year 2026-27?"; "How do you prepare the study, step by step?"; "What does the certification cover?" Direct answer (about 50 words): "Form 3CEB under the Income-tax Act, 1961 is the transfer pricing report for FY 2025-26. From tax year 2026-27 the Income-tax Act, 2025 applies and the report is Form 48 under that Act. Any international transaction with an associated enterprise triggers it, whatever its value." Tables: form by year; study steps (functional analysis, comparables, method, documentation). Six FAQs: keep the existing "associated enterprise" and threshold questions, add the form-transition question.

---

## T6. NRI filing and property-sale TDS (UAE, UK, US, Singapore)

| Slug | Title | Date | Words | Main search intent |
|---|---|---|---|---|
| nri-itr-filing | NRI Income Tax Return Filing: A Guide for Chennai NRIs | 2026-09-19 | ~540 | Does an NRI need to file in India; NRO vs NRE |
| rnor-status-returning-nri | RNOR Status for NRIs Returning to Chennai: Tax Guide | 2026-10-12 | ~1,580 | Residency status on return (adjacent) |

Property-sale TDS for NRIs appears only as one paragraph in `capital-gains-tax-property-sale`, which links to `/nri-property-sale-tds-chennai`.

**Decision: UPGRADE** `nri-itr-filing`

Problems:
- Thin (about 540 words).
- No content for UAE, UK, US or Singapore (zero hits for those countries).
- No section on TDS when an NRI sells Indian property.
- Contains the "free consultation" sentence.
- Links to `/nri-tax-services` and `/nri-property-sale-tds-chennai` already.

Keep property-sale TDS as a section here, not a new post.

Scope guard: Indian law only. Country names frame Indian filing and TDS questions; no UAE, UK, US or Singapore tax advice.

Outline: H2s: "Are you resident in India for tax purposes?"; "Do you need to file an Indian return if you live in the UAE, UK, US or Singapore?"; "Which Indian-source income is taxable for an NRI?"; "How is TDS deducted when an NRI sells Indian property?" Direct answer (about 50 words): "Residence for Indian tax is decided by day counts under the Income-tax Act, 2025, not by the country where you live. An NRI files an Indian return when Indian-source income or a TDS refund requires it, and when an NRI sells property the buyer deducts TDS at the non-resident rate." Verify the day-count thresholds before publishing. Tables: residency status vs filing trigger; NRI property-sale TDS (buyer, base, certificate). Six FAQs: residency, NRO vs NRE, refunds, property TDS, return due date, joint holders.

---

## Summary

| Topic | Decision | Existing slug(s) | Action |
|---|---|---|---|
| T1 Capital gains, Chennai property | UPGRADE | capital-gains-tax-property-sale | Replace non-allowed sources; verify CII values and Form 141; keep structure |
| T2 GST notice reply (DRC-01, ASMT-10, DRC-06) | OVERLAP | gst-show-cause-notice-first-48-hours (upgrade); section-74a-gst-notice; after-gst-show-cause-reply | Upgrade the 48-hours post into the step-by-step guide; add ASMT-10 (verify ASMT-11); fold in the reply post |
| T3 GSTAT appeal, Tamil Nadu | EXISTS-GOOD | gst-appellate-tribunal-gstat-explained | Fact-check benches, dates and caps before further edits |
| T4 Subsidiary compliance calendar | OVERLAP | post-incorporation-compliance-checklist (upgrade); annual-roc-filing-calendar | Add FEMA/RBI returns and a foreign-ownership layer; link /india-subsidiary-compliance-cfo |
| T5 Transfer pricing study (Form 48 / 3CEB) | OVERLAP | form-3ceb-due-date-applicability | Upgrade to step-by-step; correct the 3CEB due date (verify s.92E); add Form 48 and the 2025 Act transition |
| T6 NRI filing and property TDS | UPGRADE | nri-itr-filing | Expand for UAE, UK, US, Singapore (Indian law only); add NRI property TDS section |
