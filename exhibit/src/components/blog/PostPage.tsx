import { Flex } from "@chakra-ui/react";

const PostPage = () => { 
    return (
        <Flex
        flexDirection={"column"}
        ml={{ base: "5vw", "2xl": 250 }}
        mt={100}
        mr={[50, 100]}
        w={{ base: "90vw", xl: "unset" }}
        flexGrow={1}
        minH="100vh"
      >
        Hi 
      </Flex>
    )
};
