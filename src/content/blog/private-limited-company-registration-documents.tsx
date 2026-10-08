import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "private-limited-company-registration-documents",
  title: "Private Limited Company Registration: Documents Checklist",
  description:
    "Documents needed to register a private limited company: resident and NRI directors, foreign subscribers, registered office proof, and common name mismatches.",
  date: "2026-10-08",
  excerpt:
    "A practical SPICe+ document checklist: director KYC, attestation for foreign subscribers, registered office proof, and the mismatches behind rejections.",
  faqs: [
    {
      question: "What documents does a resident Indian director need for company registration?",
      answer:
        "A resident Indian director who does not already hold a DIN needs a PAN card, one proof of identity, a recent proof of residential address such as a bank statement or utility bill, a photograph, and a Class 3 Digital Signature Certificate. Directors who already hold a DIN still need a valid DSC to sign the SPICe+ forms.",
    },
    {
      question: "How old can the utility bill for the registered office be?",
      answer:
        "The MCA's SPICe+ guidance asks for a utility bill that is not older than two months. It must show the complete address that you enter in the form, be legible, and be accompanied by an English translation if it is in Tamil or another regional language. An older bill is a common reason for a resubmission request.",
    },
    {
      question: "Do NRI and foreign directors need notarised or apostilled documents?",
      answer:
        "Yes, if the documents are executed or the person resides outside India. MCA guidance says residents of Commonwealth countries need notarisation, residents of Hague Apostille Convention countries need notarisation plus an apostille, and residents of other countries need consular attestation by the Indian Embassy. Identity and address proofs are covered.",
    },
    {
      question: "What happens if my name differs between PAN and Aadhaar?",
      answer:
        "A spelling or format difference between PAN, Aadhaar and the name typed into SPICe+ can trigger a resubmission or DIN rejection, because the system validates PAN data with the Income Tax Department. Fix the mismatch before filing, either by updating one of the records or by using exactly the PAN name consistently across every form.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Most delays in incorporating a private limited company have nothing to do
        with the law. They come from documents: a utility bill that is three
        months old, a director whose name is spelled differently on PAN and
        Aadhaar, or a foreign subscriber whose passport copy was notarised but not
        apostilled. This checklist sets out what the Ministry of Corporate
        Affairs (MCA) actually expects in a SPICe+ filing, grouped by person and
        by premises, so you can collect everything once.
      </p>
      <p>
        If you are still deciding on the structure, our overview of{" "}
        <Link href="/company-registration-chennai">company registration in Chennai</Link>{" "}
        compares the options. This post assumes you have chosen a private
        limited company.
      </p>

      <h2>What does the MCA list as mandatory attachments?</h2>
      <p>
        The MCA&apos;s{" "}
        <a href="https://www.mca.gov.in/content/mca/global/en/help-faq/faqs/company-services/incorporation/spiceplus-linked-filings.html" target="_blank" rel="noopener noreferrer">SPICe+ FAQs</a>{" "}
        list the attachments that go with the incorporation form. In summary:
      </p>
      <ul>
        <li>Memorandum of Association (MoA) and Articles of Association (AoA), usually filed as the linked web forms e-MoA (INC-33) and e-AoA (INC-34)</li>
        <li>Proof of registered office address with a utility bill not older than two months, plus a rent agreement or lease deed and an NOC from the owner where applicable</li>
        <li>Proof of identity and residential address for every subscriber and every first director who does not already hold a DIN</li>
        <li>For a corporate subscriber, its certificate of incorporation and a board resolution authorising the investment and naming its representative</li>
        <li>Declarations by subscribers and first directors (INC-9), which are auto-generated where all of them hold a DIN or PAN and there are twenty or fewer</li>
      </ul>

      <h2>Checklist for resident Indian directors and subscribers</h2>
      <p>
        Every subscriber and director needs a Digital Signature Certificate to
        sign the forms. Those without a Director Identification Number (DIN) can
        apply for one inside SPICe+ itself; the form allows DIN applications for
        up to three directors. For each such person, keep ready:
      </p>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>What to check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAN card</td>
            <td>Mandatory for Indian nationals; the name and date of birth must match what you type into the form</td>
          </tr>
          <tr>
            <td>Proof of identity</td>
            <td>Aadhaar, passport, voter ID or driving licence</td>
          </tr>
          <tr>
            <td>Proof of residential address</td>
            <td>A recent bank statement, utility bill or passbook page with transactions; MCA lists old address proofs as a rejection ground</td>
          </tr>
          <tr>
            <td>Class 3 DSC</td>
            <td>Valid, not expired, and registered on the MCA portal</td>
          </tr>
          <tr>
            <td>Mobile number and email</td>
            <td>Personal and unique to the individual, since OTP verification and future DIR-3 KYC rely on them</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you need signatures arranged for several directors, our{" "}
        <Link href="/digital-signature-certificate-chennai">digital signature certificate service</Link>{" "}
        explains the verification steps.
      </p>

      <h2>What extra documents do NRI and foreign directors need?</h2>
      <p>
        For a director or subscriber living outside India, the attestation rule
        depends on the country of residence. MCA guidance sets out three cases:
      </p>
      <ul>
        <li><strong>Commonwealth country:</strong> documents attested by a notary public of that country</li>
        <li><strong>Hague Apostille Convention country:</strong> notarised and then apostilled</li>
        <li><strong>Any other country:</strong> notarised and authenticated by the Indian Embassy or consulate</li>
      </ul>
      <p>
        The documents covered are the proof of identity (usually the passport),
        the proof of address, the incorporation certificate of a foreign
        corporate subscriber, and the MoA and AoA where these are signed
        physically. A foreign national without a valid business visa generally
        has to sign physical, apostilled MoA and AoA rather than the e-forms.
        NRIs who are Indian citizens should provide PAN as well. Our detailed
        guides on{" "}
        <Link href="/blog/nri-director-private-limited-company">NRI directors</Link>{" "}
        and{" "}
        <Link href="/company-registration-india-for-foreigners">company registration in India for foreigners</Link>{" "}
        cover the extra steps, including FEMA reporting once shares are issued.
      </p>

      <h2>Registered office proof: owned, rented or family property</h2>
      <p>
        MCA&apos;s guidance on the registered office clause is specific, and it
        is where most rejections happen. The proof should match the address in
        the form exactly, and:
      </p>
      <ul>
        <li>The utility bill (electricity, water, gas, telephone or broadband) must show the complete address and be no older than two months</li>
        <li>If the premises are rented, attach the rent agreement or lease deed and an NOC from the owner naming the proposed company</li>
        <li>If the premises belong to a relative, an NOC from the owner is still needed, along with proof of ownership if the bill is in someone else&apos;s name</li>
        <li>A bill issued by a private authority (for example, a society maintenance bill) is rejected unless backed by a sale deed or lease deed</li>
        <li>A bill in the name of a previous owner after the property changed hands is rejected</li>
      </ul>
      <p>
        If you plan to use a home or co-working space, read our post on{" "}
        <Link href="/blog/registered-office-at-home-company">using a home address as the registered office</Link>.
      </p>

      <h2>Common document mismatches that trigger resubmission</h2>
      <p>
        SPICe+ allows two resubmissions to cure defects, according to the MCA
        FAQs. Each one costs days. These are the mismatches we see most often:
      </p>
      <ul>
        <li><strong>PAN versus Aadhaar name:</strong> initials expanded on one and not the other, a missing middle name, or a married name updated on Aadhaar only</li>
        <li><strong>Father&apos;s name:</strong> DIN applications ask for it, and it must agree with PAN records</li>
        <li><strong>Address format:</strong> the address on the utility bill differs from the one typed into the form, such as a missing door number or a different street name</li>
        <li><strong>Capital figures:</strong> authorised or subscribed capital in the MoA differs from the figures in the SPICe+ form</li>
        <li><strong>Nationality:</strong> an OCI cardholder or foreign citizen entered as Indian</li>
        <li><strong>Copied signatures:</strong> MCA warns that pasted signatures can attract action under sections 447 and 448 of the Companies Act</li>
      </ul>
      <p>
        The simplest fix for name mismatches is to correct the record before you
        file. PAN details can be updated through the{" "}
        <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" rel="noopener noreferrer">Income Tax e-filing portal</a>{" "}
        and its linked services, but corrections take time, so start early.
      </p>

      <h2>Documents for a company or LLP as a subscriber</h2>
      <p>
        When an existing company or LLP subscribes to shares, attach its
        certificate of incorporation, its PAN, and a board resolution that
        states the number of shares being subscribed and names the authorised
        representative. MCA lists resolutions without these details as a
        rejection ground. Foreign corporate subscribers attach apostilled or
        consularised versions of the same documents.
      </p>

      <h2>How should documents be scanned and named?</h2>
      <p>
        MCA lists illegible attachments as a rejection ground, and it is
        surprising how often a phone photo of a document is the cause. A few
        habits prevent this:
      </p>
      <ul>
        <li>Scan each document in colour as a PDF, with all four edges visible and no shadows or cropping of text</li>
        <li>Combine the front and back of an ID card into one PDF</li>
        <li>Keep each file within the MCA attachment size limit by scanning at a sensible resolution rather than compressing until the text blurs</li>
        <li>Attach an English translation for any utility bill or document in Tamil or another regional language</li>
        <li>Name files clearly, for example director-1-pan.pdf and registered-office-noc.pdf, so the person filing does not attach the wrong one</li>
      </ul>

      <h2>Variations for a One Person Company</h2>
      <p>
        If you are incorporating a One Person Company rather than a private
        limited company with two or more shareholders, the checklist is almost
        the same with one addition: the proof of identity and residential
        address of the nominee, who becomes the member if the sole member dies
        or becomes incapable. MCA&apos;s SPICe+ attachment list includes the
        nominee&apos;s documents specifically for OPCs. Our{" "}
        <Link href="/opc-registration-chennai">OPC registration</Link> page
        explains the nominee rules.
      </p>

      <h2>Documents you will need soon after incorporation</h2>
      <p>
        It helps to know what comes next, because some of it overlaps with the
        incorporation set:
      </p>
      <ul>
        <li><strong>For the bank account:</strong> certificate of incorporation, MoA and AoA, company PAN, a board resolution, and KYC of directors and beneficial owners</li>
        <li><strong>For INC-20A:</strong> bank statements showing each subscriber&apos;s payment for shares and photographs of the registered office with a director present</li>
        <li><strong>For the first auditor:</strong> the auditor&apos;s consent and eligibility certificate</li>
        <li><strong>For GST, if not applied through SPICe+:</strong> the registered office proof again, plus photographs and the authorised signatory&apos;s details</li>
      </ul>
      <p>
        Keeping a shared folder with every incorporation document, the
        certificate of incorporation and the stamped MoA and AoA saves time at
        each of these steps.
      </p>

      <h2>A one-page checklist to work from</h2>
      <ul>
        <li>Two proposed names and the main business activity (with NIC code)</li>
        <li>Authorised and subscribed capital, and the shareholding of each subscriber</li>
        <li>PAN, ID proof, address proof, photo, email and mobile for each director and subscriber</li>
        <li>Class 3 DSC for each signatory</li>
        <li>Utility bill (two months or newer), rent agreement and owner NOC for the registered office</li>
        <li>Attested documents for any NRI or foreign participants</li>
        <li>Corporate subscriber documents and board resolution, if applicable</li>
      </ul>
      <p>
        After incorporation, the documents do not stop: the company must file
        INC-20A, appoint an auditor and maintain registers. Our{" "}
        <Link href="/private-limited-company-incorporation-chennai">private limited company incorporation</Link>{" "}
        page walks through the full process.
      </p>
      <p>
        If you would like your documents reviewed before filing, you can{" "}
        <Link href="/contact">book a consultation with C S Rushil &amp; Co.</Link>
      </p>
    </>
  );
}
