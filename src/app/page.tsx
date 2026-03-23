"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Flex flexDir="column" gap="20px">
      {" "}
      I am HOme!
      <div>Signed in as {session ? session.user?.email : "Unknown"}</div>
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign out
      </Button>
    </Flex>
  );
}
