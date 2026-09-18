// Single source of truth for the firm's mark — a rounded-square monogram in
// the existing brand violet/lemon palette (globals.css), used in the header,
// footer, and as the basis for the generated favicon/apple-icon/logo.png
// routes (src/app/icon.tsx, apple-icon.tsx, logo.png/route.tsx). Kept as
// inline SVG rather than an image file so it stays crisp at any size with
// no extra network request.
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="C S Rushil & Co."
    >
      <rect width="32" height="32" rx="8" fill="#5423e7" />
      <rect x="2.5" y="2.5" width="27" height="27" rx="6" fill="none" stroke="#ffc233" strokeWidth="1.5" />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fontFamily="var(--font-display, ui-sans-serif, sans-serif)"
        fontSize="13"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        CSR
      </text>
    </svg>
  );
}
