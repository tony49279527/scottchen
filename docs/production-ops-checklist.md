# SCOTTCHEN Production Operations Checklist

Last checked: 2026-07-04

## Current Verified State

- Production domain: `https://www.scottchentools.com`
- Cloud Run service: `scottchen-b2b`
- Google Cloud project: `scottchen-b2b-prod-2026`
- Region: `asia-east1`
- Current public DNS nameservers: Cloudflare (`anderson.ns.cloudflare.com`, `meera.ns.cloudflare.com`)
- Google Search Console: sitemap submitted successfully, 47 pages discovered, homepage indexed
- IndexNow: key file published and 47 sitemap URLs submitted successfully
- Cloud Run environment currently includes only `NEXT_PUBLIC_SITE_URL=https://www.scottchentools.com`

## Highest Priority

### 1. Enable inquiry delivery

Current production status: not configured. The website form endpoint is live, but real delivery needs one of these paths:

- Preferred: `INQUIRY_WEBHOOK_URL`
- Email fallback: `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`
- Optional auto reply: `INQUIRY_AUTO_REPLY_ENABLED=true`, `INQUIRY_AUTO_REPLY_FROM`

After configuring Cloud Run, submit both:

- RFQ form: `https://www.scottchentools.com/contact`
- Sample form: `https://www.scottchentools.com/sample-kit`

Expected result: the business receives one internal notification per form submission, and the website redirects to the thank-you page only after successful delivery.

### 2. Activate business email for `sales@scottchentools.com`

Current DNS status:

- No MX record found for `scottchentools.com`
- No SPF TXT record found for `scottchentools.com`
- No DMARC TXT record found for `_dmarc.scottchentools.com`

Required action in Cloudflare DNS:

- Add MX records from the selected mailbox provider.
- Add SPF TXT record from the selected mailbox/sending provider.
- Add DKIM records from the selected mailbox/sending provider.
- Add DMARC TXT record after SPF/DKIM are in place.

Do not invent these values. Copy the exact MX, SPF and DKIM records from the email provider dashboard.

Verification commands:

```bash
dig +short MX scottchentools.com
dig +short TXT scottchentools.com
dig +short TXT _dmarc.scottchentools.com
```

### 3. Configure GA4 measurement

Current production status: `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not configured on Cloud Run.

After a GA4 property exists, set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Expected result: analytics loads only after visitor consent, and form submit events become visible in GA4.

## Search Platform Follow-Up

### Google Search Console

Completed:

- Property verified.
- Sitemap submitted.
- Sitemap status became `Success`.
- 47 pages discovered.
- Homepage inspection showed indexed.

Next check:

- Revisit the Pages report after Google finishes processing.
- Inspect core URLs: `/products`, `/contact`, `/sample-kit`, `/supplier-profile`, and the main product pages.

### Bing Webmaster

Completed:

- IndexNow key file is live at `https://www.scottchentools.com/bba16f0343d10f111540909669eb16cc.txt`.
- 47 sitemap URLs were submitted to IndexNow and accepted with status `202`.

Still useful:

- Add the domain to Bing Webmaster Tools if access is available.
- Submit `https://www.scottchentools.com/sitemap.xml` there as well.

## Ongoing Hardening

- Replace in-memory inquiry rate limiting with Cloud Armor, API Gateway, or shared storage if spam volume increases.
- Add real company evidence: registered business name, public address, factory photos, test report samples, certificate numbers and valid dates.
- Keep `SITE_UPDATED` current only when real content or machine-readable metadata changes.
- Run `npm run indexnow` after future production content updates.
