import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

// Neutral guide (ICAI Code of Ethics 2026 cl. 3.1.3(C)): no platform or firm is
// named, and nothing claims one option is better or cheaper. Facts are limited
// to who may sign what, how to verify a CA, and how fees are structured.
export const meta: BlogPostMeta = {
  slug: "ca-firm-or-online-filing-platform",
  title: "CA Firm or Online Filing Platform: How to Choose",
  description:
    "How to choose between a chartered accountant firm and an online filing platform: who signs, ICAI checks, confidentiality, fees and which work suits each.",
  date: "2026-11-08",
  excerpt:
    "Who signs your filings, how to verify a chartered accountant, how fees are split and which kinds of work suit each option, set out without naming any provider.",
  summary:
    "Choose by the work, not the channel. Standard, document-led filings can suit an online platform. Notices, audits, appeals and judgement-heavy decisions need a named chartered accountant you can verify on ICAI's Trace a Member search, who signs the report and answers for it under ICAI's rules. Ask who signs before you pay.",
  faqs: [
    {
      question: "Can an online filing platform sign an audit report or a CA certificate?",
      answer:
        "Only a chartered accountant in practice can sign attest reports such as a statutory audit report under the Companies Act, a tax audit report or a CA certificate for a foreign remittance. If a platform offers these, a chartered accountant still signs them, so ask for that person's name and ICAI membership number before you engage.",
    },
    {
      question: "How do I check that a chartered accountant is genuine?",
      answer:
        "Ask for the CA's ICAI membership number and, for a firm, its firm registration number, then check them on ICAI's public Trace a Member search at traceamember.icai.org. The number should also appear on any audit report or certificate the CA signs for you.",
    },
    {
      question: "Who is accountable if a filing goes wrong?",
      answer:
        "A chartered accountant is personally bound by the ICAI Code of Ethics and the Institute's disciplinary process under the Chartered Accountants Act, 1949. A platform's responsibility is set by its terms of service. Read those terms and confirm who reviews your filing before it is submitted.",
    },
    {
      question: "What is the difference between government fees and professional fees?",
      answer:
        "Government fees are statutory charges paid to a department, such as MCA filing fees, stamp duty or name reservation charges, and they are the same whoever files. Professional fees are what the adviser charges for the work. Ask for the two to be shown separately in writing.",
    },
    {
      question: "Is my data handled differently by a CA firm and a platform?",
      answer:
        "Chartered accountants owe clients a professional duty of confidentiality under the ICAI Code of Ethics. Any business that processes your personal data, including a platform, must also follow the Digital Personal Data Protection Act, 2023. Ask either option where your documents are stored and who can see them.",
    },
    {
      question: "Can I switch from a platform to a CA firm, or the other way?",
      answer:
        "Yes. Ask for copies of everything filed so far, the portal credentials you own, acknowledgements and working papers, and any notices received. Your new adviser needs these to continue without gaps, especially near a due date.",
    },
  ],
};

const h2 = "mt-12 text-2xl text-obsidian";
const link = "font-medium text-royal-violet underline underline-offset-2";

export default function Body() {
  return (
    <>
      <p>
        Many businesses in Chennai can now get a company registered or a GST return filed either through a chartered
        accountant firm or through an online filing platform. Both can be the right choice. The useful question is not
        which channel is better in general, but what this particular piece of work needs: a standard filing from clean
        documents, or a judgement that someone has to sign and stand behind.
      </p>

      <h2 className={h2}>What should decide the choice?</h2>
      <p>
        Three things matter most: whether the work needs a chartered accountant&apos;s signature, how much judgement it
        involves, and how costly a mistake would be. The table below sets these out by type of work. It describes the
        nature of the work, not any provider.
      </p>
      <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3">Type of work</th>
              <th className="px-4 py-3">Needs a CA&apos;s signature?</th>
              <th className="px-4 py-3">Judgement involved</th>
              <th className="px-4 py-3">Often suits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash">
            <tr><td className="px-4 py-3">Nil or simple GST returns from clean books</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Low</td><td className="px-4 py-3">Either option</td></tr>
            <tr><td className="px-4 py-3">Salaried individual&apos;s income tax return</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Low to medium</td><td className="px-4 py-3">Either option</td></tr>
            <tr><td className="px-4 py-3">Company or LLP registration with standard documents</td><td className="px-4 py-3">No (professional certification of some forms)</td><td className="px-4 py-3">Medium: structure, capital, objects</td><td className="px-4 py-3">Either; a CA if the structure is undecided</td></tr>
            <tr><td className="px-4 py-3">Statutory audit or tax audit</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">High</td><td className="px-4 py-3">A chartered accountant in practice</td></tr>
            <tr><td className="px-4 py-3">CA certificate for a foreign remittance</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Medium to high</td><td className="px-4 py-3">A chartered accountant in practice</td></tr>
            <tr><td className="px-4 py-3">Reply to a GST or income tax notice</td><td className="px-4 py-3">No, but representation matters</td><td className="px-4 py-3">High</td><td className="px-4 py-3">A named professional who reviews your records</td></tr>
            <tr><td className="px-4 py-3">Appeal or tribunal proceedings</td><td className="px-4 py-3">Authorised representative</td><td className="px-4 py-3">High</td><td className="px-4 py-3">A professional allowed to appear in that forum</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className={h2}>Who signs, and how do you check them?</h2>
      <p>
        Certain reports can be signed only by a chartered accountant in practice: statutory audit reports, tax audit
        reports and CA certificates for foreign remittances, among others. Whoever you engage, ask who will sign, then
        verify that person&apos;s membership number on ICAI&apos;s public{" "}
        <a href="https://traceamember.icai.org/" target="_blank" rel="noopener noreferrer" className={link}>
          Trace a Member
        </a>{" "}
        search. A firm also has an ICAI firm registration number, which appears on the reports it signs. Our{" "}
        <Link href="/blog/how-to-choose-a-chartered-accountant-in-chennai" className={link}>
          checklist for choosing a CA firm in Chennai
        </Link>{" "}
        covers the other checks.
      </p>

      <h2 className={h2}>How are fees structured?</h2>
      <p>
        Every quote has two parts. Government fees are fixed by statute (MCA filing fees, Tamil Nadu stamp duty, name
        reservation and similar charges) and do not change with the adviser. Professional fees are the adviser&apos;s
        charge for the work. Ask for both in writing, separately, and check what is excluded, such as replies to
        department queries, revisions or post-registration filings. Our{" "}
        <Link href="/tools/company-registration-government-fee-calculator" className={link}>
          government fee calculator
        </Link>{" "}
        shows the statutory part for a company registration in Tamil Nadu.
      </p>

      <h2 className={h2}>What questions should you ask before you pay?</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-6">
        <li>Who will review and sign or submit my filing, and what is their ICAI membership number?</li>
        <li>Which government fees are included, and which are paid separately?</li>
        <li>What happens if the department raises a query or a notice after filing?</li>
        <li>Where are my documents stored, and who can see them?</li>
        <li>Will I receive copies of every filing, acknowledgement and portal credential?</li>
      </ol>

      <h2 className={h2}>When does a chartered accountant firm make sense?</h2>
      <p>
        A firm is the natural fit when the work needs a signature, when a notice or appeal is involved, or when the
        answer depends on your facts, such as choosing between a{" "}
        <Link href="/blog/llp-vs-opc-vs-pvt-ltd" className={link}>
          private limited company, LLP or OPC
        </Link>
        , replying to a{" "}
        <Link href="/gst-notice-reply-chennai" className={link}>
          GST notice
        </Link>{" "}
        or planning a statutory audit. If you would like to talk it through, you can{" "}
        <Link href="/contact" className={link}>
          book a 15-minute consultation
        </Link>{" "}
        with C S Rushil &amp; Co. in Anna Nagar.
      </p>
    </>
  );
}
