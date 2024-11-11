import { FaChess } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegFileZipper } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineSchool } from "react-icons/md";

export const repositoriesList = [
  {
    title: "Om's Exhibit",
    description: "My portfolio website which is a showcase of my projects, skills and experiences. Checkout my blog where I jot down my thoughts! I am actively adding new articles and poems!",
    languages: ['TypeScript', 'ReactJS', 'ChakraUI', 'Vercel'],
    tools: ['Nextjs', 'react', 'chakraUi'],
    icon: CgProfile,
    toast: "You are already here lol :)",
  },
  {
    title: 'Zippy',
    description: 'Zippy is an extremely efficient tool to compress and decompress text files by utilizing the Huffman Algorithm and concurrent parallel processing. It achieves a greater than 50% compression ratio on average!',
    languages: ['C++', 'Python', 'Docker'],
    tools: ['Nextjs', 'react', 'chakraUi'],
    url: 'https://github.com/OmOgale/Zippy',
    icon: FaRegFileZipper,
  },
  {
    title: 'DailyDive',
    description: "DailyDive is your daily newsletter that provides personalized content based on user preferences. A digest of personalized news, stocks, jokes, memes and more integrated with Cohere's API that plays the role of your daily wellness guru to have the best start to your day!",
    languages: ['TypeScript', 'ReactJS', 'Python', 'Flask', 'TailwindCSS'],
    tools: ['react', 'chakraUi'],
    url: 'https://github.com/Everyday-Newsletter/',
    icon: FaRegNewspaper,
  },
  {
    title: 'PlaceMe',
    description: "PlaceMe is intended to place a user in their perfect neighbourhood. Criteria that a user can utilize to research include housing rates, crime score, and convenience score to ensure that one finds the right place to stay! Utilizes publicly sourced data along with relevance algorithms to optimize the search.",
    languages: ['TypeScript', 'ReactJS', 'MaterialUI', 'Firebase', 'OAuth'],
    labels: ["WIP"],
    tools: ['react', 'chakraUi'],
    url: "https://github.com/PlaceMe-Website/PlaceMe",
    icon: GrMapLocation,
  },
  {
    title: 'Chess',
    description: "This project was designed as the final project for CS246 (Fall 2023 offering) after multiple planning revisions as well as whiteboard \
    brainstorming using UML Diagrams. Created in C++ utilizing OOP principles, software design practices such as MVC as well as algorithms for opponent AI such as Minimax with Alpha-Beta pruning that searches upto a depth of 6 plys.",
    languages: ['C++'],
    tools: ['react', 'chakraUi'],
    url: "https://github.com/OmOgale/CS246-Chess",
    icon: FaChess,
  },
  {
    title: 'Studybeaver',
    description: "A website I built during the Covid-19 outbreak to bridge the \
      gap caused due to remote learning. Aggregated exam strategies using surveys from teachers and created practice question sheets.",
    languages: ['Wordpress', 'HTML', 'CSS'],
    tools: ['react', 'chakraUi'],
    icon: MdOutlineSchool,
  },
];
