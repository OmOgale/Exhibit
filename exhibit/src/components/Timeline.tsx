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
import { BsSuitcaseLg } from "react-icons/bs";
import { SiFord } from "react-icons/si";

const milestones = [
  {
    id: 1,
    title: "Software Developer @ Ford",
    icon: SiFord,
    description: (
      <ul text-align="left">
        <li>
          Setup the First installation of Ford's latest in-development
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
          OOPs, internal APIs and the Slash framework in Python within an Agile ecosystem.
        </li>
        <li>
          In-depth involvement with the OS by working on QNX, Linux and Android Debug
          Bridge (adb).
        </li>
      </ul>
    ),
    date: "MAY 8, 2023 - AUGUST 25, 2023",
    location: "Ottawa, ON",
  },
];

const Milestones = () => {
  return (
    <VStack
      maxWidth="5xl"
      w={{ base: 80, md: "auto" }}
      gap={0}
      mt={50}
      mr={20}
      textAlign="left"
    >
      <Text
        fontSize="4xl"
        w="full"
        fontWeight="extrabold"
        mb={18}
        ml={115}
        color="exhibit.300"
      >
        Work Experiences
      </Text>
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
      bg="white"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      borderTop="8px"
      borderColor="exhibit.300"
    >
      <Icon as={icon} fontSize={60} color="exhibit.200" />
      <Box>
        <VStack spacing={2} mb={3} textAlign="left" color={"black"}>
          <Text
            fontSize="lg"
            color="exhibit.300"
            fontWeight="semibold"
            w="100%"
            textAlign="left"
          >
            {date}
          </Text>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text
            fontSize="md"
            w="100%"
            textAlign="left"
            color="exhibit.300"
            fontWeight="semibold"
          >
            <em>{location}</em>
          </Text>
          <Text fontSize="md" w="100%" textAlign="left" ml="10">
            {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
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

export default Milestones;
