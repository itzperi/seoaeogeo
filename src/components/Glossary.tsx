// Plain-English definitions for the notice and form names the site uses.
// Each definition points to its official source. "Updated" is the date the
// wording was last checked against that source (see docs/rule-review-log.md).
export type GlossaryTerm = { term: string; meaning: string; source: { label: string; href: string }; updated: string };

export const GLOSSARY: Record<string, GlossaryTerm> = {
  "DRC-01": {
    term: "DRC-01",
    meaning: "The GST portal summary of a demand: the tax, interest and penalty a proposed show cause notice would confirm.",
    source: { label: "GST portal: notices and orders guide", href: "https://tutorial.gst.gov.in/userguide/taxpayersdashboard/View_Notices_and_Demand_Orders.htm" },
    updated: "2026-10-24",
  },
  "ASMT-10": {
    term: "ASMT-10",
    meaning: "The GST notice that starts a scrutiny of your returns. The reply is filed in ASMT-11.",
    source: { label: "GST portal: notices and orders guide", href: "https://tutorial.gst.gov.in/userguide/taxpayersdashboard/View_Notices_and_Demand_Orders.htm" },
    updated: "2026-10-24",
  },
  "FC-GPR": {
    term: "FC-GPR",
    meaning: "Foreign Currency-Gross Provisional Return: the report an Indian company files with the RBI when it issues shares to a non-resident investor.",
    source: { label: "RBI: foreign investment reporting", href: "https://www.rbi.org.in" },
    updated: "2026-10-24",
  },
  "Form 15CA and 15CB": {
    term: "Form 15CA and 15CB",
    meaning: "Form 15CA is the remitter's declaration filed online before paying a non-resident. Form 15CB is the Chartered Accountant's certificate that supports it. Confirm the current form numbers on the income tax portal.",
    source: { label: "Income tax e-filing portal", href: "https://www.incometax.gov.in" },
    updated: "2026-10-24",
  },
};

export default function Glossary({ terms, heading = "Terms used on this page" }: { terms: string[]; heading?: string }) {
  const items = terms.map((t) => GLOSSARY[t]).filter(Boolean);
  if (items.length === 0) return null;
  return (
    <section className="bg-paper pb-12" aria-labelledby="glossary-heading">
      <div className="container-page">
        <h2 id="glossary-heading" className="text-2xl text-obsidian">{heading}</h2>
        <dl className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((g) => (
            <div key={g.term} className="rounded-cards border border-carbon bg-white p-5">
              <dt className="font-medium text-obsidian">{g.term}</dt>
              <dd className="mt-2 text-sm text-slate">
                {g.meaning}{" "}
                <a href={g.source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {g.source.label}
                </a>
                . Updated {g.updated}.
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
