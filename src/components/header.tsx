import { useEffect, useState } from "react";

const SECTIONS = ["welcome", "projects", "about", "toolbox", "contact"];

export const Header = () => {
  const [active, setActive] = useState("welcome");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full text-MatteBlack flex justify-center">
      <nav className="absolute z-50 bg-Beige rounded-b-2xl flex gap-5 py-2 px-5 shadow-md">
        {SECTIONS.map((id) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className={`navElement ${active === id ? "active" : ""}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
};
