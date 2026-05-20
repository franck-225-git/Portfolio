export default function SkillsSection({ skillGroups }) {
  return (
    <section id="competences" className="mb-16">
      <div className="rounded-[1.75rem] border border-ink/15 bg-white/90 p-6 md:p-8">
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
              Stack technique
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">
              Competences
            </h2>
          </div>
          <p className="text-sm text-muted">
            Technologies utilisees en contexte ERP, API et automatisation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-ink/10 bg-[#f6f9ff] p-4"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-lagoon">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-ink/15 bg-white px-2.5 py-1.5 text-xs font-bold text-ink/85 transition hover:border-lagoon/40"
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
