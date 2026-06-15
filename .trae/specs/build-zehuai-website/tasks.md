# Tasks

- [x] Task 1: 项目初始化 — 使用 react-ts 模板初始化 React + TypeScript + Vite + Tailwind CSS 项目
  - [x] SubTask 1.1: 执行 vite-init 初始化命令创建项目骨架
  - [x] SubTask 1.2: 安装额外依赖（framer-motion、lucide-react）
  - [x] SubTask 1.3: 配置 Tailwind CSS 主题（色彩体系、字体、间距）
  - [x] SubTask 1.4: 创建项目目录结构（components、pages、hooks、utils）

- [x] Task 2: 全局布局与导航 — 实现页面整体布局框架和导航系统
  - [x] SubTask 2.1: 创建 Navbar 组件（固定顶部、锚点链接、移动端汉堡菜单）
  - [x] SubTask 2.2: 创建 Footer 组件（社交媒体、版权信息）
  - [x] SubTask 2.3: 创建 Layout 组件（Navbar + 主内容区 + Footer）
  - [x] SubTask 2.4: 实现平滑滚动和滚动时导航高亮

- [x] Task 3: Hero 区块 — 实现首屏品牌主视觉
  - [x] SubTask 3.1: 创建 HeroSection 组件（全屏背景、Slogan、CTA 按钮）
  - [x] SubTask 3.2: 实现电影感背景视觉效果（渐变/纹理/动态元素）
  - [x] SubTask 3.3: 添加入场动画

- [x] Task 4: 品牌故事区块 — 实现品牌概述展示
  - [x] SubTask 4.1: 创建 BrandStory 组件（品牌故事文案、品牌定位）
  - [x] SubTask 4.2: 创建 ComparisonTable 组件（传统影楼 vs 泽怀影像对比）
  - [x] SubTask 4.3: 添加滚动入场动画

- [x] Task 5: 服务体系区块 — 实现套餐价格和服务承诺展示
  - [x] SubTask 5.1: 创建 PricingCard 组件（单个套餐卡片）
  - [x] SubTask 5.2: 创建 PricingSection 组件（单人+双人套餐切换展示）
  - [x] SubTask 5.3: 创建 ServicePromise 组件（服务承诺列表）
  - [x] SubTask 5.4: 创建 ValueAddedServices 组件（增值服务）

- [x] Task 6: 风格展示区块 — 实现风格、外景地和四季主题展示
  - [x] SubTask 6.1: 创建 StyleCard 组件（单风格卡片）
  - [x] SubTask 6.2: 创建 StyleShowcase 组件（五种风格网格展示）
  - [x] SubTask 6.3: 创建 LocationList 组件（外景地列表）
  - [x] SubTask 6.4: 创建 SeasonTimeline 组件（四季主题时间线）

- [x] Task 7: 服务流程区块 — 实现客户旅程可视化
  - [x] SubTask 7.1: 创建 ProcessStep 组件（单步骤卡片）
  - [x] SubTask 7.2: 创建 ServiceFlow 组件（五步流程时间线）
  - [x] SubTask 7.3: 实现流程步骤的滚动触发动画

- [x] Task 8: 门店信息区块 — 实现 Studio 和外景地展示
  - [x] SubTask 8.1: 创建 StudioInfo 组件（地址、营业时间、联系方式）
  - [x] SubTask 8.2: 创建 FacilityList 组件（场地设施）

- [x] Task 9: FAQ 区块 — 实现常见问题手风琴展示
  - [x] SubTask 9.1: 创建 AccordionItem 组件（可展开/收起的问题项）
  - [x] SubTask 9.2: 创建 FAQSection 组件（按类别分组的 FAQ 列表）

- [x] Task 10: 关于我们区块 — 实现团队和技术实力展示
  - [x] SubTask 10.1: 创建 TeamIntro 组件（摄影师/化妆师/客服介绍）
  - [x] SubTask 10.2: 创建 TechStrength 组件（技术实力表格）
  - [x] SubTask 10.3: 创建 DigitalManagement 组件（数字化管理说明）

- [x] Task 11: 活动专区区块 — 实现营销活动展示
  - [x] SubTask 11.1: 创建 ActivityCard 组件（单活动卡片）
  - [x] SubTask 11.2: 创建 ActivitySection 组件（常驻活动+季节限定+节日营销）

- [x] Task 12: 联系预约区块 — 实现底部 CTA 和社交媒体
  - [x] SubTask 12.1: 创建 ContactSection 组件（预约入口+社交媒体矩阵）

- [x] Task 13: 主页面组装 — 将所有区块组件组装到主页面
  - [x] SubTask 13.1: 创建 HomePage 页面组件，按顺序引入所有区块
  - [x] SubTask 13.2: 配置路由（如有需要）

- [x] Task 14: 响应式适配 — 确保所有区块在三种屏幕尺寸下正确显示
  - [x] SubTask 14.1: 检查并修复移动端布局问题
  - [x] SubTask 14.2: 检查并修复平板端布局问题

- [x] Task 15: 性能优化与最终验证
  - [x] SubTask 15.1: 检查图片资源加载优化
  - [x] SubTask 15.2: 验证所有交互功能正常
  - [x] SubTask 15.3: 验证所有文案内容与原始文档一致

# Task Dependencies
- [Task 1] 无依赖，最先执行
- [Task 2] 依赖 [Task 1]
- [Task 3-12] 依赖 [Task 1]，可并行执行
- [Task 13] 依赖 [Task 3-12] 全部完成
- [Task 14] 依赖 [Task 13]
- [Task 15] 依赖 [Task 14]
