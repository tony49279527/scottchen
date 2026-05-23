import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "感谢您的询盘 | SCOTTCHEN",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.scottchentools.com/zh/thank-you",
    languages: {
      en: "https://www.scottchentools.com/thank-you",
      "zh-CN": "https://www.scottchentools.com/zh/thank-you",
      "x-default": "https://www.scottchentools.com/thank-you",
    },
  },
};

export default function ChineseThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900 flex-grow justify-center py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-lg border border-industry-slate-800 shadow-2xl space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase block">
            询盘资料已成功提交
          </span>

          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            感谢您的提交
          </h1>

          <div className="space-y-4 text-sm text-industry-slate-355 leading-relaxed text-left border-t border-industry-slate-850 pt-6">
            <p>我们已经收到您的公司资料与产品需求。</p>
            <p>
              <strong>接下来会发生什么？</strong>
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-industry-slate-400 font-mono">
              <li>
                <strong>规格审核：</strong>工程与销售团队会检查您的尺寸、公差、粒度和包装需求。
              </li>
              <li>
                <strong>报价整理：</strong>我们会汇总 MOQ、交期、打样与包装方案。
              </li>
              <li>
                <strong>商务回复：</strong>我们会在 <strong>24 个工作小时内</strong> 通过邮件或电话与您联系。
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-industry-slate-850 flex flex-col sm:flex-row gap-3">
            <Link
              href="/zh"
              className="flex-1 inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
            >
              返回首页
            </Link>
            <Link
              href="/zh/products"
              className="flex-1 inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-slate-750"
            >
              查看产品目录
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

