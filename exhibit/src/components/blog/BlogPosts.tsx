"use client";
import shell from "@/components/home/shell.module.css";
import SearchBar from "./SearchBar";
import Posts from "./Posts";

const BlogPosts = () => (
  <>
    <h1 className={shell.title}>Blog</h1>
    <p className={shell.lede}>Notes, essays, and the occasional poem.</p>
    <SearchBar />
    <Posts />
  </>
);

export default BlogPosts;
