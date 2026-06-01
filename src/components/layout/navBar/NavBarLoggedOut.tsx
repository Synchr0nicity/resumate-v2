"use client";

import { Flex, ButtonGroup, Button, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { Fragment } from "react";
import { AppText } from "../../atoms/AppText";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NavBarLoggedOut = () => {
  const router = useRouter();

  return (
    <Fragment>
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
      <Flex gap="32px">
        <Link
          href="#"
          as={NextLink}
          borderBottom="none"
          _hover={{ textDecoration: "none", color: "#4f46e5" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _active={{ outline: "none" }}
          color="#64748B"
          transition="color .3s ease-in-out"
        >
          <Flex gap="8px" color="inherit">
            <AppText variant="small" fontWeight="500">
              Templates
            </AppText>
          </Flex>
        </Link>
        <Link
          href="#"
          as={NextLink}
          borderBottom="none"
          _hover={{ textDecoration: "none", color: "#4f46e5" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _active={{ outline: "none" }}
          color="#64748B"
          transition="color .3s ease-in-out"
        >
          <Flex gap="8px" color="inherit">
            <AppText variant="small" fontWeight="500">
              Features
            </AppText>
          </Flex>
        </Link>
        <Link
          href="#"
          as={NextLink}
          borderBottom="none"
          _hover={{ textDecoration: "none", color: "#4f46e5" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _active={{ outline: "none" }}
          color="#64748B"
          transition="color .3s ease-in-out"
        >
          <Flex gap="8px" color="inherit">
            <AppText variant="small" fontWeight="500">
              Examples
            </AppText>
          </Flex>
        </Link>
        <Link
          href="#"
          as={NextLink}
          borderBottom="none"
          _hover={{ textDecoration: "none", color: "#4f46e5" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _active={{ outline: "none" }}
          color="#64748B"
          transition="color .3s ease-in-out"
        >
          <Flex gap="8px" color="inherit">
            <AppText variant="small" fontWeight="500">
              Pricing
            </AppText>
          </Flex>
        </Link>
      </Flex>
      <ButtonGroup gap="17px">
        <Button
          px="0"
          fontWeight="500"
          fontSize="14px"
          bg="white"
          color="black"
          transition="color .3s ease-in-out"
          _hover={{ color: "#4f46e5" }}
          onClick={() => router.push("/login")}
        >
          Log in
        </Button>
        <Button
          fontSize="14px"
          lineHeight="20px"
          bg="#0F172A"
          fontWeight="500"
          color="#ffff"
          borderRadius="8px"
          height="39px"
          width="129px"
          border="solid 1px transparent"
          transition="all .3s ease-in-out"
          _hover={{
            backgroundColor: "#ffff",
            color: "black",
            border: "solid 1px black",
          }}
          px="15px"
          py="9px"
          h="fit-content"
        >
          Build Resume
        </Button>
      </ButtonGroup>
    </Fragment>
  );
};

export default NavBarLoggedOut;
