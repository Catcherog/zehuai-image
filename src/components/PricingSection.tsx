import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const singlePackages = [
  { name: "基础款", price: "1,499", features: ["12张精修", "30张底片", "1服1造", "花絮视频"] },
  { name: "标准款", price: "2,499", features: ["18张精修", "50张底片", "2服1造", "4张拍立得", "花絮+电影视频原片"], recommended: true },
  { name: "尊享款", price: "3,599", features: ["25张精修", "80张底片", "2服2造", "10张拍立得", "30S电影视频精修+相册"] },
];

const doublePackages = [
  { name: "双人基础款", price: "2,399", features: ["15张精修", "40张底片", "各1服1造", "花絮视频"] },
  { name: "双人标准款", price: "3,599", features: ["24张精修", "70张底片", "各2服1造", "6张拍立得", "花絮+电影视频原片"], recommended: true },
  { name: "双人尊享款", price: "5,299", features: ["32张精修", "100张底片", "各2服2造", "12张拍立得", "30S电影视频精修+相册"] },
];

const rules = ["定金300元", "精修加购100元/张满四赠一", "平板现场选片", "底片全部给出", "定金永久有效"];
const promises = ["一对一专属服务", "无隐形消费", "精修到满意为止", "定金永久有效"];
const bonusServices = ["精修满四赠一", "闺蜜同行各送2张精修", "老客户介绍各送2张精修", "早鸟预售"];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

function PricingCard({ pkg, index }: { pkg: typeof singlePackages[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`card-dark p-6 md:p-8 flex flex-col ${pkg.recommended ? "border-gold-500/60 shadow-lg shadow-gold-500/10" : ""}`}
    >
      {pkg.recommended && (
        <span className="self-start text-caption font-medium text-ink-950 bg-gold-500 px-3 py-1 rounded-sm mb-4">推荐</span>
      )}
      <h3 className="font-serif text-heading text-ink-50">{pkg.name}</h3>
      <p className="mt-3 font-serif text-display-sm text-gold-400">
        <span className="text-body-lg text-gold-300">¥</span>{pkg.price}
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-body-sm text-ink-200">
            <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />{f}
          </li>
        ))}
      </ul>
      <button className="btn-outline mt-6 w-full text-body-sm">立即预约</button>
    </motion.div>
  );
}

export default function PricingSection() {
  const [tab, setTab] = useState<"single" | "double">("single");
  const packages = tab === "single" ? singlePackages : doublePackages;

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">服务体系</h2>
          <div className="gold-line mx-auto mt-4" />
          <p className="section-subtitle">定制化方案，无隐形消费</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mt-10">
          {(["single", "double"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`pb-2 font-sans text-heading-sm transition-colors ${tab === t ? "text-gold-400 border-b-2 border-gold-400" : "text-ink-400 hover:text-ink-200"}`}>
              {t === "single" ? "单人写真" : "双人写真"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {packages.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} />)}
        </div>

        {/* Rules */}
        <div className="mt-12 card-dark p-6 md:p-8">
          <h3 className="font-serif text-heading text-ink-50 mb-4">通用规则</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {rules.map((r) => (
              <span key={r} className="text-body-sm text-ink-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />{r}
              </span>
            ))}
          </div>
        </div>

        {/* Promises */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {promises.map((p) => (
            <div key={p} className="text-center py-4 card-dark">
              <p className="text-body-sm font-medium text-gold-300">{p}</p>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="mt-8 text-center">
          <h3 className="font-serif text-heading-sm text-ink-50 mb-4">增值服务</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {bonusServices.map((b) => (
              <span key={b} className="px-4 py-2 rounded-sm border border-gold-500/30 text-body-sm text-gold-300">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
