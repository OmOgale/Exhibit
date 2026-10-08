"use client";

import { useEffect } from "react";
import BlogPage from "@/components/blog/BlogPage";
import { usePostsStore } from "@/utils/postsStore";

export default function Page({ params }: { params: { slug: string } }) {
  const setCurrentIP = usePostsStore((state) => state.setCurrentIP);

  useEffect(() => {
    const fetchIP = async () => {
      const response = await fetch("/api/ip/");
      setCurrentIP(await response.json());
    };
    fetchIP();
  }, [setCurrentIP]);

  return <BlogPage slug={params.slug} />;
}
