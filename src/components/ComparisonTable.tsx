// A plain comparison table for service pages. Rendered inside the service
// template's `children` slot. Cells are plain text, so the content stays in
// the HTML and reads well as a snippet.
export default function ComparisonTable({
  heading,
  columns,
  rows,
  note,
}: {
  heading: string;
  columns: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <section className="bg-paper pb-12">
      <div className="container-page">
        <h2 className="text-2xl text-obsidian">{heading}</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-carbon text-left">
                {columns.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-medium text-obsidian">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-ash align-top">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note && <p className="mt-4 text-sm text-slate">{note}</p>}
      </div>
    </section>
  );
}
