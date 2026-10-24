# Rule review log

Every tax rule, form number, limit or date the site states, with its official source and review status. A page's "Updated" date must not be older than 120 days (checked by `scripts/check-rule-dates.py` in CI).

Dates in the "Official page read on" column are filled in only when someone reads the official page. Until then the column shows a dash.

Status values:
- **Official page checked**: read on the official portal by a person, with the date.
- **Search snippet only**: confirmed from a search result or a secondary report, not the official page. Needs an official check before the next update.
- **Firm to confirm**: a CA must sign off before publication.

| Rule or figure | Where it appears | Official source | Status | Official page read on | Next review |
|---|---|---|---|---|---|
| GST notice reply forms: ASMT-10 answered in ASMT-11; DRC-01 show cause answered in DRC-06; DRC-01A intimation | /gst-notice-reply-chennai, /gst-return-filing-* | cbic-gst.gov.in (GST portal user guide, tutorial.gst.gov.in) | Search snippet only | 2026-10-14 | — | 2026-11-15 
| Appeal to the Appellate Authority within 3 months of the order, with 10% pre-deposit | /gst-notice-reply-chennai, /gst-litigation-* | CGST Act section 107 (cbic-gst.gov.in) | Search snippet only | 2026-10-13 | — | 2026-11-15 
| GSTAT appeal; penalty-only orders at 10% from 1 Oct 2025 | /gst-litigation-*, /blog/gst-appellate-tribunal-gstat-explained | Notification 16/2025-CT; gstat.gov.in | Search snippet only | 2026-10-13 | — | 2026-11-15 
| Tamil Nadu GSTAT: two State Benches (Chennai, Madurai) with sittings at Coimbatore | /gst-litigation-chennai, -coimbatore, -madurai | MoF notification, 31 Jul 2024, amended 26 Nov 2024 (gstat.gov.in) | Search snippet only | 2026-10-13 | — | 2026-11-15 
| Section 74A applies from FY 2024-25 | /section-74a-gst-notice, /gst-notice-reply-chennai | CGST Act section 74A (cbic-gst.gov.in) | Search snippet only | 2026-10-13 | — | 2026-11-15 
| Director resident in India: 182 days in the previous calendar year | /india-subsidiary-for-us-companies, -uk-, -uae-, -singapore-, /company-registration-india-for-foreigners, blog | Companies Act 2013, section 149(3) (mca.gov.in) | Search snippet only | 2026-10-15 | — | 2026-11-15 
| FC-GPR within 30 days of allotment | India-entry pages | FEMA NDI Rules; rbi.org.in | Search snippet only | 2026-10-14 | — | 2026-11-15 
| LLP audit threshold: turnover above Rs 40 lakh or contribution above Rs 25 lakh | /llp-registration-chennai, /annual-compliance-package | LLP Act 2008 (mca.gov.in) | Search snippet only | 2026-10-16 | — | 2026-11-15 
| 12A and 80G registration under the Income-tax Act, 2025 (section numbers) | /section-8-company-registration-chennai | incometaxindia.gov.in | Firm to confirm (section numbers not stated) | 2026-10-16 | — | 2026-11-15 
| Income-tax Act, 2025 applies to tax year 2026-27; 1961 Act for FY 2025-26 | income-tax pages | incometaxindia.gov.in | Search snippet only | 2026-10-13 | — | 2026-11-15 
| Audit-case ITR due 21 Nov 2026 (CBDT Circular 7/2026) | /income-tax-return-filing-chennai and related | incometaxindia.gov.in | Search snippet only | 2026-10-13 | — | 2026-11-15 
| GST late fee Rs 50 a day (Rs 20 nil), capped by turnover | /gst-return-filing-chennai | CGST Act section 47 (cbic-gst.gov.in) | Search snippet only | 2026-10-16 | — | 2026-11-15 
| ROC additional fee Rs 100 a day per form | /annual-compliance-package, /statutory-audit-chennai | Companies Act 2013, section 403 (mca.gov.in) | Search snippet only | 2026-10-16 | — | 2026-11-15 
| Transfer pricing penalties and thresholds | /transfer-pricing-audit | Income-tax Act and Rules (incometaxindia.gov.in) | Firm to confirm | 2026-10-16 | — | 2026-11-15 
| Composition, QRMP and turnover limits for service providers | /gst-return-filing-for-freelancers, -restaurants, -clinics, -startups | cbic-gst.gov.in | Firm to confirm (CHECK markers in seo/GST-RETURN-PAGES-CHECKLIST.md) | 2026-10-24 | — | 2026-11-15 
| Revised return fee and deadline (Finance Act 2026) | /income-tax-return-filing-chennai | Finance Act 2026 (indiabudget.gov.in) | Search snippet only | 2026-10-13 | — | 2026-11-15 

## Rules for updating this log

1. Before a rule is changed on a page, read the official page and set the status to "Official page checked" with the date.
2. A rule that is only in a search result stays "Search snippet only" and is listed in the next review.
3. When a page's rules change, update its row and the page's "Updated" date in the same commit.
4. The CI check (`.github/workflows/rule-dates.yml`) fails when any page's date is more than 120 days old. A failing page needs its rules re-checked before its date is refreshed.
