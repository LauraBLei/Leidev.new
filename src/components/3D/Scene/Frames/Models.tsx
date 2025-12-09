import { Html } from "@react-three/drei";
import { useCameraContext } from "../../../../context/CameraContext";
import { CameraPresets } from "../../../../hooks/CameraPositions";
import { BlenderObject } from "../../model";

export const FrameOne = () => {
  const { setCameraPreset } = useCameraContext();
  return (
    <group
      position={[2.8, 2.2, -0.4]}
      onClick={() => {
        setCameraPreset(CameraPresets.FrameOne);
        console.log("click");
      }}
    >
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
          <button
            className="cursor-pointer"
            onClick={() => setCameraPreset(CameraPresets.Start)}
          >
            Go back
          </button>
        </Html>
      </mesh>
    </group>
  );
};

export const FrameTwo = () => {
  const { setCameraPreset } = useCameraContext();

  return (
    <group
      position={[2.8, 1.1, -0.4]}
      onClick={() => {
        setCameraPreset(CameraPresets.FrameTwo);
        console.log("click");
      }}
    >
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
          <button
            className="cursor-pointer"
            onClick={() => setCameraPreset(CameraPresets.Start)}
          >
            Go back
          </button>
        </Html>
      </mesh>
    </group>
  );
};

export const Board = () => {
  return (
    <group position={[-0.42, 1, -0.47]}>
      <BlenderObject
        src="/models/wallArt/Tavlen.glb"
        scale={3}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh position={[0.1, 0.34, 0.01]} rotation={[0, 0, Math.PI / -10]}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>CARD ONE </div>
        </Html>
      </mesh>
      <mesh position={[0.94, 0.21, 0.01]} rotation={[0, 0, Math.PI / 8]}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>CARD TWO</div>
        </Html>
      </mesh>
      <mesh position={[0.8, 1.07, 0.01]} rotation={[0, 0, Math.PI / 8]}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>CARD THREE</div>
        </Html>
      </mesh>
      <mesh position={[0.13, 1.26, 0.01]} rotation={[0, 0, Math.PI / -8]}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshBasicMaterial color="white" />
        <Html center transform scale={0.1}>
          <div>CARD FOUR</div>
        </Html>
      </mesh>
    </group>
  );
};
