import type { BlogPostMeta } from "@/lib/blog";

export const meta: BlogPostMeta = {
  slug: "gst-show-cause-notice-first-48-hours",
  title: "GST Show-Cause Notice: What to Do in the First 48 Hours",
  description:
    "Received a GST show-cause notice? Here's exactly what to check, gather, and do in the first 48 hours before your reply deadline.",
  date: "2026-09-23",
  excerpt:
    "The first 48 hours after a GST show-cause notice decide whether this becomes a quick reply or a years-long appeal. Here's the checklist.",
  faqs: [
    {
      question: "How long do I have to reply to a GST show-cause notice?",
      answer:
        "Typically 30 days from the date of issue, though the exact window is stated on the notice itself under the relevant section (e.g. Section 73 or 74 of the CGST Act). Always check the specific date on your notice rather than assuming 30 days.",
    },
    {
      question: "What happens if I miss the reply deadline?",
      answer:
        "The department can pass an ex-parte order — a decision made without your side being heard — typically confirming the entire proposed demand. This is far harder and more expensive to reverse than replying on time in the first place.",
    },
    {
      question: "Can I request an extension?",
      answer:
        "Extensions are occasionally granted at the officer's discretion for genuine cause, but they are not guaranteed. Request one in writing immediately if you need it — don't simply let the deadline pass and hope for leniency.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A GST show-cause notice (SCN) is not something to set aside for later —
        the reply window is strict, and a missed or weak reply can lead to an
        ex-parte order confirming the entire demand. Here is exactly what to do
        in the first 48 hours.
      </p>

      <h2>Hour 1: Read the notice completely, twice</h2>
      <p>
        Identify three things immediately: which section it&apos;s issued under
        (Section 73 for non-fraud cases, Section 74 for fraud/suppression
        allegations — the distinction matters enormously for penalty exposure),
        the exact reply deadline date, and the specific allegation (classification,
        valuation, ITC mismatch, non-filing, etc.).
      </p>

      <h2>Hours 2–6: Gather the relevant documents</h2>
      <ul>
        <li>All GST returns (GSTR-1, GSTR-3B, GSTR-9) for the period in question</li>
        <li>GSTR-2B and your purchase register, if the notice concerns ITC</li>
        <li>Relevant sales invoices, e-way bills, and delivery challans</li>
        <li>Bank statements showing payment trails, if the notice questions a transaction</li>
        <li>Any prior correspondence with the department on the same matter</li>
      </ul>

      <h2>Day 1–2: Get a professional assessment</h2>
      <p>
        Before drafting anything, get a chartered accountant to assess whether the
        allegation has merit, is a genuine data-entry mismatch, or is a
        misapplication of the law on the department&apos;s part. This assessment
        determines your entire response strategy — a straightforward clerical
        correction is handled very differently from a substantive legal dispute
        over classification or valuation.
      </p>

      <h2>What a strong reply includes</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Point-by-point rebuttal</td>
            <td>Address each allegation individually — a generic denial is treated as no reply at all.</td>
          </tr>
          <tr>
            <td>Supporting documents as annexures</td>
            <td>Every factual claim needs a document behind it — returns, invoices, ledgers.</td>
          </tr>
          <tr>
            <td>Relevant case law or circulars, if applicable</td>
            <td>Strengthens legal arguments on classification or interpretation disputes.</td>
          </tr>
          <tr>
            <td>Request for personal hearing</td>
            <td>Preserves your right to be heard before any adverse order is passed.</td>
          </tr>
        </tbody>
      </table>

      <h2>What not to do</h2>
      <ul>
        <li>Don&apos;t ignore the notice hoping it resolves itself — it won&apos;t.</li>
        <li>Don&apos;t send an informal, undocumented reply by email outside the proper portal process.</li>
        <li>Don&apos;t wait until the last day to start gathering documents — some records (like old e-way bills) take time to retrieve.</li>
      </ul>

      <p>
        If your notice concerns a genuinely disputed legal question — not just a
        clerical fix — you may be looking at the start of a longer litigation
        process. See our dedicated page on{" "}
        <a href="/gst-litigation-chennai">GST litigation in Chennai</a> for what
        comes after the reply stage.
      </p>
    </>
  );
}
