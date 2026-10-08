import { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";
import { SITE_NAME } from "@/utils/site";

type Props = { params: { slug: string } };

// Each post is its own page to search engines, not a copy of /blog.
export function generateMetadata({ params }: Props): Metadata {
  const path = `/blog/${params.slug}`;
  return { alternates: { canonical: path }, openGraph: { siteName: SITE_NAME, url: path } };
}

export default function Page({ params }: Props) {
  return <BlogPage slug={params.slug} />;
}
