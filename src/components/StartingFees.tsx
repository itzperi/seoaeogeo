import type { StartingFee } from "@/lib/fees-and-timing";

// Renders only when the firm has filled in a professional fee for this service.
export default function StartingFees({ fee }: { fee: StartingFee | null }) {
  if (!fee || fee.professionalFrom === null) return null;
  return (
    <section className="bg-paper pb-12" aria-labelledby="starting-fees-heading">
      <div className="container-page max-w-3xl">
        <h2 id="starting-fees-heading" className="text-2xl text-obsidian">Starting fees</h2>
        <p className="mt-4 text-slate">
          Professional fee from Rs {fee.professionalFrom.toLocaleString("en-IN")} for {fee.service}, excluding tax.
          {fee.governmentFees && <> Government fees are separate: {fee.governmentFees}.</>}
          {fee.updated && <> Updated {fee.updated}.</>}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="font-medium text-obsidian">Included</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate">{fee.includes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <p className="font-medium text-obsidian">Not included</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate">{fee.excludes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
