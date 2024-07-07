'use client'
import { Hero } from "@/components/Hero";
import { useState, useEffect } from "react";
import { Box, Link, VStack, Text } from '@chakra-ui/react';
import { generateRandomColor } from "@/utils/methods";

export default function ToBeAdded() {

    const [color, setColor] = useState("exhibit.200"); // Initial color

    useEffect(() => {
      const interval = setInterval(() => {
        // Generate a random color
        let randomColor = generateRandomColor()
        setColor(randomColor)
      }, 2000); // Change color every 2 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
        <Hero bg={color} h={"100vh"}>
            <VStack alignItems="center" justifyContent="center" width="full">
                <Box fontSize="7xl" fontWeight="bold" mb={4}>
                    <Text>TBA</Text>
                </Box>
                <Text fontWeight={"bold"}>(To be added..)</Text>
                <Link href="/"><Text fontWeight={"bold"}><em>Back to Home &rarr;</em></Text></Link>
            </VStack>
        </Hero>
    </>
  )
}
