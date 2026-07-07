const DEFAULT_SITE_URL = "https://www.scottchentools.com";
const DEFAULT_INDEXNOW_KEY = "bba16f0343d10f111540909669eb16cc";
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;

const args = process.argv.slice(2);

function readArg(name) {
  const prefix = `${name}=`;
  const equalsArg = args.find((arg) => arg.startsWith(prefix));
  if (equalsArg) {
    return equalsArg.slice(prefix.length);
  }

  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

if (args.includes("--help")) {
  console.log(`Usage: npm run seo:smoke -- [--site-url URL] [--fetch-origin URL]

--site-url      Canonical production URL expected in sitemap/canonical tags.
--fetch-origin  Optional origin to request, useful for local builds that emit production canonical URLs.

Environment equivalents: SEO_SMOKE_SITE_URL, SEO_SMOKE_FETCH_ORIGIN, INDEXNOW_KEY.`);
  process.exit(0);
}

const siteUrl = (readArg("--site-url") || process.env.SEO_SMOKE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
const fetchOriginUrl = (readArg("--fetch-origin") || process.env.SEO_SMOKE_FETCH_ORIGIN || siteUrl).replace(/\/+$/, "");
const indexNowKey = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
const origin = new URL(siteUrl);
const fetchOrigin = new URL(fetchOriginUrl);
const ignoreFetchNoindexHeader = fetchOriginUrl !== siteUrl;

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

function decodeHtmlText(value) {
  return decodeXmlText(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
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

function fetchUrlFor(canonicalUrl) {
  const parsed = new URL(canonicalUrl);
  if (parsed.origin !== origin.origin) {
    return canonicalUrl;
  }

  return new URL(`${parsed.pathname}${parsed.search}`, fetchOrigin).toString();
}

function getAttr(tag, attrName) {
  const match = tag.match(new RegExp(`${attrName}\\s*=\\s*("[^"]*"|'[^']*'|[^\\s>]+)`, "i"));
  if (!match) {
    return "";
  }

  const raw = match[1];
  return raw.startsWith("\"") || raw.startsWith("'") ? raw.slice(1, -1) : raw;
}

function hasToken(value, token) {
  return value
    .split(/\s+/)
    .map((item) => item.toLowerCase())
    .includes(token);
}

function extractMetadata(html) {
  const title =
    decodeHtmlText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "")
      .replace(/\s+/g, " ")
      .trim();

  let description = "";
  let canonical = "";
  let robotsNoindex = false;

  for (const metaMatch of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = metaMatch[0];
    const name = getAttr(tag, "name").toLowerCase();
    const content = decodeHtmlText(getAttr(tag, "content")).replace(/\s+/g, " ").trim();

    if (name === "description") {
      description = content;
    }
    if (name === "robots" && content.toLowerCase().includes("noindex")) {
      robotsNoindex = true;
    }
  }

  for (const linkMatch of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = linkMatch[0];
    const rel = getAttr(tag, "rel");
    if (hasToken(rel, "canonical")) {
      canonical = getAttr(tag, "href");
      break;
    }
  }

  return { title, description, canonical, robotsNoindex };
}

function extractImageUrls(html, pageUrl) {
  const urls = new Set();

  for (const tagMatch of html.matchAll(/<(?:img|source)\b[^>]*>/gi)) {
    const tag = tagMatch[0];
    const src = decodeHtmlText(getAttr(tag, "src"));
    const srcSet = decodeHtmlText(getAttr(tag, "srcset"));

    if (src) {
      urls.add(new URL(src, pageUrl).toString());
    }

    if (srcSet) {
      for (const candidate of srcSet.split(",")) {
        const rawUrl = candidate.trim().split(/\s+/)[0];
        if (rawUrl) {
          urls.add(new URL(rawUrl, pageUrl).toString());
        }
      }
    }
  }

  return [...urls].filter((url) => !url.startsWith("data:") && !url.startsWith("blob:"));
}

async function checkAsset(url) {
  const response = await fetch(fetchUrlFor(url), {
    headers: {
      "User-Agent": "SCOTTCHEN SEO smoke check",
    },
  });

  await response.arrayBuffer();
  return response.ok ? null : { url, fetchedUrl: fetchUrlFor(url), status: response.status };
}

const robotsUrl = new URL("/robots.txt", fetchOrigin).toString();
const sitemapUrl = new URL("/sitemap.xml", origin).toString();
const sitemapFetchUrl = new URL("/sitemap.xml", fetchOrigin).toString();
const indexNowKeyUrl = new URL(`/${indexNowKey}.txt`, fetchOrigin).toString();

const robots = await fetchText(robotsUrl);
if (!robots.includes(`Sitemap: ${sitemapUrl}`)) {
  fail("robots.txt does not point to the canonical sitemap.");
}

const keyText = (await fetchText(indexNowKeyUrl)).trim();
if (keyText !== indexNowKey) {
  fail("IndexNow key file content does not match the configured key.");
}

const sitemap = await fetchText(sitemapFetchUrl);
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
let htmlPageCount = 0;
let checkedImageCount = 0;

for (const url of urls) {
  const fetchUrl = fetchUrlFor(url);
  const response = await fetch(fetchUrl, {
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
    htmlPageCount += 1;
    const html = await response.text();
    const metadata = extractMetadata(html);
    canonical = metadata.canonical;
    robotsNoindex = metadata.robotsNoindex;

    if (!metadata.title) {
      issues.push({ url, fetchUrl, issue: "Missing title" });
    } else if (metadata.title.length > MAX_TITLE_LENGTH) {
      issues.push({
        url,
        fetchUrl,
        issue: "Title too long",
        titleLength: metadata.title.length,
        title: metadata.title,
      });
    }

    if (!metadata.description) {
      issues.push({ url, fetchUrl, issue: "Missing meta description" });
    } else if (metadata.description.length > MAX_DESCRIPTION_LENGTH) {
      issues.push({
        url,
        fetchUrl,
        issue: "Description too long",
        descriptionLength: metadata.description.length,
        description: metadata.description,
      });
    }

    for (const imageUrl of extractImageUrls(html, url)) {
      checkedImageCount += 1;
      const imageIssue = await checkAsset(imageUrl);
      if (imageIssue) {
        issues.push({ ...imageIssue, page: url, issue: "Image request failed" });
      }
    }
  } else {
    await response.arrayBuffer();
  }

  if (
    response.status !== 200 ||
    response.headers.get("location") ||
    (!ignoreFetchNoindexHeader && xRobotsTag.toLowerCase().includes("noindex")) ||
    robotsNoindex ||
    (canonical && canonical !== url)
  ) {
    issues.push({
      url,
      fetchUrl,
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
if (fetchOriginUrl !== siteUrl) {
  console.log(`Fetched pages from ${fetchOriginUrl}.`);
}
console.log(`Checked ${urls.length} sitemap URLs.`);
console.log(`Checked ${htmlPageCount} HTML pages and ${checkedImageCount} image references.`);
