"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Tap the CA badge 3 times within 1.5s to reach the admin login — a
// low-friction way for the site owner to reach /admin without a visible
// nav link, without this being an actual access-control mechanism itself
// (the real protection is the server-side login check on the page it
// leads to).
export default function FooterLogoGesture() {
  const router = useRouter();
  const tapCount = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTap() {
    tapCount.current += 1;
    if (resetTimer.current) clearTimeout(resetTimer.current);

    if (tapCount.current >= 3) {
      tapCount.current = 0;
      router.push("/admin");
      return;
    }

    resetTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, 1500);
  }

  return (
    <button
      type="button"
      onClick={handleTap}
      aria-label="Chartered Accountancy practice"
      className="cursor-default"
    >
      <Image
        src="/images/ca-india-badge.png"
        alt="Chartered Accountancy practice"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    </button>
  );
}
