
import axios from "axios";
import { BACKEND_URL } from "./constants";

export const generateRandomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let color = '#' + n.slice(0, 6);
    while(isTooBright(color)) {
      n = (Math.random() * 0xfffff * 1000000).toString(16);
      color = '#' + n.slice(0, 6);
    }
    return color;
  }
  
const isTooBright = (color: string) => {
    const c = color.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue
  
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
    return luma > 250; // Return if too bright
}

export const parametrizeTitle = (title: string) => {
  return title.replace(/\W+/g, '-').toLowerCase().replace(/-+$/, '');
}

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
