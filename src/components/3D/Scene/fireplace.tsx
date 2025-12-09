import { VideoPlane } from "../VideoPlane";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BlenderObject } from "../model";

type FlickeringLightProps = {
  position?: [number, number, number];
  baseIntensity?: number;
  color?: string;
  distance?: number;
};
function FlickeringLight({
  position = [0, 1, 0.4],
  baseIntensity = 2,
  color = "orange",
  distance = 3,
}: FlickeringLightProps) {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity =
        baseIntensity +
        Math.sin(state.clock.elapsedTime * 10) * 0.3 +
        (Math.random() - 0.5) * 0.2;
      lightRef.current.position.x = position[0] + (Math.random() - 0.5) * 0.05;
      lightRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 5) * 0.05;
      lightRef.current.position.z = position[2] + (Math.random() - 0.5) * 0.05;
    }
  });
  return (
    <pointLight
      ref={lightRef}
      position={position}
      intensity={baseIntensity}
      color={color}
      distance={distance}
    />
  );
}

export const Fireplace = () => {
  return (
    <group position={[0, -1, 0]}>
      <BlenderObject src="/models/fireplace.glb" />
      <VideoPlane src="/videos/fireplace.mp4" position={[0, 0.8, 0.4]} />
      <FlickeringLight position={[0, 1, 0.4]} />
    </group>
  );
};
