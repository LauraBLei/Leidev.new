import { AboutOnPhone } from "../components/aboutOnPhone";
import { AboutOnDesktop } from "../components/aboutTabletAndDesktop";

export const AboutSection = () => {
  return (
    <div className="font-primary flex flex-col max-w-[1400px]">
      <h1 className="headline">About Me</h1>

      <div className="block lg:hidden">
        <AboutOnPhone />
      </div>
      <div className="lg:block hidden">
        <AboutOnDesktop />
      </div>
    </div>
  );
};
