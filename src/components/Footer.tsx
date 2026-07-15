"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  const getLanguageToggleLink = (targetLang: "en" | "zh") => {
    return alternateLocalePath(pathname, targetLang);
  };

  const p = (en: string, zh: string) => isZh ? zh : en;

  return (
    <footer className="bg-industry-slate-950 border-t border-industry-slate-800 text-industry-slate-400 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                ? "上海磨料磨具B2B采购与OEM项目支持，覆盖抛光轮、砂纸片、百叶片、砂带、切割片和贴牌磨具套装。生产来源、文件和商务条件按项目确认。"
                : "Shanghai-based B2B sourcing and OEM project support for buffing wheels, sanding discs, flap discs, sanding belts, cutting wheels and private-label abrasive kits. Production sources, documents and commercial terms are confirmed per project."}
            </p>
            <div className="pt-2 text-xs text-industry-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Shanghai, China</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@scottchentools.com" className="hover:text-white transition-colors">sales@scottchentools.com</a>
              </div>
            </div>
            <div className="pt-2 text-xs text-industry-slate-500 font-mono">
              Process: Grind &bull; Sand &bull; Finish &bull; Polish
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {p("Abrasive Products", "磨料磨具产品")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isZh ? "/zh/buffing-wheels" : "/buffing-wheels"} className="hover:text-white transition-colors">
                  {p("Buffing & Polishing Wheels", "抛光轮与布轮")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/sanding-discs" : "/sanding-discs"} className="hover:text-white transition-colors">
                  {p("Sanding Discs", "砂纸片/砂碟")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/flap-discs" : "/flap-discs"} className="hover:text-white transition-colors">
                  {p("Flap Discs", "百叶片")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/sanding-belts" : "/sanding-belts"} className="hover:text-white transition-colors">
                  {p("Sanding Belts", "砂带")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/cutting-wheels" : "/cutting-wheels"} className="hover:text-white transition-colors">
                  {p("Cutting Wheels", "切割片")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/abrasive-kits" : "/abrasive-kits"} className="hover:text-white transition-colors">
                  {p("Abrasive Accessory Kits", "磨具套装")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/products" : "/products"} className="text-industry-orange hover:underline text-xs font-bold uppercase tracking-wide">
                  {p("View All Products →", "查看全部产品 →")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {p("B2B Services", "B2B 服务")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isZh ? "/zh/oem-private-label" : "/oem-private-label"} className="hover:text-white transition-colors">
                  {p("OEM / Private Label", "OEM定制/贴牌代工")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/wholesale-abrasives" : "/wholesale-abrasives"} className="hover:text-white transition-colors">
                  {p("Wholesale Program", "批发合作")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/about" : "/about"} className="hover:text-white transition-colors">
                  {p("About SCOTTCHEN", "关于 SCOTTCHEN")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/china-abrasive-manufacturer" : "/china-abrasive-manufacturer"} className="hover:text-white transition-colors">
                  {p("Supply-Chain Verification", "供应链核验说明")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/applications" : "/applications"} className="hover:text-white transition-colors">
                  {p("Applications", "应用场景")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/quality-control" : "/quality-control"} className="hover:text-white transition-colors">
                  {p("Quality Control", "质量控制")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/supplier-profile" : "/supplier-profile"} className="hover:text-white transition-colors">
                  {p("Supplier Profile", "供应商档案")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/evidence-center" : "/evidence-center"} className="font-semibold text-industry-orange-light hover:text-white transition-colors">
                  {p("Buyer Evidence Center", "买家证据中心")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/product-compliance" : "/product-compliance"} className="hover:text-white transition-colors">
                  {p("Product Compliance Map", "产品合规矩阵")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/procurement-terms" : "/procurement-terms"} className="hover:text-white transition-colors">
                  {p("Procurement Terms", "采购条款登记")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/packaging-private-label" : "/packaging-private-label"} className="hover:text-white transition-colors">
                  {p("Packaging Workflow", "包装放行流程")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/case-studies" : "/case-studies"} className="hover:text-white transition-colors">
                  {p("Case Evidence Standard", "案例证据标准")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources" : "/resources"} className="hover:text-white transition-colors">
                  {p("B2B Sourcing Resources", "B2B 采购资源中心")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/oem-abrasive-supplier-evaluation" : "/resources/oem-abrasive-supplier-evaluation"} className="hover:text-white transition-colors">
                  {p("Supplier Evaluation Guide", "供应商评估指南")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-sourcing-checklist" : "/resources/abrasive-sourcing-checklist"} className="hover:text-white transition-colors">
                  {p("Abrasive Sourcing Checklist", "磨料磨具采购检查清单")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-material-selection-guide" : "/resources/abrasive-material-selection-guide"} className="hover:text-white transition-colors">
                  {p("Abrasive Material Selection Guide", "磨料选材与粒度指南")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              {p("Get Started", "联系我们")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={isZh ? "/zh/contact" : "/contact"} className="hover:text-white transition-colors block">
                  <span className="font-semibold text-industry-orange">
                    {p("Request Custom Quote", "在线获取定制报价")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/sample-kit" : "/sample-kit"} className="hover:text-white transition-colors block">
                  {p("Request Sample Kit", "申请商业样品")}
                </Link>
              </li>
              <li>
                <a
                  href="/catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  {p("Specifications Catalog (PDF)", "规格目录 PDF")}
                </a>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-sourcing-checklist" : "/resources/abrasive-sourcing-checklist"} className="hover:text-white transition-colors block">
                  {p("Sourcing Checklist", "采购检查清单")}
                </Link>
              </li>
              <li>
                <Link href={isZh ? "/zh/resources/abrasive-material-selection-guide" : "/resources/abrasive-material-selection-guide"} className="hover:text-white transition-colors block">
                  {p("Material Selection Guide", "磨料选型指南")}
                </Link>
              </li>
              <li className="pt-2 border-t border-industry-slate-800">
                <span className="text-xs text-industry-slate-500 block mb-1">
                  {p("Business Email:", "商业邮件:")}
                </span>
                <a href="mailto:sales@scottchentools.com" className="text-white hover:underline block">
                  sales@scottchentools.com
                </a>
              </li>
              <li>
                <span className="text-xs text-industry-slate-500 block mb-1">
                  {p("Quote Scope:", "报价范围:")}
                </span>
                <span className="text-white block">
                  {p("Confirmed after RFQ review", "审核询价后书面确认")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industry-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-industry-slate-500 gap-4">
          <div>
            &copy; {currentYear} SCOTTCHEN. {p("All rights reserved.", "保留所有权利。")} {isZh ? "上海磨料磨具B2B采购与OEM项目支持。" : "Shanghai-based B2B abrasive sourcing and OEM project support."}
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
            <Link href={isZh ? "/zh" : "/"} className="hover:text-white transition-colors">
              {isZh ? "首页" : "Home"}
            </Link>
            <Link href={isZh ? "/zh/terms" : "/terms"} className="hover:text-white transition-colors">
              {isZh ? "服务条款" : "Terms"}
            </Link>
            <Link href={isZh ? "/zh/privacy" : "/privacy"} className="hover:text-white transition-colors">
              {isZh ? "隐私政策" : "Privacy"}
            </Link>
            <Link href={isZh ? "/zh/cookie-policy" : "/cookie-policy"} className="hover:text-white transition-colors">
              {isZh ? "Cookie政策" : "Cookies"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
