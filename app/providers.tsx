"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      main: "#ed4e2d",
      bg: "#201c1b",
    },
  },
  fonts: {
    heading: "var(--font-spaceGrotesk)",
    body: "var(--font-spaceGrotesk)",
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
