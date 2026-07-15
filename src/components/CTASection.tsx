"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { buildInquiryHref } from "@/lib/inquiryContext";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to Evaluate Our Surface Finishing Accessories?",
  subtitle = "Tool brands, distributors and online sellers can submit a scoped RFQ for component sourcing, samples and packaging approval; availability and terms are confirmed in writing.",
}: CTASectionProps) {
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const quoteHref = buildInquiryHref(pathname, "quote");
  const sampleHref = buildInquiryHref(pathname, "sample");

  return (
    <section className="bg-gradient-to-r from-industry-slate-950 via-industry-slate-900 to-industry-slate-950 border-t border-b border-industry-slate-800 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {isZh ? "准备开始评估我们的磨抛耗材方案？" : title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-industry-slate-400">
          {isZh
            ? "工具品牌、渠道分销商和跨境卖家可提交组件、样品与包装审批范围明确的询价；可行性与条款以书面回复为准。"
            : subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={quoteHref}
            onClick={() =>
              trackEvent({
                event: "quote_cta_click",
                locale: isZh ? "zh-CN" : "en",
                formType: "quote",
                sourcePage: pathname,
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-industry-orange-cta px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/20"
          >
            {isZh ? "获取 OEM 报价" : "Request OEM Quote"}
          </Link>
          <Link
            href={sampleHref}
            onClick={() =>
              trackEvent({
                event: "sample_cta_click",
                locale: isZh ? "zh-CN" : "en",
                formType: "sample",
                sourcePage: pathname,
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center rounded border-2 border-industry-slate-700 bg-transparent px-8 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-slate-800"
          >
            {isZh ? "申领样品包" : "Get Sample Kit"}
          </Link>
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                event: "catalog_download",
                locale: isZh ? "zh-CN" : "en",
                sourcePage: pathname,
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold text-industry-slate-400 hover:text-white transition-all-custom underline underline-offset-4 py-2"
          >
            {isZh ? "打开规格目录 PDF" : "Open Specifications Catalog"}
          </a>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-6 text-xs text-industry-slate-500 font-mono">
          <span>&bull; {isZh ? "样品路径按企业与配置确认" : "Sample path confirmed by buyer and configuration"}</span>
          <span>&bull; {isZh ? "包装与条码要求写入规格" : "Packaging and barcode scope documented"}</span>
          <span>&bull; {isZh ? "MOQ 与交期以书面报价为准" : "MOQ and lead time confirmed in writing"}</span>
        </div>
      </div>
    </section>
  );
}
