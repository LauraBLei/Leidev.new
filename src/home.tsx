import { ProjectsSection } from "./Sections/projects";
import { WelcomeSection } from "./Sections/welcome";
import { AboutSection } from "./Sections/about";
import { DevToolsSection } from "./Sections/dev-tools";
import { ContactSection } from "./Sections/contact";

export const HomePage = () => {
  return (
    <div className=" max-w-[1440px] overflow-x-hidden  flex flex-col gap-10 md:gap-20 lg:gap-40 touch-pan-y">
      <section id="welcome" className="h-dvh">
        <WelcomeSection />
      </section>
      <section id="projects" className="pt-20 md:pt-30">
        <ProjectsSection />
      </section>
      <section id="about" className=" pt-20 md:pt-30">
        <AboutSection />
      </section>
      <section id="dev-tools" className=" pt-20 md:pt-30 mb-20 ">
        <DevToolsSection />
      </section>
      <section id="contact" className="pt-20 md:pt-30 mb-20 md:mb-40">
        <ContactSection />
      </section>
    </div>
  );
};
