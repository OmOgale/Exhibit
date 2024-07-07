import { SearchIcon } from "@chakra-ui/icons";
import useSWR from "swr";
import { debounce, set } from "lodash";

import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  useCheckbox,
  chakra,
  CheckboxGroup,
  Checkbox,
  Flex,
  Text,
  useCheckboxGroup,
  Box,
  CheckboxProps,
  UseCheckboxProps,
  UseCheckboxReturn,
} from "@chakra-ui/react";
import { use, useEffect, useState } from "react";
import { BACKEND_URL } from "@/utils/constants";
import axios from "axios";
import { usePostsStore } from "@/utils/postsStore";
import { stat } from "fs";
import { BlogPostData } from "@/utils/types";

interface CustomCheckboxProps extends CheckboxProps {}

const Tags = () => {
  const tagsFetcher = async (url: string) => {
    const categories = await axios.get(url);
    return categories.data;
  };
  function CustomCheckbox(props: CustomCheckboxProps) {
    const {
      state,
      getCheckboxProps,
      getInputProps,
      getLabelProps,
      htmlProps,
    }: UseCheckboxReturn = useCheckbox(props as UseCheckboxProps);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="40"
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(2px)"
        _hover={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
        }}
        rounded="lg"
        px={[3, 4]}
        py={[2, 3]}
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Stack
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="exhibit.500"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg="exhibit.600" />}
        </Stack>
        <Text color="exhibit.600" {...getLabelProps()}>
          {props.value}
        </Text>
      </chakra.label>
    );
  }

  const { value: selectedTags, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });

  // const posts = usePostsStore((state) => state.posts);
  const setPosts = usePostsStore((state) => state.setPosts);
  const initialPosts = usePostsStore((state) => state.initialPosts);
  const searchedPosts = usePostsStore((state) => state.searchedPosts);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  const haveCommonElement = (arr1: string[], arr2: string[]) => {
    const set1 = new Set(arr1);
    return arr2.some((tag) => set1.has(tag));
  };

  useEffect(() => {
    const isSearchQuery = searchQuery.length > 0;
    if (selectedTags.length > 0) {
      const newPosts = isSearchQuery
        ? searchedPosts.filter((post) =>
            // @ts-ignore
            haveCommonElement(post.tags, selectedTags)
          )
        : initialPosts.filter((post) =>
            // @ts-ignore
            haveCommonElement(post.tags, selectedTags)
          );
      setPosts(newPosts);
    } else if (selectedTags.length === 0) {
      isSearchQuery ? setPosts(searchedPosts) : setPosts(initialPosts);
    }
  }, [selectedTags, initialPosts, searchedPosts, searchQuery]);

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR<string[]>(`${BACKEND_URL}/blog-posts/tags`, tagsFetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading || error) <></>;

  if (!categories) return <></>;

  return (
    <Stack direction={"row"} mt={5}>
      {categories.map((category) => {
        return (
          <CustomCheckbox
            key={category}
            {...getCheckboxProps({ value: category })}
          />
        );
      })}
    </Stack>
  );
};

const SearchBar = () => {
  const postsToDisplay = usePostsStore((state) => state.initialPosts);
  const setPosts = usePostsStore((state) => state.setPosts);
  const setSearchedPosts = usePostsStore((state) => state.setSearchedPosts);
  const searchedPosts = usePostsStore((state) => state.searchedPosts);
  const setSearchQuery = usePostsStore((state) => state.setSearchQuery);
  const searchQuery = usePostsStore((state) => state.searchQuery);

  useEffect(() => {
    const uuidPosts = new Set(postsToDisplay.map((post) => post.uuid));
    const debounced = debounce(async () => {
      const searchReq = await axios.get(
        `${BACKEND_URL}/blog-posts/search?searchTerm=${searchQuery}`
      );

      const searchedPosts: BlogPostData[] = searchReq.data ?? [];
      const filteredPosts = searchedPosts.filter((post) =>
        uuidPosts.has(post.uuid)
      );

      // We want to maintain the searchedPosts order but need the posts from postsToDisplay.
      const newPosts = filteredPosts.map((post) =>
        postsToDisplay.find((initialPost) => initialPost.uuid === post.uuid)
      );

      setSearchedPosts(newPosts as BlogPostData[]);
    }, 300);

    if (searchQuery.length > 0) debounced();
    else if (searchQuery.length === 0) setPosts(postsToDisplay);
  }, [searchQuery, setSearchedPosts, postsToDisplay]);

  return (
    <Flex direction={"column"} maxW={{ lg: "50vw" }}>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          alignItems={"center"}
          display={"flex"}
        >
          <SearchIcon color="exhibit.600" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for a blog post..."
          _placeholder={{ color: "gray.300" }}
          size="lg"
          focusBorderColor="exhibit.300"
          borderColor="exhibit.600"
          _hover={{
            borderColor: "exhibit.300",
          }}
          borderWidth={2}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
      <Tags />
    </Flex>
  );
};

export default SearchBar;
