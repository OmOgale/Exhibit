import * as React from "react";
import { useMediaQuery, Container, Box, Stack, HStack, Icon, Text } from "@chakra-ui/react";
// Here we have used react-stack-grid package for the cards
import StackGrid from "react-stack-grid";
import { repositoriesList } from "@/data/repos";
import RepositoryCard from "./Card";
import { FaCodeBranch } from "react-icons/fa";

const Projects = () => {
  return (
    <Box mt={50} maxW="7xl">
      <HStack alignItems={"center"}>
        <Icon color="exhibit.300" as={FaCodeBranch} fontSize={[25, 35]} />
        <br />
        <Text color="exhibit.300" fontWeight="extrabold" fontSize={["2xl", "4xl"]}>
          Projects
        </Text>
      </HStack>
      <Stack
        justifyContent="center"
        spacing={{
          base: 10,
          md: 0,
        }}
        display={{
          md: "grid",
        }}
        gridTemplateColumns={{
          md: "repeat(2,1fr)",
        }}
        gridColumnGap={{
          md: 8,
        }}
        gridRowGap={{
          sm: 12,
        }}
        w={{ base: "85vw", xl: "80vw", "2xl": "65vw" }}
      >
        {repositoriesList?.map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            languages={repo.languages}
            tools={repo.tools}
            url={repo.url}
            labels={repo.labels}
            icon={repo.icon}
            toastText={repo.toast}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
