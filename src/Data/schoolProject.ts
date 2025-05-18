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
    images: [{ src: "", alt: "" }],
    id: "",
    text: "",
  },
  projectData: [
    {
      name: "Community Science Museum",
      "web development tools": ["HTML, CSS"],
      "completion date": "December 2023",
      "repo-link": "https://github.com/LauraBLei/-js-1-ca",
      "livepage-link": "https://laurablei.github.io/Semester-project-1/",
      images: [{ src: "./projectImages/CSM1.png", alt: "Home page of CSM" }],
      id: "1",
      text: "CSM, was my first big project. We only had a month to do what we earlier had spend 2 months on. So my skills were getting tested. But i loved the challenge and in the end delivered a project i was really happy and proud of. We only used HTML and CSS for this one as well. In this Project my code is also much cleaner, which really shows how far you can get on a short time span.",
    },
    {
      name: "Luxora Auctions",
      "web development tools": ["Typescript", "Javascript", "Tailwind"],
      "completion date": "December 2024",
      "repo-link": "https://github.com/LauraBLei/SemesterProject2",
      "livepage-link": "https://semesterproject2.leidev.net/",
      images: [
        { src: "./projectImages/LA1.png", alt: "Home page of Luxora Auctions" },
      ],
      id: "2",
      text: "LA was my second-semester project and marked the first time I integrated Tailwind CSS into a build. Using Tailwind significantly improved my development workflow and styling consistency. I really enjoyed working on this project—and it ultimately earned me an A, which was incredibly rewarding.",
    },
  ],
};
