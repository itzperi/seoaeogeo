import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "payroll-omr-startup-esop",
  title: "ESOPs at Your OMR Startup: Set Up Payroll Before Exercise",
  description:
    "OMR's startups issue ESOPs early to attract talent, but perquisite tax at exercise catches payroll teams unprepared far more often than it should.",
  date: "2026-09-26",
  excerpt:
    "OMR's startups issue ESOPs early to attract talent, but perquisite tax at exercise catches payroll teams unprepared more often than it should.",
};

export default function Body() {
  return (
    <>
      <p>
        A growth-stage startup along OMR had issued ESOPs to its early engineering hires two years earlier, as most startups here do to compete for talent without matching a larger company&apos;s cash salary. When the first batch of options came up for exercise, the payroll process had no mechanism in place to actually handle the tax event that triggers.
      </p>

      <h2>Perquisite tax applies at exercise, not at grant</h2>

      <p>
        Employees don&apos;t owe tax when ESOPs are granted — the tax event happens at exercise, calculated on the difference between the exercise price and the fair market value of the shares at that time. This needs to run through <Link href="/payroll-services-chennai">payroll</Link> as a perquisite, with the correct <Link href="/tds-return-filing-chennai">TDS deducted and reported</Link>, in the same cycle the exercise happens — not retroactively once someone notices it was missed.
      </p>

      <p>
        There is one important exception for eligible startups. If the company is DPIIT-recognised and holds the inter-ministerial board certificate for the startup tax holiday (Section 80-IAC), TDS on the ESOP perquisite can be deferred under Section 192(1C): tax is deducted within 14 days of the earliest of 48 months from the end of the relevant assessment year, the employee selling the shares, or the employee leaving the company. That deferral changes the payroll workflow rather than removing it &mdash; each deferred amount still has to be tracked until one of those events happens.
      </p>

      <h2>Why OMR startups specifically run into this gap</h2>

      <p>
        OMR&apos;s concentration of funded startups means ESOP grants happen early and often, frequently before a company has scaled its finance function (or brought in a <Link href="/virtual-cfo-services">virtual CFO</Link>) enough to have a payroll process built for handling exercises correctly. The gap isn&apos;t a lack of awareness that ESOPs have tax implications generally — it&apos;s that nobody set up the specific payroll workflow for when the first exercise actually happens.
      </p>

      <h2>Coordinating valuation and payroll timing</h2>

      <p>
        Getting the fair market value at the exercise date requires coordination with whoever handles your company&apos;s valuation, and that figure needs to reach payroll before the exercise is processed, not after — a timing dependency that&apos;s easy to overlook until the first exercise is already underway.
      </p>

      <p>
        If your OMR startup is approaching its first ESOP exercise cycle and payroll isn&apos;t set up for it yet, C S Rushil &amp; Co. can get this in place before it becomes urgent. Book a free consultation.
      </p>
    </>
  );
}
