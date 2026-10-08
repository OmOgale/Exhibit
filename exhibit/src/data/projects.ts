export interface Project {
  name: string;
  href?: string;
  detail: string;
  stack: string;
  // Featured projects also appear on the home page.
  featured?: boolean;
  note?: string;
}

export const projects: Project[] = [
  {
    name: "RPG",
    href: "https://github.com/OmOgale/RPG",
    detail: "An AI role-playing game that generates NPC dialogue, judges free-form actions, and keeps world state so the story branches.",
    stack: "Python, OpenAI, Pydantic, Rich, Pytest",
    featured: true,
  },
  {
    name: "Zippy",
    href: "https://github.com/OmOgale/Zippy",
    detail: "File compression in C++ using parallel Huffman coding, reaching better than 2:1.",
    stack: "C++, Python, Docker",
    featured: true,
  },
  {
    name: "Chess",
    href: "https://github.com/OmOgale/CS246-Chess",
    detail: "My CS246 final project: object-oriented chess in C++ with an MVC design and a minimax opponent with alpha-beta pruning, searching six plies deep.",
    stack: "C++",
  },
  {
    name: "DailyDive",
    href: "https://github.com/Everyday-Newsletter/",
    detail: "A personalized daily newsletter of news, stocks, jokes, and memes, written with Cohere’s API.",
    stack: "TypeScript, React, Python, Flask, Tailwind",
  },
  {
    name: "Studybeaver",
    detail: "A study site I built during COVID remote learning, with exam strategies gathered from teacher surveys and practice question sheets.",
    stack: "WordPress",
  },
];
