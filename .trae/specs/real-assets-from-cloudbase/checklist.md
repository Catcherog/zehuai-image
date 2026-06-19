# Checklist

## CloudBase 云存储素材库
- [x] CloudBase 静态托管中已创建标准化目录结构（media/hero/、media/styles/、media/team/、media/studio/、media/activities/、media/social/）
- [ ] 用户已上传真实素材到对应目录，并记录了 FileID 与 CDN URL

## 资源管理模块
- [x] `src/lib/assets.ts` 已创建，包含所有素材分类导出
- [x] 每个素材条目包含 fileId、url、alt 字段
- [x] 素材 URL 使用 CloudBase CDN 域名格式

## HeroSection 主视觉
- [x] Hero 区背景已替换为真实主视觉图
- [x] 叠加半透明遮罩保证文字可读性
- [x] 桌面端与移动端使用适配尺寸图片
- [x] 图片加载失败时回退到渐变背景

## StyleShowcase 风格客片
- [x] 5 种风格卡片已替换为真实客片
- [x] 四季限定卡片已替换为真实客片
- [x] 图片使用 object-cover 适配，启用懒加载
- [x] 图片加载失败时回退到原渐变

## AboutSection 团队照片
- [x] 团队卡片已替换为真实工作场景照片
- [x] 照片显示在卡片顶部，下方保留文案
- [x] 启用懒加载，加载失败有兜底

## StudioInfo 门店与外景地
- [x] 门店信息卡片已添加门店实景照片
- [x] 外景地卡片已添加对应实拍照片
- [x] 启用懒加载，加载失败有兜底

## ActivitySection 活动图片
- [x] 常驻活动卡片已替换为真实图片
- [x] 四季限定卡片已替换为真实图片
- [x] 节日营销卡片已替换为真实图片
- [x] 启用懒加载，加载失败有兜底

## ContactSection 社交二维码
- [x] 社交矩阵卡片已替换为真实二维码图片
- [x] 二维码居中显示，保留平台名称与描述
- [x] 启用懒加载，加载失败有兜底

## 性能与可用性
- [x] 非首屏图片启用懒加载（loading="lazy"）
- [x] 所有图片有 alt 无障碍描述
- [x] 图片加载失败均有兜底显示

## 构建与部署
- [x] `npm run build` 构建通过，无 TypeScript 错误
- [ ] 本地 dev 环境所有图片正常加载（需用户上传真实素材后验证）
- [ ] 部署到 GitHub Pages 后线上验证图片显示正常（需用户部署后验证）
