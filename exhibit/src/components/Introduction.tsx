"use client";
import { Stack } from "@chakra-ui/react";
import { Overview } from "@/components/Overview";
import Milestone from "@/components/Timeline";
import Name from "@/components/Name";
import Projects from "@/components/projects/Projects";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {});

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {});

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Stack ml={{ base: "5vw", "2xl": 300 }} mt={100} display="flex">
        <Name />
        <Overview projects={"projects"} experiences={"experiences"} />
        <Element name="experiences" className="element">
          <Milestone />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
      </Stack>
    </>
  );
};

export default Introduction;
