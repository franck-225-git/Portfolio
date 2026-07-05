export default function AboutSection({ profile }) {
  const values = [
    "Approche orientee resultats metier",
    "Qualite de code et maintenabilite",
    "Capacite a relier technique et operations",
  ];

  return (
    <section id="a-propos" className="mb-16">
      <div className="grid gap-5 rounded-[1.75rem] border border-ink/10 bg-white/95 p-6 shadow-premium md:grid-cols-[1fr_0.7fr] md:p-9">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
              A propos
            </p>
          </div>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-5xl">
            {profile.aboutTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            {profile.aboutDescription}
          </p>
        </div>
        <aside className="rounded-xl border border-ink/10 bg-sand p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
            Valeur ajoutee
          </p>
          <ul className="mt-4 space-y-2.5">
            {values.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
