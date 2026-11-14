import Link from "next/link";
import { ICAI_MEMBER_LOOKUP_URL } from "@/lib/site";

// Two-line author bio under every blog post (owner's brief, Task 6.2).
// Facts from FIRM FACTS only; no membership or registration numbers.
export default function AuthorBio() {
  return (
    <aside aria-labelledby="author-bio" className="bg-paper pb-16">
      <div className="container-page max-w-3xl">
        <div className="rounded-cards border border-carbon bg-white p-6">
          <p id="author-bio" className="text-xs font-bold uppercase tracking-[0.08em] text-carbon">
            About the author
          </p>
          <p className="mt-2 leading-relaxed text-slate">
            <strong className="text-obsidian">CA Rushil C S</strong> is a practising Chartered Accountant, ICAI member,
            Certified FAFD and Start-up Mentor, and leads C S Rushil &amp; Co. from its office in Anna Nagar, Chennai.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate">
            Read more{" "}
            <Link href="/about-us" className="font-medium text-royal-violet underline underline-offset-2">
              about the firm
            </Link>{" "}
            or{" "}
            <a
              href={ICAI_MEMBER_LOOKUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal-violet underline underline-offset-2"
            >
              verify a chartered accountant on ICAI
            </a>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
