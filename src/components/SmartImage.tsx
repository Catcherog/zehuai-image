import { useState, type ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** 图片 URL */
  src: string;
  /** 无障碍描述 */
  alt: string;
  /** 加载失败时显示的兜底类名（如渐变背景） */
  fallbackClassName?: string;
  /** 是否启用懒加载（默认 true，首屏图片应设为 false） */
  lazy?: boolean;
}

/**
 * 智能图片组件
 * - 支持懒加载（默认开启，首屏图片应传 lazy={false}）
 * - 加载失败时显示兜底背景
 * - 加载中显示占位背景
 */
export default function SmartImage({
  src,
  alt,
  fallbackClassName = "bg-gradient-to-br from-ink-800 to-ink-900",
  lazy = true,
  className = "",
  ...rest
}: SmartImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className={`relative overflow-hidden ${fallbackClassName} ${className}`}>
      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          {...rest}
        />
      )}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold-500/30 border-t-gold-500" />
        </div>
      )}
    </div>
  );
}
