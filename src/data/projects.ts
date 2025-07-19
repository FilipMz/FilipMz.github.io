export interface Project {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "Test1",
    img: "/itemPreview.webp",
    desc: "Placeholder.",
    url: "!#",
    badge: "NEW",
  },
  {
    title: "Test2",
    img: "/itemPreview.webp",
    desc: "Placeholder.",
    url: "!#",
  },
  /* add more here */
];
