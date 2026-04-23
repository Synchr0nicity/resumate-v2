import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex className="hero-container" h="1462px" mt="80px" width="100%">
      <Flex
        width="100%"
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        gap="24px"
      >
        <Flex
          as="span"
          px="6px"
          py="12px"
          width="215px"
          border="solid 1px #4F46E533"
          borderRadius="99px"
          bg="#4F46E51A"
          gap="6px"
          alignItems="center"
          justifyContent="center"
        >
          <Box bg="#4F46E5" h="8px" w="8px" borderRadius="50%" />
          <Text fontSize="14px" color="#4F46E5">
            Effortless Resume Builder
          </Text>
        </Flex>
        <Heading
          fontSize="72px"
          lineHeight="72px"
          textAlign="center"
          m="0"
          p="0"
          color="black"
          as="h1"
          width="643px"
          position="relative"
        >
          Build a professional{" "}
          <span style={{ color: "#3B82F6" }}>resume in minutes</span>
          <Box position="absolute" top="0" left="50%" bg="#3B82F64D" />
        </Heading>

        <Text
          width="631px"
          textAlign="center"
          fontSize="18px"
          color="#64748B"
          line-height="29.25px"
        >
          Stand out from the crown with our intuitive drag-and-drop builder.
          Choose from expert-designed templates and land your dream job faster.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
