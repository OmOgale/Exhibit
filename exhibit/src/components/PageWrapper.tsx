"use client";
import {
  chakra,
  Flex,
  VisuallyHidden,
  HStack,
  VStack,
  Button,
  Box,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { FaRegFileCode } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Header = () => {
  const bg = "white";
  const mobileNav = useDisclosure();
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={2}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Box ml="2">
              <Image
                src="/om_photo.jpg"
                alt="Logo"
                boxSize="40px"
                width="50px"
                borderRadius="full"
                border="2px solid #4b3f43"
              />
            </Box>
          </Flex>
          <HStack display="flex-end" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link as={NextLink} href="/blog">
                <Button
                  variant="ghost"
                  color="black"
                  _hover={{ backgroundColor: "exhibit.300", opacity: 0.8 }}
                  aria-label="blog"
                  leftIcon={<RiArticleLine />}
                >
                  Blog
                </Button>
              </Link>
              <Link as={NextLink} href="/projects">
                <Button
                  variant="ghost"
                  color="black"
                  _hover={{ backgroundColor: "exhibit.300", opacity: 0.8 }}
                  aria-label="projects"
                  leftIcon={<FaRegFileCode />}
                >
                  Projects
                </Button>
              </Link>
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                variant="ghost"
                onClick={mobileNav.onOpen}
              >
                <HamburgerIcon />
              </IconButton>

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link as={NextLink} href="/blog">
                  <Button
                    w="full"
                    variant="ghost"
                    color="black"
                    _hover={{ backgroundColor: "exhibit.300", opacity: 0.8 }}
                    aria-label="blog"
                    leftIcon={<RiArticleLine />}
                  >
                    Blog
                  </Button>
                </Link>
                <Link as={NextLink} href="/projects">
                  <Button
                    w="full"
                    variant="ghost"
                    color="black"
                    _hover={{ backgroundColor: "exhibit.300", opacity: 0.8 }}
                    aria-label="projects"
                    leftIcon={<FaRegFileCode />}
                  >
                    Projects
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Flex
      w="full"
      bg="#4b3f43"
      p={15}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
      >
        <chakra.p
          py={{
            base: "2",
            sm: "0",
          }}
          color="gray.800"
        >
          All rights reserved &copy; {year}
        </chakra.p>

        <Flex mx="-2" display="flex" alignItems="center">
          <chakra.a
            target="_blank"
            href="mailto:oogale@uwaterloo.ca"
            mx="2"
            color="gray.600"
            _hover={{
              color: "gray.500",
            }}
            aria-label="Email"
          >
            <MdAttachEmail size={"25"} />
          </chakra.a>

          <chakra.a
            target="_blank"
            href="tel:+15489949110"
            mx="2"
            color="gray.600"
            _hover={{
              color: "gray.500",
            }}
            aria-label="Phone"
          >
            <IoCall size={"25"} />
          </chakra.a>

          <chakra.a
            target="_blank"
            href="https://ca.linkedin.com/in/om-ogale"
            mx="2"
            color="gray.600"
            _hover={{
              color: "gray.500",
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={"25"} />
          </chakra.a>

          <chakra.a
            target="_blank"
            href="https://github.com/OmOgale"
            mx="2"
            color="gray.600"
            _hover={{
              color: "gray.500",
            }}
            aria-label="Github"
          >
            <FaGithub size={"25"} />
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
};

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Stack gap={0} justifyContent="center">
        <Header />
        {children}
        <Footer />
      </Stack>
    </>
  );
};

export default PageWrapper;
