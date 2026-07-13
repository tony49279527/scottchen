import type { MetadataRoute } from "next";
import { absoluteUrl, PRODUCTION_DOMAIN } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you", "/zh/thank-you"],
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-User", "PerplexityBot"],
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
          "cohere-ai",
          "anthropic-ai",
          "Omgili",
          "FacebookBot",
          "Diffbot",
          "ImagesiftBot",
          "Bytespider",
        ],
        disallow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: PRODUCTION_DOMAIN,
  };
}
