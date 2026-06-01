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
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginFormProps = {
  setMode: (mode: "signup" | "login") => void;
};

type ErrorTypes = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};

export default function SignupForm({ setMode }: LoginFormProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<ErrorTypes>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const errors: ErrorTypes = {};

    if (!email) {
      errors.email = "Email is required";
    }
    if (!name) {
      errors.name = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 12) {
      errors.password = "Password must be at least 12 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setLoading(true);
    setErrors({});

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const text = await res.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      data = { error: text };
    }

    if (!res.ok) {
      console.error(data.error);
      setLoading(false);
      return;
    }
    setLoading(false);

    console.log("User created successfully", data);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

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
              Welcome
            </Heading>
            <Text mb="0" fontSize="14px" lineHeight="20px" color="#64748B">
              Sign up to start crafting your perfect resume!
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
              OR SIGN UP WITH EMAIL
            </Text>
            <Box w="136px" h="2px" bg="#E2E8F0" />
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex flexDir="column" gap="20px" width="100%">
              <Flex width="100%" flexDir="column" gap="6px">
                <Flex width="100%" gap="16px" alignItems="center">
                  <Heading
                    m="0"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#0F172A"
                  >
                    Username
                  </Heading>

                  {errors.name && (
                    <Text mb="0" fontSize="12px" color="red.500">
                      {errors.name}
                    </Text>
                  )}
                </Flex>

                <InputGroup
                  border="1px solid"
                  borderColor={errors.name ? "red.500" : "#E2E8F0"}
                  borderRadius="8px"
                  startElement={<Icon className="fa-regular fa-user" />}
                >
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="bobsburgers69"
                  />
                </InputGroup>
              </Flex>

              <Flex width="100%" flexDir="column" gap="6px">
                <Flex width="100%" gap="16px" alignItems="center">
                  <Heading
                    m="0"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#0F172A"
                  >
                    Email Address
                  </Heading>

                  {errors.email && (
                    <Text mb="0" fontSize="12px" color="red.500">
                      {errors.email}
                    </Text>
                  )}
                </Flex>

                <InputGroup
                  border="1px solid"
                  borderColor={errors.email ? "red.500" : "#E2E8F0"}
                  borderRadius="8px"
                  startElement={<Icon className="fa-regular fa-envelope" />}
                >
                  <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </InputGroup>
              </Flex>

              <Flex width="100%" flexDir="column" gap="6px">
                <Flex width="100%" gap="16px" alignItems="center">
                  <Heading
                    m="0"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#0F172A"
                  >
                    Password
                  </Heading>

                  {errors.password && (
                    <Text mb="0" fontSize="12px" color="red.500">
                      {errors.password}
                    </Text>
                  )}
                </Flex>

                <InputGroup
                  border="1px solid"
                  borderColor={errors.password ? "red.500" : "#E2E8F0"}
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
                    name="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Flex>

              <Flex width="100%" flexDir="column" gap="6px">
                <Flex width="100%" gap="16px" alignItems="center">
                  <Heading
                    m="0"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#0F172A"
                  >
                    Confirm Password
                  </Heading>

                  {errors.confirmPassword && (
                    <Text mb="0" fontSize="12px" color="red.500">
                      {errors.confirmPassword}
                    </Text>
                  )}
                </Flex>

                <InputGroup
                  border="1px solid"
                  borderColor={errors.confirmPassword ? "red.500" : "#E2E8F0"}
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
                    name="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
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
                Create Account <Icon className="fa-solid fa-arrow-right" />
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <Flex flex={1} backgroundImage={"src()"} />
    </Flex>
  );
}
