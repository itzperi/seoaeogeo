# Site Structure — csrushil.com (rebuilt)

## URL hierarchy

```
/                                                    Home (targets: "chartered accountant near me", "best CA nearby")
/private-limited-company-incorporation-chennai       Exact-match page for target keyword #1
/gst-litigation-chennai                              Exact-match page for target keyword #2
/formation-of-business-entity                        All entity types, links to incorporation page
/goods-and-services-tax                               GST registration/returns, links to litigation page
/audit-and-assurance
/direct-tax
/roc-compliances
/virtual-cfo-services
/management-consultancy
/rera
/trust
/about-us
/contact                                              NAP, embedded map, business hours
/career
/blog                                                 Index of 11 published posts
/blog/<slug>                                          11 individual posts — see CONTENT-CALENDAR.md for topics
/sitemap.xml                                          Auto-generated from the route list
/robots.txt
```

## Internal linking implemented

- Homepage → 4 highest-priority pages via "Most searched" quick links
  (incorporation, GST litigation, audit, virtual CFO).
- Homepage → full service grid (all 11 services).
- `/formation-of-business-entity` → `/private-limited-company-incorporation-chennai`
  (was previously only an in-page anchor — this was the audit's #1 "High
  priority, Low effort" fix).
- `/goods-and-services-tax` → `/gst-litigation-chennai` (was previously
  nonexistent — the audit's #1 "Critical" content gap).
- Every generic service page (`ServicePageTemplate`) now carries a "Related
  services" block that cross-links to 3 topically adjacent services (e.g.
  Audit & Assurance ↔ Direct Tax ↔ ROC Compliances ↔ Virtual CFO), per Phase
  3's interlinking requirement.
- Footer links to top 6 services + all core pages on every page.
- Every page carries breadcrumb navigation with BreadcrumbList schema.

## Schema markup per page type

| Page type | Schema |
|---|---|
| All pages (via root layout) | `AccountingService` (Organization/LocalBusiness-style, with NAP + geo) |
| All pages | `BreadcrumbList` |
| Home, service pages | `FAQPage` |
| Service pages | `Service` |
| Incorporation page | `HowTo` (step-by-step SPICe+ process) |
| Contact page | `ContactPage` |
| Blog posts | `Article` |

## Mobile navigation

Fixed — a hamburger menu (`src/components/MobileNav.tsx`) now exposes the
full service list, nav links, and a call CTA below the `lg` breakpoint.
Verified at 375px width.
