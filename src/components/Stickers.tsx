// Flat, black-outlined sticker decorations and the blue "ribbon" motif of
// the Slush style. All purely decorative: aria-hidden, no gradients.

type StickerProps = { className?: string };

export function CoinSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#ffd731" stroke="#000" strokeWidth="2" />
      <circle cx="40" cy="40" r="27" fill="none" stroke="#000" strokeWidth="2" />
      <text x="40" y="52" textAnchor="middle" fontSize="34" fontWeight="700" fontFamily="var(--font-body)">
        ₹
      </text>
    </svg>
  );
}

export function CheckSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <rect x="4" y="4" width="72" height="72" rx="20" fill="#55db9c" stroke="#000" strokeWidth="2" />
      <path d="M22 41 L35 54 L59 28" fill="none" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DocSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden="true">
      <path d="M8 6 H52 L72 26 V90 H8 Z" fill="#e9ccff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 6 V26 H72" fill="#fff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 44 H60 M20 56 H60 M20 68 H46" stroke="#000" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function CalcSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden="true">
      <rect x="6" y="4" width="68" height="88" rx="16" fill="#fb4903" stroke="#000" strokeWidth="2" />
      <rect x="16" y="14" width="48" height="20" rx="6" fill="#fff" stroke="#000" strokeWidth="2" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}${c}`} cx={22 + c * 18} cy={50 + r * 14} r="5" fill="#fff" stroke="#000" strokeWidth="2" />
        )),
      )}
    </svg>
  );
}

export function StarSticker({ className = "" }: StickerProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path
        d="M40 4 L49 30 L76 31 L54 47 L62 74 L40 58 L18 74 L26 47 L4 31 L31 30 Z"
        fill="#5c4ade"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// The signature "inflatable" tube, drawn flat: black outline stroke, blue
// body stroke, and a thin light highlight to suggest volume.
export function Ribbon({ className = "" }: StickerProps) {
  const d = "M-40 220 C 120 40, 300 360, 520 170 S 900 40, 1080 210 S 1380 330, 1520 120";
  return (
    <svg viewBox="0 0 1480 360" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d={d} fill="none" stroke="#000" strokeWidth="78" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#4da2ff" strokeWidth="72" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#a9d1ff" strokeWidth="10" strokeLinecap="round" transform="translate(0 -18)" />
    </svg>
  );
}
