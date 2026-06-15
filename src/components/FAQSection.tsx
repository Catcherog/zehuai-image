import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem { q: string; a: string }
interface FAQCategory { label: string; items: FAQItem[] }

const categories: FAQCategory[] = [
  {
    label: "价格相关",
    items: [
      { q: "你们最便宜的套餐多少钱？", a: "单人基础款1,499元起，包含12张精修+30张底片+1套服装造型+花絮视频。双人基础款2,399元起。" },
      { q: "精修不够怎么办？可以加吗？", a: "当然可以！精修加购100元/张，现在有满四赠一活动（买4送1），很划算。" },
      { q: "定金多少？能不能退？", a: "定金300元，用于锁定档期。一旦支付不退，但定金永久有效，随时可以重新预约。提前3天以上可以免费改期一次。" },
      { q: "精修加购怎么收费？", a: "100元/张，满四赠一（买4送1，相当于80元/张），精修到满意为止。" },
    ],
  },
  {
    label: "拍摄相关",
    items: [
      { q: "拍摄需要多长时间？", a: "一般半天左右，包含化妆造型时间（约1.5-2小时）+拍摄时间（约2-3小时）。" },
      { q: "需要自己带衣服吗？", a: "不需要！我们有丰富的服装库供您选择。当然如果您有特别想穿的私服带来也完全可以。" },
      { q: "我不会摆姿势怎么办？", a: "完全不用担心！我们的摄影师非常擅长引导，您只需要带着好心情来就行。" },
    ],
  },
  {
    label: "后期相关",
    items: [
      { q: "选片是怎么选的？", a: "拍摄结束后用平板电脑现场选片，所有底片您都能看到。选片过程没有强制消费。" },
      { q: "精修可以修改吗？", a: "当然可以！精修我们会修到您满意为止。" },
      { q: "成片多久能拿到？", a: "底片预览3-5天，精修成片2-3周，花絮视频1-2周，电影视频3-4周。" },
    ],
  },
  {
    label: "其他问题",
    items: [
      { q: "可以改期吗？", a: "提前3天以上沟通可以免费改期一次。" },
      { q: "可以带朋友吗？", a: "可以！有人陪着反而会更放松。" },
      { q: "你们和其他影楼有什么区别？", a: "我们的定位是定制化的新中式电影感写真，不走流水线模板化，光影偏电影感，一对一专属服务，精修到满意为止且无隐形消费。" },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ink-700/50">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-body text-ink-50 group-hover:text-gold-300 transition-colors pr-4">{item.q}</span>
        <ChevronDown size={18} className={`text-gold-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-4" : "max-h-0"}`}>
        <p className="text-body-sm text-ink-300 leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryChange = (idx: number) => {
    setActiveCategory(idx);
    setOpenIndex(null);
  };

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const current = categories[activeCategory];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">常见问题</h2>
          <div className="gold-line mx-auto mt-4" />
          <p className="section-subtitle">您可能想了解的一切</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat, i) => (
            <button key={cat.label} onClick={() => handleCategoryChange(i)}
              className={`px-5 py-2 rounded-sm text-body-sm font-medium transition-all ${
                activeCategory === i
                  ? "bg-gold-500/15 text-gold-400 border border-gold-500/40"
                  : "text-ink-400 border border-ink-700/50 hover:text-ink-200 hover:border-ink-600"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto mt-8 card-dark p-6 md:p-8">
          {current.items.map((item, i) => (
            <AccordionItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => handleToggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
