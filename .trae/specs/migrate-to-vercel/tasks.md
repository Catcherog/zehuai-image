# Tasks

- [x] Task 1: 修改 Vite 构建配置，适配 Vercel 根路径部署
  - [x] SubTask 1.1: 将 `vite.config.ts` 的 `base` 从动态仓库名改为 `/`
  - [x] SubTask 1.2: 清理不再使用的 `process.env.GITHUB_REPOSITORY` 和 `VITE_BASE` 相关逻辑

- [x] Task 2: 添加 Vercel 配置文件
  - [x] SubTask 2.1: 创建 `vercel.json`，配置 SPA 路由回退到 `index.html`
  - [x] SubTask 2.2: 确认 `vercel.json` 中的 `distDir` 或默认输出目录与 Vite 一致

- [x] Task 3: 移除 GitHub Pages 部署工作流
  - [x] SubTask 3.1: 删除或禁用 `.github/workflows/deploy.yml`
  - [x] SubTask 3.2: 检查 `.github` 目录下是否还有 Pages 相关配置

- [x] Task 4: 路由模式改造
  - [x] SubTask 4.1: 将 `src/App.tsx` 的 `HashRouter` 改为 `BrowserRouter`
  - [x] SubTask 4.2: 验证 `npm run build` 和 `npm run lint` 无报错

- [x] Task 5: 更新 SEO URL
  - [x] SubTask 5.1: 将 `index.html` 中的 `og:url`、`canonical`、JSON-LD URL 改为 Vercel 域名
  - [x] SubTask 5.2: 验证构建产物中 URL 已更新

- [x] Task 6: 更新简历版技术文档
  - [x] SubTask 6.1: 将技术栈和部署方式从 GitHub Pages 改为 Vercel
  - [x] SubTask 6.2: 补充 Vercel 自动部署、预览环境、SPA 路由支持等亮点

- [x] Task 7: 同步更新相关旧 spec 文档
  - [x] SubTask 7.1: 更新 `deploy-with-backend/spec.md` 中的部署描述
  - [x] SubTask 7.2: 更新 `official-domain-launch/spec.md` 中的域名绑定对象
  - [x] SubTask 7.3: 更新 `real-assets-from-cloudbase/spec.md` 中关于前端托管的描述

- [x] Task 8: 验证构建与部署配置
  - [x] SubTask 8.1: 本地运行 `npm run build` 确认无报错
  - [x] SubTask 8.2: 检查构建产物中的资源引用路径是否为根路径 `/`
  - [x] SubTask 8.3: 运行 `npm run lint` 确认无新增 lint 错误

# Task Dependencies

- Task 2 依赖 Task 1（先确认构建输出路径，再配置 Vercel）
- Task 4 和 Task 5 依赖 Task 1/2/3（代码修改在配置之后）
- Task 6 和 Task 7 依赖 Task 1/2/3/4/5（文档更新需基于最终配置）
- Task 8 依赖所有前置任务（验证在全部修改之后进行）
