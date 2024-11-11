"use client"

import BlogPage from "@/components/blog/BlogPage";
import { Hero } from "@/components/Hero";
import { ParsedPostContent } from "@/components/blog/ParsedPostContent";
import { blogsFetcher } from "@/utils/methods";
import { BACKEND_URL } from "@/utils/constants";
import { BlogPostData } from "@/utils/types";
import { usePostsStore } from "@/utils/postsStore";
import Blog from "@/components/blog/Blog";
import { Text } from "@chakra-ui/react";
import { headers } from "next/headers";
import { useState, useEffect } from "react";

export default function Page({params }: { params : { slug: string }}) {

  const { slug } = params;
  const setCurrentIP = usePostsStore((state) => state.setCurrentIP);

  useEffect(() => {
    const fetchIP = async () => {
      const response = await fetch('/api/ip/');
      const data = await response.json();
      console.log(data)
      setCurrentIP(data);
    };

    fetchIP();
  }, [setCurrentIP]);
  
  const setSlug = usePostsStore((state) => state.setCurrentSlug);
  setSlug(slug);
  // const post: BlogPostData = blogsFetcher(`${BACKEND_URL}/blog-posts/${slug}`)
  // const setCurrentUUID = usePostsStore((state) => state.setCurrentUUID);
  // setCurrentUUID(post.uuid);

  // if (!post) return <></>;

  return (
    <>
      <Hero bg={"exhibit.500"} fg={"%23c3f2bd"} justifyContent={"center"}>
        <BlogPage>
          <ParsedPostContent />
        </BlogPage>
      </Hero>
    </>
  )
}

// export async function generateStaticParams(){
//   const posts: BlogPostData[] = await blogsFetcher(`${BACKEND_URL}/blog-posts?initial=true`)
//   return posts.map((post) => (
//     {
//       slug: post.slug
//     }
//   ))
// }
