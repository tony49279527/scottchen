import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Customer Case Evidence Standard | SCOTTCHEN",
  description: "See the fields required for a credible anonymous abrasive sourcing case and why capability scenarios are not presented as customer outcomes.",
  path: "/case-studies",
  alternatePath: "/zh/case-studies",
});

export default function Page() {
  return <CaseStudiesPage locale="en" />;
}
