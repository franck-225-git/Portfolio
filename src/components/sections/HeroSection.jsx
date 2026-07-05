import { useState } from "react";

export default function HeroSection({ profile, stats }) {
  const [imageBroken, setImageBroken] = useState(false);

  return (
    <section className="mb-16 rounded-[1.75rem] border border-ink/10 bg-white/95 p-6 shadow-premium md:p-9 lg:p-11">
      <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[1.1rem] border border-accent/25 shadow-sm">
            {imageBroken ? (
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#f3f0e8] to-[#e9e2d1]">
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

          <div className="relative overflow-hidden rounded-[1.1rem] border border-ink/10 bg-ink p-5 text-white">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-lagoon" />
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
              Profil
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug">
              {profile.role}
            </h3>
            <p className="mt-2 text-sm text-white/60">{profile.location}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accentLight/40 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-accentLight">
              <span className="h-1.5 w-1.5 rounded-full bg-accentLight" />
              {profile.availability}
            </p>
          </div>
        </aside>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lagoon">
              {profile.yearLabel}
            </p>
          </div>
          <h1 className="mt-5 max-w-[16ch] font-display text-4xl leading-[1.05] text-ink md:text-6xl lg:text-[4.4rem]">
            {profile.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {profile.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {profile.highlights.map((item) => (
              <span
                key={item}
                className="rounded-md border border-ink/12 bg-sand px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-md border border-ink/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:border-ink hover:-translate-y-0.5"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {stats.map((item) => (
              <article key={item.label} className="bg-white px-5 py-5">
                <strong className="block font-display text-3xl text-ink">
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
