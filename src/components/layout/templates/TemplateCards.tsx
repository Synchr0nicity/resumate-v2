import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Card = {
  id: number | string;
  url: string;
  type: String;
  label: string;
};

type Cards = Card[];

const TemplateCards = () => {
  const cards: Cards = [
    { id: 1, url: "template-image.png", type: "Corporate", label: "Executive" },
    {
      id: 2,
      url: "template-image.png",
      type: "Creative",
      label: "Minimalist Centered",
    },
    {
      id: 3,
      url: "template-image.png",
      type: "Creative",
      label: "Modern Sidebar",
    },
    {
      id: 4,
      url: "template-image.png",
      type: "Corporate",
      label: "Strict Professional",
    },
  ];

  return (
    <Flex width="100%" gap="24px" justifyContent="center">
      {cards.map((card) => (
        <Flex flexDir="column" gap="16px" key={card.id}>
          <Box
            height="406px"
            width="290px"
            backgroundSize={"cover"}
            backgroundImage={`url(/${card.url})`}
          />
          <Flex justifyContent="space-between">
            <Text
              mb="0"
              fontWeight="600"
              fontSize="16px"
              lineHeight="24px"
              color="black"
            >
              {card.label}
            </Text>
            <Box
              p="4px 8px"
              border="1px solid #E2E8F0"
              borderRadius="4px"
              bg="#F4F6F8"
              fontSize="12px"
              fontWeight="500"
              lineHeight="16px"
              color="#64748B"
            >
              {card.type}
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default TemplateCards;
