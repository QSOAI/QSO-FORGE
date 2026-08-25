# QSO FORGE — CRM Pipeline (MVP Documentation Only)

**Status**: Documentation only — no implementation in MVP
**Source**: Section 11, Section 20 of QSO FORGE Blueprint
**Last Updated**: 2026-08-25

---

## Pipeline Stages

| Stage | Code | Description | Entry Criteria | Exit Criteria |
|-------|------|-------------|----------------|---------------|
| Prospect | `PROSPECT` | Lead captured via Revenue Audit request form | Form submitted successfully | Audit scheduled or qualification call booked |
| Audit | `AUDIT` | Revenue Audit in progress (discovery → analysis → report) | Audit engagement confirmed (verbal or deposit) | Findings report delivered |
| Findings | `FINDINGS` | Findings presented; scope & pricing discussed | Findings walkthrough completed | Proposal sent |
| Offer | `OFFER` | Formal proposal sent with scope, timeline, pricing | Proposal delivered to prospect | Prospect accepts or declines |
| Outreach | `OUTREACH` | Active follow-up on sent proposals | Proposal sent, no response within 5 business days | Response received or moved to Pipeline |
| Pipeline | `PIPELINE` | Negotiation / contract / deposit phase | Verbal acceptance or counter-offer | Deposit received (50% proposed policy) |
| Closed | `CLOSED` | Project kicked off / lost | Deposit received (Won) or explicit decline (Lost) | Project handoff to delivery or archived |

---

## Data Model (TypeScript)

```typescript
type PipelineStage =
  | 'PROSPECT'
  | 'AUDIT'
  | 'FINDINGS'
  | 'OFFER'
  | 'OUTREACH'
  | 'PIPELINE'
  | 'CLOSED';

interface PipelineEntry {
  id: string;
  stage: PipelineStage;
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  businessType: string;
  objective: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## MVP Implementation Notes

### What IS Implemented (Phase 1)
- Contact form on `/contact` creates a `PROSPECT` entry
- Form submission logs structured data to console (development)
- Form submission logs structured data to server logs (production static export)
- Honeypot field (`website_url`) for basic spam protection
- Client-side validation with server-side validation ready for future API

### What IS NOT Implemented (Phase 1)
- ❌ Database storage (no PostgreSQL, no SQLite, no JSON file persistence)
- ❌ Google Sheets integration (requires credentials — Section 25.c stop condition)
- ❌ Custom CRM UI / dashboard
- ❌ Email notifications (requires SMTP/transactional email service credentials)
- ❌ Pipeline stage transitions UI
- ❌ Automated follow-up sequences
- ❌ Deal value tracking
- ❌ Reporting / analytics on pipeline

### Future Integration Points (Phase 2+)
When founder provides approved credentials, the following can be added without architecture changes:

1. **Google Sheets** — Append `PROSPECT` entries to a configured sheet
2. **Transactional Email** — Send confirmation to prospect + notification to team
3. **Lightweight CRM** — Airtable, Attio, or similar (if justified by volume)
4. **Webhook** — POST to `CONTACT_FORM_ENDPOINT` with `CONTACT_FORM_SECRET` verification

---

## Recommended Commercial Policy (Founder Approval Required)

> **50% deposit gate** — Projects move from `PIPELINE` to `CLOSED (Won)` only after 50% deposit received.
> *This is a proposed operating rule, not source-verified business policy. Implement in documentation/process design only, labeled "Recommended commercial policy — founder approval required." Do not build payment enforcement around it yet.*

---

## Contact Form → Pipeline Mapping

| Form Field | PipelineEntry Field | Required |
|------------|---------------------|----------|
| name | name | ✅ |
| company | company | ✅ |
| website | website | ✅ |
| email | email | ✅ |
| phone (WhatsApp) | phone | ✅ |
| businessType | businessType | ✅ |
| objective | objective | ✅ |
| message | message | ❌ |
| (auto) | stage: 'PROSPECT' | ✅ |
| (auto) | id: `prospect_${timestamp}_${random}` | ✅ |
| (auto) | createdAt / updatedAt: ISO 8601 | ✅ |

---

## Spam Protection (MVP)

1. **Honeypot field** — Hidden `website_url` field; if filled, silently drop submission
2. **Client-side validation** — All required fields validated before submit
3. **Rate limiting** — Not implemented in static export; defer to hosting platform (Vercel/Netlify/Cloudflare) or future API route
4. **CAPTCHA** — Not in MVP; evaluate if spam volume justifies (Turnstile, hCaptcha)

---

## Security Considerations

- No PII stored in repository
- No secrets in code (`.env.example` only)
- Form submissions contain business contact info — treat as confidential
- If external integration added: use HTTPS, verify webhook signatures, rotate secrets quarterly

---

## Next Steps (When Approved)

1. Founder confirms external integration (Google Sheets, Email, Webhook, or none)
2. Add API route `/api/contact` (requires moving off static export OR using edge functions)
3. Implement chosen integration with proper error handling + retry logic
4. Add basic admin view (password-protected) to review prospects
5. Document pipeline SLA: "Prospect contacted within 24 hours"

---

## Related Documents

- `/src/types/index.ts` — PipelineEntry, PipelineStage type definitions
- `/src/app/[locale]/contact/page.tsx` — Contact form implementation
- Section 11 (CRM — MVP Only) of Blueprint
- Section 20 (Commercial Pipeline) of Blueprint