# Tasks

- [x] Task 1: SEO 基础配置 — 为网站添加搜索引擎优化所需的 meta 标签和文件
  - [x] SubTask 1.1: 在 index.html 中添加 title、description、keywords meta 标签
  - [x] SubTask 1.2: 添加 Open Graph 标签（og:title、og:description、og:image、og:url）
  - [x] SubTask 1.3: 添加 JSON-LD 结构化数据（LocalBusiness 类型）
  - [x] SubTask 1.4: 创建 public/robots.txt
  - [x] SubTask 1.5: 创建 public/sitemap.xml

- [x] Task 2: CloudBase 环境初始化 — 创建腾讯云开发环境并配置基础服务
  - [x] SubTask 2.1: 初始化 CloudBase 环境（使用 cloudbase CLI 或控制台）
  - [x] SubTask 2.2: 配置静态网站托管
  - [x] SubTask 2.3: 创建云数据库集合（bookings、contacts、activities）及安全规则
  - [x] SubTask 2.4: 初始化 activities 集合基础数据（保持前端硬编码，简化方案）

- [x] Task 3: 云函数 API 开发 — 简化为前端 SDK 直连数据库
  - [x] SubTask 3.1: 按 CloudBase 最佳实践，前端直接通过 SDK 操作数据库，无需云函数中间层

- [x] Task 4: 前端对接 CloudBase — 安装 SDK 并封装 API 调用
  - [x] SubTask 4.1: 安装 @cloudbase/js-sdk 依赖
  - [x] SubTask 4.2: 创建 src/lib/cloudbase.ts 初始化 CloudBase SDK（含匿名登录）
  - [x] SubTask 4.3: 创建 src/lib/api.ts 封装所有后端 API 调用

- [x] Task 5: 预约功能前端实现 — 在联系预约区块添加预约表单
  - [x] SubTask 5.1: 创建 BookingForm 组件（姓名、手机号、拍摄类型、期望日期）
  - [x] SubTask 5.2: 实现表单校验逻辑
  - [x] SubTask 5.3: 对接后端 API 提交预约数据
  - [x] SubTask 5.4: 实现提交成功/失败的 UI 反馈

- [x] Task 6: 咨询功能前端实现 — 添加在线咨询入口
  - [x] SubTask 6.1: 创建 ContactForm 组件（姓名、手机号、咨询内容）
  - [x] SubTask 6.2: 实现表单校验和 API 对接
  - [x] SubTask 6.3: 实现提交成功/失败的 UI 反馈

- [x] Task 7: 活动数据动态化 — 保持前端硬编码（简化方案）
  - [x] SubTask 7.1: 活动数据保持前端硬编码，避免过度工程化

- [x] Task 8: 部署与验证 — 构建并部署到 CloudBase，验证公网访问
  - [x] SubTask 8.1: 执行 vite build 构建生产版本
  - [x] SubTask 8.2: 部署构建产物到 CloudBase 静态托管
  - [x] SubTask 8.3: 配置 SPA 路由规则和数据库安全规则
  - [x] SubTask 8.4: 验证公网访问、SEO 标签正常

# Task Dependencies
- [Task 1] 无依赖，可最先执行
- [Task 2] 无依赖，可与 Task 1 并行
- [Task 3] 简化为 SDK 直连，无需云函数
- [Task 4] 依赖 [Task 2]（需要 CloudBase 环境信息）
- [Task 5] 依赖 [Task 4]
- [Task 6] 依赖 [Task 4]
- [Task 7] 简化为保持前端硬编码
- [Task 8] 依赖 [Task 1] + [Task 5] + [Task 6] + [Task 7]
