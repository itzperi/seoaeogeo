# Task 7: metadata and on-page (14 Nov 2026)

## Files
- `metadata-live-before.csv`: the live site crawled before this change, with title, description, H1s and image checks for all 183 sitemap pages.
- `metadata-before-after.csv`: 198 rows. It covers every live page, the 12 scheduled posts that needed fixes, and the 3 new pages. It shows each title and description before and after, the new lengths, and whether each is in range.

## Results
- **89 pages changed.** After the change, every title is 50 to 60 characters and every description is 150 to 158, with one exception:
  - **Anna Nagar** uses the exact title (62 characters) and description (172 characters) given in the brief.
  - Its description includes "Free consultation", which `scripts/seo-check.py` flags. The brief's wording was kept.
- **H1s:** each page has exactly one, and all are unique. Blog H1s follow the post title, so the 17 post titles changed here change their H1s too.
- **Duplicates:** no duplicate titles or descriptions anywhere.
- **Fact check:** each new description says only what its post or page covers.
  - Claims that could not be found in the content were dropped: DIR-12, Section 248, a 30-day registration window.

## Images
- **Alt text:** every image already had alt text.
- **About page:** the team and founder photos used `fill`, which renders no width and height. They now have explicit dimensions, and the team photos lazy-load.
- **WebP conversion:** the two large PNGs are converted (the PNG files are kept for the web manifest).
  - `omair-khan.png`, 168 KB, becomes `omair-khan.webp` at 11 KB.
  - `ca-india-badge.png`, 163 KB, becomes `ca-india-badge.webp` at 3 KB. It is used in the header and footer.
- **Other photos:** the remaining team photos were already WebP and are served resized by next/image.

## Walk-in wording
- **Anna Nagar** already used "Walk-ins are welcome, and booking a slot saves waiting time." everywhere (Task 3).
- **Contact page:** it now uses the same sentence, replacing "it helps to book a slot ... when you walk in".

## Found, not changed
Five older posts have a `date` in their own file that differs from `src/lib/blog.ts`: gst-show-cause-notice-first-48-hours, tds-return-filing-deadlines, rera-compliance-calendar-tamil-nadu, 12a-80g-registration-guide-chennai-ngos and statutory-audit-checklist.
- The index date is the one the site uses.
- Left for the Task 8 technical pass.
