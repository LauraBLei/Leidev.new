import { useRef, useEffect } from "react";

export const useVideo = (src: string, autoplay: boolean) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = src; // Path to your video
    video.loop = autoplay;
    video.muted = true;
    video.autoplay = true;
    video.crossOrigin = "Anonymous";
    video.playsInline = true;
    video.play();
    videoRef.current = video;
  }, []);

  return videoRef;
};
