import { useContext } from "react";
import { Project } from "../types/types";
import { CommonContext } from "../types/context";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { setSelectedProject, setProjectModalOpen } = useContext(CommonContext);
  return (
    <button
      onClick={() => {
        if (project) {
          setSelectedProject(project);
        }
        setProjectModalOpen(true);
      }}
      className="hover-effect"
      id={project.id}
    >
      <div className=" w-full h-[280px] rounded-md overflow-hidden flex items-center">
        <img
          className="object-cover w-full h-full"
          src={
            project.images.length ? project.images[0].src : "./placeholder.jpg"
          }
          alt={project.images.length ? project.images[0].alt : "Text not found"}
        />
      </div>
      <p className="text-center text-lg">{project.name}</p>
    </button>
  );
};
