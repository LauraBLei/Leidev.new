import { useVideo } from "../hooks/useVideo";
import * as THREE from "three";

type VideoPlaneProps = {
  src: string;
  position?: [number, number, number]; // Add this line
};

export const VideoPlane = ({ src, position }: VideoPlaneProps) => {
  const videoRef = useVideo(src, true);

  const texture = videoRef ? new THREE.VideoTexture(videoRef) : null;

  return (
    <mesh position={position}>
      <planeGeometry args={[2, 1]} />
      {texture && <meshBasicMaterial map={texture} toneMapped={false} />}
    </mesh>
  );
};
