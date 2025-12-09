import { useState } from "react";
import { Project } from "../../types/types";
import { ProjectCard } from "../project";
import { clientProjects } from "../../Data/clientProjects";
import { personalProjects } from "../../Data/personalProjects";
import { schoolProjects } from "../../Data/schoolProject";

type ProjectType = "client" | "personal" | "school";

export const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<ProjectType>("client");

  const getProjects = (): Project[] => {
    switch (activeTab) {
      case "client":
        return clientProjects.projectData;
      case "personal":
        return personalProjects.projectData;
      case "school":
        return schoolProjects.projectData;
    }
  };

  const projects = getProjects();

  return (
    <section id="projects" className="w-full py-20 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="headline mb-10">Projects</h2>
        <div className="flex gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("client")}
            className={`flex-1 text-center  text-Beige hover:bg-leiDevBlue transform duration-300 text-lg md:text-xl rounded-sm shadow-md p-2 cursor-pointer ${
              activeTab === "client"
                ? "bg-leiDevBlue text-Beige"
                : "bg-MatteBlack text-Beige hover:bg-Onyx"
            }`}
          >
            Clients
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex-1 text-center  text-Beige hover:bg-leiDevBlue transform duration-300 text-lg md:text-xl rounded-sm shadow-md p-2 cursor-pointer ${
              activeTab === "personal"
                ? "bg-leiDevBlue text-Beige"
                : "bg-MatteBlack text-Beige hover:bg-Onyx"
            }`}
          >
            Hobby
          </button>
          <button
            onClick={() => setActiveTab("school")}
            className={`flex-1 text-center  text-Beige hover:bg-leiDevBlue transform duration-300 text-lg md:text-xl rounded-sm shadow-md p-2 cursor-pointer ${
              activeTab === "school"
                ? "bg-leiDevBlue text-Beige"
                : "bg-MatteBlack text-Beige hover:bg-Onyx"
            }`}
          >
            School
          </button>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
