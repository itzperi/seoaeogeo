// "What to check before you choose who files for you": a factual comparison
// of what a chartered accountant firm is accountable for against the
// questions to ask an online filing platform. ICAI's Code of Ethics bars
// running down other providers, so the right-hand column states only what
// to ask, never a claim about any platform.

const ROWS: { point: string; firm: string; ask: string }[] = [
  {
    point: "Who is accountable",
    firm: "A named chartered accountant in practice, whose ICAI membership you can check on the ICAI website.",
    ask: "Which professional signs and files your forms, and can you check their registration?",
  },
  {
    point: "Professional rules",
    firm: "Bound by ICAI's Code of Ethics, including confidentiality, and subject to ICAI's disciplinary process.",
    ask: "Which professional body, if any, regulates the person doing your work?",
  },
  {
    point: "Constitution documents",
    firm: "Objects in the MoA and articles in the AoA drafted for your business, such as share-transfer and investor terms.",
    ask: "Are the MoA and AoA drafted for you, or a standard template?",
  },
  {
    point: "Capital and foreign investment",
    firm: "Authorised capital set at ₹15 lakh or less where it fits, so no MCA filing fee applies for SPICe+; FC-GPR and FEMA reporting for foreign shareholders.",
    ask: "Who advises on authorised capital and files the RBI forms if a foreign shareholder invests?",
  },
  {
    point: "Certificates reserved for a CA",
    firm: "Form 146 (earlier 15CB), tax audit reports and company statutory audits can be signed only by a chartered accountant in practice.",
    ask: "When you need one of these, who signs it?",
  },
  {
    point: "Notices and representation",
    firm: "A chartered accountant can reply to notices and appear before income tax and GST authorities for you.",
    ask: "Who replies and appears for you if a notice arrives after filing?",
  },
  {
    point: "After registration",
    firm: "The same firm can handle INC-20A, the first auditor, GST returns, ROC filings and the tax return.",
    ask: "Who handles the filings due in the first year, and is it in writing?",
  },
];

export default function CAFirmChecklist() {
  return (
    <section aria-labelledby="ca-vs-platform" className="mt-14">
      <h2 id="ca-vs-platform" className="text-2xl text-obsidian">
        What should you check before choosing who files for you?
      </h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate">
        Online platforms and chartered accountant firms both file on the same government portals. The difference is who
        is accountable for the work. These are the points to compare, and the questions worth asking whoever you choose.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <caption className="sr-only">What a chartered accountant firm is accountable for, and what to ask any filing provider</caption>
          <thead>
            <tr className="bg-carbon text-left text-white">
              <th scope="col" className="p-4 font-medium">Point</th>
              <th scope="col" className="p-4 font-medium">Chartered accountant firm (ICAI)</th>
              <th scope="col" className="p-4 font-medium">What to ask an online platform</th>
            </tr>
          </thead>
          <tbody className="bg-paper">
            {ROWS.map((r) => (
              <tr key={r.point} className="border-t border-ash align-top">
                <th scope="row" className="p-4 text-left font-medium text-obsidian">{r.point}</th>
                <td className="p-4 text-slate">{r.firm}</td>
                <td className="p-4 text-slate">{r.ask}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
