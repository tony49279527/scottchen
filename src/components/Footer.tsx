"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath, RETAIL_SITE_URL } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  const getLanguageToggleLink = (targetLang: "en" | "zh") => {
    return alternateLocalePath(pathname, targetLang);
  };

  return (
    <footer className="bg-industry-slate-950 border-t border-industry-slate-800 text-industry-slate-400 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="flex flex-col space-y-4">
            <Link href={isZh ? "/zh" : "/"} className="flex items-center space-x-2">
              <svg
                className="h-7 w-7 text-industry-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-lg font-black tracking-wider text-white">
                SCOTT<span className="text-industry-orange">CHEN</span>
              </span>
            </Link>
            <p className="text-sm text-industry-slate-400 leading-relaxed max-w-xs">
              {isZh
                ? "OEM磨料磨具、砂纸及抛光轮定制工具包，面向全球工具品牌、五金分销商和跨境电商卖家。"
                : "OEM Abrasive, Sanding & Polishing Accessory Kits for Tool Brands, Hardware Distributors and Online Sellers."}
            </p>
            <div className="pt-2 text-xs text-industry-slate-500 font-mono">
              Process: Grind &bull; Sand &bull; Finish &bull; Polish
            </div>
          </div>

          {/* Product Categories Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {isZh ? "磨料磨具产品" : "Abrasive Products"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isZh ? "/zh/products/buffing-polishing-wheels" : "/products/buffing-polishing-wheels"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "抛光轮及布轮" : "Buffing & Polishing Wheels"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/products/buffing-polishing-wheels" : "/products/buffing-polishing-wheels"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "气道抛光轮套装" : "Polishing Wheel Kits"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/products/sanding-grinding-accessories" : "/products/sanding-grinding-accessories"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "砂纸与砂纸卷" : "Sanding Sheets & Rolls"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/products/sanding-grinding-accessories" : "/products/sanding-grinding-accessories"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "磨片与锆刚玉砂碟" : "Grinding & Fiber Discs"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/products/sanding-grinding-accessories" : "/products/sanding-grinding-accessories"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "精细打磨棒" : "Detail Sanding Tools"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {isZh ? "行业与应用" : "Industries & Uses"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isZh ? "/zh/applications" : "/applications"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "金属粗磨与去毛刺" : "Metalworking Prep & Polish"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/applications" : "/applications"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "木工打磨与家具翻新" : "Woodworking & Furniture"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/applications" : "/applications"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "汽车还原与抛光" : "Automotive Restoration"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/applications" : "/applications"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "电商定制配套方案" : "Online Tool Seller Kits"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/quality-control" : "/quality-control"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "出厂质检与动态平衡" : "Quality Control Inspections"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-sourcing-checklist" : "/resources/abrasive-sourcing-checklist"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "磨料磨具采购检查清单" : "Abrasive Sourcing Checklist"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-material-selection-guide" : "/resources/abrasive-material-selection-guide"} className="hover:text-white transition-colors duration-200">
                  {isZh ? "磨料选材与粒度指南" : "Abrasive Material Selection Guide"}
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Inquiries & Channels Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {isZh ? "B2B 询盘通道" : "Direct B2B Channels"}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={isZh ? "/zh/contact" : "/contact"} className="hover:text-white transition-colors duration-200 block">
                  <span className="font-semibold text-industry-orange">
                    {isZh ? "在线获取定制报价" : "Request Custom Quote"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/sample-kit" : "/sample-kit"} className="hover:text-white transition-colors duration-200 block">
                  {isZh ? "申请商业样品测试包" : "Request Sample Testing Kit"}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/supplier-profile" : "/supplier-profile"} className="hover:text-white transition-colors duration-200 block">
                  {isZh ? "供应商信息与采购核验" : "Supplier Profile & Due Diligence"}
                </Link>
              </li>
              <li className="pt-2 border-t border-industry-slate-800">
                <span className="text-xs text-industry-slate-500 block">
                  {isZh ? "商业邮件联系:" : "Email Inquiry:"}
                </span>
                <a href="mailto:sales@scottchentools.com" className="text-white hover:underline">
                  sales@scottchentools.com
                </a>
              </li>
              <li>
                <span className="text-xs text-industry-slate-500 block">
                  {isZh ? "SCOTTCHEN 零售产品站:" : "SCOTTCHEN Retail Store:"}
                </span>
                <a href={RETAIL_SITE_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:underline block">
                  scottchen.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-industry-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-industry-slate-500">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} SCOTTCHEN. All rights reserved. {isZh ? "磨料磨具及抛光轮 B2B 供应。" : "Industrial supplier of Surface Finishing Accessories."}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
            <div className="flex items-center space-x-2 text-[10px] font-mono border border-industry-slate-800 bg-industry-slate-900/40 px-2 py-1 rounded">
              <Link
                href={getLanguageToggleLink("en")}
                className={`transition-colors hover:text-white ${!isZh ? "text-industry-orange font-bold" : "text-industry-slate-500"}`}
              >
                EN
              </Link>
              <span className="text-industry-slate-800">|</span>
              <Link
                href={getLanguageToggleLink("zh")}
                className={`transition-colors hover:text-white ${isZh ? "text-industry-orange font-bold" : "text-industry-slate-500"}`}
              >
                中文
              </Link>
            </div>
            <Link href="/terms" className="hover:text-white transition-colors">
              {isZh ? "服务条款" : "Terms of Service"}
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              {isZh ? "隐私政策" : "Privacy Policy"}
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              {isZh ? "Cookie 政策" : "Cookie Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
