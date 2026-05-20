export default function ServicesSection({ services }) {
  return (
    <section id="services" className="mb-16">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
          Expertise
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">
          Services proposes
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-2xl border border-ink/15 bg-white/90 p-5 shadow-soft transition hover:-translate-y-1"
          >
            <p className="mb-4 inline-flex rounded bg-ink px-2 py-1 font-display text-xs text-white">
              0{index + 1}
            </p>
            <h3 className="font-display text-2xl leading-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.points.map((point) => (
                <span
                  key={point}
                  className="rounded-md border border-ink/10 bg-[#f5f8ff] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink/75"
                >
                  {point}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
