"use client";

import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";

type BtnType = "All" | "Creative" | "Corporate";

const TemplatesButtonContainer = () => {
  const [activeBtn, setActiveBtn] = useState<BtnType>("All");

  const buttonRefs = useRef<Record<BtnType, HTMLButtonElement | null>>({
    All: null,
    Creative: null,
    Corporate: null,
  });

  const [left, setLeft] = useState(0);

  useLayoutEffect(() => {
    const activeElement = buttonRefs.current[activeBtn];

    if (activeElement) {
      setLeft(activeElement.offsetLeft);
    }
  }, [activeBtn]);

  const buttons: BtnType[] = ["All", "Creative", "Corporate"];

  return (
    <ButtonGroup
      p="4px"
      bg="#F4F6F8"
      borderRadius="8px"
      border="1px solid #E2E8F0"
      position="relative"
    >
      <Box
        position="absolute"
        left={`${left}px`}
        top="4px"
        bg="white"
        borderRadius="6px"
        p="8px 16px"
        transition="left .15s ease"
        boxShadow="sm"
        zIndex={0}
      >
        <Text
          as="span"
          opacity="0"
          fontSize="14px"
          fontWeight="600"
          lineHeight="20px"
        >
          {activeBtn}
        </Text>
      </Box>

      {buttons.map((btn) => (
        <Button
          key={btn}
          ref={(el) => {
            buttonRefs.current[btn] = el;
          }}
          bg="transparent"
          color={activeBtn === btn ? "black" : "#64748B"}
          p="8px 16px"
          fontSize="14px"
          fontWeight="600"
          lineHeight="20px"
          borderRadius="6px"
          position="relative"
          zIndex={1}
          onClick={() => setActiveBtn(btn)}
        >
          {btn}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TemplatesButtonContainer;
