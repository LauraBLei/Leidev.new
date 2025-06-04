import { useContext } from "react";
import { Project } from "../types/types";
import { CommonContext } from "../types/context";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { setSelectedProject, setProjectModalOpen } = useContext(CommonContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (project) {
      setSelectedProject(project);
      setProjectModalOpen(true);
      navigate(`?project=${project.id}`, { replace: true });
    }
  };

  return (
    <button
      onClick={handleClick}
      id={project.id}
      className="group perspective w-full h-[320px] cursor-pointer"
    >
      <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-md overflow-hidden">
          <div className="w-full h-[280px] flex items-center">
            <img
              className="object-cover w-full h-full"
              src={project.image.src || "./placeholder.jpg"}
              alt={project.image.alt || "Image not found"}
            />
          </div>
          <p className="text-center text-lg">{project.name}</p>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-leiDevBlue text-MatteBlack font-semibold rounded-md p-4 flex items-center justify-center text-center">
          <p className="md:text-sm text-left lg:text-base">
            {project.shortText}
          </p>
        </div>
      </div>
    </button>
  );
};
