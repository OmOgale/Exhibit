// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Heading,
// } from "@chakra-ui/react";
// import * as React from "react";
// import {
//   AutoComplete,
//   AutoCompleteInput,
//   AutoCompleteItem,
//   AutoCompleteList,
//   AutoCompleteGroup,
// } from "@choc-ui/chakra-autocomplete";
// import { useForm } from "react-hook-form";
import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  useCheckbox,
  chakra,
  CheckboxGroup,
  Checkbox,
  Flex,
  Text,
  useCheckboxGroup,
  Box,
  CheckboxProps,
  UseCheckboxProps,
  UseCheckboxReturn,
} from "@chakra-ui/react";
import { useState } from "react";
import { BoxGeometry } from "three/src/Three.js";

interface CustomCheckboxProps extends CheckboxProps {
}

function Example() {
  function CustomCheckbox(props: CustomCheckboxProps) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps }: UseCheckboxReturn =
      useCheckbox(props as UseCheckboxProps);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="40"
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(2px)"
        _hover={{
          background: "rgba(255, 255, 255, 0.2)", 
          backdropFilter: "blur(4px)",
        }}
        rounded="lg"
        px={[3, 4]}
        py={[2, 3]}
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Stack
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="exhibit.500"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg="exhibit.600" />}
        </Stack>
        <Text color="exhibit.600" {...getLabelProps()}>
          {props.value}
        </Text>
      </chakra.label>
    );
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["Poems", "Articles"],
  });

  return (
    <Stack direction={"row"} mt={5}>
      {/* <Text>The selected checkboxes are: {value.sort().join(" and ")}</Text> */}
      <CustomCheckbox {...getCheckboxProps({ value: "Poems" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "Articles" })} />
    </Stack>
  );
}

// const SearchBar = () => {
//   const { register, setValue, watch, handleSubmit } = useForm({
//     defaultValues: { team: "one" },
//   });

//   const value = watch("team");

//   const { onBlur, name } = register("team");
//   const onSubmit = data => console.log("data from form", data);

//   return (
//     <Box border="1px" borderRadius="1em" p={2}>
//       <Button onClick={() => setValue("team", "four")}>
//         Change Value To four
//       </Button>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl>
//           <FormLabel>Olympics Soccer Winner</FormLabel>
//           <AutoComplete
//             onChange={val => setValue("team", val)}
//             openOnFocus
//             rollNavigation
//             listAllValuesOnFocus
//             freeSolo
//             value={value}
//           >
//             <AutoCompleteInput variant="filled" name={name} onBlur={onBlur} />
//             <AutoCompleteList>
//               <AutoCompleteGroup>
//                 {options.map(option => (
//                   <AutoCompleteItem
//                     key={`option-${option.value}`}
//                     value={{
//                       title: `${option.value}`,
//                     }}
//                     label={option.label}
//                     textTransform="capitalize"
//                   />
//                 ))}
//               </AutoCompleteGroup>
//             </AutoCompleteList>
//           </AutoComplete>
//           <FormHelperText>Who do you support.</FormHelperText>
//         </FormControl>
//         <Center>
//           <Button type="submit">Submit</Button>
//         </Center>
//       </form>
//     </Box>
//   );
// }

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Flex direction={"column"} maxW={["unset", "50vw"]}>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          alignItems={"center"}
          display={"flex"}
        >
          <SearchIcon color="exhibit.600" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for a blog post..."
          _placeholder={{ color: "gray.300"}}
          size="lg"
          focusBorderColor="exhibit.300"
          borderColor="exhibit.600"
          _hover={{
            borderColor: "exhibit.300",
          }}
          borderWidth={2}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
      <Example />
    </Flex>
  );
};

export default SearchBar;
