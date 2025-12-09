import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
export const BlenderObject = ({
  src,
  position,
  scale,
  rotation,
}: {
  src: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) => {
  const gltf = useGLTF(src);
  // Clone the scene so each instance is independent
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  return (
    <primitive
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};
