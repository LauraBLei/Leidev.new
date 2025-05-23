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
    images: [{ src: "", alt: "" }],
    id: "",
    text: "",
  },
  projectData: [
    {
      name: "Tomplania",
      "web development tools": ["React", "Tailwind", "Typescript"],
      "completion date": "Summer 2024",
      "repo-link": "https://github.com/LauraBLei/Tomplania",
      "livepage-link": "https://tomplania.leidev.net/",
      images: [
        {
          src: "./projectImages/personal/Tomplania1.png",
          alt: "Image of the game Tomplania",
        },
        {
          src: "./projectImages/personal/Tomplania2.png",
          alt: "Image of the game Tomplania",
        },
        {
          src: "./projectImages/personal/Tomplania3.png",
          alt: "Image of the game Tomplania",
        },
        {
          src: "./projectImages/personal/Tomplania4.png",
          alt: "Image of the game Tomplania",
        },
        {
          src: "./projectImages/personal/Tomplania5.png",
          alt: "Image of the game Tomplania",
        },
      ],
      id: "01",
      text: "Tomplania is a turn-based RPG game I built using React, TypeScript, and Tailwind CSS. This project was my first experience with both React and TypeScript, and I used it as a hands-on opportunity to learn and grow. The learning curve was both challenging and rewarding, and I gained a solid foundation in component-based architecture and typed JavaScript through this project.",
    },
    {
      name: "Wedding",
      "web development tools": ["React", "Tailwind", "Typescript"],
      "completion date": "Ongoing",
      "repo-link": "https://github.com/LauraBLei/Wedding",
      "livepage-link": "https://wedding.leidev.net/",
      images: [
        { src: "./projectImages/personal/wedding1.png", alt: "Wedding page" },
      ],
      id: "",
      text: "",
    },
  ],
};
