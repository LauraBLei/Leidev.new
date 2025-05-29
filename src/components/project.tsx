import { useContext, useEffect, useRef, useCallback } from "react";
import { CommonContext } from "../types/context";

export const ProjectModal = () => {
  const { projectModalOpen, setProjectModalOpen, selectedProject } =
    useContext(CommonContext);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setProjectModalOpen(false);
  }, [setProjectModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <div
      onClick={handleClose}
      className={`fixed z-50 bg-black/50 h-screen w-full flex items-center justify-center transition-opacity duration-300 ${
        projectModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full md:max-w-[750px] overflow-hidden rounded-xl transform transition-all duration-300 ${
          projectModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div ref={contentRef} className="pt-10 pb-16 px-5 dark:bg-dark">
          <h2 className="text-xl mb-4">{selectedProject?.name || "Project"}</h2>
          <p>{selectedProject?.text || "More details coming soon."}</p>
        </div>
      </div>
    </div>
  );
};
