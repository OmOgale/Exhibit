import React, { useEffect } from "react";
import {
  Box,
  HStack,
  Stack,
  Link,
  Text,
  Icon,
  Avatar,
  Flex,
  AvatarGroup,
  Grid,
  ChakraStyledOptions,
} from "@chakra-ui/react";
import { BsHearts } from "react-icons/bs";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { BlogPostData } from "@/utils/types";
import useSWR from "swr";
import { BACKEND_URL } from "@/utils/constants";
import NextLink from "next/link";
import { blogsFetcher } from "@/utils/methods";
import { usePostsStore } from "@/utils/postsStore";


// const articles: Array<BlogPostData> = [
//   {
//     id: 1,
//     tags: ["News"],
//     title: "Build a Modern User Interface with Chakra UI",
//     summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
//     content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...hsufhuu0ndsugu0huvfvdbu0zxdcubu0zvd0u0g0fsd`,
//     userAvatar:
//       "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
//     usernames: ["Om Ogale"],
//     created_at: "Wed Apr 06 2022",
//     read_time: "5 min read",
//     categories: ["Articles"],
//     img: "",
//     likes: 0,
//     published: true,
//   },
//   {
//     id: 2,
//     tags: ["Web Development", "Video"],
//     title: "The Comp`lete Guide to Ruby on Rails Encrypted Credentials",
//     summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
//     userAvatar:
//       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
//     usernames: "Om Ogale",
//     created_at: "Sun Apr 03 2022",
//     read_time: "5 min read",
//     categories: ["Articles"],
//     img: "",
//     likes: 0,
//     published: true,
//   },
//   {
//     id: 3,
//     tags: ["Web Development", "Video"],
//     title: "The Complete Guide to Ruby on Rails Encrypted Credentials",
//     summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
//     userAvatar:
//       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
//     usernames: "Om Ogale",
//     created_at: "Sun Apr 03 2022",
//     read_time: "5 min read",
//     categories: ["Articles"],
//     img: "",
//     likes: 0,
//     published: true,
//   },
// ];

const Post = ({
  article,
  featured,
}: {
  article: BlogPostData;
  featured?: boolean;
}) => {
  const featuredStyles: ChakraStyledOptions = {
    borderTop: "7px solid",
    borderColor: "exhibit.300",
  };
  if (!article) return <></>;
  const slug = article.slug;
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
        <Link href={`/blog/${slug}`} as={NextLink}>
          <Text
            fontSize="xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
            _hover={{ color: "exhibit.400", textDecoration: "underline" }}
          >
            {article.title}
          </Text>
        </Link>
        <Text fontSize="sm" noOfLines={2} lineHeight="normal" mt={1} mb={2}>
          {article.summary}
        </Text>
      </Box>
      <Box mt="auto">
        <AvatarGroup size="sm" max={3} mb={1}>
          {article.userAvatars.map((src) => {
            return <Avatar key={src} name="Om Ogale" src={src} />
          })}
        </AvatarGroup>
        <Stack
          justifyContent="space-between"
          direction={{ base: "column", sm: "row" }}
        >
          <Stack gap={0}>
            {article.usernames.map((name) => (
                <Text key={name} fontSize="sm" fontWeight="bold" textAlign={"left"}>
                {name}
              </Text>
            ))}
            <Stack direction={"row"} spacing={1} textAlign={"left"}>
              <Text fontSize="sm">{article.createdAt}</Text>
              <Text fontSize="sm">•</Text>
              <Text fontSize="sm">{article.readTime}</Text>
              <Text fontSize="sm">•</Text>
              <Text fontSize="sm"><Icon as={BsHearts} color="exhibit.300" /> {article.likes}</Text>
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
            <Link as={NextLink} href={`/blog/${slug}`}>
              <Text fontSize="sm"> Read more</Text>
            </Link>
            <Icon as={GoChevronRight} w={4} h={4} />
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
};

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR<BlogPostData[]>(`${BACKEND_URL}/blog-posts?initial=true`, blogsFetcher, {
    revalidateOnFocus: false,
  });
  const postsToDisplay = usePostsStore((state) => state.posts);
  const setPostsToDisplay = usePostsStore((state) => state.setPosts);
  const setInitialPosts = usePostsStore((state) => state.setInitialPosts);
  const initialPosts = usePostsStore((state) => state.initialPosts);
  
  useEffect(() => {
    if (!isLoading && posts) {
      setPostsToDisplay(posts.filter((post) => post.published))
      setInitialPosts(posts.filter((post) => post.published))
  }}, [isLoading, posts])

  const resultsLength = postsToDisplay?.length ?? -1;
  const featuredArticle = postsToDisplay?.[0];
  const rest = postsToDisplay?.slice(1) ?? [];

  if (isLoading || error || !postsToDisplay) <></>


  return (
    <Flex mr={{ lg: "15vw" }} flexDirection={"column"} maxW="90vw">
      <Text fontSize={"md"} textAlign={"left"} mb={2}>
        {resultsLength >= 0 && <em>{resultsLength} result(s) found...</em>}
      </Text>
      <Post article={featuredArticle as BlogPostData} featured={true} />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: 1, md: 5}}
      >
        {rest.map((article, index) => (
          <Flex key={article.uuid} mt={5}>
            <Post article={article} />
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Posts;
