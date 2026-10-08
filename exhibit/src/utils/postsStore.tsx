import { useMemo } from 'react'
import { create } from 'zustand'
import { BlogPostData } from './types'

interface BlogState {
  // Every published post, in the order the backend lists them.
  posts: BlogPostData[]
  searchQuery: string
  // Uuids of the posts matching the latest finished search, best match first. Null when there's no search.
  searchResults: string[] | null
  searchFailed: boolean
  selectedTags: string[]
  setPosts: (posts: BlogPostData[]) => void
  setSearchQuery: (query: string) => void
  setSearchResults: (uuids: string[] | null, failed?: boolean) => void
  setSelectedTags: (tags: string[]) => void
}

export const usePostsStore = create<BlogState>()((set) => ({
  posts: [],
  searchQuery: "",
  searchResults: null,
  searchFailed: false,
  selectedTags: [],
  setPosts: (posts) => set(({ posts: posts })),
  setSearchQuery: (query) => set(({ searchQuery: query })),
  setSearchResults: (uuids, failed = false) => set(({ searchResults: uuids, searchFailed: failed })),
  setSelectedTags: (tags) => set(({ selectedTags: tags })),
}))

// The posts to show: the search results in ranked order (or every post), narrowed to the selected tags.
export function useVisiblePosts() {
  const posts = usePostsStore((state) => state.posts)
  const searchResults = usePostsStore((state) => state.searchResults)
  const selectedTags = usePostsStore((state) => state.selectedTags)

  return useMemo(() => {
    const byUuid = new Map(posts.map((post) => [post.uuid, post]))
    const matches = searchResults
      ? searchResults.flatMap((uuid) => byUuid.get(uuid) ?? [])
      : posts
    if (selectedTags.length === 0) return matches
    return matches.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))
  }, [posts, searchResults, selectedTags])
}
