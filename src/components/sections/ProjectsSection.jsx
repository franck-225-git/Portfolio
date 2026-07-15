import GhostNumber from "../common/GhostNumber";
import Reveal from "../common/Reveal";

const VARIANTS = ["left", "up", "right"];

export default function ProjectsSection({ projects }) {
  return (
    <section id="projets" className="scroll-mt-20 py-[88px]">
      <Reveal className="relative mb-[38px] flex flex-wrap items-end justify-between gap-5">
        <GhostNumber value="01" className="top-[-52px]" />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bright">
            01 / Réalisations
          </p>
          <h2 className="mt-3.5 font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Projets livrés en production
          </h2>
        </div>
        <p className="max-w-[38ch] text-[15px] leading-[1.6] text-muted">
          Chaque projet vise un objectif concret : fiabiliser la donnée métier,
          supprimer les tâches manuelles et faire dialoguer des systèmes qui ne
          se parlaient pas.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-[18px] min-[620px]:grid-cols-2 min-[940px]:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            variant={VARIANTS[i % 3]}
            delay={(i % 3) * 90}
          >
            <article className="group flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[18px] border border-white/[0.08] bg-gradient-to-b from-[#12171f] to-[#0d1119] p-6 transition duration-300 hover:-translate-y-[5px] hover:border-white/40 hover:shadow-card">
              <div>
                <div className="mb-[18px] flex items-center justify-between gap-2.5">
                  <span className="font-mono text-[13px] text-dim">
                    {project.num}
                  </span>
                  <span className="rounded-full border border-white/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#7f8a9c]">
                    {project.visibility}
                  </span>
                </div>
                <p className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-bright">
                  {project.tag}
                </p>
                <h3 className="mt-[11px] font-display text-xl font-semibold leading-[1.28] text-ink">
                  {project.title}
                </h3>
                <p className="mt-[13px] text-sm leading-[1.62] text-[#98a2b2]">
                  {project.description}
                </p>
              </div>

              <div className="mt-[22px] flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="inline-flex items-center gap-[7px] font-mono text-[11px] uppercase tracking-[0.06em] text-[#7f8a9c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-bright" />
                  Sous NDA
                </span>
                <span className="font-display text-[19px] leading-none text-dim transition-[transform,color] duration-300 group-hover:translate-x-1.5 group-hover:text-white">
                  →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
