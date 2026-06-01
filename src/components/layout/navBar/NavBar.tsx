"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSession } from "next-auth/react";
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedIn from "./NavBarLoggedIn";

const NavBar = () => {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <Flex
      py="20px"
      px="79px"
      width="100%"
      height="fit-content"
      as="nav"
      justifyContent="space-between"
      fontSize="14px"
      border="1px solid #E2E8F0"
      position="fixed"
      top="0"
      left="0"
      zIndex={10}
      bg="#ffff"
    >
      {isLoggedIn ? <NavBarLoggedIn /> : <NavBarLoggedOut />}
    </Flex>
  );
};

export default NavBar;
