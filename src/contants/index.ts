import mortalKombat3 from "../images/projects/mortal.webp";
import memoryGame from "../images/projects/memory-game.webp";
import imageUploader from "../images/projects/image-uploader.webp";

export type Project = {
  id: number;
  title: string;
  link: string;
  repository: string;
  description: string;
  image: string;
};

export const AVATAR_URL = "https://avatars.githubusercontent.com/u/4885094?v=4";
export const GITHUB_URL = "https://github.com/henriquejensen";
export const LINKEDIN_URL = "https://br.linkedin.com/in/henriquejensen";

export const projects: Project[] = [
  {
    id: 1,
    title: "Memory Game",
    link: "https://henriquejensen.github.io/memory-game/",
    repository: "https://github.com/henriquejensen/memory-game",
    description: "A memory game using React, Typescript, Vite, Jest and RTL",
    image: memoryGame,
  },
  {
    id: 2,
    title: "Mortal Kombat 3",
    link: "https://henriquejensen.github.io/mortal-kombat-3/",
    repository: "https://github.com/henriquejensen/mortal-kombat-3",
    description:
      "A mortal kombat 3 interface made with React, Typescript, ViteJs",
    image: mortalKombat3,
  },
  {
    id: 3,
    title: "Image Uploader",
    link: "https://image-uploader-flame.vercel.app/",
    repository: "https://github.com/henriquejensen/image-uploader",
    description:
      "A image uploader app made with NextJs, TailWindCSS, Multer and AWS S3",
    image: imageUploader,
  }
];
