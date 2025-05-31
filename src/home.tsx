import { useEffect, useState, useContext } from "react";
import { ProjectsSection } from "./Sections/projects";
import { WelcomeSection } from "./Sections/welcome";
import { AboutSection } from "./Sections/about";
import { DevToolsSection } from "./Sections/dev-tools";
import { CommonContext, CommonContextType } from "./types/context";

const sections = ["welcome", "projects", "about", "dev-tools", "contact"];

export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { projectModalOpen } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    let canScroll = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = (event: WheelEvent) => {
      if (!canScroll || projectModalOpen) return;

      canScroll = false;

      if (event.deltaY > 0) {
        setIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setIndex((prev) => Math.max(prev - 1, 0));
      }

      timeoutId = setTimeout(() => {
        canScroll = true;
      }, 100);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [projectModalOpen]);

  useEffect(() => {
    document
      .getElementById(sections[index])
      ?.scrollIntoView({ behavior: "smooth" });
  }, [index]);

  return (
    <div className="h-screen max-w-[1440px] overflow-hidden">
      <section id="welcome" className="h-screen">
        <WelcomeSection />
      </section>
      <section id="projects" className="h-screen pt-20 md:pt-30">
        <ProjectsSection />
      </section>
      <section id="about" className="h-screen pt-20 md:pt-30">
        <AboutSection />
      </section>
      <section id="dev-tools" className="h-screen pt-20 md:pt-30">
        <DevToolsSection />
      </section>
    </div>
  );
};
