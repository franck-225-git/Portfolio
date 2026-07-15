import GhostNumber from "../common/GhostNumber";
import Reveal from "../common/Reveal";

export default function SkillsSection({ skillGroups }) {
  return (
    <section id="competences" className="scroll-mt-20 py-[88px]">
      <div className="rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-[#0f141d] to-[#0b0f17] p-[clamp(26px,4vw,48px)]">
        <Reveal className="relative mb-9 flex flex-wrap items-end justify-between gap-5">
          <GhostNumber value="02" className="top-[-38px]" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bright">
              02 / Stack technique
            </p>
            <h2 className="mt-3.5 font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Compétences
            </h2>
          </div>
          <p className="max-w-[36ch] text-[15px] leading-[1.6] text-muted">
            Un socle technique éprouvé en contexte ERP, API et automatisation
            métier.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[940px]:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={(i % 3) * 90}
            >
              <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:border-white/35 hover:bg-white/[0.04]">
                <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bright">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[9px] border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-[#c3ccd9]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
