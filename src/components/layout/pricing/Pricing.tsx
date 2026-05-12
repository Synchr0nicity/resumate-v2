"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { AppHeading } from "../../atoms/AppHeading";
import PricingCards from "./PricingCards";

const Templates = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<
    "annually" | "monthly"
  >("monthly");

  const value = useBreakpointValue({
    base: "small",
    lg: "desktop",
    "2xl": "veryLarge",
  });

  const btnRefs = useRef<
    Record<"monthly" | "annually", HTMLButtonElement | null>
  >({
    monthly: null,
    annually: null,
  });

  useLayoutEffect(() => {
    const activeElement = btnRefs.current[selectedFrequency];

    if (activeElement) {
      const leftValue = activeElement.offsetLeft;
      setLeftValue(leftValue);
    }
  }, [selectedFrequency]);

  const [leftValue, setLeftValue] = useState<number>(0);

  return (
    <Flex
      bg="#F4F6F8"
      flexDir="column"
      className="templates-container"
      width="100%"
      // h="794px"
      px="80px"
      py="96px"
      gap="40px"
    >
      <Flex width="100%" flexDir="column" alignItems="center" gap="32px">
        <Flex className="pricing-header" flexDir="column" gap="16px">
          <AppHeading>Simple, Transparent Pricing</AppHeading>
          <Text mb="0" fontSize="18px" lineHeight="28px" color="#64748B">
            Choose the plan that best fits your career goals. No hidden fees.
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
            ref={(el) => {
              btnRefs.current["monthly"] = el;
            }}
            p="8px 24px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            borderRadius="99px"
            color="black"
            zIndex={1}
            bg="transparent"
            onClick={(el) => setSelectedFrequency("monthly")}
          >
            Monthly
          </Button>
          <Button
            ref={(el) => {
              btnRefs.current["annually"] = el;
            }}
            p="8px 24px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            bg="transparent"
            color="#64748B"
            borderRadius="99px"
            zIndex={1}
            onClick={() => setSelectedFrequency("annually")}
          >
            {"Annually"}
            <span style={{ color: "#10B981", marginLeft: "-4px" }}>-50%</span>
          </Button>
          <Box
            p="8px 24px"
            top="4px"
            bottom="4px"
            left={`${leftValue}px`}
            position="absolute"
            transition="left .15s ease"
            // zIndex={0}
            bg="#F4F6F8"
            border="1px solid #E2E8F0"
            borderRadius="99px"
          >
            <Text
              as="span"
              opacity="0"
              fontWeight="600"
              fontSize="14px"
              lineHeight="20px"
            >
              {selectedFrequency === "monthly" ? "Monthly" : "Annually -50%"}
            </Text>
          </Box>
        </ButtonGroup>
      </Flex>
      <PricingCards selectedFrequency={selectedFrequency} />
    </Flex>
  );
};

export default Templates;
