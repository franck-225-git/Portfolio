export default function Header({ menuOpen, setMenuOpen, navLinks, brandName }) {
  return (
    <header className="sticky top-3 z-30">
      <div className="mx-auto flex w-[min(1240px,94vw)] items-center justify-between rounded-[1.25rem] border border-ink/10 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md md:px-6">
        <a
          href="#home"
          className="font-display text-xs font-bold tracking-[0.16em] text-ink md:text-sm"
        >
          {brandName}
        </a>

        <button
          className="rounded-full border border-ink/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav
          className={`absolute left-0 right-0 top-[calc(100%+8px)] rounded-[1.25rem] border border-ink/10 bg-white p-4 shadow-soft md:static md:flex md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
          aria-label="Navigation principale"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink/75 transition hover:bg-ink hover:text-white md:py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex rounded-full border border-accent bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white md:mt-0"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
