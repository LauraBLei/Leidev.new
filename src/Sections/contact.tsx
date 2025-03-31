import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <div className="font-primary text-Beige">
      <div className="w-full p-5 mb-12 bg-leiDevBlue text-MatteBlack">
        <h1 className="text-2xl">Dev-Tools</h1>
      </div>
      <div className="px-5 max-w-[1400px] flex flex-col gap-10">
        <a
          target="_blanc"
          href="https://www.linkedin.com/in/laura-lei-860190268/"
          className="flex items-center gap-5 text-lg"
        >
          <FaLinkedin className="text-leiDevBlue w-[35px] h-[35px]" />
          <p>Linked In</p>
        </a>
        <a
          target="_blanc"
          href="https://github.com/LauraBLei"
          className="flex items-center gap-5 text-lg"
        >
          <FaGithub className="text-leiDevBlue w-[35px] h-[35px]" />
          <p>Github</p>
        </a>
        <a
          target="_blanc"
          href="mailto:lei.dev@outlook.com"
          className="flex items-center gap-5 text-lg"
        >
          <FiMail className="text-leiDevBlue w-[35px] h-[35px]" />
          <p>lei.dev@outlook.com</p>
        </a>
      </div>
    </div>
  );
};
