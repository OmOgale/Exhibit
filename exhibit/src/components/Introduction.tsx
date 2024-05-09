"use client";
import { Flex } from "@chakra-ui/react";
import { Overview } from "@/components/Overview";
import Timeline from "@/components/Timeline";
import Name from "@/components/Name";
import Projects from "@/components/projects/Projects";
import {
  Element,
  Events,
  scrollSpy,
} from "react-scroll";
import { useEffect } from "react";
import Milestones from "./Milestones";

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
      <Flex ml={{ base: "5vw", "2xl": 250 }} flexDirection={"column"} mt={100}>
        <Name />
        <Overview projects={"projects"} experiences={"experiences"} milestones={"milestones"}/>
        <Element name="experiences" className="element">
          <Timeline />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="milestones" className="element">
          <Milestones />
        </Element>
      </Flex>
    </>
  );
};

export default Introduction;
