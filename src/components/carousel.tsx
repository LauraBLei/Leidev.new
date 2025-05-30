import { useState } from "react";
import { Media, Project } from "../types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images?: Media[]; // Optional, but either this...
  projects?: Project[]; // ...or this must be provided
}

export const ImageCarousel = ({ images, projects }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isImagesArray = !!images?.length;
  const isProjectsArray = !!projects?.length;

  if (!isImagesArray && !isProjectsArray) return null;

  const contentLength = isImagesArray ? images!.length : projects!.length;
  const isSingleItem = contentLength <= 1;

  const currentMedia: Media = isImagesArray
    ? images![isSingleItem ? 0 : currentIndex]
    : projects![isSingleItem ? 0 : currentIndex].images?.[0];

  const currentName = isProjectsArray
    ? projects![isSingleItem ? 0 : currentIndex].name
    : null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? contentLength - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === contentLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative">
        <div className="overflow-hidden w-full max-h-[300px] h-full">
          <img
            className="w-full h-full object-cover"
            src={currentMedia?.src}
            alt={currentMedia?.alt}
          />
        </div>

        {currentName && <p className="text-center">{currentName}</p>}

        {!isSingleItem && (
          <>
            <div className="flex justify-center gap-2 mt-2 w-full">
              {Array.from({ length: contentLength }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-leiDevBlue scale-110"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-1 rounded-full hover:bg-leiDevBlue"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
