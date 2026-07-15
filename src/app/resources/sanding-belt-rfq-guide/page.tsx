import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { sandingBeltGuide } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "Sanding Belt RFQ Guide for B2B Buyers | SCOTTCHEN",
  description: "Specify sanding belt size, machine, grain, backing, joint, sample tests, packaging, quoted minimums and lead-time milestones.",
  path: sandingBeltGuide.path,
  alternatePath: "/zh/resources/sanding-belt-rfq-guide",
});

export default function SandingBeltRfqGuidePage() {
  return <ProcurementGuidePage data={sandingBeltGuide} />;
}
