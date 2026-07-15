import { useEffect, useState } from "react";

export default function Header({ navLinks, brandName, initial }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Barre de progression de lecture
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Surlignage du lien de la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `rounded-[9px] px-3.5 py-2 font-mono text-xs tracking-[0.02em] transition-colors ${
      activeId && `#${activeId}` === href
        ? "bg-white/[0.07] text-white"
        : "text-muted hover:bg-white/5 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-night/[0.72] backdrop-blur-[14px]">
      <div className="h-[2px] bg-white/5">
        <div
          className="h-full origin-left bg-gradient-to-r from-bright to-[#9aa4b4]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div className="mx-auto flex w-[min(1180px,92vw)] items-center justify-between gap-5 py-[15px]">
        <a href="#top" className="flex items-center gap-[11px] text-ink">
          <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-white/35 bg-gradient-to-br from-white/[0.18] to-white/[0.14] font-display text-[15px] font-bold text-bright">
            {initial}
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.02em]">
            {brandName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 min-[860px]:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-bright px-4 py-[9px] font-display text-[13px] font-semibold text-night transition hover:-translate-y-px hover:shadow-glowSm"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Ouvrir le menu"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-white/16 text-ink transition hover:border-white/50 hover:bg-white/5 min-[860px]:hidden"
          >
            <span className="font-mono text-base leading-none">
              {menuOpen ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="mx-auto mb-3 flex w-[min(1180px,92vw)] flex-col gap-1 rounded-[14px] border border-white/[0.08] bg-panel p-2 min-[860px]:hidden"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
