import { useState, useEffect } from "react";

export const WelcomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="welcome" className="relative w-full">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/images/mountain.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-10 absolute w-full h-full">
          <img
            src="/images/window_wSign.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
