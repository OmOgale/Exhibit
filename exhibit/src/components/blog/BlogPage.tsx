"use client";

import { Box, Flex, HStack } from "@chakra-ui/react";
import { ChakraStyledOptions } from "@chakra-ui/react";
import Description from "./Description";
import { Container, Text } from "@chakra-ui/react";
import { ParsedPostContent } from "./ParsedPostContent";
import { useState, useEffect } from "react";
import { Overview } from "../Overview";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import { Avatar, AvatarGroup, Stack } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import Heart from "./Heart";
import { usePostsStore } from "@/utils/postsStore";
import { blogsFetcher } from "@/utils/methods";
import { BACKEND_URL } from "@/utils/constants";
import { BlogPostData } from "@/utils/types";
import { likesFetcher } from "@/utils/methods";
import useSWR from "swr";


interface Props {
  mdxSource: MDXRemoteSerializeResult;
}
 
const BlogHeader = ({ post }: { post: BlogPostData }) => {

  const currentIP = usePostsStore((state) => state.currentIP);
  const currentUUID = usePostsStore((state) => state.currentUUID);
  const {
    data: likes,
    error: likesError,
    isLoading: likesLoading,
  } = useSWR<number>(`${BACKEND_URL}/blog-posts/likes/${currentUUID}`, likesFetcher, {
    revalidateOnFocus: false,
  });
  
  const {
    data: userLikes,
    error,
    isLoading,
  } = useSWR<any>( `${BACKEND_URL}/users/${currentIP}/${currentUUID}`, likesFetcher, {
  });

  console.log(userLikes)
  console.log(`${BACKEND_URL}/users/${currentIP}/${currentUUID}`)
  return (
    <Flex
      width="full"
      mb={10}
      px={2}
      flexDirection={["column", "row"]}
      gap={5}
      alignItems={"center"}
      color="exhibit.600"
    >
      <AvatarGroup size="md" max={3} mb={1}>
        <Avatar name="Om Ogale" src={"/om_photo.jpg"} />
      </AvatarGroup>
      <Stack>
        <Stack gap={0} fontSize={{ base: "sm", md: "lg", lg: "xl" }}>
          { post.usernames.map((username) => (
            <Text key={username} fontWeight="bold" textAlign={["center", "left"]}>{username}</Text>
          ))}
          <Stack direction={"row"} spacing={1} textAlign={"left"}>
            <Text>{post.createdAt}</Text>
            <Text>•</Text>
            <Text>{post.readTime}</Text>
          </Stack>
          <Text fontWeight={"semibold"} color="exhibit.400" textAlign={["center", "left"]}>
            {post.views} hits
          </Text>
        </Stack>
      </Stack>
      <Heart likes={likes} userLikes={userLikes}/>
    </Flex>
  );
};

const Example = () => {
  return <code>My name is Rohit</code>;
};
const components = { Example };

const BlogPage = ({ children }: { children: ReactNode }) => {
  const postSlug = usePostsStore((state) => state.currentSlug);
  const {
    data: post,
    error,
    isLoading,
  } = useSWR<BlogPostData>(`${BACKEND_URL}/blog-posts/${postSlug}`, blogsFetcher, {
    revalidateOnFocus: false,
  });
  const setCurrentPostContent = usePostsStore((state) => state.setCurrentPostContent);
  const setCurrentUUID = usePostsStore((state) => state.setCurrentUUID);

  if (isLoading || error || !post) return <></>;
  
  setCurrentUUID(post.uuid);
  setCurrentPostContent(post.content);


  const descriptionOptions: ChakraStyledOptions = {
    fontWeight: "bold",
    letterSpacing: "tight",
    fontSize: { base: "4xl", md: "5xl" },
    whiteSpace: "pre-line",
    align: "center",
    color: "exhibit.300",
    mb: 10,
    bgGradient: "linear(to-l, exhibit.300, exhibit.600)",
    bgClip: "text",
    px: 2,
  };

  return (
      <Flex
        mt={100}
        h="full"
        borderRadius={"sm"}
        borderTop={"10px solid"}
        p={[5, 7]}
        justifyContent={"center"}
        bg="rgba(217, 138, 162, 0.2)"
        backdropFilter={"blur(10px)"}
        borderColor={"exhibit.300"}
        w={"80vw"}
        mb={50}
        flexDirection={"column"}
      >
        <Description text={post.title} options={descriptionOptions} />
        <BlogHeader post={post}/>
        <div>
          {/* <MDXRemote {...mdxSource} components={components} /> */}
          {children}
        </div>
      </Flex>
  );
};

// export function generatedStaticParams() {
//   const mdxSource = serialize("some *mdx* content: <Example />");
//   return { props: { mdxSource } };
// }

export default BlogPage;
