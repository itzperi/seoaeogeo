const MESSAGES = [
  "Free 15-minute consultation with a chartered accountant",
  "GST notice? Reply before the deadline",
  "Tax audit · Transfer pricing · Virtual CFO",
  "NRI tax for UAE · UK · USA",
  "Anna Nagar, Chennai · In person or online",
];

// Full-bleed black announcement strip that scrolls on a loop. The second
// copy of the messages makes the loop seamless and is hidden from screen
// readers; reduced-motion users get a static strip (see globals.css).
export default function Marquee() {
  const items = MESSAGES.map((m) => (
    <span key={m} className="flex shrink-0 items-center gap-6 pr-6">
      {m}
      <span aria-hidden="true" className="text-sunburst">
        ✦
      </span>
    </span>
  ));

  return (
    <div className="overflow-hidden bg-carbon py-2 text-[12px] font-bold uppercase tracking-[0.032em] text-white">
      <div className="marquee-track flex w-max">
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
