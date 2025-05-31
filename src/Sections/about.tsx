import { AboutOnPhone } from "../components/aboutOnPhone";
import { AboutOnDesktop } from "../components/aboutTabletAndDesktop";

export const AboutSection = () => {
  return (
    <div className="font-primary flex flex-col max-w-[1400px]">
      <div className="w-full p-3 bg-leiDevBlue  text-MatteBlack flex justify-between">
        <h1 className="headline">About Me</h1>
      </div>

      <div className="block lg:hidden">
        <AboutOnPhone />
      </div>
      <div className="lg:block hidden">
        <AboutOnDesktop />
      </div>
    </div>
  );
};
