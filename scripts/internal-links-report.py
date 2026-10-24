"""Inbound internal-link count per route, from the source code.

Counts links to each route from every other route's source (and shared
components, which link from every page). A route with zero inbound links from
other pages is an orphan. Writes seo/INTERNAL-LINKS.csv.

Usage: python -I scripts/internal-links-report.py
"""
import csv
import glob
import re
from collections import defaultdict

APP = "src/app/"
routes = {}
for f in glob.glob(APP + "**/page.tsx", recursive=True):
    slug = f.replace("\\", "/")[len(APP):].rsplit("/page.tsx", 1)[0]
    if slug.startswith(("admin", "api")) or "[" in slug or slug == "page.tsx":
        continue
    routes["/" + slug] = f.replace("\\", "/")

LINK = re.compile(r'(?:href|src)=\{?["`](/[a-z0-9][a-z0-9\-/]*)', re.I)
src_by_route = {}
for route, f in routes.items():
    src_by_route[route] = open(f, encoding="utf-8").read()
shared = []
for f in glob.glob("src/components/**/*.tsx", recursive=True) + glob.glob("src/lib/*.ts*"):
    shared.append(open(f, encoding="utf-8").read())

inbound = defaultdict(set)
for route, text in src_by_route.items():
    for target in LINK.findall(text):
        target = target.rstrip("/")
        if target in routes and target != route:
            inbound[target].add(route)
for text in shared:
    for target in LINK.findall(text):
        target = target.rstrip("/")
        if target in routes:
            inbound[target].add("(shared)")

# Menus and hubs build their links from the catalog files (slug strings, not
# href literals), so a slug listed in a catalog file counts as linked from shared
# navigation. This is a source-level check; it does not prove the link renders.
catalog_text = "\n".join(
    open(f, encoding="utf-8").read()
    for f in glob.glob("src/lib/*.ts") + glob.glob("src/lib/*.tsx")
)
rows = []
for route in sorted(routes):
    sources = inbound.get(route, set())
    page_sources = {s for s in sources if s != "(shared)"}
    in_catalog = ('"' + route[1:] + '"') in catalog_text
    rows.append((route, len(page_sources), "(shared)" in sources or in_catalog))

with open("seo/INTERNAL-LINKS.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["route", "inbound_from_pages", "linked_from_shared_or_catalog"])
    w.writerows(rows)

orphans = [r for r, n, sh in rows if n == 0 and not sh]
thin = [r for r, n, sh in rows if n < 3 and not sh]
print(f"routes: {len(rows)}")
print(f"orphans (no page link and not in any catalog file): {len(orphans)}")
for r in orphans:
    print("  ", r)
print(f"routes with fewer than 3 inbound page links (not in shared navigation): {len(thin)}")
