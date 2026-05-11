"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AppHeading } from "../../atoms/AppHeading";
import PricingCards from "./PricingCards";

const Templates = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<
    "annual" | "monthly"
  >("annual");

  const value = useBreakpointValue({
    base: "small",
    lg: "desktop",
    "2xl": "veryLarge",
  });

  return (
    <Flex
      bg="#F4F6F8"
      flexDir="column"
      className="templates-container"
      width="100%"
      h="794px"
      px="80px"
      py="96px"
      gap="40px"
    >
      <Flex width="100%" flexDir="column">
        <Flex className="pricing-header" flexDir="column" gap="16px">
          <AppHeading>Simple, Transparent Pricing</AppHeading>
          <Text
            mt="8px"
            mb="0"
            fontSize="18px"
            lineHeight="28px"
            color="#64748B"
          >
            Choose the plan that best fits your career goals. No hissen fees.
          </Text>
        </Flex>
        <ButtonGroup
          //   width="260px"
          width="fit-content"
          bg="#ffff"
          borderRadius="99px"
          border="solid 1px #E2E8F0"
          position="relative"
          p="4px"
          gap="0"
        >
          <Button
            p="8px 24px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            borderRadius="99px"
            color="black"
            zIndex={1}
            bg="transparent"
          >
            Monthly
          </Button>
          <Button
            p="8px 24px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            bg="transparent"
            color="#64748B"
            borderRadius="99px"
            zIndex={1}
          >
            {"Annually"}
            <span style={{ color: "#10B981", marginLeft: "-4px" }}>-50%</span>
          </Button>
          <Box
            p="8px 24px"
            top="4px"
            left="4px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            position="absolute"
            transition="all .15s ease"
            // zIndex={0}
            bg="#F4F6F8"
            border="1px solid #E2E8F0"
            borderRadius="99px"
          >
            <Text mb="0" opacity="0">
              Monthly
            </Text>
          </Box>
        </ButtonGroup>
      </Flex>
      <PricingCards selectedFrequency={selectedFrequency} />
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        color="#4F46E5"
      >
        <Text
          mb="0"
          fontWeight="600"
          fontSize="16px"
          lineHeight="24px"
          color="inherit"
        >
          Explore all templates
        </Text>
        <i
          style={{ color: "inherit" }}
          className="fa-solid fa-arrow-right fa-sm"
        ></i>
      </Flex>
    </Flex>
  );
};

export default Templates;
