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
    fix: "",
    text: "",
    shortText: "",
  },
  projectData: [
    {
      name: "Wedding",
      "web development tools": [
        "React",
        "Tailwind",
        "Typescript",
        "Vercel",
        "Github",
        "Git",
      ],
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
      fix: "",
      shortText:
        "A modern, responsive Save The Date and wedding invitation site in development, designed to share event details and RSVP with guests.",
      text: "This wedding website is a work-in-progress digital Save The Date and invitation platform for my upcoming wedding. Designed to provide guests with all the essential information about the weekend’s events, the site will feature RSVP functionality, event details, and personalized content. The project combines modern web technologies to create an engaging and user-friendly experience, aiming to keep guests informed and excited as the big day approaches.",
    },
    {
      name: "Tomplania",
      "web development tools": [
        "React",
        "Tailwind",
        "Typescript",
        "Vercel",
        "Github",
        "Git",
      ],
      "completion date": "Summer 2024",
      "repo-link": "https://github.com/LauraBLei/Tomplania",
      "livepage-link": "https://tomplania.leidev.net/",
      image: {
        src: "./projectImages/personal/Tomplania1.jpg",
        alt: "Image of the game Tomplania",
      },

      video: {
        src: "./videos/tomplania.mp4",
        poster: "./projectImages/personal/Tomplania1.jpg",
      },
      id: "01",
      fix: "",
      shortText:
        "A React and TypeScript RPG featuring character classes, quests, shops, and combat, built as a summer project to enhance frontend development skills.",
      text: "This RPG game was created as a personal summer project to master React and TypeScript. It features immersive gameplay with character selection across different classes like Sorcerer, Wizard, and Knight. Players can explore quests, collect items such as swords and armor, visit shops to buy equipment, and battle enemies. The game demonstrates dynamic state management, interactive components, and a modular design approach. Building this project greatly enhanced my skills in React hooks, TypeScript typing, and creating engaging user experiences.",
    },
  ],
};
