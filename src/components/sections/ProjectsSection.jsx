export default function ProjectsSection({ projects }) {
  return (
    <section id="projets" className="mb-16">
      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-lagoon">
              Realisations
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            Projets strategiques
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Chaque projet est oriente fiabilite metier, reduction des taches
          manuelles et interconnexion des outils.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/20"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-ink via-accent to-lagoon" />

            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="font-display text-sm text-ink/50">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="rounded-md border border-ink/12 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ink/60">
                  {project.visibility}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-lagoon">
                {project.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-snug text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-ink/8 pt-4">
              {project.caseStudyUrl ? (
                <a
                  href={project.caseStudyUrl}
                  className="rounded-md border border-ink/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink transition hover:border-ink"
                >
                  Voir etude
                </a>
              ) : (
                <span className="rounded-md bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
                  Sous NDA
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
