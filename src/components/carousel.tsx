import { useState } from "react";
import { Project } from "../types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  projects: Project[];
}

export const ImageCarousel = ({ projects }: CarouselProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = projects.length;

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[500px] flex flex-col items-center">
      <div className="flex items-center gap-4">
        <button onClick={handlePrev} className="hover-effect">
          <ChevronLeft size={40} />
        </button>

        <div className="overflow-hidden w-[350px] h-full rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalProjects * 350}px`,
              transform: `translateX(-${currentProject * 350}px)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="w-[350px] flex-shrink-0 text-center"
              >
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 font-medium">{project.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="hover-effect">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              currentProject === index
                ? "bg-leiDevBlue scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
