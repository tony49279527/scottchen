const DEFAULT_SITE_URL = "https://www.scottchentools.com";
const DEFAULT_INDEXNOW_KEY = "bba16f0343d10f111540909669eb16cc";

const siteUrl = (process.env.SEO_SMOKE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
const indexNowKey = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
const origin = new URL(siteUrl);

function fail(message) {
  throw new Error(message);
}

function decodeXmlText(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "SCOTTCHEN SEO smoke check",
    },
  });

  if (!response.ok) {
    fail(`${url} returned ${response.status}`);
  }

  return response.text();
}

const robotsUrl = new URL("/robots.txt", origin).toString();
const sitemapUrl = new URL("/sitemap.xml", origin).toString();
const indexNowKeyUrl = new URL(`/${indexNowKey}.txt`, origin).toString();

const robots = await fetchText(robotsUrl);
if (!robots.includes(`Sitemap: ${sitemapUrl}`)) {
  fail("robots.txt does not point to the canonical sitemap.");
}

const keyText = (await fetchText(indexNowKeyUrl)).trim();
if (keyText !== indexNowKey) {
  fail("IndexNow key file content does not match the configured key.");
}

const sitemap = await fetchText(sitemapUrl);
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => decodeXmlText(match[1].trim()))
  .filter(Boolean);

if (urls.length < 40) {
  fail(`Sitemap URL count looks too low: ${urls.length}`);
}

if (!urls.includes(siteUrl)) {
  fail(`Sitemap is missing the canonical homepage URL: ${siteUrl}`);
}

if (!urls.includes(new URL("/catalog.pdf", origin).toString())) {
  fail("Sitemap is missing catalog.pdf.");
}

const uniqueUrls = new Set(urls);
if (uniqueUrls.size !== urls.length) {
  fail("Sitemap contains duplicate URLs.");
}

const issues = [];

for (const url of urls) {
  const response = await fetch(url, {
    redirect: "manual",
    headers: {
      "User-Agent": "SCOTTCHEN SEO smoke check",
    },
  });
  const contentType = response.headers.get("content-type") || "";
  const xRobotsTag = response.headers.get("x-robots-tag") || "";
  let canonical = "";
  let robotsNoindex = false;

  if (contentType.includes("text/html")) {
    const html = await response.text();
    canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1] || "";
    robotsNoindex = /name="robots" content="[^"]*noindex/i.test(html);
  } else {
    await response.arrayBuffer();
  }

  if (
    response.status !== 200 ||
    response.headers.get("location") ||
    xRobotsTag.toLowerCase().includes("noindex") ||
    robotsNoindex ||
    (canonical && canonical !== url)
  ) {
    issues.push({
      url,
      status: response.status,
      contentType,
      location: response.headers.get("location") || "",
      xRobotsTag,
      canonical,
      robotsNoindex,
    });
  }
}

if (issues.length) {
  console.error(JSON.stringify(issues, null, 2));
  fail(`Found ${issues.length} sitemap URL issue(s).`);
}

console.log(`SEO smoke check passed for ${siteUrl}.`);
console.log(`Checked ${urls.length} sitemap URLs.`);
