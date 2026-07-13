# SCOTTCHEN SEO + GEO 评分卡

检查日期：2026-07-10  
检查对象：生产站 `https://www.scottchentools.com` + 仓库分支 `cursor/fix-csp-unsafe-eval`  
方法依据：企业网站 SEO 与 GEO 评估方法论（100 分制，子分 0–5）

```text
总分 = Σ(模块得分 / 5 × 模块权重)
```

## 1. 总分与评级

| 模块 | 权重 | 子分 (0–5) | 加权分 |
|---|---:|---:|---:|
| 技术与索引健康 | 18 | 4.5 | 16.2 |
| 页面与信息架构 | 16 | 4.5 | 14.4 |
| 内容质量与可抽取事实 | 16 | 3.5 | 11.2 |
| 页面体验与性能 | 10 | 4.5 | 9.0 |
| 实体信任与 E-E-A-T | 14 | 2.5 | 7.0 |
| 结构化数据与机器可读性 | 8 | 4.0 | 6.4 |
| GEO 可见性与引用质量 | 12 | 1.5 | 3.6 |
| 转化路径与商业就绪 | 6 | 3.5 | 4.2 |
| **总分** | **100** | — | **72.0** |

**评级：70–79「基础尚可但有明显短板」**  
技术 SEO、双语架构与性能已成熟；短板集中在实体证据链、站外权威、以及尚无 GEO 实测基线。

## 2. 模块说明

### 技术与索引健康 — 4.5 / 5

- robots.txt 允许主站公开内容被搜索型与训练型 AI bot 抓取，并继续禁止 `/api/` 与 thank-you 页面。
- sitemap 浏览器实测 200，约 51 URL（25 组双语 + catalog.pdf），含 xhtml hreflang。
- 裸域 → www 301；canonical / hreflang（en / zh-CN / x-default）互指正确。
- 核心页无 noindex；感谢页 noindex 正确。
- 扣分：WebFetch 曾对 sitemap 报 500（间歇/客户端差异），需持续用 `seo:smoke` 监控；GSC API 自动化仍 403。

### 页面与信息架构 — 4.5 / 5

- 25 组中英镜像路径；8 个关键词落地页 + 2 个产品集合 + OEM/批发/质控/资源矩阵清晰。
- 每页单 H1；面包屑覆盖销售页；内链从落地页指向相关品类与工厂页。
- 扣分：部分英文落地页历史存在关键词堆叠倾向（本轮已缩短 title/description）；资源 hub 视觉锚点偏弱。

### 内容质量与可抽取事实 — 3.5 / 5

- 产品页含规格表、MOQ、交期、贸易条款、应用、FAQ，EFD 对采购意图足够。
- 资源页覆盖 sourcing checklist / material guide / supplier evaluation。
- 扣分：事实证据率（EAR）偏低——缺可下载证书编号、真实验货报告、可核验案例；部分图片为 AI/样机且含非 SCOTTCHEN 字样。

### 页面体验与性能 — 4.5 / 5

- 2026-07-09 生产 Lighthouse：移动 P97 / A100 / BP100 / SEO100；桌面 P89。
- 首页 LCP：英文桌面 preload + eager；中文 eager + fetchPriority high；关键词页 `sizes` 已补。
- 扣分：桌面性能仍有优化空间；本地构建偶发 Google Fonts 拉取失败（网络环境，非生产）。

### 实体信任与 E-E-A-T — 2.5 / 5

- Organization schema、供应商档案、工厂页、联系邮箱存在。
- 扣分：缺法定主体全称与可核验地址细节、证书编号、真实工厂/质检摄影、外部一致性（LinkedIn/目录）弱；站外权威度仍低。

### 结构化数据与机器可读性 — 4.0 / 5

- 全站 Organization + WebSite；落地页 ProductGroup；BreadcrumbList；资源 Article；目录 CollectionPage。
- 首页与（本轮）关键词页 FAQPage 与可见 FAQ 对齐——用于可抽取性，**不作为 FAQ 富结果 KPI**。
- 扣分：询盘型工业品无 Offer/价格（正确克制）；部分页面 schema 属性与可见文案需持续校对。

### GEO 可见性与引用质量 — 1.5 / 5

- `docs/geo-query-set.md` 与 llms.txt / llms-full.txt 已就绪。
- 扣分：本评分时点尚无多平台 Mention/Citation 基线（本轮将补小样本基线）；无 Bing AI Performance 接入确认。

### 转化路径与商业就绪 — 3.5 / 5

- RFQ / Sample 表单、CTA、catalog.pdf、MOQ/交期信息齐全；失败时邮件兜底，不假成功。
- Resend 生产变量已配。
- 扣分：询盘端到端收件未闭环验证；GA4 未配；无 Webhook 备份；内存限流未升 KV。

## 3. 抽样清单

| 类型 | URL | 备注 |
|---|---|---|
| 首页 | `/`, `/zh` | 品牌定位、FAQ、实体 |
| 关键词落地 | `/buffing-wheels`, `/sanding-discs`, `/flap-discs`, `/sanding-belts`, `/cutting-wheels`, `/abrasive-kits`, `/china-abrasive-manufacturer`, `/wholesale-abrasives` + `/zh/*` | title/FAQ/ProductGroup |
| 产品集合 | `/products`, `/products/buffing-polishing-wheels`, `/products/sanding-grinding-accessories` + zh | CollectionPage / 规格 |
| 资源 | `/resources` + 3 文章 + zh | Article、采购教育 |
| 转化/信任 | `/contact`, `/sample-kit`, `/supplier-profile`, `/oem-private-label`, `/quality-control` + zh | CTA、表单、实体 |
| 法律 | `/terms`, `/privacy`, `/cookie-policy` + zh | 已双语 |

## 4. Issue Log（本轮）

| ID | 问题 | 证据 | 优先级 | 状态 | 负责 |
|---|---|---|---|---|---|
| I-01 | 16 关键词页 FAQ schema 未部署 | 工作区未提交 `@graph` + FAQPage | P1 | 本轮修复 | 开发 |
| I-02 | 中文首页 meta description 偏短（~60 字） | `/zh` metadata | P2 | 本轮修复 | 开发 |
| I-03 | sitemap 偶发客户端 500 报告 | WebFetch vs 浏览器不一致 | P1 | 部署后 smoke 监控 | 开发 |
| I-04 | 询盘投递未端到端验证 | production-ops-checklist | P0 | 待业务实测 | 业务 |
| I-05 | sales@ inbound / DKIM | DNS DMARC p=none | P0 | 待运维 | 运维 |
| I-06 | AI/非品牌图片 | sanding_tools 等 | P1 | 待素材 | 业务 |
| I-07 | GA4 未配置 | 无 MEASUREMENT_ID | P1 | 待配置 | 运维 |
| I-08 | GEO 无实测基线 | geo-query-set 无记录 | P1 | 本轮小样本 | SEO/开发 |
| I-09 | GSC API / Bing Webmaster | 403 / 未确认 | P2 | 待运维 | 运维 |
| I-10 | 实体证据链不足 | 无证书编号/真实案例 | P1–P2 | 待内容 | 业务 |

## 5. 本轮代码修复后预期

- 技术/结构化数据子分可维持或微升（FAQ 与可见内容对齐上线）。
- GEO 子分在完成小样本基线后可从 1.5 升至约 **2.0**（已有观测数据，但仍非稳定引用优势；见 `docs/geo-baseline-2026-07-10.md`）。
- 总分预计仍落在 **72–76**，直到真实图片与询盘闭环完成，才有望进入 80+。

## 6. 部署状态（2026-07-10）

| 项 | 状态 |
|---|---|
| 提交 | `ba8a846` on `cursor/fix-csp-unsafe-eval` |
| 远程推送 | 已推送 origin |
| 本地 typecheck / build / seo:smoke | 通过（51 URL） |
| IndexNow | 51 URL，HTTP 200 |
| Preview | Ready：`scottchen-cv244ma38-context27149.vercel.app` |
| Production promote | **待人工执行** `vercel --prod` 或 `vercel promote scottchen-cv244ma38-context27149.vercel.app` |
