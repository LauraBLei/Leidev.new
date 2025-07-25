import { useState, useContext, useRef } from "react";
import { Project } from "../types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CommonContext } from "../types/context";

interface CarouselProps {
  projects: Project[];
}

export const ImageCarousel = ({ projects }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setSelectedProject, setProjectModalOpen } = useContext(CommonContext);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (!projects?.length) return null;

  const contentLength = projects.length;
  const isSingleItem = contentLength <= 1;

  const currentProject = projects[currentIndex];
  const { image, name } = currentProject;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? contentLength - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === contentLength - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setSelectedProject(currentProject);
    setProjectModalOpen(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX.current;

    const threshold = 50; // swipe threshold
    if (deltaX > threshold) {
      handleNext();
    } else if (deltaX < -threshold) {
      handlePrev();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative">
        <div
          className="overflow-hidden w-full h-[300px] cursor-pointer"
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            className="w-full h-full object-cover"
            src={image.src}
            alt={image.alt}
          />
        </div>

        {name && <p className="text-center">{name}</p>}
        <p className="text-sm p-2 border-y-[1px] border-leiDevBlue ">
          {currentProject.shortText}
        </p>

        {!isSingleItem && (
          <>
            <div className="flex justify-center gap-2 mt-2 w-full">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-leiDevBlue scale-110"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
