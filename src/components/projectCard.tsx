import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="hover-effect" id={project.id}>
      <div className="max-w-[350px] rounded-md max-h-[250px] overflow-hidden flex items-center">
        <img
          className="object-cover"
          src={
            project.images.length ? project.images[0].src : "./placeholder.jpg"
          }
          alt={project.images.length ? project.images[0].alt : "Text not found"}
        />
      </div>
      <p className="text-center">{project.name}</p>
    </div>
  );
};
