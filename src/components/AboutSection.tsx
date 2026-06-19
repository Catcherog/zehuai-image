import { Camera, Sparkles, HeartHandshake, Database, BookOpen, Smartphone, HardDrive } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { teamImages } from "../lib/assets";
import SmartImage from "./SmartImage";

const team = [
  { icon: Camera, title: "摄影师", desc: "全职专业团队，非外包兼职，擅长新中式/电影感风格，精通动作引导和情绪捕捉" },
  { icon: Sparkles, title: "化妆师", desc: "专业新中式妆容团队，擅长清透底妆+精致眼妆，古典发型设计" },
  { icon: HeartHandshake, title: "客服顾问", desc: "「客服小怀」团队，温柔有分寸，专业不推销" },
];

const strengths = [
  ["电影级布光", "按风格定制灯光方案：新中式侧逆光、古风侧光+顶光、电影感逆光为主+侧补"],
  ["专业引导", "不需要客户有任何镜头感，聊天式引导自然动作和真实情绪"],
  ["自然抓拍", "拒绝僵硬摆拍，捕捉最真实的瞬间"],
  ["精修工艺", "像素蛋糕专业处理，保留自然质感，不过度美颜"],
];

const digital = [
  { icon: Database, label: "飞书多维表格业务中台" },
  { icon: BookOpen, label: "飞书知识库SOP体系" },
  { icon: Smartphone, label: "微信小程序「泽怀影像」" },
  { icon: HardDrive, label: "素材存档双重备份" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-title">关于我们</h2>
        <div className="gold-line mt-4" />
        <p className="section-subtitle">专注新中式电影感，每一帧都是故事</p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {team.map((t, i) => (
            <div key={t.title} className="card-dark overflow-hidden text-center">
              <SmartImage
                src={teamImages[i].url}
                alt={teamImages[i].alt}
                className="h-48 w-full"
              />
              <div className="p-6">
                <t.icon className="mx-auto text-gold-400" size={32} />
                <h3 className="font-serif text-heading-sm text-ink-50 mt-4">{t.title}</h3>
                <p className="text-body-sm text-ink-300 mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Strength Table */}
        <div className="card-dark mt-12 overflow-hidden">
          <table className="w-full text-body-sm">
            <tbody>
              {strengths.map(([label, desc], i) => (
                <tr key={label} className={i > 0 ? "border-t border-ink-700/50" : ""}>
                  <td className="px-6 py-4 text-gold-400 font-medium whitespace-nowrap">{label}</td>
                  <td className="px-6 py-4 text-ink-300">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Digital Management */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {digital.map((d) => (
            <div key={d.label} className="flex items-center gap-3 text-ink-300 text-body-sm">
              <d.icon className="text-gold-500 shrink-0" size={18} />
              <span>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
