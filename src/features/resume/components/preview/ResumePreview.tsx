import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useResumeStore } from "../../state/resume.store";

export default function ResumePreview() {
  const { resume } = useResumeStore();

  return (
    <Flex
      border="solid 2px black"
      bg="#bcb25d"
      w="100%"
      h="100%"
      className="resume-previewer-container"
    >
      <Flex
        flex={1}
        className="resume-previewer-left-side"
        bg="gray"
        flexDir="column"
        px="20px"
      >
        <Box
          className="resume-previewer-left-side_image"
          borderRadius="20px"
          h="200px"
          w="200px"
          bg="orange"
        />
        <Flex
          className="resume-previewer-left-side_about-me"
          flexDir="col"
          borderBottom="solid 2px white"
        >
          <Heading m="0">ABOUT ME</Heading>
          <Text mb="0">{resume.personalDetails.description}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Heading flex={2}>{resume.personalDetails.name}</Heading>
      </Flex>
    </Flex>
  );
}
