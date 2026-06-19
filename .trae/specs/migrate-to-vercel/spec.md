# 迁移前端托管到 Vercel Spec

## Why
当前项目使用 GitHub Pages 托管前端静态站点，并通过 GitHub Actions 实现 CI/CD。Vercel 提供更现代的前端部署体验（自动部署、预览环境、原生 React 生态优化），同时项目后端数据服务继续保留 CloudBase（免费额度足以支撑预约/咨询数据存储）。迁移后前端托管更专业，简历技术栈也更具竞争力。

## What Changes
- 将前端静态站点托管从 GitHub Pages 迁移到 Vercel
- 后端数据服务继续使用 CloudBase（bookings / contacts 集合）
- 调整 `vite.config.ts` 的 `base` 路径为根路径 `/`（Vercel 默认根域部署）
- 移除/禁用 GitHub Actions 的 GitHub Pages 部署工作流
- 新增 `vercel.json` 配置文件（SPA 路由回退、构建输出目录等）
- 将 `HashRouter` 改为 `BrowserRouter`，适配 Vercel 根路径部署
- 更新 `index.html` 中的 SEO URL（og:url、canonical、JSON-LD）为 Vercel 域名
- 更新简历版技术文档和相关旧 spec 文档中的部署描述
- **BREAKING**: 原 GitHub Pages URL 将停止自动更新，需将自定义域名解析切换至 Vercel（若已配置自定义域名）

## Impact
- Affected specs: deploy-with-backend, official-domain-launch, real-assets-from-cloudbase, technical-documentation-for-resume
- Affected code: `vite.config.ts`, `.github/workflows/deploy.yml`, `vercel.json`, `src/App.tsx`, `index.html`
- 新增依赖: 无
- 需要用户操作：在 Vercel 平台导入 GitHub 仓库并配置环境变量

---

## ADDED Requirements

### Requirement: Vercel 前端托管
系统 SHALL 将前端构建产物部署到 Vercel，使用户可通过 Vercel 提供的域名或自定义域名访问官网。

#### Scenario: 用户通过浏览器访问官网
- **WHEN** 用户在浏览器输入 Vercel 部署后的 URL
- **THEN** 页面正常加载，所有区块和交互功能可用

#### Scenario: 推送代码后自动部署
- **WHEN** 开发者推送代码到 main 分支
- **THEN** Vercel 自动触发构建与部署

### Requirement: SPA 路由支持
系统 SHALL 在 Vercel 上配置 SPA 路由回退，确保使用 React Router 的页面刷新或直接访问子路径时返回 `index.html`。

#### Scenario: 直接访问子路径
- **WHEN** 用户直接访问 `/services` 或 `/contact` 等路由
- **THEN** 页面正常渲染，不返回 404

### Requirement: CloudBase 后端保留
系统 SHALL 继续通过 `@cloudbase/js-sdk` 前端直连 CloudBase 云数据库，存储预约和咨询数据。

#### Scenario: 提交预约/咨询
- **WHEN** 用户提交预约或咨询表单
- **THEN** 数据仍然写入 CloudBase 的 `bookings` 或 `contacts` 集合

## MODIFIED Requirements

### Requirement: 前端构建配置
原 GitHub Pages 部署需要动态计算仓库名作为 `base` 路径，迁移到 Vercel 后 `base` 路径固定为 `/`。

#### Scenario: 构建产物路径
- **WHEN** 执行 `npm run build`
- **THEN** 生成的静态资源引用路径以 `/` 为根，不依赖仓库名

### Requirement: CI/CD 流程
移除 GitHub Pages 的 GitHub Actions 工作流，改为依赖 Vercel 的 Git 集成自动构建部署。

#### Scenario: 代码推送到 main 分支
- **WHEN** 代码合并到 main 分支
- **THEN** 不再触发 `.github/workflows/deploy.yml` 的 GitHub Pages 部署
- **THEN** Vercel 自动完成构建与部署

### Requirement: 路由模式
将 `HashRouter` 改为 `BrowserRouter`，使 URL 不再包含 `#`，适配 Vercel 根路径部署。

#### Scenario: 访问子页面
- **WHEN** 用户访问 `/other`
- **THEN** 浏览器地址栏显示 `zehuai-image.vercel.app/other`，不带 `#`

## REMOVED Requirements

### Requirement: GitHub Pages 部署
**Reason**: 前端托管已迁移到 Vercel，GitHub Pages 部署流程不再需要。
**Migration**: 删除或禁用 `.github/workflows/deploy.yml`；若之前已配置 GitHub Pages 自定义域名，需要将 DNS 解析切换到 Vercel。
