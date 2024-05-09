import { ChakraStyledOptions, Text } from "@chakra-ui/react";

const Description = ({
  text,
  options,
}: {
  text: string;
  options: ChakraStyledOptions;
}) => {
  return <Text {...options}>{text}</Text>;
};

export default Description;
