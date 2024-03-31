'use client'
import { Hero } from "@/components/Hero";
import { useState, useEffect } from "react";
import { Box, Link, VStack, Text } from '@chakra-ui/react';

export default function NotFound() {

    const [color, setColor] = useState('#4b3f43'); // Initial color

    useEffect(() => {
      const interval = setInterval(() => {
        // Generate a random color
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let randomColor = '#' + n.slice(0, 6);
        setColor(randomColor);
      }, 2000); // Change color every 2 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
        <Hero bg={color}>
            <VStack>
                <Box fontSize="7xl" fontWeight="bold" mb={4}>
                    <Text>404</Text>
                </Box>
                <Text fontWeight={"bold"}>The page you are looking for doesn&apos;t exist</Text>
                <Link href="/"><Text fontWeight={"bold"}><em>Back to Home &rarr;</em></Text></Link>
            </VStack>
        </Hero>
    </>
  )
}
