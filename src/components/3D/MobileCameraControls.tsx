import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useCameraContext } from "../../context/CameraContext";
import { CameraPresets } from "../../hooks/CameraPositions";

export const MobileCameraControls = () => {
  const { camera, gl } = useThree();
  const { isTransitioning, cameraPreset } = useCameraContext();
  const isDragging = useRef(false);
  const previousTouch = useRef({ x: 0 });
  const currentYaw = useRef(0);
  const targetYaw = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're at the start position (only position where look-around is allowed)
  const isAtStartPosition =
    cameraPreset.position[0] === CameraPresets.Start.position[0] &&
    cameraPreset.position[1] === CameraPresets.Start.position[1] &&
    cameraPreset.position[2] === CameraPresets.Start.position[2];

  // Rotation limits (in radians) - using ref to avoid dependency issues
  const minYaw = useRef(-Math.PI / 4);
  const maxYaw = useRef(Math.PI / 4);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only enable on mobile

    const canvas = gl.domElement;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousTouch.current.x = e.clientX;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current || isTransitioning || !isAtStartPosition) return;

      const deltaX = e.clientX - previousTouch.current.x;
      previousTouch.current.x = e.clientX;

      // Adjust rotation speed - higher value = more sensitive
      targetYaw.current += deltaX * 0.02;

      // Clamp rotation to limits
      targetYaw.current = Math.max(
        minYaw.current,
        Math.min(maxYaw.current, targetYaw.current)
      );
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
    };
  }, [camera, gl, isMobile, isTransitioning, isAtStartPosition]);

  // Smooth interpolation on every frame
  useFrame(() => {
    if (!isMobile || !isAtStartPosition) return;

    // Smoothly interpolate current rotation to target
    currentYaw.current = THREE.MathUtils.lerp(
      currentYaw.current,
      targetYaw.current,
      0.15
    );

    // Apply smooth rotation
    camera.rotation.y = currentYaw.current;
  });

  return null;
};
