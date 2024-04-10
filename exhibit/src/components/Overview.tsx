import { Flex, Icon, Box, Link, Stack, Text, chakra } from "@chakra-ui/react";
import { RiArticleLine } from "react-icons/ri";
import { TbWorldHeart } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaCodeBranch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";

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
          display={{ base: "none", md: "unset" }}
        >
          {props.to ? (
            <ScrollLink to={props.to} smooth={true} duration={1000}>
              <Icon
                boxSize={6}
                stroke="currentColor"
                aria-hidden="true"
                as={props.icon}
                mb={5}
                _hover={{ color: "exhibit.300", cursor: "pointer" }}
              />
            </ScrollLink>
          ) : (
            <Link href={props.href} as={NextLink}>
              <Icon
                boxSize={6}
                stroke="currentColor"
                aria-hidden="true"
                as={props.icon}
                mb={5}
                _hover={{ color: "exhibit.300" }}
              />
            </Link>
          )}
        </Flex>
      </Flex>
      <Box mb={8} whiteSpace={"pre-line"}>
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

Feature.defaultProps = {
  to: null,
  href: null,
};

export const Overview = ({
  projects,
  experiences,
}: {
  projects: string;
  experiences: string;
}) => {
  return (
    <Flex
      bg="exhibit.300"
      p={10}
      justifyContent="center"
      alignItems="center"
      borderRadius={50}
      mr={100}
      // TODO: this was unset before for xl. Try to fix if can.
      w={{ base: "90vw", xl: "unset" }}
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
            <chakra.p
              mt={4}
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
              <Feature title="Experiences" icon={TbWorldHeart} to={experiences}>
                I have had extensive hands-on experience 📈 with full-stack web
                development as well as embedded hardware systems and testing
                through my past experiences. Lead my team at hackathons such as
                HTN @ UWaterloo, DELTAHACKS @ McMaster, McHacks @ McGill! I have
                also held leadership positions in debating. 🎤
              </Feature>

              <Feature title="Projects" icon={FaCodeBranch} to={projects}>
                Focused on spearheading projects with real-world usecases ❤️.
                Have developed projects in multiple stacks including full-stack
                development with the MERN stack as well as alternate frameworks
                such as Flask. I also have fun in designing optimized pure C++
                and Python projects.
              </Feature>

              <Feature
                title="Tech Stack"
                icon={AiOutlineThunderbolt}
                href={"https://github.com/OmOgale"}
              >
                <Text fontWeight={"semibold"}>Languages:</Text>
                <Text>TypeScript, Python, C++, C, SQL, Racket</Text>
                <Text fontWeight={"semibold"}>Tools, Frameworks and APIs:</Text>
                <Text>
                  ReactJS, Node.js, Express.js, Next.js, Chakra UI, Material UI,
                  HTML5, CSS, Flask, Recharts, Google Charts, Docker, MongoDB,
                  Git, Bash, Vercel, Android Debug Bridge, QNX, Agile, Jira,
                  Slash, VS Code, LaTeX, WordPress, Office 365
                </Text>
              </Feature>

              <Feature
                title="Blog"
                icon={RiArticleLine}
                href={"/blog"}
              >
                I love writing stuff about touching topics and, unsurprisingly
                tech! 😅 Feel free to go through some of my articles and poetry.
                ✍️
              </Feature>

              <Feature
                title="Resume"
                icon={ImProfile}
                href={
                  "https://drive.google.com/file/d/1WHRjIFG-Zhwcfk7w0_8YuQNea7IvoPKS/view?usp=sharing"
                }
              >
                Looking for internships for Fall 2024! 🚀 Feel free to peruse my
                resume and reach out to me for any opportunities. {"\n"}{" "}
                <Link
                  color="exhibit.300"
                  target="_blank"
                  href="https://drive.google.com/file/d/1WHRjIFG-Zhwcfk7w0_8YuQNea7IvoPKS/view?usp=sharing"
                >
                  Resume.pdf
                </Link>
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
