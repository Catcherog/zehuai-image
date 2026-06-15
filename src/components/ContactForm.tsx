import { useState } from "react";
import { User, Phone, MessageSquare } from "lucide-react";
import { submitContact } from "../lib/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "请输入姓名";
    if (!form.phone.trim()) e.phone = "请输入手机号";
    else if (!/^1[3-9]\d{9}$/.test(form.phone)) e.phone = "请输入正确的手机号";
    if (!form.message.trim()) e.message = "请输入咨询内容";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-gold-400 text-4xl mb-4">&#10003;</div>
        <p className="font-serif text-heading text-ink-50">咨询提交成功</p>
        <p className="text-body text-ink-300 mt-2">我们会尽快回复您的咨询</p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          继续咨询
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

      {/* 咨询内容 */}
      <div>
        <label className="flex items-center gap-2 text-body-sm text-ink-300 mb-1.5">
          <MessageSquare size={14} /> 咨询内容 <span className="text-gold-400">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full bg-ink-800/60 border border-ink-700/50 rounded-lg px-4 py-2.5 text-ink-50 placeholder-ink-500 focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
          placeholder="请描述您想咨询的内容"
        />
        {errors.message && <p className="text-red-400 text-caption mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-400 text-body-sm">提交失败，请稍后重试</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "提交中..." : "提交咨询"}
      </button>
    </form>
  );
}
