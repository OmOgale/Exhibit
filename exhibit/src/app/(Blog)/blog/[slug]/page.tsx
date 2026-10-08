import BlogPage from "@/components/blog/BlogPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPage slug={params.slug} />;
}
