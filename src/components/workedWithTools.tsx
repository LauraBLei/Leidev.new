import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiVite, SiVercel, SiNextdotjs } from "react-icons/si";

export const WorkedWithTools = () => {
  return (
    <div className=" flex flex-wrap max-w-[900px] gap-7 justify-center">
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoJavascript className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Javascript</p>
      </a>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiNextdotjs className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Next.js</p>
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoTypescript className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Typescript</p>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoCss3 className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>CSS</p>
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoTailwindCss className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Tailwind CSS</p>
      </a>
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoReact className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>React</p>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoHtml5 className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>HTML</p>
      </a>
      <a
        href="https://nodejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <BiLogoNodejs className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Node.js</p>
      </a>
      <a
        href="https://git-scm.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <FaGitAlt className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Git</p>
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <FaGithub className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>GitHub</p>
      </a>
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiVite className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Vite</p>
      </a>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <SiVercel className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Vercel</p>
      </a>
      <a
        href="https://supabase.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm md:text-lg text-Beige gap-2 hover-effect hover:text-leiDevBlue"
      >
        <RiSupabaseFill className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        <p>Supabase</p>
      </a>
    </div>
  );
};
