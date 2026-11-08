// Minimal HTML → Markdown for the /md/<slug> agent-readable copies of pages.
// It converts the page's own rendered <main>, so the Markdown never drifts from
// the HTML (no second copy of the content to maintain).

const ENTITIES: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x27;": "'", "&nbsp;": " " };

function decode(s: string): string {
  return s
    .replace(/&(amp|lt|gt|quot|nbsp|#39|#x27);/g, (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)));
}

function inline(s: string, base: string): string {
  return decode(
    s
      .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href: string, text: string) => {
        const label = text.replace(/<[^>]+>/g, "").trim();
        const url = href.startsWith("/") ? `${base}${href}` : href;
        return label ? `[${label}](${url})` : "";
      })
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function table(html: string, base: string): string {
  const rows = [...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
    [...r[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => inline(c[1], base).replace(/\|/g, "/")),
  );
  if (rows.length === 0) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r: string[]) => `| ${[...r, ...Array(width - r.length).fill("")].join(" | ")} |`;
  return [pad(rows[0]), `| ${Array(width).fill("---").join(" | ")} |`, ...rows.slice(1).map(pad)].join("\n");
}

export function htmlToMarkdown(pageHtml: string, base: string): string {
  const main = pageHtml.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? pageHtml;
  let s = main
    .replace(/<(script|style|noscript|svg|form|button|nav)\b[\s\S]*?<\/\1>/gi, "")
    .replace(/<table\b[\s\S]*?<\/table>/gi, (t) => `\n\n${table(t, base)}\n\n`)
    .replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi, (_, q: string) => `\n\n### ${inline(q, base)}\n\n`)
    .replace(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n: string, t: string) => `\n\n${"#".repeat(Number(n))} ${inline(t, base)}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, t: string) => `\n- ${inline(t, base)}`)
    .replace(/<(p|dd|dt|figcaption)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag: string, t: string) => `\n\n${inline(t, base)}\n\n`);
  s = s.replace(/<[^>]+>/g, " ");
  return decode(s)
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
