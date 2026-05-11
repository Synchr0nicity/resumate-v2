"use client";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../../atoms/AppHeading";
import TemplatesButtonContainer from "./TemplatesButtonContainer";
import TemplateCards from "./TemplateCards";

const Templates = () => {
  const value = useBreakpointValue({
    base: "small",
    lg: "desktop",
    "2xl": "veryLarge",
  });

  return (
    <Flex
      flexDir="column"
      className="templates-container"
      width="100%"
      h="794px"
      px="80px"
      py="96px"
      gap="40px"
    >
      <Flex
        width="100%"
        alignItems="flex-start"
        justifyContent={value === "veryLarge" ? "center" : "space-between"}
        gap={value === "veryLarge" ? "350px" : undefined}
      >
        <Flex className="templates-header" flexDir="column" gap="8px">
          <AppHeading>Professionally Designed Templates</AppHeading>
          <Text
            mt="8px"
            mb="0"
            fontSize="18px"
            lineHeight="28px"
            color="#64748B"
          >
            Choose from our collection of corporate and creative templates
            suitable <br /> for any industry.
          </Text>
        </Flex>
        <TemplatesButtonContainer />
      </Flex>
      <TemplateCards />
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
