"use client";

import { Icon } from "@/components/atoms/Icon";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Link,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginFormProps = {
  setMode: (mode: "signup" | "login") => void;
};

export default function LoginForm({ setMode }: LoginFormProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    console.log("response of signIn:", res);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Flex
      className="login-page-wrapper"
      flexDir="column"
      h="100%"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" className="login-page-inner-container" gap="16px">
        <Flex flexDir="column" gap="8px">
          <Heading
            fontWeight="700"
            fontSize="30px"
            lineHeight="36px"
            color="transparent"
            bgGradient="to-r"
            gradientFrom="#4F46E5"
            gradientTo="#3B82F6"
            backgroundClip="text"
            // backgroundColor="red"
            w="fit-content"
          >
            Welcome Back
          </Heading>
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
              signIn("linkedin", {
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
        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap="20px">
            <Flex flexDir="column" gap="6px">
              <Heading
                m="0"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                color="#0F172A"
              >
                Email Address
              </Heading>
              <InputGroup
                border="1px solid #E2E8F0"
                borderRadius="8px"
                startElement={<Icon className="fa-regular fa-envelope" />}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </InputGroup>
            </Flex>
            <Flex flexDir="column" gap="6px">
              <Heading
                m="0"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                color="#0F172A"
              >
                Password
              </Heading>
              <InputGroup
                border="1px solid #E2E8F0"
                borderRadius="8px"
                startElement={<Icon className="fa-solid fa-lock" />}
                endElement={
                  <Icon
                    className="fa-regular fa-eye"
                    _hover={{ color: "#4F46E5" }}
                  />
                }
              >
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*******"
                />
              </InputGroup>
            </Flex>
            <Button
              type="submit"
              _hover={{ bg: "#3931B8" }}
              width="100%"
              py="10px"
              borderRadius="8px"
              bg="#4F46E5"
            >
              Log in <Icon className="fa-solid fa-arrow-right" />
            </Button>
            <Flex width="100%" justifyContent="flex-end">
              <Link
                borderRadius="8px"
                color="#443dc6"
                _hover={{
                  color: "rgb(66, 60, 187)",
                  textDecoration: "none",
                }}
                onClick={() => setMode("signup")}
              >
                Create an account instead{" "}
              </Link>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
