"use client";
import React, { ReactNode } from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaRegNewspaper } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IconType } from "react-icons";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { SiFord } from "react-icons/si";
import { TbWorldHeart } from "react-icons/tb";

const milestones = [
  {
    id: 1,
    title: "Software Developer @ Ford",
    icon: SiFord,
    description: (
      <ul text-align="left">
        <li>
          Setup the First installation of Ford&lsquo;s latest in-development
          infotainment system in the Performance Lab.
        </li>
        <li>
          Developing key KPIs for identifying performance bottlenecks utilizing
          OOPs, internal APIs and Slash in Python within an Agile framework.
        </li>
        <li>
          In-depth involvement with the OS by working on QNX and Android Debug
          Bridge (adb).
        </li>
      </ul>
    ),
    date: "JANUARY 8, 2024 - APRIL 19, 2024",
    location: "Oakville, ON",
  },
  {
    id: 2,
    title: "System Software Developer @ Ford",
    icon: SiFord,
    description: (
      <ul text-align="left">
        <li>
          Setup the First installation of Ford&lsquo;s latest in-development
          infotainment system in the Performance Lab.
        </li>
        <li>
          Developing key KPIs for identifying performance bottlenecks utilizing
          OOPs, internal APIs and Slash in Python within an Agile framework.
        </li>
        <li>
          In-depth involvement with the OS by working on QNX and Android Debug
          Bridge (adb).
        </li>
        <li>
          Received outstanding reviews from both my supervisor,{" "}
          <Link
            textDecoration="underline"
            target="_blank"
            href="https://ca.linkedin.com/in/rahul-trivedi-1091035"
          >
            Rahul Trivedi
          </Link>
          , and department head,{" "}
          <Link
            textDecoration="underline"
            target="_blank"
            href="https://ca.linkedin.com/in/yaron-spanglet-989b715"
          >
            Yaron Spanglet
          </Link>
          .
        </li>
      </ul>
    ),
    date: "MAY 8, 2023 - AUGUST 25, 2023",
    location: "Ottawa, ON",
  },
];

const Timeline = () => {
  return (
    <VStack
      maxWidth="7xl"
      w={{ base: "85vw", xl: "80vw", "2xl": "65vw"}}
      gap={0}
      mt={50}
    >
      <HStack justifyContent={"left"} w="100%">
        <Icon color="exhibit.300" as={TbWorldHeart} fontSize={[25, 35]}/>
        <br />
        <Text color="exhibit.300" fontWeight="extrabold" fontSize={["2xl", "4xl"]}>Experiences</Text>
      </HStack>

      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...milestone} />
        </Flex>
      ))}
    </VStack>
  );
};

interface CardProps {
  title: string;
  description: ReactNode;
  icon: IconType;
  date: string;
  location: string;
}

const Card = ({ title, description, icon, date, location }: CardProps) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      my={15}
      background="rgba(255, 255, 255, 0.1)" // Semi-transparent background
      backdropFilter="blur(3px)"
      spacing={5}
      rounded="lg"
      alignItems="center"
      borderTop="8px"
      borderColor="exhibit.300"
      gap={1}
    >
      <Icon
        as={icon}
        display={{ base: "none", sm: "unset" }}
        fontSize={60}
        color="white"
      />
      <Box>
        <VStack spacing={2} mb={3} textAlign="left" color={"black"}>
          <Text
            fontSize={["sm", "lg"]}
            color="exhibit.300"
            fontWeight="semibold"
            w="100%"
            textAlign="left"
          >
            {date}
          </Text>
          <chakra.h1 fontSize={["lg", "2xl"]} lineHeight={1.2} fontWeight="bold" color="white" w="100%">
            {title}
          </chakra.h1>
          <Text
            fontSize={["sm", "md"]}
            w="100%"
            textAlign="left"
            color="exhibit.300"
            fontWeight="semibold"
          >
            <em>{location}</em>
          </Text>
          <Text as={"div"} fontSize={["xs", "md"]} w="90%" textAlign="left" ml={5} color="white">
            {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="30px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor="exhibit.300"
        top="15px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid #d98aa2"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Timeline;
