import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Floor } from "../components/Scene/Floor";
import { Walls } from "../components/Scene/Walls";
import { Furniture, WallArt } from "../components/Scene/furniture";
import { Fireplace } from "../components/Scene/fireplace";
import { BlenderObject } from "../components/model";

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
      <BlenderObject
        src="/models/MARLEY.glb"
        position={[-2.5, -0.27, 1]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} />
      <OrbitControls />
      <Sky />
    </>
  );
};
