"""Fail if any page's 'Updated' date is more than 120 days old.

Reads src/lib/page-dates.ts (generated from each page's last git change).
A page whose rules have not been reviewed in 120 days needs a review, so the
check fails until the page is reviewed and its date is refreshed.

Usage:  python -I scripts/check-rule-dates.py [--max-age 120]
"""
import argparse
import datetime as dt
import re
import sys

ap = argparse.ArgumentParser()
ap.add_argument("--max-age", type=int, default=120)
args = ap.parse_args()

text = open("src/lib/page-dates.ts", encoding="utf-8").read()
entries = re.findall(r'"([^"]+)":\s*"(\d{4}-\d{2}-\d{2})"', text)
if not entries:
    sys.exit("no dates found in src/lib/page-dates.ts")

today = dt.date.today()
stale = []
for path, day in entries:
    age = (today - dt.date.fromisoformat(day)).days
    if age > args.max_age:
        stale.append((age, path, day))

print(f"pages with dates: {len(entries)}; older than {args.max_age} days: {len(stale)}")
for age, path, day in sorted(stale, reverse=True):
    print(f"  {age:4d} days  {path}  (updated {day})")
sys.exit(1 if stale else 0)
