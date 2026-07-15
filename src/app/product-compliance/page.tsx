import type { Metadata } from "next";
import { ProductCompliancePage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Abrasive Product Compliance Evidence Map | SCOTTCHEN",
  description: "Map abrasive product families to the SKU-level specifications, tests, labels and records a B2B buyer should verify.",
  path: "/product-compliance",
  alternatePath: "/zh/product-compliance",
});

export default function Page() {
  return <ProductCompliancePage locale="en" />;
}
