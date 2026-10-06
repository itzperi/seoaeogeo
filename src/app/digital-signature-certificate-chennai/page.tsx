import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/site";

const title = "Digital Signature Certificate (DSC) in Chennai | Class 3";
const description =
  "Get a Class 3 Digital Signature Certificate in Chennai for MCA, GST, income tax, DGFT and e-tenders, with Aadhaar eKYC or video verification and a USB token.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/digital-signature-certificate-chennai" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url: "/digital-signature-certificate-chennai",
  },
};

const uses: { portal: string; use: string }[] = [
  { portal: "MCA (V3 portal)", use: "Directors and professionals sign incorporation, annual return, financial statement and event-based forms." },
  { portal: "GST portal", use: "Companies and LLPs must sign GST registration applications and returns with a DSC; others may use EVC." },
  { portal: "Income-tax portal", use: "Companies file returns with a DSC; Chartered Accountants upload tax audit and other reports with theirs." },
  { portal: "DGFT", use: "IEC applications, modifications and export-incentive applications can be signed with a DSC or Aadhaar e-sign." },
  { portal: "Government e-procurement", use: "Bidders sign bids with a signing certificate; many tender portals also need an encryption certificate." },
];

export default function Page() {
  return (
    <ServicePageTemplate
      pageUrl={`${SITE_URL}/digital-signature-certificate-chennai`}
      serviceType="Digital Signature Certificate"
      crumbLabel="Digital Signature Certificate"
      crumbHref="/digital-signature-certificate-chennai"
      eyebrow="DSC · Chennai"
      h1="Digital Signature Certificate in Chennai"
      subhead="Class 3 signing and encryption certificates for directors, proprietors, professionals and authorised signatories, issued through licensed Certifying Authorities with paperless verification."
      introHeading="What is a Digital Signature Certificate and who needs one in Chennai?"
      intro="A Digital Signature Certificate (DSC) in Chennai is an electronic identity, issued by a Certifying Authority licensed by the Controller of Certifying Authorities, that lets you sign documents online with legal validity under the IT Act, 2000. Directors, LLP partners, authorised signatories, Chartered Accountants and tender bidders need a Class 3 DSC for MCA, GST, income-tax, DGFT and e-procurement filings."
      citation={{ label: "Controller of Certifying Authorities (CCA) FAQs", href: "https://cca.gov.in/faq.html" }}
      keyFacts={[
        { label: "Class available", value: "Class 3 only. Certifying Authorities stopped issuing Class 2 certificates on their own from 1 January 2021; a Class 3 certificate carries both Class 2 and Class 3 policy identifiers" },
        { label: "Issued by", value: "Certifying Authorities licensed by the Controller of Certifying Authorities (CCA), Ministry of Electronics and IT" },
        { label: "Verification", value: "Aadhaar eKYC biometric, Aadhaar eKYC OTP with video verification, or a paper application with documents and video or in-person verification" },
        { label: "Storage", value: "Private key generated and stored on a FIPS 140-2 Level 2 validated USB crypto token held by you" },
        { label: "Validity", value: "Fixed term chosen at purchase, commonly one, two or three years; must be renewed before expiry" },
        { label: "Typical time", value: "Depends on the Certifying Authority's review; often the same day once verification is complete" },
      ]}
      subServicesHeading="Which DSC services do we facilitate?"
      subServices={[
        { name: "Individual Class 3 Signing DSC", text: "For directors, proprietors, partners and professionals filing on MCA, GST and income-tax portals, with PAN embedded where the application requires it." },
        { name: "Organisational DSC", text: "For employees signing on behalf of a company, LLP or firm, carrying the organisation's name and needing an authorisation letter from the entity." },
        { name: "Signing plus Encryption Certificate", text: "For e-tender bidders who must sign bids and encrypt bid documents. The CCA requires signing and encryption certificates to be separate." },
        { name: "DGFT DSC", text: "Certificates for IEC holders and export-incentive applications on the DGFT portal, mapped to the IEC holder's PAN." },
        { name: "Foreign National DSC", text: "For foreign directors of Indian companies, with passport-based identity documents and verification as prescribed by the Certifying Authority." },
        { name: "Renewal and Token Help", text: "Fresh issuance before expiry, re-registration of the new DSC on MCA and GST portals, and token driver installation." },
      ]}
      howTo={{
        heading: "How is a Class 3 DSC issued?",
        steps: [
          { name: "Choose type and validity", text: "We confirm whether you need an individual or organisational certificate, signing only or signing plus encryption, and the validity term." },
          { name: "Application with a licensed CA", text: "The application is raised with a Certifying Authority licensed by the CCA. We facilitate the process; the certificate itself is issued by that Certifying Authority." },
          { name: "Identity verification", text: "You complete Aadhaar eKYC (biometric or OTP), or submit PAN and supporting documents. An OTP-based or paper application includes a short recorded video verification." },
          { name: "Approval and download", text: "Once the Certifying Authority approves the application, the key pair is generated on your FIPS-validated USB token and the certificate is downloaded to it." },
          { name: "Portal registration", text: "We help register the DSC on the MCA, GST and income-tax portals so it is ready for your next filing." },
        ],
      }}
      faqs={[
        { question: "Is Class 2 DSC still available?", answer: "No. Certifying Authorities have not issued standalone Class 2 certificates since 1 January 2021. Every individual signing certificate is now issued as Class 3, which includes the Class 2 policy identifier, so it works anywhere a Class 2 DSC used to be accepted, including MCA, GST and income-tax portals." },
        { question: "What is the difference between a signing and an encryption certificate?", answer: "A signing certificate proves who signed a document and that it was not changed afterwards. An encryption certificate is used to lock documents so only the intended recipient can open them, which e-tender portals use for bid submission. The CCA requires an individual's signing and encryption certificates to be separate." },
        { question: "Which documents do I need for a DSC?", answer: "For an individual DSC, your PAN and Aadhaar-linked mobile number are usually enough for Aadhaar eKYC. Paper applications need PAN, an address proof and a photograph. Organisational DSCs also need proof of the organisation and an authorisation letter. Foreign nationals use their passport and an address proof." },
        { question: "Do I need to visit an office for verification?", answer: "No. Verification is fully online. You can verify through Aadhaar eKYC biometric authentication, or through Aadhaar OTP or a paper application combined with a short video verification recorded on your phone or laptop. The Certifying Authority reviews the video before issuing the certificate." },
        { question: "How long is a DSC valid?", answer: "A DSC is valid for the fixed term you choose at purchase, commonly one, two or three years, and the expiry date is written into the certificate. It cannot be extended; you apply for a fresh certificate before expiry and then re-register the new one on the MCA, GST and income-tax portals." },
        { question: "I forgot my USB token PIN. Can it be reset?", answer: "Not without wiping the token. Under CCA guidelines, Certifying Authorities do not support a PIN reset unless the token is re-initialised, which erases the existing certificate. You then need the certificate re-issued. Keep your PIN recorded securely, and do not share the token with staff." },
        { question: "Can one DSC be used on all government portals?", answer: "Generally yes. A Class 3 individual signing certificate is accepted on the MCA, GST, income-tax and most other government portals. Some uses need specific details, such as PAN embedded in the certificate, or a separate encryption certificate for e-tenders, so tell us where you plan to use it." },
      ]}
      relatedSlugs={["company-registration-chennai", "roc-compliances", "goods-and-services-tax"]}
      relatedPosts={[
        "spice-plus-incorporation-explained",
        "add-remove-director",
        "annual-roc-filing-calendar",
        "post-incorporation-compliance-checklist",
      ]}
    >
      <h2 className="mt-14 text-2xl text-obsidian">Where a Class 3 DSC is used</h2>
      <div className="mt-6 max-w-3xl overflow-hidden rounded-cards border border-ash">
        <table className="w-full text-left text-sm">
          <thead className="bg-carbon text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Portal</th>
              <th className="px-4 py-3 font-medium">What the DSC is used for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ash bg-paper">
            {uses.map((r) => (
              <tr key={r.portal}>
                <td className="px-4 py-3 align-top font-medium text-obsidian">{r.portal}</td>
                <td className="px-4 py-3 align-top text-slate">{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-14 text-2xl text-obsidian">Our role in DSC issuance</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        C S Rushil &amp; Co. is a Chartered Accountancy firm, not a Certifying Authority. We help you choose the right
        certificate, prepare the application, guide you through verification with a CCA-licensed Certifying Authority and
        register the issued DSC on the portals you file on. Because we also handle the filings the DSC is used for, we can
        flag an expiring certificate before it holds up an ROC or GST deadline.
      </p>
    </ServicePageTemplate>
  );
}
