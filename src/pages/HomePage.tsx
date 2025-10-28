import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Floor } from "../components/Scene/Floor";
import { Walls } from "../components/Scene/Walls";
import { Furniture } from "../components/Scene/furniture";
import { Fireplace } from "../components/Scene/fireplace";

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
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} />
      <OrbitControls />
      <Sky />
    </>
  );
};
