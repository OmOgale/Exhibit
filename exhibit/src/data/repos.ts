import { FaChess } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegFileZipper } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineSchool } from "react-icons/md";

export const repositoriesList = [
  {
    title: "Om's Exhibit",
    description: "My portfolio website which is a showcase of my projects, skills and experiences. I also have a blog in-progress where I plan to jot down my thoughts and experiences.",
    languages: ['Typescript', 'ReactJS', 'ChakraUI', 'Vercel'],
    tools: ['Nextjs', 'react', 'chakraUi'],
    icon: CgProfile,
    toast: "You are already here lol :)",
  },
  {
    title: 'Zippy',
    description: 'Zippy is an extremely efficient tool to compress and decompress text files by utilizing the Huffman Algorithm and concurrent parallel processing.',
    languages: ['C++', 'Python', 'Docker'],
    tools: ['Nextjs', 'react', 'chakraUi'],
    url: 'https://github.com/OmOgale/Zippy',
    icon: FaRegFileZipper,
  },
  {
    title: 'DailyDive',
    description: "DailyDive is a lighthearted powerhouse that presents a nutshell read-up of everything you ever need! An unmissable digest of personalized news, stocks, jokes, MEMES and more integrated with Cohere's API that you can personalize to your heart's content. Created at Hack the North 2023!",
    languages: ['Typescript', 'ReactJS', 'Python', 'Flask', 'TailwindCSS'],
    tools: ['react', 'chakraUi'],
    url: 'https://github.com/Everyday-Newsletter/',
    icon: FaRegNewspaper,
  },
  {
    title: 'PlaceMe',
    description: "Tensed about not finding the right place to stay? Don’t worry! Get Placed now at PlaceMe! At PlaceMe, we help place you in the neighbourhood of your dreams!",
    languages: ['Typescript', 'ReactJS', 'MaterialUI', 'Firebase', 'OAuth'],
    labels: ["WIP"],
    tools: ['react', 'chakraUi'],
    url: "https://github.com/PlaceMe-Website/PlaceMe",
    icon: GrMapLocation,
  },
  {
    title: 'Chess',
    description: "This project was designed as the final project for CS246 (Fall 2023 offering) after multiple planning revisions as well as whiteboard \
    brainstorming using UML Diagrams. Created in C++ utilizing OOP principles, software design practices such as MVC as well as algorithms for opponent AI such as Minimax with Alpha-Beta pruning.",
    languages: ['C++'],
    tools: ['react', 'chakraUi'],
    url: "https://github.com/OmOgale/CS246-Chess",
    icon: FaChess,
  },
  {
    title: 'Studybeaver',
    description: "A website I built during the Covid-19 outbreak to bridge the \
      gap caused due to remote learning. Aggregated exam strategies using services from teachers across different curriculums and created practice questions.",
    languages: ['Wordpress', 'HTML', 'CSS'],
    tools: ['react', 'chakraUi'],
    icon: MdOutlineSchool,
  },
];
