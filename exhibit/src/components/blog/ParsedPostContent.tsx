"use client";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode, useEffect, useState } from "react";
import rehypeHighlight from "rehype-highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./blog.module.css";

// Components that post content (MDX) can use.
const Poem = ({ children }: { children: string }) => (
  <blockquote className={styles.poem}>
    {children
      .replace(/\\n/g, "\n")
      .split("\n")
      .map((line, index) => (
        <p key={index}>{line}</p>
      ))}
  </blockquote>
);

const CodeTile = ({ lang, children }: { lang: string; children: ReactNode }) => (
  <div className={styles.codeTile}>
    <SyntaxHighlighter language={lang} style={oneDark} showLineNumbers customStyle={{ margin: 0, background: "transparent" }}>
      {children as string}
    </SyntaxHighlighter>
  </div>
);

const Example = ({ fontSize }: { fontSize: string }) => <div style={{ fontSize }}>My name is Om</div>;

const components = { Example, CodeTile, Poem };

export const ParsedPostContent = ({ content }: { content: string }) => {
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    serialize(content, {
      mdxOptions: {
        development: false,
        remarkPlugins: [],
        // @ts-ignore
        rehypePlugins: [rehypeHighlight],
      },
    }).then(setSource);
  }, [content]);

  if (!source) return null;
  return (
    <div className={styles.prose}>
      <MDXRemote {...source} components={components} />
    </div>
  );
};
