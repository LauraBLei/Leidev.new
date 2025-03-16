import { Link } from "react-router";
import { useOpen } from "../components/context";

export const ProjectsPage = () => {
  const { toggleOpen } = useOpen();

  return (
    <div className="z-50 flex w-full h-full items-center justify-center text-white">
      <Link onClick={toggleOpen} className="text-white" to="/Home">
        Back
      </Link>
      <p>Projects</p>
    </div>
  );
};
