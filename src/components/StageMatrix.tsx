import Link from "next/link";

type Cell = { label: string; href: string };

// Service-to-business-stage matrix: which money page fits which kind of
// client. Each row links straight to the target pages, so the homepage
// passes weight to them with descriptive anchors.
const ROWS: { stage: string; need: string; links: Cell[] }[] = [
  {
    stage: "Founders and startups",
    need: "Incorporation, DPIIT recognition, investor reporting",
    links: [
      { label: "Private Limited Company registration in Chennai", href: "/private-limited-company-incorporation-chennai" },
      { label: "Virtual CFO for startups", href: "/virtual-cfo-services" },
    ],
  },
  {
    stage: "SMEs and traders",
    need: "GST returns, notices, appeals, monthly books",
    links: [
      { label: "GST litigation and appeals in Chennai", href: "/gst-litigation-chennai" },
      { label: "GST registration and returns", href: "/goods-and-services-tax" },
    ],
  },
  {
    stage: "Manufacturers and exporters",
    need: "Working capital, costing, audits, GST refunds",
    links: [
      { label: "Virtual CFO in Chennai", href: "/virtual-cfo-services" },
      { label: "Statutory audit", href: "/statutory-audit-chennai" },
    ],
  },
  {
    stage: "Foreign-owned subsidiaries",
    need: "Entry structure, FEMA, group reporting, transfer pricing",
    links: [
      { label: "India subsidiary compliance and CFO", href: "/india-subsidiary-compliance-cfo" },
      { label: "Company registration for foreign companies", href: "/company-registration-india-for-foreigners" },
    ],
  },
  {
    stage: "HNIs and NRIs",
    need: "Income tax planning, capital gains, NRI returns",
    links: [
      { label: "Income tax for HNIs", href: "/income-tax-consultant-for-hni-chennai" },
      { label: "NRI tax services", href: "/nri-tax-services" },
    ],
  },
];

export default function StageMatrix({ heading = "Which of our services fits your business stage?" }: { heading?: string }) {
  return (
    <div>
      <h2 className="text-3xl text-obsidian md:text-5xl">{heading}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        Most clients come to us at one of five stages. Find yours and go straight to the service that fits.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-carbon">
        <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
          <caption className="sr-only">C S Rushil &amp; Co. services by business stage</caption>
          <thead>
            <tr className="bg-carbon text-left text-white">
              <th className="p-4 font-medium">Business stage</th>
              <th className="p-4 font-medium">What usually needs doing</th>
              <th className="p-4 font-medium">Where to start</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.stage} className="border-t border-ash align-top">
                <th scope="row" className="p-4 text-left font-medium text-obsidian">{row.stage}</th>
                <td className="p-4 text-slate">{row.need}</td>
                <td className="p-4">
                  <ul className="space-y-1">
                    {row.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="font-medium text-royal-violet underline underline-offset-2">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
