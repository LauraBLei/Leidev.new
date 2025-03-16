import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface OpenContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

// Create the context with a default value
const OpenContext = createContext<OpenContextType | undefined>(undefined);

// Custom hook to use the context
export const useOpen = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpen must be used within an OpenProvider");
  }
  return context;
};

// Provider component
interface OpenProviderProps {
  children: ReactNode;
}

export const OpenProvider: React.FC<OpenProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the `isOpen` state
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // Value to be provided to the context
  const value = { isOpen, toggleOpen };

  return <OpenContext.Provider value={value}>{children}</OpenContext.Provider>;
};
