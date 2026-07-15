import ProcurementGuidePage from "@/components/ProcurementGuidePage";
import { createPageMetadata } from "@/lib/seo";
import { flapDiscGuideZh } from "@/lib/procurementGuides";

export const metadata = createPageMetadata({
  title: "百叶片 RFQ 询价指南 | SCOTTCHEN",
  description: "编写可比较的百叶片询价单，覆盖T27/T29、磨料、粒度、密度、转速、样品、安全证据、包装和商务条款。",
  path: flapDiscGuideZh.path,
  alternatePath: "/resources/flap-disc-rfq-guide",
  locale: "zh-CN",
});

export default function ChineseFlapDiscRfqGuidePage() {
  return <ProcurementGuidePage data={flapDiscGuideZh} />;
}
