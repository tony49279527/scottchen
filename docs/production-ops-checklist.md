# SCOTTCHEN Production Operations Checklist

Last checked: 2026-07-09

## Current Verified State

- Production domain: `https://www.scottchentools.com`
- Production hosting: Vercel project `context27149/scottchen`
- Current public DNS nameservers: Cloudflare (`anderson.ns.cloudflare.com`, `meera.ns.cloudflare.com`)
- Google Search Console: sitemap submitted successfully, 47 pages discovered, homepage indexed from the last manual UI check. API access was retried on 2026-07-09 with local ADC and is still blocked by quota project/API configuration (`searchconsole.googleapis.com` 403).
- PageSpeed Insights API: public API returned 429 during the 2026-07-09 review because the Google consumer project has daily query limit `0`; production Lighthouse was used as the direct measurement fallback.
- Production Lighthouse on 2026-07-09 daily review: mobile Performance 97, Accessibility 100, Best Practices 100, SEO 100; desktop Performance 89, Accessibility 100, Best Practices 100, SEO 100.
- IndexNow: key file published and sitemap URLs submitted successfully
- Vercel Production environment includes `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL`
- Vercel Production environment does not currently include `INQUIRY_WEBHOOK_URL`, `INQUIRY_BACKUP_WEBHOOK_URL`, or `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Vercel Preview and Development environments include `NEXT_PUBLIC_SITE_URL`
- Current production sitemap contains 51 URLs.

## Highest Priority

### 1. Enable inquiry delivery

Current production status: Resend delivery variables are configured in Vercel Production. The website form endpoint is live; verify real delivery after the next deployment with a controlled test inquiry.

The application does not store inquiries in its own database. Configure a backup webhook if the business needs a durable lead record outside email.

Configured path:

- Email delivery: `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`

Optional additions:

- Webhook delivery: `INQUIRY_WEBHOOK_URL`
- Backup lead copy: `INQUIRY_BACKUP_WEBHOOK_URL`
- Auto reply: `INQUIRY_AUTO_REPLY_ENABLED=true`, `INQUIRY_AUTO_REPLY_FROM`

After deploying the latest build, submit both:

- RFQ form: `https://www.scottchentools.com/contact`
- Sample form: `https://www.scottchentools.com/sample-kit`

Expected result: the business receives one internal notification per form submission, and the website redirects to the thank-you page only after successful delivery.

### 2. Verify business email delivery for `sales@scottchentools.com`

Current DNS status:

- Cloudflare Email Routing MX records are published for `scottchentools.com`.
- SPF TXT is published as `v=spf1 include:_spf.mx.cloudflare.net ~all`.
- DMARC TXT is published as `v=DMARC1; p=none;`.

Required follow-up:

- Confirm that inbound mail to `sales@scottchentools.com` reaches the intended mailbox.
- Add or verify DKIM records if the mailbox or sender provider requires them.
- Move DMARC beyond `p=none` only after SPF/DKIM alignment is confirmed.

Do not invent these values. Copy the exact MX, SPF and DKIM records from the email provider dashboard.

Verification commands:

```bash
dig +short MX scottchentools.com
dig +short TXT scottchentools.com
dig +short TXT _dmarc.scottchentools.com
```

### 3. Configure GA4 measurement

Current production status: `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not configured in Vercel Production.

After a GA4 property exists, set the Vercel Production environment variable:

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

- Configure a usable Search Console API quota project or OAuth client so automated daily reviews can pull search analytics, sitemap status, URL Inspection samples, and indexing data.
- Revisit the Pages report after Google finishes processing.
- Inspect core URLs: `/products`, `/contact`, `/sample-kit`, `/supplier-profile`, and the main product pages.

### Bing Webmaster

Completed:

- IndexNow key file is live at `https://www.scottchentools.com/bba16f0343d10f111540909669eb16cc.txt`.
- 47 sitemap URLs were previously submitted to IndexNow and accepted with status `202`.

Still useful:

- Add the domain to Bing Webmaster Tools if access is available.
- Submit `https://www.scottchentools.com/sitemap.xml` there as well.
- Re-run `npm run indexnow` after the next production content deployment so the current 51-URL sitemap is resubmitted intentionally.

## Ongoing Hardening

- Replace in-memory inquiry rate limiting with Cloud Armor, API Gateway, or shared storage if spam volume increases.
- Add real company evidence: registered business name, public address, factory photos, test report samples, certificate numbers and valid dates.
- Keep `SITE_UPDATED` current only when real content or machine-readable metadata changes.
- Run `npm run indexnow` after future production content updates.
