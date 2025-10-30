import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useCameraContext } from "../context/CameraContext";

export const CameraController = () => {
  const { camera } = useThree();
  const { cameraPreset } = useCameraContext();
  const targetPosition = useRef(
    new THREE.Vector3(...camera.position.toArray())
  );
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (cameraPreset) {
      targetPosition.current.set(...cameraPreset.position);
      targetLookAt.current.set(...cameraPreset.lookAt);
    }
  }, [cameraPreset]);

  useFrame(() => {
    // Smoothly interpolate camera position
    camera.position.lerp(targetPosition.current, 0.03);
    // Smoothly interpolate lookAt
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.add(camera.position);
    currentLookAt.lerp(targetLookAt.current, 0.1);
    camera.lookAt(currentLookAt);
  });

  return null;
};
