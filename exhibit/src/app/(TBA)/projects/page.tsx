'use client'
import { Hero } from "@/components/Hero";
import { useState, useEffect } from "react";
import { Box, Link, VStack, Text } from '@chakra-ui/react';
import { darken } from 'polished';

const generateRandomColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  let color = '#' + n.slice(0, 6);
  while(isTooBright(color)) {
    n = (Math.random() * 0xfffff * 1000000).toString(16);
    color = '#' + n.slice(0, 6);
  }
  return color;
}

const isTooBright = (color: string) => {
  const c = color.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;  // extract red
  const g = (rgb >>  8) & 0xff;  // extract green
  const b = (rgb >>  0) & 0xff;  // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luma > 250; // Return if too bright
}

export default function ToBeAdded() {

    const [color, setColor] = useState("exhibit.200"); // Initial color

    useEffect(() => {
      const interval = setInterval(() => {
        // Generate a random color
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
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
                <Text fontWeight={"extrabold"}>{color}</Text>
                <Link href="/"><Text fontWeight={"bold"}><em>Back to Home &rarr;</em></Text></Link>
            </VStack>
        </Hero>
    </>
  )
}
