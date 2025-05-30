export type Project = {
  name: string;
  "web development tools": string[];
  "completion date": string;
  "repo-link": string;
  "livepage-link": string;
  image: Media;
  text: string;
  id: string;
  video: Video;
};

export type Media = {
  src: string;
  alt: string;
};

export type Video = {
  src: string;
  poster?: string;
};
