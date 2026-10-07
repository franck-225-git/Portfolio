export default function ServicesSection({ services }) {
  return (
    <section id="services" className="scroll-mt-20 py-[88px]">
      <h2 className="max-w-[20ch] font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
        Comment je peux vous aider
      </h2>

      <ul className="mt-12 grid gap-x-10 gap-y-9 min-[620px]:grid-cols-2 min-[940px]:grid-cols-4">
        {services.map((service) => (
          <li key={service.title} className="border-t border-white/[0.14] pt-5">
            <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-body">
              {service.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px] text-muted">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
