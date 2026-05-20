export default function ExperienceSection({ experiences, formations }) {
  return (
    <section id="parcours" className="mb-16">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
          Parcours
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">
          Experience terrain
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[1.75rem] border border-ink/15 bg-white/90 p-6 md:p-8">
          <div className="relative ml-2 space-y-5 before:absolute before:bottom-2 before:left-1 before:top-2 before:w-px before:bg-ink/20">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.title}`}
                className="relative pl-6"
              >
                <span className="absolute left-[-3px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="rounded-xl border border-ink/10 bg-[#f7faff] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-md border border-ink/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-ink/70">
                      {item.type}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {item.company}
                    </p>
                  </div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-ink/15 bg-ink p-6 text-white md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">
            Formations
          </p>
          <ul className="mt-4 space-y-3">
            {formations.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm leading-relaxed text-white/85"
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
