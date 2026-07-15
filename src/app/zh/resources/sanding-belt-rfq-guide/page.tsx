import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { sandingBeltGuideZh } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "砂带 RFQ 询价指南 | SCOTTCHEN",
  description: "定义砂带尺寸、设备、磨料、布基、接头、样品测试、包装、起订量和交期里程碑。",
  path: sandingBeltGuideZh.path,
  alternatePath: "/resources/sanding-belt-rfq-guide",
  locale: "zh-CN",
});

export default function ChineseSandingBeltRfqGuidePage() {
  return <ProcurementGuidePage data={sandingBeltGuideZh} />;
}
