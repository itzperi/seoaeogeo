import { FIRM_REGISTRATION_NO, FOUNDER_NAME, ICAI_MEMBER_LOOKUP_URL, ICAI_MEMBERSHIP_NO } from "@/lib/site";

// "Verify your chartered accountant" block for service, NRI and foreign
// subsidiary pages. Every statement is about what the law reserves for a
// chartered accountant in practice; it makes no claim about other firms.
// The membership and firm numbers render only once they are set in site.ts.

const ICAI_LOOKUP = ICAI_MEMBER_LOOKUP_URL;

const RESERVED = [
  "Form 146 (earlier Form 15CB), the accountant's certificate a bank asks for before money is sent abroad",
  "Tax audit reports (Section 63 of the Income-tax Act, 2025, earlier Section 44AB) and the transfer pricing report in Form 48 (earlier Form 3CEB)",
  "Statutory audit reports of companies under the Companies Act, 2013",
];

export default function ICAIVerificationTrustBar() {
  const hasNumbers = Boolean(ICAI_MEMBERSHIP_NO || FIRM_REGISTRATION_NO);
  return (
    <section aria-labelledby="verify-ca" className="mt-14 max-w-3xl rounded-cards border border-carbon bg-paper p-6">
      <h2 id="verify-ca" className="text-2xl text-obsidian">
        How can you verify the chartered accountant handling your work?
      </h2>
      <p className="mt-4 leading-relaxed text-slate">
        Chartered accountants in India are members of the Institute of Chartered Accountants of India (ICAI), and a
        member identity can be checked through{" "}
        <a href={ICAI_LOOKUP} target="_blank" rel="noopener noreferrer" className="font-medium text-royal-violet underline underline-offset-2">
          ICAI&apos;s Trace a Member service
        </a>
        . Ask separately for current practice status and the firm&apos;s registration details. This matters for foreign parent companies and NRIs, because some documents
        are valid only when signed by a chartered accountant in practice:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate">
        {RESERVED.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-slate">
        A chartered accountant can also appear for you before income tax authorities as an authorised representative.
      </p>
      <p className="mt-4 rounded-cards bg-fog p-4 text-sm text-obsidian">
        {hasNumbers ? (
          <>
            {FOUNDER_NAME}
            {ICAI_MEMBERSHIP_NO && <>, ICAI membership no. {ICAI_MEMBERSHIP_NO}</>}
            {FIRM_REGISTRATION_NO && <> · C S Rushil &amp; Co., ICAI firm registration no. {FIRM_REGISTRATION_NO}</>}
          </>
        ) : (
          <>
            Ask us for {FOUNDER_NAME}&apos;s ICAI membership number and the firm&apos;s registration number in your
            15-minute consultation, and check them on the ICAI website before you sign an engagement letter.
          </>
        )}
      </p>
    </section>
  );
}
