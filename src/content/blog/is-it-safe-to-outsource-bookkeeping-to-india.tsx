import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "is-it-safe-to-outsource-bookkeeping-to-india",
  title: "Is It Safe to Outsource Bookkeeping to India? A Checklist",
  description:
    "What to check before a firm in India keeps your books: access, the data-transfer rule in the US, UK, Singapore, Australia and UAE, who files and how to exit.",
  date: "2026-11-12",
  excerpt:
    "It can be, if you control the access and the paperwork. A country-by-country checklist covering access, data-transfer rules, who files and what happens when you leave.",
  summary:
    "It can be, if you control the access and the paperwork. Invite the bookkeeper as a user in your own accounting software, use bank feeds instead of sharing banking passwords, sign terms that meet your country's data-transfer rule, keep filing with your local CPA or agent, and agree in writing what happens when the engagement ends.",
  faqs: [
    {
      question: "Should I give an overseas bookkeeper my online banking password?",
      answer:
        "No. Connect your bank to your accounting software as a bank feed and invite the bookkeeper as a separate named user in that software. They can then categorise and reconcile transactions without ever holding banking credentials or the ability to make payments, and you can remove their access at any time.",
    },
    {
      question: "Is sharing my books with a bookkeeper in India allowed under UK GDPR?",
      answer:
        "It can be. Access from India is a restricted transfer under UK GDPR, so the business remains the controller, the bookkeeper acts as processor under a data processing agreement, and the transfer usually relies on the ICO's International Data Transfer Agreement or the UK Addendum. The ICO's guidance on international transfers sets out the steps.",
    },
    {
      question: "Will a bookkeeper in India file my tax returns abroad?",
      answer:
        "It should not, unless it is registered to act in your country. The usual arrangement is that the bookkeeper keeps the books and prepares figures, and your local filer submits: a CPA or Enrolled Agent in the US, you or your HMRC agent in the UK, your tax agent and corporate secretary in Singapore, a registered BAS or tax agent in Australia, and you or an FTA-registered tax agent in the UAE.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Outsourcing bookkeeping to India is common for small businesses in the US, the UK, Singapore, Australia and the UAE. Whether it is safe depends less on where the bookkeeper sits and more on four things you control: how access is given, which data-transfer rule your own law applies, who files with your tax authority, and what the engagement letter says. Regulators are specific about the data question; the UK Information Commissioner&apos;s guidance on <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/" target="_blank" rel="noopener noreferrer">international transfers</a> is a good example of how much detail they expect.
      </p>

      <p>
        This checklist goes through each point and then sets out the rule by country, with a link to the official source for each. It is general information, not legal advice.
      </p>

      <h2>What access should an overseas bookkeeper have?</h2>

      <p>
        The safest set-up is one where the bookkeeper never holds anything you cannot take back. In practice that means:
      </p>

      <ul>
        <li><strong>A user invite, not your login.</strong> QuickBooks Online, Xero, Zoho Books and MYOB all let you invite an accountant or advisor as a separate named user. You can see what that user changes and remove them in one step.</li>
        <li><strong>Bank feeds, not banking passwords.</strong> Connect your bank to the accounting software yourself. The bookkeeper works from the feed and from statements, and never needs online-banking credentials or payment authority.</li>
        <li><strong>The file stays in your subscription.</strong> If the ledger lives in your own software account, the records stay with you whoever keeps them.</li>
        <li><strong>Documents in storage you own.</strong> Receipts captured to Dext, Hubdoc or a shared folder in your name, rather than sent back and forth by email.</li>
        <li><strong>Only the access the work needs.</strong> Payroll approval and payments can stay with you, even when the bookkeeper reconciles them.</li>
      </ul>

      <h2>Which data-transfer rule applies in your country?</h2>

      <p>
        When someone in India opens your ledger, personal data about your customers, suppliers and staff is being accessed from overseas. Most of the legal duty sits with you as the business, so it helps to know the rule by name and to see who stays responsible for filing.
      </p>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Data-transfer rule</th>
            <th>Who files locally</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link href="/outsourced-bookkeeping-usa">United States</Link></td>
            <td>No single federal privacy law for bookkeeping data. Where a CPA is involved, the FTC Safeguards Rule and <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noopener noreferrer">IRS Publication 4557</a> set duties for the CPA&apos;s own safeguards.</td>
            <td>Your CPA or Enrolled Agent files federal and state returns; you, your CPA or a filing service files 1099s and sales tax.</td>
          </tr>
          <tr>
            <td><Link href="/outsourced-bookkeeping-uk">United Kingdom</Link></td>
            <td>Access from India is a restricted transfer under UK GDPR. You stay controller, the bookkeeper is processor under a data processing agreement, and the transfer relies on the ICO&apos;s International Data Transfer Agreement (IDTA) or the UK Addendum.</td>
            <td>You or your UK accountant, as your HMRC agent, submit VAT returns and MTD updates; your accountant files accounts with Companies House.</td>
          </tr>
          <tr>
            <td><Link href="/outsourced-bookkeeping-singapore">Singapore</Link></td>
            <td>The PDPA <a href="https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act" target="_blank" rel="noopener noreferrer">Transfer Limitation Obligation</a>: make sure the overseas recipient protects the data to a comparable standard, usually by contract.</td>
            <td>You or your tax agent file GST F5 and Form C-S or C; your corporate secretary files with ACRA.</td>
          </tr>
          <tr>
            <td><Link href="/outsourced-bookkeeping-australia">Australia</Link></td>
            <td><a href="https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information" target="_blank" rel="noopener noreferrer">APP 8</a>: take reasonable steps so the overseas recipient handles personal information in line with the APPs. You usually stay accountable for it.</td>
            <td>Your registered BAS or tax agent lodges BAS; your tax agent lodges the income tax return.</td>
          </tr>
          <tr>
            <td><Link href="/outsourced-bookkeeping-uae">UAE</Link></td>
            <td>The federal <a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" target="_blank" rel="noopener noreferrer">Personal Data Protection Law</a> (Federal Decree-Law No. 45 of 2021). Companies in the DIFC or ADGM follow their own data protection rules.</td>
            <td>You or your FTA-registered tax agent file VAT and Corporate Tax returns on EmaraTax.</td>
          </tr>
        </tbody>
      </table>

      <p>
        In every case the practical answer is similar: a written agreement that names the data, the purpose, the safeguards and who may see it, plus access you can revoke. A provider that cannot tell you which of these rules applies to you has not thought about it.
      </p>

      <h2>Who files your returns if the bookkeeper is in India?</h2>

      <p>
        Not the bookkeeper. Each of these countries controls who may deal with the tax authority on your behalf. In Australia, for example, BAS services for a fee must come from a registered BAS or tax agent, so an offshore bookkeeper can only prepare BAS work under that agent&apos;s supervision. The safe pattern everywhere is the same: the bookkeeper keeps the books and prepares figures, your local filer reviews them and submits. Ask any provider to set out in writing which work it does and who files each return.
      </p>

      <h2>What should the engagement letter cover?</h2>

      <ul>
        <li>The scope of work, the software and the date each month closes.</li>
        <li>What you send, by when, and where it is stored.</li>
        <li>Who files what in your country, named by role.</li>
        <li>Confidentiality and data-processing terms that match your country&apos;s rule in the table above.</li>
        <li>Who on the provider&apos;s side has access, and whether any work is passed to anyone else.</li>
        <li>How the fee is worked out and how out-of-scope work is agreed.</li>
        <li>What happens to access, files and working papers when either side ends the engagement.</li>
      </ul>

      <h2>What happens to your data when you leave?</h2>

      <p>
        If the books sit in your own software, leaving is simple. You remove the bookkeeper&apos;s user, disconnect any apps or integrations they added, and change permissions on shared folders. Ask for a final trial balance and the last set of reconciliations so your next bookkeeper or accountant starts from a known position. Working papers the provider holds should be returned or deleted as the engagement letter says; a professional firm may have to keep some of its own records for a set period under its own rules, and the letter should say which.
      </p>

      <h2>What are the warning signs?</h2>

      <ul>
        <li>The provider asks for your online-banking password.</li>
        <li>The books would be kept in the provider&apos;s software subscription, not yours.</li>
        <li>The provider offers to file or lodge returns in your country without being registered there.</li>
        <li>There is no written agreement covering data, or nobody can name the rule that applies to you.</li>
      </ul>

      <p>
        How these points work for each market is set out on the <Link href="/outsourced-bookkeeping-services">outsourced bookkeeping services</Link> overview, which links to the separate pages for the US, UK, Singapore, Australia and the UAE.
      </p>
    </>
  );
}
