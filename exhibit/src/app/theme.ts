/* theme.ts */
import { extendTheme, withDefaultColorScheme, theme as baseTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
      exhibit: {
        100: baseTheme.colors.white,
        200: "#4b3f43",
        300: "#d98aa2",
        400: "#92cfb3",
        500: "#779573",
        600: "#c3f2bd",
      }
    }
},
  withDefaultColorScheme({ colorScheme: 'exhibit' })
)
