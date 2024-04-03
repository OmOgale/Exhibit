"use client";
import { Link as ScrollLink } from "react-scroll";
import { Link, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";

const SkipNav = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FaGithubAlt} color="green.500" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={FaGithubAlt} color="green.500" />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={FaGithubAlt} color="green.500" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      {/* You can also use custom icons from react-icons */}
      <ListItem>
        <ListIcon as={FaGithubAlt} color="green.500" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
};

export default SkipNav;
