import useSWR from "swr";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/utils/constants";
import { usePostsStore } from "@/utils/postsStore";
import styles from "./blog.module.css";

const tagsFetcher = async (url: string) => (await axios.get(url)).data;

const Tags = () => {
  const selectedTags = usePostsStore((state) => state.selectedTags);
  const setSelectedTags = usePostsStore((state) => state.setSelectedTags);

  const { data: categories } = useSWR<string[]>(`${BACKEND_URL}/blog-posts/tags`, tagsFetcher, {
    revalidateOnFocus: false,
  });

  // Filtering by the only tag there is would change nothing, so only offer tags once there are several.
  if (!categories || categories.length < 2) return null;

  const toggle = (tag: string) =>
    setSelectedTags(selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]);

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
  const setSearchResults = usePostsStore((state) => state.setSearchResults);
  const setSearchQuery = usePostsStore((state) => state.setSearchQuery);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  useEffect(() => {
    const term = searchQuery.trim();
    if (term.length === 0) {
      setSearchResults(null);
      return;
    }

    // Typing again cancels both the pending search and any request still in flight,
    // so a slow answer to an older query can never replace a newer one.
    const controller = new AbortController();
    const search = async () => {
      try {
        const { data } = await axios.get<{ uuid: string }[]>(`${BACKEND_URL}/blog-posts/search`, {
          params: { searchTerm: term },
          signal: controller.signal,
        });
        setSearchResults((data ?? []).map((post) => post.uuid));
      } catch (err) {
        if (!axios.isCancel(err)) setSearchResults([], true);
      }
    };
    // Wait for a pause in typing before searching.
    const timer = setTimeout(search, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchQuery, setSearchResults]);

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
