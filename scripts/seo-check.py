"""Checks every route's title and meta description, and scans for banned words.

Run from the repository root:  python scripts/seo-check.py
Exits with status 1 if any check fails. Titles are measured as they render:
the root layout appends " | C S Rushil & Co." to titles that are not absolute.
"""
import glob
import re
import sys
from collections import Counter

SUFFIX = " | C S Rushil & Co."
APP = "src/app/"
# A word inside a Tailwind class or a hyphenated name (align-top, leading-relaxed) is not a claim.
BANNED = re.compile(r"(?<![-\w])(best|top|leading|expert|premier|guaranteed|no\.? ?1|#1|number one|free consultation)(?![-\w])", re.I)
# Legal and technical phrases that are allowed (statutory names, not claims).
ALLOWED = re.compile(r"best judgment|best evidence|bank guarantee|credit guarantee|corporate guarantee|amount guaranteed|not guaranteed|are not guaranteed|top marginal|Best for|bestFor|Which best describes|(?<![-\w])top(?=-| of the| marginal)", re.I)


def routes():
    for f in glob.glob(APP + "**/page.tsx", recursive=True):
        slug = f.replace("\\", "/")[len(APP):].rsplit("/page.tsx", 1)[0]
        if slug.startswith(("admin", "api")) or "[" in slug:
            continue
        yield f, (slug or "home")


def meta(text):
    ab = re.search(r'title:\s*\{\s*absolute:\s*"([^"]+)"', text)
    pl = re.search(r'title:\s*"([^"]+)"', text) or re.search(r'const title = "([^"]+)"', text)
    if ab:
        title = ab.group(1)
    elif pl:
        base = pl.group(1)
        title = base if base.endswith(SUFFIX) else base + SUFFIX
    else:
        title = None
    d = re.search(r'description:\s*\n?\s*"([^"]+)"', text) or re.search(r'const description =\s*\n?\s*"([^"]+)"', text)
    return title, (d.group(1) if d else None)


def main():
    failures = []
    titles, descs = [], []
    for f, slug in routes():
        text = open(f, encoding="utf-8").read()
        title, desc = meta(text)
        if title is None:
            failures.append(f"{slug}: no title")
        else:
            titles.append((slug, title))
            if not 50 <= len(title) <= 60:
                failures.append(f"{slug}: title {len(title)} chars (need 50-60): {title}")
        if desc is None:
            failures.append(f"{slug}: no description")
        else:
            descs.append((slug, desc))
            if not 140 <= len(desc) <= 160:
                failures.append(f"{slug}: description {len(desc)} chars (need 140-160)")

    for label, items in (("title", titles), ("description", descs)):
        counts = Counter(v for _, v in items)
        for value, n in counts.items():
            if n > 1:
                owners = [s for s, v in items if v == value]
                failures.append(f"duplicate {label} on {owners}: {value[:60]}")

    for root in ("src/app", "src/components", "src/content", "src/lib"):
        for f in glob.glob(root + "/**/*.tsx", recursive=True) + glob.glob(root + "/**/*.ts", recursive=True):
            for n, line in enumerate(open(f, encoding="utf-8"), 1):
                if "className" in line or line.lstrip().startswith(("//", "/*", "*", "import")):
                    continue
                for m in BANNED.finditer(line):
                    if ALLOWED.search(line):
                        continue
                    failures.append(f"banned word '{m.group(0)}' at {f.replace(chr(92), '/')}:{n}")

    print(f"routes checked: {len(titles)} titles, {len(descs)} descriptions")
    if failures:
        print(f"FAILED: {len(failures)} issue(s)")
        for item in failures:
            print("  -", item)
        return 1
    print("PASSED: all titles and descriptions in range and unique; no banned words in source")
    return 0


if __name__ == "__main__":
    sys.exit(main())
