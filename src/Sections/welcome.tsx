import { ChevronDownIcon } from "lucide-react";
import { ContactSection } from "./contact";

export const WelcomeSection = () => {
  return (
    <div className="font-primary text-leiDevBlue h-dvh flex flex-col justify-between gap-7  max-w-[1400x] p-5">
      <div className="flex flex-col gap-5 md:gap-10 h-full justify-center">
        <h1 className="text-2xl md:text-4xl md:text-6xl ">Welcome!</h1>
        <p className="text-Beige text-4xl md:text-7xl lg:text-8xl">
          I'm Laura Lei
        </p>
        <p className="text-base md:text-2xl">
          Thank you for visiting my portfolio, and I hope you enjoy exploring my
          work as much as I enjoy creating it!
        </p>
        <ContactSection />
      </div>
      <div>
        <p className="text-center text-base md:text-2xl">
          Scroll down to view more!
        </p>
        <ChevronDownIcon className="w-full flex place-self-center" size={50} />
      </div>
    </div>
  );
};
