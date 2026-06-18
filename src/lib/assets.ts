/**
 * 站点素材资源管理
 *
 * 统一管理所有 CloudBase 云存储/静态托管中的真实素材。
 * 用户上传素材到 CloudBase 后，将对应 URL 填入下方即可。
 *
 * CloudBase 环境：zeh-d7glqc07me2155c61
 * CDN 域名格式：https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/{category}/{filename}
 *
 * 说明：使用静态网站托管（Hosting）而非云存储（Storage），因为：
 * 1. 静态托管默认公有访问，CDN URL 可直接访问
 * 2. 云存储为 PRIVATE 权限，需临时签名链接
 * 3. 使用 media/ 前缀，避免与 Vite 构建产物（assets/）冲突
 *
 * 使用方法：
 *   import { heroImages, styleImages } from "@/lib/assets";
 */

export interface AssetItem {
  /** CloudBase 文件 ID（可选，用于 SDK 调用） */
  fileId?: string;
  /** CDN 访问 URL（必填，图片实际加载地址） */
  url: string;
  /** 无障碍描述 */
  alt: string;
}

/**
 * Hero 主视觉图
 * 建议尺寸：桌面端 1920×1080，移动端 750×1334
 */
export const heroImages = {
  desktop: {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/hero/hero-desktop.jpg",
    alt: "泽怀影像 — 杭州新中式电影感写真工作室主视觉",
  } as AssetItem,
  mobile: {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/hero/hero-mobile.jpg",
    alt: "泽怀影像 — 杭州新中式电影感写真工作室主视觉",
  } as AssetItem,
};

/**
 * 风格展示客片（5 种风格）
 * 建议尺寸：800×600（4:3）
 * 顺序对应 StyleShowcase.tsx 中的 styles 数组
 */
export const styleImages: AssetItem[] = [
  {
    url: "/images/styles/qipao.jpg",
    alt: "新中式旗袍写真客片",
  },
  {
    url: "/images/styles/hanfu.jpg",
    alt: "古风汉服写真客片",
  },
  {
    url: "/images/styles/fresh.jpg",
    alt: "清新文艺写真客片",
  },
  {
    url: "/images/styles/couple.jpg",
    alt: "情侣写真客片",
  },
  {
    url: "/images/styles/bestie.jpg",
    alt: "闺蜜写真客片",
  },
];

/**
 * 四季限定客片
 * 建议尺寸：800×600（4:3）
 * 顺序对应 StyleShowcase.tsx 中的 seasons 数组：春、夏、秋、冬
 */
export const seasonImages: AssetItem[] = [
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/styles/spring.jpg",
    alt: "春季采茶风写真客片",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/styles/summer.jpg",
    alt: "夏季清荷风写真客片",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/styles/autumn.jpg",
    alt: "秋季枫叶银杏写真客片",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/styles/winter.jpg",
    alt: "冬季雪景暖调室内写真客片",
  },
];

/**
 * 团队与工作场景照片
 * 建议尺寸：600×400（3:2）
 * 顺序对应 AboutSection.tsx 中的 team 数组：摄影师、化妆师、客服顾问
 */
export const teamImages: AssetItem[] = [
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/team/photographer.jpg",
    alt: "泽怀影像摄影师团队工作照",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/team/makeup.jpg",
    alt: "泽怀影像化妆师团队工作照",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/team/service.jpg",
    alt: "泽怀影像客服顾问团队工作照",
  },
];

/**
 * 门店实景照片
 * 建议尺寸：800×600（4:3）
 */
export const studioImages: AssetItem = {
  url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/studio-interior.jpg",
  alt: "泽怀影像 Studio 门店实景",
};

/**
 * 外景地实拍照片
 * 建议尺寸：800×600（4:3）
 * 顺序对应 StudioInfo.tsx 中的 locations 数组
 */
export const locationImages: AssetItem[] = [
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-xihu.jpg",
    alt: "西湖周边外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-longjing.jpg",
    alt: "龙井茶园外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-xiaohe.jpg",
    alt: "小河直街外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-xiangshan.jpg",
    alt: "中国美院象山校区外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-xixi.jpg",
    alt: "西溪湿地外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-faxi.jpg",
    alt: "法喜寺周边外景地实拍",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/studio/loc-yujie.jpg",
    alt: "南宋御街外景地实拍",
  },
];

/**
 * 活动专区图片
 * 建议尺寸：600×400（3:2）
 *
 * permanent: 常驻活动（3 张，对应 ActivitySection.tsx permanent 数组）
 * seasons: 四季限定（4 张，对应 seasons 数组）
 * festivals: 节日营销（4 张，对应 festivals 数组）
 */
export const activityImages = {
  permanent: [
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/permanent-1.jpg",
      alt: "精修满四赠一活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/permanent-2.jpg",
      alt: "闺蜜同行活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/permanent-3.jpg",
      alt: "老客户专享活动图",
    },
  ] as AssetItem[],
  seasons: [
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/spring.jpg",
      alt: "春季采茶风限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/summer.jpg",
      alt: "夏季清荷风限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/autumn.jpg",
      alt: "秋季枫叶银杏限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/winter.jpg",
      alt: "冬季雪景暖调室内限定活动图",
    },
  ] as AssetItem[],
  festivals: [
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/qixi.jpg",
      alt: "七夕情人节限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/goddess.jpg",
      alt: "女神节限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/midautumn.jpg",
      alt: "中秋节限定活动图",
    },
    {
      url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/activities/spring-festival.jpg",
      alt: "春节新年限定活动图",
    },
  ] as AssetItem[],
};

/**
 * 社交矩阵二维码
 * 建议尺寸：400×400（1:1）
 * 顺序对应 ContactSection.tsx 中的 socials 数组：小红书、抖音、视频号、朋友圈
 */
export const socialImages: AssetItem[] = [
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/social/xiaohongshu-qr.jpg",
    alt: "泽怀影像小红书二维码",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/social/douyin-qr.jpg",
    alt: "泽怀影像抖音二维码",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/social/shipinhao-qr.jpg",
    alt: "泽怀影像视频号二维码",
  },
  {
    url: "https://zeh-d7glqc07me2155c61-1421998063.tcloudbaseapp.com/media/social/wechat-qr.jpg",
    alt: "泽怀影像朋友圈二维码",
  },
];
