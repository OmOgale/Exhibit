import React, { Fragment } from "react";
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Divider,
  Avatar,
  Flex,
  AvatarGroup,
  useColorModeValue,
  SimpleGrid,
  Grid,
  ChakraStyledOptions,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";

const articles = [
  {
    id: 1,
    tags: ["News"],
    title: "Build a Modern User Interface with Chakra UI",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    usernames: "Om Ogale",
    created_at: "Wed Apr 06 2022",
    read_time: "5 min read",
    likes: 0,
    published: true,
  },
  {
    id: 2,
    tags: ["Web Development", "Video"],
    title: "The Complete Guide to Ruby on Rails Encrypted Credentials",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
    usernames: "Om Ogale",
    created_at: "Sun Apr 03 2022",
    read_time: "5 min read",
    likes: 0,
    published: true,
  },
  {
    id: 3,
    tags: ["Web Development", "Video"],
    title: "The Complete Guide to Ruby on Rails Encrypted Credentials",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
    usernames: "Om Ogale",
    created_at: "Sun Apr 03 2022",
    read_time: "5 min read",
    likes: 0,
    published: true,
  },
];

const Post = ({
  article,
  featured,
}: {
  article: (typeof articles)[0];
  featured?: boolean;
}) => {
  const featuredStyles: ChakraStyledOptions = {
    borderTop: "7px solid",
    borderColor: "exhibit.300",
  };
  return (
    <Flex
      flexDirection="column"
      p={[3, 4]}
      background="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(2px)"
      _hover={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
      }}
      borderRadius={5}
      mb={5}
      {...(featured ? featuredStyles : {})}
    >
      <HStack spacing={2} mb={1}>
        {article.tags.map((cat) => (
          <Text
            key={cat}
            fontWeight="semibold"
            color="exhibit.600"
            borderRadius="full"
            fontSize="sm"
          >
            #{cat}
          </Text>
        ))}
      </HStack>
      <Box textAlign="left">
        <Text
          fontSize="xl"
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
          _hover={{ color: "exhibit.400", textDecoration: "underline" }}
        >
          {article.title}
        </Text>
        <Text fontSize="sm" noOfLines={2} lineHeight="normal" mt={1} mb={2}>
          {article.content}
        </Text>
      </Box>
      <Box mt="auto">
        <AvatarGroup size="sm" max={3} mb={1}>
          <Avatar name="Om Ogale" src={"/om_photo.jpg"} />
        </AvatarGroup>
        <Stack
          justifyContent="space-between"
          direction={{ base: "column", sm: "row" }}
        >
          <Stack gap={0}>
            <Text fontSize="sm" fontWeight="bold" textAlign={"left"}>
              {article.usernames}
            </Text>
            <Stack direction={"row"} spacing={1} textAlign={"left"}>
              <Text fontSize="sm">{article.created_at}</Text>
              <Text fontSize="sm">•</Text>
              <Text fontSize="sm">{article.read_time}</Text>
              {featured && (
                <>
                  <Text fontSize="sm">•</Text>
                  <Text
                    fontSize="sm"
                    color="exhibit.600"
                    fontWeight="bold"
                    textTransform="uppercase"
                    mb={2}
                  >
                    Featured Read
                  </Text>
                </>
              )}
            </Stack>
          </Stack>
          <HStack
            as={Link}
            spacing={1}
            p={1}
            alignItems="center"
            height="2rem"
            w="max-content"
            margin="auto 0"
            rounded="md"
            _hover={{ color: "exhibit.400" }}
          >
            <Text fontSize="sm"> Read more</Text>
            <Icon as={GoChevronRight} w={4} h={4} />
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
};

const Posts = () => {
  const resultsLength = articles.length;
  const featured = articles[0];
  const rest = articles.slice(1);
  return (
    <Stack mr={{ lg: "15vw" }}>
      <Text fontSize={"md"} textAlign={"left"} mb={2}>
        <em>{resultsLength} results found...</em>
      </Text>
      <Post article={featured} featured={true} />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={5}
      >
        {rest.map((article, index) => (
          <Flex key={article.id} mt={5}>
            <Stack justifyContent="center">
              <Post article={article} />
            </Stack>
          </Flex>
        ))}
      </Grid>
    </Stack>
  );
};

export default Posts;
