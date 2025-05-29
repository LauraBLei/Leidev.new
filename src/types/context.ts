import { createContext } from "react";
import { Project } from "./types";

export type CommonContextType = {
  headerOpen: boolean;
  setHeaderOpen: (input: boolean) => void;

  projectModalOpen: boolean;
  setProjectModalOpen: (input: boolean) => void;

  selectedProject?: Project;
  setSelectedProject?: (project: Project) => void;
};

export const CommonContext = createContext<CommonContextType>(
  {} as CommonContextType
);
