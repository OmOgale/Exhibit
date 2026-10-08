
import axios from "axios";

export const blogsFetcher = async (url: string) => {
  const posts = await axios.get(url);
  return posts.data;
};

export const likesFetcher = async (url: string) => {
  const likes = await axios.get(url);
  return likes.data;
}
