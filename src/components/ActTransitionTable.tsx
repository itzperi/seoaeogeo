import Link from "next/link";

// Income-tax Act, 1961 → Income-tax Act, 2025 reference table.
// Every mapping here is one already used (and cited) elsewhere on the site,
// so the numbering stays consistent across pages. Add a row only after the
// new section or form number has been checked against the 2025 Act.

type Row = { topic: string; old: string; now: string };

export const ACT_ROWS: Record<string, Row> = {
  year: { topic: "Period of income", old: "Previous year and assessment year", now: "Tax year" },
  tds195: { topic: "TDS on payments to non-residents", old: "Section 195", now: "Section 393(2)" },
  remitInfo: { topic: "Reporting foreign remittances", old: "Section 195(6)", now: "Section 397(3)(d)" },
  remitForms: { topic: "Remittance forms", old: "Form 15CA and Form 15CB", now: "Form 145 and Form 146" },
  trc: { topic: "Treaty claim details with a tax residency certificate", old: "Form 10F", now: "Form 41" },
  taxAudit: { topic: "Tax audit", old: "Section 44AB", now: "Section 63" },
  tpReport: { topic: "Transfer pricing accountant's report", old: "Section 92E, Form 3CEB", now: "Section 172, Form 48" },
  scrutiny: { topic: "Scrutiny notice", old: "Section 143(2)", now: "Section 270(8)" },
  reassess: { topic: "Reassessment show-cause notice", old: "Section 148A", now: "Section 281" },
  stay: { topic: "Stay of demand", old: "Section 220(6)", now: "Section 411(12)" },
  appeal: { topic: "First appeal to the Commissioner (Appeals)", old: "Section 249(2), Form 35", now: "Section 358(3), Form 99" },
  cg54: { topic: "Exemption on sale of a residential house", old: "Section 54", now: "Section 82" },
  cg54ec: { topic: "Exemption by investing in specified bonds", old: "Section 54EC", now: "Section 85" },
  cg54f: { topic: "Exemption on sale of other long-term assets", old: "Section 54F", now: "Section 86" },
  tdsLate: { topic: "Late fee for TDS statements", old: "Section 234E", now: "Section 427" },
};

export default function ActTransitionTable({ rows }: { rows: (keyof typeof ACT_ROWS)[] }) {
  return (
    <section aria-labelledby="act-transition" className="mt-14">
      <h2 id="act-transition" className="text-2xl text-obsidian">
        Which sections changed under the Income-tax Act, 2025?
      </h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27 onwards) and renumbers most sections and
        forms. Income earned up to 31 March 2026, and notices and appeals for those years, still follow the Income-tax
        Act, 1961, so both numbers appear in practice. See the{" "}
        <Link href="/blog/income-tax-act-2025-section-mapping" className="font-medium text-royal-violet underline underline-offset-2">
          full table of old and new section and form numbers
        </Link>
        .
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <caption className="sr-only">Income-tax Act, 1961 provisions and their Income-tax Act, 2025 equivalents</caption>
          <thead>
            <tr className="bg-carbon text-left text-white">
              <th scope="col" className="p-4 font-medium">Topic</th>
              <th scope="col" className="p-4 font-medium">Income-tax Act, 1961 (up to FY 2025-26)</th>
              <th scope="col" className="p-4 font-medium">Income-tax Act, 2025 (from tax year 2026-27)</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {rows.map((k) => {
              const r = ACT_ROWS[k];
              return (
                <tr key={k} className="border-t border-ash align-top">
                  <th scope="row" className="p-4 text-left font-medium text-obsidian">{r.topic}</th>
                  <td className="p-4 text-slate">{r.old}</td>
                  <td className="p-4 text-slate">{r.now}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
