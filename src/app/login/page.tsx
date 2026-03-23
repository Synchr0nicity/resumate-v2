"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Flex direction="column" gap={4}>
      <Heading as="h1">Login</Heading>

      <Button
        onClick={() =>
          signIn("google", { prompt: "select_account", callbackUrl: "/" })
        }
      >
        Sign in with Google
      </Button>
    </Flex>
  );
}
