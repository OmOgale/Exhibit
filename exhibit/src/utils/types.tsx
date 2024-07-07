export interface BlogPostData {
  id: number;
  slug: string;
  uuid: string;
  tags: string[];
  views: number;
  title: string;
  summary: string;
  content: string;
  userAvatars: string[];
  usernames: string[];
  images: string[];
  createdAt: string;
  readTime: string;
  likes: number;
  published: boolean;
  score?: number;
}
