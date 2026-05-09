import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../../atoms/AppHeading";
import TemplatesButtonContainer from "./TemplatesButtonContainer";

const Templates = () => {
  return (
    <Flex
      className="templates-container"
      width="100%"
      h="794px"
      px="80px"
      py="96px"
    >
      <Flex width="100%" alignItems="flex-start" justifyContent="space-between">
        <Flex
          className="why-us-header"
          flexDir="column"
          maxWidth="718px"
          gap="8px"
        >
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
    </Flex>
  );
};

export default Templates;
