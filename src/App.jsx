import { useMemo } from "react";
import BackgroundDecor from "./components/layout/BackgroundDecor";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import SkillsSection from "./components/sections/SkillsSection";
import {
  navLinks,
  profile,
  projects,
  services,
  skillGroups,
  socialLinks,
  stats,
  values,
} from "./data/siteContent";

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-night">
      <BackgroundDecor />

      <Header
        navLinks={navLinks}
        brandName={profile.brandName}
        initial={profile.initial}
      />

      <main id="top" className="relative z-10 mx-auto w-[min(1180px,92vw)]">
        <HeroSection profile={profile} stats={stats} />
        <ProjectsSection projects={projects} />
        <SkillsSection skillGroups={skillGroups} />
        <ServicesSection services={services} />
        <AboutSection profile={profile} values={values} />
        <ContactSection email={profile.contactEmail} />
      </main>

      <Footer
        year={year}
        brandName={profile.brandName}
        socialLinks={socialLinks}
      />
    </div>
  );
}
