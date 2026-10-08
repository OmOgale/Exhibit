import useSWR from "swr";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/utils/constants";
import { usePostsStore } from "@/utils/postsStore";
import { BlogPostData } from "@/utils/types";
import styles from "./blog.module.css";

const tagsFetcher = async (url: string) => (await axios.get(url)).data;

const haveCommonElement = (arr1: string[], arr2: string[]) => {
  const set1 = new Set(arr1);
  return arr2.some((tag) => set1.has(tag));
};

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const setPosts = usePostsStore((state) => state.setPosts);
  const initialPosts = usePostsStore((state) => state.initialPosts);
  const searchedPosts = usePostsStore((state) => state.searchedPosts);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  useEffect(() => {
    const source = searchQuery.length > 0 ? searchedPosts : initialPosts;
    setPosts(selectedTags.length > 0 ? source.filter((post) => haveCommonElement(post.tags, selectedTags)) : source);
  }, [selectedTags, initialPosts, searchedPosts, searchQuery, setPosts]);

  const { data: categories } = useSWR<string[]>(`${BACKEND_URL}/blog-posts/tags`, tagsFetcher, {
    revalidateOnFocus: false,
  });

  // Filtering by the only tag there is would change nothing, so only offer tags once there are several.
  if (!categories || categories.length < 2) return null;

  const toggle = (tag: string) =>
    setSelectedTags((tags) => (tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]));

  return (
    <div className={styles.tags} role="group" aria-label="Filter by tag">
      <button type="button" aria-pressed={selectedTags.length === 0} onClick={() => setSelectedTags([])}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={selectedTags.includes(category)}
          onClick={() => toggle(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const SearchBar = () => {
  const postsToDisplay = usePostsStore((state) => state.initialPosts);
  const setPosts = usePostsStore((state) => state.setPosts);
  const setSearchedPosts = usePostsStore((state) => state.setSearchedPosts);
  const setSearchQuery = usePostsStore((state) => state.setSearchQuery);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  useEffect(() => {
    const uuidPosts = new Set(postsToDisplay.map((post) => post.uuid));
    const search = async () => {
      const searchReq = await axios.get(`${BACKEND_URL}/blog-posts/search?searchTerm=${searchQuery}`);
      const searchedPosts: BlogPostData[] = searchReq.data ?? [];
      // Keep the search ranking, but use the full post objects we already have.
      const newPosts = searchedPosts
        .filter((post) => uuidPosts.has(post.uuid))
        .map((post) => postsToDisplay.find((initialPost) => initialPost.uuid === post.uuid));
      setSearchedPosts(newPosts as BlogPostData[]);
    };

    if (searchQuery.length === 0) {
      setPosts(postsToDisplay);
      return;
    }
    // Wait for a pause in typing before searching.
    const timer = setTimeout(search, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, setSearchedPosts, setPosts, postsToDisplay]);

  return (
    <div className={styles.filters}>
      <label className={styles.search}>
        <span className={styles.visuallyHidden}>Search posts</span>
        <input
          type="search"
          placeholder="Search posts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <Tags />
    </div>
  );
};

export default SearchBar;
