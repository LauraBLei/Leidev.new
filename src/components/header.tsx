import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CommonContext } from "../types/context";
import { BsX } from "react-icons/bs";
import { useActiveSection } from "../hooks/sectionTracker";

export const Header = () => {
  const { headerOpen, setHeaderOpen } = useContext(CommonContext);
  const [animateOut, setAnimateOut] = useState(false);
  const [showNavContent, setShowNavContent] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    if (headerOpen) {
      setAnimateOut(true);
      setShowNavContent(false);
      setTimeout(() => {
        setHeaderOpen(false);
        setAnimateOut(false);
      }, 400);
    } else {
      setHeaderOpen(true);
      setTimeout(() => {
        setShowNavContent(true);
      }, 300);
    }
  }, [headerOpen, setHeaderOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        headerOpen
      ) {
        toggleMenu();
      }
    };

    if (headerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [headerOpen, toggleMenu]);

  return (
    <header className="fixed z-40 top-0 flex items-center justify-between w-full px-5 py-2 bg-MatteBlack">
      <img className="w-14 md:w-20" src="./Logo.png" alt="LeiDev Logo" />

      <div className="">
        <RxHamburgerMenu
          size={28}
          className="cursor-pointer text-leiDevBlue "
          onClick={toggleMenu}
        />
      </div>

      {(headerOpen || animateOut) && (
        <div
          ref={menuRef}
          className={`${
            animateOut ? "animate-slide-bounce-out" : "animate-slide-in"
          }  absolute right-0 top-0 max-w-96 w-full h-96 bg-leiDevBlue   shadow-lg p-2 z-50 flex flex-col items-end rounded-bl-full`}
        >
          <div className="flex w-full justify-end pt-3">
            <div className="flex w-full h-full items-center justify-center mt-10 ml-16">
              {showNavContent && <NavList />}
            </div>
            <BsX
              className="self-start text-4xl mb-5 cursor-pointer mr-2 mt-2"
              onClick={toggleMenu}
            />
          </div>
        </div>
      )}
    </header>
  );
};

const sectionIds = ["welcome", "projects", "about", "dev-tools"];

const NavList = () => {
  const active = useActiveSection(sectionIds);

  const GoToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col gap-2 font-primary text-2xl">
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => GoToSection(id)}
          className={`hover-effect transition-colors ${
            active === id
              ? "text-white font-semibold underline"
              : "text-gray-300"
          }`}
        >
          {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </button>
      ))}
    </nav>
  );
};
