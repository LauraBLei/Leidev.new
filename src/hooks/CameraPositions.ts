export type CameraPreset = {
  position: [number, number, number];
  lookAt: [number, number, number];
};

export const CameraPresets: { [key: string]: CameraPreset } = {
  Start: { position: [0, 2, 6], lookAt: [0, 0, 0] },
  FrameOne: { position: [2.8, 2.2, 0.6], lookAt: [2.8, 2.2, 0] },
  FrameTwo: { position: [2.8, 1.1, 0.6], lookAt: [2.8, 1.1, 0] },
};
