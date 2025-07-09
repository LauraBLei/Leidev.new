import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 2000);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [navigate]);

  const handleLogoClick = () => {
    navigate("/Home");
  };

  return (
    <div className="flex w-full  items-center justify-center h-screen">
      <div className="text-leiDevBlue font-primary flex justify-center items-center gap-2.5 md:gap-11 text-5xl md:text-8xl">
        Lei
        <img
          className="cursor-pointer w-[99px] hover:scale-100 scale-95 transition ease-in-out duration-500 transform [animation:spin_3s_linear_infinite] "
          src="./Logo.png"
          alt=""
          onClick={handleLogoClick}
        />
        Dev
      </div>
    </div>
  );
};
