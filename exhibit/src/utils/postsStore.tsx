import { create } from 'zustand'
import { BlogPostData } from './types'

interface BlogState {
  posts: BlogPostData[]
  initialPosts: BlogPostData[]
  searchedPosts: BlogPostData[]
  searchQuery: string
  currentUUID: string
  currentSlug: string
  currentPostContent: string
  currentIP: string
  setCurrentUUID: (uuid: string) => void
  setCurrentIP: (ip: string) => void
  setCurrentPostContent: (content: string) => void
  setCurrentSlug: (uuid: string) => void
  setPosts: (posts: BlogPostData[]) => void
  setInitialPosts: (posts: BlogPostData[]) => void
  setSearchedPosts: (posts: BlogPostData[]) => void
  setSearchQuery: (query: string) => void
}

export const usePostsStore = create<BlogState>()((set) => ({
  posts: [],
  initialPosts: [],
  searchedPosts: [],
  searchQuery: "",
  currentUUID: "",
  currentSlug: "",
  currentIP: "",
  currentPostContent: "",
  setPosts: (posts) => set(({ posts: posts })),
  setInitialPosts: (posts) => set(({ initialPosts: posts })),
  setSearchedPosts: (posts) => set(({ searchedPosts: posts })),
  setSearchQuery: (query) => set(({ searchQuery: query })),
  setCurrentUUID: (uuid) => set(({ currentUUID: uuid })),
  setCurrentSlug: (slug) => set(({ currentSlug: slug })),
  setCurrentPostContent: (content) => set(({ currentPostContent: content })),
  setCurrentIP: (ip) => set(({ currentIP: ip })),
}))
