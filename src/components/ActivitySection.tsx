import { Gift, Users, Award, Flower2, Sun, Leaf, Snowflake, Heart, Moon, Sparkles, PartyPopper } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { activityImages } from "../lib/assets";
import SmartImage from "./SmartImage";

const permanent = [
  { icon: Gift, title: "精修满四赠一", desc: "加购精修每买4张送1张，相当于8折" },
  { icon: Users, title: "闺蜜同行", desc: "两人一起拍各送2张精修" },
  { icon: Award, title: "老客户专享", desc: "介绍新客来两人各送2张精修" },
];

const seasons = [
  { icon: Flower2, title: "春·采茶风", time: "3-4月", desc: "龙井茶园外景，清新淡雅新中式", accent: "text-green-400" },
  { icon: Sun, title: "夏·清荷风", time: "6-8月", desc: "西湖荷花/室内清凉风，通透光影", accent: "text-sky-400" },
  { icon: Leaf, title: "秋·枫叶银杏", time: "10-11月", desc: "暖调光影最佳季节，氛围感最强", accent: "text-amber-400" },
  { icon: Snowflake, title: "冬·雪景/暖调室内", time: "12-2月", desc: "节日氛围+温馨棚拍，雪景限时独家", accent: "text-blue-300" },
];

const festivals = [
  { icon: Heart, title: "七夕/情人节", desc: "给爱的人一份特别的礼物" },
  { icon: Sparkles, title: "女神节(3.8)", desc: "给自己一份春天最好的犒赏" },
  { icon: Moon, title: "中秋节", desc: "月圆人团圆，中秋限定古风写真" },
  { icon: PartyPopper, title: "春节/新年", desc: "新年新气象，国风写真开启新年" },
];

const loyalty = [
  { title: "转介绍奖励", desc: "介绍新客来，两人各送2张精修" },
  { title: "季节推荐", desc: "新主题/新风格优先通知" },
  { title: "生日月福利", desc: "生日月拍摄有额外小惊喜" },
  { title: "老客优先体验", desc: "新主题上线老客优先体验价" },
];

export default function ActivitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="activity" className="section-padding">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-title">活动专区</h2>
        <div className="gold-line mt-4" />
        <p className="section-subtitle">限时优惠与专属权益</p>

        {/* 常驻活动 */}
        <h3 className="font-serif text-heading text-ink-50 mt-14">常驻活动</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {permanent.map((a, i) => (
            <div key={a.title} className="card-dark overflow-hidden">
              <SmartImage
                src={activityImages.permanent[i].url}
                alt={activityImages.permanent[i].alt}
                className="h-32"
              />
              <div className="p-6">
                <a.icon className="text-gold-400" size={28} />
                <h4 className="font-serif text-heading-sm text-ink-50 mt-3">{a.title}</h4>
                <p className="text-body-sm text-ink-300 mt-2">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 四季限定 */}
        <h3 className="font-serif text-heading text-ink-50 mt-14">四季限定</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {seasons.map((s, i) => (
            <div key={s.title} className="card-dark overflow-hidden">
              <SmartImage
                src={activityImages.seasons[i].url}
                alt={activityImages.seasons[i].alt}
                className="h-32"
              />
              <div className="p-5">
                <s.icon className={s.accent} size={24} />
                <h4 className="font-serif text-heading-sm text-ink-50 mt-3">{s.title}</h4>
                <span className="text-caption text-gold-400">{s.time}</span>
                <p className="text-body-sm text-ink-300 mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 节日营销 */}
        <h3 className="font-serif text-heading text-ink-50 mt-14">节日营销</h3>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {festivals.map((f, i) => (
            <div key={f.title} className="card-dark overflow-hidden">
              <SmartImage
                src={activityImages.festivals[i].url}
                alt={activityImages.festivals[i].alt}
                className="h-32"
              />
              <div className="p-5 flex items-start gap-4">
                <f.icon className="text-gold-400 shrink-0 mt-0.5" size={22} />
                <div>
                  <h4 className="font-serif text-heading-sm text-ink-50">{f.title}</h4>
                  <p className="text-body-sm text-ink-300 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 老客户权益 */}
        <h3 className="font-serif text-heading text-ink-50 mt-14">老客户权益</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {loyalty.map((l) => (
            <div key={l.title} className="card-dark p-5">
              <h4 className="font-serif text-heading-sm text-gold-400">{l.title}</h4>
              <p className="text-body-sm text-ink-300 mt-2">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
