import { Link } from "react-router";

export const IntroPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="text-leiDevBlue font-primary flex justify-center items-center gap-2.5 md:gap-11 text-5xl md:text-8xl">
        Lei{" "}
        <Link to="/Home">
          <img
            className="cursor-pointer w-[99px] hover:scale-100 scale-95 transition ease-in-out duration-500 transform hover:hover:[animation:spin_3s_linear_infinite] [animation:pulse_2s_linear_infinite]"
            src="./Logo.png"
            alt=""
          />
        </Link>{" "}
        Dev
      </div>
    </div>
  );
};
