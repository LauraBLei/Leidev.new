import { Project } from "../types/types";

interface personalProjects {
  template: Project;
  projectData: Project[];
}

export const personalProjects: personalProjects = {
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
    text: "",
  },
  projectData: [
    {
      name: "Wedding",
      "web development tools": ["React", "Tailwind", "Typescript"],
      "completion date": "Ongoing",
      "repo-link": "https://github.com/LauraBLei/Wedding",
      "livepage-link": "https://wedding.leidev.net/",
      image: {
        src: "./projectImages/personal/wedding1.jpg",
        alt: "Wedding page",
      },
      video: {
        src: "",
        poster: "./projectImages/personal/wedding1.jpg",
      },
      id: "02",
      text: "This is a website i made for me and my husbands wedding, it started as a STD and will expand to an invitation and information about the wedding.",
    },
    {
      name: "Tomplania",
      "web development tools": ["React", "Tailwind", "Typescript"],
      "completion date": "Summer 2024",
      "repo-link": "https://github.com/LauraBLei/Tomplania",
      "livepage-link": "https://tomplania.leidev.net/",
      image: {
        src: "./projectImages/personal/Tomplania1.png",
        alt: "Image of the game Tomplania",
      },

      video: {
        src: "./videos/tomplania.mp4",
        poster: "./projectImages/personal/Tomplania1.jpg",
      },
      id: "01",
      text: "Tomplania is a turn-based RPG game I built using React, TypeScript, and Tailwind CSS. This project was my first experience with both React and TypeScript, and I used it as a hands-on opportunity to learn and grow. The learning curve was both challenging and rewarding, and I gained a solid foundation in component-based architecture and typed JavaScript through this project.",
    },
  ],
};
