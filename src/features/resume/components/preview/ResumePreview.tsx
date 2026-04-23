import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
          flexDir="column"
          borderBottom="solid 2px white"
          gap="20px"
        >
          <Heading m="0">ABOUT ME</Heading>
          <Text mb="0">{resume.personalDetails.description}</Text>

          <Text className="reference">{resume.personalDetails.reference}</Text>
          <Flex flexDir="column">
            {resume.personalDetails.links?.map((link) => {
              return <Link key={link.id}>{link.label}</Link>;
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="20px">
        <Heading flex={2}>{resume.personalDetails.name}</Heading>
        <Flex className="work-experience-section" gap="20px">
          {resume.workHistory.map((experience) => {
            return (
              <Flex key={experience.id} flexDir="column">
                <Flex gap="4px">
                  <Text>{experience.title}</Text>
                  <Text>{experience.company}</Text>
                </Flex>
                <Text>{experience.description}</Text>
                <Flex flexDir="column" gap="4px">
                  <Text>{`Started: ${experience.startDate}`}</Text>
                  <Text>{`Finished: ${experience.endDate}`}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex className="education-section" gap="20px">
          {resume.education.map((education) => {
            return (
              <Flex key={education.id} flexDir="column">
                <Flex gap="4px">
                  <Text>{education.school}</Text>
                  <Text>{education.degree}</Text>
                </Flex>
                <Flex flexDir="column" gap="4px">
                  <Text>{`Started: ${education.startDate}`}</Text>
                  <Text>{`Finished: ${education.endDate}`}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
