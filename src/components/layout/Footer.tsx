import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";

const Footer = () => {
  return (
    <Flex
      className="footer-container"
      gap="202px"
      width="100%"
      p="64px 104px 32px 104px"
    >
      <Flex flexDir="column" gap="16px" width="303px">
        <Flex flexDir="column" gap="16px">
          <Flex
            width="100%"
            alignItems="center"
            justifyContent="flex-start"
            gap="8px"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              px="8px"
              py="16px"
              borderRadius="8px"
              bg="#4F46E5"
            >
              <i
                className="fa-solid fa-file-lines fa-xl"
                style={{ color: "#FFFFFF" }}
              />
            </Flex>
            <Text
              mb="0"
              letterSpacing="-0.5px"
              fontSize="20px"
              fontWeight="700"
            >
              Resumate
            </Text>
          </Flex>
        </Flex>
        <Text mb="0" color="#64748B" fontSize="14px" lineHeight="20px">
          The modern standard for building professional resumes that get you
          hired faster.
        </Text>
        <Flex gap="16px">
          <Flex
            h="32px"
            w="32px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="#F4F6F8"
          >
            <i className="fa-brands fa-twitter" style={{ color: "#64748B" }} />
          </Flex>
          <Flex
            h="32px"
            w="32px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="#F4F6F8"
          >
            <i className="fa-brands fa-linkedin" style={{ color: "#64748B" }} />
          </Flex>
          <Flex
            h="32px"
            w="32px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="#F4F6F8"
          >
            <i className="fa-brands fa-github" style={{ color: "#64748B" }} />
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="32px" width="782px">
        <Flex flexDir="column" gap="12px">
          <AppHeading fontSize="16px" fontWeight="700" lineHeight="24px">
            Product
          </AppHeading>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Resume Builder
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Cover Letter Builder
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Templates
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Pricing
          </Text>
        </Flex>
        <Flex flexDir="column" gap="12px">
          <AppHeading fontSize="16px" fontWeight="700" lineHeight="24px">
            Resources
          </AppHeading>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Career Blog
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Resume Examples
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Help Center
          </Text>
        </Flex>
        <Flex flexDir="column" gap="12px">
          <AppHeading fontSize="16px" fontWeight="700" lineHeight="24px">
            Company
          </AppHeading>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            About Us
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Careers
          </Text>
          <Text color="#64748B" mb="0" fontSize="14px" lineHeight="20px">
            Contact
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
