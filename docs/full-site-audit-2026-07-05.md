# SCOTTCHEN 网站整体走查报告

检查日期：2026-07-05
检查对象：本地生产构建 `http://localhost:3027`，并用项目 SEO 脚本核对生产域默认配置
检查范围：英文站、中文站、产品页、资源页、表单页、法律页、感谢页、404、sitemap、robots、manifest、PDF、图片资源、询盘 API、主要交互逻辑

## 1. 总体结论

SCOTTCHEN 当前站点已经具备完整的 B2B 工厂站结构：中英文双语路径、产品矩阵、OEM/批发/质检/工厂背书、资源型内容、询盘和样品申请表单、sitemap/robots/OG/llms.txt、PDF 目录与基本防刷逻辑都已经搭好。

最需要马上修的是视觉资产和少数转化细节：

1. 中文 5 个核心产品详情页存在断图，分别引用了不存在的 hero 图片。
2. 多张图片有明显 AI/样机痕迹，且画面里出现非 SCOTTCHEN 品牌字样，会削弱 B2B 可信度。
3. 多个英文产品页 title/meta description 偏长，搜索结果容易截断。
4. 404 页有 `javascript:` 返回链接，React 已经将它替换成安全阻断 URL。
5. 中文路径下法律页仍跳英文页面，且移动端菜单隐藏文本里仍有英文 `Open main menu`。
6. footer 文案写了 `Sourcing Checklist (PDF)`，但链接实际不是 PDF。

## 2. 检查方法与证据

- `npm run build`：通过，Next.js 16.2.9 生成 59 个 app route 条目。
- `npm run typecheck`：构建后通过。构建前单独跑会因为 `.next/types/*.ts` 尚未生成失败。
- HTTP 状态检查：49 个页面路由全部 `200 text/html`；`robots.txt`、`sitemap.xml`、`manifest.webmanifest`、`llms.txt`、`llms-full.txt`、`catalog.pdf`、`opengraph-image` 均返回 200。
- 图片状态检查：13 个实际存在的 WebP 返回 200；5 个被源码引用但不存在的 hero 图片返回 404，Next image optimizer 返回 400。
- 表单 API 实测：
  - 空请求：400 `Unsupported inquiry type.`
  - 有效 quote/sample payload：本地未配置投递渠道时返回 503，前端会改写成用户可读的邮件兜底提示。
  - 过快提交：429 `Submission was blocked. Please try again.`
  - 样品申请无有效网站：400 `Missing required sample request fields.`
- SEO smoke：
  - 默认生产域检查通过，`https://www.scottchentools.com` sitemap 共 48 个 URL。
  - 强制 `SEO_SMOKE_SITE_URL=http://localhost:3027` 会失败，因为本地仍输出生产 canonical，这是当前配置的预期行为，但脚本不支持 `--base-url` 参数。

## 3. 全页面清单

| 页面 | 状态 | H1 / 页面定位 | 图片 | 表单 | 主要问题 |
|---|---:|---|---:|---:|---|
| `/` | 200 | OEM Abrasive, Sanding & Polishing Accessory Kits | 8 | 0 | 正常 |
| `/products` | 200 | Surface Finishing Accessories Catalog | 8 | 0 | 正常 |
| `/products/buffing-polishing-wheels` | 200 | Buffing & Polishing Wheels | 8 | 0 | meta 偏长 |
| `/products/sanding-grinding-accessories` | 200 | Sanding & Grinding Accessories | 13 | 0 | 正常 |
| `/buffing-wheels` | 200 | Buffing Wheel Manufacturer & Polishing Wheel Supplier | 1 | 0 | title/meta 偏长 |
| `/sanding-discs` | 200 | Sanding Disc Wholesale & Sandpaper Discs Bulk Supplier | 1 | 0 | title/meta 偏长 |
| `/flap-discs` | 200 | Flap Disc Manufacturer & Abrasive Flap Disc Supplier | 1 | 0 | title/meta 偏长 |
| `/sanding-belts` | 200 | Sanding Belt Supplier & Abrasive Belts Manufacturer | 1 | 0 | title/meta 偏长 |
| `/cutting-wheels` | 200 | Cutting Disc Manufacturer & Cut-Off Wheels Supplier | 1 | 0 | title 偏长 |
| `/abrasive-kits` | 200 | Abrasive Kit Wholesale & Polishing Kits Private Label | 1 | 0 | title/meta 偏长 |
| `/china-abrasive-manufacturer` | 200 | China Abrasive Manufacturer & OEM Abrasive Tools Supplier | 1 | 0 | title/meta 偏长 |
| `/wholesale-abrasives` | 200 | Wholesale Abrasive Tools & Bulk Sanding Supplies | 0 | 0 | title/meta 偏长，页面无图片 |
| `/oem-private-label` | 200 | OEM & Private Label Surface Finishing Kits | 1 | 0 | 正常 |
| `/applications` | 200 | Scenario-Specific Surface Finishing | 1 | 0 | 图片风格偏 AI 海报 |
| `/quality-control` | 200 | Abrasive Product Quality Control Planning | 1 | 0 | 图片可信度需加强 |
| `/sample-kit` | 200 | Request a Surface Finishing Sample Kit | 1 | 1 | 逻辑正常 |
| `/contact` | 200 | Request an OEM / Wholesale Quote | 0 | 1 | 逻辑正常，页面无图片 |
| `/supplier-profile` | 200 | SCOTTCHEN Supplier Profile | 0 | 0 | meta 偏长，页面无图片 |
| `/resources` | 200 | B2B abrasive sourcing resources for importer and tool-brand teams | 0 | 0 | meta 偏长，资源页无图片可接受 |
| `/resources/abrasive-sourcing-checklist` | 200 | Abrasive Sourcing Checklist for Importers and Tool Brands | 0 | 0 | 正常 |
| `/resources/abrasive-material-selection-guide` | 200 | Abrasive Grain, Backing & Grit Selection Guide | 0 | 0 | 正常 |
| `/resources/oem-abrasive-supplier-evaluation` | 200 | How to evaluate an OEM abrasive accessory supplier | 0 | 0 | meta 偏长 |
| `/thank-you` | 200 | Thank You For Your Request | 0 | 0 | `noindex` 正常 |
| `/terms` | 200 | Website & B2B Inquiry Terms | 0 | 0 | 仅英文 |
| `/privacy` | 200 | Privacy Policy | 0 | 0 | 仅英文 |
| `/cookie-policy` | 200 | Cookie Policy | 0 | 0 | 仅英文 |
| `/zh` | 200 | 专注抛光轮及磨料磨具B2B OEM/ODM 贴牌定制 | 4 | 0 | 正常 |
| `/zh/products` | 200 | 表面处理研磨抛光配件规格目录 | 8 | 0 | 正常 |
| `/zh/products/buffing-polishing-wheels` | 200 | 工业棉布轮与抛光轮系列 | 8 | 0 | 正常 |
| `/zh/products/sanding-grinding-accessories` | 200 | 砂纸、研磨与打磨耗材配件 | 13 | 0 | 正常 |
| `/zh/buffing-wheels` | 200 | 抛光轮厂家_抛光布轮批发_布轮厂家 | 1 | 0 | 断图 `/images/hero_buffing_wheels.webp` |
| `/zh/sanding-discs` | 200 | 砂纸片批发_砂碟厂家_圆形砂纸盘OEM定制 | 1 | 0 | 断图 `/images/hero_sanding_discs.webp` |
| `/zh/flap-discs` | 200 | 百叶片厂家_百叶轮批发_平面砂布轮OEM定制 | 1 | 0 | 断图 `/images/hero_flap_discs.webp` |
| `/zh/sanding-belts` | 200 | 砂带厂家_环形砂带批发_砂带定制OEM代工 | 1 | 0 | 断图 `/images/hero_sanding_belts.webp` |
| `/zh/cutting-wheels` | 200 | 切割片厂家_树脂切割片批发_不锈钢切割片OEM代工 | 1 | 0 | 断图 `/images/hero_cutting_discs.webp` |
| `/zh/abrasive-kits` | 200 | 磨具套装批发_抛光工具套装贴牌_砂磨套装OEM定制 | 1 | 0 | 正常 |
| `/zh/china-abrasive-manufacturer` | 200 | 中国磨料磨具厂家_上海磨具OEM工厂 | 1 | 0 | 正常 |
| `/zh/wholesale-abrasives` | 200 | 磨具批发_磨料磨具批发供货_五金工具分销合作 | 0 | 0 | 页面无图片 |
| `/zh/oem-private-label` | 200 | OEM 贴牌与抛光工具包定制服务 | 1 | 0 | 正常 |
| `/zh/applications` | 200 | 针对不同底材的表面研磨与抛光搭配 | 1 | 0 | 正常 |
| `/zh/quality-control` | 200 | 磨料磨具产品质量控制与验货计划 | 1 | 0 | 正常 |
| `/zh/sample-kit` | 200 | 申请表面抛磨耗材样品测试包 | 1 | 1 | 逻辑正常 |
| `/zh/contact` | 200 | 在线索取 OEM 代工 / 大货批发报价 | 0 | 1 | 逻辑正常 |
| `/zh/supplier-profile` | 200 | SCOTTCHEN B2B 供应商档案 | 0 | 0 | 页面无图片 |
| `/zh/resources` | 200 | 面向进口商与工具品牌的 B2B 磨料磨具采购资源 | 0 | 0 | 资源页无图片可接受 |
| `/zh/resources/abrasive-sourcing-checklist` | 200 | 磨料磨具采购检查清单 | 0 | 0 | 正常 |
| `/zh/resources/abrasive-material-selection-guide` | 200 | 磨料、背基与砂纸目数选型指南 | 0 | 0 | 正常 |
| `/zh/resources/oem-abrasive-supplier-evaluation` | 200 | 如何评估 OEM 磨料磨具供应商 | 0 | 0 | 正常 |
| `/zh/thank-you` | 200 | 感谢您的提交 | 0 | 0 | `noindex` 正常 |
| 404 | 404 | Page Not Found | 0 | 0 | 返回链接使用 `javascript:`，React 已阻断 |

## 4. 页面与文案评估

### 英文站

英文站文案定位清楚，整体围绕 `OEM / private label / wholesale / sample / quality control / supplier evaluation` 展开，符合 B2B 采购路径。产品页给出了 MOQ、规格、材料、应用、包装、质量控制和 FAQ，比普通展示站更接近采购决策内容。

主要问题是“SEO 关键词密度和标题长度偏激进”。例如 `/buffing-wheels`、`/sanding-discs`、`/abrasive-kits` 等页面 title 同时塞入 manufacturer、wholesale、supplier、SCOTTCHEN，搜索结果里很容易被截断。内容正文也有重复强调“China manufacturer / OEM / private label / wholesale”的趋势，建议保留采购信息，但降低重复关键词堆叠。

另一个文案风险是认证/能力声明。页面多次提到 ISO 9001、EN12413、MPA、FEPA/ANSI、FBA prep、Amazon FBA 等，这对转化有帮助，但若没有可下载证书、批次样例或检验报告截图，会显得证据链不足。供应商档案页已经比较谨慎，但产品详情页还可以增加“可在报价/样品阶段提供”的证据边界。

### 中文站

中文站不是简单机翻，路径、H1 和正文基本针对中文采购搜索习惯写了“厂家/批发/OEM代工/贴牌”等词，覆盖面足够。中文首页、产品目录页、产品集合页和资源页结构完整。

中文站最大问题不是文案，而是 5 个核心中文产品详情页断图。其次，中文页面底部法律链接显示中文文字，但实际跳英文 `/terms`、`/privacy`、`/cookie-policy`；如果面向中文客户，这会造成信任落差。

### 法律页与资源页

法律页内容完整，但只有英文版本。资源页偏内容营销和采购教育，适合 SEO 和 AI search，但缺少视觉锚点；这不是错误，只是页面会显得更像文档库。若想提高停留和转化，可以给资源 hub 增加一张流程图或采购清单预览图。

## 5. 图片与视觉资产

### 断图

以下源码引用的文件在 `public/images` 中不存在：

- `src/app/zh/buffing-wheels/page.tsx` -> `/images/hero_buffing_wheels.webp`
- `src/app/zh/sanding-discs/page.tsx` -> `/images/hero_sanding_discs.webp`
- `src/app/zh/flap-discs/page.tsx` -> `/images/hero_flap_discs.webp`
- `src/app/zh/sanding-belts/page.tsx` -> `/images/hero_sanding_belts.webp`
- `src/app/zh/cutting-wheels/page.tsx` -> `/images/hero_cutting_discs.webp`

直接访问这些图片返回 404；通过 Next Image optimizer 访问返回 400。它们都在核心中文产品详情页，优先级高。

### 图片可信度

现有图片文件都为 1024x1024 WebP，体积大致 58KB-162KB，压缩和加载都可接受。alt 文案齐全。

但图片观感存在 B2B 信任问题：

- `sanding_tools.webp` 画面出现 `PRO-FINISH / PRO-SAND / ULTRA-GRIND`，不是 SCOTTCHEN。
- `applications_banner.webp` 是明显拼贴海报感，文字像广告素材，不像真实工厂/客户应用照片。
- `quality_inspection.webp` 有 AI 生成痕迹，仪器、文字和人员场景看起来像概念图，不像真实质检现场。
- `oem_packaging.webp` 出现扳手、螺丝刀包装，和磨料/抛光轮主营业务不完全匹配。

建议优先替换为真实产品摄影、工厂质检照片、真实包装打样图。若继续使用生成图，应统一品牌字样为 SCOTTCHEN，去掉无关品牌和不可读小字。

## 6. 交互与页面逻辑

### Header / 导航

- 桌面导航包含 Products、OEM Solutions、Applications、Quality Control、Resources、Sample Kit、Our Factory、Wholesale 和 Request Quote。
- 移动端有主菜单按钮，Products 下有二级折叠菜单。
- 当前路径会自动判断中英文，并用 `alternateLocalePath` 切换对应语言路径。
- active 状态会覆盖产品详情路径，逻辑合理。
- 问题：移动端菜单按钮 `aria-label` 已本地化，但隐藏的 `sr-only` 文本仍固定为 `Open main menu`，中文页辅助技术可能读到英文。

### Theme toggle

- 支持 light/dark，本地存储 key 为 `scottchen-theme`。
- 首次访问跟随系统偏好。
- 点击后派发 `scottchen-theme-change` 同步 header 中桌面/移动两个按钮状态。
- 逻辑清楚，无明显问题。

### Footer / CTA

- Footer 大部分链接会随语言切换。
- CTASection 会按语言跳 `/contact` 或 `/zh/contact`、`/sample-kit` 或 `/zh/sample-kit`。
- `Download Specifications Catalog` 链接指向 `/catalog.pdf` 并有下载属性。
- 问题：Footer 的 `Sourcing Checklist (PDF)` 文案实际链接到资源页面，不是 PDF。
- 问题：中文 footer 的 Terms/Privacy/Cookies 文案是中文，但目标仍是英文页。

### 表单

Quote 表单字段：

- `fullName`
- `companyName`
- `email`
- `country`
- `buyerType`
- `productCategory`
- `quantity`
- `customPackaging`
- `targetMarket`
- `message`
- `consent`
- `hpField` 蜜罐字段

Sample 表单字段：

- `fullName`
- `companyName`
- `email`
- `country`
- `website`
- `categories`
- `application`
- `targetMaterial`
- `estimatedQuantity`
- `oemNeeded`
- `message`
- `consent`
- `hpField` 蜜罐字段

前端会校验必填、邮箱、隐私同意、样品类别、样品申请网站格式。服务端再次校验 payload，防过快提交，按 IP+类型做 15 分钟 8 次的内存限流，并计算 lead score / tier。

未配置投递渠道时，API 返回 503；前端不会假装成功，会显示“请直接邮件或稍后再试”的兜底提示。这是正确逻辑，但上线必须确认 Vercel 已设置 `INQUIRY_WEBHOOK_URL` 或 Resend 环境变量。

### Cookie / Analytics / Attribution

- GA 只有配置 `NEXT_PUBLIC_GA_MEASUREMENT_ID` 且用户同意后才加载。
- Cookie consent 不影响表单使用。
- UTM/referrer/landing page 通过 sessionStorage 保存，用于后续表单提交。
- 这套逻辑合理。

## 7. SEO 与索引

做得好的部分：

- 每个页面都有一个 H1。
- 中英文核心页面都有 canonical 和 hreflang。
- `html lang` 会随 `/zh` 路径切换为 `zh-CN`。
- sitemap 有 48 个 URL，包含中英文核心页、资源页、法律页、PDF。
- robots 允许主站，禁止 `/api/`、`/thank-you`、`/zh/thank-you`。
- 感谢页有 `noindex, nofollow, noarchive`，正确。
- Open Graph、Twitter Card、Organization schema、llms.txt 都已配置。

需要优化：

- 英文产品详情页 title 普遍偏长，建议控制在约 50-65 字符。
- 英文 description 多个超过 160 字符，建议压到 140-155 字符。
- `npm run seo:smoke -- --base-url ...` 这种参数不会被脚本读取，脚本只读 `SEO_SMOKE_SITE_URL`。README 如果有人按 CLI 参数用，会误判。

SEO 长度异常页面：

- `/products/buffing-polishing-wheels` description 165
- `/buffing-wheels` title 84, description 164
- `/sanding-discs` title 74, description 170
- `/flap-discs` title 68, description 170
- `/sanding-belts` title 81, description 165
- `/cutting-wheels` title 80
- `/abrasive-kits` title 85, description 173
- `/china-abrasive-manufacturer` title 79, description 164
- `/wholesale-abrasives` title 81, description 188
- `/supplier-profile` description 163
- `/resources` description 167
- `/resources/oem-abrasive-supplier-evaluation` description 167

## 8. 优先级修复建议

### P0 / 立刻修

1. 补齐或改掉 5 个中文产品页断图。
2. 确认生产环境表单投递变量已经配置，否则真实客户提交会失败。

### P1 / 本轮应修

1. 替换明显 AI/非 SCOTTCHEN 品牌图片，至少先处理首页、产品页、质检页、应用页的首屏或关键图。
2. 缩短英文产品页 title/meta description。
3. 把 404 页 `javascript:history.back()` 改成按钮 `onClick={() => history.back()}` 或普通返回首页链接。
4. 修正 footer 的 `Sourcing Checklist (PDF)` 文案或提供真正 PDF。
5. 中文站补中文法律页，或将 footer 法律链接文案明确标注为英文。

### P2 / 后续优化

1. 给资源 hub/供应商档案页增加一张轻量视觉图或流程图。
2. 给认证、质检、工厂能力声明增加可验证证据：证书编号、样例报告、检测项目模板、出货前检查照片。
3. 统一产品图片里的品牌、标签语言、尺寸规格和真实 SKU 命名。
4. 把移动端菜单隐藏文本本地化，避免中文页出现英文辅助文本。
5. 让 SEO smoke 脚本显式支持 `--base-url` 或删除误导性参数用法。

## 9. 最短修复路径

如果要最快改善线上观感和转化，我建议按这个顺序：

1. 先把 5 个断图全部指向已存在图片，或补充对应 WebP 文件。
2. 用真实或品牌一致的图片替换 `sanding_tools.webp`、`applications_banner.webp`、`quality_inspection.webp`、`oem_packaging.webp`。
3. 压缩 8-10 个英文核心 SEO title/description。
4. 修 404 返回按钮、footer PDF 文案、中文法律链接。
5. 最后再做更细的文案去重和证据增强。
