import Link from "next/link";
import { ICAI_MEMBER_LOOKUP_URL } from "@/lib/site";

// "About the CA" (owner's brief, Task 4.2). Facts from FIRM FACTS only. No
// membership or firm registration numbers are shown, by the owner's choice.
export default function AboutTheCA({ className = "mt-14" }: { className?: string }) {
  return (
    <section aria-labelledby="about-the-ca" className={`${className} max-w-3xl rounded-cards border border-carbon bg-white p-6`}>
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-carbon">About the CA</p>
      <h2 id="about-the-ca" className="mt-2 text-2xl text-obsidian">
        Who leads C S Rushil &amp; Co.?
      </h2>
      <p className="mt-3 leading-relaxed text-slate">
        <strong className="text-obsidian">CA Rushil C S</strong> is a practising Chartered Accountant, a member of the
        Institute of Chartered Accountants of India (ICAI), Certified FAFD and a Start-up Mentor, and leads C S Rushil
        &amp; Co. from its only office in J-Block, Anna Nagar, Chennai.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <li>
          <a
            href={ICAI_MEMBER_LOOKUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-royal-violet underline underline-offset-2"
          >
            Verify a chartered accountant on ICAI
          </a>
        </li>
        <li>
          <Link href="/about-us" className="font-medium text-royal-violet underline underline-offset-2">
            About the firm
          </Link>
        </li>
      </ul>
    </section>
  );
}
