import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// GitHub Pages 部署：从环境变量读取仓库名作为 base 路径
// 本地开发使用 '/'
// GitHub Pages 部署为 'https://USER.github.io/REPO/'，则 base 为 '/REPO/'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const base = process.env.VITE_BASE || (repoName ? `/${repoName}/` : '/');

// https://vite.dev/config/
export default defineConfig({
  base,
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }),
    tsconfigPaths()
  ],
})
