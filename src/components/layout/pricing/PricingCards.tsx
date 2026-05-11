import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  ListRoot,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Card = {
  id: number;
  price: number;
  plan: "Professional" | "Basic" | "Lifetime";
  frequency: "Month" | "Annual" | "One-time";
  label: string;
  FrequencyBenefits: { active: boolean; label: string }[];
  buttonContent: string;
};

type Cards = Card[];

const PricingCards = ({
  selectedFrequency,
}: {
  selectedFrequency: "annual" | "monthly";
}) => {
  const cards: Cards = [
    {
      id: 1,
      price: 0,
      frequency: "Month",
      plan: "Basic",
      label: "Perfect for entry-level job seekers.",
      FrequencyBenefits: [
        { active: true, label: "1 resume" },
        { active: true, label: "3 Standard Templates" },
        { active: true, label: "TXT dwnload" },
        { active: false, label: "AI Content Generation" },
        { active: false, label: "Priority Support" },
      ],
      buttonContent: "Get Started Free",
    },
    {
      id: 2,
      price: 15,
      frequency: "Month",
      plan: "Professional",
      label: "Everything you need to land interviews.",
      FrequencyBenefits: [
        { active: true, label: "Unlimited Resumes" },
        { active: true, label: "All Premium Templates" },
        { active: true, label: "PDF & Word Downloads" },
        { active: true, label: "AI Content Generation" },
        { active: true, label: "Priority Support" },
      ],
      buttonContent: "Start 7-Day Trial",
    },
    {
      id: 3,
      price: 99,
      frequency: "One-time",
      plan: "Lifetime",
      label: "Pay once. use forever.",
      FrequencyBenefits: [
        { active: true, label: "All Professional Features" },
        { active: true, label: "Lifetime Access" },
        { active: true, label: "Priority Support" },
        { active: true, label: "Future Updates Included" },
      ],
      buttonContent: "Get Lifetime Access",
    },
    {
      id: 4,
      price: 7.5,
      frequency: "Annual",
      plan: "Professional",
      label: "Everything you need to land interviews.",
      FrequencyBenefits: [
        { active: true, label: "Unlimited Resumes" },
        { active: true, label: "All Premium Templates" },
        { active: true, label: "PDF & Word Downloads" },
        { active: true, label: "AI Content Generation" },
        { active: true, label: "Priority Support" },
      ],
      buttonContent: "Get Yearly Access",
    },
  ];

  return (
    <Flex width="100%" gap="24px" justifyContent="center">
      {cards
        .filter((card) => {
          if (selectedFrequency === "annual") {
            return card.frequency === "Annual";
          } else return card.frequency !== "Annual";
        })
        .map((card) => (
          <Flex
            boxShadow={
              card.id % 2 === 0
                ? `
      0px 6px 14px 0px #5047E51A,
      0px 25px 25px 0px #5047E517,
      0px 55px 33px 0px #5047E50D,
      0px 99px 39px 0px #5047E503,
      0px 154px 43px 0px #5047E500
    `
                : "none"
            }
            key={card.id}
            flexDir="column"
            p="32px"
            bg="#ffff"
            border={`${card.id % 2 === 0 ? "2px" : "1px"} solid ${card.id % 2 === 0 ? "#4F46E5" : "#E2E8F0"}`}
            borderRadius="16px"
            w="320px"
          >
            <Flex flexDir="column" gap="8px" h="100px">
              <Text
                mb="0"
                fontWeight="700"
                fontSize="18px"
                lineHeight="28px"
                color="black"
              >
                {card.plan}
              </Text>
              <Text mb="22px">{card.label}</Text>
            </Flex>
            <Text
              mt="22px"
              mb="25px"
              color="#64748B"
              fontSize="14px"
              lineHeight="20px"
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "40px",
                  color: "black",
                }}
              >
                ${card.price}
              </span>
              /{card.frequency === "One-time" ? "One-time" : "Month"}
            </Text>
            <ListRoot
              h="160px"
              overflow="auto"
              flexDir="column"
              gap="16px"
              mb="36px"
            >
              {card.FrequencyBenefits.map((benefit) => (
                <ListItem
                  as={Flex}
                  gap="8px"
                  alignItems="center"
                  key={benefit.label}
                  color={benefit.active ? "#10B981" : "#E2E8F0"}
                >
                  <i
                    className={`fa-solid fa-${benefit.active ? "check" : "close"}`}
                  ></i>
                  <Text mb="0" color={benefit.active ? "#64748B" : "#E2E8F0"}>
                    {benefit.label}
                  </Text>
                </ListItem>
              ))}
            </ListRoot>
            <PricingButton
              special={card.plan === "Professional"}
              content={card.buttonContent}
            />
          </Flex>
        ))}
    </Flex>
  );
};

export default PricingCards;

const PricingButton = ({
  special,
  content,
}: {
  special: boolean;
  content: string;
}) => {
  return (
    <Button
      fontSize="16px"
      fontWeight="600"
      lineHeight="24px"
      alignItems="center"
      p="12px"
      border={`1px solid ${special ? "#4F46E5" : "#E2E8F0"}`}
      borderRadius="12px"
      color={special ? "#ffff" : "black"}
      bg={special ? "#4F46E5" : "#F4F6F8"}
    >
      {content}
    </Button>
  );
};
