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
      className="w-full h-[320px] cursor-pointer shadow-md hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-full rounded-md overflow-hidden">
        <div className="w-full h-[280px] flex items-center">
          <img
            className="object-cover w-full h-full"
            src={project.image.src || "./placeholder.jpg"}
            alt={project.image.alt || "Image not found"}
          />
        </div>
        <p className="text-center text-lg bg-MatteBlack text-Beige p-2">
          {project.name}
        </p>
      </div>
    </button>
  );
};
