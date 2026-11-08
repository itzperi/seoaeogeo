#!/usr/bin/env python3
"""Gate checker for the 30/30 SEO / GEO / AEO plan (seo/prompts/PROMPT-30-OF-30-csrushil.md).

Crawls every URL in the LIVE sitemap and scores the gates in section 3 of the
prompt. Standard library only. Run with:  python -I scripts/score-30.py [out_dir]

Scoring rule: each dimension starts at 10 and loses 1 point per failing gate
(floor 1). Gates that need owner evidence count as failing until a file named
seo/progress/evidence/<GATE-ID>.md exists in the repo.
"""
import html as htmllib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from collections import defaultdict
from datetime import date

SITE = "https://www.csrushil.com"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) csr-score-30/1.0"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVIDENCE_DIR = os.path.join(REPO, "seo", "progress", "evidence")
OUT = sys.argv[1] if len(sys.argv) > 1 else f"D:\\csr-audit-{date.today().isoformat()}"
DELAY = 0.3

MONEY_PAGES = [
    "/", "/private-limited-company-incorporation-chennai", "/company-registration-chennai",
    "/gst-notice-reply-chennai", "/gst-litigation-chennai", "/income-tax-notice-reply-chennai",
    "/nri-tax-services", "/virtual-cfo-services", "/statutory-audit-chennai",
    "/chartered-accountant-anna-nagar-chennai",
]
FAQ_HUBS = [
    "company-registration", "private-limited-company", "llp-registration", "digital-signature-certificate",
    "gst-registration", "gst-return-filing", "gst-notice-reply", "income-tax-return-filing", "income-tax-notice",
]
UNVERIFIABLE_HOSTS = ("linkedin.com", "instagram.com", "facebook.com")


def fetch(url, accept=None, method="GET"):
    req = urllib.request.Request(url, method=method, headers={"User-Agent": UA, **({"Accept": accept} if accept else {})})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = r.read().decode("utf-8", "replace") if method == "GET" else ""
            return r.status, r.headers.get("Content-Type", ""), body
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Content-Type", "") if e.headers else "", ""
    except Exception as e:  # network error
        return 0, "", str(e)


def text_of(fragment):
    fragment = re.sub(r"<(script|style|noscript)[^>]*>.*?</\1>", " ", fragment, flags=re.S | re.I)
    return re.sub(r"\s+", " ", htmllib.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def jsonld_nodes(page_html):
    nodes, errors = [], 0
    for block in re.findall(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', page_html, flags=re.S | re.I):
        try:
            data = json.loads(block)
        except ValueError:
            errors += 1
            continue
        stack = data if isinstance(data, list) else [data]
        while stack:
            n = stack.pop()
            if isinstance(n, dict):
                nodes.append(n)
                for k in ("@graph", "mainEntity", "itemListElement"):
                    v = n.get(k)
                    if isinstance(v, list):
                        stack.extend(v)
                    elif isinstance(v, dict):
                        stack.append(v)
            elif isinstance(n, list):
                stack.extend(n)
    return nodes, errors


def types_of(nodes):
    out = set()
    for n in nodes:
        t = n.get("@type")
        out.update(t if isinstance(t, list) else [t] if t else [])
    return out


def family(path):
    rules = [
        (r"^/blog/", "blog"), (r"^/chartered-accountant-.*-chennai$", "area"),
        (r"^/income-tax-consultant-.*-chennai$", "hni-area"), (r"^/income-tax-consultant-", "itax-city"),
        (r"^/company-registration-(?!chennai$|india)", "company-city"), (r"^/gst-litigation-(?!chennai$)", "gst-lit-city"),
        (r"^/gst-return-filing-for-", "gst-industry"), (r"^/nri-tax-services", "nri"),
        (r"^/india-subsidiary-for-", "subsidiary"), (r"^/tools/", "tools"),
    ]
    for pat, name in rules:
        if re.search(pat, path):
            return name
    return "core"


def shingles(text, n=5):
    w = re.findall(r"[a-z0-9]+", text.lower())
    return {" ".join(w[i:i + n]) for i in range(max(0, len(w) - n + 1))}


def evidence(gate_id):
    return os.path.exists(os.path.join(EVIDENCE_DIR, f"{gate_id}.md"))


def main():
    os.makedirs(OUT, exist_ok=True)
    status, _, sm = fetch(f"{SITE}/sitemap.xml")
    urls = re.findall(r"<loc>(.*?)</loc>", sm)
    priority_tags = sm.count("<priority>")
    pages = {}
    for i, u in enumerate(urls, 1):
        st, ctype, body = fetch(u)
        path = re.sub(r"^https?://[^/]+", "", u) or "/"
        main_m = re.search(r"<main[^>]*>(.*)</main>", body, flags=re.S | re.I)
        main_html = main_m.group(1) if main_m else body
        nodes, ld_err = jsonld_nodes(body)
        h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, flags=re.S | re.I)
        h2s = [text_of(x) for x in re.findall(r"<h2[^>]*>(.*?)</h2>", body, flags=re.S | re.I)]
        title_m = re.search(r"<title[^>]*>(.*?)</title>", body, flags=re.S | re.I)
        title = text_of(title_m.group(1)) if title_m else ""
        desc_m = re.search(r'<meta[^>]+name="description"[^>]+content="([^"]*)"', body, flags=re.I)
        desc = htmllib.unescape(desc_m.group(1)) if desc_m else ""
        ans_m = re.search(r'<p[^>]*id="(lead-answer|direct-answer)"[^>]*>(.*?)</p>', body, flags=re.S | re.I)
        ans_words = len(text_of(ans_m.group(2)).split()) if ans_m else 0
        faq_qs = [n.get("name", "") for n in nodes if n.get("@type") == "Question"]
        vis = text_of(main_html)
        imgs = re.findall(r"<img\b[^>]*>", body, flags=re.I)
        pages[path] = {
            "status": st, "family": family(path), "title": title, "title_len": len(title), "desc": desc,
            "desc_len": len(desc), "h1_count": len(h1s), "q_h2": sum(1 for h in h2s if h.endswith("?")),
            "answer_id": ans_m.group(1) if ans_m else "", "answer_words": ans_words,
            "types": sorted(types_of(nodes)), "ld_errors": ld_err, "faq_schema_q": len(faq_qs),
            "faq_visible": bool(faq_qs) and text_of(faq_qs[0])[:40] in vis,
            "imgs_no_alt": sum(1 for t in imgs if not re.search(r"\balt=", t, flags=re.I)),
            "byline": ("Reviewed by" in vis) or ("Written by" in vis),
            "icai_no_in_byline": "ICAI M. No." in vis,
            "speakable": "SpeakableSpecification" in json.dumps([n for n in nodes if "speakable" in n]) or '"speakable"' in body,
            "_text": vis, "_nodes": nodes,
        }
        if i % 25 == 0:
            print(f"  fetched {i}/{len(urls)}", flush=True)
        time.sleep(DELAY)

    P = pages
    non_blog = {p: d for p, d in P.items() if d["family"] not in ("blog",)}
    service_like = {p: d for p, d in P.items() if d["family"] not in ("blog", "tools") and p not in
                    ("/blog", "/videos", "/career", "/tools", "/faq", "/contact", "/how-we-work")}

    # near-duplicates per family (blog excluded: posts are not templated)
    fam = defaultdict(list)
    for p, d in P.items():
        if d["family"] not in ("blog", "core", "tools"):
            fam[d["family"]].append((p, shingles(d["_text"])))
    near_max, near_pair = 0.0, ("", "")
    for items in fam.values():
        for a in range(len(items)):
            for b in range(a + 1, len(items)):
                sa, sb = items[a][1], items[b][1]
                if sa and sb:
                    j = len(sa & sb) / len(sa | sb)
                    if j > near_max:
                        near_max, near_pair = j, (items[a][0], items[b][0])

    # ICAI grep over visible text
    icai_patterns = {
        "named review block": r"What do clients say|Clients who worked with us",
        "why choose us": r"\bwhy choose us\b",
        "superlative": r"\b(top|best|leading|no\.?\s?1|number one)\s+(ca|chartered|accountants?|firms?|tax consultants?)\b",
        "professional fee": r"(professional fees?|our fees?|fees? (start|starting)|starting (at|from))\s*(of\s*)?₹",
        "free consultation": r"\bfree\s+(consultation|15-minute|call|session)\b",
    }
    icai_hits = defaultdict(list)
    for p, d in P.items():
        for name, pat in icai_patterns.items():
            if re.search(pat, d["_text"], flags=re.I):
                icai_hits[name].append(p)

    # robots, llms, markdown, sameAs
    _, _, robots = fetch(f"{SITE}/robots.txt")
    _, _, llms = fetch(f"{SITE}/llms.txt")
    _, _, llms_full = fetch(f"{SITE}/llms-full.txt")
    llms_all = llms + llms_full
    llms_missing = [p for p, d in service_like.items() if p != "/" and f"{SITE}{p}" not in llms_all and f"csrushil.com{p}" not in llms_all]
    md_ok = []
    for p in MONEY_PAGES[1:4]:
        st1, ct1, _ = fetch(f"{SITE}{p}", accept="text/markdown")
        st2, ct2, _ = fetch(f"{SITE}{p}.md")
        st3, ct3, _ = fetch(f"{SITE}/md{p}")
        md_ok.append(("markdown" in ct1) or (st2 == 200 and "markdown" in ct2) or (st3 == 200 and "markdown" in ct3))
    same_as = []
    for n in P.get("/", {}).get("_nodes", []):
        v = n.get("sameAs")
        if v:
            same_as.extend(v if isinstance(v, list) else [v])
    same_as = sorted(set(same_as))
    same_as_status = {}
    for u in same_as:
        if any(h in u for h in UNVERIFIABLE_HOSTS):
            same_as_status[u] = "unverifiable"
        else:
            st, _, _ = fetch(u)
            same_as_status[u] = st
    resolving_profiles = [u for u, s in same_as_status.items() if s == 200 or s == "unverifiable"]
    hub_status = {h: fetch(f"{SITE}/faq/{h}", method="GET")[0] for h in FAQ_HUBS}
    hub_qs = defaultdict(list)
    for h in FAQ_HUBS:
        for q in P.get(f"/faq/{h}", {}).get("_nodes", []):
            if q.get("@type") == "Question":
                hub_qs[text_of(q.get("name", "")).lower()].append(h)
    hub_dupes = {q: hs for q, hs in hub_qs.items() if len(hs) > 1}
    tracker = os.path.join(REPO, "seo", "citations-tracker.csv")
    live_citations = 0
    if os.path.exists(tracker):
        with open(tracker, encoding="utf-8") as f:
            live_citations = sum(1 for line in f if ",live," in line.lower() and ",yes," in line.lower())

    def gate(gid, ok, detail, owner=False):
        if owner and not ok:
            ok = evidence(gid)
            detail += " | evidence file present" if ok else " | NEEDS-OWNER-EVIDENCE"
        return {"id": gid, "result": "PASS" if ok else ("NEEDS-OWNER-EVIDENCE" if owner else "FAIL"), "detail": detail}

    titles = defaultdict(list)
    descs = defaultdict(list)
    for p, d in P.items():
        titles[d["title"]].append(p)
        descs[d["desc"]].append(p)
    bad = lambda cond: [p for p, d in P.items() if cond(d)]  # noqa: E731
    ans_bad = [p for p, d in service_like.items() if not (40 <= d["answer_words"] <= 60)]

    seo = [
        gate("S-status", not bad(lambda d: d["status"] != 200), f"non-200: {bad(lambda d: d['status'] != 200)[:5]}"),
        gate("S-h1", not bad(lambda d: d["h1_count"] != 1), f"h1!=1: {bad(lambda d: d['h1_count'] != 1)[:5]}"),
        gate("S-title", not bad(lambda d: not (1 <= d["title_len"] <= 60)), f"bad title: {bad(lambda d: not (1 <= d['title_len'] <= 60))[:5]}"),
        gate("S-desc", not bad(lambda d: not (70 <= d["desc_len"] <= 160)), f"bad desc: {bad(lambda d: not (70 <= d['desc_len'] <= 160))[:5]}"),
        gate("S-dupes", all(len(v) == 1 for v in titles.values()) and all(len(v) == 1 for v in descs.values()), "duplicate titles/descriptions"),
        gate("S-neardup", near_max < 0.40, f"max {near_max:.0%} {near_pair}"),
        gate("S5-priority", priority_tags == 0, f"<priority> tags: {priority_tags}"),
        gate("S-alt-jsonld", not bad(lambda d: d["imgs_no_alt"] or d["ld_errors"]), "images without alt or JSON-LD errors"),
        gate("S6-about-faq", "FAQPage" in P.get("/about-us", {}).get("types", []), "/about-us FAQPage"),
        gate("S2-lighthouse", False, "10 money pages Perf>=95 A11y>=98 BP>=96 SEO 100", owner=True),
        gate("S7-inbody-links", False, "in-body links to /income-tax-consultant-<city>", owner=True),
    ]
    geo = [
        gate("G1-icai-number", all(P.get(p, {}).get("icai_no_in_byline") for p in MONEY_PAGES[1:4]), "ICAI M. No. in byline on 3 money pages"),
        gate("G2-icai-compliance", not icai_hits, json.dumps({k: v[:3] for k, v in icai_hits.items()})),
        gate("G-robots-claude", "Claude-SearchBot" in robots, "Claude-SearchBot named"),
        gate("G9-content-signal", "content-signal" in robots.lower(), "Content-Signal line (owner policy)"),
        gate("G6-sameas", len(resolving_profiles) >= 8, f"{len(resolving_profiles)} resolving sameAs: {same_as_status}"),
        gate("G5-citations", live_citations >= 10, f"{live_citations} live NAP-matched rows in seo/citations-tracker.csv"),
        gate("G12-llms", not llms_missing, f"missing from llms: {llms_missing[:8]} (+{max(0, len(llms_missing) - 8)})"),
        gate("G10-markdown", all(md_ok), f"markdown on 3 money pages: {md_ok}"),
        gate("G11-original-data", fetch(f"{SITE}/resources/tamil-nadu-incorporation-government-fees-2026-27")[0] == 200, "original data page live"),
        gate("G8-agentic", False, "Lighthouse Agentic Browsing full marks on / + 2 money pages", owner=True),
        gate("G3-gbp", False, "GBP complete, hours fixed, NAP identical", owner=True),
        gate("G4-reviews", False, ">=25 Google reviews, 100% replied", owner=True),
        gate("G7-mentions", False, ">=3 live third-party mentions linking to csrushil.com", owner=True),
        gate("G13-clone", False, "csrushil.digitalvicky.com de-indexed", owner=True),
    ]
    aeo = [
        gate("A-answer-block", not ans_bad, f"{len(ans_bad)} service pages without a 40-60 word answer block: {ans_bad[:6]}"),
        gate("A-question-h2", not [p for p, d in service_like.items() if d["q_h2"] < 2], "service pages with <2 question H2s"),
        gate("A-faq", not [p for p, d in service_like.items() if not d["faq_schema_q"] or not d["faq_visible"]],
             f"service pages without visible FAQ+FAQPage: {[p for p, d in service_like.items() if not d['faq_schema_q'] or not d['faq_visible']][:6]}"),
        gate("A-speakable", all(P.get(p, {}).get("speakable") for p in MONEY_PAGES if p in P), "Speakable on money pages"),
        gate("A2-faq-hubs", all(s == 200 for s in hub_status.values()) and not hub_dupes, f"hubs {hub_status}; duplicate questions {len(hub_dupes)}"),
        gate("A3-ca-vs-platform", fetch(f"{SITE}/blog/ca-firm-or-online-filing-platform")[0] == 200, "neutral guide live"),
        gate("A4-qrmp-fcgpr", any("qrmp" in p for p in P) and any("fc-gpr" in p for p in P), "QRMP and FC-GPR posts live"),
        gate("A5-tamil", "hreflang=\"ta" in fetch(SITE + "/")[2], "Tamil hreflang pairs (or decision note)", owner=True),
        gate("A6-comparisons", False, "composition vs regular, QRMP vs monthly comparison pages", owner=True),
    ]

    def score(gs):
        return max(1, 10 - sum(1 for g in gs if g["result"] != "PASS"))

    result = {
        "date": date.today().isoformat(), "site": SITE, "pages": len(P),
        "scores": {"seo": score(seo), "geo": score(geo), "aeo": score(aeo)},
        "gates": {"seo": seo, "geo": geo, "aeo": aeo},
    }
    result["scores"]["total"] = sum(result["scores"].values())
    with open(os.path.join(OUT, "score-30.json"), "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    lines = [f"# 30/30 gate check: {SITE} ({result['date']}, {len(P)} pages)", "",
             f"**SEO {result['scores']['seo']}/10 · GEO {result['scores']['geo']}/10 · AEO {result['scores']['aeo']}/10 · Total {result['scores']['total']}/30**", "",
             "| Dimension | Gate | Result | Detail |", "|---|---|---|---|"]
    for dim, gs in (("SEO", seo), ("GEO", geo), ("AEO", aeo)):
        for g in gs:
            lines.append(f"| {dim} | {g['id']} | {g['result']} | {g['detail'][:220].replace('|', '/')} |")
    with open(os.path.join(OUT, "score-30.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
