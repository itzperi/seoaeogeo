"""Page-family audit: word counts and near-duplicate detection across the live site.

Fetches every URL in the sitemap, extracts the visible main text, builds 5-word
shingles and compares every pair of pages with Jaccard similarity. Writes
seo/PAGE-FAMILY-AUDIT.csv (one row per page) and seo/PAGE-FAMILY-PAIRS.csv
(pairs above the threshold).

Usage:  python -I scripts/page-family-audit.py [--threshold 0.6]
"""
import argparse
import csv
import itertools
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

SITEMAP = "https://www.csrushil.com/sitemap.xml"
SHINGLE = 5


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "csrushil-page-family-audit/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, r.read().decode("utf-8", "replace")


def sitemap_urls(xml_text):
    root = ET.fromstring(xml_text)
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [loc.text.strip() for loc in root.findall(".//s:loc", ns)]


def main_text(html):
    html = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", html, flags=re.S | re.I)
    m = re.search(r"<main.*?</main>", html, re.S | re.I)
    body = m.group(0) if m else html
    text = re.sub(r"<[^>]+>", " ", body)
    text = re.sub(r"&[a-z#0-9]+;", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def shingles(text):
    words = re.findall(r"[a-z0-9₹']+", text.lower())
    return {" ".join(words[i:i + SHINGLE]) for i in range(max(0, len(words) - SHINGLE + 1))}, len(words)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--threshold", type=float, default=0.6)
    args = ap.parse_args()

    status, xml_text = fetch(SITEMAP)
    if status != 200:
        sys.exit(f"sitemap returned {status}")
    urls = sitemap_urls(xml_text)

    pages = []
    for url in urls:
        try:
            code, html = fetch(url)
        except Exception as exc:  # report, do not hide
            pages.append({"url": url, "status": f"error: {exc}", "words": 0, "shingles": set()})
            continue
        sh, n = shingles(main_text(html))
        pages.append({"url": url, "status": code, "words": n, "shingles": sh})

    with open("seo/PAGE-FAMILY-AUDIT.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["url", "status", "words", "thin_under_600"])
        for p in pages:
            w.writerow([p["url"], p["status"], p["words"], "yes" if p["words"] < 600 else "no"])

    pairs = []
    for a, b in itertools.combinations([p for p in pages if p["shingles"]], 2):
        inter = len(a["shingles"] & b["shingles"])
        if not inter:
            continue
        jac = inter / len(a["shingles"] | b["shingles"])
        if jac >= args.threshold:
            pairs.append((round(jac, 3), a["url"], b["url"]))
    pairs.sort(reverse=True)
    with open("seo/PAGE-FAMILY-PAIRS.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["jaccard", "url_a", "url_b"])
        w.writerows(pairs)

    ok = sum(1 for p in pages if p["status"] == 200)
    thin = sum(1 for p in pages if isinstance(p["words"], int) and p["words"] < 600)
    print(f"urls: {len(urls)}  status 200: {ok}  under 600 words: {thin}")
    print(f"pairs at or above {args.threshold:.0%} shingle overlap: {len(pairs)}")
    for j, a, b in pairs[:20]:
        print(f"  {j:.3f}  {a}  <->  {b}")


if __name__ == "__main__":
    main()
