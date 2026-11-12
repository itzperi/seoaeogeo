// Outsourced bookkeeping for overseas businesses, one entry per market.
// Drives the country pages (/outsourced-bookkeeping-<market>), the comparison
// table on the hub (/outsourced-bookkeeping-services) and the shared
// BookkeepingMarketSections component.
//
// Rule for every market: we keep the books and prepare figures; anything
// lodged with a foreign tax authority or registry is filed by the client or
// the client's locally registered agent. Never write a fee, a superlative or a
// vendor certification here (ICAI rules, seo/ICAI-COMPLIANCE.md).

export type Source = { label: string; href: string };
export type Handoff = { work: string; we: string; files: string };
export type HourRow = { india: string; cols: string[] };

export type BookkeepingMarket = {
  slug: string;
  /** "United States" etc., for schema areaServed. */
  countries: string[];
  /** Short name used in headings: "US", "UK", "Singapore". */
  name: string;
  /** Who the page is for, in one phrase. */
  audience: string;
  software: string;
  authority: string;
  /** One line for the hub table: what the local agent files. */
  localFiler: string;
  handoffs: Handoff[];
  hours: { heading: string; cols: string[]; rows: HourRow[]; note: string };
  /** Local record-keeping and tax rules a bookkeeper has to design around. */
  rules: { rule: string; detail: string; source: Source }[];
  data: { text: string; source: Source };
};

export const BOOKKEEPING_MARKETS: BookkeepingMarket[] = [
  {
    slug: "outsourced-bookkeeping-usa",
    countries: ["United States"],
    name: "US",
    audience: "US small businesses, LLCs, S corporations and e-commerce sellers",
    software: "QuickBooks Online, Xero, Bill.com, Gusto or ADP payroll journals",
    authority: "IRS and state revenue departments",
    localFiler: "Your CPA or Enrolled Agent files federal and state returns; 1099s and sales tax are filed by you, your CPA or your filing service.",
    handoffs: [
      { work: "Monthly bookkeeping and close", we: "Categorise bank, card and PayPal or Stripe feeds, reconcile every account, post accruals, and close the month by an agreed date.", files: "Nothing to file. You receive a closed month with a profit and loss, balance sheet and open-items list." },
      { work: "1099 vendor tracking", we: "Flag contractors who need a W-9, track payments through the year and produce a year-end list of 1099-NEC and 1099-MISC amounts.", files: "You or your CPA e-file the 1099s, for example through your accounting software or the IRS IRIS portal." },
      { work: "Sales tax data", we: "Report taxable and exempt sales by state from your sales channels and reconcile tax collected to the ledger.", files: "You, your CPA or your sales tax service files each state return." },
      { work: "Payroll accounting", we: "Book Gusto, ADP or other payroll journals and reconcile payroll liabilities to the bank.", files: "Your payroll provider files Forms 941, W-2 and state payroll returns." },
      { work: "Year-end package for your CPA", we: "Adjusted trial balance, fixed asset roll-forward, loan and owner equity schedules and reconciled balance sheet.", files: "Your CPA or EA prepares and signs Form 1120, 1120-S, 1065 or Schedule C." },
    ],
    hours: {
      heading: "How do India working hours line up with US time zones?",
      cols: ["US Eastern (EDT / EST)", "US Pacific (PDT / PST)"],
      rows: [
        { india: "9:30 am (India day starts)", cols: ["12:00 am / 11:00 pm the day before", "9:00 pm / 8:00 pm the day before"] },
        { india: "6:30 pm (India day ends)", cols: ["9:00 am / 8:00 am", "6:00 am / 5:00 am"] },
        { india: "8:30 pm (calls by appointment)", cols: ["11:00 am / 10:00 am", "8:00 am / 7:00 am"] },
      ],
      note: "India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours ahead in winter, with no daylight saving in India. Work you send by the end of your day is processed during the Indian day and is usually waiting for you the next US morning. Calls are booked for the US morning, which is the Indian evening.",
    },
    rules: [
      { rule: "Record retention", detail: "The IRS generally expects records to be kept for 3 years from filing, longer in some cases (for example 4 years for employment tax records, 6 years if income was under-reported by more than 25%, and 7 years for a bad debt or worthless securities claim). Books are kept in your own QuickBooks or Xero file, so the records stay with you.", source: { label: "IRS — How long should I keep records?", href: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" } },
      { rule: "1099 reporting threshold", detail: "For payments made from 1 January 2026, the reporting threshold for Forms 1099-NEC and 1099-MISC rose from $600 to $2,000, with inflation indexing in later years. We track vendor totals against the threshold that applies to the year.", source: { label: "IRS — Forms 1099-NEC and 1099-MISC", href: "https://www.irs.gov/forms-pubs/about-form-1099-nec" } },
      { rule: "Cash or accrual", detail: "Many small businesses may use the cash method for tax, while lenders and investors usually want accrual-basis statements. We can keep accrual books and give your CPA the adjustments to the tax basis.", source: { label: "IRS Publication 538 — Accounting Periods and Methods", href: "https://www.irs.gov/publications/p538" } },
    ],
    data: {
      text: "The US has no single federal privacy law for bookkeeping data, but your CPA may have duties under the FTC Safeguards Rule and IRS Publication 4557. We work inside your own QuickBooks or Xero file through an accountant or advisor invite, under named logins you can remove at any time, and documents stay in your own storage.",
      source: { label: "IRS Publication 4557 — Safeguarding Taxpayer Data", href: "https://www.irs.gov/pub/irs-pdf/p4557.pdf" },
    },
  },
  {
    slug: "outsourced-bookkeeping-uk",
    countries: ["United Kingdom"],
    name: "UK",
    audience: "UK limited companies, sole traders and landlords",
    software: "Xero, QuickBooks Online, FreeAgent, Sage, Dext or Hubdoc",
    authority: "HMRC and Companies House",
    localFiler: "You or your UK accountant submit VAT returns and MTD quarterly updates as your HMRC agent, and file accounts with Companies House.",
    handoffs: [
      { work: "Monthly bookkeeping", we: "Code bank feeds, match receipts captured in Dext or Hubdoc, reconcile every account and keep the sales and purchase ledgers current.", files: "Nothing to file. You receive a closed month and an open-items list." },
      { work: "VAT returns under Making Tax Digital", we: "Prepare the nine-box VAT return from the ledger and reconcile it to the VAT control account, noting reverse charge and flat rate points.", files: "You submit through your MTD-compatible software, or your UK accountant submits as your agent." },
      { work: "MTD for Income Tax quarterly updates", we: "Keep the digital records sole traders and landlords now need and prepare each quarter's income and expense totals.", files: "You or your agent send each quarterly update and the final declaration to HMRC." },
      { work: "Year-end handover", we: "Trial balance, fixed asset register, director's loan account analysis and accruals ready for accounts production.", files: "Your UK accountant prepares the statutory accounts and CT600 and files with Companies House and HMRC." },
      { work: "Payroll journals", we: "Post payroll and pension journals and reconcile PAYE and pension liabilities.", files: "Your payroll bureau or software sends RTI submissions to HMRC." },
    ],
    hours: {
      heading: "How do India working hours overlap with UK hours?",
      cols: ["UK during BST", "UK during GMT"],
      rows: [
        { india: "9:30 am (India day starts)", cols: ["5:00 am", "4:00 am"] },
        { india: "1:30 pm", cols: ["9:00 am (UK day starts)", "8:00 am"] },
        { india: "6:30 pm (India day ends)", cols: ["2:00 pm", "1:00 pm"] },
      ],
      note: "India is 4.5 hours ahead of the UK during British Summer Time and 5.5 hours ahead during GMT, which leaves roughly four to five shared working hours every UK morning.",
    },
    rules: [
      { rule: "Making Tax Digital for Income Tax", detail: "From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must keep digital records and send quarterly updates; the threshold falls to £30,000 from April 2027 and £20,000 from April 2028.", source: { label: "GOV.UK — Making Tax Digital for Income Tax", href: "https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" } },
      { rule: "VAT registration", detail: "A business must register for VAT when taxable turnover goes over £90,000 in a rolling 12 months. We watch the rolling total in the ledger and tell you as it gets close.", source: { label: "GOV.UK — VAT registration thresholds", href: "https://www.gov.uk/vat-registration/when-to-register" } },
      { rule: "Record retention", detail: "Companies House expects a private company to keep accounting records for 3 years, and HMRC asks companies to keep records for 6 years from the end of the last company financial year they relate to.", source: { label: "GOV.UK — Running a limited company: company and accounting records", href: "https://www.gov.uk/running-a-limited-company/company-and-accounting-records" } },
    ],
    data: {
      text: "Viewing your records from India is a restricted transfer under UK GDPR. You remain the controller, we act as processor under a data processing agreement, and the transfer relies on the ICO's International Data Transfer Agreement or the UK Addendum. Work happens inside your own Xero, QuickBooks or FreeAgent file under named logins.",
      source: { label: "ICO — International transfers", href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/" },
    },
  },
  {
    slug: "outsourced-bookkeeping-singapore",
    countries: ["Singapore"],
    name: "Singapore",
    audience: "Singapore private limited companies, startups and regional holding companies",
    software: "Xero, QuickBooks Online, Zoho Books, Dext",
    authority: "IRAS and ACRA",
    localFiler: "You or your Singapore tax agent file GST F5 returns, ECI and Form C-S or Form C; your corporate secretary or filing agent files the annual return and XBRL with ACRA.",
    handoffs: [
      { work: "Monthly bookkeeping", we: "Record sales, purchases and expenses, reconcile SGD and foreign-currency bank accounts, and revalue foreign-currency balances at month end.", files: "Nothing to file. You receive a closed month and management accounts." },
      { work: "GST F5 return figures", we: "Prepare the box-by-box figures for your quarterly GST F5, including standard-rated, zero-rated and exempt supplies and input tax, reconciled to the ledger.", files: "You or your tax agent submit the GST F5 through myTax Portal." },
      { work: "Year-end and tax handover", we: "Year-end trial balance, fixed asset schedule and draft financial statements under SFRS for your tax agent and corporate secretary.", files: "Your tax agent files the ECI and Form C-S, C-S (Lite) or Form C; your corporate secretary files the annual return and XBRL financials with ACRA." },
      { work: "Payroll accounting", we: "Post payroll and CPF journals and reconcile CPF payable.", files: "Your payroll provider pays CPF and files IR8A data under the Auto-Inclusion Scheme." },
    ],
    hours: {
      heading: "How do India working hours overlap with Singapore hours?",
      cols: ["Singapore (SGT)"],
      rows: [
        { india: "9:30 am (India day starts)", cols: ["12:00 pm"] },
        { india: "3:30 pm", cols: ["6:00 pm (Singapore day ends)"] },
        { india: "6:30 pm (India day ends)", cols: ["9:00 pm"] },
      ],
      note: "Singapore is 2.5 hours ahead of India all year, so the whole Singapore afternoon overlaps with the Indian working day.",
    },
    rules: [
      { rule: "GST registration", detail: "A business must register for GST when taxable supplies exceed S$1 million in a calendar year, or are expected to in the next 12 months. The current GST rate is 9%.", source: { label: "IRAS — Do I need to register for GST?", href: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-registration-deregistration/do-i-need-to-register-for-gst" } },
      { rule: "Record retention", detail: "Business records and supporting documents must be kept for at least 5 years from the relevant Year of Assessment, and the Companies Act also requires accounting records to be kept for 5 years.", source: { label: "IRAS — Record keeping for companies", href: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/record-keeping-requirements" } },
      { rule: "Corporate tax filing", detail: "Companies file their Corporate Income Tax return by 30 November each year: Form C-S (Lite) for revenue up to S$200,000, Form C-S up to S$5 million, otherwise Form C. ECI is due within 3 months of the financial year end unless exempt.", source: { label: "IRAS — Filing Form C-S / Form C", href: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/corporate-income-tax-filing-season" } },
    ],
    data: {
      text: "Singapore's Personal Data Protection Act requires a company that transfers personal data overseas to make sure the recipient protects it to a comparable standard, usually by contract. We sign confidentiality and data processing terms and work inside your own Xero or QuickBooks file under named logins.",
      source: { label: "PDPC — Transfer Limitation Obligation", href: "https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act" } },
  },
  {
    slug: "outsourced-bookkeeping-australia",
    countries: ["Australia"],
    name: "Australia",
    audience: "Australian small businesses, sole traders and companies",
    software: "Xero, MYOB, QuickBooks Online, Dext, Hubdoc",
    authority: "ATO and ASIC",
    localFiler: "Your registered BAS agent or tax agent prepares and lodges BAS, and your tax agent lodges the income tax return; we keep the books they work from.",
    handoffs: [
      { work: "Bookkeeping and reconciliations", we: "Code bank feeds, reconcile bank, card and merchant accounts, and keep debtors and creditors current in Xero, MYOB or QuickBooks.", files: "Nothing to lodge. You receive a closed month and an open-items list." },
      { work: "BAS", we: "Keep the ledger accurate and reconciled so the GST and PAYG figures in it can be relied on.", files: "BAS is a regulated BAS service, so your registered BAS or tax agent reviews and lodges it (we can prepare workings under their supervision), or you lodge it yourself." },
      { work: "Payroll accounting", we: "Post payroll journals and reconcile PAYG withholding and super payable to the bank.", files: "You or your BAS agent run payroll and Single Touch Payroll reporting and pay super through your payroll software." },
      { work: "EOFY handover", we: "30 June trial balance, asset register, loan and shareholder accounts, and reconciliations ready for your accountant.", files: "Your tax agent prepares the financial statements and the company or individual tax return." },
    ],
    hours: {
      heading: "How do India working hours overlap with Australian hours?",
      cols: ["Sydney / Melbourne (AEST / AEDT)", "Perth (AWST)"],
      rows: [
        { india: "9:30 am (India day starts)", cols: ["2:00 pm / 3:00 pm", "12:00 pm"] },
        { india: "12:30 pm", cols: ["5:00 pm / 6:00 pm", "3:00 pm"] },
        { india: "6:30 pm (India day ends)", cols: ["11:00 pm / 12:00 am", "9:00 pm"] },
      ],
      note: "Sydney and Melbourne are 4.5 hours ahead of India in winter (AEST) and 5.5 hours ahead in summer (AEDT); Brisbane stays 4.5 hours ahead and Perth 2.5 hours ahead all year. The shared window is the Australian afternoon.",
    },
    rules: [
      { rule: "Who can do BAS work for a fee", detail: "Under the Tax Agent Services Act 2009, BAS services for a fee must be provided by a registered BAS or tax agent. A bookkeeper who is not registered with the Tax Practitioners Board can record transactions and reconcile accounts, and can help prepare BAS work only under the supervision and control of a registered agent, who lodges it and stays responsible.", source: { label: "Tax Practitioners Board — Outsourcing and offshoring", href: "https://www.tpb.gov.au/outsourcing-and-offshoring" } },
      { rule: "GST registration", detail: "A business must register for GST when its GST turnover reaches A$75,000 (A$150,000 for non-profit organisations).", source: { label: "ATO — Registering for GST", href: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst" } },
      { rule: "Record retention", detail: "Businesses must generally keep records for 5 years from when they were prepared or obtained, or from when the transaction was completed, whichever is later.", source: { label: "ATO — Record keeping for business", href: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business" } },
      { rule: "Payday Super", detail: "From 1 July 2026, super guarantee contributions must reach the employee's fund within 7 business days of each payday instead of quarterly, so super payable has to be reconciled every pay run rather than every quarter.", source: { label: "ATO — Payday Super", href: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super" } },
    ],
    data: {
      text: "Under Australian Privacy Principle 8, a business that discloses personal information to an overseas recipient must take reasonable steps to make sure the recipient handles it in line with the APPs, and usually stays accountable for it. We sign confidentiality and data handling terms and work inside your own Xero, MYOB or QuickBooks file under named logins.",
      source: { label: "OAIC — APP 8: Cross-border disclosure", href: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information" },
    },
  },
  {
    slug: "outsourced-bookkeeping-uae",
    countries: ["United Arab Emirates"],
    name: "UAE",
    audience: "Dubai, Abu Dhabi and Sharjah mainland and free zone companies",
    software: "Zoho Books, QuickBooks Online, Xero, Tally Prime, Odoo",
    authority: "Federal Tax Authority (FTA) and Ministry of Finance",
    localFiler: "You or your FTA-registered tax agent file VAT and Corporate Tax returns on EmaraTax; a UAE-licensed auditor signs audited accounts where they are required.",
    handoffs: [
      { work: "Monthly bookkeeping", we: "Record sales, purchases and expenses, reconcile AED and foreign-currency bank accounts, and keep receivables and payables current.", files: "Nothing to file. You receive a closed month and management accounts." },
      { work: "VAT return figures", we: "Prepare the VAT return figures by emirate, with standard-rated, zero-rated, exempt and reverse-charge supplies reconciled to the ledger.", files: "You or your FTA-registered tax agent file the return on EmaraTax by the 28th day after the tax period ends." },
      { work: "Corporate Tax readiness", we: "Keep books on an accrual basis under IFRS, track non-deductible expenses, related-party and connected-person transactions, and prepare the year-end trial balance and financial statements.", files: "You or your tax agent file the Corporate Tax return within 9 months of the financial year end." },
      { work: "Audit support", we: "Year-end schedules and reconciliations for your auditor.", files: "A UAE-licensed auditor audits and signs the financial statements where the law or your free zone requires it." },
    ],
    hours: {
      heading: "How do India working hours overlap with UAE hours?",
      cols: ["Dubai / Abu Dhabi (GST)"],
      rows: [
        { india: "9:30 am (India day starts)", cols: ["8:00 am"] },
        { india: "1:30 pm", cols: ["12:00 pm"] },
        { india: "6:30 pm (India day ends)", cols: ["5:00 pm"] },
      ],
      note: "India is 1.5 hours ahead of the UAE all year, so almost the whole UAE working day overlaps. The UAE weekend is Saturday and Sunday; the Chennai office works Monday to Saturday.",
    },
    rules: [
      { rule: "Corporate Tax", detail: "UAE Corporate Tax applies to financial years starting on or after 1 June 2023, at 0% on taxable income up to AED 375,000 and 9% above it. Small Business Relief can be elected for a tax period where revenue is AED 3 million or less; it is not available to Qualifying Free Zone Persons, and its end date has been extended beyond 2026, so confirm the current date with the FTA.", source: { label: "UAE Ministry of Finance — Corporate Tax", href: "https://mof.gov.ae/en/public-finance/tax/corporate-tax/" } },
      { rule: "VAT registration", detail: "VAT is 5%. Registration is mandatory when taxable supplies and imports exceed AED 375,000 over the past 12 months or are expected to in the next 30 days, and optional above AED 187,500.", source: { label: "Federal Tax Authority — VAT", href: "https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx" } },
      { rule: "Record retention", detail: "Corporate Tax records and supporting documents must be kept for 7 years after the end of the tax period they relate to; VAT records for at least 5 years.", source: { label: "Federal Tax Authority — Corporate Tax", href: "https://tax.gov.ae/en/taxes/corporate.tax.aspx" } },
      { rule: "E-invoicing", detail: "Mandatory B2B e-invoicing through an Accredited Service Provider goes live from 1 January 2027 for businesses with revenue of AED 50 million or more and from 1 July 2027 for the rest. Clean customer and supplier master data in the books makes the switch easier.", source: { label: "UAE Ministry of Finance — E-invoicing", href: "https://mof.gov.ae/en/public-finance/tax/e-invoicing/" } },
      { rule: "Audited accounts", detail: "Under Ministerial Decision No. 84 of 2025, audited financial statements are required for Corporate Tax where revenue exceeds AED 50 million and for every Qualifying Free Zone Person, whatever its revenue. Many free zones also require an annual audit under their own rules.", source: { label: "UAE Ministry of Finance — Ministerial Decision No. 84 of 2025", href: "https://mof.gov.ae/wp-content/uploads/2025/04/Ministerial-Decision-No.-84-of-2025-on-Audited-Financial-Statements.pdf" } },
    ],
    data: {
      text: "The UAE's federal data protection law (Federal Decree-Law No. 45 of 2021) covers personal data, and companies in the DIFC or ADGM follow their own data protection rules. We sign confidentiality and data handling terms and work inside your own Zoho Books, QuickBooks or Xero file under named logins.",
      source: { label: "UAE Government — Data protection laws", href: "https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws" },
    },
  },
];

export function getBookkeepingMarket(slug: string) {
  return BOOKKEEPING_MARKETS.find((m) => m.slug === slug);
}

// What changes the size of a bookkeeping engagement. No fee figures: the firm
// quotes after a first look at the books (ICAI rules on fee advertising).
export const COST_DRIVERS: { driver: string; why: string }[] = [
  { driver: "Transaction volume", why: "The number of bank, card and payment-processor lines each month is the main driver of hours." },
  { driver: "Number of accounts and currencies", why: "Each bank, card, PayPal, Stripe or marketplace account is reconciled separately, and foreign-currency accounts need revaluation." },
  { driver: "State of the books", why: "Current, reconciled books are cheaper to keep than books with months of unreconciled backlog, which are caught up first as a separate piece of work." },
  { driver: "Inventory and cost of sales", why: "Stock, landed cost and marketplace fees add work compared with a service business." },
  { driver: "Payroll and contractors", why: "Payroll journals, contractor tracking and benefit or pension liabilities add reconciliations." },
  { driver: "Reporting depth", why: "Cash-basis books, accrual books, class or department tracking and monthly management packs are different levels of work." },
  { driver: "Close deadline", why: "A fixed close by the fifth working day needs more planned capacity than a close by the fifteenth." },
];
