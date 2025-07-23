import { useState } from "react";
import { CommonContext } from "../types/context";
import { Project } from "../types/types";
import { schoolProjects } from "../Data/schoolProject";

type ContextProviderProps = {
  children: React.ReactNode;
};

const project = schoolProjects.projectData[0]
  ? schoolProjects.projectData[0]
  : {
      name: "",
      "web development tools": [],
      "completion date": "",
      "repo-link": "",
      "livepage-link": "",
      image: { src: "", alt: "" },
      video: {
        src: "",
        poster: "",
      },
      id: "",
      fix: "",
      shortText: "",
      text: "",
    };

export const DataProvider = ({ children }: ContextProviderProps) => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(project);

  return (
    <CommonContext.Provider
      value={{
        headerOpen,
        setHeaderOpen,
        projectModalOpen,
        setProjectModalOpen,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
