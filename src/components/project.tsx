import { Project, TOOLS } from "../types/types";

export const ProjectCard = (project: Project) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="flex-1 flex flex-col gap-2">
        <div className="overflow-hidden  shadow-md max-h-[300px]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-5 ">
          <a
            href={project["livepage-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button"
          >
            Live
          </a>
          <a
            href={project["repo-link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="font-semibold text-xl md:text-2xl">{project.name}</h2>
        <p className="shadow-inner p-2">{project.text}</p>
        <div className="flex gap-2 border-y border-MatteBlack py-2 flex-wrap items-center">
          <p className="font-semibold">ToolBox:</p>
          {project["web development tools"].map((tool) => {
            const toolData = TOOLS[tool];
            return (
              <div key={tool} title={toolData.name}>
                <img
                  src={toolData.src}
                  alt={toolData.name}
                  className="w-6 h-6"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
