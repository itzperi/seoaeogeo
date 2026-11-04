import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { JsonLd, howToSchema } from "@/lib/schema";
import { ADDRESS_SHORT, EMAIL, FOUNDER_NAME, TEAM_SIZE } from "@/lib/site";

const TITLE = "CA Firms in Chennai for Articleship | C S Rushil & Co.";
const DESCRIPTION =
  "Looking for CA firms in Chennai for articleship? C S Rushil & Co. in Anna Nagar trains articles in audit, tax, GST, FEMA and incorporation. See how to apply.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/career",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/career" },
};

const LINK = "text-royal-violet underline underline-offset-2";
const H2 = "mt-14 text-2xl text-obsidian";
const P = "mt-4 max-w-3xl leading-relaxed text-slate";

const TRAINING_AREAS: string[][] = [
  [
    "Statutory audit",
    "Vouching, ledger scrutiny, bank and party confirmations, drafting working papers and helping prepare the audit file under a senior's review.",
    "/statutory-audit-chennai",
  ],
  [
    "Tax audit",
    "Reconciling books to tax records, preparing the schedules the tax audit report relies on and checking disclosure items with the audit team.",
    "/tax-audit-chennai",
  ],
  [
    "GST notices and litigation",
    "Reading the notice, reconciling returns with GST portal data, collecting documents and drafting replies that the CA reviews before filing.",
    "/gst-notice-reply-chennai",
  ],
  [
    "Income-tax notices and appeals",
    "Tracking portal notices, preparing response data and supporting the drafting of submissions in assessment and appeal matters.",
    "/income-tax-notice-reply-chennai",
  ],
  [
    "FEMA and India subsidiaries",
    "Helping with foreign investment reporting, subsidiary compliance calendars and the paperwork for overseas parent companies.",
    "/fema-rbi-compliance",
  ],
  [
    "Company incorporation and ROC",
    "Preparing incorporation documents and filing data, and the annual ROC forms for companies we look after.",
    "/private-limited-company-incorporation-chennai",
  ],
  [
    "Virtual CFO work",
    "Building monthly MIS packs, cash-flow views and budget-versus-actual reports for client management teams.",
    "/virtual-cfo-services",
  ],
];

const HOW_TO_APPLY = [
  {
    name: "Choose the role you want",
    text: "Decide whether you are applying as an article assistant, a semi-qualified CA, or a qualified CA, and note the practice area that interests you most.",
  },
  {
    name: "Prepare a one-page resume",
    text: "Include your ICAI registration or exam status, your attempt details, any prior training or work, and the software you have used, such as Tally or Excel.",
  },
  {
    name: "Email your resume",
    text: `Send the resume to ${EMAIL} with the role in the subject line and two or three sentences on why you want to join.`,
  },
  {
    name: "Speak with the team",
    text: "If your profile matches an opening, the team will contact you to discuss your interests and the work involved, in person at the Anna Nagar office or on a video call.",
  },
  {
    name: "Complete the formalities",
    text: "Where you are joining as an article, the ICAI registration and the firm's articleship paperwork are completed before training begins.",
  },
];

const FAQS = [
  {
    question: "Do you take articles at C S Rushil & Co.?",
    answer:
      "We hire article assistants at our Anna Nagar office in Chennai and review every application we receive. Openings depend on the engagements we have at the time, so email your resume with the role you want and the team will contact you when there is a match.",
  },
  {
    question: "How long is CA articleship?",
    answer:
      "Articleship is practical training that runs for the period ICAI prescribes for the CA course. ICAI has revised the scheme over the years, so confirm the current duration, eligibility and registration steps on the ICAI website or with your ICAI regional office before you plan your timeline.",
  },
  {
    question: "Can I join as a semi-qualified CA or accountant?",
    answer:
      "Yes. We look at semi-qualified candidates, for example those who have cleared one or both CA groups, for audit, GST and income-tax roles. Send your resume stating your exam status and the area you prefer, and mention any software experience such as Tally or Excel.",
  },
  {
    question: "Will I get exposure to both audit and tax?",
    answer:
      "Yes. The firm works across statutory audit, tax audit, GST, income-tax notices, FEMA and India subsidiary compliance, company incorporation and virtual CFO work. Assignments rotate with client needs, so an article typically sees several of these areas rather than only one.",
  },
  {
    question: "Do you hire experienced, fully qualified CAs?",
    answer:
      "We consider qualified CAs for senior roles in audit, tax and GST litigation, and for client-facing advisory work. Email your resume with your experience, the practice areas you have handled and whether you have appeared before tax authorities or tribunals.",
  },
  {
    question: "Where will I work, and is remote work possible?",
    answer:
      "The team is based at our office in J-Block, Anna Nagar, Chennai, and most work is done there, together with video calls for clients overseas. Whether a particular role allows any remote work is discussed during the conversation for that role.",
  },
];

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-cards border border-ash">
      <table className="w-full text-left text-sm">
        <thead className="bg-carbon text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ash bg-paper">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-obsidian" : "text-slate"}`}>
                  {c.startsWith("/") ? (
                    <Link href={c} className={LINK}>
                      {r[0]} service
                    </Link>
                  ) : (
                    c
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CareerPage() {
  return (
    <>
      <JsonLd
        data={howToSchema({
          name: "How to apply for articleship or a job at C S Rushil & Co.",
          description: "Five steps to apply for an article assistant, semi-qualified or qualified CA role at our Anna Nagar, Chennai office.",
          steps: HOW_TO_APPLY,
        })}
      />
      <Breadcrumbs items={[{ name: "Careers", href: "/career" }]} />
      <PageHero
        eyebrow="Careers"
        h1="CA articleship and careers at C S Rushil & Co."
        subhead={`A ${TEAM_SIZE}-member team in ${ADDRESS_SHORT} hiring article assistants, semi-qualified accountants and qualified CAs.`}
        lead={
          <>
            C S Rushil &amp; Co. is a chartered accountancy firm in Anna Nagar, Chennai, that takes article assistants and
            hires semi-qualified and qualified CAs. Articles work across statutory audit, tax audit, GST notices and
            litigation, FEMA and India subsidiary compliance, incorporation and virtual CFO engagements. Email your resume
            to {EMAIL}.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="container-page">
          <h2 className="text-2xl text-obsidian">What do articles work on at a CA firm in Chennai like ours?</h2>
          <p className={P}>
            Articles at our firm work on real client files across audit, tax, GST, FEMA, company law and finance
            advisory, under the review of a chartered accountant.
          </p>
          <p className={P}>
            Many students searching for CA firms in Chennai for articleship want to know one thing first: will they
            see more than one type of work? Our practice is built around that. We are a boutique firm, so an article
            is not confined to a single desk for the whole training period. The table below shows the training areas
            and what an article actually does in each.
          </p>
          <Table head={["Training area", "What an article does", "Related service"]} rows={TRAINING_AREAS} />
          <p className={P}>
            To see the client side of each area, read our pages on{" "}
            <Link href="/statutory-audit-chennai" className={LINK}>statutory audit</Link>,{" "}
            <Link href="/tax-audit-chennai" className={LINK}>tax audit</Link>,{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>GST litigation</Link>,{" "}
            <Link href="/fema-rbi-compliance" className={LINK}>FEMA and RBI compliance</Link>,{" "}
            <Link href="/india-subsidiary-compliance-cfo" className={LINK}>India subsidiary compliance</Link> and{" "}
            <Link href="/virtual-cfo-services" className={LINK}>virtual CFO services</Link>.
          </p>

          <h2 className={H2}>What will you learn in statutory audit and tax audit?</h2>
          <p className={P}>
            You learn how an audit file is built from the ground up: from understanding the client&apos;s business to
            testing transactions and documenting your conclusions.
          </p>
          <p className={P}>
            In <Link href="/statutory-audit-chennai" className={LINK}>statutory audit</Link>, articles learn to vouch
            entries, check ledgers against supporting documents, obtain confirmations from banks and parties, and
            prepare working papers that a reviewer can follow. In{" "}
            <Link href="/tax-audit-chennai" className={LINK}>tax audit</Link>, the focus moves to reconciling books with
            tax records and preparing the schedules that the audit report relies on. Both sit under our wider{" "}
            <Link href="/audit-and-assurance" className={LINK}>audit and assurance</Link> practice, and both teach habits
            that stay with a CA for life: professional skepticism, documentation and clear writing.
          </p>

          <h2 className={H2}>What will you learn in GST, income-tax notices and litigation?</h2>
          <p className={P}>
            You see how a tax notice is read, reconciled, answered and, where needed, appealed, which is one of the
            fastest ways to build practical judgement.
          </p>
          <p className={P}>
            Notice work is where theory meets deadlines. On a{" "}
            <Link href="/gst-notice-reply-chennai" className={LINK}>GST notice reply</Link>, an article helps reconcile
            returns with portal data and gathers the documents the reply needs. On{" "}
            <Link href="/gst-litigation-chennai" className={LINK}>GST litigation</Link>, the work extends to supporting
            drafts for appeals and hearings. The same approach applies to an{" "}
            <Link href="/income-tax-notice-reply-chennai" className={LINK}>income-tax notice</Link> and to{" "}
            <Link href="/income-tax-assessment-appeals-chennai" className={LINK}>assessment and appeals</Link>. Articles
            also touch routine compliance such as{" "}
            <Link href="/tds-return-filing-chennai" className={LINK}>TDS return filing</Link>, so they understand the
            full cycle and not just the dispute at the end.
          </p>

          <h2 className={H2}>What will you learn in FEMA, India subsidiaries and company incorporation?</h2>
          <p className={P}>
            You work on cross-border and company-law matters that most students only meet in textbooks, including
            foreign-owned Indian companies and their compliance.
          </p>
          <p className={P}>
            Our <Link href="/fema-rbi-compliance" className={LINK}>FEMA and RBI compliance</Link> work, and the support
            we give overseas parents through{" "}
            <Link href="/india-subsidiary-compliance-cfo" className={LINK}>India subsidiary compliance</Link>, introduce
            articles to foreign investment reporting and the calendar of filings a subsidiary must keep. On the
            company-law side, articles help prepare{" "}
            <Link href="/private-limited-company-incorporation-chennai" className={LINK}>
              private limited company incorporation
            </Link>{" "}
            files and the annual <Link href="/roc-compliances" className={LINK}>ROC compliances</Link>. Where
            intercompany pricing arises, there is also exposure to{" "}
            <Link href="/transfer-pricing-audit" className={LINK}>transfer pricing audit</Link> documentation.
          </p>

          <h2 className={H2}>What will you learn in virtual CFO and accounting work?</h2>
          <p className={P}>
            You learn how finance information is turned into management decisions, which is the part of the profession
            many CAs move into after qualifying.
          </p>
          <p className={P}>
            On <Link href="/virtual-cfo-services" className={LINK}>virtual CFO</Link> engagements, articles help build
            monthly MIS packs, cash-flow views and budget-versus-actual reports. This sits on top of everyday
            accounting, so you also understand the books behind the numbers through our{" "}
            <Link href="/bookkeeping-services-chennai" className={LINK}>bookkeeping</Link> and{" "}
            <Link href="/payroll-services-chennai" className={LINK}>payroll</Link> processes.
          </p>

          <h2 className={H2}>How does CA articleship work under ICAI rules?</h2>
          <p className={P}>
            Articleship is the practical training part of the CA course, and it is registered with ICAI and runs for the
            period ICAI prescribes.
          </p>
          <p className={P}>
            An article trains under a practising chartered accountant, and the training is registered with the
            Institute of Chartered Accountants of India. ICAI sets the period, the eligibility conditions and the rules
            for the training, and those rules have been revised from time to time, so you should always read the current
            regulations on the ICAI website before you plan your timeline. We do not quote stipend amounts, leave
            numbers or exam-leave days here, because those are decided under ICAI&apos;s rules and the terms agreed when
            you join, and they are best discussed directly with the firm. What we can say is that the registration and
            paperwork are completed before training starts, and that your work is assigned and reviewed by qualified
            chartered accountants.
          </p>

          <h2 className={H2}>How does mentorship under {FOUNDER_NAME} work?</h2>
          <p className={P}>
            {FOUNDER_NAME}, a member of ICAI and Certified FAFD, reviews the firm&apos;s work and guides the team, so
            articles learn from the person who signs off the advice.
          </p>
          <p className={P}>
            The firm is led by {FOUNDER_NAME}, who is also a start-up mentor. The team of {TEAM_SIZE} is small enough
            that articles see how a file moves from first conversation to final sign-off, rather than working on a
            narrow slice. You can read more about the founder and the team on our{" "}
            <Link href="/about-us" className={LINK}>about us</Link> page and about the way we run engagements on{" "}
            <Link href="/how-we-work" className={LINK}>how we work</Link>. Mentorship here means review comments you can
            learn from, the chance to ask why a position was taken, and gradually taking on more responsibility as your
            work improves.
          </p>

          <h2 className={H2}>Which roles are open to qualified and semi-qualified CAs?</h2>
          <p className={P}>
            We consider semi-qualified and qualified CAs for audit, GST, income-tax and advisory roles, subject to the
            openings we have at the time.
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-slate">
            <li>
              <span className="font-medium text-obsidian">Article assistant:</span> training across audit, tax and
              compliance as described above.
            </li>
            <li>
              <span className="font-medium text-obsidian">Semi-qualified CA or accountant:</span> audit execution, GST
              reconciliation and return work, and income-tax data preparation.
            </li>
            <li>
              <span className="font-medium text-obsidian">Qualified CA:</span> leading audit files, drafting notice
              replies and appeal submissions, and handling clients directly.
            </li>
            <li>
              <span className="font-medium text-obsidian">Finance and accounting roles:</span> bookkeeping, payroll and
              MIS reporting for client engagements.
            </li>
          </ul>
          <p className={P}>
            We do not always have a live posting on the site, but we review every application and contact you when a
            role that matches your profile opens up.
          </p>

          <h2 className={H2}>Why choose a boutique Chennai firm for articleship?</h2>
          <p className={P}>
            A smaller firm tends to give articles broader exposure and closer review than a single-function desk.
          </p>
          <p className={P}>
            Because the firm works across audit, tax, GST, FEMA, incorporation and finance advisory, an article can see
            how these areas connect. A company incorporated in the morning needs{" "}
            <Link href="/roc-compliances" className={LINK}>ROC filings</Link> later, a{" "}
            <Link href="/goods-and-services-tax" className={LINK}>GST</Link> registration, and eventually an audit. Our
            office is in {ADDRESS_SHORT}, and the team works with clients in English, Tamil and Hindi.
          </p>

          <h2 className={H2}>How do you apply for articleship or a job with us?</h2>
          <p className={P}>
            Email your resume to <a href={`mailto:${EMAIL}`} className={LINK}>{EMAIL}</a> with the role in the subject
            line, then follow the five steps below.
          </p>
          <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 leading-relaxed text-slate">
            {HOW_TO_APPLY.map((s) => (
              <li key={s.name}>
                <span className="font-medium text-obsidian">{s.name}.</span> {s.text}
              </li>
            ))}
          </ol>
          <p className={P}>
            Questions before you apply? See <Link href="/contact" className={LINK}>how to reach the office</Link>, or
            read about our <Link href="/trust" className={LINK}>approach and credentials</Link>.
          </p>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTASection showForm={false} title="Interested in joining us?" subtitle="Email your resume and we will reach out when a suitable role opens up." />
    </>
  );
}
