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
  const [isClick, setClick] = useState(false);
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
      w={{ base: "90vw", xl: "unset" }}
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
      {/* <Flex flexDirection={"column"} mt={100}>
        <Flex
          bg="white"
          p={{ base: 6, sm: 10 }}
          justifyContent="center"
          alignItems="center"
          borderRadius={8}
          mr={100}
          border={"10px solid #d98aa2"}
        >
          <Box
            maxW="9xl"
            mx="auto"
            px={{
              base: 4,
              lg: 8,
            }}
          >
            <Box
              textAlign={{
                lg: "center",
              }}
            >
              <chakra.p
                mt={2}
                fontSize={{
                  base: "2xl",
                  sm: "4xl",
                }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={"black"}
              >
                Overview
              </chakra.p>
              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize={{ base: "md", sm: "xl" }}
                mx={{
                  lg: "auto",
                }}
                color="gray.500"
              >
                A sophomore (2B) studying Computer Science (Honours Co-op) at
                the{" "}
                <Link target="_blank" href="https://uwaterloo.ca/">
                  University of Waterloo.
                </Link>{" "}
                👨‍💻
              </chakra.p>
              <HStack
                maxW="2xl"
                mx={{
                  lg: "auto",
                }}
                color="gray.500"
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
                spacing={3}
              >
                <Link
                  target="_blank"
                  href="https://ca.linkedin.com/in/om-ogale"
                  aria-label="LinkedIn"
                >
                  <Icon
                    boxSize={6}
                    stroke="currentColor"
                    aria-hidden="true"
                    as={FaLinkedin}
                    _hover={{ color: "exhibit.300" }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="mailto:oogale@uwaterloo.ca"
                  aria-label="Email"
                >
                  <Icon
                    boxSize={6}
                    stroke="currentColor"
                    aria-hidden="true"
                    as={MdAttachEmail}
                    _hover={{ color: "exhibit.300" }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="tel:+15489949110"
                  aria-label="Phone"
                >
                  <Icon
                    boxSize={6}
                    stroke="currentColor"
                    aria-hidden="true"
                    as={IoCall}
                    _hover={{ color: "exhibit.300" }}
                  />
                </Link>
              </HStack>
              <chakra.p
                maxW="2xl"
                fontSize="sm"
                mx={{
                  lg: "auto",
                }}
                color="gray.500"
                display={{ base: "none", md: "unset" }}
              >
                (You can quick navigate by clicking the icons below!)
              </chakra.p>
            </Box>

            <Box mt={10}>
              <Stack
                justifyContent="center"
                spacing={{
                  base: 10,
                  md: 0,
                }}
                display={{
                  md: "grid",
                }}
                gridTemplateColumns={{
                  md: "repeat(2,1fr)",
                }}
                gridColumnGap={{
                  md: 8,
                }}
                gridRowGap={{
                  md: 10,
                }}
              >
                <Feature
                  title="Tech Stack"
                  icon={AiOutlineThunderbolt}
                  href={"https://github.com/OmOgale"}
                  _self={false}
                >
                  <Text fontWeight={"semibold"}>Languages:</Text>
                  <Text>TypeScript, Python, C++, C, SQL, Racket</Text>
                  <Text fontWeight={"semibold"}>
                    Tools, Frameworks and APIs:
                  </Text>
                  <Text>
                    ReactJS, Node.js, Express.js, Next.js, Chakra UI, Material
                    UI, HTML5, CSS, Flask, Recharts, Google Charts, Docker,
                    MongoDB, Git, Bash, Vercel, Android Debug Bridge, QNX,
                    Agile, Jira, Slash, VS Code, LaTeX, WordPress, Office 365
                  </Text>
                </Feature>
                <Feature
                  title="Tech Stack"
                  icon={AiOutlineThunderbolt}
                  href={"https://github.com/OmOgale"}
                  _self={false}
                >
                  <Text fontWeight={"semibold"}>Languages:</Text>
                  <Text>TypeScript, Python, C++, C, SQL, Racket</Text>
                  <Text fontWeight={"semibold"}>
                    Tools, Frameworks and APIs:
                  </Text>
                  <Text>
                    ReactJS, Node.js, Express.js, Next.js, Chakra UI, Material
                    UI, HTML5, CSS, Flask, Recharts, Google Charts, Docker,
                    MongoDB, Git, Bash, Vercel, Android Debug Bridge, QNX,
                    Agile, Jira, Slash, VS Code, LaTeX, WordPress, Office 365
                  </Text>
                </Feature>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export default BlogPosts;
