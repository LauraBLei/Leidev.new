import { Project } from "../types/types";

interface clientProjects {
  template: Project;
  projectData: Project[];
}

export const clientProjects: clientProjects = {
  template: {
    name: "",
    "web development tools": [],
    "completion date": "",
    "repo-link": "",
    "livepage-link": "",
    image: { src: "", alt: "" },
    video: {
      src: "",
      poster: "",
    },
    id: "",
    fix: "",
    text: "",
    shortText: "",
  },
  projectData: [
    {
      name: "FMK Gulve",
      "web development tools": ["nextjs", "react", "typescript"],
      "completion date": "18. august 2025",
      "repo-link": "https://github.com/LauraBLei/fmkgulve",
      "livepage-link": "https://fmkgulve.vercel.app/da",
      image: {
        src: "./projectImages/client/fmkgulve.png",
        alt: "fmkgulve website, front page",
      },
      video: {
        src: "",
        poster: "",
      },
      id: "001",
      fix: "",
      text: "A comprehensive, multilingual business website originally developed for a Danish flooring company, now showcased as a portfolio demonstration. This project highlights modern web development practices with a focus on internationalization, responsive design, and professional user experience.",
      shortText: "",
    },
    {
      name: "Nails by Kate",
      "web development tools": [
        "nextjs",
        "typescript",
        "tailwind",
        "react",
        "vercel",
        "github",
      ],
      "completion date": "29. September 2025",
      "repo-link": "https://github.com/LauraBLei/NailsByKate",
      "livepage-link": "https://www.nailsbykate.net/",
      image: {
        src: "./projectImages/client/nailsByKate.png",
        alt: "Website img of nails by kate",
      },
      video: {
        src: "",
        poster: "",
      },
      id: "002",
      fix: "",
      text: "This was a client project for a colleague, who wanted a small, simple website for her nail Business",
      shortText: "",
    },
  ],
};
