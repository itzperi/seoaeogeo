"""Inbound internal links counted from the live rendered pages.

Fetches every sitemap URL, collects the internal <a href> targets on each page
(excluding the shared header and footer where marked by the caller), and writes
seo/INTERNAL-LINKS-LIVE.csv with the number of distinct pages linking to each URL.
A URL with zero inbound links from other pages is an orphan.

Usage: python -I scripts/internal-links-live.py
"""
import csv
import re
import urllib.request
import xml.etree.ElementTree as ET
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

HOST = "https://www.csrushil.com"
SITEMAP = HOST + "/sitemap.xml"
HREF = re.compile(r'href="(/[^"#?]*)')


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "csrushil-internal-links/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def main():
    root = ET.fromstring(fetch(SITEMAP))
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text.strip() for loc in root.findall(".//s:loc", ns)]
    paths = {u.replace(HOST, "") or "/" for u in urls}

    def links_on(path):
        try:
            html = fetch(HOST + path)
        except Exception:
            return path, None
        # Drop the header and footer so only in-content and related links count.
        body = re.sub(r"<header.*?</header>|<footer.*?</footer>", " ", html, flags=re.S | re.I)
        return path, set(h.rstrip("/") or "/" for h in HREF.findall(body))

    inbound = defaultdict(set)
    failed = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        for path, targets in pool.map(links_on, sorted(paths)):
            if targets is None:
                failed.append(path)
                continue
            for t in targets:
                if t != path and t in paths:
                    inbound[t].add(path)

    rows = sorted((p, len(inbound.get(p, ()))) for p in paths)
    with open("seo/INTERNAL-LINKS-LIVE.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["path", "inbound_from_content_pages"])
        w.writerows(rows)

    orphans = [p for p, n in rows if n == 0]
    under3 = [p for p, n in rows if n < 3]
    print(f"live urls: {len(paths)}; fetch failures: {len(failed)} {failed[:5]}")
    print(f"orphans (0 inbound from content): {len(orphans)}")
    for p in orphans[:40]:
        print("  ", p)
    print(f"fewer than 3 inbound: {len(under3)}")


if __name__ == "__main__":
    main()
