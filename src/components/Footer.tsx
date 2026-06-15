export default function Footer() {
  const socialLinks = [
    { label: "小红书", href: "#" },
    { label: "抖音", href: "#" },
    { label: "视频号", href: "#" },
    { label: "朋友圈", href: "#" },
  ];

  return (
    <footer className="bg-ink-900 border-t border-ink-800">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-heading text-gold-400">泽怀影像</h3>
            <p className="text-body-sm text-ink-400 mt-2">
              光影里有情绪，画面里有故事
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-sm text-ink-300 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-caption text-ink-500 text-center lg:text-right">
            © 2026 泽怀影像工作室 All Rights Reserved
          </p>
          {/* ICP 备案号 — 备案通过后取消注释并填入备案号 */}
          {/* <p className="text-caption text-ink-500 text-center lg:text-right mt-2">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-300 transition-colors">
              浙ICP备XXXXXXXX号
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
