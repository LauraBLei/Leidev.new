import { ProjectCard } from "../components/projectCard";
import { personalProjects } from "../Data/personalProjects";
import { schoolProjects } from "../Data/schoolProject";

export const ProjectsSection = () => {
  const school = schoolProjects.projectData;
  const other = personalProjects.projectData;
  return (
    <div className="h-screen flex flex-col  font-primary text-Beige gap-9 ">
      <div className="w-full p-5 bg-leiDevBlue text-MatteBlack">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <div className="max-w-[1400px] px-5 flex flex-col gap-2">
        <h2 className="text-xl">School Projects</h2>
        <div className="flex overflow-x-auto gap-5">
          {school.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
      <div className="max-w-[1400px] px-5 flex flex-col gap-2">
        <h2 className="text-xl">Other Projects</h2>
        <div className="flex gap-5 overflow-x-auto">
          {other.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};
