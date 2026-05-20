import { useMemo, useState } from "react";
import BackgroundDecor from "./components/layout/BackgroundDecor";
import Footer from "./components/layout/Footer";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import SkillsSection from "./components/sections/SkillsSection";
import {
  experiences,
  formations,
  profile,
  projects,
  services,
  skillGroups,
  socialLinks,
  stats,
} from "./data/siteContent";

const STEPS = [
  { label: "Accueil" },
  { label: "Projets" },
  { label: "Competences" },
  { label: "Parcours" },
  { label: "Services" },
  { label: "A propos" },
  { label: "Contact" },
];

export default function App() {
  const [step, setStep] = useState(0);
  const year = useMemo(() => new Date().getFullYear(), []);

  const pages = [
    <HeroSection key="hero" profile={profile} stats={stats} />,
    <ProjectsSection key="projects" projects={projects} />,
    <SkillsSection key="skills" skillGroups={skillGroups} />,
    <ExperienceSection
      key="exp"
      experiences={experiences}
      formations={formations}
    />,
    <ServicesSection key="services" services={services} />,
    <AboutSection key="about" profile={profile} />,
    <ContactSection key="contact" email={profile.contactEmail} />,
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-ink">
      <BackgroundDecor />

      {/* ── Top step nav ── */}
      <header className="sticky top-0 z-30 border-b border-ink/8 bg-white/90 backdrop-blur-md">
        <div className="mx-auto w-[min(1240px,94vw)] py-3">
          {/* Desktop : nom + labels inline */}
          <div className="hidden items-center justify-between gap-4 md:flex">
            <span className="shrink-0 font-display text-xs font-bold tracking-[0.16em] text-ink">
              {profile.name}
            </span>
            <nav className="no-scrollbar flex items-center gap-0.5 overflow-x-auto">
              {STEPS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setStep(i)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] transition ${
                    i === step
                      ? "bg-ink text-white"
                      : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile : nom centré + step actif + dots */}
          <div className="flex flex-col items-center gap-2 md:hidden">
            <div className="flex w-full items-center justify-between">
              <span className="font-display text-[11px] font-bold tracking-[0.14em] text-ink/50">
                {STEPS[step].label}
              </span>
              <span className="font-display text-[11px] font-bold tracking-[0.14em] text-ink">
                {profile.name.split(" ").slice(-1)[0]}
              </span>
              <span className="text-[11px] font-bold text-ink/40">
                {step + 1} / {STEPS.length}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === step ? "w-5 bg-ink" : "w-1 bg-ink/20"
                  }`}
                  aria-label={STEPS[i].label}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Page content (key triggers animate-rise on change) ── */}
      <main
        key={step}
        className="mx-auto w-[min(1240px,94vw)] flex-1 animate-rise py-10 md:py-14"
      >
        {pages[step]}
      </main>

      {/* ── Bottom prev / next ── */}
      <div className="sticky bottom-0 z-20 border-t border-ink/8 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1240px,94vw)] items-center justify-between py-3">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="rounded-full border border-ink/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-ink/70 transition disabled:pointer-events-none disabled:opacity-25 hover:bg-ink hover:text-white"
          >
            ← Precedent
          </button>

          {/* dot indicators */}
          <div className="flex items-center gap-1.5">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={STEPS[i].label}
              />
            ))}
          </div>

          <button
            onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            disabled={step === STEPS.length - 1}
            className="rounded-full border border-ink/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-ink/70 transition disabled:pointer-events-none disabled:opacity-25 hover:bg-ink hover:text-white"
          >
            Suivant →
          </button>
        </div>
      </div>

      {step === STEPS.length - 1 && (
        <Footer year={year} name={profile.name} socialLinks={socialLinks} />
      )}
    </div>
  );
}
