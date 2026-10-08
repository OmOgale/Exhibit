import { useEffect } from "react";
import useSWR from "swr";
import NextLink from "next/link";
import { BlogPostData } from "@/utils/types";
import { BACKEND_URL } from "@/utils/constants";
import { blogsFetcher } from "@/utils/methods";
import { usePostsStore, useVisiblePosts } from "@/utils/postsStore";
import styles from "./blog.module.css";

const Post = ({ article }: { article: BlogPostData }) => (
  <li className={styles.post}>
    <NextLink href={`/blog/${article.slug}`} className={styles.postTitle}>
      {article.title}
    </NextLink>
    <p className={styles.summary}>{article.summary}</p>
    <p className={styles.meta}>
      {[article.createdAt, article.readTime, ...article.tags, `${article.likes} likes`].join(", ")}
    </p>
  </li>
);

const Posts = () => {
  const { data: posts, error, isLoading } = useSWR<BlogPostData[]>(
    `${BACKEND_URL}/blog-posts?initial=true`,
    blogsFetcher,
    { revalidateOnFocus: false }
  );
  const setPosts = usePostsStore((state) => state.setPosts);
  const allPosts = usePostsStore((state) => state.posts);
  const searchFailed = usePostsStore((state) => state.searchFailed);
  const filtering = usePostsStore((state) => state.searchQuery.trim().length > 0 || state.selectedTags.length > 0);
  const postsToDisplay = useVisiblePosts();

  useEffect(() => {
    if (posts) setPosts(posts.filter((post) => post.published));
  }, [posts, setPosts]);

  if (error) {
    return (
      <p className={styles.status}>
        Couldn’t load posts. Try refreshing.
      </p>
    );
  }
  if (isLoading) return <p className={styles.status}>Loading posts…</p>;

  return (
    <>
      {filtering && (
        <p className={styles.status} aria-live="polite">
          {searchFailed
            ? "Search isn’t working right now. Try again in a minute."
            : postsToDisplay.length === 0
              ? "No posts match. Try another word or clear the tags."
              : `${postsToDisplay.length} of ${allPosts.length} posts`}
        </p>
      )}
      <ul className={styles.posts}>
        {postsToDisplay.map((article) => (
          <Post key={article.uuid} article={article} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
