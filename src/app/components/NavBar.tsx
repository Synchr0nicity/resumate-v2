import { Flex, ButtonGroup, Button, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const NavBar = () => {
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
    >
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
          <Text mb="0" fontSize="28px" fontWeight="700">
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
            <Text color="inherit" mb="0" fontSize="20px">
              Templates
            </Text>
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
            <Text color="inherit" mb="0" fontSize="20px">
              Features
            </Text>
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
            <Text color="inherit" mb="0" fontSize="20px">
              Examples
            </Text>
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
            <Text color="inherit" mb="0" fontSize="20px">
              Pricing
            </Text>
          </Flex>
        </Link>
      </Flex>
      <ButtonGroup gap="17px">
        <Button
          bg="white"
          color="black"
          transition="color .3s ease-in-out"
          _hover={{ color: "#4f46e5" }}
        >
          Log in
        </Button>
        <Button
          bg="#0F172A"
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
        >
          Build Resume
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
