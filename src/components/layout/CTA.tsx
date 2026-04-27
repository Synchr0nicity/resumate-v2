import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";
import { AppText } from "../atoms/AppText";

const CTA = () => {
  return (
    <Flex
      width="100vw"
      bg="#0F172A"
      flexDir="column"
      alignItems="center"
      gap="24px"
      py="96px"
    >
      <AppHeading variant="CTA">Your resume's new best mate</AppHeading>
      <AppText
        variant="body"
        fontSize="20px"
        lineHeight="28px"
        maxWidth="589px"
        color="#CBD5E1"
        textAlign="center"
      >
        Resumate gives you everything you need to create a polished,
        professional resume - fast.
      </AppText>
      <Flex
        mt="16px"
        gap="16px"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          bg="#4F46E5"
          _hover={{ bg: "#3A32B8" }}
          borderRadius="12px"
          color="#ffff"
          fontSize="18px"
          fontWeight="700"
          lineHeight="28px"
          p="16px 32px"
          height="fit-content"
        >
          Start Building for Free
        </Button>
        <AppText variant="small" color="#94a3b8">
          No credit card required
        </AppText>
      </Flex>
      <Flex width="100%" justifyContent="center" gap="24px" mt="8px">
        <Flex color="#10B981" alignItems="center" gap="8px">
          <i className="fa-solid fa-check" style={{ fontSize: "14px" }}></i>
          <AppText variant="small" fontWeight="500" color="#94a3b8">
            7-day free trial
          </AppText>
        </Flex>
        <Flex color="#10B981" alignItems="center" gap="8px">
          <i className="fa-solid fa-check" style={{ fontSize: "14px" }}></i>
          <AppText variant="small" fontWeight="500" color="#94a3b8">
            Cancel anytime
          </AppText>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CTA;
