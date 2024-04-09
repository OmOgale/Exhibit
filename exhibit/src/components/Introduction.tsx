"use client";
import { Stack } from "@chakra-ui/react";
import { Overview } from "@/components/Overview";
import Milestone from "@/components/Timeline";
import Name from "@/components/Name";
import Projects from "@/components/projects/Projects";

const Introduction = () => {
  return (
    <>
      <Stack ml={{ base: "5vw", "2xl": 300 }} mt={100} display="flex">
        <Name />
        <Overview />
        <Milestone />
        <Projects />
      </Stack>
    </>
  );
};

export default Introduction;
