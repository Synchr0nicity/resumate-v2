import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";

const Hero = () => {
  return (
    <Flex
      className="hero-container"
      // h="1462px"
      mt="80px"
      width="100%"
      position="relative"
      px="104px"
      mb="129px"
      overflow="hidden"
    >
      <Flex
        width="100%"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        gap="24px"
        px="24px"
      >
        <Flex
          as="span"
          px="12px"
          py="6px"
          width="215px"
          border="solid 1px #4F46E533"
          borderRadius="99px"
          bg="#4F46E51A"
          gap="8px"
          alignItems="center"
          justifyContent="center"
        >
          <Box bg="#4F46E5" h="8px" w="8px" borderRadius="50%" />
          <Text
            fontSize="14px"
            lineHeight="20px"
            mb="0"
            fontWeight="600"
            color="#4F46E5"
          >
            Effortless Resume Builder
          </Text>
        </Flex>
        {/* <Heading
          fontFamily="inherit"
          fontSize="72px"
          fontWeight="700"
          lineHeight="72px"
          letterSpacing="-1.8px"
          textAlign="center"
          m="0"
          p="0"
          color="black"
          as="h1"
          width="680px"
          position="relative"
        > */}
        <AppHeading variant="hero" position="relative">
          Build a professional{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #4F46E5, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            resume in minutes
          </span>
          <Box
            position="absolute"
            bottom="-13px"
            left="50%"
            transform="translate(-50%)"
          >
            <svg
              width="261.3343200683594"
              height="20"
              viewBox="0 0 261.3343200683594 20"
              fill="none"
            >
              <path
                d="M 0 10 Q 130.6671600341797 -7 261.3343200683594 10"
                stroke="url(#fade)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M 0 10 Q 130.6671600341797 -7 261.3343200683594 10"
                stroke="#3B82F64D"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient id="fade" x1="0" y1="0" x2="261" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.05" />
                  <stop offset="20%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </AppHeading>
        {/* </Heading> */}

        <Text
          width="632px"
          textAlign="center"
          fontSize="18px"
          color="#64748B"
          lineHeight="29.25px"
        >
          Stand out from the crowd with our intuitive drag-and-drop builder.
          Choose from expert-designed templates and land your dream job faster.
        </Text>
        <ButtonGroup mt="16px" gap="16px">
          <Button
            py="16px"
            px="32px"
            minH="auto"
            // lineHeight="1.2"
            bg="#4F46E5"
            _hover={{ bg: "#3A32B8" }}
            borderRadius="12px"
            height="fit-content"
            border="none"
          >
            <Flex gap="8px" alignItems="center">
              <Text
                letterSpacing="0"
                fontSize="18px"
                lineHeight="28px"
                mb="0"
                fontWeight="600"
              >
                Create My Resume
              </Text>
              <i className="fa-solid fa-arrow-right"></i>
            </Flex>
          </Button>
          <Button
            py="16px"
            px="32px"
            minH="auto"
            // lineHeight="1.2"
            bg="white"
            _hover={{ bg: "#F5F5F5" }}
            borderRadius="12px"
            height="fit-content"
            fontSize="18px"
            lineHeight="28px"
            fontWeight="600"
            color="black"
            border="1px solid #E2E8F0"
          >
            View Templates
          </Button>
        </ButtonGroup>
        <Box
          boxShadow="0px 25px 50px -12px #00000040"
          mt="34px"
          h="515px"
          w="1024px"
          backgroundSize={"cover"}
          backgroundImage={"url('/Screenshot2026-04-24at1.32.32AM.png')"}
        />
        <Flex
          flexDir="column"
          width="100%"
          borderTop="solid 1px #E2E8F0"
          pt="40px"
          mt="34px"
          alignItems="center"
          gap="32px"
          color="#64748B"
        >
          <Text mb="0" fontSize="14px" fontWeight="500" lineHeight="20px">
            Trusted by professionals hired at
          </Text>
          <ButtonGroup gap="64px" fontSize="29px" lineHeight="29px">
            <Box>
              <i className="fa-brands fa-google"></i>
            </Box>
            <Box>
              <i className="fa-brands fa-windows"></i>
            </Box>
            <Box>
              <i className="fa-brands fa-amazon"></i>
            </Box>
            <Box>
              <i className="fa-brands fa-infinity"></i>
            </Box>
            <Box>
              <i className="fa-brands fa-apple"></i>
            </Box>
          </ButtonGroup>
        </Flex>
      </Flex>
      {/* 
      <Box
        position="absolute"
        top="-1200px"
        right="-300px"
        // transform="translate(40%, -10%)"
        height="1200px"
        width="1200px"
        borderRadius="50%"
        bg="#4F46E50D"
        zIndex={-9999}
        filter="blur(64px)"
      /> */}
    </Flex>
  );
};

export default Hero;
