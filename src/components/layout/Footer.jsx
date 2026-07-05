export default function Footer({ year, name, socialLinks }) {
  return (
    <footer className="relative mt-12 border-t border-ink/10 bg-ink py-8 text-white">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-ink via-accent to-lagoon" />
      <div className="mx-auto grid w-[min(1240px,94vw)] gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.14em] text-white/70">
            Portfolio Professionnel
          </p>
          <p className="mt-1 text-sm text-white/75">
            © {year} {name}. Tous droits reserves.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.08em] text-white/85">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/20 px-3 py-1.5 transition hover:border-accent hover:bg-accent hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
