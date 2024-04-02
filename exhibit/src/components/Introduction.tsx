"use client";
import { Flex, Box, chakra, Stack, Link, Text } from "@chakra-ui/react";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
  return (
    <Flex w="full" justifyContent="center">
      <Stack>
        <Text
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
          fontSize="8xl"
          display="block"
        >
          Om Ogale
        </Text>
        <Text
          color="#d98aa2"
          textAlign="center"
          fontWeight="bold"
          letterSpacing="tight"
          fontSize="6xl"
          display="block"
          mt="30"
        >
            <TypeAnimation
                sequence={[
                    "Aspiring to Learn Everyday!",
                ]}
                wrapper="span"
            />
        </Text>
      </Stack>
    </Flex>
  );
};

const trial = () => {
  return (
    <Flex
      bg="#edf3f8"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex justify="center" bg="white" w="full">
        <Box
          w={{
            base: "full",
            md: "75%",
            lg: "50%",
          }}
          px={4}
          py={20}
          textAlign={{
            base: "left",
            md: "center",
          }}
        >
          <chakra.span
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span display="block" color="brand.600">
              Start your free trial today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{
              base: "left",
              md: "center",
            }}
            direction={{
              base: "column",
              sm: "row",
            }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="white"
                bg="brand.600"
                _hover={{
                  bg: "brand.700",
                }}
              >
                Get started
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Learn more
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Introduction;
