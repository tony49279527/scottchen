import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { cuttingWheelChecklist } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "Cutting Wheel Compliance Checklist | SCOTTCHEN",
  description: "Verify each cut-off wheel SKU against the target-market standard, operating limits, test report, traceability, label and approved packaging.",
  path: cuttingWheelChecklist.path,
});

export default function CuttingWheelComplianceChecklistPage() {
  return <ProcurementGuidePage data={cuttingWheelChecklist} />;
}
