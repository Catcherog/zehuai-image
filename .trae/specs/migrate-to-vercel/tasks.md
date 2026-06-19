# Tasks

- [ ] Task 1: 修改 Vite 构建配置，适配 Vercel 根路径部署
  - [ ] SubTask 1.1: 将 `vite.config.ts` 的 `base` 从动态仓库名改为 `/`
  - [ ] SubTask 1.2: 清理不再使用的 `process.env.GITHUB_REPOSITORY` 和 `VITE_BASE` 相关逻辑

- [ ] Task 2: 添加 Vercel 配置文件
  - [ ] SubTask 2.1: 创建 `vercel.json`，配置 SPA 路由回退到 `index.html`
  - [ ] SubTask 2.2: 确认 `vercel.json` 中的 `distDir` 或默认输出目录与 Vite 一致

- [ ] Task 3: 移除 GitHub Pages 部署工作流
  - [ ] SubTask 3.1: 删除或禁用 `.github/workflows/deploy.yml`
  - [ ] SubTask 3.2: 检查 `.github` 目录下是否还有 Pages 相关配置

- [ ] Task 4: 更新简历版技术文档
  - [ ] SubTask 4.1: 将技术栈和部署方式从 GitHub Pages 改为 Vercel
  - [ ] SubTask 4.2: 补充 Vercel 自动部署、预览环境、SPA 路由支持等亮点

- [ ] Task 5: 同步更新相关旧 spec 文档
  - [ ] SubTask 5.1: 更新 `deploy-with-backend/spec.md` 中的部署描述
  - [ ] SubTask 5.2: 更新 `official-domain-launch/spec.md` 中的域名绑定对象
  - [ ] SubTask 5.3: 更新 `real-assets-from-cloudbase/spec.md` 中关于前端托管的描述

- [ ] Task 6: 验证构建与部署配置
  - [ ] SubTask 6.1: 本地运行 `npm run build` 确认无报错
  - [ ] SubTask 6.2: 检查构建产物中的资源引用路径是否为根路径 `/`
  - [ ] SubTask 6.3: 运行 `npm run lint` 确认无新增 lint 错误

# Task Dependencies

- Task 2 依赖 Task 1（先确认构建输出路径，再配置 Vercel）
- Task 4 和 Task 5 依赖 Task 1/2/3（文档更新需基于最终配置）
- Task 6 依赖 Task 1/2/3（验证在配置修改之后进行）
