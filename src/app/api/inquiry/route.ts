import type { InquiryPayload } from "@/lib/inquiry";
import {
  computeLeadScore,
  getLeadTier,
  isQuotePayload,
  normalizeCountry,
  validatePayload,
  isSubmissionTooFast,
} from "@/lib/inquiryServer";

const WEBHOOK_TIMEOUT_MS = 10000;
const RESEND_TIMEOUT_MS = 10000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const rateLimitStore = new Map<string, number[]>();

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildRows(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 12px;border:1px solid #d7dde6;background:#f7f9fc;font-weight:700;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border:1px solid #d7dde6;">${escapeHtml(value || "-")}</td>
    </tr>
  `;
}

function buildEmailSubject(payload: InquiryPayload): string {
  if (isQuotePayload(payload)) {
    return `[SCOTTCHEN RFQ] ${payload.companyName} | ${payload.productCategory} | ${payload.quantity}`;
  }

  return `[SCOTTCHEN SAMPLE] ${payload.companyName} | ${payload.categories.join(", ")}`;
}

function buildAutoReplySubject(payload: InquiryPayload) {
  return isQuotePayload(payload)
    ? "SCOTTCHEN inquiry received"
    : "SCOTTCHEN sample request received";
}

function buildAutoReplyHtml(payload: InquiryPayload) {
  const isZh = payload.locale === "zh-CN";

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
      <p>${isZh ? "您好，" : "Hello,"}</p>
      <p>
        ${
          isZh
            ? "我们已经收到您的询盘资料。团队会根据您提交的产品类别、包装需求和预估采购量进行审核，通常会在一个工作日内回复。"
            : "We have received your inquiry details. Our team will review your product category, packaging requirements, and expected volume, then typically reply within one business day."
        }
      </p>
      <p>
        ${
          isZh
            ? "如需补充 logo、条码文件或详细规格图，请直接回复此邮件。"
            : "If you need to share logo files, barcode assets, or detailed spec drawings, reply directly to this email."
        }
      </p>
      <p>SCOTTCHEN Tools</p>
    </div>
  `;
}

function buildEmailHtml(
  payload: InquiryPayload,
  clientIp: string,
  userAgent: string,
  leadScore: number,
  leadTier: string
): string {
  const commonRows = [
    buildRows("Inquiry Type", payload.type),
    buildRows("Full Name", payload.fullName),
    buildRows("Company Name", payload.companyName),
    buildRows("Business Email", payload.email),
    buildRows("Country", payload.country),
    buildRows("Locale", payload.locale),
    buildRows("Landing Page", payload.landingPage),
    buildRows("Referrer", payload.referrer || "-"),
    buildRows("UTM Source", payload.utmSource || "-"),
    buildRows("UTM Medium", payload.utmMedium || "-"),
    buildRows("UTM Campaign", payload.utmCampaign || "-"),
    buildRows("UTM Term", payload.utmTerm || "-"),
    buildRows("UTM Content", payload.utmContent || "-"),
    buildRows("Lead Score", String(leadScore)),
    buildRows("Lead Tier", leadTier),
  ];

  const typeSpecificRows = isQuotePayload(payload)
    ? [
        buildRows("Buyer Type", payload.buyerType),
        buildRows("Product Category", payload.productCategory),
        buildRows("Target Batch Quantity", payload.quantity),
        buildRows("Custom Packaging", payload.customPackaging),
        buildRows("Target Market", payload.targetMarket || "-"),
        buildRows("Message", payload.message || "-"),
      ]
    : [
        buildRows("Website", payload.website),
        buildRows("Requested Categories", payload.categories.join(", ")),
        buildRows("Application", payload.application || "-"),
        buildRows("Target Material", payload.targetMaterial || "-"),
        buildRows("Expected Annual Volume", payload.estimatedQuantity),
        buildRows("Branding Needed", payload.oemNeeded),
        buildRows("Message", payload.message || "-"),
      ];

  const technicalRows = [
    buildRows("Client IP", clientIp || "-"),
    buildRows("User Agent", userAgent || "-"),
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;">
      <h2 style="margin-bottom:16px;">New ${escapeHtml(payload.type)} inquiry from SCOTTCHEN website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:920px;">
        <tbody>
          ${commonRows.join("")}
          ${typeSpecificRows.join("")}
          ${technicalRows.join("")}
        </tbody>
      </table>
    </div>
  `;
}

function pruneRateLimit(now: number, hits: number[]) {
  return hits.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
}

function isRateLimited(key: string, now = Date.now()) {
  const hits = pruneRateLimit(now, rateLimitStore.get(key) || []);
  hits.push(now);
  rateLimitStore.set(key, hits);

  return hits.length > RATE_LIMIT_MAX;
}

async function sendViaWebhook(
  payload: InquiryPayload,
  clientIp: string,
  userAgent: string,
  leadScore: number,
  leadTier: string
) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        clientIp,
        userAgent,
        leadScore,
        leadTier,
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }

    return true;
  } finally {
    clearTimeout(timeout);
  }
}

async function sendViaResend(
  payload: InquiryPayload,
  clientIp: string,
  userAgent: string,
  leadScore: number,
  leadTier: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const autoReplyEnabled = process.env.INQUIRY_AUTO_REPLY_ENABLED === "true";
  const autoReplyFrom = process.env.INQUIRY_AUTO_REPLY_FROM || from;

  if (!apiKey || !to || !from) {
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: buildEmailSubject(payload),
        html: buildEmailHtml(payload, clientIp, userAgent, leadScore, leadTier),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend responded with ${response.status}: ${errorText}`);
    }

    if (autoReplyEnabled) {
      const autoReplyResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: autoReplyFrom,
          to: [payload.email],
          subject: buildAutoReplySubject(payload),
          html: buildAutoReplyHtml(payload),
        }),
        signal: controller.signal,
      });

      if (!autoReplyResponse.ok) {
        const errorText = await autoReplyResponse.text();
        throw new Error(`Resend auto-reply responded with ${autoReplyResponse.status}: ${errorText}`);
      }
    }

    return true;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!payload || (payload.type !== "quote" && payload.type !== "sample")) {
    return Response.json(
      { ok: false, message: "Unsupported inquiry type." },
      { status: 400 }
    );
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return Response.json(
      { ok: false, message: validationError },
      { status: 400 }
    );
  }

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";
  const userAgent = request.headers.get("user-agent") || "";
  payload.country = normalizeCountry(payload.country);

  if (isSubmissionTooFast(payload.formStartedAt)) {
    return Response.json(
      { ok: false, message: "Submission was blocked. Please try again." },
      { status: 429 }
    );
  }

  if (clientIp && isRateLimited(`${clientIp}:${payload.type}`)) {
    return Response.json(
      { ok: false, message: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const leadScore = computeLeadScore(payload);
  const leadTier = getLeadTier(leadScore);

  try {
    const delivered =
      (await sendViaWebhook(payload, clientIp, userAgent, leadScore, leadTier)) ||
      (await sendViaResend(payload, clientIp, userAgent, leadScore, leadTier));

    if (!delivered) {
      return Response.json(
        {
          ok: false,
          message:
            "Inquiry delivery is not configured. Set INQUIRY_WEBHOOK_URL or RESEND_* environment variables.",
        },
        { status: 503 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed:", error);
    return Response.json(
      {
        ok: false,
        message:
          "We could not deliver your inquiry just now. Please try again or email sales@scottchentools.com directly.",
      },
      { status: 502 }
    );
  }
}
