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
  | "blender"
  | "supabase";

export const TOOLS: Record<
  ToolKey,
  { name: string; src: string; url: string }
> = {
  react: { name: "React", src: "/tools/react.svg", url: "https://react.dev" },
  tailwind: {
    name: "Tailwind",
    src: "/tools/tailwindcss.svg",
    url: "https://tailwindcss.com",
  },
  typescript: {
    name: "TypeScript",
    src: "/tools/typescript.svg",
    url: "https://www.typescriptlang.org",
  },
  vercel: {
    name: "Vercel",
    src: "/tools/vercel.svg",
    url: "https://vercel.com",
  },
  github: {
    name: "GitHub",
    src: "/tools/github.svg",
    url: "https://github.com",
  },
  git: { name: "Git", src: "/tools/git.svg", url: "https://git-scm.com" },
  nextjs: {
    name: "Next.js",
    src: "/tools/nextdotjs.svg",
    url: "https://nextjs.org",
  },
  vite: { name: "Vite", src: "/tools/vite.svg", url: "https://vitejs.dev" },
  nodejs: {
    name: "Node.js",
    src: "/tools/nodedotjs.svg",
    url: "https://nodejs.org",
  },
  javascript: {
    name: "JavaScript",
    src: "/tools/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  html: {
    name: "HTML",
    src: "/tools/html5.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    name: "CSS",
    src: "/tools/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  three: {
    name: "Three.js",
    src: "/tools/threedotjs.svg",
    url: "https://threejs.org",
  },
  blender: {
    name: "Blender",
    src: "/tools/blender.svg",
    url: "https://www.blender.org",
  },
  supabase: {
    name: "Supabase",
    src: "/tools/supabase.svg",
    url: "https://supabase.com",
  },
};
