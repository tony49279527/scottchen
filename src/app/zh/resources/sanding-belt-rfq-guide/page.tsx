import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { sandingBeltGuideZh } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "砂带 RFQ 询价指南与规格清单 | SCOTTCHEN",
  description:
    "砂带 RFQ 指南：定义尺寸、设备、磨料、布基、接头、样品测试、包装、起订量与交期里程碑，便于发出可比较的 OEM 询价，按报价确认。",
  path: sandingBeltGuideZh.path,
  alternatePath: "/resources/sanding-belt-rfq-guide",
  locale: "zh-CN",
});

export default function ChineseSandingBeltRfqGuidePage() {
  return <ProcurementGuidePage data={sandingBeltGuideZh} />;
}
