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
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { LiaSignLanguageSolid } from "react-icons/lia";

interface RepositoryCardProps {
  title: string;
  description: string;
  url?: string;
  languages?: string[];
  tools?: string[];
  labels?: string[];
}
const RepositoryCard = (props: RepositoryCardProps) => {
  const { title, description, languages, url, tools, labels } = props;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    link?: string
  ) => {
    link ? window.open(link) : null;
    e.stopPropagation();
  };

  return (
    <Box
      py={4}
      px={[2, 4]}
      mt={2}
      rounded="xl"
      background="rgba(255, 255, 255, 0.1)" // Semi-transparent background
      backdropFilter="blur(3px)"
      _hover={{
        background: "rgba(255, 255, 255, 0.2)", // Change the background color on hover
        backdropFilter: "blur(4px)", // Increase the blur on hover
      }}
      onClick={(e) => handleLinkClick(e, url)}
      height="auto"
      mb={5}
    >
      <VStack overflow="hidden" align="start" spacing={1}>
        <VStack spacing={1} align="start" w="full">
          <Flex justifyContent="space-between" width="full">
            <HStack cursor="pointer">
              <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
              <Text
                fontSize="sm"
                noOfLines={1}
                fontWeight="700"
                align="left"
                color={"exhibit.300"}
              >
                {title}
              </Text>
            </HStack>
            {/* <HStack cursor="pointer" onClick={(e) => handleLinkClick(e, url)}>
              {forks_count && (
                <Flex _hover={{ color: "blue.500" }} alignItems="center">
                  <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                  <Box as="span" ml="1" fontSize="sm">
                    {forks_count}
                  </Box>
                </Flex>
              )}
              <Flex alignItems="center" _hover={{ color: "blue.500" }}>
                <Icon as={BiStar} boxSize="0.9em" mt="1px" />
                <Box as="span" ml="1" fontSize="sm">
                  {stargazers_count}
                </Box>
              </Flex>
            </HStack> */}
          </Flex>
          {languages && (
            <Flex justifyContent="space-between" width="100%" height="auto">
              <Box>
                <SimpleGrid spacing="2" width="full" columns={[4, 5]}>
                  {languages.map((lang) => (
                    <Tag
                      key={lang}
                      size="sm"
                      colorScheme="cyan"
                      borderRadius="full"
                      justifyContent="center"
                    >
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
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
                      size="sm"
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
          <Text fontWeight="450" fontSize="sm" textAlign="left">
            {description}
          </Text>
        </Box>
        &lsquo; &rsquo;
      </VStack>
    </Box>
  );
};

export default RepositoryCard;
