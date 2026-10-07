import { useState } from "react";

// Un seul moment orchestré : le hero se pose au chargement.
const step = (i) => ({ animationDelay: `${i * 90}ms` });

export default function HeroSection({ profile, stats }) {
  const [imageBroken, setImageBroken] = useState(false);

  return (
    <section className="pb-[84px] pt-[72px]">
      <p className="enter mb-[30px] font-mono text-xs tracking-[0.18em] text-muted" style={step(0)}>
        {profile.location}
      </p>

      <div className="grid grid-cols-1 items-center gap-[52px] min-[940px]:grid-cols-[1.35fr_0.85fr]">
        <div>
          <h1
            className="enter max-w-[15ch] font-display text-[clamp(38px,6.4vw,74px)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink"
            style={step(1)}
          >
            {profile.heroTitleLines[0]}
            <br />
            {profile.heroTitleLines[1]}
          </h1>

          <p
            className="enter mt-[26px] max-w-[56ch] text-[clamp(16px,1.7vw,19px)] leading-[1.62] text-body"
            style={step(2)}
          >
            {profile.heroDescription}
          </p>

          <div className="enter mt-[38px] flex flex-wrap gap-[13px]" style={step(3)}>
            <a
              href="#projets"
              className="inline-flex items-center rounded-xl bg-bright px-6 py-3.5 font-display text-[15px] font-semibold text-night transition hover:bg-white"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-white/16 px-6 py-3.5 font-display text-[15px] font-medium text-ink transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="enter flex flex-col gap-4" style={step(2)}>
          <div className="overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#10151e]">
            {imageBroken ? (
              <div className="flex h-[360px] items-center justify-center">
                <span className="font-display text-lg text-muted">
                  Photo de profil
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

          <div className="rounded-[18px] border border-white/[0.08] bg-panel p-[22px]">
            <h2 className="font-display text-[19px] font-medium leading-[1.35] text-ink">
              {profile.role}
            </h2>
            <p className="mt-4 flex items-center gap-2.5 text-[13px] text-body">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-signal" />
              {profile.availability}
            </p>
          </div>
        </div>
      </div>

      <dl className="enter mt-14 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-white/[0.08] pt-8 min-[620px]:grid-cols-3" style={step(4)}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="m-0">
              <strong className="block font-display text-[44px] font-bold leading-none text-ink">
                {stat.value}
              </strong>
              <span className="mt-2.5 block max-w-[24ch] text-sm text-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
