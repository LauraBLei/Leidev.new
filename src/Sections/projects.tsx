import { useState } from "react";
import { ProjectCard } from "../components/projectCard";
import { personalProjects } from "../Data/personalProjects";
import { schoolProjects } from "../Data/schoolProject";
import { ImageCarousel } from "../components/carousel";
import { useSearchParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { CommonContext } from "../types/context";

export const ProjectsSection = () => {
  const [project, setProject] = useState("school");
  const school = schoolProjects.projectData;
  const other = personalProjects.projectData;
  const isSchool = project === "school";
  const isOther = project === "other";

  const [searchParams] = useSearchParams();
  const { setProjectModalOpen, setSelectedProject } = useContext(CommonContext);

  useEffect(() => {
    const projectId = searchParams.get("project");

    if (projectId) {
      const matchInSchool = school.find((p) => p.id === projectId);
      const matchInOther = other.find((p) => p.id === projectId);

      if (matchInSchool) {
        setProject("school");
        setSelectedProject(matchInSchool);
        setProjectModalOpen(true);
      } else if (matchInOther) {
        setProject("other");
        setSelectedProject(matchInOther);
        setProjectModalOpen(true);
      }
    }
  }, [searchParams, school, other, setProjectModalOpen, setSelectedProject]);
  return (
    <div className="h-screen flex flex-col font-primary text-Beige gap-9 ">
      <div className="w-full p-2 md:p-5 bg-leiDevBlue text-MatteBlack">
        <h1 className="headline">Projects</h1>
      </div>
      <div className="relative flex rounded-full  justify-between  w-full">
        <div
          id="movingSlider"
          className={`absolute top-0 left-0 w-1/2 h-full rounded-md  bg-leiDevBlue shadow-md transition ${
            isOther ? "translate-x-full" : ""
          }`}
        ></div>
        <button
          className={` py-2 flex-1 cursor-pointer hover-effect ${
            isSchool ? " text-MatteBlack font-semibold" : "text-white"
          }`}
          onClick={() => setProject("school")}
        >
          School Projects
        </button>
        <button
          className={` py-2 flex-1 cursor-pointer hover-effect ${
            isOther ? " text-MatteBlack font-semibold" : "text-white"
          }`}
          onClick={() => setProject("other")}
        >
          Other Projects
        </button>
      </div>
      {isSchool && (
        <div className="md:flex flex-col gap-2 hidden ">
          <h2 className="text-xl">School Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
            {school.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      )}
      {isSchool && (
        <div className="block md:hidden">
          <ImageCarousel projects={school} />
        </div>
      )}
      {isOther && (
        <div className="max-w-[1400px] px-5 hidden md:flex flex-col gap-2">
          <h2 className="text-xl">Other Projects</h2>
          <div className="flex gap-5 overflow-x-auto">
            {other.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      )}
      {isOther && (
        <div className="block md:hidden">
          <ImageCarousel projects={other} />
        </div>
      )}
    </div>
  );
};
