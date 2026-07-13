import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie政策 | SCOTTCHEN",
  description:
    "了解 SCOTTCHEN 网站如何使用本地存储、主题偏好和同意后的 Google Analytics 网站分析。",
  path: "/zh/cookie-policy",
  alternatePath: "/cookie-policy",
  locale: "zh-CN",
});

export default function ChineseCookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[{ label: "首页", href: "/zh" }, { label: "Cookie政策", href: "/zh/cookie-policy" }]}
          />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">
            网站存储透明说明
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Cookie 政策
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            生效日期：2026年6月29日。本政策说明网站使用哪些浏览器存储、可选网站分析如何工作，以及您如何管理偏好。
          </p>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                1. 什么是 Cookie
              </h2>
              <p>
                Cookie 和类似浏览器存储技术可以记住偏好，或帮助网站了解页面使用情况。本页说明 SCOTTCHEN 网站有限使用的浏览器存储。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                2. 本站使用的存储
              </h2>
              <p>我们不使用广告、再营销或跨站画像 Cookie。网站使用以下存储：</p>

              <div className="space-y-4 pt-2">
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                    分析同意偏好（Local Storage）
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    您是否同意网站分析会保存在浏览器本地，避免每次访问都出现同意面板。该偏好不会识别您的身份，也不影响提交询盘。
                  </p>
                </div>

                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-industry-slate-500 mr-2" />
                    显示主题（Local Storage）
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    明暗主题选择会保存在本地，以便网站保持您的显示偏好。该信息不会随询盘表单发送，也不识别个人身份。
                  </p>
                </div>

                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-industry-orange mr-2" />
                    Google Analytics（可选）
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    如果站点配置了 GA4，且您点击“同意分析”，Google Analytics 可能设置测量 Cookie，并接收页面访问、设备类型和大致地区等使用信息。未同意前不会加载分析脚本。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                3. 数据最小化
              </h2>
              <p>
                我们不使用 Facebook Pixel、程序化广告标签或跨站行为画像。拒绝分析不会影响产品页面、目录下载或询盘表单。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                4. 如何管理
              </h2>
              <p>您可以在同意面板中拒绝分析，也可以随时在浏览器设置中清除已保存的偏好或 Cookie：</p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-industry-slate-400 font-mono">
                <li>
                  <strong>Google Chrome：</strong>设置 &gt; 隐私和安全 &gt; Cookie 和其他网站数据。
                </li>
                <li>
                  <strong>Mozilla Firefox：</strong>设置 &gt; 隐私与安全 &gt; Cookie 和网站数据。
                </li>
                <li>
                  <strong>Apple Safari：</strong>设置或偏好设置 &gt; 隐私 &gt; 管理网站数据。
                </li>
                <li>
                  <strong>Microsoft Edge：</strong>设置 &gt; Cookie 和网站权限 &gt; 管理和删除 Cookie。
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                5. 政策更新
              </h2>
              <p>
                如果网站测量或功能发生变化，我们可能更新本政策。重要变化会通过本页面的生效日期体现。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                6. 联系方式
              </h2>
              <p>如对必要存储、分析同意或数据安全有问题，请联系：</p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div>
                  <span className="text-white font-bold">品牌：</span>SCOTTCHEN
                </div>
                <div>
                  <span className="text-white font-bold">邮箱：</span>
                  <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">
                    sales@scottchentools.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
