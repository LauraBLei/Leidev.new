import { useEffect, useState } from "react";
import { ProjectsSection } from "./Sections/projects";
import { WelcomeSection } from "./Sections/welcome";
import { AboutSection } from "./Sections/about";
import { DevToolsSection } from "./Sections/dev-tools";

const sections = ["welcome", "projects", "about", "dev-tools", "contact"];

export const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    document
      .getElementById(sections[index])
      ?.scrollIntoView({ behavior: "smooth" });
  }, [index]);

  return (
    <div className="h-screen max-w-[1440px]">
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
