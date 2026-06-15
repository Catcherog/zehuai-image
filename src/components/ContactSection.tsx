import { useState } from "react";
import { BookOpen, Video, PlayCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import BookingForm from "./BookingForm";
import ContactForm from "./ContactForm";

const socials = [
  { icon: BookOpen, platform: "小红书", account: "@泽怀影像", desc: "客片种草、拍摄攻略、调色教程" },
  { icon: Video, platform: "抖音", account: "@泽怀影像", desc: "拍摄花絮、前后对比、幕后揭秘" },
  { icon: PlayCircle, platform: "视频号", account: "@泽怀影像", desc: "拍摄幕后长视频、客片MV" },
  { icon: MessageCircle, platform: "朋友圈", account: "@泽怀影像", desc: "当日客片速递、档期预告" },
];

const tags = ["#泽怀影像", "#杭州约拍", "#杭州写真", "#新中式写真", "#电影感"];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<"booking" | "contact">("booking");

  return (
    <section id="contact" className="section-padding border-t border-ink-700/30 bg-gradient-to-b from-ink-950 to-ink-900/40">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="section-title">联系预约</h2>
        <div className="gold-line mt-4" />
        <p className="section-subtitle">期待与您相遇，定格属于您的光影故事</p>

        {/* 在线表单 */}
        <div className="max-w-lg mx-auto mt-14">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("booking")}
              className={`flex-1 py-2.5 rounded-lg text-heading-sm transition-colors ${
                activeTab === "booking"
                  ? "bg-gold-400/20 text-gold-400 border border-gold-400/30"
                  : "bg-ink-800/40 text-ink-300 border border-ink-700/30 hover:border-ink-600/50"
              }`}
            >
              在线预约
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`flex-1 py-2.5 rounded-lg text-heading-sm transition-colors ${
                activeTab === "contact"
                  ? "bg-gold-400/20 text-gold-400 border border-gold-400/30"
                  : "bg-ink-800/40 text-ink-300 border border-ink-700/30 hover:border-ink-600/50"
              }`}
            >
              在线咨询
            </button>
          </div>
          <div className="card-dark p-6">
            {activeTab === "booking" ? <BookingForm /> : <ContactForm />}
          </div>
        </div>

        {/* Social Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {socials.map((s) => (
            <div key={s.platform} className="card-dark p-5 text-center">
              <s.icon className="mx-auto text-gold-400" size={26} />
              <h4 className="font-serif text-heading-sm text-ink-50 mt-3">{s.platform}</h4>
              <p className="text-caption text-gold-400 mt-1">{s.account}</p>
              <p className="text-body-sm text-ink-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {tags.map((t) => (
            <span key={t} className="text-body-sm text-ink-400">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
