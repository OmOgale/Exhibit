"use client";
import { Box, Link, HStack, Icon, chakra, Text } from "@chakra-ui/react";
import { ImProfile } from "react-icons/im";

const Resume = () => {
  return (
    <>
      <Box
        height="100vh"
        width="100vw"
        mt={50}
        display={{ base: "none", lg: "flex" }}
      >
        <chakra.iframe
          src="/Resume@OmOgale.pdf"
          width="60%"
          height={{ base: "90%", xl: "80%" }}
          boxShadow="md"
          borderRadius="md"
        />
      </Box>
    </>
  );
};

export default Resume;
