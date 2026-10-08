
import axios from "axios";
import { BACKEND_URL } from "./constants";

export const blogsFetcher = async (url: string) => {
  const posts = await axios.get(url);
  return posts.data;
};

export const likesFetcher = async (url: string) => {
  const likes = await axios.get(url);
  return likes.data;
}

export const likesHandler = async (ip: string, uuidBlog: string) => {

  const response = await axios.post(`${BACKEND_URL}/users/`, {
    ip: ip,
    uuidBlog: uuidBlog,
  }, {
    headers: { 'Content-Type': 'application/json' },
})

return response.data

}
