"use client";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { ReactNode, useEffect, useState, FC } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

import rehypeHighlight from "rehype-highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { usePostsStore } from "@/utils/postsStore";

// const Poem = ({ children }: { children: any}) => {
//   return (
//     <Box
//       border="5px solid"
//       borderColor={"exhibit.300"}
//       bg={"exhibit.500"}
//       fontStyle="italic"
//       p={3}
//       gap={0}
//       lineHeight="1.6"
//       my={4}
//     >
//       {children.replace(/\\n/g, '\n').split('\n').map((line: any, index: any) => (
//         <Text key={index} my={1}>
//           {line}
//         </Text>
//       ))}
//     </Box>
//   );
// };

const Poem = ({ children }: { children: string }) => {
  return (
    <Box
      border="5px solid"
      borderColor={"exhibit.300"} 
      bg={"#FDF6E3"}            
      fontStyle="italic"
      p={3}
      gap={0}
      lineHeight="1.6"
      my={4}
      color={"exhibit.500"}
      fontFamily="'Source Sans Pro', sans-serif"
    >
      {children.replace(/\\n/g, '\n').split('\n').map((line, index) => (
        <Text key={index} my={1}>
          {line}
        </Text>
      ))}
    </Box>
  );
};


export default Poem;


const Example = ({ fontSize }: { fontSize: string }) => {
  return <Box fontSize={fontSize}>My name is Om</Box>;
};

// const FunContent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Perform asynchronous operations here
//     async function fetchData() {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       const data = await response.json();
//       console.log(data)
//       setData(data.title);
//       setLoading(false)
//     }

//     fetchData();
//   }, []);
//   if (loading || !data) return <></>;
//   return (
//     <div color="pink">
//       {data}
//     </div>
//   )
// }

const CodeTile = ({ lang, children }: { lang: string, children: ReactNode }) => {
  return (
    <Stack
      borderTop="5px solid"
      borderColor={"exhibit.300"}
      bg={"exhibit.500"}
      p={3}
      gap={0}
    >
      <SyntaxHighlighter
        language={lang}
        style={solarizedlight}
        showLineNumbers={true}
      >{children as string}</SyntaxHighlighter>
    </Stack> 
  );
};
const componentsGlobal = { Example, CodeTile, Poem };

// { components }: { content: string, components?: { [key: string]: FC }  }

export const ParsedPostContent = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const content = usePostsStore((state) => state.currentPostContent);
//   const mdxString = `some *mdx* <code>content</code>: \n<Example fontSize={["20px", "34px"]} /> \n <CodeTile lang="jsx">// jsx \n const Hello = () => &#123;'Hi'&#125; \n const bye = 2 \n &#x3C;Model /&#x3E; </CodeTile> \n
//   <CodeTile lang="python">// python \n num = 2 \n sum = 2 + num</CodeTile>
// Two 🍰 is: {Math.PI * 2} \n
// <h1>Hi</h1>
// \`\`\`python
// // app/page.tsx
// # hi
// print("Hello World")
// <Box>
//   Hi Rahul
// </Box>
// \`\`\`
// \`\`\`c++
// int main() {
//   cout << "Hello World";
//   return 0;
// }
// \`\`\`
// efsdjfngg
// ajnsgdnfs

// asgdjsdgjnsd

// safjndgng


// asfgjninfd

// gaedjdnjg
// `;

  // Use mdxString in your MDX component
  const mdxSource = useEffect(() => {
    serialize(content, {
      mdxOptions: {
        development: true,
        remarkPlugins: [],
        // @ts-ignore
        rehypePlugins: [rehypeHighlight],
      },
    }).then((mdxSource) => {
      setData(mdxSource);
      setLoading(false);
    });
  }, []);
  if (loading || !data) return <></>;
  return (
    <Box
      textAlign={"left"}
      px={5}
      boxSizing="content-box"
      overflowX={"auto"}
      fontSize={{ base: "sm", md: "lg", lg: "xl" }}
    >
      <MDXRemote {...data} components={componentsGlobal} />
    </Box>
  );
};
