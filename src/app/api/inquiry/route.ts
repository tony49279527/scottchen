import type { InquiryPayload } from "@/lib/inquiry";

const WEBHOOK_TIMEOUT_MS = 10000;
const RESEND_TIMEOUT_MS = 10000;

function isQuotePayload(payload: InquiryPayload): payload is Extract<InquiryPayload, { type: "quote" }> {
  return payload.type === "quote";
}

function isSamplePayload(payload: InquiryPayload): payload is Extract<InquiryPayload, { type: "sample" }> {
  return payload.type === "sample";
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(payload: InquiryPayload): string | null {
  const baseChecks = [
    payload.fullName,
    payload.companyName,
    payload.email,
    payload.country,
    payload.landingPage,
    payload.locale,
  ];

  if (baseChecks.some((value) => !isNonEmptyString(value))) {
    return "Missing required contact fields.";
  }

  if (isQuotePayload(payload)) {
    if (
      !isNonEmptyString(payload.buyerType) ||
      !isNonEmptyString(payload.productCategory) ||
      !isNonEmptyString(payload.quantity) ||
      !isNonEmptyString(payload.customPackaging)
    ) {
      return "Missing required quote fields.";
    }
  }

  if (isSamplePayload(payload)) {
    if (
      !isNonEmptyString(payload.website) ||
      !Array.isArray(payload.categories) ||
      payload.categories.length === 0 ||
      !isNonEmptyString(payload.estimatedQuantity) ||
      !isNonEmptyString(payload.oemNeeded)
    ) {
      return "Missing required sample request fields.";
    }
  }

  return null;
}

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

function buildEmailHtml(payload: InquiryPayload, clientIp: string, userAgent: string): string {
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

async function sendViaWebhook(payload: InquiryPayload, clientIp: string, userAgent: string) {
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

async function sendViaResend(payload: InquiryPayload, clientIp: string, userAgent: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

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
        html: buildEmailHtml(payload, clientIp, userAgent),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend responded with ${response.status}: ${errorText}`);
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

  try {
    const delivered =
      (await sendViaWebhook(payload, clientIp, userAgent)) ||
      (await sendViaResend(payload, clientIp, userAgent));

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

