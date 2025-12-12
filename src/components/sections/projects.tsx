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
    <section id="projects" className="w-full py-20 flex justify-center">
      <div className="section">
        <h2 className="headline">Projects</h2>
        <div>
          <h3 className="text-base md:text-lg lg:text-2xl font-semibold mb-6 text-leiDevBlue">
            Currently working on:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-Beige rounded-lg p-8 shadow-lg">
            {/* Project Image */}
            <div className="overflow-hidden  shadow-md h-64 md:h-80 bg-MatteBlack flex items-center justify-center">
              <div className="w-full h-full bg-linear-to-br from-MatteBlack to-Onyx flex items-center justify-center">
                <img src="/images/regncon2024.jpeg" alt="regncon logo" />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center gap-4">
              <div>
                <h4 className="text-base md:text-lg lg:text-2xl font-bold  mb-2">
                  Regncon
                </h4>
                <p className="text-leiDevBlue font-semibold text-sm mb-3">
                  In Progress
                </p>
              </div>
              <p className=" leading-relaxed">
                A collaborative group project where I'm stepping outside my
                comfort zone as a frontend developer by diving into Go and
                Templ. Working alongside experienced developers while learning
                new technologies has been both challenging and rewarding. This
                project has pushed my technical boundaries and deepened my
                understanding of full-stack development. I'm excited to see how
                this journey continues and the skills I'll gain along the way.
              </p>
              <div className="flex gap-3 pt-4">
                <a
                  href="https://www.regncon.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* 3D Showcase Section */}
          <div className="mt-8 mb-20">
            <div className="bg-Onyx  p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-base md:text-lg lg:text-2xl font-bold text-Beige mb-4">
                    Interactive 3D Portfolio
                  </h4>
                  <p className="text-Beige text-sm font-semibold mb-4">
                    In Progress
                  </p>
                  <p className="text-Beige leading-relaxed mb-6 ">
                    Building an interactive 3D portfolio with React Three Fiber
                    and Three.js. I've modeled assets in Blender and integrated
                    them into a web experience that showcases my work in a more
                    immersive way. This project combines my passion for 3D
                    design with web development, creating something both
                    visually engaging and technically interesting.
                  </p>
                  <a href="/3d" className="button">
                    Enter 3D Experience →
                  </a>
                </div>
                <div className="flex-1">
                  <div className="w-full h-full overflow-hidden  shadow-md   ">
                    <img
                      src="/images/3d.png"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects by Category */}
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
