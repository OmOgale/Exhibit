import useSWR from "swr";
import { BACKEND_URL } from "@/utils/constants";
import { BlogPostData } from "@/utils/types";
import { blogsFetcher } from "@/utils/methods";

const Blog = ({ slug }: { slug: string }) => {
    const {
        data: posts,
        error,
        isLoading,
      } = useSWR<BlogPostData[]>(`${BACKEND_URL}/blog-posts/${slug}`, blogsFetcher, {
        revalidateOnFocus: false,
      });

    if (isLoading || error || !posts) return <></>;
    return <></>
}

export default Blog;
