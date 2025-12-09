import { useEffect, useState } from "react";

const SECTIONS = ["projects", "about", "toolbox", "contact"];

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
    <header className="w-full text-MatteBlack flex justify-center sticky top-0 z-50">
      <nav className="absolute  bg-Beige rounded-b-2xl flex gap-5 pt-2 pb-3 px-5 shadow-md flex-col items-center">
        <button onClick={() => handleScroll("welcome")}>
          <img className="w-40 cursor-pointer" src="/Logo.png" alt="Logo" />
        </button>
        <div className="flex gap-2">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`navElement ${active === id ? "active" : ""}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
