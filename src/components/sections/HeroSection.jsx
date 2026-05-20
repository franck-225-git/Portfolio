import { useState } from "react";

export default function HeroSection({ profile, stats }) {
  const [imageBroken, setImageBroken] = useState(false);

  return (
    <section className="mb-16 rounded-[2rem] border border-ink/10 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[1.25rem] border border-ink/10 bg-[#f1f6ff]">
            {imageBroken ? (
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#f3f6fc] to-[#e6edf7]">
                <span className="font-display text-lg text-ink/60">
                  Photo profil
                </span>
              </div>
            ) : (
              <img
                src={profile.profileImage}
                alt="Photo de profil"
                className="h-72 w-full object-cover"
                onError={() => setImageBroken(true)}
              />
            )}
          </div>

          <div className="rounded-[1.25rem] border border-ink/10 bg-ink p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/70">
              Profil
            </p>
            <h3 className="mt-3 font-display text-2xl">{profile.role}</h3>
            <p className="mt-1 text-sm text-white/75">{profile.location}</p>
            <p className="mt-4 inline-flex rounded bg-white/15 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white/90">
              {profile.availability}
            </p>
          </div>
        </aside>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
            {profile.yearLabel}
          </p>
          <h1 className="mt-4 max-w-[15ch] font-display text-4xl leading-[1.04] md:text-6xl lg:text-7xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {profile.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {profile.highlights.map((item) => (
              <span
                key={item}
                className="rounded-md border border-ink/15 bg-[#f4f8ff] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink/85"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-md border border-ink/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-ink/10 bg-[#f6f9ff] px-4 py-4"
              >
                <strong className="block font-display text-3xl">
                  {item.value}
                </strong>
                <span className="text-sm text-muted">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
