import { useEffect, useState, useContext, useRef } from "react";
import { ProjectsSection } from "./Sections/projects";
import { WelcomeSection } from "./Sections/welcome";
import { AboutSection } from "./Sections/about";
import { DevToolsSection } from "./Sections/dev-tools";
import { CommonContext, CommonContextType } from "./types/context";

const sections = ["welcome", "projects", "about", "dev-tools"];

export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { projectModalOpen } = useContext(CommonContext) as CommonContextType;

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const canScrollRef = useRef(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = (event: WheelEvent) => {
      if (!canScrollRef.current || projectModalOpen) return;

      canScrollRef.current = false;

      if (event.deltaY > 0) {
        setIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setIndex((prev) => Math.max(prev - 1, 0));
      }

      timeoutId = setTimeout(() => {
        canScrollRef.current = true;
      }, 800);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (
        !canScrollRef.current ||
        projectModalOpen ||
        touchStartY.current === null
      )
        return;

      touchEndY.current = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY.current;

      // Threshold to prevent accidental small swipes
      const threshold = 50;

      if (deltaY > threshold) {
        setIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (deltaY < -threshold) {
        setIndex((prev) => Math.max(prev - 1, 0));
      }

      canScrollRef.current = false;
      timeoutId = setTimeout(() => {
        canScrollRef.current = true;
      }, 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(timeoutId);
    };
  }, [projectModalOpen]);

  useEffect(() => {
    document
      .getElementById(sections[index])
      ?.scrollIntoView({ behavior: "smooth" });
  }, [index]);

  return (
    <div className="h-screen max-w-[1440px] overflow-hidden">
      <section id="welcome" className="h-screen">
        <WelcomeSection />
      </section>
      <section id="projects" className="h-screen pt-20 md:pt-30">
        <ProjectsSection />
      </section>
      <section id="about" className="h-screen pt-20 md:pt-30">
        <AboutSection />
      </section>
      <section id="dev-tools" className="h-screen pt-20 md:pt-30">
        <DevToolsSection />
      </section>
    </div>
  );
};
