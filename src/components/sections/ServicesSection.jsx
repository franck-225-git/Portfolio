import GhostNumber from "../common/GhostNumber";
import Reveal from "../common/Reveal";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="scroll-mt-20 py-[88px]">
      <Reveal className="relative mb-9">
        <GhostNumber value="03" className="top-[-52px]" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-bright">
          03 / Expertise
        </p>
        <h2 className="mt-3.5 font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
          Comment je peux vous aider
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-[18px] min-[620px]:grid-cols-2 min-[940px]:grid-cols-4">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            variant={i % 2 === 0 ? "left" : "right"}
            delay={(i % 2) * 90}
          >
            <article className="h-full rounded-[18px] border border-white/[0.08] bg-gradient-to-b from-[#12171f] to-[#0d1119] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/40">
              <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] border border-white/35 bg-white/[0.08] font-display text-[13px] font-bold text-bright">
                {service.num}
              </span>
              <h3 className="mt-[18px] font-display text-[19px] font-semibold leading-[1.3] text-ink">
                {service.title}
              </h3>
              <p className="mt-[11px] text-sm leading-[1.6] text-[#98a2b2]">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-[7px]">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-lg border border-white/10 px-[11px] py-[5px] font-mono text-[11px] text-body"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
