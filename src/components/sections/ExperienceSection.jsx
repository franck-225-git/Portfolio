export default function ExperienceSection({ experiences, formations }) {
  return (
    <section id="parcours" className="mb-16">
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
            Parcours
          </p>
        </div>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
          Experience terrain
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[1.75rem] border border-ink/10 bg-white/95 p-6 shadow-premium md:p-8">
          <div className="relative ml-2 space-y-5 before:absolute before:bottom-2 before:left-1 before:top-2 before:w-px before:bg-ink/15">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.title}`}
                className="relative pl-6"
              >
                <span className="absolute left-[-3px] top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" />
                <div className="rounded-xl border border-ink/10 bg-white p-4 transition hover:border-ink/20">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-md border border-ink/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-ink/60">
                      {item.type}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {item.company}
                    </p>
                  </div>
                  <h3 className="font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-white md:p-7">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-lagoon" />
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
            Formations
          </p>
          <ul className="mt-4 space-y-3">
            {formations.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm leading-relaxed text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
