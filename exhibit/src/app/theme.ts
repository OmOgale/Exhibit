/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
});
