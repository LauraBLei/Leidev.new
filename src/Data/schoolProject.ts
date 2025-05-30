import { Project } from "../types/types";

interface schoolProjects {
  template: Project;
  projectData: Project[];
}

export const schoolProjects: schoolProjects = {
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
      name: "Community Science Museum",
      "web development tools": ["HTML", "CSS"],
      "completion date": "December 2023",
      "repo-link": "https://github.com/LauraBLei/-js-1-ca",
      "livepage-link": "https://laurablei.github.io/Semester-project-1/",
      image: {
        src: "./projectImages/school/CSM1.png",
        alt: "Home page of CSM",
      },

      video: {
        src: "",
        poster: "./projectImages/school/CSM1.png",
      },
      id: "1",
      text: "CSM, was my first big project. We only had a month to do what we earlier had spend 2 months on. So my skills were getting tested. But i loved the challenge and in the end delivered a project i was really happy and proud of. We only used HTML and CSS for this one as well. In this Project my code is also much cleaner, which really shows how far you can get on a short time span.",
    },
    {
      name: "Luxora Auctions",
      "web development tools": ["Javascript", "Tailwind"],
      "completion date": "December 2024",
      "repo-link": "https://github.com/LauraBLei/SemesterProject2",
      "livepage-link": "https://semesterproject2.leidev.net/",
      image: {
        src: "./projectImages/school/LA1.png",
        alt: "Home page of Luxora Auctions",
      },

      video: {
        src: "",
        poster: "./projectImages/school/LA1.png",
      },
      id: "2",
      text: "LA was my second-semester project and marked the first time I integrated Tailwind CSS into a build. Using Tailwind significantly improved my development workflow and styling consistency. I really enjoyed working on this project—and it ultimately earned me an A, which was incredibly rewarding.",
    },
    {
      name: "The Frogs",
      "web development tools": ["Typescript", "React", "Tailwind"],
      "completion date": "8. March 2025",
      "repo-link": "https://github.com/LauraBLei/TheFrogs",
      "livepage-link": "https://the-frogs-al6z.vercel.app/",
      image: {
        src: "./projectImages/school/frogs.png",
        alt: "The Frogs website home page",
      },

      video: {
        src: "",
        poster: "./projectImages/school/frogs.png",
      },
      id: "3",
      text: "The Frogs was my Javascript Frameworks project. It waa not my first project with React, but i still had fun playing around with it. I had some friends choose the logo, and color for the page, which made the project challenging and more fun!",
    },
    {
      name: "Holidaze",
      "web development tools": ["Typescript", "React", "Tailwind"],
      "completion date": "25. May 2025",
      "repo-link": "https://github.com/LauraBLei/holidaze",
      "livepage-link": "https://holidaze.leidev.net/",
      image: {
        src: "./projectImages/school/holidaze1.png",
        alt: "Holidaze website",
      },

      video: {
        src: "./videos/holidaze.mp4",
        poster: "./projectImages/school/holidaze1.png",
      },
      id: "4",
      text: "",
    },
  ],
};
