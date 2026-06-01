"use client";

import { Flex, Button, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const NavBarLoggedIn = () => {
  const router = useRouter();

  return (
    <Flex width="100%" justifyContent="space-between">
      <Link
        href="#"
        as={NextLink}
        _hover={{ textDecoration: "none" }}
        _focus={{ outline: "none", boxShadow: "none" }}
        _active={{ outline: "none" }}
      >
        <Flex gap="8px" alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            px="8px"
            py="16px"
            borderRadius="8px"
            bg="#4F46E5"
          >
            <i
              className="fa-solid fa-file-lines fa-xl"
              style={{ color: "#FFFFFF" }}
            />
          </Flex>
          <Text mb="0" letterSpacing="-0.5px" fontSize="20px" fontWeight="700">
            Resumate
          </Text>
        </Flex>
      </Link>
      <Button
        onClick={() =>
          signOut({
            callbackUrl: "/login",
          })
        }
      >
        Log out
      </Button>
    </Flex>
  );
};

export default NavBarLoggedIn;
