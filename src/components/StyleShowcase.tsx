import { motion } from "framer-motion";
import { styleImages, seasonImages } from "../lib/assets";
import SmartImage from "./SmartImage";

const styles = [
  { name: "新中式旗袍", keywords: ["温婉", "大气", "古典韵味"], audience: "喜欢东方美学的女性", gradient: "from-gold-500/20 to-vermilion-500/10" },
  { name: "古风汉服", keywords: ["仙气", "飘逸", "国风"], audience: "喜欢传统文化的女性", gradient: "from-gold-300/15 to-gold-600/10" },
  { name: "清新文艺", keywords: ["自然", "通透", "生活感"], audience: "追求日常美感的女性", gradient: "from-ink-600/30 to-gold-400/10" },
  { name: "情侣写真", keywords: ["互动", "默契", "电影感"], audience: "情侣/夫妻", gradient: "from-vermilion-400/15 to-gold-500/10" },
  { name: "闺蜜写真", keywords: ["欢乐", "默契", "共同记忆"], audience: "好友/闺蜜", gradient: "from-gold-400/15 to-ink-500/20" },
];

const seasons = [
  { name: "春·采茶风", time: "3-4月", desc: "龙井茶园外景，清新淡雅新中式", tint: "border-emerald-500/40 bg-emerald-500/5" },
  { name: "夏·清荷风", time: "6-8月", desc: "西湖荷花/室内清凉风，通透光影", tint: "border-sky-400/40 bg-sky-400/5" },
  { name: "秋·枫叶银杏", time: "10-11月", desc: "暖调光影，氛围感最强季节", tint: "border-orange-400/40 bg-orange-400/5" },
  { name: "冬·雪景/暖调室内", time: "12-2月", desc: "节日氛围+温馨棚拍，雪景限时独家", tint: "border-white/30 bg-white/5" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function StyleShowcase() {
  return (
    <section id="styles" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">风格与作品</h2>
          <div className="gold-line mx-auto mt-4" />
          <p className="section-subtitle">不是千篇一律的模板，而是为您定制的电影画面</p>
        </div>

        {/* Style cards grid: 3+2 desktop, 2+2+1 tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {styles.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`card-dark overflow-hidden ${i >= 3 ? "lg:col-span-1" : ""}`}
            >
              {/* 真实客片 */}
              <SmartImage
                src={styleImages[i].url}
                alt={styleImages[i].alt}
                className="h-48"
                fallbackClassName={`bg-gradient-to-br ${s.gradient}`}
              />
              <div className="p-5">
                <h3 className="font-serif text-heading-sm text-ink-50">{s.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {s.keywords.map((k) => (
                    <span key={k} className="text-caption px-2 py-0.5 rounded-sm bg-gold-500/10 text-gold-300">{k}</span>
                  ))}
                </div>
                <p className="mt-3 text-body-sm text-ink-300">适合：{s.audience}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Four Seasons */}
        <div className="mt-16">
          <h3 className="font-serif text-heading text-ink-50 text-center">四季限定</h3>
          <div className="gold-line mx-auto mt-3" />
          <div className="flex gap-4 overflow-x-auto pb-4 mt-8 lg:overflow-visible lg:grid lg:grid-cols-4 scrollbar-hide">
            {seasons.map((s, i) => (
              <div key={s.name} className={`card-dark overflow-hidden min-w-[240px] lg:min-w-0 border ${s.tint}`}>
                <SmartImage
                  src={seasonImages[i].url}
                  alt={seasonImages[i].alt}
                  className="h-32"
                />
                <div className="p-5">
                  <p className="font-serif text-heading-sm text-ink-50">{s.name}</p>
                  <p className="text-caption text-gold-400 mt-1">{s.time}</p>
                  <p className="text-body-sm text-ink-300 mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
