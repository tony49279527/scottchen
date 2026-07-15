import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { flapDiscGuide } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "Flap Disc RFQ Guide for B2B Buyers | SCOTTCHEN",
  description: "Write a comparable flap disc RFQ covering Type 27/29, grain, grit, density, RPM, samples, safety evidence, packaging and commercial terms.",
  path: flapDiscGuide.path,
  alternatePath: "/zh/resources/flap-disc-rfq-guide",
});

export default function FlapDiscRfqGuidePage() {
  return <ProcurementGuidePage data={flapDiscGuide} />;
}
