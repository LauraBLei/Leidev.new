import { useContext, useEffect, useRef, useCallback, useState } from "react";

import { CommonContext } from "../types/context";
import { Check, Copy, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { DescriptionCrop } from "./descriptionCrop";

export const ProjectModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const { projectModalOpen, setProjectModalOpen, selectedProject } =
    useContext(CommonContext);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setProjectModalOpen(false);
    navigate(location.pathname, { replace: true }); // Removes ?project=xyz
  }, [navigate, location.pathname, setProjectModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  const handleCopyLink = async () => {
    const projectId = selectedProject.id;
    const url = `${window.location.origin}/Home?project=${projectId}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset after 5 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <div
      onClick={handleClose}
      className={`fixed z-50 bg-black/50 h-screen w-full flex items-center justify-center transition-opacity duration-300 ${
        projectModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-MatteBlack w-full md:max-w-[900px] md:pb-20 lg:pb-0 max-h-[750px] md:max-h-[1000px] pt-5 overflow-y-auto rounded-xl transform transition-all duration-300 ${
          projectModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div
          ref={contentRef}
          className="pt-10 pb-16 px-5 flex flex-col gap-5 dark:bg-dark font-primary text-leiDevBlue w-full
          "
        >
          <button
            onClick={handleClose}
            className="flex w-full justify-end hover:text-Beige items-center mt-[-20px] mb-[20px]"
          >
            <X className="hover-effect e w-6 h-6 md:w-10 md:h-10 border-1 rounded-full p-1" />
            <p className="sr-only">Close</p>
          </button>
          <div>
            <div className="w-full rounded-xl max-h-[354px] overflow-hidden mb-4 shadow-lg shadow-Onyx ">
              <img
                className="w-full  h-full  object-cover"
                src={selectedProject?.video.poster}
                alt={selectedProject?.name}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl  font-semibold">
              {selectedProject?.name || "Project"}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                className={`hover-effect transition-colors duration-300 ${
                  copied ? "text-green-500" : "text-leiDevBlue"
                }`}
                aria-label="Copy project link"
              >
                <Copy />
              </button>
              {copied && <Check className="text-green-500" />}
            </div>
          </div>
          <div>
            <h3>Description:</h3>
            <div className="border-y-[1px] border-leiDevBlue py-2 text-sm md:text-base">
              {selectedProject ? (
                <DescriptionCrop
                  limitNumber={300}
                  text={selectedProject.text}
                />
              ) : (
                "More details coming soon."
              )}
            </div>
          </div>
          {selectedProject.fix && selectedProject.fix.trim() !== "" && (
            <div>
              <h3>Fixes:</h3>
              <div className="border-y-[1px] border-leiDevBlue py-2 text-sm md:text-base">
                <DescriptionCrop text={selectedProject.fix} limitNumber={200} />
              </div>
            </div>
          )}
          <div className="my-2">
            <h2 className="font-semibold">Dev Tools</h2>
            <div className="border-[1px] border-leiDevBlue rounded-md py-2 flex justify-evenly flex-wrap gap-5">
              {selectedProject?.["web development tools"].map((tool) => (
                <p className="text-lg font-semibold" key={tool}>
                  {tool}
                </p>
              ))}
            </div>
          </div>
          <div className="flex w-full">
            <a
              href={selectedProject?.["repo-link"]}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-center bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect"
            >
              Repository
            </a>
            <a
              href={selectedProject?.["livepage-link"]}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-center  bg-leiDevBlue text-MatteBlack font-semibold shadow-md py-2 flex-1 hover-effect"
            >
              Live Pages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
