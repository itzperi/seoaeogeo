import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "opening-current-account-new-company",
  title: "Opening a Current Account for a New Company",
  description:
    "How a new company opens its current account: the AGILE-PRO-S request in SPICe+, the KYC documents banks must collect under RBI rules, and tips to avoid delays.",
  date: "2026-11-27",
  excerpt:
    "Every new company applies for a bank account through AGILE-PRO-S. Here is how that works, which KYC documents banks ask for, and how to avoid delays.",
  faqs: [
    {
      question: "Is opening a bank account mandatory when incorporating through SPICe+?",
      answer:
        "Yes. According to the MCA's SPICe+ and AGILE-PRO-S FAQs, all new companies incorporated through SPICe+ must apply for opening the company's bank account through the linked AGILE-PRO-S web form. There is no fee for this. After incorporation, the details go to the chosen bank, which completes its own KYC before opening the account.",
    },
    {
      question: "Which documents do banks need to open a company current account?",
      answer:
        "RBI's KYC Master Direction requires banks to obtain the certificate of incorporation, MoA and AoA, the company's PAN, a board resolution and power of attorney for those who will operate the account, KYC documents of beneficial owners and authorised signatories, names of senior management, and the registered office and principal place of business address.",
    },
    {
      question: "Who is a beneficial owner for bank KYC purposes?",
      answer:
        "Under RBI's KYC Master Direction, the beneficial owner of a company is the natural person who, alone or together with others, has a controlling ownership interest, meaning more than 10 per cent of the shares, capital or profits, or who exercises control through other means such as the right to appoint a majority of directors. Banks collect their KYC.",
    },
    {
      question: "Can I open the account with a bank that is not integrated with SPICe+?",
      answer:
        "SPICe+ lets you choose from the banks integrated with the MCA system, and the application must be made through AGILE-PRO-S. After incorporation, a company can also open accounts with other banks by approaching them directly with its incorporation documents and a board resolution. Many companies keep one operating account and add others later.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A new company cannot do much without a bank account. Subscription money
        has to be deposited, INC-20A requires proof of that deposit, and every
        vendor and customer payment depends on it. Since 2020, the bank account
        request is built into the incorporation filing itself. This post
        explains how that works, what banks are required to collect, and how to
        avoid the delays founders commonly face.
      </p>

      <h2>How the bank account request works in SPICe+</h2>
      <p>
        SPICe+ Part B is filed together with a linked web form called
        AGILE-PRO-S. According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/agile-pro-s-form.html" target="_blank" rel="noopener noreferrer">AGILE-PRO-S FAQs</a>,
        applying for EPFO and ESIC registration and opening a bank account are
        mandatory through this form, while GSTIN is optional. No fee is payable
        for these applications.
      </p>
      <p>
        The process after filing is sequential. Once the company is incorporated
        and the certificate of incorporation and PAN are generated, the
        information is forwarded to the bank you selected. After the bank
        validates it, the account number is displayed on the applicant&apos;s
        dashboard on the MCA portal. In practice, the bank also contacts the
        directors to complete its own KYC and account opening formalities.
      </p>

      <h2>Which banks are integrated?</h2>
      <p>
        The MCA&apos;s SPICe+ FAQs list the banks integrated with SPICe+ for
        account opening, which at the time of writing include Punjab National
        Bank, ICICI Bank, SBI, Kotak Mahindra Bank, Bank of Baroda, HDFC Bank,
        IndusInd Bank, Union Bank of India, Axis Bank, Canara Bank, DBS Bank,
        IDFC First Bank, Central Bank of India and Indian Overseas Bank. The list
        changes from time to time, so check the current options in the form.
      </p>
      <p>
        Choose a bank with a branch convenient to the registered office or the
        directors, since some formalities may need a branch visit, and consider
        which bank your customers, payment gateway or investors prefer.
      </p>

      <h2>What KYC documents will the bank ask for?</h2>
      <p>
        Banks follow RBI&apos;s{" "}
        <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566" target="_blank" rel="noopener noreferrer">Master Direction on Know Your Customer</a>.
        For a company account, it requires certified copies (or equivalent
        e-documents) of:
      </p>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certificate of incorporation</td>
            <td>Issued with the CIN and PAN</td>
          </tr>
          <tr>
            <td>Memorandum and Articles of Association</td>
            <td>The bank will read the objects clause to understand the business</td>
          </tr>
          <tr>
            <td>PAN of the company</td>
            <td>Shown on the certificate of incorporation; the PAN card follows separately</td>
          </tr>
          <tr>
            <td>Board resolution and power of attorney</td>
            <td>Authorising the account and naming those who can operate it</td>
          </tr>
          <tr>
            <td>KYC of beneficial owners and authorised signatories</td>
            <td>Identity and address documents, usually PAN and Aadhaar or passport</td>
          </tr>
          <tr>
            <td>Names of senior management</td>
            <td>Usually the directors for a new company</td>
          </tr>
          <tr>
            <td>Registered office and principal place of business</td>
            <td>Where these differ, both addresses</td>
          </tr>
        </tbody>
      </table>
      <p>
        Under the same Direction, the beneficial owner of a company is a natural
        person holding more than 10 per cent of its shares, capital or profits,
        or exercising control by other means. If a corporate shareholder holds
        the shares, the bank will look through it to the individuals behind it.
      </p>

      <h2>The board resolution</h2>
      <p>
        Every bank needs a board resolution for a company account. It usually
        covers:
      </p>
      <ul>
        <li>Opening a current account with the named bank and branch</li>
        <li>The names and designations of authorised signatories</li>
        <li>Whether signatories operate singly or jointly, and any limits</li>
        <li>Authority for internet banking, cheque books and debit cards</li>
      </ul>
      <p>
        This resolution is normally passed at the{" "}
        <Link href="/blog/first-board-meeting-checklist">first board meeting</Link>.
        Many banks have their own resolution format, so ask for it before the
        meeting.
      </p>

      <h2>How to choose the bank</h2>
      <p>
        Beyond convenience, a few practical factors are worth weighing when you
        select the bank in AGILE-PRO-S:
      </p>
      <ul>
        <li><strong>Branch access:</strong> a branch near the registered office or the directors makes signature verification and document submission easier</li>
        <li><strong>Digital banking:</strong> multi-user internet banking with maker-checker controls is useful once the team grows</li>
        <li><strong>Integration needs:</strong> payment gateways, accounting software and payroll tools integrate more easily with some banks</li>
        <li><strong>Foreign receipts:</strong> if you expect export income or foreign investment, check the bank&apos;s handling of inward remittances and FEMA documentation</li>
        <li><strong>Minimum balance requirements:</strong> current accounts often carry average balance conditions, which vary by account type</li>
      </ul>

      <h2>A realistic timeline</h2>
      <p>
        The account request travels with the incorporation application, but the
        bank can act only after the certificate of incorporation and PAN are
        issued. From that point, the time taken depends on the bank&apos;s
        KYC process and how quickly directors respond. Some banks complete the
        process in days, others take longer, especially where a director is
        non-resident or a corporate shareholder is involved. Since INC-20A
        needs proof of subscription money in the account, a slow bank directly
        delays the company&apos;s ability to start business.
      </p>
      <p>
        If the account is not opened through the AGILE-PRO-S route for any
        reason, the company can approach a bank directly with the same KYC
        documents and a board resolution.
      </p>

      <h2>Tips to avoid delays</h2>
      <ul>
        <li><strong>Keep KYC consistent.</strong> Directors&apos; names, addresses and dates of birth should match across PAN, Aadhaar and the MCA filing.</li>
        <li><strong>Keep the registered office usable.</strong> Banks may verify the address. A home office should be reachable and the company name displayed.</li>
        <li><strong>Be ready to explain the business.</strong> A clear, specific objects clause helps. Our post on{" "}
          <Link href="/blog/moa-objects-clause-drafting">drafting the objects clause</Link>{" "}
          explains why.</li>
        <li><strong>Plan for NRI or foreign directors.</strong> Banks may need additional documents for non-resident signatories and for foreign remittances.</li>
        <li><strong>Respond quickly.</strong> The bank&apos;s relationship team will contact the directors; slow responses are the most common cause of delay.</li>
      </ul>

      <h2>After the account opens</h2>
      <p>
        The first transactions matter for compliance:
      </p>
      <ul>
        <li><strong>Subscription money:</strong> each subscriber should transfer the value of their shares from their own bank account. The INC-20A form asks for the bank, IFSC, account number, date and amount of each receipt. See our post on{" "}
          <Link href="/blog/inc-20a-commencement-of-business">INC-20A</Link>.</li>
        <li><strong>Foreign subscribers:</strong> money must come through banking channels, and the bank provides the inward remittance documentation needed for FC-GPR reporting. See our{" "}
          <Link href="/fema-rbi-compliance">FEMA and RBI compliance</Link> page.</li>
        <li><strong>Preliminary expenses:</strong> reimburse founders for incorporation costs through the account, backed by the board approval and receipts.</li>
        <li><strong>Separate personal and company money:</strong> avoid paying personal expenses from the company account or company expenses from personal accounts.</li>
      </ul>

      <h2>Keeping the account in good standing</h2>
      <p>
        Opening the account is the start of an ongoing relationship with the
        bank. RBI&apos;s KYC framework requires banks to keep customer
        information up to date, so expect periodic requests to refresh KYC.
        Respond to them promptly; accounts with outdated KYC can face
        restrictions on transactions until the update is completed.
      </p>
      <ul>
        <li>Inform the bank when directors or authorised signatories change, with a fresh board resolution</li>
        <li>Update the bank when the registered office moves or the company&apos;s name changes</li>
        <li>Tell the bank about significant changes in shareholding, since beneficial owner details may need updating</li>
        <li>Keep the company&apos;s GST, PAN and incorporation details consistent with what the bank holds</li>
      </ul>
      <p>
        Clean, consistent records also help when the company later applies for
        a loan, an overdraft or a payment gateway, all of which rely on the
        bank&apos;s view of the account. Reconcile the bank statement with the
        company&apos;s books every month; unexplained entries are much easier
        to sort out in week four than at the year-end audit, and the first
        auditor will ask for these reconciliations.
      </p>

      <h2>Where this fits in the incorporation process</h2>
      <p>
        The bank account is one of several registrations bundled into SPICe+.
        For the full picture, see our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        and our{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation</Link>{" "}
        page.
      </p>
      <p>
        If you would like help coordinating bank account opening for your new
        company, you can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
