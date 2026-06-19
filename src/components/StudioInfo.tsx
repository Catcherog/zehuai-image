import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, TreePine } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { studioImages, locationImages } from "../lib/assets";
import SmartImage from "./SmartImage";

const locations = [
  { name: "西湖周边", style: "古典江南风", highlight: "杭州地标，经典取景地" },
  { name: "龙井茶园", style: "清新茶文化风", highlight: "茶山绿意，天然背景" },
  { name: "小河直街", style: "文艺复古风", highlight: "老街巷弄，烟火气" },
  { name: "中国美院象山校区", style: "建筑艺术风", highlight: "现代建筑+自然融合" },
  { name: "西溪湿地", style: "自然意境风", highlight: "水乡意境，草木葱茏" },
  { name: "法喜寺周边", style: "禅意国风", highlight: "古寺禅意，国风绝佳" },
  { name: "南宋御街", style: "古街市井风", highlight: "南宋遗韵，市井烟火" },
];

const facilities = ["私密更衣室", "休息区", "专业化妆台", "服装库"];

export default function StudioInfo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="studio" className="section-padding">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">门店与场地</h2>
          <div className="gold-line mt-4" />
          <p className="section-subtitle">杭州核心地段，多场景外景资源</p>
        </motion.div>

        {/* Studio info card */}
        <motion.div
          className="mt-12 card-dark max-w-xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <SmartImage
            src={studioImages.url}
            alt={studioImages.alt}
            className="h-48 w-full"
          />
          <div className="p-8">
            <h3 className="font-serif text-heading text-ink-50">
              泽怀影像 Studio
            </h3>
            <div className="mt-5 space-y-3 text-body-sm text-ink-200">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold-500" />
                <span>杭州市（具体地址待补充）</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-500" />
                <span>10:00-20:00（需提前预约）</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold-500" />
                <span>微信搜索小程序「泽怀影像」</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location grid */}
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className="card-dark overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + 0.08 * i }}
            >
              <SmartImage
                src={locationImages[i].url}
                alt={locationImages[i].alt}
                className="h-32 w-full"
              />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-gold-500" />
                  <h4 className="font-serif text-heading-sm text-ink-50">
                    {loc.name}
                  </h4>
                </div>
                <p className="mt-2 text-body-sm text-gold-400">{loc.style}</p>
                <p className="mt-1 text-body-sm text-ink-400">{loc.highlight}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {facilities.map((f) => (
            <span
              key={f}
              className="rounded-full border border-ink-600 bg-ink-800/60 px-5 py-1.5 text-body-sm text-ink-200"
            >
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
