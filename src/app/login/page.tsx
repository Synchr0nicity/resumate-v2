"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Flex h="100vh" w="100vw" className="login-page-container">
      <Flex
        className="login-page-wrapper"
        flexDir="column"
        h="100%"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDir="column"
          className="login-page-inner-container"
          gap="16px"
        >
          <Flex flexDir="column" gap="8px">
            <h1
              style={{
                marginBottom: "0",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "36px",
                background: "linear-gradient(to right, #4F46E5, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome Back
            </h1>
            <Text mb="0" fontSize="14px" lineHeight="20px" color="#64748B">
              Log in to continue crafting your perfect resume.
            </Text>
          </Flex>
          <ButtonGroup mt="16px" w="100%" flexDirection="column" gap="12px">
            <Button
              width="100%"
              border="solid 1px #E2E8F0"
              as={Flex}
              gap={3}
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              onClick={() =>
                signIn("google", {
                  prompt: "select_account",
                  callbackUrl: "/dashboard",
                })
              }
              p="10px 16px"
              bg="transparent"
              color="#0F172A"
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              _hover={{ bg: "#F5F5F5" }}
            >
              <i className="fa-brands fa-google fa-lg"></i>
              Continue with Google
            </Button>
            <Button
              width="100%"
              border="solid 1px #E2E8F0"
              as={Flex}
              gap={3}
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              onClick={() =>
                signIn("google", {
                  prompt: "select_account",
                  callbackUrl: "/dashboard",
                })
              }
              p="10px 16px"
              bg="transparent"
              color="#0F172A"
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              _hover={{ bg: "#F5F5F5" }}
            >
              <Box as="span" color="#0A66C2">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </Box>
              Continue with LinkedIn
            </Button>
          </ButtonGroup>
          <Flex w="100%" py="24px" gap="16px" alignItems="center">
            <Box w="136px" h="2px" bg="#E2E8F0" />
            <Text
              mb="0"
              color="#64748B"
              fontWeight="500"
              fontSize="12px"
              lineHeight="16px"
              letterSpacing=".6px"
            >
              OR LOG IN WITH EMAIL
            </Text>
            <Box w="136px" h="2px" bg="#E2E8F0" />
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1} backgroundImage={"src()"} />
    </Flex>
  );
}
