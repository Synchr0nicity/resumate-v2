"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
    </SessionProvider>
  );
}
