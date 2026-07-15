import type { Metadata } from "next";
import { EvidenceCenterPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Buyer Evidence Center | SCOTTCHEN",
  description: "Review the public, project-specific, missing and illustrative evidence status for SCOTTCHEN entity, production, certificates, testing, packaging and cases.",
  path: "/evidence-center",
  alternatePath: "/zh/evidence-center",
});

export default function Page() {
  return <EvidenceCenterPage locale="en" />;
}
