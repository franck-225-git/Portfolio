import { useState } from "react";
import Reveal from "../common/Reveal";

export default function HeroSection({ profile, stats }) {
  const [imageBroken, setImageBroken] = useState(false);
  const marqueeText = `${profile.highlights.join("   ·   ")}   ·   `;

  return (
    <section className="pb-[84px] pt-[72px]">
      <Reveal className="mb-[30px] flex items-center gap-3.5">
        <span className="h-[7px] w-[7px] rounded-full bg-bright shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          {profile.yearLabel} — {profile.location}
        </span>
      </Reveal>

      <div className="grid grid-cols-1 items-center gap-[52px] min-[940px]:grid-cols-[1.35fr_0.85fr]">
        <div>
          <Reveal variant="left">
            <h1 className="max-w-[15ch] font-display text-[clamp(38px,6.4vw,74px)] font-semibold leading-[1.03] tracking-[-0.02em]">
              <span className="text-ink">{profile.heroTitleLines[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-[#f4f6fa] to-[#9aa4b4] bg-clip-text text-transparent">
                {profile.heroTitleLines[1]}
              </span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-[26px] max-w-[56ch] text-[clamp(16px,1.7vw,19px)] leading-[1.62] text-body">
              {profile.heroDescription}
            </p>
          </Reveal>

          <Reveal className="mt-[38px] flex flex-wrap gap-[13px]">
            <a
              href="#projets"
              className="inline-flex items-center gap-2.5 rounded-xl bg-bright px-6 py-3.5 font-display text-[15px] font-semibold text-night transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Voir les projets →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-white/16 px-6 py-3.5 font-display text-[15px] font-medium text-ink transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Me contacter
            </a>
          </Reveal>
        </div>

        <Reveal variant="right" className="flex flex-col gap-4">
          <div className="rounded-[22px] bg-gradient-to-br from-white/[0.28] via-white/20 to-white/[0.04] p-px">
            <div className="overflow-hidden rounded-[21px] bg-[#10151e]">
              {imageBroken ? (
                <div className="flex h-[360px] items-center justify-center bg-gradient-to-br from-[#12171f] to-[#0d1119]">
                  <span className="font-display text-lg text-muted">
                    Photo profil
                  </span>
                </div>
              ) : (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  onError={() => setImageBroken(true)}
                  className="block h-[360px] w-full object-cover object-top grayscale contrast-[1.06] transition-[filter] duration-500 hover:grayscale-0 hover:contrast-100"
                />
              )}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-gradient-to-b from-[#121824] to-[#0e131c] p-[22px]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/55 to-white/40" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Profil
            </p>
            <h3 className="mt-3 font-display text-[19px] font-medium leading-[1.35] text-ink">
              {profile.role}
            </h3>
            <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/[0.22] bg-white/5 px-3.5 py-2">
              <span className="h-[7px] w-[7px] rounded-full bg-bright shadow-[0_0_5px_rgba(255,255,255,0.4)]" />
              <span className="text-[12.5px] text-[#d3d9e2]">
                {profile.availability}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.06]">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-panel px-6 py-[26px]">
            <strong className="bg-gradient-to-br from-[#f4f6fa] to-[#aab2c0] bg-clip-text font-display text-[44px] font-bold leading-none text-transparent">
              {stat.value}
            </strong>
            <span className="mt-2.5 block text-sm text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-[72px] ml-[calc(50%-50vw)] w-screen overflow-hidden border-y border-white/[0.07] bg-white/[0.015] py-[19px]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="whitespace-nowrap pr-16 font-mono text-[13px] uppercase tracking-[0.3em] text-faint"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
