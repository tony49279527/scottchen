import type { Metadata } from "next";
import { PackagingPrivateLabelPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Private-Label Packaging & Barcode Workflow | SCOTTCHEN",
  description: "Plan abrasive-kit dielines, warnings, barcode data, artwork approval, scan checks and pack-out evidence without treating concepts as production proof.",
  path: "/packaging-private-label",
  alternatePath: "/zh/packaging-private-label",
});

export default function Page() {
  return <PackagingPrivateLabelPage locale="en" />;
}
