import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useCameraContext } from "../context/CameraContext";
import { CameraPresets } from "../hooks/CameraPositions";

export const CameraController = () => {
  const { camera } = useThree();
  const { cameraPreset } = useCameraContext();
  const targetPosition = useRef(
    new THREE.Vector3(...camera.position.toArray())
  );
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're at the start position
  const isAtStartPosition =
    cameraPreset.position[0] === CameraPresets.Start.position[0] &&
    cameraPreset.position[1] === CameraPresets.Start.position[1] &&
    cameraPreset.position[2] === CameraPresets.Start.position[2];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (cameraPreset) {
      const adjustedPosition = [...cameraPreset.position] as [
        number,
        number,
        number,
      ];

      // On mobile, zoom out a bit for frames (not at start position)
      if (isMobile && !isAtStartPosition) {
        // Move camera back along Z axis (adjust the value as needed)
        adjustedPosition[2] = adjustedPosition[2] + 0.2;
      }

      targetPosition.current.set(...adjustedPosition);
      targetLookAt.current.set(...cameraPreset.lookAt);
    }
  }, [cameraPreset, isMobile, isAtStartPosition]);

  // Store the current lookAt target for smooth interpolation
  const currentLookAtRef = useRef(
    new THREE.Vector3(...targetLookAt.current.toArray())
  );

  useFrame(() => {
    // Smoothly interpolate camera position (lower value = slower/smoother)
    camera.position.lerp(targetPosition.current, 0.02);

    // On desktop: always control lookAt
    // On mobile: control lookAt EXCEPT when at Start position (where MobileCameraControls takes over)
    if (!isMobile || !isAtStartPosition) {
      // Smoothly interpolate lookAt target (match position speed for natural movement)
      currentLookAtRef.current.lerp(targetLookAt.current, 0.02);
      camera.lookAt(currentLookAtRef.current);
    }
  });

  return null;
};
