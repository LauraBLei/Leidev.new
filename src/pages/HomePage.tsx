import { Canvas } from "@react-three/fiber";
import { Floor } from "../components/Scene/Floor";
import { Walls } from "../components/Scene/Walls";
import {
  Decorations,
  Furniture,
  Lamps,
  WallArt,
} from "../components/Scene/furniture";
import { Fireplace } from "../components/Scene/fireplace";
import { BlenderObject } from "../components/model";
import { CameraController } from "../components/CameraController";
import { MobileCameraControls } from "../components/MobileCameraControls";

export const HomePage = () => {
  return (
    <Canvas>
      <App />
    </Canvas>
  );
};
const FloorHeight = -1.086;
const App = () => {
  // reference to the three object

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
