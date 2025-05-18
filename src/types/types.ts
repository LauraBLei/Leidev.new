export type Project = {
  name: string;
  "web development tools": string[];
  "completion date": string;
  "repo-link": string;
  "livepage-link": string;
  images: Media[];
  text: string;
  id: string;
};

export type Media = {
  src: string;
  alt: string;
};
