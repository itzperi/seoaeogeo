"""Compare two Search Console "last 24 hours" exports.

Usage (from the repo root):
    python -I scripts/gsc-24h-compare.py seo/gsc/24h-2026-11-22 [seo/gsc/24h-2026-11-21]

Each folder holds the unzipped GSC export (Chart.csv, Devices.csv,
Countries.csv, Pages.csv, Queries.csv). The second folder defaults to the
21 Nov 2026 baseline. Output is Markdown tables for seo/progress/<date>-24h.md.

Read the result with care: one day of data swings by about 20% on its own,
and the newest hours of a fresh export are still filling in.
"""
import csv
import os
import sys

BASE_DEFAULT = os.path.join("seo", "gsc", "24h-2026-11-21")
SITE = "https://www.csrushil.com"
TRACKED_PAGES = [
    "/virtual-cfo-services",
    "/accounting-outsourcing-chennai",
    "/partnership-firm-registration-chennai",
    "/nri-tax-services-singapore",
    "/nri-tax-services-usa",
    "/tools/tds-interest-late-fee-calculator",
]
# 52-day averages, 27 Sep to 17 Nov 2026 (seo/gsc/world-2026-11-17/).
FIFTY_TWO_DAY_POSITION = {
    "/virtual-cfo-services": 55.7,
    "/accounting-outsourcing-chennai": 37.4,
    "/partnership-firm-registration-chennai": 7.0,
    "/nri-tax-services-singapore": 7.5,
    "/nri-tax-services-usa": 43.3,
    "/tools/tds-interest-late-fee-calculator": None,
}
COUNTRIES = ["India", "United Kingdom", "United States", "Singapore", "United Arab Emirates"]
SWING = 0.20


def rows(folder, name):
    path = os.path.join(folder, name)
    if not os.path.exists(path):
        return []
    with open(path, encoding="utf-8-sig", newline="") as fh:
        return list(csv.reader(fh))[1:]


def num(value):
    value = (value or "").strip().replace(",", "").rstrip("%")
    try:
        return float(value)
    except ValueError:
        return 0.0


def totals(folder):
    clicks = impressions = weighted = 0.0
    for r in rows(folder, "Chart.csv"):
        c, i, p = num(r[1]), num(r[2]), num(r[4])
        clicks += c
        impressions += i
        weighted += p * i
    position = weighted / impressions if impressions else 0.0
    return clicks, impressions, position


def keyed(folder, name):
    out = {}
    for r in rows(folder, name):
        if len(r) >= 5:
            out[r[0].strip()] = (num(r[1]), num(r[2]), num(r[4]))
    return out


def ctr(c, i):
    return f"{100 * c / i:.2f}%" if i else "n/a"


def change(new, old):
    if not old:
        return "n/a"
    pct = 100 * (new - old) / old
    sign = "+" if pct >= 0 else "-"
    return f"{sign}{abs(pct):.0f}%"


def swing_note(new, old):
    if not old:
        return "no baseline"
    ratio = (new - old) / old
    if ratio > SWING:
        return "above normal daily swing"
    if ratio < -SWING:
        return "below normal daily swing"
    return "within normal daily swing"


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    new_dir = sys.argv[1]
    base_dir = sys.argv[2] if len(sys.argv) > 2 else BASE_DEFAULT
    for d in (new_dir, base_dir):
        if not os.path.exists(os.path.join(d, "Chart.csv")):
            sys.exit(f"Missing Chart.csv in {d}")

    nc, ni, np_ = totals(new_dir)
    bc, bi, bp = totals(base_dir)
    print(f"## Totals ({os.path.basename(new_dir)} against {os.path.basename(base_dir)})\n")
    print("| | Baseline | New | Change | Read |")
    print("|---|---|---|---|---|")
    print(f"| Impressions | {bi:.0f} | {ni:.0f} | {change(ni, bi)} | {swing_note(ni, bi)} |")
    print(f"| Clicks | {bc:.0f} | {nc:.0f} | {change(nc, bc)} | small numbers, read with care |")
    print(f"| CTR | {ctr(bc, bi)} | {ctr(nc, ni)} | | |")
    print(f"| Position (impression-weighted, approx.) | {bp:.1f} | {np_:.1f} | | lower is better |")

    print("\n## Devices\n")
    print("| Device | Baseline impr. | New impr. | Baseline CTR | New CTR | Baseline pos. | New pos. |")
    print("|---|---|---|---|---|---|---|")
    bd, nd = keyed(base_dir, "Devices.csv"), keyed(new_dir, "Devices.csv")
    for dev in ("Mobile", "Desktop", "Tablet"):
        b, n = bd.get(dev, (0, 0, 0)), nd.get(dev, (0, 0, 0))
        print(f"| {dev} | {b[1]:.0f} | {n[1]:.0f} | {ctr(b[0], b[1])} | {ctr(n[0], n[1])} | {b[2]:.1f} | {n[2]:.1f} |")

    print("\n## Countries\n")
    print("| Country | Baseline impr. / clicks / pos. | New impr. / clicks / pos. |")
    print("|---|---|---|")
    bco, nco = keyed(base_dir, "Countries.csv"), keyed(new_dir, "Countries.csv")
    for c in COUNTRIES:
        b, n = bco.get(c), nco.get(c)
        fmt = lambda t: f"{t[1]:.0f} / {t[0]:.0f} / {t[2]:.1f}" if t else "none"
        print(f"| {c} | {fmt(b)} | {fmt(n)} |")

    print("\n## Tracked pages (position: lower is better)\n")
    print("| Page | 52-day pos. | Baseline 24 h | New 24 h | Read |")
    print("|---|---|---|---|---|")
    bpg, npg = keyed(base_dir, "Pages.csv"), keyed(new_dir, "Pages.csv")
    for path in TRACKED_PAGES:
        b, n = bpg.get(SITE + path), npg.get(SITE + path)
        avg = FIFTY_TWO_DAY_POSITION[path]
        fmt = lambda t: f"{t[2]:.1f} ({t[1]:.0f} impr., {t[0]:.0f} clicks)" if t else "not in export"
        if b and n:
            delta = n[2] - b[2]
            read = "better" if delta < -1 else "worse" if delta > 1 else "about the same"
            if n[1] < 10:
                read += "; under 10 impressions, too few to judge"
        else:
            read = "missing from one export"
        print(f"| `{path}` | {avg if avg is not None else 'none'} | {fmt(b)} | {fmt(n)} | {read} |")

    print("\nOne day is not a trend. Judge ranking changes on 28-day windows, after the core update settles.")


if __name__ == "__main__":
    main()
