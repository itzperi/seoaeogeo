import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "din-and-dsc-for-company-directors",
  title: "DIN and DSC for Company Directors: A Practical Guide",
  description:
    "What a Director Identification Number and a Class 3 Digital Signature Certificate are, how to get them, validity, and the new three-yearly DIR-3 KYC cycle.",
  date: "2026-11-06",
  excerpt:
    "Every director needs a DIN and a DSC. Here is how each works, how long they last, and how the revised DIR-3 KYC cycle affects directors from 2026.",
  faqs: [
    {
      question: "What is the difference between DIN and DSC?",
      answer:
        "A DIN (Director Identification Number) is a unique number allotted by the Ministry of Corporate Affairs to an individual who is, or intends to become, a company director, and it stays with that person. A DSC (Digital Signature Certificate) is an electronic signing credential issued by a licensed Certifying Authority, used to sign MCA forms, and it expires.",
    },
    {
      question: "How often must directors file DIR-3 KYC now?",
      answer:
        "Under the revised rules described in the MCA's DIR-3-KYC-WEB FAQs, every individual holding a DIN as on 31 March of a financial year files KYC by 30 June following every third consecutive financial year, instead of every year. Separately, any change in personal mobile number, email or residential address must be reported within 30 days.",
    },
    {
      question: "What happens if a director misses DIR-3 KYC?",
      answer:
        "The DIN is marked as deactivated due to non-filing of DIR-3 KYC. A director with a deactivated DIN cannot sign filings as a director until it is reactivated. According to the MCA's FAQs, reactivation is done through DIR-3-KYC-WEB with a fee of Rs. 5,000, while KYC filed within the prescribed timeline carries no fee.",
    },
    {
      question: "Which class of DSC is needed for MCA filings?",
      answer:
        "A Class 3 Digital Signature Certificate. Class 2 certificates were discontinued by the Controller of Certifying Authorities from 1 January 2021, and Class 3 is now the standard issued for MCA, income tax and GST filings. The DSC must be valid, not revoked, and registered or associated with the director's DIN on the MCA portal.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Two credentials sit behind every company filing in India: the Director
        Identification Number (DIN) and the Digital Signature Certificate (DSC).
        Founders often treat them as one-time formalities during incorporation,
        but both have ongoing obligations. The DIN must be kept active through
        KYC, and the DSC expires. This post explains how each works, and the
        revised KYC cycle that applies from 2026.
      </p>

      <h2>What is a DIN?</h2>
      <p>
        A DIN is a unique identification number allotted by the Ministry of
        Corporate Affairs (MCA) to an individual who is, or intends to be, a
        director of a company. It is personal and permanent: one person, one
        DIN, used across every company where they are a director. It does not
        expire, but it can be deactivated if KYC is not filed, and it can be
        surrendered if never used.
      </p>
      <p>
        MCA systems prevent the same PAN or passport number from being linked to
        more than one DIN, so duplicate applications are rejected.
      </p>

      <h2>How is a DIN obtained?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>How the DIN is applied for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First directors of a new company</td>
            <td>Within the SPICe+ incorporation form, for up to three directors (up to five for a producer company)</td>
          </tr>
          <tr>
            <td>A new director joining an existing company</td>
            <td>Form DIR-3, filed before appointment</td>
          </tr>
          <tr>
            <td>A person who already holds a DIN</td>
            <td>No new application; the existing DIN is used</td>
          </tr>
        </tbody>
      </table>
      <p>
        For a DIN application, an Indian national provides PAN (which is
        verified), proof of identity and a current proof of residential
        address. A foreign national provides passport details and attested
        documents. Our{" "}
        <Link href="/blog/private-limited-company-registration-documents">documents checklist</Link>{" "}
        covers the details.
      </p>

      <h2>What is a DSC and why Class 3?</h2>
      <p>
        A DSC is an electronic credential, usually stored on a USB token, that
        lets a person sign documents and forms digitally. It is issued by a
        Certifying Authority licensed under the Information Technology Act,
        2000. Class 2 certificates were discontinued from 1 January 2021, so
        directors now obtain Class 3 certificates, which are accepted for MCA,
        income tax and GST filings.
      </p>
      <p>
        For incorporation, the MCA&apos;s SPICe+ FAQs say that where there are up
        to twenty subscribers and directors, each of them must have a DSC. First
        directors who do not yet have a DIN register their DSC using their PAN,
        and after the DIN is allotted they update the DSC against the DIN.
      </p>

      <h2>How long is a DSC valid?</h2>
      <p>
        A DSC is typically issued with a validity of one, two or three years.
        Once it expires, the director cannot sign any MCA filing until a new one
        is obtained and associated on the MCA portal. A useful habit is to note
        each director&apos;s DSC expiry date in the company&apos;s compliance
        calendar, so it is renewed before an annual filing deadline rather than
        during one. Our{" "}
        <Link href="/digital-signature-certificate-chennai">digital signature certificate</Link>{" "}
        page explains renewal.
      </p>

      <h2>DIR-3 KYC: what changed?</h2>
      <p>
        Until recently, every DIN holder had to file DIR-3 KYC every year. The
        rule has changed. According to the MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/din-related/dir-3-kyc-web.html" target="_blank" rel="noopener noreferrer">DIR-3-KYC-WEB FAQs</a>,
        which reflect rules 11 and 12A of the Companies (Appointment and
        Qualification of Directors) Rules, 2014:
      </p>
      <ul>
        <li>Every individual holding a DIN as on 31 March of a financial year files KYC in DIR-3-KYC-WEB on or before 30 June of the year immediately following every third consecutive financial year</li>
        <li>Any change in personal mobile number, email address or residential address must be reported in DIR-3-KYC-WEB within thirty days of the change</li>
        <li>KYC filed within the prescribed timeline carries no fee</li>
        <li>Updating mobile, email or address costs Rs. 500</li>
        <li>Reactivating a DIN deactivated for non-filing costs Rs. 5,000</li>
        <li>The form is processed automatically and there is no provision for resubmission, so details must be correct the first time</li>
      </ul>

      <h2>When is your next KYC due?</h2>
      <p>
        The MCA gives two examples. A director whose DIN was allotted on or
        before 31 March 2025 and who has already filed KYC for FY 2025-26 does
        not need to file for FY 2026-27 or FY 2027-28 if nothing changes; the
        next filing is due between April and June 2028. A director whose DIN was
        allotted during FY 2025-26 files for the first time between April and
        June 2029, and then every third financial year.
      </p>
      <p>
        The longer cycle reduces filings, but it also makes it easier to forget.
        Record the due year for each director, and remember that a change of
        phone number or address triggers a filing within thirty days regardless
        of the cycle.
      </p>

      <h2>What happens if KYC is missed?</h2>
      <p>
        The DIN status changes to deactivated due to non-filing of DIR-3 KYC. A
        director with a deactivated DIN cannot be used to sign company filings
        until it is reactivated, which can hold up annual returns, auditor
        appointments and other forms. Reactivation is done through the same
        DIR-3-KYC-WEB form with the reactivation fee.
      </p>

      <h2>Associating your DSC with the MCA portal</h2>
      <p>
        A DSC works on the MCA portal only after it is associated with your
        user account and your DIN. In outline:
      </p>
      <ul>
        <li>Register on the MCA portal as a business user (DIR-3-KYC-WEB and most forms need this role)</li>
        <li>Use the Associate DSC service, with the USB token inserted and the signing utility installed</li>
        <li>Before you have a DIN, associate the DSC using your PAN; after the DIN is allotted, update the association against the DIN</li>
        <li>Repeat the association whenever you renew or replace your DSC</li>
      </ul>
      <p>
        Many filing failures on deadline day come from a DSC that was renewed
        but never re-associated, so make this part of the renewal routine.
      </p>

      <h2>Directors of more than one company</h2>
      <p>
        A person holds one DIN however many companies they direct. KYC is filed
        once for the DIN, not once per company. The same DSC can be used to
        sign forms for every company, as long as it is valid and associated.
        When joining an existing company, the company files form DIR-12 for the
        appointment; the director does not need a new DIN.
      </p>

      <p>
        There is a limit on how many boards one person can sit on. Section 165
        of the Companies Act, 2013 caps directorships at twenty companies, of
        which not more than ten can be public companies, so track your
        directorships if you are involved in several ventures.
      </p>

      <h2>Common DSC problems and fixes</h2>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Likely fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DSC not recognised when signing</td>
            <td>Install the token driver and the MCA signing utility; try another USB port</td>
          </tr>
          <tr>
            <td>Name on DSC does not match DIN records</td>
            <td>Obtain a DSC in the name exactly as per PAN</td>
          </tr>
          <tr>
            <td>DSC expired just before a filing</td>
            <td>Obtain a new DSC and re-associate it; plan renewals a month in advance</td>
          </tr>
          <tr>
            <td>Token PIN locked</td>
            <td>Contact the issuing Certifying Authority or agent; a new certificate may be needed</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical tips for directors</h2>
      <ul>
        <li>Use a personal email and mobile number that only you control, not a company or adviser&apos;s contact</li>
        <li>Keep your PAN, Aadhaar and passport details consistent</li>
        <li>Store your DSC token safely; anyone with the token and PIN can sign on your behalf</li>
        <li>Note the DSC expiry and the DIR-3 KYC due year in your calendar</li>
        <li>Report address or phone changes within thirty days</li>
      </ul>

      <h2>Where this fits in compliance</h2>
      <p>
        DIN and DSC upkeep is part of a company&apos;s broader filing calendar,
        alongside annual returns and financial statements. Our{" "}
        <Link href="/roc-compliances">ROC compliances</Link> service and{" "}
        <Link href="/annual-compliance-package">annual compliance package</Link>{" "}
        track these dates for each director. If you are about to incorporate,
        start with our guide to{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>.
      </p>
      <p>
        If you would like your directors&apos; DIN and DSC status reviewed, you
        can <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
