import { access, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const tsxRoots = ["src/app", "src/components"];
const allowedQualities = new Set([68, 72, 75]);
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;

async function listTsxFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listTsxFiles(fullPath)));
    } else if (entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function attrValue(tag, attr) {
  const match = tag.match(
    new RegExp(`\\b${attr}\\s*=\\s*("([^"]*)"|'([^']*)'|\\{([^}]*)\\})`)
  );
  return match?.[2] ?? match?.[3] ?? match?.[4] ?? "";
}

function extractBalancedObject(source, start) {
  const open = source.indexOf("{", start);
  if (open < 0) {
    return null;
  }

  let depth = 0;
  for (let i = open; i < source.length; i += 1) {
    const ch = source[i];

    if (ch === "{") {
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(open, i + 1);
      }
    } else if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      i += 1;
      while (i < source.length) {
        if (source[i] === "\\") {
          i += 2;
        } else if (source[i] === quote) {
          break;
        } else {
          i += 1;
        }
      }
    }
  }

  return null;
}

function hasInvalidSizes(value) {
  return value.includes(",") && !value.includes("(");
}

const issues = [];
let tsxFileCount = 0;
let pageFileCount = 0;
let imageTagCount = 0;
let metadataCallCount = 0;
const localImagePaths = new Set();
const noIndexPaths = new Set();

for (const root of tsxRoots) {
  const files = await listTsxFiles(join(projectRoot, root));
  tsxFileCount += files.length;
  pageFileCount += files.filter((file) => file.endsWith("/page.tsx")).length;

  for (const file of files) {
    const source = await readFile(file, "utf8");

    if (/<img(?:\s|>)/.test(source)) {
      issues.push({
        file: file.replace(projectRoot, ""),
        issue: "Native <img> tag found; use next/image.",
      });
    }

    for (const match of source.matchAll(/<Image\b([\s\S]*?)\/>/g)) {
      const tag = match[1];
      imageTagCount += 1;

      for (const required of ["alt", "sizes", "width", "height"]) {
        if (!attrValue(tag, required)) {
          issues.push({
            file: file.replace(projectRoot, ""),
            issue: `Image is missing required attribute ${required}.`,
          });
        }
      }

      const quality = attrValue(tag, "quality");
      if (quality && !allowedQualities.has(Number(quality))) {
        issues.push({
          file: file.replace(projectRoot, ""),
          issue: `Image quality ${quality} is not in next.config.mjs allowlist.`,
        });
      }

      const sizes = attrValue(tag, "sizes");
      if (sizes && hasInvalidSizes(sizes)) {
        issues.push({
          file: file.replace(projectRoot, ""),
          issue: `Invalid sizes attribute: ${sizes}`,
        });
      }
    }

    if (/datePublished:\s*(SITE_UPDATED|reviewedAt)\b/.test(source)) {
      issues.push({
        file: file.replace(projectRoot, ""),
        issue: "Article datePublished reuses SITE_UPDATED or reviewedAt instead of a real publication date.",
      });
    }

    for (const match of source.matchAll(/createPageMetadata\s*\(/g)) {
      const block = extractBalancedObject(source, match.index + match[0].length);
      if (!block) {
        continue;
      }

      metadataCallCount += 1;
      const title = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const description = block.match(/description:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const metadataPath = block.match(/path:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const alternatePath = block.match(/alternatePath:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const relativeRoute = (file.split("src/app/")[1] ?? "").replace(/\/page\.tsx$/, "").replace(/^page\.tsx$/, "");
      const expectedRoute = relativeRoute ? `/${relativeRoute}` : "/";
      const expectedAlternatePath = expectedRoute === "/" ? "/zh" : expectedRoute === "/zh" ? "/" : expectedRoute.startsWith("/zh/") ? expectedRoute.slice(3) : `/zh${expectedRoute}`;
      if (/noIndex:\s*true\b/.test(block)) {
        noIndexPaths.add(expectedRoute);
      }

      if (title === undefined || description === undefined) {
        issues.push({
          file: file.replace(projectRoot, ""),
          issue: "createPageMetadata call must define literal title and description strings.",
        });
      } else {
        if ([...title].length > MAX_TITLE_LENGTH) {
          issues.push({
            file: file.replace(projectRoot, ""),
            issue: `Title length ${[...title].length} exceeds ${MAX_TITLE_LENGTH}: ${title}`,
          });
        }
        if ([...description].length > MAX_DESCRIPTION_LENGTH) {
          issues.push({
            file: file.replace(projectRoot, ""),
            issue: `Description length ${[...description].length} exceeds ${MAX_DESCRIPTION_LENGTH}: ${description}`,
          });
        }
      }

      if (metadataPath !== undefined && metadataPath !== expectedRoute) {
        issues.push({
          file: file.replace(projectRoot, ""),
          issue: `Metadata path ${metadataPath} does not match route file path ${expectedRoute}.`,
        });
      }
      if (alternatePath !== expectedAlternatePath) {
        issues.push({
          file: file.replace(projectRoot, ""),
          issue: `Metadata alternatePath ${alternatePath} does not match language counterpart ${expectedAlternatePath}.`,
        });
      }
    }

    for (const match of source.matchAll(/["'`](\/images\/[^"'`]+)["'`]/g)) {
      localImagePaths.add(match[1]);
    }
  }
}

for (const imagePath of localImagePaths) {
  try {
    await access(join(projectRoot, "public", imagePath));
  } catch {
    issues.push({
      issue: `Referenced local image does not exist: ${imagePath}`,
    });
  }
}

const sitemapSource = await readFile(join(projectRoot, "src/app/sitemap.ts"), "utf8");
const pageDatesSource = await readFile(join(projectRoot, "src/lib/pageDates.ts"), "utf8");
const siteSource = await readFile(join(projectRoot, "src/lib/site.ts"), "utf8");
const sitemapPaths = new Set([
  ...[...sitemapSource.matchAll(/\ben:\s*"(\/[^"]*)"/g)].map((match) => match[1]),
  ...[...sitemapSource.matchAll(/\bzh:\s*"(\/[^"]*)"/g)].map((match) => match[1]),
  ...[...sitemapSource.matchAll(/\bpath:\s*"(\/[^"]*)"/g)].map((match) => match[1]),
]);
const mappedPaths = new Set(
  [...pageDatesSource.matchAll(/^\s*"(\/[^"]*)":/gm)].map((match) => match[1])
);
const localizedPaths = new Set(
  [...siteSource.matchAll(/^\s*"(\/[^"]*)",?$/gm)].map((match) => match[1])
);
const pageDateValues = [...pageDatesSource.matchAll(/^\s*"(\/[^"]*)":\s*"([^"]+)"/gm)].map((match) => match[2]);
const languagePairs = [
  ...sitemapSource.matchAll(/\ben:\s*"([^"]+)",\s*zh:\s*"([^"]+)"/g),
].map((match) => ({ en: match[1], zh: match[2] }));
const robotsSource = await readFile(join(projectRoot, "src/app/robots.ts"), "utf8");
const llmsSources = await Promise.all(
  ["src/app/llms.txt/route.ts", "src/app/llms-full.txt/route.ts"].map((file) =>
    readFile(join(projectRoot, file), "utf8")
  )
);
const specialDiscoveryPaths = new Set(["/llms.txt", "/llms-full.txt", "/sitemap.xml"]);
const llmsPaths = new Set(
  llmsSources.flatMap((source) =>
    [...source.matchAll(/absoluteUrl\(\s*"([^"]+)"\s*\)/g)].map((match) => match[1])
  )
);

for (const path of noIndexPaths) {
  if (sitemapPaths.has(path)) {
    issues.push({
      issue: `noindex page is included in sitemap.ts: ${path}`,
    });
  }
  if (!robotsSource.includes(`"${path}"`)) {
    issues.push({
      issue: `noindex page is not disallowed in robots.ts: ${path}`,
    });
  }
}

for (const path of llmsPaths) {
  if (!sitemapPaths.has(path) && !specialDiscoveryPaths.has(path)) {
    issues.push({
      issue: `llms.txt links a path that is not in sitemap.ts or special discovery files: ${path}`,
    });
  }
}

for (const path of sitemapPaths) {
  if (!mappedPaths.has(path)) {
    issues.push({
      issue: `Sitemap path is missing from pageDates.ts: ${path}`,
    });
  }
}

for (const path of mappedPaths) {
  if (!sitemapPaths.has(path)) {
    issues.push({
      issue: `pageDates.ts contains a path not present in sitemap.ts: ${path}`,
    });
  }
}

if (new Set(pageDateValues).size < 3) {
  issues.push({
    issue: "pageDates.ts does not contain enough distinct page-level dates to avoid a site-wide freshness signal.",
  });
}

for (const value of pageDateValues) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    issues.push({
      issue: `pageDates.ts contains a non-ISO date value: ${value}`,
    });
  }
}

for (const { en, zh } of languagePairs) {
  const expectedZh = en === "/" ? "/zh" : `/zh${en}`;
  const expectedEn = zh === "/zh" ? "/" : zh.replace(/^\/zh/, "");
  const enFile = join(projectRoot, "src/app", en === "/" ? "page.tsx" : `${en}/page.tsx`);
  const zhFile = join(projectRoot, "src/app", zh === "/zh" ? "zh/page.tsx" : `${zh}/page.tsx`);

  if (zh !== expectedZh || en !== expectedEn) {
    issues.push({
      issue: `Sitemap language pair path mismatch: ${en} <-> ${zh}`,
    });
  }

  if (!localizedPaths.has(en)) {
    issues.push({
      issue: `Sitemap English path is missing from site.ts localizedPaths: ${en}`,
    });
  }

  try {
    await access(enFile);
  } catch {
    issues.push({
      issue: `English route file does not exist: ${enFile.replace(projectRoot, "")}`,
    });
  }

  try {
    await access(zhFile);
  } catch {
    issues.push({
      issue: `Chinese route file does not exist: ${zhFile.replace(projectRoot, "")}`,
    });
  }
}

if (metadataCallCount !== pageFileCount) {
  issues.push({
    issue: `Metadata call count ${metadataCallCount} does not match page file count ${pageFileCount}.`,
  });
}

if (issues.length) {
  console.error(JSON.stringify(issues, null, 2));
  process.exitCode = 1;
} else {
  console.log(
    `SEO static check passed: ${tsxFileCount} TSX files, ${imageTagCount} Image tags, ${metadataCallCount} metadata calls, ${localImagePaths.size} local image paths, ${sitemapPaths.size} sitemap URLs, ${languagePairs.length} EN/ZH pairs, ${noIndexPaths.size} noindex pages, ${llmsPaths.size} llms links.`
  );
}
