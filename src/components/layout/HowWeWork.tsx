import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";

const HowWeWork = () => {
  return (
    <Flex
      className="how-we-work"
      width="100%"
      my="96px"
      px="80px"
      alignItems="center"
      flexDir="column"
    >
      <Flex flexDir="column" gap="16px" maxWidth="672px" alignItems="center">
        <Flex
          as="span"
          px="12px"
          py="6px"
          width="fit-content"
          border="solid 1px #4F46E533"
          borderRadius="99px"
          bg="#4F46E51A"
          gap="8px"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="14px"
            lineHeight="20px"
            mb="0"
            fontWeight="600"
            color="#4F46E5"
          >
            Simple Process
          </Text>
        </Flex>
        <Flex flexDir="column" gap="16px" alignItems="center">
          <AppHeading>How Resumate Works</AppHeading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowWeWork;
