import { useContext, useEffect, useRef, useCallback } from "react";
import { CommonContext } from "../types/context";
import { X } from "lucide-react";

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
        className={`bg-MatteBlack w-full md:max-w-[750px] max-h-[750px] md:max-h-[1200px] pt-5 overflow-y-auto rounded-xl transform transition-all duration-300 ${
          projectModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div
          ref={contentRef}
          className="pt-10 pb-16 px-5 flex flex-col gap-5 dark:bg-dark font-primary text-leiDevBlue w-full
          "
        >
          <button onClick={handleClose} className="flex w-full justify-end">
            <X className="hover-effect w-6 h-6 md:w-10 md:h-10 mt-[-20px] mb-[20px]" />
          </button>
          <div>
            {selectedProject?.video.src ? (
              <video
                key={selectedProject.id}
                className="w-full rounded-xl shadow-lg max-h-[500px] mb-4"
                src={selectedProject.video.src}
                poster={selectedProject.video.poster}
                controls
                autoPlay={false}
                muted
              />
            ) : (
              <div className="w-full rounded-xl max-h-[400px] overflow-hidden mb-4 shadow-lg shadow-Onyx ">
                <img
                  className="w-full  h-full  object-cover"
                  src={selectedProject?.video.poster}
                  alt={selectedProject?.name}
                />
              </div>
            )}
          </div>
          <h2 className="text-xl  font-semibold">
            {selectedProject?.name || "Project"}
          </h2>
          <p className="border-y-[1px] border-leiDevBlue py-2 text-sm md:text-base">
            {selectedProject?.text || "More details coming soon."}
          </p>
          <div className="my-2">
            <h2 className="font-semibold">Dev Tools</h2>
            <div className="border-[1px] border-leiDevBlue rounded-md py-2 flex justify-evenly flex-wrap">
              {selectedProject?.["web development tools"].map((tool) => (
                <p className="text-lg font-semibold" key={tool}>
                  {tool}
                </p>
              ))}
            </div>
          </div>
          <div className="flex w-full">
            <button className="rounded-md  bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect">
              Repository
            </button>
            <button className="rounded-md  bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect">
              Live Pages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
