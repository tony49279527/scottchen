# SCOTTCHEN 网站诊断与 SEO 评估

审计日期：2026-06-27
审计范围：B2B 获客、技术 SEO、内容架构、询盘转化、商业可信度、性能、无障碍与上线准备度。

## 一、结论摘要

网站的商业定位已经比较明确：面向工具品牌、五金渠道商和跨境电商卖家，提供磨料、砂纸、抛光轮及私有品牌工具包。现有优势是产品内容较详细、中英文双语覆盖、MOQ 与包装能力表达清楚，并设置了报价和样品两条转化路径。

原项目并不具备直接上线条件，主要问题包括：

1. Standalone 生产服务器没有正确携带 CSS 和静态资源，页面会变成无样式裸页面。
2. 移动端 Lighthouse 性能只有 60，LCP 达到 19.9 秒，首页传输约 6.2 MB。
3. 网站反复推广的采购目录实际是 561 字节的占位 PDF。
4. 中文页面会产生不存在的 `/zh/terms`、`/zh/privacy` 等链接。
5. Analytics、Cookie 弹窗与隐私政策相互矛盾。
6. 页面展示了无法核实的地址、电话、LinkedIn、视频演示和结构化价格。
7. GitHub 工作流仍按旧架构向 SiteGround 上传静态 `out/`，与当前 Node API 架构冲突。

本轮已完成所有可由代码安全解决的高优先级问题。当前生产构建已通过类型检查、编译、页面抓取、资源抓取、移动端布局、元数据、结构化数据、表单 API 和 PDF 渲染检查。

截至 2026-06-28，网站已部署到 Google Cloud Run：

- 项目：`scottchen-b2b-prod-2026`
- 区域：`asia-east1`
- 服务：`scottchen-b2b`
- 临时生产地址：[Cloud Run 服务](https://scottchen-b2b-530847966105.asia-east1.run.app)
- 自动部署：GitHub `main` 分支通过 Workload Identity Federation 构建并发布，不使用长期服务账号密钥。

## 二、评分

| 评估项 | 优化前 | 当前 | 说明 |
| --- | ---: | ---: | --- |
| 移动端性能 | 60/100 | 92/100 | Lighthouse 生产模式 |
| 无障碍 | 96/100 | 100/100 | 已修复对比度和导航控件 |
| 最佳实践 | 96/100 | 100/100 | 已补图标并消除控制台错误 |
| Lighthouse SEO | 100/100 | 100/100 | 只代表基础 SEO 标签通过 |
| 技术 SEO 深度 | 68/100 | 93/100 | sitemap、hreflang、canonical、分享卡、schema |
| B2B 转化基础设施 | 64/100 | 87/100 | 表单、归因、评分、目录和错误处理 |
| 内容架构 | 70/100 | 80/100 | 商业页面较强，已增加首个采购内容集群 |
| 企业可信度证据 | 35/100 | 55/100 | 已删除虚假信息，仍缺真实企业和工厂证据 |
| 站外权威度 | 15/100 | 15/100 | Cloud Run 已上线，正式域名尚未切换、收录和获得外链 |

Lighthouse SEO 100 分不是排名能力 100 分。它不会评估搜索需求、竞争程度、内容原创性、企业可信度、外链和询盘质量。

## 三、性能结果

移动端生产模式 Lighthouse：

| 指标 | 优化前 | 当前 | 建议目标 |
| --- | ---: | ---: | ---: |
| Performance | 60 | 92 | 90+ |
| First Contentful Paint | 3.6 秒 | 1.1 秒 | 小于 1.8 秒 |
| Largest Contentful Paint | 19.9 秒 | 3.4 秒 | 真实用户 P75 小于 2.5 秒 |
| Total Blocking Time | 50 毫秒 | 60 毫秒 | 小于 200 毫秒 |
| Cumulative Layout Shift | 0 | 0 | 小于 0.1 |
| Speed Index | 9.1 秒 | 2.1 秒 | 小于 3.4 秒 |
| 页面传输量 | 6,228 KiB | 571 KiB | 越低越好 |

本地 Lighthouse 只能作为方向性数据。正式域名切换后，应以 PageSpeed Insights 实际数据和 Search Console Core Web Vitals 为准。

## 四、关键问题与处理结果

### P0：上线阻断问题

1. 生产启动后缺少样式和静态文件。
   - 已修复：`postbuild` 自动把 `public` 和 `.next/static` 放入 standalone 包。
   - 已验证：`npm run start` 可正常显示桌面和移动端样式。

2. GitHub Actions 使用过时的 SiteGround 静态部署。
   - 已修复：保留类型检查与生产构建，并增加 GitHub 到 Cloud Run 的自动部署工作流。
   - GitHub 使用短期 OIDC 身份，不在仓库中保存 Google Cloud 服务账号密钥。

3. 询盘没有配置投递渠道时可能造成“假成功”。
   - 已修复：未配置 Webhook 或 Resend 时返回明确的 503 和前端错误提示。
   - 上线前必须完成一次真实邮件或 CRM 投递测试。

4. 采购目录是无效占位文件。
   - 已修复：重新制作了 5 页英文 B2B 采购能力册。
   - 已逐页渲染检查，最终文件约 678 KB。

### P1：技术 SEO

1. 手工维护 robots 和 sitemap 容易遗漏。
   - 已改为由 Next.js 根据路由表动态生成。

2. 页面缺少统一的 Open Graph 和 Twitter Card。
   - 已增加页面级标题、描述、canonical、hreflang、分享信息和 1200×630 分享图。

3. 英文法律页面错误声明不存在的中文版本。
   - 已删除不存在的 hreflang，语言切换也不会再进入 404。

4. 中文页面初始语言属性为英文。
   - 已让服务器生成的原始 HTML 直接输出 `zh-CN`，并在客户端路由变化时同步。

5. 产品结构化数据含有页面上不可见、无法核实的价格。
   - 已移除所有隐藏价格和报价区间。

6. Organization schema 含有无法核实的地址、电话、坐标和失效 LinkedIn。
   - 已只保留品牌、域名、邮箱、现有零售站和支持语言。

7. 缺少 favicon 与站点应用信息。
   - 已补充图标、manifest、主题色和应用名称。

### P1：性能与体验

1. 13 张 PNG 合计约 10 MB，而且没有尺寸信息。
   - 已转为 WebP，整套约 1.3 MB。
   - 已增加宽高、异步解码和首屏外延迟加载。

2. Google Fonts 阻塞首屏。
   - 已改为构建时自托管字体，不再依赖运行时请求 Google Fonts。

3. 字体缺少工业品牌辨识度。
   - 正文采用 Source Sans 3，标题采用 Barlow Condensed。

4. 小号灰字和橙色主按钮未达到 WCAG 对比度。
   - 已调整颜色变量和主按钮颜色，Accessibility 达到 100。

5. 未配置 Analytics 时仍出现 Cookie 弹窗并遮挡移动端首屏。
   - 已修复：未配置 GA 时不显示弹窗。
   - 配置 GA 后，用户可接受或拒绝，Analytics 只在同意后加载。

### P1：B2B 转化

1. 免费邮箱被完全拒绝。
   - 风险：小型分销商、亚马逊卖家和创业品牌经常使用 Gmail 或 Outlook。
   - 已修复：个人邮箱可以提交，但在线索评分中低于企业域名邮箱。

2. 访客从广告落地页进入联系页后，UTM 会丢失。
   - 已修复：首次落地页、来源和 UTM 在当前访问会话中保留。

3. 页面声称有视频演示，但链接只是泛化 YouTube 标签页。
   - 已删除不实演示入口，改为可验证的 SCOTTCHEN 零售产品站。

4. 联系页展示无法核实的地址、电话和 LinkedIn。
   - 已删除，只保留邮箱、现有零售站和提交图纸/包装文件的说明。

5. 下载目录无法产生采购价值。
   - 已替换为包含产品系列、OEM 流程、样品质检和 RFQ 清单的能力册。

## 五、搜索意图与页面结构

### 高商业意图页面

| 搜索意图 | 主要承接页 |
| --- | --- |
| OEM abrasive accessory manufacturer | `/` |
| Surface finishing accessory catalog | `/products` |
| OEM buffing and polishing wheels | `/products/buffing-polishing-wheels` |
| Bulk sanding and grinding accessories | `/products/sanding-grinding-accessories` |
| Private label polishing or sanding kits | `/oem-private-label` |
| Abrasive applications by substrate | `/applications` |
| Abrasive manufacturing quality control | `/quality-control` |
| Abrasive sample kit | `/sample-kit` |
| OEM abrasive quote | `/contact` |

每个主要页面都有互相对应的中英文版本，并设置自引用 canonical 与双向 hreflang。

### 采购研究型内容

本轮新增：

- `/resources/abrasive-sourcing-checklist`
- `/zh/resources/abrasive-sourcing-checklist`

这组页面面向处于供应商筛选和 RFQ 准备阶段的采购人员，覆盖规格、样品、质检、包装、验货和报价比较，并内链到产品、质控、样品和询盘页面。

### 下一批内容优先级

只发布能提供真实技术价值和证据的页面：

1. 抛光轮选择指南：密缝与松缝、密度、孔径、RPM、抛光膏搭配。
2. 木工、金属、汽车和石膏板的砂纸底基与目数指南。
3. Amazon FBA 与五金零售的私有品牌包装检查清单。
4. 带真实报告示例的磨料磨具出货验货清单。
5. 包含真实客户问题、样品结果和量产结果的案例研究。

不建议批量发布泛化 AI 文章。少量但包含原创照片、参数表、测试证据和专业内链的内容更有竞争力。

## 六、企业信任与 E-E-A-T 缺口

以下内容不能靠代码安全推测，必须由企业提供：

1. 法定公司名称和注册地区。
2. 可公开且可核实的办公或工厂地址。
3. 有人持续接听和回复的电话或 WhatsApp。
4. 原创工厂、仓库、设备、质检、团队和包装照片。
5. 真实检测设备、批次报告和公差标准。
6. 当前有效且适用于对应产品的证书。
7. 获得客户授权的渠道案例、评价或合作证明。
8. 对 MOQ、样品费抵扣、交期、RPM、公差和 FBA 能力进行业务确认。

在证据齐全前，应避免使用“100% 保证”“官方”“认证”等绝对表述。

## 七、上线前必须完成

1. 配置 `INQUIRY_WEBHOOK_URL`，或完整配置 `RESEND_*`。
2. 验证 `sales@scottchentools.com` 能正常收发邮件。
3. 配置并检查 SPF、DKIM 和 DMARC。
4. 在生产环境完整提交一次报价表和样品表。
5. 确认域名只使用一个 HTTPS canonical 主机版本。
6. 由企业负责人复核所有商业能力、MOQ、交期和质量承诺。
7. 将 `www.scottchentools.com` 指向正式服务，并验证 HTTPS、canonical、重定向和 sitemap。
8. 将当前进程内询盘限流升级为 Cloud Armor、API Gateway 或共享存储方案；Cloud Run 多实例之间不会共享内存计数。

## 八、上线后 30/60/90 天计划

### 第 1-30 天

- 切换正式域名、验证邮件、提交 sitemap，并请求核心页面收录。
- 建立产品词的展现、点击和排名基线。
- 增加真实公司身份、工厂和运营照片。
- 记录询盘开始、询盘成功、样品申请和目录下载事件。

### 第 31-60 天

- 发布抛光轮选择指南和砂纸选择指南。
- 增加真实产品规格书下载。
- 从现有零售站指向相关 B2B 产品页。
- 获取现有分销商、合作伙伴和行业站点的真实品牌提及与链接。

### 第 61-90 天

- 发布至少一个真实案例和一个真实质检证据页。
- 比较不同来源、语言、设备和落地页的询盘转化。
- 优化有展现但点击率低的标题和描述。
- 对有流量但没有询盘的页面调整 CTA、表单和样品权益。

## 九、核心指标

### 商业指标

- 每 100 次访问产生的有效 RFQ
- 每 100 次访问产生的有效样品申请
- 询盘投递成功率
- 销售首次响应时间
- 询盘到样品、样品到订单的转化率
- 各广告来源的有效询盘成本

### SEO 指标

- 已收录商业页面数量
- 非品牌词展现与点击
- 各产品系列 Top 10 关键词覆盖
- 自然搜索询盘转化率
- 相关工业和渠道网站的引用域名
- 移动端 Core Web Vitals 通过率

## 十、已完成验证

- `npm run typecheck`
- `npm run build`
- Standalone 生产启动
- 25 个页面的标题、描述、canonical、分享标签和 H1 检查
- 内部链接与本地资源抓取，未发现失效目标
- 移动端布局和菜单交互
- 中英文 canonical 与 hreflang
- Open Graph 与 Twitter Card
- 浏览器内结构化数据解析
- robots 和 sitemap
- 非法邮箱与个人邮箱 API 行为
- 5 页 PDF 渲染检查
- 最终 Lighthouse：Performance 92、Accessibility 100、Best Practices 100、SEO 100

## 官方参考

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [多语言页面与 hreflang](https://developers.google.com/search/docs/advanced/crawling/localized-versions)
- [Product 结构化数据](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Sitemap 指南](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Core Web Vitals](https://web.dev/articles/vitals)
