"use client";
import { Text } from '@chakra-ui/react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Name = () => {
  return (
    <>
    <Text
          fontWeight="bold"
          letterSpacing="tight"
          fontSize={{ base: "7xl", md: "9xl" }}
          whiteSpace="pre-line"
          align="left"
          lineHeight="1"
          display={{md: "none"}}
        >
          Om {"\n"} Ogale
        </Text>
        <Text
          fontWeight="bold"
          letterSpacing="tight"
          fontSize={{ base: "7xl", md: "9xl" }}
          whiteSpace="pre-line"
          align="left"
          lineHeight="1"
          display={{base: "none", md: "unset"}}
        >
          Om Ogale
        </Text>
        <Text
          color="exhibit.300"
          fontWeight="bold"
          letterSpacing="tight"
          fontSize={{ base: "4xl", sm: " 5xl" }}
          align="left"
          mt="2"
          height={150}
          flexShrink={0}
          whiteSpace={"pre-line"}
          display={{md: "none"}}
        >
          <TypeAnimation
            sequence={[`Aspiring to \n Learn Everyday!`]}
            wrapper="span"
          />
        </Text>
        <Text
          color="exhibit.300"
          fontWeight="bold"
          letterSpacing="tight"
          fontSize={" 5xl"}
          align="left"
          mt="2"
          height={150}
          flexShrink={0}
          whiteSpace={"pre-line"}
          display={{ base: "none", md: "unset"}}
        >
          <TypeAnimation
            sequence={[`Aspiring to Learn Everyday!`]}
            wrapper="span"
          />
        </Text>
    </>
  )
}

export default Name

