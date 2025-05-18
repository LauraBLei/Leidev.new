import { useState } from "react";
import { CommonContext } from "../types/context";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: ContextProviderProps) => {
  const [headerOpen, setHeaderOpen] = useState<boolean>(false);

  return (
    <CommonContext.Provider value={{ headerOpen, setHeaderOpen }}>
      {children}
    </CommonContext.Provider>
  );
};
