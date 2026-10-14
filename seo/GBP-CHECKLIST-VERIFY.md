# GBP field check: profile values against the website

Checked on 14 October 2026 against `src/lib/site.ts` and `seo/GBP-ACTIONS-OCT-2026.md`. "Match" means the GBP value and the site value are identical. Re-run this check whenever `site.ts` changes.

| # | GBP field | Value to enter | Site source | Status |
|---|---|---|---|---|
| 1 | Business name | C S Rushil & Co. | BUSINESS_NAME | Match |
| 2 | Primary category | Chartered accountant | GBP pack section 2 | Confirm in the picker |
| 3 | Address | Old Door No. AP-890, New No. 18, J-Block, 1st Street, 13th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040 | ADDRESS.street, locality, city, region, postalCode | Match (the site joins the postcode with " - " in the footer; GBP uses the field) |
| 4 | Pin coordinates | 13.0859694, 80.1997378 | GEO | Match. Check the pin on the map after saving |
| 5 | Phone | +91 72001 49711 | PHONE_DISPLAY | Match |
| 6 | Website | https://www.csrushil.com | SITE_URL | Match |
| 7 | Email | admin@csrushil.com | EMAIL | Match |
| 8 | Appointment link | https://calendly.com/ceo-csrushil/30min | BOOKING_LINK | Match |
| 9 | Hours | Monday to Saturday 9:30 AM to 6:30 PM; Sunday closed | BUSINESS_HOURS | Match |
| 10 | Opening date | 2024 | YEAR_FOUNDED | Match |
| 11 | Languages | English, Tamil, Hindi | LANGUAGES_SPOKEN | Match |
| 12 | Review link | https://search.google.com/local/writereview?placeid=ChIJzXoB0DFnUjoRv2EUuO2l7n8 | GBP_REVIEW_URL | Match |
| 13 | Profile link | https://maps.google.com/?cid=9218487927688159679 | GBP_URL | Match |
| 14 | Description | Section 4 of the master prompt (about 700 characters) | Not in site.ts; the same text is in GBP pack section 5 | Match with the GBP pack. Check it against the About page before pasting |
| 15 | Services | 10 priority services with page links | Service pages in src/app and services.ts | Match. Each description must come from the matching page's description |
| 16 | Service areas | 20 areas in the GBP pack order | areas.ts and location-pages.ts | Match. Areas are not ranking factors |

## Mismatches found

1. **Legal name punctuation.** `site.ts` has `C S Rushil & Co, Chartered Accountants` (no full stop after "Co"). The master prompt has `C S Rushil & Co., Chartered Accountants`. The GBP pack keeps the site's version. Decide which form the firm uses on its signboard and letterhead, then make `site.ts` and this file agree. Do not change it on GBP until the firm decides.
2. **ICAI membership number and FRN** are not in `site.ts` (both null). They are not shown anywhere on the site and must not be entered on GBP until supplied.
3. **Postcode format.** The site footer and ADDRESS_FULL join the postcode with " - " ("Chennai - 600040"). GBP stores the postcode in its own field, so no change is needed there.

## Not verifiable from the code

- Whether the profile currently shows these values. Open the profile in a browser and compare each row.
- Whether Google has accepted the category names (check in the picker).
- Whether the pin is still at the corrected coordinates.
