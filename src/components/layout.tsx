import { Outlet } from "react-router";
import BinaryBackground from "./background";
import { useOpen } from "./context";

export const Layout = () => {
  const { isOpen } = useOpen();
  return (
    <div className="w-full h-screen flex items-center justify-center z-0">
      <BinaryBackground />
      <div
        open={isOpen ? "true" : undefined}
        className="group w-full h-[500px] relative"
      >
        <div className="h-full w-full  bg-[linear-gradient(178deg,_rgba(0,0,0,0)_1.01%,_#000_29.97%,_#000_68.58%,_rgba(0,0,0,0)_97.54%)] ">
          <Outlet />
          <div className="absolute h-full w-full text-white bg-black transition-opacity duration-1000 group-open:opacity-100 opacity-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
