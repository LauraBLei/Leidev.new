import { useEffect, useState } from "react";
import { ProjectsSection } from "./Sections/projects";
import { WelcomeSection } from "./Sections/welcome";
import { AboutSection } from "./Sections/about";
import { DevToolsSection } from "./Sections/dev-tools";
import { ContactSection } from "./Sections/contact";

export const HomePage = () => {
  const sections = ["welcome", "projects", "about", "dev-tools", "contact"];
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
  }, [index, sections]);

  return (
    <div className="h-screen">
      <section id="welcome" className="h-screen">
        <WelcomeSection />
      </section>
      <section id="projects" className="h-screen pt-10">
        <ProjectsSection />
      </section>
      <section id="about" className="h-screen pt-10">
        <AboutSection />
      </section>
      <section id="dev-tools" className="h-screen pt-10">
        <DevToolsSection />
      </section>
      <section id="contact" className="h-screen pt-10">
        <ContactSection />
      </section>
    </div>
  );
};
