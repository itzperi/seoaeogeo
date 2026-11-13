# Content attribution and professional review

The previous templates treated every Git content change as a professional review by CA Rushil. No completed page-level sign-off was found in `seo/CA-SIGNOFF.md` or `docs/rule-review-log.md`; those files contain open checks. The review registry therefore starts empty.

`Content updated` describes a content edit. `Reviewed by` describes an actual review of that version by CA Rushil C S. Automated source checking is not professional sign-off. Existing biographies and credentials are firm-maintained assertions; their presence is not independent verification.

## Record a review

1. The practising CA reads the rendered page and checks legal propositions against the current official sources. Resolve outstanding items in the sign-off log and confirm practice claims.
2. Retain a dated approval identifying the page, content revision, reviewer and scope. Record a non-secret document reference in this repository; keep confidential correspondence outside the public site.
3. Set the route's entry in `src/lib/content-reviews.ts` to `{ reviewedOn: "YYYY-MM-DD", evidence: "reference to the completed sign-off" }`. The reviewer is CA Rushil C S; do not use this registry for someone else's review without extending both the visible byline and schema.
4. The shared visible attribution and JSON-LD read the same registry. No review is emitted when the entry is missing, undated, lacks evidence, or predates the page's content update. Clear the entry when a shared component or legal rule changes content it covers.
5. Update substantive modification dates in `src/lib/page-dates.ts` (or a blog's `meta.updated`). After committing, run `npm run page-dates`. Never refresh dates only to appear recent. The legacy 120-day script is a reminder to inspect content age, not proof that a CA reviewed it.
6. Run `npm run typecheck`, `npm run lint`, the production build and `npm run verify:integrity -- http://localhost:3100 seo/validation-local-after.json`.

## Professional identifiers

Confirm membership number, active Certificate of Practice, FRN, qualification date and FAFD certificate with the firm and ICAI before adding or changing them in `src/lib/site.ts`. Leave missing identifiers null. The existing conditional display covers the homepage and About page; the new verification component also covers Contact. Do not treat a name-only search or a third-party directory as sufficient identification.

Blog pages now identify the firm as the organizational author/publisher. Add named personal authorship only when the author confirms it; the former shared template assigned every article to the founder automatically.
