import { Html } from "@react-three/drei";
import { BlenderObject } from "../../model";

export const FrameOne = () => {
  return (
    <group position={[2.8, 2.2, -0.4]}>
      <BlenderObject
        src="/models/wallArt/Frame1.glb"
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[1, 0.7]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>Project 1</div>
        </Html>
      </mesh>
    </group>
  );
};

export const FrameTwo = () => {
  return (
    <group position={[2.8, 1.1, -0.4]}>
      <BlenderObject
        src="/models/wallArt/Frame1.glb"
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[1, 0.7]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>Project 2</div>
        </Html>
      </mesh>
    </group>
  );
};
