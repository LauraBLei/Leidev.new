export type Project = {
  name: string;
  "web development tools": ToolKey[];
  "completion date": string;
  "repo-link": string;
  "livepage-link": string;
  image: Media;
  text: string;
  id: string;
  video: Video;
  shortText: string;
  fix: string;
};

export type Media = {
  src: string;
  alt: string;
};

export type Video = {
  src: string;
  poster?: string;
};

export type ToolKey =
  | "react"
  | "tailwind"
  | "typescript"
  | "vercel"
  | "github"
  | "git"
  | "nextjs"
  | "vite"
  | "nodejs"
  | "javascript"
  | "html"
  | "css"
  | "three"
  | "blender";

export const TOOLS: Record<ToolKey, { name: string; src: string }> = {
  react: { name: "React", src: "/tools/react.svg" },
  tailwind: { name: "Tailwind", src: "/tools/tailwindcss.svg" },
  typescript: { name: "TypeScript", src: "/tools/typescript.svg" },
  vercel: { name: "Vercel", src: "/tools/vercel.svg" },
  github: { name: "GitHub", src: "/tools/github.svg" },
  git: { name: "Git", src: "/tools/git.svg" },
  nextjs: { name: "Next.js", src: "/tools/nextdotjs.svg" },
  vite: { name: "Vite", src: "/tools/vite.svg" },
  nodejs: { name: "Node.js", src: "/tools/nodedotjs.svg" },
  javascript: { name: "JavaScript", src: "/tools/javascript.svg" },
  html: { name: "HTML", src: "/tools/html5.svg" },
  css: { name: "CSS", src: "/tools/css.svg" },
  three: { name: "Three.js", src: "/tools/threedotjs.svg" },
  blender: { name: "Blender", src: "/tools/blender.svg" },
};
