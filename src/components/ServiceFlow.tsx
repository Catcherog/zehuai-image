import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const steps = [
  {
    title: "咨询预约",
    desc: "了解风格 → 沟通需求 → 匹配套餐 → 支付定金（300元）→ 锁定档期",
  },
  {
    title: "拍摄前准备",
    desc: "提前1-2天发送拍摄提醒，确认服装道具，摄影师化妆师到位",
  },
  {
    title: "拍摄当天",
    desc: "选服装(30min) → 化妆造型(90-120min) → 拍摄(120-180min) → 现场选片",
  },
  {
    title: "后期交付",
    desc: "底片3-5天 / 精修2-3周 / 花絮视频1-2周 / 电影视频3-4周",
  },
  {
    title: "售后保障",
    desc: "精修返修到满意 / 免费改期一次 / 定金永久有效 / 专属客服跟进",
  },
];

export default function ServiceFlow() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">服务流程</h2>
          <div className="gold-line mt-4" />
          <p className="section-subtitle">从咨询到交付，全程一对一专属服务</p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative flex justify-between">
            {/* Connecting line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-gold-500/20 via-gold-500/60 to-gold-500/20" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center w-1/5 px-3"
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-500 bg-ink-900 text-body-sm font-medium text-gold-400">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-serif text-heading-sm text-ink-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-body-sm text-ink-300 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative ml-5 border-l border-gold-500/30 pl-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative mb-10 last:mb-0"
                initial={{ opacity: 0, x: -16 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                {/* Number circle on the line */}
                <div className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold-500 bg-ink-900 text-caption font-medium text-gold-400">
                  {i + 1}
                </div>
                <h3 className="font-serif text-heading-sm text-ink-50">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-body-sm text-ink-300 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
