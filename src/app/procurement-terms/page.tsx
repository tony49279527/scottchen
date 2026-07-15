import type { Metadata } from "next";
import { ProcurementTermsPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "MOQ, Samples, Lead Time & Incoterms | SCOTTCHEN",
  description: "Review product-family boundaries for MOQ, sample charges, lead-time milestones, payment and Incoterms before requesting a dated SKU-level quotation.",
  path: "/procurement-terms",
  alternatePath: "/zh/procurement-terms",
});

export default function Page() {
  return <ProcurementTermsPage locale="en" />;
}
