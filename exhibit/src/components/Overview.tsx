import { Flex, Icon, Box, Link, Stack, Text, chakra } from "@chakra-ui/react";
import { RiArticleLine } from "react-icons/ri";
import { TbWorldHeart } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegFileCode } from "react-icons/fa6";

// @ts-ignore
const Feature = (props) => {
  return (
    <Flex alignItems={"top"}>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          color="exhibit.200"
        >
          <Icon
            boxSize={6}
            stroke="currentColor"
            aria-hidden="true"
            as={props.icon}
          >
            {/* {props.icon} */}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4} mr={12} mb={8}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color="gray.900"
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color="gray.500">
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export const Overview = () => {
  return (
    <Flex
      bg="exhibit.300"
      p={20}
      justifyContent="center"
      alignItems="center"
      borderRadius={50}
      mr={100}
    >
      <Box py={12} bg="white" rounded="xl">
        <Box
          maxW="7xl"
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
                base: "3xl",
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
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="gray.500"
            >
              A sophomore (2B) studying Computer Science at the{" "}
              <Link target="_blank" href="https://uwaterloo.ca/">
                University of Waterloo.
              </Link>{" "}
              👨‍💻
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
              <Feature title="Work Experiences" icon={TbWorldHeart}>
                I have had extensive hands-on experience 📈 with web development
                as well as embedded hardware systems and testing through my past
                experiences. Spearheaded my team at hackathons such as HTN @
                UWaterloo, DELTAHACKS @ McMaster, McHacks @ McGill! I have also
                held leadership positions in debating. 🎤
              </Feature>

              <Feature title="Projects" icon={FaRegFileCode}>
                Focused on creating only projects with real-world usecases ❤️.
                Have developed projects in multiple stacks including full-stack
                development with the MERN stack as well as alternate frameworks
                such as Flask. I also have fun in designing optimized pure C++
                and Python projects.
              </Feature>

              <Feature title="Tech Stack" icon={AiOutlineThunderbolt}>
                <Text fontWeight={"semibold"}>Languages:</Text>
                <Text>TypeScript, Python, C++, C, SQL, Racket</Text>
                <Text fontWeight={"semibold"}>Tools and Frameworks:</Text>
                <Text>
                  ReactJS, Node.js, Express.js, Next.js, HTML5, CSS, Flask,
                  Docker, MongoDB, Git, Bash, Vercel, Android Debug Bridge, QNX,
                  Agile, Jira, Slash, VS Code, LaTeX, WordPress, Office 365
                </Text>
              </Feature>

              <Feature title="Blog" icon={RiArticleLine}>
                I love writing stuff about touching topics and, unsurprisingly
                tech! 😅 Feel free to go through some of my articles and poetry.
                ✍️
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
