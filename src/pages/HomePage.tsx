import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { LineDetail } from "../components/lineDetail";
import { AboutSection } from "../components/sections/about";
import { ContactSection } from "../components/sections/contact";
import { ProjectSection } from "../components/sections/projects";
import { ToolBoxSection } from "../components/sections/toolbox";
import { WelcomeSection } from "../components/sections/welcome";

export const HomePage = () => {
  return (
    <div className="w-full h-screen text-MatteBlack flex flex-col items-center">
      <Header />
      <WelcomeSection />
      <div className="flex flex-1 max-w-[1400px] px-5">
        <LineDetail />
        <div className="flex-1 ">
          <ProjectSection />
          <AboutSection />
          <ToolBoxSection />
          <ContactSection />
        </div>
        <LineDetail />
      </div>
      <Footer />
    </div>
  );
};
