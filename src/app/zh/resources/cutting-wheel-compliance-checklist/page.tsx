import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { cuttingWheelChecklistZh } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "切割片合规与安全证据核验清单 | SCOTTCHEN",
  description: "逐项核对切割片SKU的目标市场标准、使用限制、测试报告、追溯、标签和批准包装。",
  path: cuttingWheelChecklistZh.path,
  alternatePath: "/resources/cutting-wheel-compliance-checklist",
  locale: "zh-CN",
});

export default function ChineseCuttingWheelComplianceChecklistPage() {
  return <ProcurementGuidePage data={cuttingWheelChecklistZh} />;
}
