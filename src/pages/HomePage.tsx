import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { AboutSection } from "../components/sections/about";
import { ContactSection } from "../components/sections/contact";
import { ProjectSection } from "../components/sections/projects";
import { ToolBoxSection } from "../components/sections/toolbox";
import { WelcomeSection } from "../components/sections/welcome";

export const HomePage = () => {
  return (
    <div className="w-full text-MatteBlack">
      <Header />
      <WelcomeSection />
      <ProjectSection />
      <AboutSection />
      <ToolBoxSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
