import { SiGreensock, SiExpo, SiVuedotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import { RiNavigationLine } from "react-icons/ri";

export const OnMyRadarTools = () => {
  return (
    <div className="flex flex-wrap max-w-[900px] gap-7 justify-center">
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiVuedotjs className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Vue.js</p>
      </a>
      <a
        href="https://greensock.com/gsap/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiGreensock className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>GSAP</p>
      </a>
      <a
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <TbBrandFramerMotion className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Framer Motion</p>
      </a>
      <a
        href="https://reactnative.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <FaReact className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>React Native</p>
      </a>
      <a
        href="https://expo.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiExpo className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Expo</p>
      </a>
      <a
        href="https://reactnavigation.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <RiNavigationLine className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>React Navigation</p>
      </a>
      <a
        href="https://react-native-async-storage.github.io/async-storage/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <MdOutlineStorage className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>AsyncStorage</p>
      </a>
    </div>
  );
};
