"use client";

import BlogPage from "@/components/blog/BlogPage";

// A client page: rendering the blog components from a server page fails on the server with "Element type is invalid".
// The post's metadata lives in the sibling layout, since a client page can't export it.
export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPage slug={params.slug} />;
}
