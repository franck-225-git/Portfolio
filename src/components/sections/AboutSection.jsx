export default function AboutSection({ profile }) {
  return (
    <section id="a-propos" className="mb-16">
      <div className="grid gap-4 rounded-[1.75rem] border border-ink/15 bg-white/90 p-6 md:grid-cols-[1fr_0.7fr] md:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
            A propos
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl md:text-5xl">
            {profile.aboutTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            {profile.aboutDescription}
          </p>
        </div>
        <aside className="rounded-xl border border-ink/10 bg-[#f6f9ff] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
            Valeur ajoutee
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li>Approche orientee resultats metier</li>
            <li>Qualite de code et maintenabilite</li>
            <li>Capacite a relier technique et operations</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
