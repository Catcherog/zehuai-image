# Tasks

- [x] Task 1: CloudBase 云存储素材库搭建 — 建立标准化目录结构并上传真实素材
  - [x] SubTask 1.1: 在 CloudBase 静态托管中创建目录结构：`media/hero/`、`media/styles/`、`media/team/`、`media/studio/`、`media/activities/`、`media/social/`（通过 manageHosting MCP 上传 .keep 占位文件建立）
  - [ ] SubTask 1.2: 用户准备并上传真实素材到对应目录（Hero 主视觉、5 种风格客片、四季限定客片、团队照片、门店实景、外景地实拍、活动图、社交二维码）
  - [x] SubTask 1.3: CDN URL 已确认：`https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/{category}/{filename}`，已写入 assets.ts

- [x] Task 2: 新增资源管理模块 — 创建 `src/lib/assets.ts`
  - [x] SubTask 2.1: 创建 `src/lib/assets.ts`，定义素材分类导出（heroImages、styleImages、seasonImages、teamImages、studioImages、locationImages、activityImages、socialImages）
  - [x] SubTask 2.2: 每个素材条目包含 `fileId`、`url`（CDN URL）、`alt`（无障碍描述）字段
  - [x] SubTask 2.3: 预留占位 URL（使用 CloudBase CDN 域名格式），用户上传素材后填入实际 URL

- [x] Task 3: HeroSection 主视觉真实化
  - [x] SubTask 3.1: 在 HeroSection 中引入 heroImages，替换渐变背景为真实图片
  - [x] SubTask 3.2: 添加半透明遮罩层（`bg-ink-950/60`），保证文字可读性
  - [x] SubTask 3.3: 使用 `<picture>` 或 CSS media query 实现桌面端/移动端图片适配
  - [x] SubTask 3.4: 添加图片加载失败兜底（onError 回退到渐变背景）

- [x] Task 4: StyleShowcase 风格客片真实化
  - [x] SubTask 4.1: 在 StyleShowcase 中引入 styleImages，替换 5 种风格卡片的渐变色块为真实客片
  - [x] SubTask 4.2: 引入 seasonImages，替换四季限定卡片的纯色背景为真实客片
  - [x] SubTask 4.3: 图片使用 `object-cover` 适配卡片尺寸，添加 `loading="lazy"` 懒加载
  - [x] SubTask 4.4: 添加图片加载失败兜底（回退到原渐变）

- [x] Task 5: AboutSection 团队照片真实化
  - [x] SubTask 5.1: 在 AboutSection 中引入 teamImages，替换团队卡片的图标为真实照片
  - [x] SubTask 5.2: 照片显示在卡片顶部，下方保留职位名称与描述
  - [x] SubTask 5.3: 添加 `loading="lazy"` 与加载失败兜底

- [x] Task 6: StudioInfo 门店与外景地照片真实化
  - [x] SubTask 6.1: 在 StudioInfo 中引入 studioImages，门店信息卡片添加门店实景照片
  - [x] SubTask 6.2: 引入 locationImages，外景地卡片添加对应外景地实拍照片
  - [x] SubTask 6.3: 添加 `loading="lazy"` 与加载失败兜底

- [x] Task 7: ActivitySection 活动图片真实化
  - [x] SubTask 7.1: 在 ActivitySection 中引入 activityImages，替换常驻活动、四季限定、节日营销卡片的图标为真实图片
  - [x] SubTask 7.2: 图片显示在卡片顶部或作为背景，保留文案信息
  - [x] SubTask 7.3: 添加 `loading="lazy"` 与加载失败兜底

- [x] Task 8: ContactSection 社交二维码真实化
  - [x] SubTask 8.1: 在 ContactSection 中引入 socialImages，替换社交矩阵卡片的图标为真实二维码图片
  - [x] SubTask 8.2: 二维码图片居中显示，保留平台名称与描述文案
  - [x] SubTask 8.3: 添加 `loading="lazy"` 与加载失败兜底

- [x] Task 9: 验证与部署
  - [x] SubTask 9.1: 本地运行 `npm run dev`，逐区块验证图片加载与兜底逻辑
  - [x] SubTask 9.2: 运行 `npm run build` 确保构建通过
  - [ ] SubTask 9.3: 部署到 GitHub Pages，线上验证所有图片正常显示

# Task Dependencies
- [Task 2] 依赖 [Task 1]（需要素材 URL 才能填入 assets.ts，可先用占位 URL 开发，后续替换）
- [Task 3-8] 依赖 [Task 2]（组件引用 assets.ts）
- [Task 3-8] 之间无依赖，可并行开发
- [Task 9] 依赖 [Task 3-8] 全部完成

# 重要说明
- Task 1 为外部操作，需用户在 CloudBase 控制台手动上传素材，AI 可提供目录命名规范与素材尺寸建议
- Task 2-8 为代码修改，AI 可直接执行
- 开发阶段可先用占位 URL（如 CloudBase CDN 域名 + 假文件名）开发，用户上传素材后替换为真实 URL
- 建议素材尺寸规范：
  - Hero 桌面端：1920×1080，移动端：750×1334
  - 风格客片：800×600（4:3）
  - 团队照片：600×400（3:2）
  - 门店/外景地：800×600（4:3）
  - 活动图：600×400（3:2）
  - 二维码：400×400（1:1）
