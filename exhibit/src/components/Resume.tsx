'use client'
import { Box, chakra } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <chakra.iframe
        src="/Resume@OmOgale.pdf"
        width="60%"
        height={{ base: "90%", xl: "80%" }}
        boxShadow="md"
        borderRadius="md"
      />
    </Box>
  );
};

export default Resume;
