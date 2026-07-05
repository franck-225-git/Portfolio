export default function SkillsSection({ skillGroups }) {
  return (
    <section id="competences" className="mb-16">
      <div className="rounded-[1.75rem] border border-ink/10 bg-white/95 p-6 shadow-premium md:p-9">
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
                Stack technique
              </p>
            </div>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
              Competences
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            Technologies utilisees en contexte ERP, API et automatisation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-ink/10 bg-white p-4 transition hover:border-ink/20"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-lagoon">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-ink/12 bg-sand px-2.5 py-1.5 text-xs font-bold text-ink/80 transition hover:border-accent/50 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
