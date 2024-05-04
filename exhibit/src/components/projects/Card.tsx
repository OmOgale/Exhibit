import * as React from "react";
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { LiaSignLanguageSolid } from "react-icons/lia";
import { IconType } from "react-icons";

interface RepositoryCardProps {
  title: string;
  description: string;
  url?: string;
  languages?: string[];
  tools?: string[];
  labels?: string[];
  icon?: IconType;
  toastText?: string;
}
const RepositoryCard = (props: RepositoryCardProps) => {
  const { title, description, languages, url, tools, labels, icon, toastText } = props;
  const toast = useToast();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    link?: string
  ) => {
    link ? window.open(link) : null;
    e.stopPropagation();
  };

  const handleToast = (toastText: string) => {
    toast({
      title: toastText,
      status: "info",
      duration: 3000,
      isClosable: true,
      colorScheme: "exhibit",
      position: "top",
    });
  }

  return (
    <Box
      py={4}
      px={[2, 4]}
      mt={2}
      rounded="xl"
      background="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(3px)"
      _hover={{
        background: "rgba(255, 255, 255, 0.2)", 
        backdropFilter: "blur(4px)",
        cursor: url || toastText ? "pointer" : "default"
      }}
      onClick={toastText ? (e) => handleToast(toastText) : (e) => handleLinkClick(e, url)}
      height="auto"
      mb={5}
    >
      <VStack overflow="hidden" align="start" spacing={1}>
        <VStack spacing={1} align="start" w="full">
          <Flex justifyContent="space-between" width="full">
            <HStack cursor="pointer">
              <Icon as={FiGithub} boxSize={["0.9em", "1.5em"]} mt="1px" />
              <Text
                fontSize={["sm", "xl"]}
                noOfLines={1}
                fontWeight="700"
                align="left"
                color={"exhibit.300"}
              >
                {title}
              </Text>
            </HStack>
            <HStack cursor="pointer">
              {/* {forks_count && (
                <Flex _hover={{ color: "blue.500" }} alignItems="center">
                  <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                  <Box as="span" ml="1" fontSize="sm">
                    {forks_count}
                  </Box>
                </Flex>
              )} */}
              <Icon as={icon} boxSize={["0.9em", "1.5em"]} mt="1px" />
            </HStack>
          </Flex>
          {languages && (
            <Flex justifyContent="space-between" width="100%" height="auto">
              <Box>
                <SimpleGrid spacing="2" width="full" columns={4}>
                  {languages.map((lang) => (
                    <Tag
                      key={lang}
                      size={["sm", "md"]}
                      colorScheme="cyan"
                      borderRadius="full"
                      flex="auto"
                      justifyContent="center"
                    >
                      <Text fontSize={["0.6rem", "inherit", "inherit"]}>
                        {lang}
                      </Text>
                    </Tag>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          )}
          {labels && (
            <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack spacing="1">
                  {labels.map((label) => (
                    <Tag
                      key={label}
                      size={["sm", "md"]}
                      colorScheme="orange"
                      borderRadius="full"
                    >
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {label}
                      </Text>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Flex>
          )}
        </VStack>
        <Box>
          <Text fontWeight="450" fontSize={["xs", "md"]} textAlign="left" mt={1}>
            {description}
          </Text>
        </Box>
        &lsquo; &rsquo;
      </VStack>
    </Box>
  );
};

export default RepositoryCard;
