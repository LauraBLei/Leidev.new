import { Link } from "react-router";
import { useOpen } from "../components/context";

export const NavPage = () => {
  const { toggleOpen } = useOpen();

  return (
    <div className="z-50 flex w-full h-full items-center justify-center">
      <h1 className="text-white">Nav</h1>
      <Link onClick={toggleOpen} className="text-white" to="/Projects">
        To Projects
      </Link>
      <Link className="text-white" to="/About">
        To about
      </Link>
    </div>
  );
};
