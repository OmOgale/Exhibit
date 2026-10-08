"use client";

import useSWR from "swr";
import axios from "axios";
import BeadLikes from "./BeadLikes";
import { ParsedPostContent } from "./ParsedPostContent";
import { blogsFetcher, likesFetcher } from "@/utils/methods";
import { BACKEND_URL } from "@/utils/constants";
import { BlogPostData } from "@/utils/types";
import styles from "./blog.module.css";

const Likes = ({ uuid }: { uuid: string }) => {
  const { data } = useSWR<{ total: number; mine: number }>(`/api/likes/${encodeURIComponent(uuid)}`, likesFetcher, {
    revalidateOnFocus: false,
  });

  if (!data) return null;
  return <BeadLikes uuid={uuid} likes={data.total} userLikes={data.mine} />;
};

const BlogPage = ({ slug }: { slug: string }) => {
  const { data: post, error, isLoading } = useSWR<BlogPostData>(`${BACKEND_URL}/blog-posts/${slug}`, blogsFetcher, {
    revalidateOnFocus: false,
  });
  if (axios.isAxiosError(error) && error.response?.status === 404) {
    return <p className={styles.status}>There’s no post here. It may have moved or been taken down.</p>;
  }
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
