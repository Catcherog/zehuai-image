import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const comparisonData = [
  {
    dimension: "动作",
    traditional: "摆拍僵硬姿势，套用固定模板",
    zehuai: "引导自然状态下的真实动作，不摆拍",
  },
  {
    dimension: "情绪",
    traditional: "刻意表演，表情空洞",
    zehuai: "捕捉您最放松、最真实的情绪瞬间",
  },
  {
    dimension: "光影",
    traditional: "平光均匀，缺乏层次",
    zehuai: "电影级布光，每张照片都有氛围感",
  },
];

const toneKeywords = ["温柔文艺", "有分寸感", "电影质感", "自然通透"];

export default function BrandStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="brand" className="section-padding">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">品牌故事</h2>
          <div className="gold-line mt-4" />
          <p className="section-subtitle">怀瑾握瑜，一人一面</p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl space-y-6 text-ink-200 font-sans text-body leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p>泽怀影像，一家专注新中式电影感写真的工作室，坐标杭州。</p>
          <p>
            「泽怀」这个名字取自「怀瑾握瑜」——意思是内心美好、品德高尚。这也是我们对每一组作品的追求：不只是拍一张好看的照片，而是帮您留下一段真正属于您的时光和故事。
          </p>
          <p>
            我们的风格不是千篇一律的模板化写真，而是根据每个人的气质、性格，去定制一组「像电影一样」的画面。光影里有情绪，画面里有故事。
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gradient-gold font-serif text-heading">
            杭州新中式电影感写真工作室
          </p>
          <p className="mt-2 text-ink-300 font-sans text-body-sm">
            以电影叙事手法，为每位客人定制独一无二的新中式影像
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="card-dark overflow-hidden">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b border-ink-700/50">
                  <th className="px-6 py-4 text-left text-gold-400 font-medium">维度</th>
                  <th className="px-6 py-4 text-left text-ink-400 font-medium">传统影楼</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-medium">泽怀影像</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.dimension} className="border-b border-ink-700/30 last:border-0">
                    <td className="px-6 py-4 text-ink-100 font-medium">{row.dimension}</td>
                    <td className="px-6 py-4 text-ink-400">{row.traditional}</td>
                    <td className="px-6 py-4 text-gold-200">{row.zehuai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {toneKeywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-1.5 text-body-sm text-gold-300"
            >
              {keyword}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
