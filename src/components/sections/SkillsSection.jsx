export default function SkillsSection({ skillGroups }) {
  return (
    <section id="competences" className="scroll-mt-20 py-[88px]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.05] tracking-[-0.02em]">
          Compétences
        </h2>
        <p className="max-w-[38ch] text-[15px] leading-[1.6] text-muted">
          Un socle éprouvé en intégration d'API, ERP, support applicatif et
          automatisation métier.
        </p>
      </div>

      <dl className="mt-12 grid gap-x-10 gap-y-9 min-[620px]:grid-cols-2 min-[940px]:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="border-t border-white/[0.14] pt-5">
            <dt className="font-display text-[15px] font-medium text-ink">
              {group.category}
            </dt>
            <dd className="m-0 mt-3">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12.5px] text-body">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
