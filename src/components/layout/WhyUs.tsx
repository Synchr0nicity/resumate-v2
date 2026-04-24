import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import DoubleCheck from "@/assets/svg/double-check.svg";
import { AppHeading } from "../atoms/AppHeading";

const WhyUs = () => {
  return (
    <Flex
      className="why-us-container"
      width="100%"
      h="794px"
      bg="#F4F6F8"
      px="80px"
      py="96px"
    >
      <Flex px="24px" flexDir="column" gap="64px">
        <Flex
          className="why-us-header"
          flexDir="column"
          maxWidth="718px"
          gap="8px"
        >
          <Text
            mb="0"
            fontWeight="600"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="0.7px"
            color="#4F46E5"
          >
            WHY CHOOSE US
          </Text>
          <AppHeading
          // fontFamily="inherit"
          // as="h2"
          // fontWeight="700"
          // fontSize="36px"
          // lineHeight="40px"
          // color="#0F172A"
          // letterSpacing="0"
          >
            Discover the Benefits of Our Platform
          </AppHeading>
          <Text
            mt="8px"
            mb="0"
            fontSize="18px"
            lineHeight="28px"
            color="#64748B"
          >
            Everything you need to create a professional, ATS-friendly resume
            that gets you noticed by recruiters.
          </Text>
        </Flex>
        <Flex className="why-us-cards" gap="24px">
          <Flex
            flexDir="column"
            gap="12px"
            alignItems="flex-start"
            p="32px"
            border="solid 1px #E2E8F0"
            borderRadius="16px"
            bg="#FFFFFF"
            maxWidth="394.67px"
            className="group guided-content-card"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              px="12.5px"
              py="14px"
              bg="#4F46E51A"
              borderRadius="12px"
              fontSize="20px"
              color="#4F46E5"
              transition="all .15s ease-in-out"
              _groupHover={{ color: "#ffff", bg: "#4F46E5" }}
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </Flex>

            <Flex flexDir="column" gap="8px"></Flex>
            <AppHeading
              // as="h3"
              // m="0"
              // fontWeight="700"
              // fontFamily="inherit"
              fontSize="20px"
              lineHeight="28px"
            >
              Guided Content Builder
            </AppHeading>
            <Text mb="0" color="#64748B" fontSize="14px" lineHeight="22.75px">
              We walk you through each section with prompts and suggestions so
              you always know what to write.
            </Text>
            <Image src="/content-builder.svg" />
          </Flex>
          <Flex
            flexDir="column"
            gap="12px"
            alignItems="flex-start"
            p="32px"
            border="solid 1px #E2E8F0"
            borderRadius="16px"
            bg="#FFFFFF"
            maxWidth="394.67px"
            className="group guided-content-card"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              px="15px"
              py="14px"
              bg="#3B82F61A"
              borderRadius="12px"
              color="#3B82F6"
              transition="all .15s ease-in-out"
              _groupHover={{ color: "#ffff", bg: "#3B82F6" }}
            >
              <DoubleCheck />
            </Flex>

            <Flex flexDir="column" gap="8px"></Flex>
            <AppHeading
              // as="h3"
              // m="0"
              // fontWeight="700"
              // fontFamily="inherit"
              fontSize="20px"
              lineHeight="28px"
            >
              ATS-Optimized Templates
            </AppHeading>
            <Text mb="0" color="#64748B" fontSize="14px" lineHeight="22.75px">
              Our templates are structurally designed to pass through Applicant
              Tracking Systems without parsing errors.
            </Text>
            <Image src="/optimized-templates.svg" />
          </Flex>
          <Flex
            flexDir="column"
            gap="12px"
            alignItems="flex-start"
            p="32px"
            border="solid 1px #E2E8F0"
            borderRadius="16px"
            bg="#FFFFFF"
            maxWidth="394.67px"
            className="group guided-content-card"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              px="12.5px"
              py="14px"
              bg="#A855F71A"
              borderRadius="12px"
              fontSize="20px"
              color="#A855F7"
              transition="all .15s ease-in-out"
              _groupHover={{ color: "#ffff", bg: "#A855F7" }}
            >
              <i className="fa-solid fa-layer-group"></i>
            </Flex>

            <Flex flexDir="column" gap="8px"></Flex>
            <AppHeading
              // as="h3"
              // m="0"
              // fontWeight="700"
              // fontFamily="inherit"
              fontSize="20px"
              lineHeight="28px"
            >
              Real-time Preview
            </AppHeading>
            <Text mb="0" color="#64748B" fontSize="14px" lineHeight="22.75px">
              See exactly how your resume will look as you type. No more
              guessing or switching between edit and view modes.
            </Text>
            <Image justifySelf="flex-end" src="/preview.svg" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhyUs;
