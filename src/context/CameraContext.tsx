import React, { createContext, useContext, useState } from "react";
import { CameraPresets } from "../hooks/CameraPositions";

type CameraPreset = {
  position: [number, number, number];
  lookAt: [number, number, number];
};

type CameraContextType = {
  cameraPreset: CameraPreset;
  setCameraPreset: (preset: CameraPreset) => void;
};

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cameraPreset, setCameraPreset] = useState(CameraPresets.Start);

  return (
    <CameraContext.Provider value={{ cameraPreset, setCameraPreset }}>
      {children}
    </CameraContext.Provider>
  );
};

export function useCameraContext() {
  const ctx = useContext(CameraContext);
  if (!ctx)
    throw new Error("useCameraContext must be used within a CameraProvider");
  return ctx;
}
