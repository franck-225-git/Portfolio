import GhostNumber from "../common/GhostNumber";
import Reveal from "../common/Reveal";

export default function AboutSection({ profile, values }) {
  return (
    <section id="a-propos" className="scroll-mt-20 py-[88px]">
      <Reveal className="grid grid-cols-1 gap-6 rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-[#0f141d] to-[#0b0f17] p-[clamp(26px,4vw,48px)] min-[860px]:grid-cols-[1.5fr_0.7fr]">
        <div className="relative">
          <GhostNumber value="04" size="sm" className="top-[-30px]" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bright">
            04 / À propos
          </p>
          <h2 className="mt-3.5 max-w-[20ch] font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {profile.aboutTitle}
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-[1.65] text-body">
            {profile.aboutDescription}
          </p>
        </div>

        <aside className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-[22px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bright">
            Ma valeur ajoutée
          </p>
          <ul className="mt-4 flex list-none flex-col gap-[13px] p-0">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-start gap-[11px] text-[14.5px] leading-[1.5] text-[#c3ccd9]"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bright" />
                {value}
              </li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </section>
  );
}
