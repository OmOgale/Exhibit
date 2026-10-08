"use client";

import { useEffect } from "react";
import useSWR from "swr";
import BeadLikes from "./BeadLikes";
import { ParsedPostContent } from "./ParsedPostContent";
import { usePostsStore } from "@/utils/postsStore";
import { blogsFetcher, likesFetcher } from "@/utils/methods";
import { BACKEND_URL } from "@/utils/constants";
import { BlogPostData } from "@/utils/types";
import styles from "./blog.module.css";

const Likes = ({ uuid }: { uuid: string }) => {
  const currentIP = usePostsStore((state) => state.currentIP);
  const { data: likes, isLoading: likesLoading } = useSWR<number>(
    `${BACKEND_URL}/blog-posts/likes/${uuid}`,
    likesFetcher,
    { revalidateOnFocus: false }
  );
  const { data: userLikes, isLoading: userLikesLoading } = useSWR<number>(
    currentIP ? `${BACKEND_URL}/users/${currentIP}/${uuid}` : null,
    likesFetcher
  );

  if (likesLoading || userLikesLoading || !currentIP) return null;
  return <BeadLikes likes={likes} userLikes={userLikes} />;
};

const BlogPage = ({ slug }: { slug: string }) => {
  const { data: post, error, isLoading } = useSWR<BlogPostData>(`${BACKEND_URL}/blog-posts/${slug}`, blogsFetcher, {
    revalidateOnFocus: false,
  });
  const setCurrentUUID = usePostsStore((state) => state.setCurrentUUID);

  useEffect(() => {
    if (post) setCurrentUUID(post.uuid);
  }, [post, setCurrentUUID]);

  if (error) {
    return (
      <p className={styles.status}>
        Couldn’t load this post. The blog server sleeps when it’s idle, so refresh in a minute.
      </p>
    );
  }
  if (isLoading || !post) return <p className={styles.status}>Loading…</p>;

  return (
    <article>
      <header className={styles.postHeader}>
        <div>
          <h1 className={styles.postHeading}>{post.title}</h1>
          <p className={styles.meta}>
            {post.createdAt}, {post.readTime}, {post.views} views
          </p>
        </div>
        <Likes uuid={post.uuid} />
      </header>
      <ParsedPostContent content={post.content} />
    </article>
  );
};

export default BlogPage;
