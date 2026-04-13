import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      width="100vw"
      //   justifyContent="center"
      p="20px"
      //   flexDir="column"
      className="create-resume-container"
    >
      <Flex className="create-resume-editor" flex={1}>
        {children}
      </Flex>
      <Flex className="create-resume-preview" flex={1}></Flex>
    </Flex>
  );
}
