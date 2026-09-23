import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { flapDiscGuideZh } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "百叶片 RFQ 询价指南与规格清单 | SCOTTCHEN",
  description:
    "百叶片询价单编写指南：覆盖 T27/T29、磨料、粒度、密度、转速、样品、安全证据、包装与商务条款，具体参数按报价 SKU 书面确认。",
  path: flapDiscGuideZh.path,
  alternatePath: "/resources/flap-disc-rfq-guide",
  locale: "zh-CN",
});

export default function ChineseFlapDiscRfqGuidePage() {
  return <ProcurementGuidePage data={flapDiscGuideZh} />;
}
