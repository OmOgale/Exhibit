"use client";
import {
  Banner,
  BannerIcon,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerActions,
  BannerCloseButton,
} from "@saas-ui/react";

import { useState, useEffect } from "react";

import { Stack } from "@chakra-ui/react";
import { FiTruck } from "react-icons/fi";

export default function CustomIcon() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      return () => clearTimeout(timeout);
    }, 5000);
  }, []);

  if (!show) return null
  
  return (
    <Stack spacing={3} position={"relative"}>
      <Banner status="success" py="2">
        <BannerIcon
          icon={FiTruck}
          p="2"
          boxSize="8"
          bg="whiteAlpha.200"
          borderRadius="md"
        />
        <BannerTitle p="2">Your order has been shipped.</BannerTitle>
      </Banner>
    </Stack>
  );
}
