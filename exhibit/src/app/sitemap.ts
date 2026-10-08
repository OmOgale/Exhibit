import { MetadataRoute } from "next";
import { BACKEND_URL } from "@/utils/constants";
import { SITE_URL } from "@/utils/site";
import { BlogPostData } from "@/utils/types";

// Rebuilt at most once a day, so new posts show up without a redeploy.
export const revalidate = 86400;

async function postSlugs(): Promise<string[]> {
  try {
    // The blog server sleeps when idle; don't let a slow wake-up hold the sitemap hostage.
    const res = await fetch(`${BACKEND_URL}/blog-posts?initial=true`, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return [];
    const posts: BlogPostData[] = await res.json();
    return posts.filter((post) => post.published).map((post) => post.slug);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await postSlugs();
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/blog`, priority: 0.7 },
    { url: `${SITE_URL}/projects`, priority: 0.5 },
    ...slugs.map((slug) => ({ url: `${SITE_URL}/blog/${slug}`, priority: 0.6 })),
  ];
}
