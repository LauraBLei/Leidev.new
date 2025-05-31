import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <div className="font-primary text-Beige">
      <div className=" max-w-[1400px] flex flex-wrap  md:justify-evenly gap-10 mt-5">
        <a
          target="_blanc"
          href="https://www.linkedin.com/in/laura-lei-860190268/"
          className="flex items-center gap-5 text-md md:text-lg hover-effect"
        >
          <FaLinkedin className="text-leiDevBlue w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
          <p>LinkedIn</p>
        </a>
        <a
          target="_blanc"
          href="https://github.com/LauraBLei"
          className="flex items-center gap-5 text-md md:text-lg hover-effect"
        >
          <FaGithub className="text-leiDevBlue w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
          <p>Github</p>
        </a>
        <a
          target="_blanc"
          href="mailto:lei.dev@outlook.com"
          className="flex items-center gap-5 text-md md:text-lg hover-effect"
        >
          <FiMail className="text-leiDevBlue w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
          <p>lei.dev@outlook.com</p>
        </a>
      </div>
    </div>
  );
};
