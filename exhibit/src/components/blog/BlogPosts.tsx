import {
  Flex,
  Box,
  chakra,
  Link,
  Text,
  HStack,
  Icon,
  Stack,
  ChakraStyledOptions,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Feature } from "../Overview";
import { AiOutlineThunderbolt } from "react-icons/ai";
import SearchBar from "./SearchBar";
import Posts from "./Posts";
import Heart from "react-animated-heart";
import { useState } from "react";
import Description from "./Description";

const BlogPosts = () => {

  const text = "Blog.";
  const descriptionOptions: ChakraStyledOptions = {
    fontWeight: "bold",
    letterSpacing: "tight",
    fontSize: { base: "5xl", md: "6xl" },
    whiteSpace: "pre-line",
    align: "left",
    lineHeight: "1",
    mb: 10,
  }

  return (
    <Flex
      flexDirection={"column"}
      ml={{ base: "5vw", "2xl": 250 }}
      mt={100}
      mr={[50, 100]}
      flex="auto"
      flexGrow={1}
      minH="100vh"
    >
      <Description text={text} options={descriptionOptions} />
      {/* <div>
        <Heart
          styles={{ fontSize: "20px" }}
          isClick={isClick}
          onClick={() => setClick(!isClick)}
        />
      </div> */}
      <SearchBar />
      <Flex mt={10}>
          <Posts />
      </Flex>
    </Flex>
  );
};

export default BlogPosts;
