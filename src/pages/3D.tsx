import { Canvas } from "@react-three/fiber";

import { BlenderObject } from "../components/3D/model";
import { CameraController } from "../components/3D/CameraController";
import { MobileCameraControls } from "../components/3D/MobileCameraControls";
import {
  Decorations,
  Furniture,
  Lamps,
  WallArt,
} from "../components/3D/Scene/furniture";
import { Fireplace } from "../components/3D/Scene/fireplace";
import { Floor } from "../components/3D/Scene/Floor";
import { Walls } from "../components/3D/Scene/Walls";

const FloorHeight = -1.086;

const Scene = () => {
  return (
    <>
      <Fireplace />
      <Floor FloorHeight={FloorHeight} />
      <Walls FloorHeight={FloorHeight} />
      <Furniture FloorHeight={FloorHeight} />
      <WallArt />
      <Lamps />
      <Decorations />
      <BlenderObject
        src="/models/MARLEY.glb"
        position={[-2.5, -0.27, 1]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <directionalLight position={[0, 5, 5]} />
      <CameraController />
      <MobileCameraControls />
    </>
  );
};

export const ThreeDPage = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};
