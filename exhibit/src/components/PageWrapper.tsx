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
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
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
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Blog</Button>
              <Button variant="ghost">Company</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
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

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
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
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _hover={{
            color: "gray.700",
          }}
        >
          Brand
        </chakra.a>

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
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
