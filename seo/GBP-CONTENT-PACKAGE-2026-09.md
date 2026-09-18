# Google Business Profile — Ready-to-Paste Content Package

Dated 2026-09-17. Companion to `GBP-CHECKLIST.md` (which covers the
mechanics/why) — this is the actual copy to paste into each GBP field, plus
what to do with the two office photos shared. You still have to do the
paste/upload yourself (GBP setup requires your Google account), but nothing
below needs drafting from scratch.

## On the "CA India" logo graphic

**Do not upload this as your GBP logo or cover photo.** It's ICAI's own
promotional emblem, not your firm's logo — using it as your listing's brand
image would misrepresent your firm as the Institute itself, which is the
same category of issue this project's commit history already shows was
fixed once (`Fix ICAI Code of Ethics violations`). If you don't have a
finished firm logo yet, leave the GBP logo slot for a text-based "CS" or
"C S Rushil & Co." mark, or use one of the real office photos as your cover
photo in the meantime — a real photo outperforms a placeholder logo for
trust signals anyway.

## Business name (exact, do not add keywords)

```
C S Rushil & Co.
```

Do not append "Best CA in Chennai" or similar — this violates Google's
guidelines and risks suspension (already flagged in `GBP-CHECKLIST.md`).

## Categories

- Primary: **Chartered Accountant**
- Secondary: **Tax Consultant**
- Tertiary: **Corporate Tax Consultant** (or **Accounting Firm** if that
  option isn't offered in your Maps category picker)

## Business description

GBP allows up to 750 characters. Two variants — use the long one; the short
one is a fallback if a field truncates:

**Long (742 characters):**
```
C S Rushil & Co. is a Chennai-based chartered accountancy firm in Anna
Nagar, led by CA Rushil C S (Certified FAFD, Start-up Mentor) with a
16-member team. We handle Private Limited Company incorporation, GST
registration, litigation and appeals, statutory and internal audit, direct
tax and income tax return filing, ROC compliance, MSME/Udyam registration,
virtual CFO services, and management consultancy for businesses across
Chennai — from Anna Nagar and Kilpauk to T. Nagar, Ambattur, and the
OMR/IT corridor. We provide a fixed, written quote after every free
consultation, with government and professional fees itemised separately —
no bundled or hidden charges. Book a free consultation to discuss your
compliance, incorporation, or tax needs.
```

**Short (298 characters, backup):**
```
Chennai-based chartered accountancy firm in Anna Nagar led by CA Rushil C S.
Company incorporation, GST registration & litigation, audit, direct tax,
ROC compliance, MSME registration, and virtual CFO services — transparent,
itemised quotes after a free consultation.
```

## Hours

```
Monday–Saturday: 9:30 AM – 6:30 PM
Sunday: Closed
```

## Website & booking

- Website: `https://csrushil.com`
- Appointment link: your Calendly URL (`SOCIALS.calendly` in the codebase —
  currently a placeholder `https://calendly.com/`; confirm your actual
  scheduling link before adding it here)

## Services section — paste each service with this description (GBP truncates around 300 characters, these all fit)

| Service name | Description |
|---|---|
| Private Limited Company Incorporation | End-to-end SPICe+ incorporation — DSC, DIN, name approval, MoA/AoA drafting, and post-incorporation compliance for Chennai founders. |
| Company Registration | Private Limited, LLP, and OPC registration from name approval through Certificate of Incorporation. |
| GST Registration | New GST registration, voluntary registration, amendments, and LUT applications for exporters. |
| GST Litigation & Appeals | Show-cause notice replies, departmental audits, appeals, and GST Appellate Tribunal (GSTAT) representation. |
| Goods & Services Tax (GST) | Monthly/quarterly/annual return filing, amendments, cancellations, and notice replies. |
| Audit & Assurance | Statutory, internal, tax, transfer pricing, forensic, and stock audits. |
| Direct Tax | Income tax planning, assessment representation, TDS compliance, and advance tax computation. |
| Income Tax Return Filing | ITR filing for salaried individuals, professionals, NRIs, and businesses, with refund tracking. |
| MSME / Udyam Registration | Udyam registration to unlock collateral-free loans and delayed-payment protection under the MSMED Act. |
| ROC Compliances | Annual filings, statutory registers, and Companies Act compliance. |
| Virtual CFO Services | Outsourced financial leadership — MIS, budgeting, and board-ready reporting. |
| Management Consultancy | Business process, risk, and strategy advisory. |
| RERA Compliance | Project registration and quarterly compliance filings for developers and agents in Tamil Nadu. |
| Trust & NGO Registration | Formation and 12A/80G registration support for trusts, societies, and Section 8 companies. |
| CA Fees & Pricing | Transparent, indicative pricing guide — ask for a fixed quote after a free consultation. |

## What to do with the two office photos you shared

Both are genuinely useful — upload both to GBP under **Photos → Interior**
(or **Team**, if your GBP account's photo categories offer it):

1. **Team workspace photo** (people at laptops, open-plan desks): caption
   it as your working office, e.g. *"Our Anna Nagar team at work"*. This is
   exactly the kind of real, unstaged photo Google's local-ranking signals
   reward over stock imagery.
2. **Meeting/review room photo** (team seated around a table, whiteboard
   visible): caption as *"Team review session at our Anna Nagar office"*.

Once you save these two files somewhere I can reach them, I'll also add
them to the website itself (About page, next to the founder section) with
proper `next/image` sizing and alt text, and reference them from the
Organization schema's `image` field — this closes the single biggest gap
flagged in the GEO analysis (multi-modal content scored 2/15 specifically
because there were zero real photos anywhere).

**Beyond these two, prioritise adding over time** (per `GBP-CHECKLIST.md`'s
"upload weekly" guidance): office exterior/signage (helps people arriving
in person recognise the location), the founder's photo individually, and —
once available — real client-facing moments (with consent).

## Q&A section — seed these yourself as the business

GBP's Q&A section is publicly writable by anyone, so seeding it yourself
with accurate answers gets ahead of speculation:

1. **Q: Is the first consultation free?**
   A: Yes — we review your situation and provide a fixed, written quote
   before any engagement begins.
2. **Q: Do you handle GST notice replies and appeals?**
   A: Yes, including show-cause notice replies, departmental audits,
   appeals before the Appellate Authority, and GST Appellate Tribunal
   representation.
3. **Q: Can you register a company for someone who isn't based in Chennai?**
   A: Yes — MCA filings are fully online; we coordinate document collection
   and filing remotely for founders anywhere.
4. **Q: What are your fees for company registration?**
   A: See our indicative pricing guide at csrushil.com/ca-fees-chennai, or
   contact us for a fixed quote based on your specific structure.
5. **Q: Do you serve areas outside Anna Nagar?**
   A: Yes — we work with clients across Chennai, in person for those
   nearby and virtually for everyone else.

## First 4 GBP Posts — ready to publish, one per week

GBP Posts expire after 7 days (except Offers/Events), so treat this as a
starter rotation, then keep authoring new ones from actual blog posts and
compliance deadlines as they come up:

1. **Week 1 — introduce the firm:**
   *"C S Rushil & Co. is a Chennai-based chartered accountancy firm in Anna
   Nagar, led by CA Rushil C S. We handle company incorporation, GST, audit,
   direct tax, and virtual CFO services — with transparent, itemised
   quotes. Book a free consultation today."* → link to `/contact`
2. **Week 2 — flagship service:**
   *"Facing a GST show-cause notice? Under Section 116 of the CGST Act, a
   Chartered Accountant can represent you before GST officers, the
   Appellate Authority, and GSTAT — no separate advocate needed for most
   proceedings. See how we help."* → link to `/gst-litigation-chennai`
3. **Week 3 — seasonal/deadline reminder:**
   *"Planning to incorporate a Private Limited Company in Chennai? With
   documents ready, SPICe+ incorporation typically takes 7–12 working
   days. We handle DSC, DIN, name approval, and post-incorporation
   compliance end-to-end."* → link to `/private-limited-company-incorporation-chennai`
4. **Week 4 — pricing transparency (a genuine differentiator per
   `COMPETITOR-ANALYSIS.md` — few local competitors publish pricing):**
   *"Wondering what a CA firm actually charges in Chennai? We publish
   indicative pricing for company registration, GST, and audit services —
   no surprises, no bundled fees."* → link to `/ca-fees-chennai`

## Next action

Everything above is ready to paste as-is. The only things you need to do
that I genuinely cannot do for you: log into business.google.com, paste
this content in, upload the photos, and start the review-request flow
(`GBP-CHECKLIST.md` covers that ongoing cadence). Send me the two photo
files (or the real firm logo, if you have one) and I'll wire them into the
website itself in the same session.
