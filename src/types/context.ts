import { createContext } from "react";

export type CommonContextType = {
  headerOpen: boolean;
  setHeaderOpen: (input: boolean) => void;
};

export const CommonContext = createContext<CommonContextType>(
  {} as CommonContextType
);
