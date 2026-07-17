import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/BuyerTrustPages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "客户案例证据标准与披露状态 | SCOTTCHEN",
  description:
    "查看可信匿名磨具采购案例必须包含的字段，并明确区分能力场景与真实客户结果；当前无客户批准数据时不发布伪案例。",
  path: "/zh/case-studies",
  alternatePath: "/case-studies",
  locale: "zh-CN",
});

export default function Page() {
  return <CaseStudiesPage locale="zh" />;
}
