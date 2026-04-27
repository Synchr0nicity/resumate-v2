import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";
import { AppText } from "../atoms/AppText";

const HowWeWork = () => {
  return (
    <Flex
      className="how-we-work"
      width="100%"
      py="96px"
      px="80px"
      alignItems="center"
      flexDir="column"
      borderTop="solid 1px #E2E8F0"
    >
      <Flex flexDir="column" gap="64px" maxWidth="672px" alignItems="center">
        <Flex flexDir="column" alignItems="center" gap="24px">
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
            <AppText variant="heading" maxWidth="630px" textAlign="center">
              Create a job-winning resume in three simple steps without any
              design skills required.
            </AppText>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center" gap="24px">
          <Flex width="100%" maxWidth="937px" alignItems="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              h="96px"
              w="96px"
              border="1px solid #E2E8F0"
              _hover={{
                borderColor: "#4F46E5",
                boxShadow:
                  "0px 5px 5px 0px #4F46E517, 0px 1px 3px 0px #4F46E51A, 0px 11px 7px 0px #4F46E50D, 0px 20px 8px 0px #4F46E503,  0px 32px 9px 0px #4F46E500",
              }}
              transition="all .15s ease-in-out"
              borderRadius="16px"
              fontSize="30px"
              color="#4F46E5"
              boxShadow="0px 1px 2px 0px #0000000D"
            >
              <i className="fa-solid fa-file-text"></i>
            </Flex>
            <Box h="2px" bg="#E2E8F0" flex={1} />
            {/* width="326px" /> */}
            <Flex
              justifyContent="center"
              alignItems="center"
              h="96px"
              w="96px"
              border="1px solid #E2E8F0"
              borderRadius="16px"
              fontSize="30px"
              color="#3B82F6"
              boxShadow="0px 1px 2px 0px #0000000D"
              _hover={{
                borderColor: "#3B82F6",
                boxShadow:
                  "0px 5px 5px 0px  #3B82F617, 0px 1px 3px 0px #3B82F61A, 0px 11px 7px 0px #3B82F60D, 0px 20px 8px 0px #3B82F603, 0px 32px 9px 0px #3B82F600",
              }}
              transition="all .15s ease-in-out"
            >
              <i className="fa-solid fa-edit"></i>
            </Flex>
            <Box h="2px" bg="#E2E8F0" flex={1} />
            <Flex
              justifyContent="center"
              alignItems="center"
              h="96px"
              w="96px"
              border="1px solid #E2E8F0"
              _hover={{
                borderColor: "#10B981",
                boxShadow:
                  "0px 5px 5px 0px  #10B9811A, 0px 1px 3px 0px #10B98117, 0px 11px 7px 0px #10B9810D, 0px 20px 8px 0px #10B98103, 0px 32px 9px 0px #10B98100",
              }}
              transition="all .15s ease-in-out"
              borderRadius="16px"
              fontSize="30px"
              color="#10B981"
              boxShadow="0px 1px 2px 0px #0000000D"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i>
            </Flex>
          </Flex>
          <Flex gap="32px">
            <Flex
              flexDir="column"
              gap="12px"
              width="389.33px"
              alignItems="center"
            >
              <AppHeading fontSize="20px" lineHeight="28px" as="h3">
                Choose a Template
              </AppHeading>
              <AppText variant="small" lineHeight="22.75px" textAlign="center">
                Select from our library of ATS-friendly, professional templates
                tailored to your industry.
              </AppText>
            </Flex>
            <Flex
              flexDir="column"
              gap="12px"
              width="389.33px"
              alignItems="center"
            >
              <AppHeading fontSize="20px" lineHeight="28px" as="h3">
                Add Your Content
              </AppHeading>
              <AppText
                variant="small"
                lineHeight="22.75px"
                textAlign="center"
                width="340px"
              >
                Use our AI assistant to generate compelling bullet points or
                write your own experience.
              </AppText>
            </Flex>
            <Flex
              flexDir="column"
              gap="12px"
              width="389.33px"
              alignItems="center"
            >
              <AppHeading fontSize="20px" lineHeight="28px" as="h3">
                Download & Apply
              </AppHeading>
              <AppText
                variant="small"
                lineHeight="22.75px"
                textAlign="center"
                width="340px"
              >
                Export your polished resume in PDF or Word format and start
                applying with confidence.
              </AppText>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowWeWork;
