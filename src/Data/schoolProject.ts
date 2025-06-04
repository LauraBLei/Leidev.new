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
    fix: "",
    shortText: "",
    text: "",
  },
  projectData: [
    {
      name: "Holidaze",
      "web development tools": [
        "Typescript",
        "React",
        "Tailwind",
        "vite",
        "github",
        "git",
      ],
      "completion date": "25. May 2025",
      "repo-link": "https://github.com/LauraBLei/holidaze",
      "livepage-link": "https://holidaze.leidev.net/",
      image: {
        src: "./projectImages/school/holidaze1.jpg",
        alt: "Holidaze website",
      },

      video: {
        src: "./videos/holidaze.mp4",
        poster: "./projectImages/school/holidaze1.jpg",
      },
      id: "4",
      fix: "For this project, I made improvements focused on the project documentation. Specifically, I fixed grammar errors and added a direct link to the live site in the README file, improving clarity and accessibility for users and collaborators.",
      shortText:
        "A React-based accommodation booking app inspired by Airbnb, featuring customer and venue manager roles with full booking and venue management functionalities. Built as a final group exam project.",
      text: "Holidaze is a dynamic accommodation booking platform inspired by Airbnb, developed as a final group exam project to showcase front-end skills using React, TypeScript, and Tailwind CSS. The application supports two main user roles: customers, who can search for and book venues, and venue managers, who can create, update, and manage their venue listings and bookings. Features include user registration and login, booking calendars with availability, and profile customization with avatars. This project highlights my ability to design and build a responsive, user-friendly web application while collaborating in a team and integrating with an official API.",
    },
    {
      name: "The Frogs",
      "web development tools": [
        "Typescript",
        "React",
        "Tailwind",
        "vite",
        "github",
        "git",
      ],
      "completion date": "8. March 2025",
      "repo-link": "https://github.com/LauraBLei/TheFrogs/tree/main/theFrogs",
      "livepage-link": "https://the-frogs-al6z.vercel.app/",
      image: {
        src: "./projectImages/school/frogs.jpg",
        alt: "The Frogs website home page",
      },

      video: {
        src: "./videos/theFrogs.mp4",
        poster: "./projectImages/school/frogs.jpg",
      },
      id: "3",
      fix: "I enhanced code quality and accessibility by removing leftover console logs, adding JSDoc comments for better documentation, and implementing proper key props for list elements to avoid React warnings. I also improved accessibility by associating labels correctly with form elements and expanded the README file to provide clearer instructions and project insights. These improvements helped elevate the maintainability, usability, and professionalism of the project.",
      shortText:
        "A React e-commerce store featuring product search, detailed pages, cart management, checkout flow, and a validated contact form. Built as a course assignment with focus on usability and responsive design.",
      text: "The Frogs is a React-based e-commerce store built as a course assignment, designed to provide a seamless shopping experience with a clean and responsive UI. The app features a homepage displaying products fetched from a public API, complete with a look-ahead search bar for instant filtering. Users can view detailed product pages with descriptions, discounts, and reviews, add items to a cart, and proceed through a checkout flow including a confirmation page. The project also includes a contact form with validation and uses React Router for smooth navigation between pages. This project highlights my understanding of React fundamentals, state management, routing, and form validation while focusing on clean, maintainable code and responsive design.",
    },
    {
      name: "Luxora Auctions",
      "web development tools": [
        "Javascript",
        "Tailwind",
        "Github",
        "Vite",
        "Git",
      ],
      "completion date": "December 2024",
      "repo-link": "https://github.com/LauraBLei/SemesterProject2",
      "livepage-link": "https://semesterproject2.leidev.net/",
      image: {
        src: "./projectImages/school/LA1.jpg",
        alt: "Home page of Luxora Auctions",
      },

      video: {
        src: "./videos/LA.mp4",
        poster: "./projectImages/school/LA1.jpg",
      },
      id: "2",
      fix: "Post-submission, I enhanced security by relocating the API key to environment variables, addressing feedback that emphasized safeguarding sensitive information. This adjustment not only improved the app’s security posture but also reinforced the importance of security considerations in frontend development.",
      shortText:
        "A React and TypeScript auction platform featuring real-time bidding, user account management, and secure API integration. Developed solo as a semester project with a focus on code quality and responsive design.",
      text: "Luxora Auctions is a full-featured auction platform built as my solo semester project for the Frontend course. Developed with React, TypeScript, Tailwind CSS, and Vite, it offers users the ability to browse, bid on, and manage auction items through a clean, responsive interface. The project highlights strong TypeScript usage, modular component design, seamless API integration, and robust form validation with error handling. After submission, I improved security by moving the API key to environment variables, reinforcing best practices in frontend security. This project represents significant technical growth and showcases my capability to independently design and deliver production-ready applications.",
    },
    {
      name: "Community Science Museum",
      "web development tools": ["HTML", "CSS", "Github", "Git"],
      "completion date": "December 2023",
      "repo-link": "https://github.com/LauraBLei/-js-1-ca",
      "livepage-link": "https://laurablei.github.io/Semester-project-1/",
      image: {
        src: "./projectImages/school/CSM1.jpg",
        alt: "Home page of CSM",
      },

      video: {
        src: "./videos/csm.mp4",
        poster: "./projectImages/school/CSM1.jpg",
      },
      id: "1",
      fix: "",
      shortText:
        "A simple, clean museum website built with HTML and CSS as my first semester project, focusing on foundational web development skills.",
      text: "Community Science Museum was my first semester project focused on building a simple, clean website using HTML and CSS. The site showcases museum information with a straightforward design that emphasizes usability and accessibility. This project was a valuable learning experience that helped me build a solid foundation in web development basics, including semantic HTML structure and responsive styling.",
    },
  ],
};
