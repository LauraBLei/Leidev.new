import { useState } from "react";
import { CommonContext } from "../types/context";
import { Project } from "../types/types";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: ContextProviderProps) => {
  const [headerOpen, setHeaderOpen] = useState(false);

  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>();

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
