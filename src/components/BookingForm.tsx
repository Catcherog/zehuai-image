import { useState } from "react";
import { Calendar, User, Phone, Camera, FileText } from "lucide-react";
import { submitBooking } from "../lib/api";

const shootTypes = [
  "新中式旗袍",
  "古风汉服",
  "清新文艺",
  "情侣写真",
  "闺蜜写真",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    shootType: "",
    preferredDate: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "请输入姓名";
    if (!form.phone.trim()) e.phone = "请输入手机号";
    else if (!/^1[3-9]\d{9}$/.test(form.phone)) e.phone = "请输入正确的手机号";
    if (!form.shootType) e.shootType = "请选择拍摄类型";
    if (!form.preferredDate) e.preferredDate = "请选择期望日期";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await submitBooking(form);
      setStatus("success");
      setForm({ name: "", phone: "", shootType: "", preferredDate: "", note: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-gold-400 text-4xl mb-4">&#10003;</div>
        <p className="font-serif text-heading text-ink-50">预约提交成功</p>
        <p className="text-body text-ink-300 mt-2">我们会尽快与您联系确认档期</p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          继续预约
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 姓名 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <User size={14} /> 姓名 <span className="text-gold-400">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 placeholder-ink-500 focus:border-gold-400/50 focus:outline-none transition-colors"
          placeholder="您的姓名"
        />
        {errors.name && <p className="text-red-400 text-caption mt-1">{errors.name}</p>}
      </div>

      {/* 手机号 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <Phone size={14} /> 手机号 <span className="text-gold-400">*</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 placeholder-ink-500 focus:border-gold-400/50 focus:outline-none transition-colors"
          placeholder="您的手机号"
        />
        {errors.phone && <p className="text-red-400 text-caption mt-1">{errors.phone}</p>}
      </div>

      {/* 拍摄类型 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <Camera size={14} /> 拍摄类型 <span className="text-gold-400">*</span>
        </label>
        <select
          value={form.shootType}
          onChange={(e) => setForm({ ...form, shootType: e.target.value })}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 focus:border-gold-400/50 focus:outline-none transition-colors appearance-none"
        >
          <option value="" className="bg-ink-800">请选择拍摄类型</option>
          {shootTypes.map((t) => (
            <option key={t} value={t} className="bg-ink-800">{t}</option>
          ))}
        </select>
        {errors.shootType && <p className="text-red-400 text-caption mt-1">{errors.shootType}</p>}
      </div>

      {/* 期望日期 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <Calendar size={14} /> 期望日期 <span className="text-gold-400">*</span>
        </label>
        <input
          type="date"
          value={form.preferredDate}
          onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 focus:border-gold-400/50 focus:outline-none transition-colors"
        />
        {errors.preferredDate && <p className="text-red-400 text-caption mt-1">{errors.preferredDate}</p>}
      </div>

      {/* 备注 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <FileText size={14} /> 备注
        </label>
        <textarea
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          rows={3}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 placeholder-ink-500 focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
          placeholder="其他需求或问题（选填）"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-body-sm">提交失败，请稍后重试</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "提交中..." : "提交预约"}
      </button>
    </form>
  );
}
