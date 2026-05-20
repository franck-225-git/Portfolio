export default function ProjectsSection({ projects }) {
  return (
    <section id="projets" className="mb-16">
      <div className="mb-7 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-lagoon">
            Realisations
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">
            Projets strategiques
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted">
          Chaque projet est oriente fiabilite metier, reduction des taches
          manuelles et interconnexion des outils.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-ink/15 bg-white p-5 shadow-soft transition hover:-translate-y-1"
          >
            <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-accent to-lagoon" />

            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="font-display text-base">
                  Projet {String(index + 1).padStart(2, "0")}
                </p>
                <span className="rounded-md border border-ink/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ink/70">
                  {project.visibility}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-lagoon">
                {project.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="h-10 w-10 rounded-full border border-ink/15 bg-[#f5f9ff]" />
              <div>
                {project.caseStudyUrl ? (
                  <a
                    href={project.caseStudyUrl}
                    className="rounded-md border border-ink/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink"
                  >
                    Voir etude
                  </a>
                ) : (
                  <span className="rounded-md bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
                    Sous NDA
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
