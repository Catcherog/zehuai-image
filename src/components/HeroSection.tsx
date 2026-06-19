import { useState } from "react";
import { motion } from "framer-motion";
import { heroImages } from "@/lib/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const scrollToBrand = () => {
    document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" });
  };

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Background gradient (fallback when hero image fails to load) */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-900" />

      {/* Hero main visual image - desktop uses heroImages.desktop, mobile uses heroImages.mobile */}
      {!imgError && (
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImages.desktop.url} />
          <img
            src={heroImages.mobile.url}
            alt={heroImages.mobile.alt}
            loading="eager"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-700 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </picture>
      )}

      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 z-[2] bg-ink-950/60" />

      {/* Left gold line */}
      <div className="absolute left-6 md:left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent z-20" />

      {/* Floating decorative circle */}
      <motion.div
        className="absolute right-12 md:right-24 top-1/3 w-24 h-24 rounded-full border border-gold-500/20 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-30 container mx-auto px-4 lg:px-8 text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gold-400 tracking-[0.25em] text-body-sm uppercase mb-6"
        >
          杭州新中式电影感写真工作室
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-display-sm md:text-display-lg text-ink-50 leading-tight"
        >
          光影里有情绪
          <br />
          画面里有故事
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-ink-300 text-body-lg mt-6"
        >
          定制属于您的电影感写真
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a href="#contact" className="btn-primary">
            立即预约
          </a>
          <button onClick={scrollToBrand} className="btn-outline">
            了解更多
          </button>
        </motion.div>
      </div>
    </section>
  );
}
