"use client";
import { Hero } from "@/components/Hero";
import { useState, useEffect } from "react";
import { Box, Link, VStack, Text } from "@chakra-ui/react";
import { darken } from "polished";
import { generateRandomColor } from "@/utils/methods";

export default function NotFound() {
  const [color, setColor] = useState("exhibit.200"); // Initial color

    useEffect(() => {
      const interval = setInterval(() => {
        // Generate a random color
        let randomColor = generateRandomColor()
        setColor(randomColor);
      }, 2000); // Change color every 2 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <Hero bg={color} h={"100vh"}>
        <VStack alignItems="center" justifyContent="center" width="full">
          <Box fontSize="7xl" fontWeight="bold" mb={4}>
            <Text>404</Text>
          </Box>
          <Text fontWeight={"bold"}>
            The page you are looking for doesn&apos;t exist
          </Text>
          <Link href="/">
            <Text fontWeight={"bold"}>
              <em>Back to Home &rarr;</em>
            </Text>
          </Link>
        </VStack>
      </Hero>
    </>
  );
}
