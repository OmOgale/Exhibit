"use client";
import { Hero } from "@/components/Hero";
import BlogPosts from "@/components/blog/BlogPosts";
import { useState, useEffect } from "react";
import { Box, Link, VStack, Text } from "@chakra-ui/react";
import { generateRandomColor } from "@/utils/methods";


export default function Blog() {
  return (
    <>
      <Hero bg={"exhibit.500"} fg={"%23c3f2bd"}>
        <BlogPosts />
      </Hero>
    </>
  );
}
