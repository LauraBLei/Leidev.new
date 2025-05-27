import { useState } from "react";
import { Project } from "../types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  projects: Project[];
}
export const ImageCarousel = ({ projects }: CarouselProps) => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const totalProjects = projects.length - 1;

  const handlePrev = () => {
    if (currentProject === 0) {
      setCurrentProject(totalProjects);
    } else {
      setCurrentProject(currentProject - 1);
    }
  };

  const handleNext = () => {
    if (currentProject === totalProjects) {
      setCurrentProject(0);
    } else {
      setCurrentProject(currentProject + 1);
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative">
        <div>
          <div className="overflow-hidden w-full max-h-[300px] h-full">
            <img
              className="w-full h-full object-cover"
              src={projects[currentProject].images[0].src}
              alt={projects[currentProject].images[0].alt}
            />
          </div>
          <p className="text-center">{projects[currentProject].name}</p>
        </div>
        <div className="flex justify-center gap-2 mt-2 w-full">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentProject === index
                  ? "bg-leiDevBlue scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue "
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
