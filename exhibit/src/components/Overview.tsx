import {
  Flex,
  Icon,
  Box,
  Link,
  Stack,
  Text,
  chakra,
  HStack,
} from "@chakra-ui/react";
import { RiArticleLine } from "react-icons/ri";
import { TbWorldHeart } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaCodeBranch } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { PiLightbulbBold } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";

// @ts-ignore
export const Feature = (props) => {
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
            <Link
              target={props._self ? "_self" : "_blank"}
              href={props.href}
              as={NextLink}
            >
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
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="medium"
          lineHeight="6"
          color="gray.900"
        >
          {props.title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          fontSize={{ base: "sm", sm: "unset" }}
          color="gray.500"
        >
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

Feature.defaultProps = {
  to: null,
  href: null,
  _self: false,
};

export const Overview = ({
  projects,
  experiences,
  milestones,
}: {
  projects: string;
  experiences: string;
  milestones: string;
}) => {
  return (
    <Flex
      bg="exhibit.300"
      p={{base: 6, sm: 10}}
      justifyContent="center"
      alignItems="center"
      borderRadius={{base: 30, sm: 50}}
      mr={100}
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
              A junior (3A) studying Computer Science (Honours Co-op) with AI specialization at the{" "}
              <Link target="_blank" href="https://uwaterloo.ca/">
                University of Waterloo.
              </Link>{" "}
              👨‍💻<br />
              Looking for Spring 2025 internships!
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
                href="https://github.com/OmOgale"
                aria-label="GitHub"
              >
                <Icon
                  boxSize={6}
                  stroke="currentColor"
                  aria-hidden="true"
                  as={FaGithub}
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
              <Feature title="Experiences" icon={TbWorldHeart} to={experiences}>
                I have had extensive hands-on experience 📈 with scalable microservices, full-stack web
                development as well as embedded hardware systems and Test-Driven Development (TDD) with E2E integration and unit testing
                through my past experiences. I am a Software Executive at GDSC and a 
                Software Dev at UW's CS Club. I have also lead my team at hackathons such as
                HTN @ UWaterloo, DELTAHACKS @ McMaster, McHacks @ McGill! On the side, I love public speaking and debating. 🎤
              </Feature>

              <Feature title="Projects" icon={FaCodeBranch} to={projects}>
                Focused on spearheading projects with real-world usecases ❤️.
                Have developed projects in multiple stacks including full-stack
                development with the MERN stack. I also have fun in designing optimized pure C++
                and Python projects.
              </Feature>

              <Feature
                title="Tech Stack"
                icon={AiOutlineThunderbolt}
                href={"https://github.com/OmOgale"}
                _self={false}
              >
                <Text fontWeight={"semibold"}>Languages:</Text>
                <Text>Java, TypeScript, C++, Python, C, SQL, JavaScript, Bash, Racket, HTML/CSS</Text>
                <Text fontWeight={"semibold"}>Frameworks and Technologies:</Text>
                <Text>
                Spring Boot, JUnit, Next.js, React, MongoDB, MySQL, PostgreSQL, Node.js, Express.js, Flask, jQuery
                </Text>
                <Text fontWeight={"semibold"}>Developer Tools:</Text>
                <Text>
                Google Cloud Platform (GCP), Git, Docker, Datadog, Terraform, Kubernetes, Tekton, Jenkins, Visual Studio Code,
                IntelliJ IDEA, Agile, Jira, Slash, Vercel
                </Text>
              </Feature>

              <Feature
                title="Blog"
                icon={RiArticleLine}
                href={"/blog"}
                _self={true}
              >
                I love writing stuff about touching topics and, unsurprisingly
                tech! 😅 Why don&apos;t ya have a look? Feel free to go through some of my articles and poetry.
                ✍️
              </Feature>

              <Feature
                title="Milestones"
                icon={PiLightbulbBold}
                to={milestones}
              >
                A summary of the progress I have made throughout the years with my notable exploits 🏆 as well as some fun facts! 😄 
              </Feature>

              <Feature
                title="Resume"
                icon={ImProfile}
                href={
                  "https://drive.google.com/file/d/1_xPWEeODgEChL-c-6RmAVOEGJnklgcma/view?usp=sharing"
                }
                _self={false}
              >
                Looking for internships for Spring 2025! 🚀 Feel free to peruse my
                resume and reach out to me for any opportunities. {"\n"}{" "}
                <Link
                  color="exhibit.300"
                  target="_blank"
                  href="https://drive.google.com/file/d/1_xPWEeODgEChL-c-6RmAVOEGJnklgcma/view?usp=sharing"
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
