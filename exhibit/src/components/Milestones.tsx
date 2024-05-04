import {
  VStack,
  Heading,
  Box,
  Link,
  BoxProps,
  Circle,
  Flex,
  HStack,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { SlTrophy } from "react-icons/sl";
import { PiLightbulbBold, PiMicrophoneStageLight } from "react-icons/pi";
import { BsEmojiLaughing } from "react-icons/bs";

const milestoneItems = {
  "2024": [
    {
      icon: FiHome,
      text: (
        <>
          Built my{" "}
          <Link
            href="https://omogale.vercel.app/"
            color="cyan.300"
            _hover={{ color: "cyan.400" }}
            isExternal
          >
            portfolio website{" "}
          </Link>
          utilizing the MERN stack along with Chakra UI.
        </>
      ),
    },
    {
      icon: FaTools,
      text: (
        <>
          Earned{" "}
          <Link
            href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/393a3a94-ee0b-4733-98d7-4e3bb460f2cd-omogale-n-a-a000b71d-da86-4b9f-8324-8a5f8f1b998a-certificate.pdf"
            color="cyan.300"
            _hover={{ color: "cyan.400" }}
            isExternal
          >
            MongoDB
          </Link>{" "}
          certification and accumulated over 27 learning hours studying integral
          NoSQL practices.
        </>
      ),
    },
    {
      icon: FiPackage,
      text: (
        <>
          Spent time familiarizing myself with Express.js and authentication
          libraries to build the blog for my website.
        </>
      ),
    },
    {
      icon: BsEmojiLaughing,
      text: (
        <>
          Spearheaded my first complex PR without requested changes lol. I had to creatively overhaul the Global Test Metrics page of the Performance Team at Ford while dealing with CGI scripts, MySQL scripting, Datepickers from MUI X, etc.
        </>
      ),
    },
  ],
  "2023": [
    {
      icon: FiBarChart2,
      text: (
        <>
          Setup the <Text display="inline-block" fontWeight={"semibold"}>first installation</Text> of Ford&lsquo;s latest in-development infotainment system in the Performance Lab at Ottawa. Expedited this task in a week (with an initial deadline of over 2 weeks) so that it could be demoed to the {" "}
          <Link
            href="https://www.linkedin.com/in/roz-ho-619842/"
            color="cyan.300"
            _hover={{ color: "cyan.400" }}
            isExternal
          >
            Chief Connected Vehicle Sofware Officer.
          </Link>
        </>
      ),
    },
    {
      icon: FiPackage,
      text: (
        <>
          Spent time expanding on my foundating knowledge of frontend development with component libraries in React.
        </>
      ),
    },
  ],
  "2022": [
    {
      icon: PiMicrophoneStageLight,
      text: (
        <>
          Held the positions of  <Text display="inline-block" fontWeight={"semibold"}>President and Vice President Education</Text> in the Toastmasters Youth Leadership Programs across two clubs in my city. Organized meetings and won several awards.
        </>
      ),
    },
  ],
  "2021": [
    {
      icon: SlTrophy,
      text: (
        <>
          Won{" "}
          <Link
            href="/Eureka_Certificate.pdf"
            color="cyan.300"
            _hover={{ color: "cyan.400" }}
            isExternal
          >
            3rd place
          </Link>{" "}
          nationally out of ~13,500 teams in the Eureka! Junior 2021 National Entrepreneurship Competition hosted by IIT Bombay. Pitched the idea of a smart water-saving attachment for faucets in the junior edition of <Text display="inline-block" fontWeight={"semibold"}>Asia&lsquo;s largest Business Model competition.</Text> 
        </>
      ),
    },
  ],
  "2019": [
    {
      icon: FiBarChart2,
      text: (
        <>
          Completed all 8 levels of the UCMAS Abacus & Mental Arithmetic Program and scored <Text display="inline-block" fontWeight={"semibold"}>100%</Text> across all levels.
        </>
      ),
    },
  ],
  "2017": [
    {
      icon: BsEmojiLaughing,
      text: (
        <>
          Rode a roller coaster for the first time at <Text display="inline-block" fontWeight={"semibold"}>Disneyland Paris</Text> to (unsuccessfully) conquer my fear of heights. I have never been on a roller coaster since then ... almost lost my spectacles lol.
        </>
      ),
    },
  ],
  "2016": [
    {
      icon: SlTrophy,
      text: (
        <>
          Won{" "}
          <Link
            href="https://saudigazette.com.sa/article/167373"
            color="cyan.300"
            _hover={{ color: "cyan.400" }}
            isExternal
          >
            1st place
          </Link>{" "}
          at the 21st UCMAS Abacus & Mental Arithmetic International Competition. Represented Saudi Arabia in the competition where our team placed <Text display="inline-block" fontWeight={"semibold"}>2nd overall among 58 countries.</Text>
        </>
      ),
    },
  ],
};

const Milestones = () => {

  return (
    <Stack maxW="7xl" mt={50} gap={0}>
      <HStack alignItems={"center"}>
        <Icon color="exhibit.300" as={PiLightbulbBold} fontSize={[25, 35]} />
        <br />
        <Text
          color="exhibit.300"
          fontWeight="extrabold"
          fontSize={["2xl", "4xl"]}
        >
          Milestones
        </Text>
      </HStack>
      <VStack textAlign="start" align="start" mb={5}>
        {Object.entries(milestoneItems)
          .sort((a, b) => {
            return a[0] <= b[0] ? 1 : -1;
          })
          .map(([year, items]) => {
            return (
              <Box key={year} w={{ base: "85vw", xl: "80vw", "2xl": "65vw" }}>
                <Heading fontSize={["xl", "3xl"]} fontWeight="600" my={5}>
                  {year}
                </Heading>
                <Box>
                  {items.map(({ icon, text }, index) => (
                    <MilestoneItem key={index} icon={icon}>
                      {text}
                    </MilestoneItem>
                  ))}
                </Box>
              </Box>
            );
          })}
      </VStack>
    </Stack>
  );
};

interface MilestoneItemProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = "exhibit.300";
  return (
    <Flex minH={20} {...props} width="full">
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg="white"
          background="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(2px)"
        />
        <Box
          as={icon}
          size="1.25rem"
          color={color}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps} fontSize={["xs", "md"]}>
        {children}
      </Box>
    </Flex>
  );
};

export default Milestones;
