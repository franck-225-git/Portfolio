function Stack({ items }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px] text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Le câble : source ─────▸ cible. La flèche porte le sens du flux. */
function Flow({ from, to }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13.5px] text-ink">
      <span>{from}</span>
      <span className="sr-only">vers</span>
      <span
        aria-hidden
        className="relative h-[1.5px] min-w-[36px] flex-1 bg-signal"
      >
        <span className="absolute -top-[3px] right-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-signal" />
      </span>
      <span>{to}</span>
    </p>
  );
}

export default function ProjectsSection({ integrations, applications }) {
  return (
    <section id="projets" className="scroll-mt-20 py-[88px]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-[18ch] font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
          Des systèmes qui se parlent enfin
        </h2>
        <p className="max-w-[40ch] text-[15px] leading-[1.6] text-muted">
          Chaque projet supprime une saisie manuelle ou fiabilise une donnée
          métier. Ils sont tous livrés sous NDA : le code n'est pas public.
        </p>
      </div>

      <h3 className="mt-14 font-display text-lg font-medium text-ink">
        Flux &amp; intégrations
      </h3>

      <ul className="mt-5 border-t border-white/[0.08]">
        {integrations.map((item) => (
          <li
            key={item.name}
            className="grid gap-x-10 gap-y-4 border-b border-white/[0.08] py-7 min-[820px]:grid-cols-[minmax(0,20rem)_1fr]"
          >
            <div>
              <h4 className="font-display text-[19px] font-semibold leading-tight text-ink">
                {item.name}
              </h4>
              <p className="mt-1.5 text-[13.5px] text-muted">{item.client}</p>
              <div className="mt-4 max-w-[20rem]">
                <Flow from={item.from} to={item.to} />
              </div>
            </div>
            <div>
              <p className="max-w-[62ch] text-[15px] leading-[1.65] text-body">
                {item.description}
              </p>
              <Stack items={item.stack} />
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-display text-lg font-medium text-ink">
        Applications métier
      </h3>

      <ul className="mt-5 grid gap-x-10 gap-y-8 min-[620px]:grid-cols-2 min-[940px]:grid-cols-3">
        {applications.map((item) => (
          <li key={item.name} className="border-t border-white/[0.14] pt-5">
            <h4 className="font-display text-[17px] font-semibold leading-tight text-ink">
              {item.name}
            </h4>
            <p className="mt-1.5 text-[13.5px] text-muted">{item.client}</p>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-body">
              {item.description}
            </p>
            <Stack items={item.stack} />
          </li>
        ))}
      </ul>
    </section>
  );
}
