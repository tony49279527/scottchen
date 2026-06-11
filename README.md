## SCOTTCHEN B2B Website

This repository contains the bilingual SCOTTCHEN B2B lead-generation website built with the Next.js App Router.

### Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

The site now includes a server-side inquiry endpoint at `/api/inquiry`, so deployment must run on a Node-capable target. The project is configured with `output: "standalone"`.

### Inquiry delivery

Copy `.env.example` to `.env` and configure one delivery path:

- Preferred: `INQUIRY_WEBHOOK_URL`
- Fallback: `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`
- Optional auto reply: `INQUIRY_AUTO_REPLY_ENABLED=true`, `INQUIRY_AUTO_REPLY_FROM`
- Optional analytics: `NEXT_PUBLIC_GA_MEASUREMENT_ID`

If neither path is configured, the quote and sample forms will show a visible delivery error instead of faking a successful submission.

### Current lead-flow behavior

- Quote and sample forms submit to a server route instead of sending directly from the browser.
- UTM parameters, referrer, locale, and landing page are attached to each submission.
- Form fill start time is attached to each submission for bot filtering.
- Chinese pages keep users inside the Chinese conversion path, including `/zh/thank-you`.
- Shared CTA blocks now route to locale-matched contact and sample pages.
- Free personal email domains are blocked for quote and sample forms.
- The inquiry endpoint now applies basic in-memory rate limiting and lead scoring.

### Operations

Use `npm run typecheck` for a fast TypeScript pass.

Webhook payloads now include contact fields, inquiry fields, `utm_*`, `referrer`, `landingPage`, `locale`, `clientIp`, `userAgent`, `submittedAt`, `leadScore`, and `leadTier`.
