export default function Footer({ year, brandName, socialLinks }) {
  const linkClass =
    "rounded-[10px] border border-white/[0.12] px-[15px] py-[9px] font-mono text-xs text-body transition hover:border-white/50 hover:text-bright";

  return (
    <footer className="relative z-10 mt-10 border-t border-white/[0.07]">
      <div className="mx-auto flex w-[min(1180px,92vw)] flex-wrap items-center justify-between gap-6 py-[34px]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            Développeur Full Stack · Power Platform · Sage X3
          </p>
          <p className="mt-3.5 font-display text-[clamp(26px,4.6vw,54px)] font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink">
            {brandName}
          </p>
          <p className="mt-4 text-[13px] text-faint">
            © {year} — Conçu et développé avec précision.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a href="#top" className={linkClass}>
            Haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
