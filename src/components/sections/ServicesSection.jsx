export default function ServicesSection({ services }) {
  return (
    <section id="services" className="mb-16">
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
            Expertise
          </p>
        </div>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
          Services proposes
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/20"
          >
            <p className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 font-display text-xs text-accent">
              0{index + 1}
            </p>
            <h3 className="font-display text-2xl leading-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.points.map((point) => (
                <span
                  key={point}
                  className="rounded-md border border-ink/10 bg-sand px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink/70"
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
