import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "客户案例证据标准与披露状态 | SCOTTCHEN",
  description:
    "磨具采购案例字段说明：区分能力场景与真实客户结果所需证据。当前无客户批准数据时不发布示例，案例信息以书面授权文件为准。",
  path: "/zh/case-studies",
  alternatePath: "/case-studies",
  locale: "zh-CN",
});

export default function Page() {
  return <CaseStudiesPage locale="zh" />;
}
