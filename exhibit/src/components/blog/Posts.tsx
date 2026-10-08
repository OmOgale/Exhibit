import { useEffect } from "react";
import useSWR from "swr";
import NextLink from "next/link";
import { BlogPostData } from "@/utils/types";
import { BACKEND_URL } from "@/utils/constants";
import { blogsFetcher } from "@/utils/methods";
import { usePostsStore } from "@/utils/postsStore";
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
  const postsToDisplay = usePostsStore((state) => state.posts);
  const setPostsToDisplay = usePostsStore((state) => state.setPosts);
  const setInitialPosts = usePostsStore((state) => state.setInitialPosts);
  const initialPosts = usePostsStore((state) => state.initialPosts);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  useEffect(() => {
    if (!posts) return;
    const published = posts.filter((post) => post.published);
    setPostsToDisplay(published);
    setInitialPosts(published);
  }, [posts, setPostsToDisplay, setInitialPosts]);

  if (error) {
    return (
      <p className={styles.status}>
        Couldn’t load posts. Try refreshing.
      </p>
    );
  }
  if (isLoading) return <p className={styles.status}>Loading posts…</p>;

  const filtered = postsToDisplay.length !== initialPosts.length || searchQuery.length > 0;

  return (
    <>
      {filtered && (
        <p className={styles.status} aria-live="polite">
          {postsToDisplay.length === 0
            ? "No posts match. Try another word or clear the tags."
            : `${postsToDisplay.length} of ${initialPosts.length} posts`}
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
