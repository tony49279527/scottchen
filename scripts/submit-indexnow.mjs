const DEFAULT_SITE_URL = "https://www.scottchentools.com";
const DEFAULT_INDEXNOW_KEY = "bba16f0343d10f111540909669eb16cc";
const DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
const indexNowKey = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
const endpoint = process.env.INDEXNOW_ENDPOINT || DEFAULT_ENDPOINT;

const origin = new URL(siteUrl);
const sitemapUrl = new URL("/sitemap.xml", origin).toString();
const keyLocation = new URL(`/${indexNowKey}.txt`, origin).toString();

function decodeXmlText(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function fetchSitemapUrls() {
  const response = await fetch(sitemapUrl, {
    headers: {
      "User-Agent": "SCOTTCHEN IndexNow submitter",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: ${response.status}`);
  }

  const sitemapXml = await response.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => decodeXmlText(match[1].trim()))
    .filter(Boolean)
    .filter((url) => {
      try {
        const parsed = new URL(url);
        return parsed.host === origin.host && parsed.protocol.startsWith("http");
      } catch {
        return false;
      }
    });

  return [...new Set(urls)];
}

async function submitUrls(urlList) {
  const payload = {
    host: origin.host,
    key: indexNowKey,
    keyLocation,
    urlList,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "SCOTTCHEN IndexNow submitter",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();

  if (![200, 202].includes(response.status)) {
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`
    );
  }

  return response.status;
}

const urls = await fetchSitemapUrls();

if (urls.length === 0) {
  throw new Error(`No URLs found in ${sitemapUrl}`);
}

const status = await submitUrls(urls);

console.log(`Submitted ${urls.length} URLs to IndexNow.`);
console.log(`Endpoint: ${endpoint}`);
console.log(`Status: ${status}`);
console.log(`Key location: ${keyLocation}`);
